import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import CapabilityFilter from '../components/CapabilityFilter';
import styles from './index.module.css';

  const CAPABILITIES = [
  { id: 'bq',   title: 'BigQuery Datasets' },
  { id: 'gcs',  title: 'GCS Buckets' },
  { id: 'iam',  title: 'Service Accounts (IAM)' },
  { id: 'dbt',  title: 'dbt Transformations' },
  { id: 'air',  title: 'Airflow DAGs' },
  { id: 'look', title: 'Looker Dashboards' },
];
function HomepageHeader() {

  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
   
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
          <CapabilityFilter capabilities={CAPABILITIES} />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
