import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';

const AppStyles = styled.main`
  max-width: 800px;
  margin: 0px auto;
  border: 1px solid #dfdfdf;
  padding: 15px 25px;
  border-radius: 3px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    'Verdana';
  font-size: 16px;
  line-height: 1.5;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyles>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyles>
  );
};
