"use client";
import { useAtom } from "jotai/react";
import {
  atomL3Pressed,
  atomLeftX,
  atomLeftY,
  atomR3Pressed,
  atomRightX,
  atomRightY,
} from "@/GamepadAPI/GamepadAPI";

export function AxesSVG() {
  const [leftX] = useAtom(atomLeftX);
  const [leftY] = useAtom(atomLeftY);
  const [rightX] = useAtom(atomRightX);
  const [rightY] = useAtom(atomRightY);
  const [l3Pressed] = useAtom(atomL3Pressed);
  const [r3Pressed] = useAtom(atomR3Pressed);

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
