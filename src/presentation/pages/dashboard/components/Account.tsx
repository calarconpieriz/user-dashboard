import React from 'react';
import { Typography } from '@material-ui/core';
import CardItem from '../../../shared/components/CardItem';
import styled from 'styled-components';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { UserAccountStructure } from '../../../../domain/entities/UserAccount';

const Logo = styled.div`
  position: absolute;
  top: 5%;
  right: 3%;
`;
const Actions = styled.div`
  position: absolute;
  bottom: 5%;
  right: 3%;
`;

const AccountWrapper = styled.div`
  width: 50%;
`;

interface Props {
  userAccount: UserAccountStructure;
}

const Account = ({ userAccount }: Props) => {
  return (
    <AccountWrapper>
      <CardItem>
        <Typography color="textSecondary" gutterBottom>
          Main account
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {userAccount.bank?.accountNumber}
        </Typography>
        <Logo>
          <img
            src="https://www.freepnglogos.com/uploads/bank-of-america-png-logo/bank-of-america-logo-png-symbol-0.png"
            width="50"
            height="30"
            alt="bank logo"
          />
        </Logo>
        <Actions>
          <MoreVertIcon />
        </Actions>
        <Typography variant="h5" component="h2">
          {userAccount.bank?.name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Available balance:
        </Typography>
        <Typography variant="h4" component="h3">
          ${userAccount.bank?.balance}
        </Typography>
      </CardItem>
    </AccountWrapper>
  );
};

export default Account;
