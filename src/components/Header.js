import React from 'react';
import { Link } from 'gatsby-theme-material-ui';

export const Header = ({ siteTitle, siteDescription }) => (
  <Link to='/'>
    <h1>{siteTitle}</h1>
    <p>{siteDescription}</p>
  </Link>
);
