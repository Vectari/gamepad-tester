"use client";

import { styled } from "styled-components";

const Title = styled.h1`
  color: red;
`;

const Button = styled.button`
  background-color: yellow;
  padding: 4px;
  border-radius: 5px;
  font-size: 20px;
`;

export default function NavBar() {
  return (
    <div>
      <Title>Gamepad Tester</Title>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
      <Button>Button 5</Button>
    </div>
  );
}
