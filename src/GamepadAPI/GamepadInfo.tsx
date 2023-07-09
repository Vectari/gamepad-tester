"use client";

import { styled } from "styled-components";
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
  atomLogoPressed,
  atomLt,
  atomOptionsPressed,
  atomR3Pressed,
  atomRbPressed,
  atomRightPressed,
  atomRightX,
  atomRightY,
  atomRt,
  atomSharePressed,
  // atomTouchbarPressed,
  atomUpPressed,
  atomXPressed,
  atomYPressed,
  atomButtons,
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
  const [logoPressed] = useAtom(atomLogoPressed);
  // const [touchbarPressed] = useAtom(atomTouchbarPressed);
  const [connectionStatus] = useAtom(atomConnectionStatus);
  const [gamepadName] = useAtom(atomGamepadName);
  const [buttons] = useAtom(atomButtons);

  const GamepadInfoWrapper = styled.div`
    background-color: aqua;
    border-radius: 5px 5px 0 0;
    margin-top: 2px;
    padding: 5px;
    display: grid;
  `;

  let buttonsNumber = [];

  // for (let i=0; i < buttons; i++) {
  //   buttonsNumber.push(<div>B{i}: {navigator.getGamepads()[0].buttons[i].value && `${navigator.getGamepads()[0].buttons[i].value}`}</div>)
  // }

  // <svg width="10px" height={lt * 50}>
  //           <rect
  //             width="10px"
  //             height="50px"
  //             fill={lt == 1 ? "green" : "red"}
  //           ></rect>
  //         </svg>

  

  for (let i=0; i < buttons; i++) {
    let bValue = navigator?.getGamepads()[0]?.buttons[i].value
    buttonsNumber.push(<div>B{i}: {<svg width="10px" height={bValue! * 50}>
    <rect
      width="10px"
      height="50px"
      fill={bValue == 1 ? "green" : "red"}
    ></rect>
  </svg>}</div>)
  }

  

  return (
    <>
      {/* <GamepadInfoWrapper>
        STATUS:{" "}
        {connectionStatus
          ? `OK - ${gamepadName.substring(0, 19)}`
          : "Press any button..."}
        <div>LeftX {leftX.toString().substring(0, 6)}</div>
        <div>LeftY {leftY.toString().substring(0, 6)}</div>
        <div>RightX {rightX.toString().substring(0, 6)}</div>
        <div>RightY {rightY.toString().substring(0, 6)}</div>
        <div>
          A
          
        </div>
        <div>B{bPressed && " OK"}</div>
        <div>X{xPressed && " OK"}</div>
        <div>Y{yPressed && " OK"}</div>
        <div>LB{lbPressed && " OK"}</div>
        <div>RB{rbPressed && " OK"}</div>
        <div>LT <svg width="10px" height={lt * 50}>
            <rect
              width="10px"
              height="50px"
              fill={lt == 1 ? "green" : "red"}
            ></rect>
          </svg>{lt.toString().substring(0, 6)}</div>
        <div>RT {rt.toString().substring(0, 6)}</div>
        <div>Share{sharePressed && " OK"}</div>
        <div>Options{optionsPressed && " OK"}</div>
        <div>L3{l3Pressed && " OK"}</div>
        <div>R3{r3Pressed && " OK"}</div>
        <div>UP{upPressed && " OK"}</div>
        <div>RIGHT{rightPressed && " OK"}</div>
        <div>DOWN{downPressed && " OK"}</div>
        <div>LEFT{leftPressed && " OK"}</div>
        <div>Logo{logoPressed && "OK"}</div>
        {/* <div>TOUCHBAR{touchbarPressed && "OK"}</div> 
      </GamepadInfoWrapper> */}
      <GamepadInfoWrapper>
        
       {buttonsNumber}
      </GamepadInfoWrapper>
    </>
  );
}
