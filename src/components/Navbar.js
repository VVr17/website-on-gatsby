import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <nav>
      <Link className="logo" to="/">
        <h1>{title}</h1>
      </Link>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Portfolio Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
