"use client";

import { AxesSVG } from "@/SVG/AxesSVG";
import { XboxSVG } from "@/SVG/XboxSVG";
import { PS4SVG } from "@/SVG/PS4SVG";
import { GamepadInfo } from "@/GamepadAPI/GamepadInfo";
import { GamepadAPI, atomGamepadName } from "@/GamepadAPI/GamepadAPI";
import { useAtom } from "jotai/react";

export default function Home() {
  // const [gamepadName] = useAtom(atomGamepadName);

  // if (
  //   `${gamepadName}` === `${"Xbox 360 Controller (XInput STANDARD GAMEPAD)"}`
  // ) {
  //   return (
  //     <>
  //       <div className="p-2">
  //         <XboxSVG />
  //       </div>
  //       <AxesSVG />
  //       <GamepadInfo />
  //       <GamepadAPI />
  //     </>
  //   );
  // } else if (`${gamepadName}` === "") {
  //   return (
  //     <>
  //       <AxesSVG />
  //       <GamepadInfo />
  //       <GamepadAPI />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <div className="-mt-20 p-2">
  //         <PS4SVG />
  //       </div>
  //       <AxesSVG />
  //       <GamepadInfo />
  //       <GamepadAPI />
  //     </>
  //   );
  // }

  return (
    <div className="grid grid-cols-2">
      <div className="m-2">
        <GamepadInfo />
        <AxesSVG />
      </div>
      <div className="-ml-44 mt-2">
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
