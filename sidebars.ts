import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Migration Documentation Sidebar
  migrationSidebar: [
    'intro',
    {
      type: 'doc',
      id: 'migration-overview',
      label: '📊 Migration Overview',
    },
    {
      type: 'category',
      label: '📋 Detaylı Tablo Analizi',
      items: [
        'tables/basic-structure',
        'tables/teams-players',
        'tables/match-data',
        'tables/statistics',
        'tables/transfers-squad',
      ],
    },
    {
      type: 'doc',
      id: 'api-extras',
      label: '🚀 API Ekstra Verileri',
    },

  ],
};

export default sidebars;
