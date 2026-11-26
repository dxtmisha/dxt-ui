import { describe, it, expect, afterEach, vi } from 'vitest'
import { createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { MotionFlipDesign } from '../MotionFlipDesign'
import type { MotionFlipPropsBasic } from '../props'
import type {
  MotionFlipClasses,
  MotionFlipComponents,
  MotionFlipExpose
} from '../types'

const createSsrComponent = () => defineComponent({
  name: 'D1MotionFlip',
  props: {
    auto: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const design = new MotionFlipDesign<
      MotionFlipComponents,
      MotionFlipExpose,
      MotionFlipClasses,
      MotionFlipPropsBasic
    >(
      'd1-motion-flip',
      props
    )

    return design.render()
  }
})

describe('MotionFlip (SSR)', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('should render valid HTML markup via renderToString without invoking browser APIs', async () => {
    const rafSpy = vi.fn()
    const observerSpy = vi.fn()
    vi.stubGlobal('requestAnimationFrame', rafSpy)
    vi.stubGlobal('MutationObserver', observerSpy)

    const FlipComponent = createSsrComponent()
    const app = createSSRApp({
      render: () => h(
        FlipComponent,
        {
          'auto': true,
          'class': 'ssr-flip',
          'data-ssr': 'true'
        },
        {
          default: () => [
            h('div', { key: '1' }, 'First'),
            h('div', { key: '2' }, 'Second')
          ]
        }
      )
    })

    const html = await renderToString(app)

    expect(html).toContain('<div')
    expect(html).toContain('class="ssr-flip"')
    expect(html).toContain('data-ssr="true"')
    expect(html).toContain('<div>First</div>')
    expect(html).toContain('<div>Second</div>')
    expect(rafSpy).not.toHaveBeenCalled()
    expect(observerSpy).not.toHaveBeenCalled()
  })

  it('should produce deterministic HTML across concurrent SSR renders without state leakage', async () => {
    const FlipComponent = createSsrComponent()

    const renderRequest = async (label: string, disabled: boolean) => {
      const app = createSSRApp({
        render: () => h(
          FlipComponent,
          { auto: !disabled, disabled },
          { default: () => h('span', label) }
        )
      })
      return renderToString(app)
    }

    const [htmlA, htmlB] = await Promise.all([
      renderRequest('Alpha', false),
      renderRequest('Beta', true)
    ])

    expect(htmlA).toContain('<span>Alpha</span>')
    expect(htmlA).not.toContain('Beta')
    expect(htmlB).toContain('<span>Beta</span>')
    expect(htmlB).not.toContain('Alpha')
  })
})
