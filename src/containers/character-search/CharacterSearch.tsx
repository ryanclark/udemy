import React from 'react';

import { SearchBar } from '../../components/search-bar/SearchBar';
import { Character } from '../../models/Character';
import { getCharacters } from '../../services/characters/charactersService';
import { CharacterList } from '../../components/character-list/CharacterList';
import { Loading } from '../../components/loading/Loading';
import { Pagination } from '../../components/pagination/Pagination';

interface CharacterSearchState {
  characters: Character[];
  filter: string;
  loading: boolean;
  offset: number;
  total: number;
}

export class CharacterSearch extends React.Component<{}, CharacterSearchState> {
  state: CharacterSearchState = {
    characters: [],
    filter: '',
    loading: true,
    total: 0,
    offset: 0,
  };

  timeout: number;

  componentDidMount() {
    this.fetchCharacters();
  }

  private async changeFilter(filter: string) {
    // reset the offset to go back to the first page
    await this.setState({ filter, offset: 0, loading: true });

    this.debounceAndFetch();
  }

  private async changeOffset(offset: number) {
    await this.setState({ offset, loading: true });

    this.debounceAndFetch();
  }

  private debounceAndFetch() {
    clearTimeout(this.timeout);

    // debounce the change, use window.setTimeout otherwise TypeScript tries to use the Node value for setTimeout
    this.timeout = window.setTimeout(() => this.fetchCharacters(), 600);
  }

  private async fetchCharacters() {
    const { filter, offset } = this.state;

    // the Marvel API fails if nameStartsWith is empty, so we need to make it undefined when empty
    const nameStartsWith = filter.length > 0 ? filter : undefined;
    const res = await getCharacters(offset, nameStartsWith);

    this.setState({ loading: false, characters: res.data.results, total: res.data.total });
  }

  render() {
    const { characters, loading, offset, total } = this.state;

    let content = <Loading />;
    if (!loading) {
      content = (
        <React.Fragment>
          <CharacterList characters={characters} />

          <Pagination
            offset={offset}
            total={total}
            onChange={(offset) => this.changeOffset(offset)}
          />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <SearchBar
          onChange={(filter) => this.changeFilter(filter)}
        />

        { content }
      </React.Fragment>
    );
  }
}
