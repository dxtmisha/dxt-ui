// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { Button } from '../Button'
import { ButtonDesign } from '../ButtonDesign'
import type { ButtonPropsBasic } from '../props'

describe('Button (SSR)', () => {
  const naming = new DesignName('d1.button')

  it('should initialize and evaluate bindings in a server-side Node environment without DOM globals', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<ButtonPropsBasic>({
      ariaLabel: 'Submit action',
      label: 'Submit',
      value: 'data-123'
    })

    scope.run(() => {
      const button = new Button(props as ButtonPropsBasic, element, naming)

      expect(button.tag).toBe('button')
      expect(button.binds.type).toBe('button')
      expect(button.binds['data-value']).toBe('data-123')
      expect(button.binds['aria-label']).toBe('Submit action')
      expect(button.classes[naming.getStatusClass('icon')]).toBe(false)
    })

    scope.stop()
  })

  it('should resolve non-button tags in SSR correctly', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<ButtonPropsBasic>({
      tag: 'span'
    })

    scope.run(() => {
      const button = new Button(props as ButtonPropsBasic, element, naming)

      expect(button.tag).toBe('span')
      expect(button.aria.role).toBe('button')
      expect(button.aria.tabindex).toBe('0')
    })

    scope.stop()
  })

  it('should render full ButtonDesign component to HTML string in SSR without DOM globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const props: ButtonPropsBasic = {
      label: 'SSR Button',
      value: 'ssr-val',
      ariaLabel: 'SSR Action'
    }

    const TestComponent = defineComponent({
      setup() {
        const design = new ButtonDesign('d1.button', props)
        const render = design.render()
        return () => h(render)
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const app = createSSRApp(TestComponent)
    const html = await renderToString(app)

    expect(html).toContain('<button')
    expect(html).toContain('SSR Button')
    expect(html).toContain('data-value="ssr-val"')
    expect(html).toContain('aria-label="SSR Action"')
  })

  it('should render link and disabled variants cleanly across multiple SSR renders', async () => {
    const variants: ButtonPropsBasic[] = [
      { label: 'Link', href: 'https://example.com' },
      { label: 'Disabled', disabled: true },
      { label: 'Loading', loading: true }
    ]

    for (const props of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new ButtonDesign('d1.button', props)
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp(TestComponent)
      const html = await renderToString(app)
      expect(typeof html).toBe('string')
      expect(html).toContain(props.label as string)
    }
  })
})
