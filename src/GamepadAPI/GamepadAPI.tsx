"use client";
// navigator.getGamepads()
import { useEffect, useState } from "react";
import { atom, useAtom } from "jotai";

// function vibration() {
//   const gamepad = navigator.getGamepads()[0];
//   gamepad.vibrationActuator.playEffect("dual-rumble", {
//     startDelay: 0,
//     duration: 25,
//     weakMagnitude: 1.0,
//     strongMagnitude: 1.0,
//   });
// }

export const atomLeftX = atom(0);
export const atomLeftY = atom(0);
export const atomRightX = atom(0);
export const atomRightY = atom(0);
export const atomL3Pressed = atom(false);
export const atomR3Pressed = atom(false);
export const atomLt = atom(0);
export const atomRt = atom(0);
export const atomLbPressed = atom(false);
export const atomRbPressed = atom(false);
export const atomAPressed = atom(false);
export const atomBPressed = atom(false);
export const atomXPressed = atom(false);
export const atomYPressed = atom(false);
export const atomUpPressed = atom(false);
export const atomDownPressed = atom(false);
export const atomLeftPressed = atom(false);
export const atomRightPressed = atom(false);
export const atomSharePressed = atom(false);
export const atomOptionsPressed = atom(false);
export const atomLogoPressed = atom(false);
// export const atomTouchbarPressed = atom(false);
export const atomConnectionStatus = atom(false);
export const atomGamepadName = atom("");
export const atomButtons = atom(0);
export const atomAxes = atom(0)

export function GamepadAPI() {
  const [leftX, setLeftX] = useAtom(atomLeftX);
  const [leftY, setLeftY] = useAtom(atomLeftY);
  const [rightX, setRightX] = useAtom(atomRightX);
  const [rightY, setRightY] = useAtom(atomRightY);
  const [l3Pressed, setL3Pressed] = useAtom(atomL3Pressed);
  const [r3Pressed, setR3Pressed] = useAtom(atomR3Pressed);
  const [lt, setLT] = useAtom(atomLt);
  const [rt, setRT] = useAtom(atomRt);
  const [lbPressed, setLBPressed] = useAtom(atomLbPressed);
  const [rbPressed, setRBPressed] = useAtom(atomRbPressed);
  const [aPressed, setAPressed] = useAtom(atomAPressed);
  const [bPressed, setBPressed] = useAtom(atomBPressed);
  const [xPressed, setXPressed] = useAtom(atomXPressed);
  const [yPressed, setYPressed] = useAtom(atomYPressed);
  const [upPressed, setUPPressed] = useAtom(atomUpPressed);
  const [downPressed, setDOWNPressed] = useAtom(atomDownPressed);
  const [leftPressed, setLEFTPressed] = useAtom(atomLeftPressed);
  const [rightPressed, setRIGHTPressed] = useAtom(atomRightPressed);
  const [sharePressed, setSHAREPressed] = useAtom(atomSharePressed);
  const [optionsPressed, setOPTIONSPressed] = useAtom(atomOptionsPressed);
  const [logoPressed, setLOGOPressed] = useAtom(atomLogoPressed);
  // const [touchbarPressed, setTOUCHBARPressed] = useAtom(atomTouchbarPressed);
  const [connectionStatus, setConnectionStatus] = useAtom(atomConnectionStatus);
  const [gamepadName, setGamepadName] = useAtom(atomGamepadName);
  const [buttons, setButtons] = useAtom(atomButtons);
  const [axes, setAxes] = useAtom(atomAxes);

  useEffect(() => {
    const interval = setInterval(() => {
      const controller = navigator.getGamepads()[0];
      if (controller) {
        setLeftX(controller.axes[0]);
        setLeftY(controller.axes[1]);
        setRightX(controller.axes[2]);
        setRightY(controller.axes[3]);
        setL3Pressed(controller.buttons[10].pressed);
        setR3Pressed(controller.buttons[11].pressed);
        setLT(controller.buttons[6].value);
        setRT(controller.buttons[7].value);
        setLBPressed(controller.buttons[4].pressed);
        setRBPressed(controller.buttons[5].pressed);
        setAPressed(controller.buttons[0].pressed);
        setBPressed(controller.buttons[1].pressed);
        setXPressed(controller.buttons[2].pressed);
        setYPressed(controller.buttons[3].pressed);
        setUPPressed(controller.buttons[12].pressed);
        setDOWNPressed(controller.buttons[13].pressed);
        setLEFTPressed(controller.buttons[14].pressed);
        setRIGHTPressed(controller.buttons[15].pressed);
        setSHAREPressed(controller.buttons[8].pressed);
        setOPTIONSPressed(controller.buttons[9].pressed);
        setLOGOPressed(controller.buttons[16].pressed);
        // setTOUCHBARPressed(controller.buttons[17].pressed);
        setConnectionStatus(controller.connected);
        setGamepadName(controller.id);
        setButtons(controller.buttons.length);
        setAxes(controller.axes.length);
      }
    }, 1);
  });
  return <></>;
}
