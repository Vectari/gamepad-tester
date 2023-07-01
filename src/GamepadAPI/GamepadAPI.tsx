"use client";
// navigator.getGamepads()
import { useEffect, useState } from "react";

// function vibration() {
//   const gamepad = navigator.getGamepads()[0];
//   gamepad.vibrationActuator.playEffect("dual-rumble", {
//     startDelay: 0,
//     duration: 100,
//     weakMagnitude: 1.0,
//     strongMagnitude: 1.0,
//   });
// }

export function Gamepad() {
  const [leftX, setLeftX] = useState(0);
  const [leftY, setLeftY] = useState(0);
  const [rightX, setRightX] = useState(0);
  const [rightY, setRightY] = useState(0);
  const [l3Pressed, setL3Pressed] = useState(false);
  const [r3Pressed, setR3Pressed] = useState(false);
  const [lt, setLT] = useState(0);
  const [rt, setRT] = useState(0);
  const [lbPressed, setLBPressed] = useState(false);
  const [rbPressed, setRBPressed] = useState(false);
  const [aPressed, setAPressed] = useState(false);
  const [bPressed, setBPressed] = useState(false);
  const [xPressed, setXPressed] = useState(false);
  const [yPressed, setYPressed] = useState(false);
  const [upPressed, setUPPressed] = useState(false);
  const [downPressed, setDOWNPressed] = useState(false);
  const [leftPressed, setLEFTPressed] = useState(false);
  const [rightPressed, setRIGHTPressed] = useState(false);
  const [sharePressed, setSHAREPressed] = useState(false);
  const [optionsPressed, setOPTIONSPressed] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [gamepadName, setGamepadName] = useState("");

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
        setConnectionStatus(controller.connected);
        setGamepadName(controller.id);
      }
    }, 1);
  }, []);

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
      <div>
        A{aPressed && " OK"}
        <svg width="40" height="40">
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="pink"
            stroke-width="4"
            fill={aPressed ? "yellow" : "none"}
          />
        </svg>
      </div>
      <div>
        B{bPressed && " OK"}
        <svg width="40" height="40">
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="pink"
            stroke-width="4"
            fill={bPressed ? "yellow" : "none"}
          />
        </svg>
      </div>
      <div>
        X{xPressed && " OK"}
        <svg width="40" height="40">
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="pink"
            stroke-width="4"
            fill={xPressed ? "yellow" : "none"}
          />
        </svg>
      </div>
      <div>
        Y{yPressed && " OK"}
        <svg width="40" height="40">
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="pink"
            stroke-width="4"
            fill={yPressed ? "yellow" : "none"}
          />
        </svg>
      </div>
      <div>UP{upPressed && " OK"}</div>
      <div>DOWN{downPressed && " OK"}</div>
      <div>LEFT{leftPressed && " OK"}</div>
      <div>RIGHT{rightPressed && " OK"}</div>
      <div>Share{sharePressed && " OK"}</div>
      <div>Options{optionsPressed && " OK"}</div>
    </>
  );
}
