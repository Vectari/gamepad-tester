"use client";

import { styled } from "styled-components";
import { AxesSVG } from "@/SVG/AxesSVG";
import { XboxSVG } from "@/SVG/XboxSVG";
import { PS4SVG } from "@/SVG/PS4SVG";
import { GamepadInfo } from "@/GamepadAPI/GamepadInfo";
import {
  GamepadAPI,
  atomConnectionStatus,
  atomGamepadName,
  atomButtons,
} from "@/GamepadAPI/GamepadAPI";
import { useAtom } from "jotai/react";

const StyledDiv = styled.div`
//SOMETHING HERE TO NOT MAKE BIGGER GAMEPADINFO SECTION AFTER RENDER
`;

export default function GamepadTester() {
  const [gamepadName] = useAtom(atomGamepadName);
  const [connectionStatus] = useAtom(atomConnectionStatus);
  const [buttons] = useAtom(atomButtons);

  if (
    buttons === 17
    //  &&
    // gamepadName === "Xbox 360 Controller (XInput STANDARD GAMEPAD)"
  ) {
    return (
      <StyledDiv>
        <XboxSVG />
        <GamepadAPI />
      </StyledDiv>
    );
  } else if (
    buttons === 17 &&
    gamepadName !== "Xbox 360 Controller (XInput STANDARD GAMEPAD)"
  ) {
    return (
      <StyledDiv>
        <h2>Other gamepad</h2>
        <GamepadAPI />
      </StyledDiv>
    );
  } else if (buttons === 0) {
    return (
      <StyledDiv>
        <GamepadAPI />
      </StyledDiv>
    );
  } else {
    return (
      <StyledDiv>
        <PS4SVG />
        <GamepadAPI />
      </StyledDiv>
    );
  }
}
