import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/defaultTheme"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes/router"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
