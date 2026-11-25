import { afterEach, describe, expect, it, vi } from 'vitest'
import { createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import * as functionalBasic from '@dxtmisha/functional-basic'
import { HeadroomDesign } from '../HeadroomDesign'
import type { HeadroomProps } from '../props'
import type {
  HeadroomClasses,
  HeadroomComponents,
  HeadroomExpose
} from '../types'

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@dxtmisha/functional-basic')>()

  return {
    ...actual,
    isDomRuntime: vi.fn(() => false)
  }
})

const createSsrComponent = () => defineComponent({
  name: 'DHeadroomSsr',
  props: {
    tag: String,
    disappears: Boolean,
    transformThreshold: Number,
    scrollElement: String
  },
  setup(props, { emit, expose }) {
    const design = new HeadroomDesign<
      HeadroomComponents,
      HeadroomExpose,
      HeadroomClasses,
      HeadroomProps
    >(
      'd-headroom',
      props as Readonly<HeadroomProps>,
      { emits: emit }
    )

    expose(design.expose())
    return design.render()
  }
})

describe('Headroom (SSR)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders cleanly in SSR mode without accessing window or DOM APIs', async () => {
    vi.mocked(functionalBasic.isDomRuntime).mockReturnValue(false)
    const SsrComponent = createSsrComponent()

    const app = createSSRApp({
      render: () => h(
        SsrComponent,
        {
          tag: 'header',
          disappears: true,
          transformThreshold: 120,
          scrollElement: '.page-scroll',
          class: 'ssr-headroom'
        },
        {
          default: () => 'SSR Content'
        }
      )
    })

    const html = await renderToString(app)

    expect(html).toContain('<header')
    expect(html).toContain('class="ssr-headroom"')
    expect(html).toContain('SSR Content')
    expect(html).toContain('</header>')
  })

  it('keeps concurrent SSR app renders isolated without cross-request state leakage', async () => {
    vi.mocked(functionalBasic.isDomRuntime).mockReturnValue(false)
    const SsrComponent = createSsrComponent()

    const appOne = createSSRApp({
      render: () => h(SsrComponent, { tag: 'div', disappears: true }, { default: () => 'First' })
    })
    const appTwo = createSSRApp({
      render: () => h(SsrComponent, { tag: 'nav', transformThreshold: 80 }, { default: () => 'Second' })
    })

    const [htmlOne, htmlTwo] = await Promise.all([
      renderToString(appOne),
      renderToString(appTwo)
    ])

    expect(htmlOne.startsWith('<div')).toBe(true)
    expect(htmlOne).toContain('First')
    expect(htmlOne.endsWith('</div>')).toBe(true)

    expect(htmlTwo.startsWith('<nav')).toBe(true)
    expect(htmlTwo).toContain('Second')
    expect(htmlTwo.endsWith('</nav>')).toBe(true)
  })
})
