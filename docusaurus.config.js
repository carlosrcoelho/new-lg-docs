const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'LangFlow Documentation',
    tagline: 'LangFlow is a GUI for LangChain, designed with react-flow',
    favicon: 'img/favicon.ico',
    url: 'https://langflow-docs.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    organizationName: 'carlosrcoelho',
    projectName: 'langflow',
    deploymentBranch: 'gh pages',
    trailingSlash: false,
    customFields: {
      mendableAnonKey: "b7f52734-297c-41dc-8737-edbd13196394",
    },
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: '/',
            sidebarPath: require.resolve('./sidebars.js'),
            path: 'docs',
            // sidebarPath: 'sidebars.js',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
    plugins:    [
      ['docusaurus-node-polyfills', { excludeAliases: ['console'] }],
      'docusaurus-plugin-image-zoom',
      // ....
      async function myPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          hideOnScroll: true,
          title: 'LangFlow',
          logo: {
            alt: 'LangFlow',
            src: 'img/chain.png',
            srcDark: 'img/chain.png',
          },
          items: [
            // right
            {
              position: 'right',
              href: 'https://github.com/logspace-ai/langflow',
              position: 'right',
              className: 'header-github-link',
              target: '_blank',
              rel: null,
            },
            {
              position: 'right',
              href: 'https://twitter.com/logspace_ai',
              position: 'right',
              className: 'header-twitter-link',
              target: '_blank',
              rel: null,
            },
          ],
        },
        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 5,
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        announcementBar: {
          content:
            '⭐️ If you like ⛓️LangFlow, star it on <a target="_blank" rel="noopener noreferrer" href="https://github.com/logspace-ai/langflow">GitHub</a>! ⭐️',
          backgroundColor: '#B53D38', //Mustard Yellow #D19900 #D4B20B - Salmon #E9967A
          textColor: '#fff',
          isCloseable: false,
          },
          footer: {
            links: [
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Logspace.`,
          },
          zoom: {
            selector: '.markdown :not(a) > img:not(.no-zoom)',
            background: {
              light: 'rgba(240, 240, 240, 0.9)',
              dark: 'rgb(50, 50, 50, 0.9)',
            },
            config: {},
          },
          prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
          },
        }),
    }
  );