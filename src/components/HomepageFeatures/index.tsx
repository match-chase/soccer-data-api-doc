import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
  stats?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Kapsamlı Analiz',
    icon: '📊',
    stats: '31 Tablo',
    description: (
      <>
        MatchChase eski veritabanındaki <strong>31 tablo</strong> için detaylı migration mapping analizi.
        Her kolon için yeni API karşılığı ve eksik alanlar belirtilmiştir.
      </>
    ),
  },
  {
    title: 'Migration Stratejisi',
    icon: '🎯',
    stats: '4 Faz',
    description: (
      <>
        <strong>4 fazlı</strong> migration stratejisi ile sistematik geçiş planı.
        Temel verilerden başlayarak gelişmiş analitiklere kadar adım adım rehber.
      </>
    ),
  },
  {
    title: 'Detaylı Dokümantasyon',
    icon: '📋',
    stats: '5 Kategori',
    description: (
      <>
        Takım, oyuncu, maç, istatistik ve transfer verilerini kapsayan
        <strong> 5 ana kategori</strong> altında organize edilmiş dokümantasyon.
      </>
    ),
  },
];

function Feature({title, icon, description, stats}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>
          <span style={{fontSize: '4rem'}}>{icon}</span>
          {stats && <div className={styles.featureStats}>{stats}</div>}
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
