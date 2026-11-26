// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { BlockDesign } from '../../Block'
import { Page } from '../Page'
import { PageDesign } from '../PageDesign'
import { defaultsPage, type PageProps, type PagePropsBasic } from '../props'
import type { PageClasses, PageComponents, PageExpose, PageSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockHeader = defineComponent({
  name: 'MockHeader',
  props: {
    label: [String, Number],
    caption: [String, Number],
    icon: [String, Object],
    tag: String,
    labelId: String
  },
  setup(props, { attrs, slots }) {
    return () => h('div', {
      'class': ['mock-header', attrs.class],
      'data-tag': props.tag
    }, [
      (slots.default || props.label !== undefined)
        ? h(props.tag ?? 'h1', { id: props.labelId, class: 'mock-header__label' }, slots.default ? slots.default() : String(props.label))
        : null,
      (slots.caption || props.caption !== undefined)
        ? h('span', { class: 'mock-header__caption' }, slots.caption ? slots.caption() : String(props.caption))
        : null,
      slots.trailing ? h('div', { class: 'mock-header__trailing' }, slots.trailing()) : null
    ])
  }
})

function mountPageDesign(
  initialProps: PageProps = {},
  slots?: PageSlots,
  extraAttrs: Record<string, unknown> = {},
  ItemConstructor?: typeof Page
) {
  const state = reactive<PageProps>({ ...initialProps })
  let exposed: (PageExpose & { elementHtml?: unknown }) | undefined
  let designInstance!: PageDesign<PageComponents, PageExpose, PageClasses, PagePropsBasic>

  const Host = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: { 'd1-page': true }
      }))
      const styles = computed<ConstrStyles>(() => ({
        '--page-token': '24px'
      }))

      designInstance = new PageDesign<PageComponents, PageExpose, PageClasses, PagePropsBasic>(
        'd1.page',
        state,
        {
          classes,
          styles,
          components: {
            header: MockHeader
          }
        },
        ItemConstructor
      )
      exposed = designInstance.expose() as PageExpose & { elementHtml?: unknown }
      return designInstance.render()
    }
  })

  const container = document.createElement('div')
  const app = createApp({
    render: () => h(Host, extraAttrs, slots as Record<string, () => unknown>)
  })
  app.mount(container)
  cleanups.push(() => app.unmount())

  return {
    container,
    state,
    design: designInstance,
    getExposed: () => exposed!
  }
}

describe('PageDesign (isolated class)', () => {
  it('should extend BlockDesign, render defaultsPage main tag, bind elementHtml ref, merge external attrs, and wire ARIA attributes', async () => {
    const onClick = vi.fn()
    const { container, state, design, getExposed } = mountPageDesign(
      {
        ...defaultsPage,
        headline: 'SETTINGS',
        label: 'Workspace Preferences',
        description: 'Manage global page preferences'
      },
      {
        default: () => [h('section', { class: 'page-content' }, 'Main page content')]
      },
      {
        'class': 'external-page',
        'style': { padding: '12px' },
        'data-testid': 'pg',
        onClick
      }
    )

    expect(design).toBeInstanceOf(PageDesign)
    expect(design).toBeInstanceOf(BlockDesign)
    expect(typeof design.renderBody).toBe('function')
    expect(typeof design.renderHeadline).toBe('function')

    const root = container.querySelector('[data-testid="pg"]') as HTMLElement | null
    expect(root).not.toBeNull()
    expect(root?.tagName).toBe('MAIN')
    expect(root?.classList.contains('d1-page')).toBe(true)
    expect(root?.classList.contains('external-page')).toBe(true)
    expect(root?.style.getPropertyValue('--page-token')).toBe('24px')
    expect(root?.style.padding).toBe('12px')

    const labelledBy = root?.getAttribute('aria-labelledby')
    const describedBy = root?.getAttribute('aria-describedby')
    expect(labelledBy).toBeTruthy()
    expect(describedBy).toBeTruthy()
    expect(root?.querySelector(`#${labelledBy}`)?.tagName).toBe('H1')
    expect(root?.querySelector(`#${describedBy}`)?.textContent).toBe('Manage global page preferences')

    expect(root?.querySelector('.d1-page__body')).not.toBeNull()
    expect(root?.querySelector('.d1-page__headline')?.textContent).toBe('SETTINGS')
    expect(root?.querySelector('.page-content')?.textContent).toBe('Main page content')

    const elementRef = getExposed().elementHtml as { value?: HTMLElement } | undefined
    expect(elementRef?.value).toBe(root)

    root?.click()
    expect(onClick).toHaveBeenCalledTimes(1)

    state.tag = 'section'
    await nextTick()
    expect(container.querySelector('[data-testid="pg"]')?.tagName).toBe('SECTION')
  })

  it('should omit .d1-page__body wrapper when headline, header, and description are all absent', () => {
    const { container } = mountPageDesign(
      { ...defaultsPage },
      {
        default: () => [h('div', { class: 'only-default' }, 'Body only')]
      }
    )

    const root = container.querySelector('.d1-page')!
    expect(root.tagName).toBe('MAIN')
    expect(root.querySelector('.d1-page__body')).toBeNull()
    expect(root.querySelector('.only-default')?.textContent).toBe('Body only')
    expect(root.hasAttribute('aria-labelledby')).toBe(false)
    expect(root.hasAttribute('aria-describedby')).toBe(false)
  })

  it('should render header inside .d1-page__body when only #label, #caption, or #trailing slots are provided', () => {
    const { container } = mountPageDesign(
      { ...defaultsPage },
      {
        label: () => [h('span', 'Slot-only Page Label')],
        caption: () => [h('span', 'Slot Caption')],
        trailing: () => [h('button', 'Action')]
      }
    )

    const root = container.querySelector('.d1-page')!
    expect(root.querySelector('.d1-page__body')).not.toBeNull()
    expect(root.querySelector('.mock-header__label')?.textContent).toBe('Slot-only Page Label')
    expect(root.querySelector('.mock-header__caption')?.textContent).toBe('Slot Caption')
    expect(root.querySelector('.mock-header__trailing')?.textContent).toBe('Action')
    expect(root.getAttribute('aria-labelledby')).toBeTruthy()
  })

  it('should accept custom ItemConstructor extending Page via DI', () => {
    const customSpy = vi.fn()
    class CustomPage extends Page {
      override get tag(): string {
        customSpy()
        return 'article'
      }
    }

    const { container } = mountPageDesign(
      { ...defaultsPage },
      { default: () => [h('p', 'Custom Page')] },
      {},
      CustomPage
    )

    expect(customSpy).toHaveBeenCalled()
    expect(container.querySelector('.d1-page')?.tagName).toBe('ARTICLE')
  })
})
