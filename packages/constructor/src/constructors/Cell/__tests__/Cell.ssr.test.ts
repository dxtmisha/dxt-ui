// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { CellDesign } from '../CellDesign'
import type { CellPropsBasic } from '../props'
import type { CellSlots } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Renders CellDesign in a server-side Node environment without browser globals.
 *
 * Рендерит CellDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @param slots component slots / слоты компонента
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderCellSsr(
  properties: CellPropsBasic = {},
  slots?: CellSlots
): Promise<string> {
  const Component = defineComponent({
    setup() {
      const props = reactive<CellPropsBasic>({ ...properties })
      const design = new CellDesign('d1.cell', props)
      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      return () => h(Component, null, slots ? (slots as Record<string, unknown>) : undefined)
    }
  })

  return renderToString(createSSRApp(Root))
}

describe('CellDesign in Node SSR', () => {
  it('renders CellDesign with text, slots, and attributes without error in SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderCellSsr(
      {
        label: 'SSR Cell',
        caption: 'SSR Caption',
        description: 'SSR Description',
        divider: true,
        value: 'ssr-1'
      },
      {
        trailing: () => h('span', 'Trailing SSR'),
        body: () => h('div', 'Body SSR')
      }
    )

    expect(typeof html).toBe('string')
    expect(html).toContain('SSR Cell')
    expect(html).toContain('SSR Caption')
    expect(html).toContain('SSR Description')
    expect(html).toContain('Trailing SSR')
    expect(html).toContain('Body SSR')
    expect(html).toContain('data-divider="active"')
    expect(html).toContain('data-value="ssr-1"')
  })

  it('handles multiple SSR renders across dynamic, link, skeleton, and loading states without leaking', async () => {
    const configs: CellPropsBasic[] = [
      { dynamic: false, divider: true, label: 'Static Cell' },
      { dynamic: true, divider: true, label: 'Dynamic Cell' },
      { href: 'https://example.com', label: 'Link Cell' },
      { isSkeleton: true, loading: true, label: 'Skeleton Cell' }
    ]

    for (const props of configs) {
      const html = await renderCellSsr(props)
      expect(typeof html).toBe('string')
      expect(html).toContain(String(props.label))
    }
  })
})
