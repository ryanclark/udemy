import React from 'react';

import { RESULTS_PER_PAGE } from '../../services/characters/charactersService';
import styled from 'react-emotion';

interface PaginationProps {
  offset: number;
  total: number;
  onChange: (offset: number) => void;
}

const Container = styled('div')`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

export const Button = styled('div')`
  color: #fff;
  background-color: #ec5252;
  padding: 11px 12px;
  font-size: 15px;
  border-radius: 6px;
  cursor: pointer;
  margin: 0 10px;
`;

export function Pagination(props: PaginationProps) {
  const links = [];

  // only show the back button if we've gone past the initial shown characters
  if (props.offset >= RESULTS_PER_PAGE) {
    links.push(
      <Button
        key="previous"
        onClick={() => props.onChange(props.offset - RESULTS_PER_PAGE)}
      >
        Previous
      </Button>
    );
  }

  // only show the next button if there are more results left
  if ((props.total - props.offset) > RESULTS_PER_PAGE) {
    links.push(
      <Button
        key="next"
        onClick={() => props.onChange(props.offset + RESULTS_PER_PAGE)}
      >
        Next
      </Button>
    );
  }

  return (
    <Container>
      { links }
    </Container>
  );
}
