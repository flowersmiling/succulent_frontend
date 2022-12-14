import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Button, Paper, Box, Toolbar } from '@mui/material';
import { DELETE_MY_PAYMENT, GET_CUSTOMER } from "../../mutations/userMutations";
import { GET_ME } from '../../queries/customerQueries';
import { useMutation, useQuery } from '@apollo/client';
import EditIcon from '@mui/icons-material/Edit';
import Title from 'pages/AdminHomePage/components/Title';
import { motion } from 'framer-motion';
import { lineSelectedVariants, staggerVariants } from 'assets/config/animationVariants';

import DeleteIcon from "@mui/icons-material/Delete";

// function createData(OrderNumber, Date, ShippingAddress, Total, View) {
//   return { OrderNumber, Date, ShippingAddress, Total, View};
// }
//dummy data
// const rows = [
//   createData('4757657', '05/11/2020', '123 Main St', '$147.57', <Button variant="contained" sx={ { borderRadius: 28, backgroundColor:'#ffb2cc' } }>View</Button>
//   ),
//   createData('4757657', '05/12/2020', '123 Center St', '$78.57', <Button variant="contained" sx={ { borderRadius: 28, backgroundColor:'#ffb2cc' } }>View</Button>),

// ];

export default function DenseTable() {
  const { loading, error, data } = useQuery(GET_ME);

  const [deleteMyPayment, { data: deleted }] = useMutation(DELETE_MY_PAYMENT)


  return (
    <Box>
      <TableCell>
        <Title>Credit Card</Title>
      </TableCell>
      {deleted === true ? <Typography>No Payment Method is added</Typography> : (
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableBody component={motion.div} variants={staggerVariants} initial="start" animate="end">
              <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <TableCell>
                  Card Number
                </TableCell>
                <TableCell>
                  {data.me.creditCards[0].cardNo}
                </TableCell>
              </TableRow>

              <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <TableCell>
                  Holder Name
                </TableCell>
                <TableCell>
                  {data.me.creditCards[0].holderName}
                </TableCell>
              </TableRow>

              <TableRow component={motion.div} variants={lineSelectedVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <TableCell>
                  Expiration Date
                </TableCell>
                <TableCell>
                  {data.me.creditCards[0].expirationDate}
                </TableCell>
                <TableCell>
                  <Button onClick={deleteMyPayment(data.me.creditCards[0].id)}>
                    <DeleteIcon color='error' />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>)}
    </Box>
  );
}