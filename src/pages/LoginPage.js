import React, { useState, useContext } from 'react';
import { bool, func } from 'prop-types';

import { login } from '../utils/network-data';
import useTitle from '../hooks/useTitle';
import LocaleContext from '../contexts/LocaleContext';
import AuthBox from '../components/Auth/AuthBox';
import AuthHeader from '../components/Auth/AuthHeader';
import AuthMessageBox from '../components/Auth/AuthMessageBox';
import LoginForm from '../components/Login/LoginForm';
import LoginFooter from '../components/Login/LoginFooter';

function LoginPage({ onLoginSuccess, isAfterRegister }) {
  const { getString } = useContext(LocaleContext);
  const [errorLogin, setErrorLogin] = useState(null);

  const onLoginHandler = async (user) => {
    const { error, data, errorMessage } = await login(user);
    if (!error) {
      onLoginSuccess(data);
    } else {
      setErrorLogin(errorMessage);
    }
  };

  useTitle(getString(6));

  return (
    <AuthBox>
      <AuthHeader title={getString(17)} />
      {isAfterRegister && <AuthMessageBox type="success" text={getString(58)} />}
      {errorLogin !== null && <AuthMessageBox type="danger" text={`${getString(16)} ${errorLogin}`} />}
      <LoginForm onLogin={onLoginHandler} />
      <LoginFooter />
    </AuthBox>
  );
}

LoginPage.propTypes = {
  onLoginSuccess: func.isRequired,
  isAfterRegister: bool,
};

LoginPage.defaultProps = {
  isAfterRegister: false,
};

export default LoginPage;
