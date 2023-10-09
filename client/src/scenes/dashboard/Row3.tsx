import BoxHeader from '@/components/BoxHeader';
import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api'
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';

function Row3() {
  const { palette } = useTheme();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  const { data: kpiData } = useGetKpisQuery();

  const productColumns = [
    {
      field: "_id",
      headername: "id",
      flex: 1,
    },
    {
      field: "expense",
      headername: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headername: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ]

  const transactionColumns = [
    {
      field: "_id",
      headername: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headername: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headername: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "productIds",
      headername: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) => (params.value as Array<string>).length,
    },
  ]

  return (
    <>
    {/* First Chart*/}
      <DashboardBox gridArea="g">
        <BoxHeader title="List of Products" sideText={`${productData?.length} products`}/>
        <Box 
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}>
          <DataGrid 
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            columns={productColumns} 
            rows={productData || [] } />
        </Box>
      </DashboardBox>
      
      {/* Second chart */}
      <DashboardBox gridArea="h">
      <BoxHeader title="Recent Orders" sideText={`${transactionData?.length} latest orders`}/>
        <Box 
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}>
          <DataGrid 
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            columns={transactionColumns} 
            rows={ transactionData|| [] } />
        </Box>
      </DashboardBox>

      <DashboardBox gridArea="i"></DashboardBox>

      <DashboardBox gridArea="j"></DashboardBox>
    </>
  )
}

export default Row3