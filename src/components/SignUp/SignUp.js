import React, { useReducer } from 'react';
import { SignUpContainer, SignUpTitle } from './SignUp.styles';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { displayName: '', email: '', password: '', confirmPassword: '' }
  );

  const handleOnChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (userCredentials.password !== userCredentials.confirmPassword) {
      alert("passwords don't match");
      return;
    } else {
      console.log(userCredentials);
    }
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={userCredentials.displayName}
          onChange={handleOnChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={userCredentials.email}
          onChange={handleOnChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={userCredentials.password}
          onChange={handleOnChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={userCredentials.confirmPassword}
          onChange={handleOnChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
