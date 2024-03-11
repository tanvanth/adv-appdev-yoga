import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'calories', label: 'calories', minWidth: 100 },
  {
    id: 'fat',
    label: 'fat',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'carbs',
    label: 'carbs',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'protein',
    label: 'protein',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

const rows = [
  createData('Gokul', 'Elders Yoga', '26-02-2024', '8.00 am', 4000),
  createData('Sriram', 'Mens Yoga', '26-02-2024', '8.00 am', 4300),
  createData('Sundar', 'Weightloss Yoga', '26-02-2024', '8.00 am', 6000),
  createData('Srihari', 'Children Yoga', '26-02-2024', '8.00 am', 4500),
  

];

const BookingHistory = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [temp,setTemp] = useState('');
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    return (
        <div >
            <h1>Booking History</h1>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', marginLeft: '0%'}}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table"> */}
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow style={{backgroundColor: 'lightgray'}}>
            <TableCell style={{minWidth: 100}}>User Email</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Yoga Course Type</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Date</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Time</TableCell>
            <TableCell align="right" style={{minWidth: 100}}>Price</TableCell>
            <TableCell align="center" style={{minWidth: 100}}>View Details</TableCell>
            <TableCell align="center" style={{minWidth: 100}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
              <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right"><Button variant="contained" color='secondary'>View Booking</Button></TableCell>
              <TableCell align="right"><Button variant="contained">Edit Booking</Button></TableCell>
            </TableRow>
          ))} */}
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      // setTemp(column.id);
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align="right"><Button variant="contained" color='secondary'>View Booking</Button></TableCell>
                <TableCell align="right"><Button variant="contained">Edit Booking</Button></TableCell>
                  </TableRow>
                );
              })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
          </div>
        </div>   
    )
}

export default BookingHistory
