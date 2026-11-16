// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { computed, createApp, defineComponent, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { FieldCounterDesign } from '../FieldCounterDesign'
import { defaultsFieldCounter, type FieldCounterProps } from '../props'
import type {
  FieldCounterClasses,
  FieldCounterComponents,
  FieldCounterExpose
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
})

/**
 * Mounts FieldCounterDesign in jsdom with reactive props.
 *
 * Монтирует FieldCounterDesign в jsdom с реактивными свойствами.
 * @param initialProps initial component properties / начальные свойства компонента
 * @returns reactive props and container element / реактивные свойства и контейнер
 */
async function mountFieldCounter(initialProps: FieldCounterProps = {}) {
  const props = reactive<FieldCounterProps>({
    ...(defaultsFieldCounter as FieldCounterProps),
    ...initialProps
  })

  const Component = defineComponent({
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
        classes: classesToken
      })

      return design.render()
    }
  })

  const container = document.createElement('div')
  const app = createApp(Component)
  app.mount(container)
  mountedCleanups.push(() => app.unmount())
  await nextTick()

  return { container, props }
}

describe('FieldCounter component integration', () => {
  it('should reactively update display text, template, and screen reader announcements', async () => {
    const { container, props } = await mountFieldCounter({
      id: 'input-counter',
      counter: 0,
      maxlength: 100
    })

    const span = container.querySelector('.d1-fieldCounter')
    expect(span).not.toBeNull()
    expect(span?.getAttribute('id')).toBe('input-counter')
    expect(span?.innerHTML).toBe('0 / 100')
    expect(container.querySelector('.d1-fieldCounter__aria')).toBeNull()

    props.counter = 90
    await nextTick()

    expect(span?.innerHTML).toBe('90 / 100')
    expect(
      container.querySelector('.d1-fieldCounter__aria span')?.getAttribute('aria-label')
    ).toBe('Remaining 10 characters')

    props.counter = 100
    await nextTick()

    expect(
      container.querySelector('.d1-fieldCounter__aria span')?.getAttribute('aria-label')
    ).toBe('Character limit exceeded')

    props.template = '<b>[c]</b> / [m]'
    await nextTick()

    expect(span?.innerHTML).toBe('<b>100</b> / 100')
  })

  it('should hide output cleanly when counter and maxlength are cleared', async () => {
    const { container, props } = await mountFieldCounter({
      counter: 12
    })

    expect(container.querySelector('.d1-fieldCounter')?.innerHTML).toBe('12')

    props.counter = undefined
    await nextTick()

    expect(container.querySelector('.d1-fieldCounter')).toBeNull()
  })
})
