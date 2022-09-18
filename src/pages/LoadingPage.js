import React, { useContext } from 'react';

import useTitle from '../hooks/useTitle';
import LocaleContext from '../contexts/LocaleContext';
import LoadingRipple from '../components/LoadingRipple';

import '../styles/loading-page.css';

function LoadingPage() {
  const { getString } = useContext(LocaleContext);

  useTitle(`${getString(1)}...`);

  return (
    <main className="loading-page">
      <LoadingRipple className="loading-page__ripple" />
      <p className="loading-page__text">{getString(1)}</p>
    </main>
  );
}

export default LoadingPage;
