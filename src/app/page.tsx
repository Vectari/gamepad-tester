"use client";

import { styled } from "styled-components";
import GamepadTester from "@/Sections/GamepadTester";
import NavBar from "@/Sections/NavBar";
import { GamepadInfo } from "@/GamepadAPI/GamepadInfo";

export default function Home() {
  return (
    <>
      <NavBar />
      <GamepadInfo />
      <GamepadTester />
    </>
  );
}
