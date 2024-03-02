
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedIn ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};


PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.elementType.isRequired,
  // You might want to add PropTypes for other props in 'rest' as needed
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

// Adding a name to the component
const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);
export default ConnectedPrivateRoute;