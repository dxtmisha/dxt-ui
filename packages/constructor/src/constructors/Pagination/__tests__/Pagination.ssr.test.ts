// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h, reactive, ref, type VNode } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { PaginationDesign } from '../PaginationDesign'
import { defaultsPagination, type PaginationProps } from '../props'
import type {
  PaginationClasses,
  PaginationComponents,
  PaginationExpose,
  PaginationSlots
} from '../types'

const stubSsrButton = defineComponent({
  name: 'StubSsrButton',
  inheritAttrs: false,
  props: {
    label: { type: String, default: undefined },
    value: { type: [Number, String], default: undefined },
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  setup(props, { attrs }) {
    return () => h(
      'button',
      {
        ...attrs,
        'type': 'button',
        'disabled': props.disabled ? true : undefined,
        'data-value': props.value !== undefined ? String(props.value) : undefined,
        'data-selected': String(props.selected)
      },
      props.label ?? ''
    )
  }
})

const stubSsrMenu = defineComponent({
  name: 'StubSsrMenu',
  inheritAttrs: false,
  props: {
    selected: { type: [Number, String], default: undefined }
  },
  setup(props, { slots }) {
    return () => h(
      'div',
      {
        'class': 'ssr-menu',
        'data-selected': props.selected !== undefined ? String(props.selected) : undefined
      },
      slots.control?.({
        open: ref(false),
        binds: { 'aria-haspopup': 'listbox' }
      })
    )
  }
})

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

async function renderPaginationSsr(
  properties: Partial<PaginationProps> = {},
  slots?: PaginationSlots
): Promise<string> {
  const Component = defineComponent({
    name: 'TestPaginationSsr',
    setup() {
      const props = reactive<PaginationProps>({
        ...defaultsPagination,
        ...properties
      })
      const design = new PaginationDesign<
        PaginationComponents,
        PaginationExpose,
        PaginationClasses,
        PaginationProps
      >(
        'd1.pagination',
        props,
        {
          components: {
            button: stubSsrButton,
            menu: stubSsrMenu
          }
        }
      )

      const render = design.render()

      return () => render() as VNode | undefined
    }
  })

  const Wrapper = defineComponent({
    name: 'TestPaginationSsrWrapper',
    setup() {
      return () => h(Component, {}, slots ? { ...slots } as Record<string, unknown> : undefined)
    }
  })

  const app = createSSRApp(Wrapper)

  return await renderToString(app)
}

describe('Pagination (SSR)', () => {
  it('should execute in a pure Node runtime without window or document', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')
  })

  it('should render full pagination markup, ARIA attributes, info, menu, loaders, ellipses, and slots on the server', async () => {
    const html = await renderPaginationSsr(
      {
        value: 5,
        rows: 10,
        count: 100,
        visible: 3,
        ends: 1,
        showEnds: true,
        showInfo: true,
        showMore: true,
        showMorePrev: true,
        menuRows: [10, 20, 50],
        textPagination: 'SSR Pagination',
        textInfo: '[item] of [count]'
      },
      {
        leading: () => [h('span', { class: 'ssr-leading' }, 'Leading')],
        info: () => [h('span', { class: 'ssr-info' }, 'Slot Info')],
        trailing: () => [h('span', { class: 'ssr-trailing' }, 'Trailing')]
      }
    )

    expect(html).toContain('role="navigation"')
    expect(html).toContain('aria-label="SSR Pagination"')
    expect(html).toContain('tabindex="0"')
    expect(html).toContain('class="d1-pagination__info"')
    expect(html).toContain('41-50 of 100')
    expect(html).toContain('class="d1-pagination__menuRows"')
    expect(html).toContain('data-selected="10"')
    expect(html).toContain('aria-current="page"')
    expect(html).toContain('aria-hidden="true"')
    expect(html).toContain('class="d1-pagination__ellipsis"')
    expect(html).toContain('class="ssr-leading"')
    expect(html).toContain('class="ssr-info"')
    expect(html).toContain('class="ssr-trailing"')
  })

  it('should render empty comment placeholder when hideIfOne is true and pagesCount <= 1', async () => {
    const html = await renderPaginationSsr({
      hideIfOne: true,
      count: 5,
      rows: 10
    })

    expect(html).toBe('<!---->')
  })

  it('should handle boundary count=0 and rows=0 safely without infinite loops or browser leaks', async () => {
    const html = await renderPaginationSsr({
      hideIfOne: false,
      count: 0,
      rows: 0,
      showEnds: true,
      showInfo: true,
      textInfo: '[item] / [count]'
    })

    expect(html).toContain('role="navigation"')
    expect(html).toContain('0-0 / 0')
  })

  it('should produce deterministic identical HTML across repeated server renders', async () => {
    const props: Partial<PaginationProps> = {
      value: 3,
      rows: 15,
      count: 90,
      visible: 3,
      showEnds: true,
      showInfo: true,
      menuRows: [15, 30]
    }

    const firstRender = await renderPaginationSsr(props)
    const secondRender = await renderPaginationSsr(props)

    expect(firstRender).toBe(secondRender)
  })
})
