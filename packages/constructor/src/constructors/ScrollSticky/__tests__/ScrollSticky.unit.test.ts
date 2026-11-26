// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignName, ScrollbarWidthRef } from '@dxtmisha/functional'

import { ScrollSticky, type ScrollStickyConstructors } from '../ScrollSticky'
import { ScrollStickyScroll } from '../ScrollStickyScroll'
import { defaultsScrollSticky, type ScrollStickyProps } from '../props'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

function createScrollSticky(
  props: ScrollStickyProps = { ...defaultsScrollSticky },
  constructors?: Partial<ScrollStickyConstructors>
): ScrollSticky {
  let instance!: ScrollSticky

  const Host = defineComponent({
    setup() {
      const element = ref<HTMLDivElement | undefined>()
      const naming = new DesignName('d1.scrollSticky')
      instance = new ScrollSticky(props, element, naming, undefined, undefined, undefined, constructors)
      return () => h('div', { ref: element })
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return instance
}

describe('ScrollSticky (isolated class)', () => {
  it('skips creating scroll lifecycle helper when visible=false and creates it reactively when visible becomes true', async () => {
    const props = reactive<ScrollStickyProps>({ visible: false })
    const instance = createScrollSticky(props)

    expect(instance.hasInstance('scroll')).toBe(false)
    expect(instance.hasInstance('width')).toBe(false)

    instance.onResize()
    expect(instance.hasInstance('scroll')).toBe(false)

    props.visible = true
    await nextTick()
    expect(instance.hasInstance('scroll')).toBe(true)
  })

  it('supports DI overrides for scroll and width constructors', () => {
    const resizeSpy = vi.fn()

    class CustomWidth extends ScrollbarWidthRef {}
    class CustomScroll extends ScrollStickyScroll {
      override readonly onResize = resizeSpy
    }

    const instance = createScrollSticky(
      { visible: true },
      { scroll: CustomScroll, width: CustomWidth }
    )

    expect(instance.i('scroll')).toBeInstanceOf(CustomScroll)
    expect(instance.i('width')).toBeInstanceOf(CustomWidth)
    instance.onResize()
    expect(resizeSpy).toHaveBeenCalled()
  })
})
