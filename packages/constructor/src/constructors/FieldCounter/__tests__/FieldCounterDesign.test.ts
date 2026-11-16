// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { FieldCounterDesign } from '../FieldCounterDesign'
import { type FieldCounterProps } from '../props'
import type {
  FieldCounterClasses,
  FieldCounterComponents,
  FieldCounterExpose
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

describe('FieldCounterDesign (unit & DOM)', () => {
  it('should render nothing when neither counter nor positive maxlength is set', async () => {
    const props = reactive<FieldCounterProps>({})
    const Component = defineComponent({
      setup() {
        const design = new FieldCounterDesign<
          FieldCounterComponents,
          FieldCounterExpose,
          FieldCounterClasses,
          FieldCounterProps
        >('d1.fieldCounter', props)

        return design.render()
      }
    })

    const container = document.createElement('div')
    const app = createApp(Component)
    app.mount(container)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    expect(container.querySelector('span')).toBeNull()
    expect(container.querySelector('[aria-live]')).toBeNull()
  })

  it('should render counter span with id, main class, and merge external attrs without overwriting', async () => {
    const props = reactive<FieldCounterProps>({
      id: 'counter-id',
      counter: 5,
      maxlength: 20
    })
    const onExternalClick = vi.fn()

    const Inner = defineComponent({
      setup() {
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-fieldCounter': true
          }
        }))

        const design = new FieldCounterDesign<
          FieldCounterComponents,
          FieldCounterExpose,
          FieldCounterClasses,
          FieldCounterProps
        >('d1.fieldCounter', props, {
          classes: classesToken,
          styles: computed(() => ({ color: 'red' }))
        })

        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Inner, {
          class: 'external-class',
          style: 'font-weight: bold',
          onClick: onExternalClick
        })
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    const span = container.querySelector('span')
    expect(span).not.toBeNull()
    expect(span?.getAttribute('id')).toBe('counter-id')
    expect(span?.classList.contains('d1-fieldCounter')).toBe(true)
    expect(span?.classList.contains('external-class')).toBe(true)
    expect(span?.getAttribute('style')).toContain('color: red')
    expect(span?.getAttribute('style')).toContain('font-weight: bold')
    expect(span?.innerHTML).toBe('5 / 20')

    span?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(onExternalClick).toHaveBeenCalledTimes(1)
  })

  it('should render aria live region only when screen reader announcement text is available', async () => {
    const props = reactive<FieldCounterProps>({
      counter: 10,
      maxlength: 100
    })

    const Component = defineComponent({
      setup() {
        const design = new FieldCounterDesign<
          FieldCounterComponents,
          FieldCounterExpose,
          FieldCounterClasses,
          FieldCounterProps
        >('d1.fieldCounter', props)

        return design.render()
      }
    })

    const container = document.createElement('div')
    const app = createApp(Component)
    app.mount(container)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    expect(container.querySelector('[aria-live="polite"]')).toBeNull()

    props.counter = 95
    await nextTick()

    const liveRegion = container.querySelector('.d1-fieldCounter__aria')
    expect(liveRegion).not.toBeNull()
    expect(liveRegion?.getAttribute('aria-live')).toBe('polite')

    const ariaSpan = liveRegion?.querySelector('span[role="img"]')
    expect(ariaSpan?.getAttribute('aria-label')).toBe('Remaining 5 characters')
  })
})
