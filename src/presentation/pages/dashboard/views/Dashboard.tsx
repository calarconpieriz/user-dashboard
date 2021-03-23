import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchData } from '../store/dashboard.actions';
// Components
import { Account, Profile, Transactions, Advances } from '../components';
import { State as DashboardState } from '../store/dashboard.reducers';
import { LinearProgress } from '@material-ui/core';
interface Props {
  state: DashboardState;
  fetchData: any;
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 10px;
  width: 80%;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
`;

const Dashboard = ({ state, fetchData }: Props): any => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const { userAccount, loading } = state;
  const { withdrawals, advances } = userAccount;
  const progressBar = () => {
    return (
      <ProgressBarContainer>
        <LinearProgress color="secondary" />
      </ProgressBarContainer>
    );
  };
  const content = () => {
    return (
      <DashboardContainer>
        <Profile userAccount={userAccount} />
        <Account userAccount={userAccount} />
        <Transactions withdrawals={withdrawals} />
        <Advances advances={advances} />
      </DashboardContainer>
    );
  };
  return loading ? progressBar() : content();
};

const mapStateToProps = (state: any) => ({
  state: state.dashboard,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchData: () => dispatch(fetchData),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
