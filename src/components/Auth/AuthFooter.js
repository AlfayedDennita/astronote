import React, { useContext } from 'react';
import { node } from 'prop-types';

import LocaleContext from '../../contexts/LocaleContext';
import ActionButton from '../ActionButton';

function AuthFooter({ children }) {
  const { setLocale } = useContext(LocaleContext);

  return (
    <footer className="auth__footer">
      {children}
      <section className="auth__locale">
        <ActionButton
          className="auth__locale-button"
          title="English"
          onClick={() => setLocale('en')}
        >
          English
        </ActionButton>
        |
        <ActionButton
          className="auth__locale-button"
          title="Bahasa Indonesia"
          onClick={() => setLocale('id')}
        >
          Bahasa Indonesia
        </ActionButton>
      </section>
    </footer>
  );
}

AuthFooter.propTypes = {
  children: node.isRequired,
};

export default AuthFooter;
