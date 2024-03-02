import { Navbar, Nav, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../Redux/actions/auth.actions';
import PropTypes from 'prop-types';

const Header = ({ isLoggedIn, logout }) => {
  return (
    <Navbar style={{backgroundColor : '#1F2937'}}>
      <Navbar.Brand href='/'>
        <h3 className='text-white ml-4 bg-transparent'>
          Small Url  
        </h3>
      </Navbar.Brand>
      {!isLoggedIn ? (
        <Nav className='ml-auto bg-primary text-white rounded-pill mr-4 my-4 px-4'>
          <Nav.Link className='text-white'  href='/login'>Login</Nav.Link>
        </Nav>
      ) : (
        <Nav className='ml-auto mr-4 my-4'>
          <Button variant='primary' className='px-4 rounded-pill' onClick={logout}>
            Logout
          </Button>
        </Nav>
      )}
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};


const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
export default ConnectedHeader;