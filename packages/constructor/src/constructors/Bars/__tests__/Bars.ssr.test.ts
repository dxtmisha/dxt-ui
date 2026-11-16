// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { Bars } from '../Bars'
import { BarsDesign } from '../BarsDesign'
import type { BarsProps } from '../props'

describe('Bars (SSR)', () => {
  const naming = new DesignName('d1.bars')

  it('should initialize and evaluate bindings in a server-side Node environment without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<BarsProps>({
      label: 'SSR Header',
      description: 'SSR Description',
      actionLabel: 'Action Header',
      bars: [{ value: 'save', label: 'Save', icon: 'save' }]
    })

    scope.run(() => {
      const bars = new Bars(props, element, naming)

      expect(bars.isAction()).toBe(false)
      expect(bars.isActionPossible()).toBe(true)
      expect(bars.aria).toEqual({ 'aria-live': 'polite' })
      expect(bars.barsBinds.value?.[0]?.value).toBe('save')
    })

    scope.stop()
  })

  it('should render full BarsDesign component to HTML string in SSR without DOM globals', async () => {
    const MockButton = defineComponent({
      name: 'MockButton',
      props: {
        label: [String, Number],
        value: [String, Number]
      },
      setup(componentProps, { attrs }) {
        return () => h('button', { ...attrs, 'data-value': componentProps.value }, componentProps.label)
      }
    })

    const TestComponent = defineComponent({
      setup() {
        const props: BarsProps = {
          label: 'SSR Title',
          description: 'SSR Subtitle',
          backButton: { label: 'Back' },
          bars: [{ value: 'edit', label: 'Edit' }]
        }

        const design = new BarsDesign(
          'd1.bars',
          props,
          {
            components: {
              button: MockButton
            }
          }
        )
        const render = design.render()
        return () => h(render)
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const app = createSSRApp(TestComponent)
    const html = await renderToString(app)

    expect(html).toContain('SSR Title')
    expect(html).toContain('SSR Subtitle')
    expect(html).toContain('data-value="back"')
    expect(html).toContain('data-value="edit"')
    expect(html).toContain('d1-bars__context')
    expect(html).toContain('d1-bars__label')
    expect(html).toContain('d1-bars__description')
  })

  it('should render action mode and skeleton variants cleanly across multiple SSR renders', async () => {
    const variants: BarsProps[] = [
      { label: 'Default', backHide: true },
      { action: true, actionLabel: 'Action Mode', actionDescription: 'Selected 3', backActionHide: true },
      { label: 'Skeleton Mode', isSkeleton: true, backHide: true }
    ]

    for (const props of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new BarsDesign('d1.bars', props)
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp(TestComponent)
      const html = await renderToString(app)

      expect(typeof html).toBe('string')
      if (props.action) {
        expect(html).toContain('d1-bars--action')
        expect(html).toContain('Action Mode')
      } else {
        expect(html).toContain(props.label as string)
      }
    }
  })
})
