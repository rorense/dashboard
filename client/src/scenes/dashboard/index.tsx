import { Box, useTheme } from '@mui/material';

// Setting up grid layout.
const gridTemplate = `
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

function Dashboard() {
    useTheme();
  return (
    // utilising grid layout
    <Box width="100%" height="100%" display="grid" gap="1.5rem"
        sx={{
            // Grid template column
            gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: gridTemplate,
        }}>
        <Box gridArea="a"></Box>
        <Box gridArea="b"></Box>
        <Box gridArea="c"></Box>
        <Box gridArea="d"></Box>
        <Box gridArea="e"></Box>
        <Box gridArea="f"></Box>
        <Box gridArea="g"></Box>
        <Box gridArea="h"></Box>
        <Box gridArea="i"></Box>
        <Box gridArea="j"></Box>
    </Box>

  )
}

export default Dashboard;