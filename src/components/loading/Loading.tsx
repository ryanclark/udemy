import React from 'react';
import styled from 'react-emotion';

import { keyframes } from 'emotion';

const animation = keyframes`
  0 {transform: translate(0, -10px);}
  50% {transform: translate(0, 10px);}
  100% {transform: translate(0, -10px);}
`;

const Container = styled('div')`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LineContainer = styled('div')`
  display: flex;
  flex: 0 0 auto;
  background: rgba(0, 0, 0, 0.05);
  height: 100px;
  width: 100px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

const Line = styled('div')`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 5px;
  transform: translate(0, -10px);
`;

const Line1 = styled(Line)`
  animation: ${animation} .6s .1s linear infinite;
`;

const Line2 = styled(Line)`
  animation: ${animation} .6s .2s linear infinite;;
`;

const Line3 = styled(Line)`
  animation: ${animation} .6s .3s linear infinite;
`;

export function Loading() {
  return (
    <Container>
      <LineContainer>
        <Line1 />
        <Line2 />
        <Line3 />
      </LineContainer>
    </Container>
  );
}
