import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Graal Development Guide',
    tagline: 'GS2 is cool!',
    favicon: 'img/rcicon.png',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://gsdocs.ruanfernandes.com.br',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'ruanfernandes', // Usually your GitHub org/user name.
    projectName: 'gs2-docs', // Usually your repo name.

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
            title: 'Graal Development',
            logo: {
                alt: 'GraalScript2 Logo',
                src: 'img/rcicon.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'introSidebar',
                    position: 'left',
                    label: 'Introduction',
                },
            ],
        },
        footer: {
            style: 'dark',

            copyright: `Copyright © ${new Date().getFullYear()} Ruan Fernandes Guimaraes.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['graalscript'],
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
