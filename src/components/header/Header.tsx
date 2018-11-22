import React from 'react';
import styled from 'react-emotion';

import logo from './logo.svg';

const Container = styled('div')`
  display: flex;
  background: #000;
  padding: 0 40px;
  flex: 0 0 78px;
`;

const Logo = styled('div')`
  background: #F0151E url(${logo}) no-repeat;
  background-size: contain;  
  width: 200px;
  height: 78px;
`;

export function Header() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}
