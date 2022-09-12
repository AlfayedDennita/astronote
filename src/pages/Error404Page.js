import React from 'react';

import ErrorPage from './ErrorPage';

function Error404Page() {
  return (
    <ErrorPage errorNumber={404} errorText="Page Not Found" />
  );
}

export default Error404Page;
