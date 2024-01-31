import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import * as styles from '../styles/project-details.module.css';

const ProjectDetails = ({ data }) => {
  const {
    html,
    frontmatter: { title, stack, featuredImg },
  } = data.markdownRemark;

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

// Get portfolio details by query variable
// Query variable will be grabbed from actions.createPage.context
export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        stack
        slug
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;

ProjectDetails.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        slug: PropTypes.string,
        stack: PropTypes.string,
        title: PropTypes.string,
        featuredImg: PropTypes.object,
      }),
      html: PropTypes.string,
    }),
  }),
};

export default ProjectDetails;
