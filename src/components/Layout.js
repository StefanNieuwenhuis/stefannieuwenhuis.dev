import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { Header } from './Header';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </>
  );
};
