// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, nextTick, ref } from 'vue'

import { setAreaValue } from '../../../functions/setAreaValue'
import { AreaDesign } from '../AreaDesign'
import type { AreaPropsBasic } from '../props'
import type { AreaClasses, AreaComponents, AreaExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
})

const TestArea = defineComponent({
  name: 'TestArea',
  props: {
    areaDefault: String
  },
  setup(props) {
    const design = new AreaDesign<AreaComponents, AreaExpose, AreaClasses, AreaPropsBasic>(
      'd1.area',
      props
    )

    return design.render()
  }
})

describe('Area (integration)', () => {
  it('should switch rendered slots reactively when injected area value changes', async () => {
    const activeArea = ref<string | undefined>('header')

    const Host = defineComponent({
      setup() {
        setAreaValue(activeArea)
        return () => h(TestArea, { areaDefault: 'fallback' }, {
          header: () => h('header', 'Header Area'),
          sidebar: () => h('aside', 'Sidebar Area'),
          fallback: () => h('div', 'Fallback Area'),
          default: () => h('p', 'Default Area')
        })
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    expect(container.innerHTML).toBe('<header>Header Area</header>')

    activeArea.value = 'sidebar'
    await nextTick()
    expect(container.innerHTML).toBe('<aside>Sidebar Area</aside>')

    activeArea.value = 'unknown'
    await nextTick()
    expect(container.innerHTML).toBe('<p>Default Area</p>')

    activeArea.value = undefined
    await nextTick()
    expect(container.innerHTML).toBe('<div>Fallback Area</div>')
  })

  it('should support Unicode, Cyrillic, Vietnamese, and Emoji slot names', () => {
    const Host = defineComponent({
      setup() {
        setAreaValue('khu_vực_🔥')
        return () => h(TestArea, {}, {
          'khu_vực_🔥': () => h('span', 'Tiếng Việt / Привет'),
          'default': () => h('span', 'Default')
        })
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    expect(container.textContent).toBe('Tiếng Việt / Привет')
  })
})
