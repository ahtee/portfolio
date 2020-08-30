import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const H1 = styled.h1`
  font-family: 'Bookman';
  font-size: 3em;
`;

const PP = styled.p`
  font-size: 1.2em;
  font-family: Helvetica;
`;

const NoStyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Header = ({ siteTitle, siteDescription }) => {
  return (
    <NoStyleLink to="/">
      <H1>{siteTitle}</H1>
      <PP>{siteDescription}</PP>
    </NoStyleLink>
  );
};
