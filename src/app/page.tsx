import { Gamepad } from "@/GamepadAPI/GamepadAPI";
import { AxesSVG } from "@/SVG/AxesSVG";
import { XboxSVG } from "@/SVG/XboxSVG";
import { PS4SVG } from "@/SVG/PS4SVG";

export default function Home() {
  return (
    <>
      <XboxSVG />
      <PS4SVG />
      <AxesSVG />
      <div className="p-24">
        <Gamepad />
      </div>
    </>
  );
}
