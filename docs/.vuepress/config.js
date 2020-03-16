function convertSidebar(list, path) {
  if (list.length > 0) {
      list.forEach((element, i) => {
        if (element.children) {
            convertSidebar(element.children, path + element.directoryPath)
            delete element.directoryPath
        } else {
            list[i] = path + element
        }
      });
  }
  return list
}

module.exports = {
  locales: {
    "/en/": {
      lang: "en",
      title: "Apache Doris",
      description: "Apache Doris"
    },
    "/zh-CN/": {
      lang: "zh-CN",
      title: "Apache Doris",
      description: "Apache Doris"
    }
  },
  title: "Apache Doris",
  description: "Apache Doris",
  themeConfig: {
    base: "",
    title: "Doris",
    logo: "/images/logo.jpeg",
    search: true,
    smoothScroll: true,
    searchMaxSuggestions: 10,
    nextLinks: true,
    prevLinks: true,
    repo: "apache/incubator-doris",
    repoLabel: "GitHub",
    lastUpdated: "Last Updated",
    editLinks: true,
    docsDir: "docs",
    docsBranch: "",
    locales: {
      "/en/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        editLinkText: "Edit this page on GitHub",
        algolia: {},
        nav: [
          {
            text: "Home", link: "/en/"
          },
          {
            text: "Docs", link: "/en/installing/compilation_EN"
          },
          {
            text: "Download", link: "/en/downloads/downloads_EN"
          },
          {
            text: "Apache", link: "https://www.apache.org/", target: "_blank"
          }
        ],
        sidebar: convertSidebar(require("./sidebar/en.js"), "/en/")
      },
      "/zh-CN/": {
        selectText: "选择语言",
        label: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        nav: [
          {
            text: "主页", link: "/zh-CN/"
          },
          {
            text: "文档", link: "/zh-CN/installing/compilation"
          },
          {
            text: "下载", link: "/zh-CN/downloads/downloads"
          },
          {
            text: "Apache", link: "https://www.apache.org/", target: "_blank"
          }
        ],
        algolia: {},
        sidebar: {
          "/zh-CN/": convertSidebar(require("./sidebar/zh-CN.js"), "/zh-CN/")
        }
      }
    }
  },
  plugins: [
    "reading-progress", "plugin-back-to-top", "plugin-medium-zoom"
  ]
};
