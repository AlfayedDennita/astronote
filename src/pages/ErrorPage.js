import React, { useContext } from 'react';
import { number, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

import LocaleContext from '../contexts/LocaleContext';

import '../styles/error-page.css';

function ErrorPage({ errorNumber, errorText }) {
  const { getString } = useContext(LocaleContext);

  return (
    <main className="main error-page">
      <div className="wrapper wrapper--padding-x error-page__wrapper">
        <div className="error-page__number">{errorNumber}</div>
        <h2 className="error-page__text">{errorText}</h2>
        <Link
          className="link button button--padded button--bg-primary error-page__button"
          to="/"
          title={getString(51)}
        >
          <AiFillHome className="error-page__button-icon" />
          {getString(51)}
        </Link>
      </div>
    </main>
  );
}

ErrorPage.propTypes = {
  errorNumber: number.isRequired,
  errorText: string.isRequired,
};

export default ErrorPage;
