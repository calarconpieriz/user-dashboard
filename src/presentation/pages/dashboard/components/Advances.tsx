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
import { Advance } from '../../../../domain/entities/UserAccount';

const StyledTable = styled(Table)`
  width: 100%;
`;

const AdvancesWrapper = styled.div`
  margin-top: 10px;
  width: 98%;
`;

interface Props {
  advances: Advance;
}

const Advances = ({ advances }: Props) => {
  return (
    <AdvancesWrapper>
      <CardItem>
        <Typography variant="h5" component="h2">
          Latest Advances
        </Typography>
        <TableContainer component={Paper}>
          <StyledTable aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">To be paid at</TableCell>
                <TableCell align="right">Paid at</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {advances.withdrawals.map(withdrawal => (
                <TableRow key={withdrawal.amount}>
                  <TableCell component="th" scope="row">
                    {withdrawal.type}
                  </TableCell>
                  <TableCell align="right">{withdrawal.amount}</TableCell>
                  <TableCell align="right">{withdrawal.tobePaidAt}</TableCell>
                  <TableCell align="right">{withdrawal.paidAt}</TableCell>
                  <TableCell align="right">{withdrawal.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </CardItem>
    </AdvancesWrapper>
  );
};

export default Advances;
