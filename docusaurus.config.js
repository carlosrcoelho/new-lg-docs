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
              // label: 'GitHub',
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
        // announcementBar: {
        //   content:
        //     '⭐️ If you like LangFlow, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/logspace-ai/langflow">GitHub</a>! ⭐️',
        //   },
          footer: {
            links: [
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Logspace.`,
          },
          prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
          },
        }),
    }
  );


















// /** @type {import('@docusaurus/types').DocusaurusConfig} */
// const config = {
//   title: 'LangFlow Documentation',
//   tagline: 'LangFlow is a GUI for LangChain, designed with react-flow',
//   favicon: 'img/favicon.ico',
//   url: 'https://langflow-docs.com',
//   baseUrl: '/',
//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },
//   presets: [
//     [
//       '@docusaurus/preset-classic',
//       {
//         docs: {
//           routeBasePath: '/',
//           sidebarPath: require.resolve('./sidebars.js'),
//           editUrl:
//             'https://github.com/carlosrcoelho/new-lg-docs/tree/main/',
//         },
//         blog: false,
//         theme: {
//           customCss: require.resolve('./src/css/custom.css'),
//         },
//       },
//     ],
//   ],
//   themeConfig: {
//     navbar: {
//       hideOnScroll: true,
//       title: 'LangFlow',
//       logo: {
//         alt: 'Site Logo',
//         src: 'img/chain.png',
//         href: '/',
//         target: '_self',
//       },
//       items: [
//         {
//           label: 'Community',
//           position: 'right',
//           items: [
//             {
//               href: 'https://twitter.com/logspace_ai',
//               label: 'Twitter',
//               target: '_blank',
//               rel: null,
//             },
//             {
//               href: 'https://github.com/logspace-ai/langflow',
//               label: 'GitHub',
//               target: '_blank',
//               rel: null,
//             },
//             {
//               href: 'https://www.linkedin.com/company/logspace-ai/',
//               label: 'LinkedIn',
//               target: '_blank',
//               rel: null,
//             },
//           ],
//           className: 'navbar__link--community',
//         },
//         {
//           type: 'localeDropdown',
//           position: 'right',
//           dropdownItemsBefore: [],
//           className: 'icon-link language navbar__item',
//         },
//         {
//           type: 'separator',
//           position: 'right',
//         },
//         {
//           type: 'localeDropdown',
//           position: 'right',
//           dropdownItemsBefore: [],
//           className: 'icon-link language navbar__item',
//         },
//         {
//           type: 'iconLink',
//           position: 'right',
//           icon: {
//             alt: 'twitter logo',
//             src: `/logos/twitter.svg`,
//             href: 'https://twitter.com/Ionicframework',
//             target: '_blank',
//           },
//         },
//       ],
//     },
//     tagManager: {
//       trackingID: 'GTM-TKMGCBC',
//     },
//     prism: {
//       theme: lightCodeTheme,
//       darkTheme: darkCodeTheme,
//       additionalLanguages: ['shell-session', 'http'],
//     },
//   },
// };

// module.exports = config;


