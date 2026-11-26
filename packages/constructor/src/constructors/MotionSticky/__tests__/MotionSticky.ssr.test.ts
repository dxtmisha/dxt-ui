// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName } from '@dxtmisha/functional'
import { MotionSticky } from '../MotionSticky'
import { MotionStickyDesign } from '../MotionStickyDesign'
import { MotionStickyElement } from '../MotionStickyElement'
import type { MotionStickyPropsBasic } from '../props'
import type {
  MotionStickyClasses,
  MotionStickyComponents,
  MotionStickyExpose
} from '../types'

const createSsrComponent = () => {
  return defineComponent({
    name: 'D1MotionSticky',
    inheritAttrs: false,
    props: {
      elementScroll: [String, Object] as unknown as () => MotionStickyPropsBasic['elementScroll'],
      classActivity: String,
      tag: String
    },
    emits: ['sticky'],
    setup(props, { emit, expose }) {
      const design = new MotionStickyDesign<
        MotionStickyComponents,
        MotionStickyExpose,
        MotionStickyClasses,
        MotionStickyPropsBasic
      >(
        'd1.motion-sticky',
        props,
        {
          emits: emit as never,
          classes: ref({ main: 'd1-motion-sticky' })
        }
      )

      expose(design.expose())
      return design.render()
    }
  })
}

describe('MotionSticky (SSR)', () => {
  it('should render valid deterministic HTML without browser globals in Node runtime', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const SsrComp = createSsrComponent()

    const app1 = createSSRApp({
      render: () => h(
        SsrComp,
        { tag: 'header', classActivity: 'is-sticky', elementScroll: '#main-scroll', class: 'extra' },
        { default: () => h('span', 'Sticky SSR') }
      )
    })
    const app2 = createSSRApp({
      render: () => h(
        SsrComp,
        { tag: 'header', classActivity: 'is-sticky', elementScroll: '#main-scroll', class: 'extra' },
        { default: () => h('span', 'Sticky SSR') }
      )
    })

    const html1 = await renderToString(app1)
    const html2 = await renderToString(app2)

    expect(html1).toBe(html2)
    expect(html1).toContain('<header')
    expect(html1).toContain('class="d1-motion-sticky extra"')
    expect(html1).toContain('<span>Sticky SSR</span>')
    expect(html1).toContain('</header>')
  })

  it('should render default div tag safely when no props are provided', async () => {
    const SsrComp = createSsrComponent()
    const app = createSSRApp({
      render: () => h(SsrComp, null, { default: () => 'Content' })
    })

    const html = await renderToString(app)

    expect(html).toContain('<div')
    expect(html).toContain('class="d1-motion-sticky"')
    expect(html).toContain('Content')
    expect(html).toContain('</div>')
  })

  it('should not instantiate MotionStickyElement or run lifecycle DOM listeners during SSR', async () => {
    let logicInstance: MotionSticky | undefined

    const SsrLogicComp = defineComponent({
      setup() {
        const elementRef = ref<HTMLElement | undefined>()
        logicInstance = new MotionSticky(
          { tag: 'div', elementScroll: '#app' },
          elementRef,
          new DesignName('d1-motion-sticky')
        )

        return () => h(logicInstance!.tag, 'SSR')
      }
    })

    const html = await renderToString(createSSRApp(SsrLogicComp))

    expect(html).toContain('<div>SSR</div>')
    expect(logicInstance?.hasInstance('scroll')).toBe(true)
    expect(logicInstance?.hasInstance('element')).toBe(false)
  })

  it('should safely return undefined from MotionStickyElement DOM getters on the server', () => {
    const stickyElement = new MotionStickyElement({ elementScroll: '#app' }, ref())

    expect(stickyElement.eventElement).toBeUndefined()
    expect(stickyElement.focusElement).toBeUndefined()
    expect(stickyElement.getPositionStyle()).toBeUndefined()
    expect(stickyElement.getPositionElement()).toBeUndefined()
  })
})
