import React, { useState, useContext } from 'react';
import { func } from 'prop-types';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import LocaleContext from '../../contexts/LocaleContext';
import AuthForm from '../Auth/AuthForm';
import InputString from '../InputString';

function RegisterForm({ onRegister }) {
  const { getString } = useContext(LocaleContext);
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [confirmPassword, setConfirmPassword] = useState({});

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      [name, email, password, confirmPassword].every((input) => input.isValid)
    ) {
      onRegister({
        name: name.value,
        email: email.value,
        password: password.value,
      });
    }
  };

  return (
    <AuthForm onSubmit={onSubmitHandler}>
      <InputString
        type="text"
        placeholder={getString(7)}
        title={getString(11)}
        isRequired
        callback={setName}
      />
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
        minLength={6}
        callback={setPassword}
      />
      <InputString
        type="password"
        placeholder={getString(10)}
        title={getString(14)}
        isRequired
        minLength={6}
        compareWith={password.value || ''}
        compareInvalidMessage={getString(24)}
        callback={setConfirmPassword}
      />
      <button
        className="button button--padded button--bg-primary"
        type="submit"
        title={getString(15)}
      >
        <AiOutlinePlusCircle />
        {getString(15)}
      </button>
    </AuthForm>
  );
}

RegisterForm.propTypes = {
  onRegister: func.isRequired,
};

export default RegisterForm;
