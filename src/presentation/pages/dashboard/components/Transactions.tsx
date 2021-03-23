import React from 'react';
import CardItem from '../../../shared/components/CardItem';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { Withdrawal } from '../../../../domain/entities/UserAccount';

const StyledTable = styled(Table)`
  width: 100%;
`;

const TransactionsWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
`;

interface Props {
  withdrawals: Withdrawal[];
}

const Transactions = ({ withdrawals }: Props) => {
  return (
    <TransactionsWrapper>
      <CardItem>
        <Typography variant="h5" component="h2">
          Latest Withdrawals
        </Typography>
        <TableContainer component={Paper}>
          <StyledTable aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Created at</TableCell>
                <TableCell align="right">Paid At</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {withdrawals.map(withdrawal => (
                <TableRow key={withdrawal.type}>
                  <TableCell component="th" scope="row">
                    {withdrawal.type}
                  </TableCell>
                  <TableCell align="right">{withdrawal.amount}</TableCell>
                  <TableCell align="right">{withdrawal.createdAt}</TableCell>
                  <TableCell align="right">{withdrawal.paidAt}</TableCell>
                  <TableCell align="right">{withdrawal.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </CardItem>
    </TransactionsWrapper>
  );
};

export default Transactions;
