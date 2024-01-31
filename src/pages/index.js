import * as React from 'react';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';

const Home = ({ data }) => {
  const { fluid } = data.file.childImageSharp;

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid={fluid} />
      </section>
    </Layout>
  );
};

// Get Banner image using Fragment "GatsbyImageSharpFluid"
export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

Home.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          aspectRatio: PropTypes.number,
          base64: PropTypes.string,
          src: PropTypes.string,
          srcSet: PropTypes.string,
        }),
      }),
    }),
  }),
};

export default Home;
