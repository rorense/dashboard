import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'
import { useTheme } from '@mui/material';
import { useMemo } from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';

const Row2 = () => {

  const { data } = useGetKpisQuery();
  const { palette } = useTheme();
  
  const operationalExpenses = useMemo(() => {
    return (
      data && 
        data[0].monthlyData.map(({ month, revenue, expenses }) => {
          return {
            name: month.substring(0, 3),
            revenue: revenue,
            expenses: expenses,
          }
        })
    );
  }, [data]);

  return (
    <>  
        {/* First chart */}
        <DashboardBox gridArea="d">
        <BoxHeader 
            title="Operational vs Non-Operational Expenses"
            sideText='+4%'
          />
          <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis 
              dataKey="name" 
              tickLine={false} 
              style={{ fontSize: "10px" }}/>
            <YAxis 
              yAxisId="left"
              orientation='left'
              axisLine={false} 
              tickLine={false} 
              style={{ fontSize: "10px" }} />
            <YAxis 
              yAxisId="right"
              orientation='right'
              axisLine={false} 
              tickLine={false} 
              style={{ fontSize: "10px"}} />
            <Tooltip />

            <Line 
              yAxisId="left"
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke={palette.tertiary[500]}
              />
            <Line 
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary.main}
              />
          </LineChart>
          </ResponsiveContainer>
        </DashboardBox>


        <DashboardBox gridArea="e"></DashboardBox>
        <DashboardBox gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2