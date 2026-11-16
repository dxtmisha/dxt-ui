// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { ListGroup } from '../ListGroup'
import { ListGroupDesign } from '../ListGroupDesign'
import type { ListGroupProps } from '../props'

describe('ListGroup (SSR)', () => {
  const naming = new DesignName('d1.listGroup')

  it('should initialize and evaluate bindings in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<ListGroupProps>({
      open: true,
      divider: true
    })

    scope.run(() => {
      const group = new ListGroup(props, element, naming)

      expect(group.aria).toEqual({ role: 'group' })
      expect(group.binds).toEqual({
        'data-open': 'open',
        'data-divider': 'divider'
      })
      expect(group.isOpen()).toBe(true)
    })

    scope.stop()
  })

  it('should render full ListGroupDesign component to HTML string across variants in SSR', async () => {
    const MockMotionTransform = defineComponent({
      name: 'MockMotionTransform',
      props: {
        open: Boolean
      },
      setup(props, { slots }) {
        return () => h(
          'div',
          { 'class': 'ssr-transform', 'data-open': String(props.open) },
          [
            slots.head?.({
              isOpen: props.open,
              isShow: props.open,
              classes: {},
              idControl: 'ssr-ctrl',
              idBody: 'ssr-body',
              binds: { role: 'button', ariaExpanded: props.open ? 'true' : 'false' }
            }),
            slots.body?.()
          ]
        )
      }
    })

    const variants: ListGroupProps[] = [
      { open: false, divider: false },
      { open: true, divider: true }
    ]

    for (const props of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new ListGroupDesign(
            'd1.listGroup',
            props,
            {
              components: {
                motionTransform: MockMotionTransform
              }
            }
          )
          const render = design.render()
          return () => h(render, null, {
            head: (slotProps: { open: boolean }) => `Header:${slotProps.open}`,
            list: () => 'List Content'
          })
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp(TestComponent)
      const html = await renderToString(app)

      expect(html).toContain('role="group"')
      expect(html).toContain(`data-open="${props.open ? 'open' : 'close'}"`)
      expect(html).toContain('d1-listGroup__head')
      expect(html).toContain('d1-listGroup__list')

      if (props.divider) {
        expect(html).toContain('data-divider="divider"')
      } else {
        expect(html).not.toContain('data-divider=')
      }
    }
  })
})
