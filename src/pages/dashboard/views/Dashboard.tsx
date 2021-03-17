import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/dashboard.actions';
// Components
import { Account } from '../components';
interface Props {
  dashboard: any;
  fetchData: any;
}

const Dashboard = ({ dashboard, fetchData }: Props): any => {
  fetchData();
  return (
    <div className="dashboard">
      <Account />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  dashboard: state.dashboard,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchData: () => dispatch(fetchData),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
