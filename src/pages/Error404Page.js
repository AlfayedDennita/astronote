import React, { useContext } from 'react';

import useTitle from '../hooks/useTitle';
import LocaleContext from '../contexts/LocaleContext';
import ErrorPage from './ErrorPage';

function Error404Page() {
  const { getString } = useContext(LocaleContext);

  useTitle(`${getString(52)} ${getString(53)}`);

  return (
    <ErrorPage errorNumber={404} errorText={getString(53)} />
  );
}

export default Error404Page;
