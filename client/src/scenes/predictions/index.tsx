import DashboardBox from '@/components/DashboardBox';
import FlexBetween from '@/components/Flexbetween';
import { useGetKpisQuery } from '@/state/api';
import { Box, Typography, useTheme } from '@mui/material'
import  { useState } from 'react'

function Predictions() {

  const { palette } =useTheme()
  const [isPrediction, setIsPrediction] = useState(false);
  const { data: kpiData } = useGetKpisQuery();


  return (
    <DashboardBox
      width="100%"
      height="100%"
      p="1rem"
      overflow="hidden">
        <FlexBetween m="1rem 2.5rem">
          <Box>
            <Typography variant='h3'>Revenue and Predictions</Typography>
            <Typography variant='h6'>Charted revenue and predicted revenue based on a simple linear regression model</Typography>
          </Box>
        </FlexBetween>
    </DashboardBox>
  )
}

export default Predictions