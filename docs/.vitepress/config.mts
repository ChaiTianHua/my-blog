import { defineConfig } from 'vitepress'
const base = '/my-blog/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //base,
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/my.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '嵌入式笔记', link: '/markdown-examples' },
      { text: '常用工具', link: '/markdown-examples' },
      { text: '开源项目', link: '/markdown-examples' },
      { text: '关于', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
