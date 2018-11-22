import React from 'react';
import styled from 'react-emotion';

import { CharacterSearch } from '../character-search/CharacterSearch';
import { Header } from '../../components/header/Header';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export function App() {
  return (
    <Container>
      <Header />

      <CharacterSearch />
    </Container>
  );
}
