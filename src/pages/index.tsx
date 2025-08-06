import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

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
            to="/docs/migration-overview">
            📊 Migration Overview
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro"
            style={{marginLeft: '1rem'}}>
            🚀 Başlayın
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageSummary() {
  return (
    <section className={styles.summary}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="text--center">
              <Heading as="h2">MatchChase Migration Durumu</Heading>
              <p className="margin-bottom--lg">
                MatchChase eski veritabanı şemasındaki 31 tablonun yeni Sportradar API ile karşılaştırmalı analizi
              </p>
            </div>
            <div className="row">
              <div className="col col--4 text--center">
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>17</div>
                  <div className={styles.statLabel}>✅ Tam Karşılanan</div>
                </div>
              </div>
              <div className="col col--4 text--center">
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>9</div>
                  <div className={styles.statLabel}>⚠️ Kısmi Karşılanan</div>
                </div>
              </div>
              <div className="col col--4 text--center">
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>5</div>
                  <div className={styles.statLabel}>❌ Kritik Eksiklik</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="MatchChase eski veritabanından yeni Sportradar API'ye geçiş dokümantasyonu. 31 tablo için detaylı migration mapping analizi.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageSummary />
      </main>
    </Layout>
  );
}
