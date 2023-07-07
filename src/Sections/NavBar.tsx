"use client";

import { styled } from "styled-components";

const NavBarWrapper = styled.nav`
  background-color: pink;
  padding: 5px;
  border-radius: 0 0 5px 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 600px;
  margin: auto;
`;

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
    <>
      <NavBarWrapper>
        <Title>Gamepad Tester</Title>
        <ButtonWrapper>
          <Button>About</Button>
          <Button>Fixing Info</Button>
          <Button>Info</Button>
        </ButtonWrapper>
      </NavBarWrapper>
    </>
  );
}
