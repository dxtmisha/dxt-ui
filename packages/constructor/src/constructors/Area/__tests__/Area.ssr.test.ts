// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { ServerStorage } from '@dxtmisha/functional'

import { setAreaValue } from '../../../functions/setAreaValue'
import { AreaDesign } from '../AreaDesign'
import type { AreaPropsBasic } from '../props'
import type { AreaClasses, AreaComponents, AreaExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const TestAreaSsr = defineComponent({
  name: 'TestAreaSsr',
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

describe('Area (SSR)', () => {
  it('should render matched area slot and default fallback cleanly in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const appInjected = createSSRApp(defineComponent({
      setup() {
        setAreaValue('main')
        return () => h(TestAreaSsr, { areaDefault: 'fallback' }, {
          main: () => h('main', 'Main SSR'),
          fallback: () => h('div', 'Fallback SSR')
        })
      }
    }))

    const appDefault = createSSRApp(defineComponent({
      setup() {
        return () => h(TestAreaSsr, { areaDefault: 'missing' }, {
          default: () => h('section', 'Default SSR')
        })
      }
    }))

    const [htmlInjected, htmlDefault] = await Promise.all([
      renderToString(appInjected),
      renderToString(appDefault)
    ])

    expect(htmlInjected).toContain('<main>Main SSR</main>')
    expect(htmlDefault).toContain('<section>Default SSR</section>')
  })

  it('should isolate injected area state across concurrent SSR requests', async () => {
    const createAppForArea = (areaName: string) => createSSRApp(defineComponent({
      setup() {
        setAreaValue(areaName)
        return () => h(TestAreaSsr, {}, {
          alpha: () => h('div', 'Alpha'),
          beta: () => h('div', 'Beta')
        })
      }
    }))

    const [htmlAlpha, htmlBeta] = await Promise.all([
      renderToString(createAppForArea('alpha')),
      renderToString(createAppForArea('beta'))
    ])

    expect(htmlAlpha).toContain('<div>Alpha</div>')
    expect(htmlBeta).toContain('<div>Beta</div>')
  })
})
