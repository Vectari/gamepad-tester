"use client";

import { styled } from "styled-components";
import Link from "next/link";

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
  padding-top: 5px;
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
        <Title><Link href="/">Gamepad Tester</Link></Title>
        <ButtonWrapper>
          <Button><Link href="/about">About</Link></Button>
          <Button><Link href="/fixinginfo">Fixing Info</Link></Button>
          <Button><Link href="/info">Info</Link></Button>
        </ButtonWrapper>
      </NavBarWrapper>
    </>
  );
}
