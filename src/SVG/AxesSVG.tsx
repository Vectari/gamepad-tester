"use client";
import { useState, useEffect } from "react";

export function AxesSVG() {
  const [leftX, setLeftX] = useState(0);
  const [leftY, setLeftY] = useState(0);
  const [rightX, setRightX] = useState(0);
  const [rightY, setRightY] = useState(0);
  const [l3Pressed, setL3Pressed] = useState(false);
  const [r3Pressed, setR3Pressed] = useState(false);

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
      }
    }, 1);
  }, []);

  return (
    <>
      <svg height="157" width="335">
        <g transform="translate(78.5 78.5) scale(0.95, 0.95)">
          <circle
            cx="0"
            cy="0"
            r="78.5"
            fill="none"
            stroke="white"
            stroke-width="1"
          ></circle>
          <line
            x1="0"
            y1="-78.5"
            x2="0"
            y2="78.5"
            stroke="hsla(210,90%,20%,0.2)"
            stroke-width={l3Pressed ? "8" : "1"}
          ></line>
          <line
            x1="-78.5"
            y1="0"
            x2="78.5"
            y2="0"
            stroke="hsla(210,90%,20%,0.2)"
            stroke-width={l3Pressed ? "8" : "1"}
          ></line>
          <line
            x1={leftX * 78.5}
            y1={leftY * 78.5}
            // x2="1.8410696387290955"
            // y2="0.9810244739055634"
            stroke="hsl(210,90%,20%)"
            stroke-width="1"
          ></line>
          <circle
            cx={leftX * 78.5}
            cy={leftY * 78.5}
            r="4"
            fill="hsl(210,90%,20%)"
          ></circle>
        </g>
        <g transform="translate(258.5 78.5) scale(0.95, 0.95)">
          <circle
            cx="0"
            cy="0"
            r="78.5"
            fill="none"
            stroke="white"
            stroke-width="1"
          ></circle>
          <line
            x1="0"
            y1="-78.5"
            x2="0"
            y2="78.5"
            stroke="hsla(210,90%,20%,0.2)"
            stroke-width={r3Pressed ? "8" : "1"}
          ></line>
          <line
            x1="-78.5"
            y1="0"
            x2="78.5"
            y2="0"
            stroke="hsla(210,90%,20%,0.2)"
            stroke-width={r3Pressed ? "8" : "1"}
          ></line>
          <line
            x1={rightX * 78.5}
            y1={rightY * 78.5}
            // x2="1.8410696387290955"
            // y2="0.9810244739055634"
            stroke="hsl(210,90%,20%)"
            stroke-width="1"
          ></line>
          <circle
            cx={rightX * 78.5}
            cy={rightY * 78.5}
            r="4"
            fill="hsl(210,90%,20%)"
          ></circle>
        </g>
      </svg>
    </>
  );
}
