import { ThemeProvider } from "styled-components";
import Global from "./styles/global";
import { defaultTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <p>Hello World</p>
      <Global />
    </ThemeProvider>
  )
}

export default App
