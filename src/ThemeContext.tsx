import { createContext } from "react";
import { string } from "prop-types";

const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  () => {}
]);

export default ThemeContext;
