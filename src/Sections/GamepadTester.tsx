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

  if (
    { connectionStatus } &&
    `${gamepadName.substring(0, 19)}` === "Xbox 360 Controller"
  ) {
    return (
      <div className="flex justify-center">
        <div className="grid grid-cols-2 mt-5">
          <div className="mr-20">
            <GamepadInfo />
            <AxesSVG />
          </div>
          <div className="ml-20">
            <div>
              <XboxSVG />
            </div>
            {/* <div>
            <PS4SVG />
          </div> */}
          </div>

          <GamepadAPI />
        </div>
      </div>
    );
  } else if (`${gamepadName.substring(10, 19)}` === "Wireless Controller") {
    return (
      <div className="flex justify-center">
        <div className="grid grid-cols-2 mt-5">
          <div className="mr-20">
            <GamepadInfo />
            <AxesSVG />
          </div>
          <div className="ml-20">
            {/* <div>
            <XboxSVG />
          </div> */}
            <div>
              <PS4SVG />
            </div>
          </div>

          <GamepadAPI />
        </div>
      </div>
    );
  } else 
  // if (`${gamepadName.substring(0, 16)}` === "Wireless Gamepad") 
  {
    return (
      <div className="flex justify-center">
        <div className="grid grid-cols-2 mt-5">
          <div className="mr-20">
            <GamepadInfo />
            <AxesSVG />
          </div>
          <div className="ml-20">
            {/* <div>
            <XboxSVG />
          </div> */}
            {/* <div>
              <PS4SVG />
            </div> */}
            Other Controller
          </div>

          <GamepadAPI />
        </div>
      </div>
    );
  } 
  // else {
  //   return (<div>Gamepad not connected. Press any button...</div>);
  // }

  // return (
  //   <div className="flex justify-center">
  //     <div className="grid grid-cols-2 mt-5">
  //       <div className="mr-20">
  //         <GamepadInfo />
  //         <AxesSVG />
  //       </div>
  //       <div className="ml-20">
  //         <div>
  //           <XboxSVG />
  //         </div>
  //         {/* <div>
  //         <PS4SVG />
  //       </div> */}
  //       </div>

  //       <GamepadAPI />
  //     </div>
  //   </div>
  // );
}
