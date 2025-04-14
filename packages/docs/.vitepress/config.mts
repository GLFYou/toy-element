import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Toy-Element',
  description: '高仿 ElementPlus',
  base: '/toy-element/',
  appearance: false, // 明暗主题开关
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始使用', link: '/get-start' },
      { text: '组件', link: '/components/button' }
    ],
    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '基础组件',
        items: [{ text: 'Button 按钮', link: '/components/button' }]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/GLFYou/toy-element' }]
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  }
})
