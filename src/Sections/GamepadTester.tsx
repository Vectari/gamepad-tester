"use client";

import { AxesSVG } from "@/SVG/AxesSVG";
import { XboxSVG } from "@/SVG/XboxSVG";
import { PS4SVG } from "@/SVG/PS4SVG";
import { GamepadInfo } from "@/GamepadAPI/GamepadInfo";
import {
  GamepadAPI,
  atomConnectionStatus,
  atomGamepadName,
} from "@/GamepadAPI/GamepadAPI";
import { useAtom } from "jotai/react";

export default function GamepadTester() {
  const [gamepadName] = useAtom(atomGamepadName);
  const [connectionStatus] = useAtom(atomConnectionStatus);

  return (
    <div>
      <div>
        <div>
          <GamepadInfo />
          <AxesSVG />
        </div>
      </div>
      <div>
        <div>
          <XboxSVG />
        </div>
        <div>
          <PS4SVG />
        </div>
      </div>

      <GamepadAPI />
    </div>
  );
}
