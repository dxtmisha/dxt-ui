// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { SectionDesign } from '../SectionDesign'
import { defaultsSection, type SectionProps, type SectionPropsBasic } from '../props'
import type { SectionClasses, SectionComponents, SectionExpose, SectionSlots } from '../types'

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
    tag: String,
    labelId: String
  },
  setup(props, { attrs, slots }) {
    return () => h('div', {
      'class': ['mock-header', attrs.class],
      'data-tag': props.tag
    }, [
      (slots.default || props.label !== undefined)
        ? h(props.tag ?? 'h2', { id: props.labelId, class: 'mock-header__label' }, slots.default ? slots.default() : String(props.label))
        : null,
      (slots.caption || props.caption !== undefined)
        ? h('span', { class: 'mock-header__caption' }, slots.caption ? slots.caption() : String(props.caption))
        : null,
      slots.trailing ? h('div', { class: 'mock-header__trailing' }, slots.trailing()) : null
    ])
  }
})

function mountSectionDesign(
  initialProps: SectionProps = { ...defaultsSection },
  slots?: SectionSlots,
  extraAttrs: Record<string, unknown> = {}
) {
  const state = reactive<SectionProps>({ ...defaultsSection, ...initialProps })
  let exposed: (SectionExpose & { elementHtml?: unknown }) | undefined

  const Host = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: { 'd1-section': true }
      }))
      const styles = computed<ConstrStyles>(() => ({
        '--section-gap': '12px'
      }))

      const design = new SectionDesign<SectionComponents, SectionExpose, SectionClasses, SectionPropsBasic>(
        'd1.section',
        state,
        {
          classes,
          styles,
          components: {
            header: MockHeader
          }
        }
      )
      exposed = design.expose() as SectionExpose & { elementHtml?: unknown }
      return design.render()
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
    getExposed: () => exposed!
  }
}

describe('SectionDesign (isolated class)', () => {
  it('should render section root tag by default, h2 header tag, merge attrs, and bind elementHtml ref', async () => {
    const onClick = vi.fn()
    const { container, state, getExposed } = mountSectionDesign(
      {
        headline: 'ACCOUNT',
        label: 'Profile Preferences',
        description: 'Configure your personal settings'
      },
      {
        default: () => [h('p', { class: 'section-body' }, 'Main content')]
      },
      {
        'class': 'external-section',
        'style': { marginTop: '8px' },
        'data-testid': 'sec',
        onClick
      }
    )

    const root = container.querySelector('[data-testid="sec"]') as HTMLElement | null
    expect(root).not.toBeNull()
    expect(root?.tagName).toBe('SECTION')
    expect(root?.classList.contains('d1-section')).toBe(true)
    expect(root?.classList.contains('external-section')).toBe(true)
    expect(root?.style.getPropertyValue('--section-gap')).toBe('12px')
    expect(root?.style.marginTop).toBe('8px')

    const labelledBy = root?.getAttribute('aria-labelledby')
    const describedBy = root?.getAttribute('aria-describedby')
    expect(labelledBy).toBeTruthy()
    expect(describedBy).toBeTruthy()
    expect(root?.querySelector(`#${labelledBy}`)?.tagName).toBe('H2')
    expect(root?.querySelector(`#${describedBy}`)?.textContent).toBe('Configure your personal settings')

    const elementRef = getExposed().elementHtml as { value?: HTMLElement } | undefined
    expect(elementRef?.value).toBe(root)

    root?.click()
    expect(onClick).toHaveBeenCalledTimes(1)

    state.tag = 'article'
    await nextTick()
    expect(container.querySelector('[data-testid="sec"]')?.tagName).toBe('ARTICLE')
  })

  it('should omit body wrapper when headline, header, and description are absent', () => {
    const { container } = mountSectionDesign(
      {},
      {
        default: () => [h('div', { class: 'only-default' }, 'Body only')]
      }
    )

    const root = container.querySelector('.d1-section')!
    expect(root.querySelector('.d1-section__body')).toBeNull()
    expect(root.querySelector('.only-default')?.textContent).toBe('Body only')
    expect(root.hasAttribute('aria-labelledby')).toBe(false)
    expect(root.hasAttribute('aria-describedby')).toBe(false)
  })
})
