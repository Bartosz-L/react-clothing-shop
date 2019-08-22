import React, { useReducer } from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const SignIn = () => {
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
    setUserCredentials({ email: '', password: '' });
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

        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
