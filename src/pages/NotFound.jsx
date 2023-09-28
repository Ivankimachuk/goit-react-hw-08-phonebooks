import React from 'react'
import { HOME_ROUTE } from 'config/routes';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const NotFound = () => {
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>NotFound</title>
        </Helmet>
    Error 404. Sorry, page was`t found. <Link to={HOME_ROUTE}>Back to the Home page.</Link>
  </div>
  );
};

export default NotFound;
