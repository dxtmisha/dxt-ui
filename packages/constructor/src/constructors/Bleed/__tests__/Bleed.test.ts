// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { BleedDesign } from '../BleedDesign'
import type { BleedPropsBasic } from '../props'
import type { BleedClasses, BleedComponents, BleedExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
})

const TestBleed = defineComponent({
  name: 'TestBleed',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup(props, { expose }) {
    const classes = computed<ConstrClasses>(() => ({
      main: { 'd1-bleed': true }
    }))
    const design = new BleedDesign<BleedComponents, BleedExpose, BleedClasses, BleedPropsBasic>(
      'd1.bleed',
      props,
      {
        classes
      }
    )

    expose(design.expose())
    return design.render()
  }
})

describe('Bleed (integration)', () => {
  it('should render default slot content and reactively update tag', async () => {
    const tag = ref<string>('div')

    const Host = defineComponent({
      setup() {
        return () => h(
          TestBleed,
          { tag: tag.value, class: 'custom-bleed' },
          { default: () => h('div', { class: 'child' }, 'Bleed Body') }
        )
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    expect(container.firstElementChild?.tagName).toBe('DIV')
    expect(container.firstElementChild?.classList.contains('d1-bleed')).toBe(true)
    expect(container.firstElementChild?.classList.contains('custom-bleed')).toBe(true)
    expect(container.querySelector('.child')?.textContent).toBe('Bleed Body')

    tag.value = 'figure'
    await nextTick()
    expect(container.firstElementChild?.tagName).toBe('FIGURE')
  })
})
