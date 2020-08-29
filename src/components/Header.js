import React from 'react';
import { Link } from 'gatsby';

export const Header = ({ siteTitle, siteDescription }) => {
  return (
    <Link to="/">
      <h1>{siteTitle}</h1>
      <p>{siteDescription}</p>
    </Link>
  );
};
