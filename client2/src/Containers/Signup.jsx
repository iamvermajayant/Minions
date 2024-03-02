import { Fragment, useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../Redux/actions/auth.actions';
import ConnectedHeader from '../Components/Header';
import PropTypes from 'prop-types'; // Import PropTypes

//import { ToastContainer } from 'react-toastify';

const Signup = (props) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(formData);
  };

  return props.isLoggedIn ? (
    <Redirect to='/dashboard' />
  ) : (
    <Fragment>
      <ConnectedHeader />
      <Container style={{height : '90vh'}} className='center-content'>
        <Form className='login-form my-4' style={{width : '450px'}} onSubmit={(e) => handleSubmit(e)}>
          <legend className='text-center text-white'>
            Signup to continue :{' '}
          </legend>
          <hr />
          <Form.Group controlId='formBasicEmail'>
            <Form.Label className='text-white'>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={(e) => handleChange(e)}
              value={formData.email}
              required
            />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label className='text-white'>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              onChange={(e) => handleChange(e)}
              value={formData.password}
              required
            />
          </Form.Group>
          <Button variant='primary' className='px-4 rounded-pill' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: state.auth.isLoggedIn,
  type: ownProps.type,
});

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (body) => dispatch(signup(body))
  };
};

Signup.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
};

const ConnectedSignup = connect(mapStateToProps, mapDispatchToProps)(Signup);
export default ConnectedSignup;
