import React from 'react';
import { Typography } from '@material-ui/core';
import CardItem from '../../../shared/components/CardItem';
import styled from 'styled-components';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { UserAccountStructure } from '../../../../domain/entities/UserAccount';

const Icon = styled.div`
  position: absolute;
  top: 5%;
  right: 3%;
`;

const Actions = styled.div`
  position: absolute;
  bottom: 5%;
  right: 3%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15vw;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-bottom: 2vh;
  width: 35vw;
`;

const Label = styled.span`
  font-weight: 500;
`;

interface Props {
  userAccount: UserAccountStructure;
}

const Profile = ({ userAccount }: Props) => {
  return (
    <div className="profile">
      <CardItem>
        <Typography variant="h5" component="h2">
          User Profile
        </Typography>
        <Icon>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3NpnLc8Z7qj89v6Bn3DbCjHdCT8IHI_or7rQ4KBuiVGdOAAhDudcpVMs5wXHUeZLGME&usqp=CAU"
            width="50"
            height="50"
            alt="bank logo"
          />
        </Icon>
        <Actions>
          <MoreVertIcon />
        </Actions>
        <Row>
          <Container>
            <Typography color="textSecondary" gutterBottom>
              Name:
            </Typography>
            <Label>
              {userAccount.firstName} {userAccount.lastName}
            </Label>
          </Container>
          <Container>
            <Typography color="textSecondary" gutterBottom>
              Email:
            </Typography>
            <Label>{userAccount.email}</Label>
          </Container>
        </Row>
        <Row>
          <Container>
            <Typography color="textSecondary" gutterBottom>
              Company Name:
            </Typography>
            <Label>{userAccount.companyName}</Label>
          </Container>
          <Container>
            <Typography color="textSecondary" gutterBottom>
              Document Number:
            </Typography>
            <Label>{userAccount.documentNumber}</Label>
          </Container>
        </Row>
        <Row>
          <Container>
            <Typography color="textSecondary" gutterBottom>
              Phone Number:
            </Typography>
            <Label>{userAccount.phoneNumber}</Label>
          </Container>
          <Container>
            <Typography color="textSecondary" gutterBottom>
              Salary:
            </Typography>
            <Label>$ {userAccount.salary}</Label>
          </Container>
        </Row>
      </CardItem>
    </div>
  );
};

export default Profile;
