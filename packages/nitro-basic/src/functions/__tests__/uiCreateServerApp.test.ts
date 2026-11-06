import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createSSRApp, h, Teleport } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { CookieStorage, getElementId } from '@dxtmisha/functional-basic'
import { appContext } from '../initContext'
import { uiBootstrapServer } from '../uiBootstrapServer'
import { uiCreateServerApp } from '../uiCreateServerApp'

describe('uiCreateServerApp', () => {
  beforeEach(() => {
    uiBootstrapServer()
  })

  afterEach(() => {
    appContext.unset()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize context, router, action, render SSR HTML, and substitute placeholders in body template', async () => {
      const router = createRouter({
        history: createMemoryHistory(),
        routes: [
          {
            path: '/products',
            component: {
              setup() {
                const id = getElementId()
                return () =>
                  h('section', { id }, [
                    h('h2', 'Product Catalog'),
                    h(Teleport, { to: '#teleports' }, [h('div', { class: 'popup' }, 'Promo')])
                  ])
              }
            }
          }
        ]
      })

      const app = createSSRApp({
        render: () => h('div', { class: 'layout' }, [h(router.currentRoute.value.matched[0]?.components?.default ?? 'div')])
      })
      app.use(router)

      const request = new Request('https://shop.dxtmisha.com/products?sort=price', {
        headers: {
          Cookie: 'currency=USD'
        }
      })

      const actionSpy = vi.fn(async () => {
        CookieStorage.set('visited', '1')
      })

      const template = [
        '<!DOCTYPE html>',
        '<html lang="<!--ssr-lang-->">',
        '<head><!--ssr-title--><!--ssr-meta--></head>',
        '<body>',
        '<div id="app"><!--ssr-outlet--></div>',
        '<div id="teleports"><!--ssr-teleports--></div>',
        '<!--ssr-scriptsJson-->',
        '</body>',
        '</html>'
      ].join('')

      const result = await uiCreateServerApp(
        app,
        request,
        router,
        {},
        actionSpy,
        {},
        template
      )

      expect(actionSpy).toHaveBeenCalledTimes(1)
      expect(actionSpy).toHaveBeenCalledWith(app)
      expect(result.headers).toBeInstanceOf(Headers)
      expect(result.headers?.get('Content-Type')).toBe('text/html;charset=UTF-8')
      expect(result.headers?.get('Set-Cookie')).toContain('visited=1')
      expect(result.appHtml).toContain('<section id="ui-10000"><h2>Product Catalog</h2>')
      expect(result.teleportsHtml).toContain('<div class="popup">Promo</div>')
      expect(result.body).toContain(result.appHtml)
      expect(result.body).toContain(result.teleportsHtml)
      expect(result.body).toContain(`lang="${result.lang}"`)
      expect(result.body).not.toContain('<!--ssr-outlet-->')
      expect(result.body).not.toContain('<!--ssr-teleports-->')
    })

    it('should return rendered.appHtml as body when template body argument is omitted', async () => {
      const app = createSSRApp({
        render: () => h('article', 'Standalone SSR Content')
      })
      const request = new Request('https://example.com/')

      const result = await uiCreateServerApp(app, request)

      expect(result.appHtml).toBe('<article>Standalone SSR Content</article>')
      expect(result.body).toBe('<article>Standalone SSR Content</article>')
    })
  })

  describe('Special replacement patterns and security ($` / $$ in content)', () => {
    it('should preserve literal dollar replacement patterns ($`, $$) in rendered HTML and teleports', async () => {
      const app = createSSRApp({
        render: () =>
          h('div', [
            h('span', 'Price: $100 | Pattern: $` and $$'),
            h(Teleport, { to: '#teleports' }, [h('b', 'Teleport: $` $$')])
          ])
      })
      const request = new Request('https://example.com/pricing')
      const template = '<main><!--ssr-outlet--></main><aside><!--ssr-teleports--></aside>'

      const result = await uiCreateServerApp(
        app,
        request,
        undefined,
        {},
        undefined,
        {},
        template
      )

      expect(result.body).toContain('<span>Price: $100 | Pattern: $` and $$</span>')
      expect(result.body).toContain('<b>Teleport: $` $$</b>')
      expect(result.body).not.toContain('<!--ssr-outlet-->')
    })
  })
})
