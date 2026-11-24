// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, type ConstrStyles, ServerStorage } from '@dxtmisha/functional'

import { getAreaValue } from '../../../functions/getAreaValue'
import { ContainerDesign } from '../ContainerDesign'
import { defaultsContainer, type ContainerProps } from '../props'
import type { ContainerClasses, ContainerComponents, ContainerExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const TestContainerSsr = defineComponent({
  name: 'TestContainerSsr',
  props: {
    area: {
      type: String,
      default: defaultsContainer.area
    },
    align: {
      type: String as () => ContainerProps['align'],
      default: defaultsContainer.align
    }
  },
  setup(props) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-container': true,
        [`d1-container--align--${props.align}`]: Boolean(props.align)
      }
    }))
    const stylesToken = computed<ConstrStyles>(() => ({
      '--d1-container-paddingX': '24px'
    }))

    const design = new ContainerDesign<
      ContainerComponents,
      ContainerExpose,
      ContainerClasses,
      ContainerProps
    >(
      'd1.container',
      props,
      {
        classes: classesToken,
        styles: stylesToken
      }
    )

    return design.render()
  }
})

describe('Container (SSR)', () => {
  it('should render valid HTML with classes, styles, attrs, slot content, and provided area in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const AreaReader = defineComponent({
      setup() {
        return () => h('span', { class: 'ssr-area' }, getAreaValue() ?? 'none')
      }
    })

    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestContainerSsr,
          {
            id: 'ssr-container',
            align: 'left',
            class: 'extra-ssr'
          },
          {
            default: () => [
              h('p', 'SSR Body'),
              h(AreaReader)
            ]
          }
        )
      }
    }))

    const html = await renderToString(app)

    expect(html).toContain('id="ssr-container"')
    expect(html).toContain('d1-container')
    expect(html).toContain('d1-container--align--left')
    expect(html).toContain('extra-ssr')
    expect(html).toContain('--d1-container-paddingX:24px')
    expect(html).toContain('<p>SSR Body</p>')
    expect(html).toContain('<span class="ssr-area">container</span>')
  })

  it('should isolate provided area state across concurrent SSR requests', async () => {
    const AreaReader = defineComponent({
      setup() {
        return () => h('span', getAreaValue() ?? 'none')
      }
    })

    const createAppForArea = (areaName: string) => createSSRApp(defineComponent({
      setup() {
        return () => h(
          TestContainerSsr,
          { area: areaName },
          {
            default: () => h(AreaReader)
          }
        )
      }
    }))

    const [htmlAlpha, htmlBeta] = await Promise.all([
      renderToString(createAppForArea('alpha')),
      renderToString(createAppForArea('beta'))
    ])

    expect(htmlAlpha).toContain('<span>alpha</span>')
    expect(htmlAlpha).not.toContain('beta')
    expect(htmlBeta).toContain('<span>beta</span>')
    expect(htmlBeta).not.toContain('alpha')
  })
})
