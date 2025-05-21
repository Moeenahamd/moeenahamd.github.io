import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  title: 'OMISE',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://moeenahamd.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'moeenahamd.github.io',
  organizationName: 'moeenahamd',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','ja','th'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      ja: {
        label: '日本語',
      },
      th: {
        label: 'แบบไทย',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          
        routeBasePath: '/', // 👈 Set docs as the home page
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          
          lastVersion: 'API version 2025-05-20',
          onlyIncludeVersions: ['API version 2025-05-20'],
            versions: {
              current: {
                label: 'v2.0.0'
              },
            },
          
        },
        
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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
        
         logo: {
         alt: 'OMISE Logo',
         src: 'img/Logo.svg',
       },
       items: [ 
        {to: '/swagger', label: 'API Playground', position: 'right'},
         
        {
          type: 'docsVersionDropdown',  
          position: 'right',
          className: 'hide-on-mobile',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        
        {to: 'https://www.omise.co/en/contact-us', label: 'Contact Us', position: 'right'},
         
        {to: 'https://dashboard.omise.co/v2', label: 'Sign In', position: 'right'},
       ],
     },
     algolia: {
      appId: 'ZP16VGQ1OY',
      apiKey: 'd36d0b7bdbaaaec52a86043c951b9dad',
      indexName: 'moeenahamdio',
  
      // Optional (customization)
      contextualSearch: true, // Recommended for versioned docs
      externalUrlRegex: 'external.com|domain.com',
      searchParameters: {}, // Optional: Algolia search parameters
      searchPagePath: 'search', // Optional: enable full search page
    },
    // navbar: {
    //   hideOnScroll: false,
    //   title: '',
    //   logo: undefined,
    //   items: [], // make navbar items empty
    // },
    footer: {
      style: 'dark',

      links: [
        
        {
          items: [
            {
              label: 'Accept payments',
              to: '/docs/intro',
            },
            {
              label: 'Omise AI',
              to: '/docs/intro',
            },
            {
              label: 'Manage transactions',
              to: '/docs/intro',
            },
            {
              label: 'Payment Links+',
              to: '/docs/intro',
            },
            {
              label: 'PayFac',
              to: '/docs/intro',
            },
            {
              label: 'Acquiring',
              to: '/docs/intro',
            },
            {
              label: 'Payment Orchestration',
              to: '/docs/intro',
            },
            {
              label: 'Consultant service for Fintech',
              to: '/docs/intro',
            },
          ],
        },
        {
          items: [
            {
              label: 'About us',
              to: '/docs/intro',
               },
            {
              label: 'Newsroom',
              to: '/docs/intro',
                 },
            {
              label: 'Careers',
              to: '/docs/intro',
              },
          ],
        },
        {
          items: [
            {
              label: 'Customer stories',
              to: '/docs/intro',
               },
            {
              label: 'Blog',
              to: '/docs/intro',
                 },
            {
              label: 'Pricing',
              to: '/docs/intro',
              },
              {
                label: 'Documentation',
                to: '/docs/intro',
                },
          ],
        },
        {
          items: [
            {
              label: 'Get started',
              to: '/docs/intro',
               },
            {
              label: 'FAQ',
              to: '/docs/intro',
                 },
            {
              label: 'Restricted businesses',
              to: '/docs/intro',
              },
              {
                label: 'Contact us',
                to: '/docs/intro',
                },
          ],
        },
    
        {
          items: [
          {
            html: `
              <a href="https://facebook.com/your-page" target="_blank" style="margin-right: 10px;">
             <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" fill="#ffffff"></path> </g></svg> 
              </a>
                <a href="https://facebook.com/your-page" target="_blank" style="margin-right: 10px;">
           
              <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="#ffffff" stroke-width="2"></path> <circle cx="16.5" cy="7.5" r="1.5" fill="#ffffff"></circle> <circle cx="12" cy="12" r="3" stroke="#ffffff" stroke-width="2"></circle> </g></svg>
            </a>
              <a href="https://facebook.com/your-page" target="_blank" style="margin-right: 10px;">
           
           <svg width="34px" height="34px" viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>youtube [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#ffffff]"> </path> </g> </g> </g> </g></svg>  </a>
              <a href="https://facebook.com/your-page" target="_blank" style="margin-right: 10px;">
           
            <svg fill="#ffffff" width="34px" height="34px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z"></path></g></svg>   </a>
           
             `,
          },
        ],},
        
      
      ],
      
      copyright: `Privacy and Terms Copyright © ${new Date().getFullYear()}Omise Co., Ltd.`,
      
    },
    head: [
      {
        tagName: 'link',
        attributes: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',
        },
      },
    ],
    
    omiseExtras: {
      footerImage: 'img/OMISE.svg',
      languageOptions: [
        { value: 'en', label: 'English' },
        { value: 'th', label: 'ไทย' },
      ],
      statusLink: { href: '/status', label: 'System status' },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    plugins: [
      // other plugins
      '@docusaurus/plugin-content-docs',
    ],
  } satisfies Preset.ThemeConfig,
  
};
export default config;
