import React, { useState, useContext } from 'react';
import { func } from 'prop-types';
import { AiOutlineLogin } from 'react-icons/ai';

import LocaleContext from '../../contexts/LocaleContext';
import AuthForm from '../Auth/AuthForm';
import InputString from '../InputString';

function LoginForm({ onLogin }) {
  const { getString } = useContext(LocaleContext);
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if ([email, password].every((input) => input.isValid)) {
      onLogin({ email: email.value, password: password.value });
    }
  };

  return (
    <AuthForm onSubmit={onSubmitHandler}>
      <InputString
        type="email"
        placeholder={getString(8)}
        title={getString(12)}
        isRequired
        callback={setEmail}
      />
      <InputString
        type="password"
        placeholder={getString(9)}
        title={getString(13)}
        isRequired
        callback={setPassword}
      />
      <button
        className="button button--padded button--bg-primary"
        type="submit"
        title={getString(6)}
      >
        <AiOutlineLogin />
        {getString(6)}
      </button>
    </AuthForm>
  );
}

LoginForm.propTypes = {
  onLogin: func.isRequired,
};

export default LoginForm;
