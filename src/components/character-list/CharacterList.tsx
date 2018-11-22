import React from 'react';
import styled from 'react-emotion';

import { Character } from '../../models/Character';
import { CharacterInfo } from '../character-info/CharacterInfo';
import { Pagination } from '../pagination/Pagination';

interface CharacterListProps {
  characters: Character[];
}

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Empty = styled('div')`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export function CharacterList(props: CharacterListProps) {
  if (props.characters.length === 0) {
    return <Empty>No results</Empty>;
  }

  return (
    <Container>
      { props.characters.map((character) => <CharacterInfo key={character.id} character={character}/>) }
    </Container>
  );
}
