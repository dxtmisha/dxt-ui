import { describe, expect, it } from 'vitest'
import { createSSRApp, h, Teleport } from 'vue'
import type { SSRContext } from 'vue/server-renderer'
import { initSsrApp } from '../initSsrApp'

describe('initSsrApp', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render Vue SSR app to HTML string and return empty teleportsHtml when no teleports exist', async () => {
      const app = createSSRApp({
        render: () => h('main', { class: 'page' }, [h('h1', 'Hello SSR')])
      })

      const result = await initSsrApp(app)

      expect(result.appHtml).toBe('<main class="page"><h1>Hello SSR</h1></main>')
      expect(result.teleportsHtml).toBe('')
      expect(result.context).toBeDefined()
    })

    it('should extract and concatenate teleports HTML from context.teleports', async () => {
      const app = createSSRApp({
        render: () =>
          h('div', [
            h('p', 'Main content'),
            h(Teleport, { to: '#teleports' }, [h('div', { class: 'modal-1' }, 'Modal One')]),
            h(Teleport, { to: '#modals' }, [h('div', { class: 'modal-2' }, 'Modal Two')])
          ])
      })

      const customContext: SSRContext = { customFlag: true }
      const result = await initSsrApp(app, customContext)

      expect(result.appHtml).toContain('<p>Main content</p>')
      expect(result.teleportsHtml).toContain('<div class="modal-1">Modal One</div>')
      expect(result.teleportsHtml).toContain('<div class="modal-2">Modal Two</div>')
      expect(result.context).toBe(customContext)
      expect(result.context.customFlag).toBe(true)
    })
  })

  describe('Boundary values and pre-populated teleports context', () => {
    it('should join pre-existing teleports map entries into teleportsHtml', async () => {
      const app = createSSRApp({
        render: () => h('span', 'ok')
      })
      const context: SSRContext = {
        teleports: {
          '#body': '<aside>A</aside>',
          '#footer': '<footer>B</footer>'
        }
      }

      const result = await initSsrApp(app, context)

      expect(result.appHtml).toBe('<span>ok</span>')
      expect(result.teleportsHtml).toBe('<aside>A</aside><footer>B</footer>')
    })

    it('should handle Multilingual and Unicode content during SSR render', async () => {
      const app = createSSRApp({
        render: () => h('div', 'Привет Мир / Xin chào Việt Nam / 你好世界 🚀')
      })

      const result = await initSsrApp(app)
      expect(result.appHtml).toBe('<div>Привет Мир / Xin chào Việt Nam / 你好世界 🚀</div>')
    })
  })
})
