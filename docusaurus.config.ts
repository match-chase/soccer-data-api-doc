import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MatchChase Migration Docs',
  tagline: 'MatchChase Eski Veritabanından Yeni Sportradar API\'ye Geçiş Dokümantasyonu',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://match-chase.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/soccer-data-api-doc/',

  // Trailing slash config for GitHub Pages
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'match-chase', // Usually your GitHub org/user name.
  projectName: 'soccer-data-api-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/atakan/soccer-data-api/tree/main/docs/docusaurus/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'MatchChase Migration',
      logo: {
        alt: 'MatchChase Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'migrationSidebar',
          position: 'left',
          label: '📊 Migration Docs',
        },

        {
          href: 'https://github.com/atakan/soccer-data-api',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'MatchChase Migration',
          items: [
            {
              label: 'Migration Overview',
              to: '/docs/migration-overview',
            },
            {
              label: 'API Ekstra Verileri',
              to: '/docs/api-extras',
            },
            {
              label: 'Table Analysis',
              to: '/docs/tables/basic-structure',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Sportradar API Documentation',
              href: 'https://developer.sportradar.com/docs/read/soccer/Soccer_Extended_v4',
            },
            {
              label: 'Migration Strategy',
              to: '/docs/migration-overview',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/atakan/soccer-data-api',
            },
            {
              label: 'Old Database Schema',
              href: 'https://github.com/atakan/soccer-data-api/blob/main/docs/old_db_schema.sql',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MatchChase Migration Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
