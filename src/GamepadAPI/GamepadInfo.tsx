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
  atomTouchbarPressed,
  atomUpPressed,
  atomXPressed,
  atomYPressed,
  atomButtons,
  atomAxes,
  GamepadAPI,
} from "./GamepadAPI";
import { AxesSVG } from "@/SVG/AxesSVG";
import { Theme } from "@/app/Theme";
import GamepadTester from "@/Sections/GamepadTester";

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
  const [touchbarPressed] = useAtom(atomTouchbarPressed);
  const [connectionStatus] = useAtom(atomConnectionStatus);
  const [gamepadName] = useAtom(atomGamepadName);
  const [buttons] = useAtom(atomButtons);
  const [axes] = useAtom(atomAxes);

  let buttonsNumber = [];

  for (let i = 0; i < buttons; i++) {
    let buttonsValue = navigator?.getGamepads()[0]?.buttons[i].value;

    // `rgba(0,0,0,${lt})` : "rgb(255, 255, 255)"

    const StyledButtons = styled.div`
      background-color: ${buttonsValue! > 0 ? `rgba(0,0,0,${buttonsValue})` : `${Theme.BasicColors.white}`};
      color: ${Theme.BasicColors.darkturquoise};
      padding: 5px;
      margin: 5px;
      border-radius: 10px;
      width: 45px;
    `;
    buttonsNumber.push(<StyledButtons>B {i}</StyledButtons>);
  }

  let axesNumber = [];

  for (let i = 0; i < axes; i++) {
    let axesValue = navigator?.getGamepads()[0]?.axes;
    axesNumber.push(
      <StyledAxesInfo>
        <div>
          Axis {i}:{" "}
          {Math.abs(axesValue![i]).toFixed(3).toString().substring(0, 5)}
        </div>
      </StyledAxesInfo>
    );
  }

  if (buttons === 0) {
    return (
      <>
        <GamepadInfoWrapper>
          {axesNumber}
          {buttonsNumber}
          <StyledNotConnectedInfo>
            Please connect you gamepad via USB or BT and push any button.
            <StyledLoader />
          </StyledNotConnectedInfo>
        </GamepadInfoWrapper>
        <GamepadAPI />
      </>
    );
  } else {
    return (
      <>
        <GamepadInfoWrapper>
          {axesNumber}
          {buttonsNumber}
          <div>{<AxesSVG />}</div>
          <GamepadTester />
        </GamepadInfoWrapper>
        <GamepadAPI />
      </>
    );
  }
}

const GamepadInfoWrapper = styled.div`
  background-color: #f1e7e7;
  border-radius: 5px 5px 0 0;
  padding: 20px 40px;
  position: relative;
  /* 
    @media (min-width: 425px) {
      width: 400px;
      margin: 2px auto;
    }
    @media (min-width: 768px) {
      width: 600px;
    } */
`;

const StyledNotConnectedInfo = styled.h1``;

const StyledLoader = styled.div`
  border: 16px solid ${Theme.BasicColors.white};
  border-top: 16px solid ${Theme.BasicColors.darkturquoise};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledAxesInfo = styled.div`
  display: inline-block;
  padding-right: 15px;
  width: 100px;
`;
