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
    <div className="flex justify-center bg-gamepad-section-background rounded-t-lg mt-4">
      <div className="mt-5">
        <div className="p-2 rounded-lg bg-gamepad-section-content shadow-lg shadow-shadow-500/50">
          <GamepadInfo />
        </div>
        <div className="p-2 mt-2 rounded-lg bg-gamepad-section-content shadow-lg shadow-shadow-500/50">
          <AxesSVG />
        </div>
      </div>
      <div className="ml-20 mt-3 rounded-lg bg-gamepad-section">
        <div className="bg-main-background p-2 m-2 rounded-lg shadow-lg shadow-shadow-500/50">
          <XboxSVG />
        </div>
        <div className="bg-main-background p-2 m-2 rounded-lg shadow-lg shadow-shadow-500/50">
          <PS4SVG />
        </div>
      </div>

      <GamepadAPI />
    </div>
  );
}
