// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { setAreaValue } from '../../../functions/setAreaValue'
import { PageAreaDesign } from '../PageAreaDesign'
import { defaultsPageArea, type PageAreaProps, type PageAreaPropsBasic } from '../props'
import type { PageAreaClasses, PageAreaComponents, PageAreaExpose, PageAreaSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const createStub = (tagName: string) => defineComponent({
  name: `Stub-${tagName}`,
  props: {
    headline: [String, Number],
    label: [String, Number],
    caption: [String, Number],
    description: [String, Number]
  },
  setup(props, { slots }) {
    return () => h('div', { 'data-delegated': tagName }, [
      props.headline !== undefined ? h('span', { class: 'stub-headline' }, String(props.headline)) : null,
      props.label !== undefined ? h('span', { class: 'stub-label' }, String(props.label)) : null,
      slots.trailing ? h('div', { class: 'stub-trailing' }, slots.trailing()) : null,
      slots.default ? h('div', { class: 'stub-default' }, slots.default()) : null
    ])
  }
})

function mountPageAreaDesign(
  initialArea?: string,
  initialProps: PageAreaProps = { ...defaultsPageArea },
  slots?: PageAreaSlots,
  extraAttrs: Record<string, unknown> = {}
) {
  const areaRef = initialArea !== undefined ? ref<string | undefined>(initialArea) : undefined
  const state = reactive<PageAreaProps>({ ...defaultsPageArea, ...initialProps })

  const Child = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: { 'd1-pageArea': true }
      }))
      const styles = computed<ConstrStyles>(() => ({}))

      const design = new PageAreaDesign<PageAreaComponents, PageAreaExpose, PageAreaClasses, PageAreaPropsBasic>(
        'd1.pageArea',
        state,
        {
          classes,
          styles,
          components: {
            page: createStub('page'),
            section: createStub('section'),
            block: createStub('block'),
            group: createStub('group')
          }
        }
      )

      return design.render()
    }
  })

  const Host = defineComponent({
    setup() {
      if (areaRef) {
        setAreaValue(areaRef)
      }
      return () => h(Child, extraAttrs, slots as Record<string, () => unknown>)
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return { container, state, areaRef }
}

describe('PageAreaDesign (isolated design component)', () => {
  it('should delegate to page/section/block/group and forward props and slots', async () => {
    const { container, areaRef } = mountPageAreaDesign(
      'container',
      { headline: 'Title', label: 0 },
      {
        trailing: () => [h('span', 'Trail')],
        default: () => [h('p', 'Inner content')]
      }
    )

    expect(container.querySelector('[data-delegated="page"]')).not.toBeNull()
    expect(container.querySelector('.stub-headline')?.textContent).toBe('Title')
    expect(container.querySelector('.stub-label')?.textContent).toBe('0')
    expect(container.querySelector('.stub-trailing')?.textContent).toBe('Trail')
    expect(container.querySelector('.stub-default')?.textContent).toBe('Inner content')

    areaRef!.value = 'page'
    await nextTick()
    expect(container.querySelector('[data-delegated="section"]')).not.toBeNull()

    areaRef!.value = 'section'
    await nextTick()
    expect(container.querySelector('[data-delegated="block"]')).not.toBeNull()

    areaRef!.value = 'block'
    await nextTick()
    expect(container.querySelector('[data-delegated="group"]')).not.toBeNull()
  })

  it('should fall back to group without injected area context and forward attrs', () => {
    const { container } = mountPageAreaDesign(
      undefined,
      { label: 'Fallback Group' },
      undefined,
      { 'data-testid': 'forwarded-pa', 'class': 'custom-pa-class' }
    )
    const el = container.querySelector('[data-delegated="group"]')
    expect(el).not.toBeNull()
    expect(el?.getAttribute('data-testid')).toBe('forwarded-pa')
    expect(el?.classList.contains('custom-pa-class')).toBe(true)
    expect(container.querySelector('.stub-label')?.textContent).toBe('Fallback Group')
  })
})
