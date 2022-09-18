import React, { useState, useContext } from 'react';
import { func } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { register } from '../utils/network-data';
import useTitle from '../hooks/useTitle';
import LocaleContext from '../contexts/LocaleContext';
import AuthBox from '../components/Auth/AuthBox';
import AuthHeader from '../components/Auth/AuthHeader';
import AuthMessageBox from '../components/Auth/AuthMessageBox';
import RegisterForm from '../components/Register/RegisterForm';
import RegisterFooter from '../components/Register/RegisterFooter';

function RegisterPage({ onAfterRegister }) {
  const navigate = useNavigate();
  const { getString } = useContext(LocaleContext);
  const [errorRegister, setErrorRegister] = useState(null);

  const onRegisterHandler = async (user) => {
    const { error, errorMessage } = await register(user);
    if (!error) {
      if (onAfterRegister !== null) {
        onAfterRegister();
      }
      navigate('/');
    } else {
      setErrorRegister(errorMessage);
    }
  };

  const title = getString(3);

  useTitle(title);

  return (
    <AuthBox>
      <AuthHeader title={title} />
      {errorRegister !== null && <AuthMessageBox type="danger" text={`${getString(2)} ${errorRegister}`} />}
      <RegisterForm onRegister={onRegisterHandler} />
      <RegisterFooter />
    </AuthBox>
  );
}

RegisterPage.propTypes = {
  onAfterRegister: func,
};

RegisterPage.defaultProps = {
  onAfterRegister: null,
};

export default RegisterPage;
