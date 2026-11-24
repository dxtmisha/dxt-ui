// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { BlockDesign } from '../BlockDesign'
import type { BlockProps, BlockPropsBasic } from '../props'
import type { BlockClasses, BlockComponents, BlockExpose, BlockSlots } from '../types'

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
        ? h(props.tag ?? 'h3', { id: props.labelId, class: 'mock-header__label' }, slots.default ? slots.default() : String(props.label))
        : null,
      (slots.caption || props.caption !== undefined)
        ? h('span', { class: 'mock-header__caption' }, slots.caption ? slots.caption() : String(props.caption))
        : null,
      slots.trailing ? h('div', { class: 'mock-header__trailing' }, slots.trailing()) : null
    ])
  }
})

function mountBlockDesign(
  initialProps: BlockProps = {},
  slots?: BlockSlots,
  extraAttrs: Record<string, unknown> = {}
) {
  const state = reactive<BlockProps>({ ...initialProps })
  let exposed: (BlockExpose & { elementHtml?: unknown }) | undefined

  const Host = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: { 'd1-block': true }
      }))
      const styles = computed<ConstrStyles>(() => ({
        '--block-token': '16px'
      }))

      const design = new BlockDesign<BlockComponents, BlockExpose, BlockClasses, BlockPropsBasic>(
        'd1.block',
        state,
        {
          classes,
          styles,
          components: {
            header: MockHeader
          }
        }
      )
      exposed = design.expose() as BlockExpose & { elementHtml?: unknown }
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

describe('BlockDesign (isolated class)', () => {
  it('should render polymorphic root tag, bind elementHtml ref, merge external attrs, and wire ARIA attributes', async () => {
    const onClick = vi.fn()
    const { container, state, getExposed } = mountBlockDesign(
      {
        tag: 'section',
        headline: 'OVERVIEW',
        label: 'Team Summary',
        tagHeader: 'h2',
        description: 'Active team metrics'
      },
      {
        default: () => [h('p', { class: 'block-content' }, 'Main content body')]
      },
      {
        'class': 'external-block',
        'style': { padding: '8px' },
        'data-testid': 'blk',
        onClick
      }
    )

    const root = container.querySelector('[data-testid="blk"]') as HTMLElement | null
    expect(root).not.toBeNull()
    expect(root?.tagName).toBe('SECTION')
    expect(root?.classList.contains('d1-block')).toBe(true)
    expect(root?.classList.contains('external-block')).toBe(true)
    expect(root?.style.getPropertyValue('--block-token')).toBe('16px')
    expect(root?.style.padding).toBe('8px')

    const labelledBy = root?.getAttribute('aria-labelledby')
    const describedBy = root?.getAttribute('aria-describedby')
    expect(labelledBy).toBeTruthy()
    expect(describedBy).toBeTruthy()
    expect(root?.querySelector(`#${labelledBy}`)?.tagName).toBe('H2')
    expect(root?.querySelector(`#${describedBy}`)?.textContent).toBe('Active team metrics')

    expect(root?.querySelector('.d1-block__body')).not.toBeNull()
    expect(root?.querySelector('.d1-block__headline')?.textContent).toBe('OVERVIEW')
    expect(root?.querySelector('.block-content')?.textContent).toBe('Main content body')

    const elementRef = getExposed().elementHtml as { value?: HTMLElement } | undefined
    expect(elementRef?.value).toBe(root)

    root?.click()
    expect(onClick).toHaveBeenCalledTimes(1)

    state.tag = 'article'
    await nextTick()
    expect(container.querySelector('[data-testid="blk"]')?.tagName).toBe('ARTICLE')
  })

  it('should omit .d1-block__body wrapper when headline, header, and description are all absent', () => {
    const { container } = mountBlockDesign(
      {},
      {
        default: () => [h('div', { class: 'only-default' }, 'Body only')]
      }
    )

    const root = container.querySelector('.d1-block')!
    expect(root.querySelector('.d1-block__body')).toBeNull()
    expect(root.querySelector('.only-default')?.textContent).toBe('Body only')
    expect(root.hasAttribute('aria-labelledby')).toBe(false)
    expect(root.hasAttribute('aria-describedby')).toBe(false)
  })

  it('should render header inside .d1-block__body when only #label, #caption, or #trailing slots are provided', () => {
    const { container } = mountBlockDesign(
      {},
      {
        label: () => [h('span', 'Slot-only Header Label')],
        caption: () => [h('span', 'Slot Caption')],
        trailing: () => [h('button', 'More')]
      }
    )

    const root = container.querySelector('.d1-block')!
    expect(root.querySelector('.d1-block__body')).not.toBeNull()
    expect(root.querySelector('.mock-header__label')?.textContent).toBe('Slot-only Header Label')
    expect(root.querySelector('.mock-header__caption')?.textContent).toBe('Slot Caption')
    expect(root.querySelector('.mock-header__trailing')?.textContent).toBe('More')
    expect(root.getAttribute('aria-labelledby')).toBeTruthy()
  })
})
