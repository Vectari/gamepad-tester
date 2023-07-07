"use client";

import { styled } from "styled-components";
import GamepadTester from "@/Sections/GamepadTester";
import NavBar from "@/Sections/NavBar";

const NavBarWrapper = styled.nav`
background-color: pink;
padding: 5px;
border-radius: 0 0 5px 5px;
`;

export default function Home() {
  return (
    <>
      <NavBarWrapper>
        <NavBar />
      </NavBarWrapper>
      <GamepadTester />
    </>
  );
}
