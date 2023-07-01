"use client";

import { useAtom } from "jotai/react";
import {
  atomAPressed,
  atomBPressed,
  atomConnectionStatus,
  atomDownPressed,
  atomGamepadName,
  atomL3Pressed,
  atomLbPressed,
  atomLeftPressed,
  atomLeftX,
  atomLeftY,
  atomLt,
  atomOptionsPressed,
  atomR3Pressed,
  atomRbPressed,
  atomRightPressed,
  atomRightX,
  atomRightY,
  atomRt,
  atomSharePressed,
  atomUpPressed,
  atomXPressed,
  atomYPressed,
} from "./GamepadAPI";

export function GamepadInfo() {
  const [leftX] = useAtom(atomLeftX);
  const [leftY] = useAtom(atomLeftY);
  const [rightX] = useAtom(atomRightX);
  const [rightY] = useAtom(atomRightY);
  const [l3Pressed] = useAtom(atomL3Pressed);
  const [r3Pressed] = useAtom(atomR3Pressed);
  const [lt] = useAtom(atomLt);
  const [rt] = useAtom(atomRt);
  const [lbPressed] = useAtom(atomLbPressed);
  const [rbPressed] = useAtom(atomRbPressed);
  const [aPressed] = useAtom(atomAPressed);
  const [bPressed] = useAtom(atomBPressed);
  const [xPressed] = useAtom(atomXPressed);
  const [yPressed] = useAtom(atomYPressed);
  const [upPressed] = useAtom(atomUpPressed);
  const [downPressed] = useAtom(atomDownPressed);
  const [leftPressed] = useAtom(atomLeftPressed);
  const [rightPressed] = useAtom(atomRightPressed);
  const [sharePressed] = useAtom(atomSharePressed);
  const [optionsPressed] = useAtom(atomOptionsPressed);
  const [connectionStatus] = useAtom(atomConnectionStatus);
  const [gamepadName] = useAtom(atomGamepadName);

  return (
    <>
      <div>
        STATUS:{" "}
        {connectionStatus
          ? `OK - ${gamepadName}`
          : "Gamepad not connected. Press any button..."}
      </div>
      {/* <button onClick={vibration()}>VIBRATION</button> */}
      <div>LeftX {leftX}</div>
      <div>LeftY {leftY}</div>
      <div>RightX {rightX}</div>
      <div>RightY {rightY}</div>
      <div>L3{l3Pressed && " OK"}</div>
      <div>R3{r3Pressed && " OK"}</div>
      <div>LT {lt}</div>
      <div>RT {rt}</div>
      <div>LB{lbPressed && " OK"}</div>
      <div>RB{rbPressed && " OK"}</div>
      <div>A{aPressed && " OK"}</div>
      <div>B{bPressed && " OK"}</div>
      <div>X{xPressed && " OK"}</div>
      <div>Y{yPressed && " OK"}</div>
      <div>UP{upPressed && " OK"}</div>
      <div>DOWN{downPressed && " OK"}</div>
      <div>LEFT{leftPressed && " OK"}</div>
      <div>RIGHT{rightPressed && " OK"}</div>
      <div>Share{sharePressed && " OK"}</div>
      <div>Options{optionsPressed && " OK"}</div>
    </>
  );
}
