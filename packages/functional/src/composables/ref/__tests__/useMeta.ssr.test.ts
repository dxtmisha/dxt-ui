/** @vitest-environment node */
import { AsyncLocalStorage } from 'node:async_hooks'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createSSRApp, h, type EffectScope } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { MetaRobots, ServerStorage } from '@dxtmisha/functional-basic'
import { useMeta } from '../useMeta'

/** Request-local storage resolver / Хранилище текущего серверного запроса */
const contexts = /*#__PURE__*/ new AsyncLocalStorage<Record<string, unknown>>()
/** Contexts whose effects need cleanup / Контексты, эффекты которых нужно остановить */
const storageContexts: Record<string, unknown>[] = []

/**
 * Renders an application with isolated request storage.
 *
 * Рендерит приложение с изолированным хранилищем запроса.
 * @param setup metadata changes performed during component setup / изменения метаданных в setup компонента
 * @returns rendered application HTML / HTML отрендеренного приложения
 */
async function renderIsolated(setup: () => void | Promise<void>): Promise<string> {
  const context: Record<string, unknown> = {}
  storageContexts.push(context)
  return contexts.run(context, () => renderToString(createSSRApp({
    /**
     * Applies metadata before rendering the component.
     *
     * Применяет метаданные перед рендерингом компонента.
     * @returns component render function / функция рендеринга компонента
     */
    async setup(): Promise<() => ReturnType<typeof h>> {
      await setup()
      return () => h('div')
    }
  })))
}

beforeEach(() => {
  ServerStorage.reset()
  ServerStorage.init(() => contexts.getStore())
})

afterEach(() => {
  for (const context of storageContexts.splice(0)) {
    contexts.run(context, () => {
      if (ServerStorage.has('__ui:effect-scope-global__')) {
        ServerStorage.get<EffectScope>('__ui:effect-scope-global__').stop()
      }
    })
  }
  ServerStorage.reset()
})

describe('useMeta SSR', () => {
  it('should include direct changes to every public ref in HTML without waiting', async () => {
    let html = ''

    await renderIsolated(() => {
      const metadata = useMeta()
      metadata.title.value = 'SSR page title'
      metadata.keyword.value = 'ssr-keywords'
      metadata.description.value = 'SSR page description'
      metadata.image.value = 'https://example.com/ssr-image.png'
      metadata.canonical.value = 'https://example.com/ssr-page'
      metadata.robots.value = MetaRobots.noIndexFollow
      metadata.author.value = 'SSR page author'
      metadata.siteName.value = 'SSR site name'
      html = metadata.getHtmlMeta()
    })

    for (const value of [
      'SSR page title',
      'ssr-keywords',
      'SSR page description',
      'https://example.com/ssr-image.png',
      'https://example.com/ssr-page',
      MetaRobots.noIndexFollow,
      'SSR page author',
      'SSR site name'
    ]) {
      expect(html).toContain(value)
    }
  })

  it('should keep setter methods synchronous for every field', async () => {
    let html = ''

    await renderIsolated(() => {
      const metadata = useMeta()
      metadata.setTitle('Setter page title')
      metadata.setKeywords('setter-keywords')
      metadata.setDescription('Setter page description')
      metadata.setImage('https://example.com/setter-image.png')
      metadata.setCanonical('https://example.com/setter-page')
      metadata.setRobots(MetaRobots.noIndexNoFollow)
      metadata.setAuthor('Setter page author')
      metadata.setSiteName('Setter site name')
      html = metadata.getHtmlMeta()
    })

    for (const value of [
      'Setter page title',
      'setter-keywords',
      'Setter page description',
      'https://example.com/setter-image.png',
      'https://example.com/setter-page',
      MetaRobots.noIndexNoFollow,
      'Setter page author',
      'Setter site name'
    ]) {
      expect(html).toContain(value)
    }
  })

  it('should copy all external Meta values before sync triggers any writes', async () => {
    let synchronized: Record<string, unknown> = {}

    await renderIsolated(() => {
      const metadata = useMeta()
      metadata.meta.setTitle('External title')
      metadata.meta.setKeywords('external-keywords')
      metadata.meta.setDescription('External description')
      metadata.meta.setImage('https://example.com/external-image.png')
      metadata.meta.setCanonical('https://example.com/external-page')
      metadata.meta.setRobots(MetaRobots.noIndexFollow)
      metadata.meta.setAuthor('External author')
      metadata.meta.setSiteName('External site name')
      metadata.sync()

      synchronized = {
        title: metadata.title.value,
        keyword: metadata.keyword.value,
        description: metadata.description.value,
        image: metadata.image.value,
        canonical: metadata.canonical.value,
        robots: metadata.robots.value,
        author: metadata.author.value,
        siteName: metadata.siteName.value
      }
    })

    expect(synchronized).toEqual({
      title: 'External title',
      keyword: 'external-keywords',
      description: 'External description',
      image: 'https://example.com/external-image.png',
      canonical: 'https://example.com/external-page',
      robots: MetaRobots.noIndexFollow,
      author: 'External author',
      siteName: 'External site name'
    })
  })

  it('should isolate metadata changes across parallel asynchronous SSR requests', async () => {
    const html: Record<string, string> = {}

    await Promise.all(['first', 'second'].map(name => renderIsolated(async () => {
      const metadata = useMeta()
      metadata.title.value = `${name} title`
      await Promise.resolve()
      metadata.description.value = `${name} description`
      html[name] = metadata.getHtmlMeta()
    })))

    expect(html.first).toContain('first title')
    expect(html.first).toContain('first description')
    expect(html.first).not.toContain('second')
    expect(html.second).toContain('second title')
    expect(html.second).toContain('second description')
    expect(html.second).not.toContain('first')
  })
})
