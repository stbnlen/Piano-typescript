import React from 'react';
import styled from 'styled-components';

const Black = styled.button`
  width: 40px;
  height: 130px;
  background: #000;
  position: absolute;
  margin: 1px;
  margin-left: -20px;

  :active {
    background: #333;
  }
`;

const White = styled.button`
  width: 60px;
  height: 200px;
  background: #fff;
  border: 1px solid #000;
  box-shadow: 2px 5px;
  margin: 1px;

  :active {
    background: #eee;
  }
`;

type Props = {
  color: string;
  note: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Note: React.FC<Props> = ({ color, note, clickHandler }) =>
  color === 'white' ? (
    <White value={note} onClick={clickHandler} />
  ) : (
    <Black value={note} onClick={clickHandler} />
  );
