/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/GamepadAPI/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/SVG/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
    },
    colors: {
      "main-background": "#ffffff",
      "gamepad-line": "#000000",
      "nav-bar": "#212A3E",
      "nav-bar-content": "#9BA4B5",
      "gamepad-section-background": "#9DB2BF",
      "gamepad-section-content": "#F1F6F9",
      "gamepad-section-controller": "ffffff",
      "shadow": "#000000",
    },
  },
  plugins: [],
};
