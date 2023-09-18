import { Box, useMediaQuery, useTheme } from '@mui/material';

// Setting up grid layout.
const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`

const gridtemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`


function Dashboard() {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px");
    useTheme();
  return (
    // utilising grid layout
    <Box width="100%" height="100%" display="grid" gap="1.5rem"
        sx={
          isAboveMediumScreens ? {
            // Grid template column
            gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: gridTemplateLargeScreens,
        } : {
          gridTemplateAreas: gridtemplateSmallScreens,
          gridAutoColumns: "1fr",
          gridAutoRows: "80px"
        }}>
        <Box bgcolor="white" gridArea="a"></Box>
        <Box bgcolor="white" gridArea="b"></Box>
        <Box bgcolor="white" gridArea="c"></Box>
        <Box bgcolor="white" gridArea="d"></Box>
        <Box bgcolor="white" gridArea="e"></Box>
        <Box bgcolor="white" gridArea="f"></Box>
        <Box bgcolor="white" gridArea="g"></Box>
        <Box bgcolor="white" gridArea="h"></Box>
        <Box bgcolor="white" gridArea="i"></Box>
        <Box bgcolor="white" gridArea="j"></Box>
    </Box>

  )
}

export default Dashboard;