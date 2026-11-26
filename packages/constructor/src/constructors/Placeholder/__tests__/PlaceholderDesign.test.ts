// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { PlaceholderDesign } from '../PlaceholderDesign'
import type { PlaceholderProps, PlaceholderPropsBasic } from '../props'
import type { PlaceholderClasses, PlaceholderComponents, PlaceholderExpose, PlaceholderSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockImage = defineComponent({
  name: 'MockImage',
  props: { value: [String, Object] },
  emits: ['load'],
  setup(props, { attrs, emit }) {
    return () => h('img', {
      ...attrs,
      'class': ['mock-image', attrs.class],
      'data-value': String(props.value ?? ''),
      'onClick': () => emit('load', { image: new Image(), width: 100, height: 100 })
    })
  }
})

const MockActions = defineComponent({
  name: 'MockActions',
  props: { list: Array, align: String },
  emits: ['click'],
  setup(props, { attrs, emit }) {
    return () => h('div', {
      ...attrs,
      'class': ['mock-actions', attrs.class],
      'data-align': props.align,
      'onClick': (event: MouseEvent) => emit('click', event, { value: 'retry', type: 'click' })
    }, JSON.stringify(props.list ?? []))
  }
})

function mountPlaceholderDesign(
  initialProps: PlaceholderProps = {},
  slots?: PlaceholderSlots,
  extraAttrs: Record<string, unknown> = {},
  emitsSpy: ReturnType<typeof vi.fn> = vi.fn()
) {
  const state = reactive<PlaceholderProps>({ ...initialProps })
  let exposed: (PlaceholderExpose & { elementHtml?: unknown }) | undefined

  const Host = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({ main: { 'd1-placeholder': true } }))
      const styles = computed<ConstrStyles>(() => ({ '--placeholder-gap': '16px' }))

      const design = new PlaceholderDesign<
        PlaceholderComponents,
        PlaceholderExpose,
        PlaceholderClasses,
        PlaceholderPropsBasic
      >(
        'd1.placeholder',
        state,
        {
          emits: emitsSpy as never,
          classes,
          styles,
          components: {
            image: MockImage,
            actions: MockActions
          }
        }
      )
      exposed = design.expose() as PlaceholderExpose & { elementHtml?: unknown }
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
    emitsSpy,
    getExposed: () => exposed!
  }
}

describe('PlaceholderDesign (isolated class)', () => {
  it('renders image wrapper, label, description, context slot, actions, ARIA links, and elementHtml ref', async () => {
    const { container, state, emitsSpy, getExposed } = mountPlaceholderDesign(
      {
        image: 'empty-state',
        label: 'No Data',
        description: 'Nothing to show right now.',
        actionsList: [{ label: 'Refresh' }]
      },
      {
        context: () => [h('div', { class: 'custom-context' }, 'Extra info')]
      },
      {
        'class': 'external-placeholder',
        'style': { padding: '24px' },
        'data-testid': 'ph'
      }
    )

    const root = container.querySelector('[data-testid="ph"]') as HTMLElement
    expect(root.classList.contains('d1-placeholder')).toBe(true)
    expect(root.classList.contains('external-placeholder')).toBe(true)
    expect(root.style.getPropertyValue('--placeholder-gap')).toBe('16px')
    expect(root.style.padding).toBe('24px')

    const labelledBy = root.getAttribute('aria-labelledby')
    const describedBy = root.getAttribute('aria-describedby')
    expect(root.querySelector(`#${labelledBy}`)?.textContent).toBe('No Data')
    expect(root.querySelector(`#${describedBy}`)?.textContent).toBe('Nothing to show right now.')
    expect(root.querySelector('.d1-placeholder__image .mock-image')?.getAttribute('data-value')).toBe('empty-state')
    expect(root.querySelector('.custom-context')?.textContent).toBe('Extra info')
    expect(root.querySelector('.mock-actions')?.getAttribute('data-align')).toBe('center')

    const elementRef = getExposed().elementHtml as { value?: HTMLElement } | undefined
    expect(elementRef?.value).toBe(root)

    ;(root.querySelector('.mock-image') as HTMLElement).click()
    ;(root.querySelector('.mock-actions') as HTMLElement).click()
    expect(emitsSpy).toHaveBeenCalledWith('load', expect.objectContaining({ width: 100 }))
    expect(emitsSpy).toHaveBeenCalledWith('actions', expect.any(MouseEvent), { value: 'retry', type: 'click' })
    expect(emitsSpy).toHaveBeenCalledWith('actionsLite', { value: 'retry', type: 'click' })

    state.image = undefined
    await nextTick()
    expect(root.querySelector('.d1-placeholder__image')).toBeNull()
  })

  it('supports default and description slots without allocating image wrapper when image is absent', () => {
    const { container } = mountPlaceholderDesign(
      {},
      {
        default: () => [h('span', 'Default Slot Title')],
        description: () => [h('span', 'Slot Description')]
      }
    )

    const root = container.querySelector('.d1-placeholder')!
    expect(root.querySelector('.d1-placeholder__image')).toBeNull()
    expect(root.querySelector('.d1-placeholder__label')?.textContent).toBe('Default Slot Title')
    expect(root.querySelector('.d1-placeholder__description')?.textContent).toBe('Slot Description')
  })
})
