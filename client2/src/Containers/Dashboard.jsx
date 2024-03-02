import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; // Import PropTypes
// import Header from '../Components/Header'
// import ShortenUrlCard from '../Components/ShortenUrlCard';
// import DashboardTable from '../Components/DashboardTable';

import ConnectedHeader from '../Components/Header';
import ConnectedShortenUrlCard from '../Components/ShortenUrlCard';
import ConnectedDashboardTable from '../Components/DashboardTable';

const Dashboard = ({ user }) => {
  return (
    <>
      <ConnectedHeader />
      <Container className='center-content my-4'>
        <legend className='text-center'>
          Hi, <span className='primary-text'>{user}</span>
        </legend>
        <ConnectedShortenUrlCard />
        <ConnectedDashboardTable />
      </Container>
    </>
  );
};

// Add PropTypes validation for the 'user' prop
Dashboard.propTypes = {
  user: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
export default ConnectedDashboard;
