"use client";

import { Theme } from "@/app/Theme";
import { styled } from "styled-components";
import Link from "next/link";

const NavBarWrapper = styled.nav`
  background-color: #8d8c8c;
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

const StyledLink = styled.a`
  text-decoration: none;
  color: ${Theme.colors.pink};
`;

const Button = styled.button`
  background-color: #9de7a3;
  padding: 4px;
  border-radius: 5px;
  font-size: 20px;
`;

export default function NavBar() {
  return (
    <>
      <NavBarWrapper>
        <StyledLink href="/">
          Gamepad Tester
        </StyledLink>
        <ButtonWrapper>
          <Button>
            <Link href="/about">About</Link>
          </Button>
          <Button>
            <Link href="/fixinginfo">Fixing Info</Link>
          </Button>
          <Button>
            <Link href="/info">Info</Link>
          </Button>
        </ButtonWrapper>
      </NavBarWrapper>
    </>
  );
}
