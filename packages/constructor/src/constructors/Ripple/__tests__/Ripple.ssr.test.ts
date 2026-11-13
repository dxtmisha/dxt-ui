// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import {
  type ConstrClasses,
  type ConstrStyles,
  DesignComponents,
  DesignName,
  ServerStorage
} from '@dxtmisha/functional'

import { EnabledInclude } from '../../../classes/EnabledInclude'
import { RippleDesign } from '../RippleDesign'
import { RippleInclude } from '../RippleInclude'
import type { RippleComponentInclude } from '../basicTypes'
import { defaultsRipple, type RippleProps } from '../props'
import type { RippleClasses, RippleComponents, RippleExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Real SSR Ripple component powered by RippleDesign for server-side testing.
 *
 * Реальный SSR-компонент Ripple на базе RippleDesign для тестирования на сервере.
 */
const RealSsrRipple = defineComponent({
  name: 'RealSsrRipple',
  props: ['disabled'],
  setup(componentProps) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-ripple': true,
        'd1-ripple--disabled': Boolean(componentProps.disabled)
      }
    }))

    const design = new RippleDesign<
      RippleComponents,
      RippleExpose,
      RippleClasses,
      RippleProps
    >('d1.ripple', componentProps as RippleProps, {
      classes: classesToken
    })

    return design.render()
  }
})

/**
 * Renders the complete RippleDesign component in a server-side Node environment.
 *
 * Рендерит полный компонент RippleDesign в серверном окружении Node.
 * @param properties component properties / свойства компонента
 * @param styles optional inline styles token / необязательный токен стилей
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderRippleSsr(
  properties: RippleProps = {},
  styles?: ConstrStyles
): Promise<string> {
  const props = reactive<RippleProps>({
    ...defaultsRipple,
    ...properties
  })

  const RippleComponent = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-ripple': true,
          'd1-ripple--disabled': Boolean(props.disabled)
        }
      }))
      const stylesToken = computed<ConstrStyles>(() => styles ?? {})

      const design = new RippleDesign<
        RippleComponents,
        RippleExpose,
        RippleClasses,
        RippleProps
      >('d1.ripple', props, {
        classes: classesToken,
        styles: stylesToken
      })

      return design.render()
    }
  })

  const RootComponent = defineComponent({
    setup() {
      return () => h(RippleComponent)
    }
  })

  return renderToString(createSSRApp(RootComponent))
}

describe('Ripple (SSR)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render Ripple in SSR Node environment without accessing browser globals', async () => {
      const html = await renderRippleSsr({ disabled: false })

      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')
      expect(html).toContain('class="d1-ripple"')
      expect(html).toContain('aria-hidden="true"')
      expect(html.startsWith('<span')).toBe(true)
      expect(html.endsWith('</span>')).toBe(true)
    })

    it('should render hidden accessible state (aria-hidden="true") to prevent screen reader distractions', async () => {
      const html = await renderRippleSsr({})

      expect(html).toContain('aria-hidden="true"')
      expect(html).toContain('class="d1-ripple"')
    })

    it('should render forwarded attributes with Vue fallthrough precedence', async () => {
      const app = createSSRApp(defineComponent({
        setup: () => () => h(RealSsrRipple, {
          'data-testid': 'ripple-ssr',
          'aria-hidden': 'false'
        })
      }))

      const html = await renderToString(app)
      expect(html).toContain('data-testid="ripple-ssr"')
      expect(html).toContain('aria-hidden="false"')
    })
  })

  describe('Tokens, styles, and classes in SSR', () => {
    it('should render custom CSS style tokens in server-rendered output', async () => {
      const html = await renderRippleSsr(
        {},
        { '--d1-ripple-color': 'rgba(255, 255, 255, 0.2)' }
      )

      expect(html).toContain('style="--d1-ripple-color:rgba(255, 255, 255, 0.2);"')
      expect(html).toContain('class="d1-ripple"')
    })

    it('should reflect disabled class when disabled is true in SSR', async () => {
      const html = await renderRippleSsr({ disabled: true })

      expect(html).toContain('class="d1-ripple d1-ripple--disabled"')
      expect(html).toContain('aria-hidden="true"')
    })
  })

  describe('Server isolation and cross-request state determinism', () => {
    it('should produce identical deterministic outputs across consecutive SSR requests', async () => {
      const html1 = await renderRippleSsr({ disabled: false })
      const html2 = await renderRippleSsr({ disabled: false })

      expect(html1).toBe(html2)
    })

    it('should isolate state between different SSR requests with distinct options', async () => {
      const activeHtml = await renderRippleSsr({ disabled: false })
      const disabledHtml = await renderRippleSsr({ disabled: true })

      expect(activeHtml).not.toBe(disabledHtml)
      expect(activeHtml).not.toContain('d1-ripple--disabled')
      expect(disabledHtml).toContain('d1-ripple--disabled')
    })
  })

  describe('RippleInclude integration in SSR', () => {
    it('should render embedded ripple inside a host server component when registered and enabled', async () => {
      const naming = new DesignName('d1.button')
      const components = new DesignComponents<RippleComponentInclude, RippleProps>({
        ripple: RealSsrRipple
      })
      const enabled = new EnabledInclude({ disabled: false })
      const rippleInclude = new RippleInclude(naming, () => enabled, components)

      const HostComponent = defineComponent({
        setup() {
          return () => h('button', { class: 'd1-button' }, [
            h('span', { class: 'd1-button__label' }, 'Submit'),
            ...rippleInclude.render()
          ])
        }
      })

      const html = await renderToString(createSSRApp(HostComponent))

      expect(html).toContain('<button class="d1-button">')
      expect(html).toContain('<span class="d1-button__label">Submit</span>')
      expect(html).toContain('d1-button__ripple')
      expect(html).toContain('class="d1-ripple')
      expect(html).toContain('aria-hidden="true"')
    })

    it('should omit ripple element in SSR when ripple is not registered in components', async () => {
      const naming = new DesignName('d1.button')
      const components = new DesignComponents<RippleComponentInclude, RippleProps>({})
      const rippleInclude = new RippleInclude(naming, undefined, components)

      const HostComponent = defineComponent({
        setup() {
          return () => h('button', { class: 'd1-button' }, [
            h('span', { class: 'd1-button__label' }, 'Submit'),
            ...rippleInclude.render()
          ])
        }
      })

      const html = await renderToString(createSSRApp(HostComponent))

      expect(html).toBe('<button class="d1-button"><span class="d1-button__label">Submit</span></button>')
      expect(html).not.toContain('d1-button__ripple')
      expect(html).not.toContain('d1-ripple')
    })

    it('should omit ripple element in SSR when host component is disabled via EnabledInclude', async () => {
      const naming = new DesignName('d1.button')
      const components = new DesignComponents<RippleComponentInclude, RippleProps>({
        ripple: RealSsrRipple
      })
      const enabled = new EnabledInclude({ disabled: true })
      const rippleInclude = new RippleInclude(naming, () => enabled, components)

      const HostComponent = defineComponent({
        setup() {
          return () => h('button', { class: 'd1-button' }, [
            h('span', { class: 'd1-button__label' }, 'Submit'),
            ...rippleInclude.render()
          ])
        }
      })

      const html = await renderToString(createSSRApp(HostComponent))

      expect(html).toBe('<button class="d1-button"><span class="d1-button__label">Submit</span></button>')
      expect(html).not.toContain('d1-button__ripple')
    })
  })
})
