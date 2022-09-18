import React from 'react';
import { func, node } from 'prop-types';

function AuthForm({ onSubmit, children }) {
  return (
    <main>
      <form className="auth__form" onSubmit={onSubmit}>
        {children}
      </form>
    </main>
  );
}

AuthForm.propTypes = {
  onSubmit: func.isRequired,
  children: node.isRequired,
};

export default AuthForm;
