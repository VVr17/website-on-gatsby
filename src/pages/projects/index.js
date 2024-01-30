import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';

const Projects = () => {
  return (
    <Layout>
      <section>
        <div className={styles.portfolio}>
          <h2>Portfolio</h2>
          <h3>Projects & Websites I&apos;ve Created</h3>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
