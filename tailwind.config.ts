import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    // preflight: false
  },
  plugins: [
    require("tailwind-custom-utilities")
  ],
} satisfies Config;
