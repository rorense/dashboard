import { Box, useTheme } from '@mui/material';

function Dashboard() {
    const { palette } = useTheme();
  return (
    <Box color={ palette.grey[300]}>Dashboard</Box>
  )
}

export default Dashboard;