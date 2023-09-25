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
import { css } from "styled-components";
import { useState } from "react";

// STYLES SECTION

const NotConnectedWrapper = styled.div`
  background-color: ${Theme.BasicColors.panelBackground};
  padding: 30px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
`;

const ConnectedWrapper = styled.div`
  background-color: ${Theme.BasicColors.panelBackground};
  padding: 30px;
  border-radius: 10px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const AxesAndButtonsWrapper = styled.div``;

const AxesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin: 70px 0 0 10px;
`;

const SvgWrapper = styled.div`
  text-align: center;
`;

const GamepadName = styled.p`
  background-color: ${Theme.BasicColors.white};
  color: ${Theme.BasicColors.black};
  margin: 15px 0;
  padding: 5px;
  border-radius: 10px;
`;

// GAMEPAD API SECTION

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

  // BUTTONS SECTION

  let buttonsNumber = [];
  for (let i = 0; i < buttons; i++) {
    let buttonsValue = navigator?.getGamepads()[0]?.buttons[i].value;

    // STYLE FOR BUTTONS
    const StyledButtons = styled.div`
      background-color: ${buttonsValue! > 0
        ? `rgba(0,0,0,${buttonsValue})`
        : `${Theme.BasicColors.white}`};
      /* color: ${Theme.BasicColors.black}; */
      color: ${buttonsValue! > 0.4
        ? `${Theme.BasicColors.white}`
        : `rgba(0,0,0)`};
      padding: 10px;
      margin: 5px;
      border-radius: 10px;
      width: 55px;
    `;
    buttonsNumber.push(<StyledButtons>B {i}</StyledButtons>);
  }

  
  // AXES SECTION

  let axesNumber = [];
  for (let i = 0; i < axes; i++) {
    let axesValue = navigator?.getGamepads()[0]?.axes;
    let renderedAxesValue = Math.abs(axesValue![i])
      .toFixed(3)
      .toString()
      .substring(0, 5);

    // STYLE FOR AXES
    const StyledAxes = styled.div`
      background-color: ${Theme.BasicColors.white};
      color: ${Theme.BasicColors.black};
      padding: 10px;
      margin: 5px;
      border-radius: 10px;
      width: 70px;
    `;

    axesNumber.push(
      <StyledAxes>
        Axis {i}: {renderedAxesValue}
        {/* {Math.abs(axesValue![i]) >= 0.15 ? <div className="error">error</div> : <div className="ok">ok</div>} */}
      </StyledAxes>
    );
  }

  // HISTORY SECTION

  // let historyButtons = [];

  // for (let i = 0; i < buttons; i++) {
  //   let buttonsValue = navigator?.getGamepads()[0]?.buttons[i].value;
  //   if (navigator?.getGamepads()[0]?.buttons[i].value === 1)
  //   historyButtons.push(<div>B {i}</div>);
  // };

  // RENDER SECTION

  if (buttons === 0) {
    return (
      <NotConnectedWrapper>
        Please connect you gamepad via USB or BT and push any button.
        <GamepadAPI />
      </NotConnectedWrapper>
    );
  } else {
    return (
      <ConnectedWrapper>
        <AxesAndButtonsWrapper>
          <AxesWrapper>{axesNumber}</AxesWrapper>
          <ButtonsWrapper>{buttonsNumber}</ButtonsWrapper>
        </AxesAndButtonsWrapper>
        <SvgWrapper>
          <AxesSVG />
          <GamepadName>{navigator?.getGamepads()[0]?.id}</GamepadName>
          <GamepadTester />
        </SvgWrapper>
        <GamepadAPI />
      </ConnectedWrapper>
    );
  }
}
