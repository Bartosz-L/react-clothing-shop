import React, { useReducer } from 'react';
import './SignIn.scss';
import { connect } from 'react-redux';
import { loginUser } from '../../state/actions/userActions';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const SignIn = ({ loginUser }) => {
  const [userCredentials, setUserCredentials] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { email: '', password: '' }
  );

  const handleOnChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    loginUser(userCredentials.email, userCredentials.password);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={userCredentials.email}
          handleChange={handleOnChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={userCredentials.password}
          handleChange={handleOnChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
export default connect(
  mapStateToProps,
  { loginUser }
)(SignIn);
