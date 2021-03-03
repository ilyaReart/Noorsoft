import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyles } from "./App.style";

export default function TableComponent({
  users,
  loading,
  handleDeleteUser,
  setEditable,
}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <>
              {loading ? (
                "Loading..."
              ) : (
                <TableRow key={item._id}>
                  <TableCell component="th" scope="name">
                    <p>{item.name}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{item.age}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p>{item.email}</p>
                  </TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={handleDeleteUser(item._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => setEditable(item._id)}
                  >
                    Update
                  </Button>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
