import { useMemo } from "react"
import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme"
import { ThemeProvider, CssBaseline } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material";
import  Navbar  from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard"
import Predictions from "@/scenes/predictions";

// Main app component
function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <div className="app">
      <BrowserRouter >
        <ThemeProvider theme={ theme }>
          {/* This resets all CSS */}
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>

              <Route path="/" element={<Dashboard />}/>

              <Route path="/predictions" element={<Predictions />}/>


            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
