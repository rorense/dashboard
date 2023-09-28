import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'
import { useTheme } from '@mui/material';
import { useMemo } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Row1 = () => {
  // Importing data from KPIs
  const { data } = useGetKpisQuery();
  const { palette } = useTheme();

  const revenueExpenses = useMemo(() => {
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

  const revenueProfit = useMemo(() => {
    return (
      data && 
        data[0].monthlyData.map(({ month, revenue, expenses }) => {
          return {
            name: month.substring(0, 3),
            revenue: revenue,
            profit: (revenue - expenses).toFixed(2),
          };
        })
    );
  }, [data]);

  return (
    <> 
        {/* First chart */}
        <DashboardBox gridArea="a">
          <BoxHeader 
            title="Revenue and Expenses"
            subtitle='top line represents revenue, bottom line represents expenses'
            sideText='+4%'
          />
          <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop 
                  offset="5%" 
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}/>
                <stop 
                  offset="95%" 
                  stopColor={palette.primary[300]}
                  stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop 
                  offset="5%" 
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}/>
                <stop 
                  offset="95%" 
                  stopColor={palette.primary[300]}
                  stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              tickLine={false} 
              style={{ fontSize: "10px"}}/>
            <YAxis 
              axisLine={{strokeWidth: "0"}} 
              tickLine={false} 
              style={{ fontSize: "10px"}}
              domain={[8000, 23000]}/>
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke={palette.primary.main} 
              dot={true}
              fillOpacity={1} 
              fill="url(#colorRevenue)"/>
            <Area 
              type="monotone" 
              dataKey="expenses" 
              dot={true}
              stroke={palette.primary.main} 
              fillOpacity={1} 
              fill="url(#colorExpenses)"/>
          </AreaChart>
        </ResponsiveContainer>
        </DashboardBox>
        
        {/* Second chart  */}
        <DashboardBox gridArea="b">
          <BoxHeader 
            title="Profit and Revenue"
            subtitle='top line represents revenue, bottom line represents expenses'
            sideText='+4%'
          />
          <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={revenueProfit}
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
            <Legend 
              height={20} 
              wrapperStyle={{
                margin: '0 0 10px 0'
              }}/>
            <Line 
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
              />
            <Line 
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
              />
          </LineChart>
          </ResponsiveContainer>
        </DashboardBox>

        {/* Chart 3 */}
        <DashboardBox gridArea="c">
          <BoxHeader 
            title="Revenue Month by Month"
            subtitle='top line represents revenue, bottom line represents expenses'
            sideText='+4%'
          />  
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </DashboardBox>
    </>
  )
}

export default Row1