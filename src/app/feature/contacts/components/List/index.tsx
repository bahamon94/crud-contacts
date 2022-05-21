import React, { useState, useEffect } from 'react';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useSelector} from "react-redux";
import {AppStore} from "../../../../core/redux/store";
import {useNavigate} from "react-router-dom";



const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'lastName', label: 'Last Name', minWidth: 170 },
  { id: 'email', label: 'E-mail', minWidth: 100 },
  { id: 'phone', label: 'Phone', minWidth: 100 },

];

export default function List () {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState([]);
  const usersState = useSelector((store: AppStore) => store.contacts);
  const navigate = useNavigate()

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  useEffect(() => {
    setRows(usersState.contacts)
  }, [usersState]);


  const handleEdit = (action,value) => {
    navigate(`/contacts/${value}/${action}`)
  }


  if (!rows.length) return (<div> No data contacts </div>)

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="center">
                          { value }
                        </TableCell>

                      );
                    })}
                    <TableCell>
                      <IconButton onClick={()=>handleEdit('edit',row.id)}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </TableCell>

                    <TableCell>
                      <IconButton onClick={()=>handleEdit('delete',row.id)}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
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
  );
};
