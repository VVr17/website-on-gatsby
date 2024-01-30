import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Navbar from './Navbar';
import '../styles/global.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query CopyrightQuery {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);

  const { copyright } = data.site.siteMetadata;

  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
      <footer>
        <p>{copyright}</p>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
