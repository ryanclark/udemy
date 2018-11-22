import React from 'react';
import styled from 'react-emotion';

import { Character } from '../../models/Character';
import { CharacterUrlType } from '../../models/CharacterUrl';

interface CharacterProps {
  character: Character;
}

const Container = styled('div')`
  background: center/cover no-repeat;
  width: 300px;
  height: 380px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  margin: 0 40px 30px;
  display: flex;
  align-items: flex-end;
  position: relative;
  
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.0) 0%,
        rgba(0, 0, 0, 0.0) 60%,
        rgba(0, 0, 0, 0.2) 70%,
        rgba(0, 0, 0, 0.7)  80%,
        rgba(0, 0, 0, 0.9)  85%,
        rgba(0, 0, 0, 1.0)  90%
    );
  }
`;

const Info = styled('div')`
  padding: 20px 25px;
  position: relative;
  z-index: 2;
  color: #fff;
`;

const Name = styled('div')`
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 5px;
`;

const Link = styled('a')`
  font-size: 14px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  margin-right: 10px;
  text-decoration: underline;
`;

const Description = styled('div')`
  font-size: 12px;
  margin-bottom: 3px;
`;

function getLinkText(type: CharacterUrlType) {
  switch (type) {
    case CharacterUrlType.Comic:
      return 'Comics';
    case CharacterUrlType.Details:
      return 'Details';
    case CharacterUrlType.Wiki:
      return 'Wiki';
  }
}

export function CharacterInfo(props: CharacterProps) {
  const { comics, name, series, stories, thumbnail, urls } = props.character;

  const backgroundImage = `${thumbnail.path}.${thumbnail.extension}`;
  const description = `${comics.available} comics, ${series.available} series, ${stories.available} stories`;

  const links = urls
    .map(({ type, url }) => <Link key={type} target="_blank" href={url}>{ getLinkText(type) }</Link>);

  return (
    <Container style={ { backgroundImage: `url(${backgroundImage})` } }>
      <Info>
        <Name>{ name }</Name>
        <Description>
          { description }
        </Description>
        <div>
          { links }
        </div>
      </Info>
    </Container>
  );
}
