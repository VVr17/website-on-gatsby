import React from 'react';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';

const Projects = ({ data }) => {
  const { nodes: projects } = data.projects;
  const { contact } = data.contact.siteMetadata;

  return (
    <Layout>
      <section>
        <div className={styles.portfolio}>
          <h2>Portfolio</h2>
          <h3>Projects & Websites I&apos;ve Created</h3>

          <ul className={styles.projects}>
            {projects.map(
              ({ id, frontmatter: { slug, title, stack, thumb } }) => (
                <li key={id}>
                  <Link to={'/projects/' + slug}>
                    <Img fluid={thumb.childImageSharp.fluid} />
                    <h3>{title}</h3>
                    <p>{stack}</p>
                  </Link>
                </li>
              )
            )}
          </ul>
          <p>Like what you see? Email me at {contact} for a quote!</p>
        </div>
      </section>
    </Layout>
  );
};

// Get projects sorting by date
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;

Projects.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          frontmatter: PropTypes.shape({
            slug: PropTypes.string,
            stack: PropTypes.string,
            title: PropTypes.string,
            thumb: PropTypes.object,
          }),
        })
      ),
    }),
    contact: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        contact: PropTypes.string,
      }),
    }),
  }),
};

export default Projects;
