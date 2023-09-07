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

const StyledGamepadSVG = styled.div`
`;

export default function GamepadTester() {
  const [gamepadName] = useAtom(atomGamepadName);
  const [connectionStatus] = useAtom(atomConnectionStatus);
  const [buttons] = useAtom(atomButtons);

  if ((buttons === 17) && (gamepadName === "Xbox 360 Controller (XInput STANDARD GAMEPAD)")) {
    return (
      <div>
        
        <StyledGamepadSVG>
        <XboxSVG />
        </StyledGamepadSVG>
        <GamepadAPI />
      </div>
    );
  } else if ((buttons === 17) && (gamepadName !== "Xbox 360 Controller (XInput STANDARD GAMEPAD)")) {
    return (
      <div>
        <h2>Other gamepad</h2>
        <GamepadAPI />
      </div>
    );
  } else if (buttons === 0) {
    return (
      <div><GamepadAPI /></div>
    )
  } else {
    return (
      <div>
        <PS4SVG />
        <GamepadAPI />
      </div>
    );
  }
}
