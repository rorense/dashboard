import DashboardBox from '@/components/DashboardBox'
import { useGetProductsQuery } from '@/state/api'
import React from 'react'


const Row2 = () => {

  const { data } = useGetProductsQuery();
  console.log("data:", data)

  return (
    <>
        <DashboardBox gridArea="d"></DashboardBox>
        <DashboardBox gridArea="e"></DashboardBox>
        <DashboardBox gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2