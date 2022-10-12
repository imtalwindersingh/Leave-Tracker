import { Appearance } from "react-native";
// light theme
var colors = {
  BG: "yellow",
  SelectedDate: "rgb(254,135,31)",
  SelectedDateArea: "rgb(241,240, 236)",
};

const colorScheme = Appearance.getColorScheme();
if (colorScheme === "dark") {
  // dark theme
  colors = {
    BG: "black",
    SelectedDate: "rgb(254,135,31)",
    SelectedDateArea: "rgb(241,240, 236)",
  };
}
export { colors };
