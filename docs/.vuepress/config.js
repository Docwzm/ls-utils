const path = require('path');

module.exports = {
  title: "乐心工具库 | utils",
  description: "乐心工具库",
  base: "/utils/",
  dest: path.join(__dirname, '../../dist/utils'),
  themeConfig: {
    nav: [
      {
        text: "指南",
        link: "/guide/"
      },
      {
        text: "NPM",
        link: "http://npm.lexin.com"
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      "/guide/": [
        "/guide/",
        {
          title: '工具库',
          collapsable: false,
          children: [
            '/guide/ls-card',
            '/guide/ls-notice',
            '/guide/article-list',
            '/guide/ls-evaluation',
          ]
        }
      ]
    }
  }
};