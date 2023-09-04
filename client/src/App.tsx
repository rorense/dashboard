import { useMemo } from "react"
import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme"
import { ThemeProvider, CssBaseline } from "@mui/material"


function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <div className="app">
      <ThemeProvider theme={ theme }>
        <CssBaseline />
      </ThemeProvider>
    </div>
  )
}

export default App
