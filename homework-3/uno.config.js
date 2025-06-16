import { defineConfig, presetWind3 } from "unocss";

export default defineConfig({
  presets: [presetWind3()],
  rules: [["output-bg", { 'background-color': "#232a45" }]],
});