"use client";

import { AxesSVG } from "@/SVG/AxesSVG";
import { XboxSVG } from "@/SVG/XboxSVG";
import { PS4SVG } from "@/SVG/PS4SVG";
import { GamepadInfo } from "@/GamepadAPI/GamepadInfo";
import { GamepadAPI, atomGamepadName } from "@/GamepadAPI/GamepadAPI";
import { useAtom } from "jotai/react";

export default function Home() {
  // const [gamepadName] = useAtom(atomGamepadName);

  // if (`${gamepadName}` === `${"Xbox 360 Controller (XInput STANDARD GAMEPAD)"}`) {
  //    return <XboxSVG />
  // } else {
  //   <PS4SVG />
  // }

  return (
    <>
      <XboxSVG />
      <PS4SVG />
      <AxesSVG />
      <GamepadInfo />
      <GamepadAPI />
    </>
  );
}
