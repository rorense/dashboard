import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'
import React from 'react'

const Row1 = () => {
  // Importing data from KPIs.
  const { data } = useGetKpisQuery();
  console.log("data:", data)

  return (
    <>
        <DashboardBox gridArea="a"></DashboardBox>
        <DashboardBox gridArea="b"></DashboardBox>
        <DashboardBox gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1