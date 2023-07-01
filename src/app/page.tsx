import { AxesSVG } from "@/SVG/AxesSVG";
import { XboxSVG } from "@/SVG/XboxSVG";
import { PS4SVG } from "@/SVG/PS4SVG";
import { GamepadInfo } from "@/GamepadAPI/GamepadInfo";
import { GamepadAPI } from "@/GamepadAPI/GamepadAPI";

export default function Home() {
  return (
    <>
      {/* <XboxSVG /> */}
      {/* <PS4SVG /> */}
      <AxesSVG />
      <GamepadInfo />
      <GamepadAPI />
    </>
  );
}
