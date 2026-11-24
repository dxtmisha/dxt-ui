// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { ButtonDesign } from '../../Button/ButtonDesign'
import type { ButtonProps, ButtonPropsBasic } from '../../Button/props'
import type { ButtonClasses, ButtonComponents, ButtonExpose } from '../../Button/types'
import { ButtonGroupDesign } from '../ButtonGroupDesign'
import { defaultsButtonGroup, type ButtonGroupProps, type ButtonGroupPropsBasic } from '../props'
import type { ButtonGroupClasses, ButtonGroupComponents, ButtonGroupExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const SsrButton = defineComponent({
  name: 'SsrButton',
  props: {
    label: [String, Number],
    disabled: Boolean,
    isSkeleton: Boolean
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({
      main: { 'd1-button': true }
    }))
    const design = new ButtonDesign<
      ButtonComponents,
      ButtonExpose,
      ButtonClasses,
      ButtonPropsBasic
    >(
      'd1.button',
      props as ButtonProps,
      { classes }
    )
    return design.render()
  }
})

function createSsrButtonGroupApp(props: ButtonGroupProps) {
  const SsrButtonGroup = defineComponent({
    setup() {
      const mergedProps = { ...defaultsButtonGroup, ...props }
      const classes = computed<ConstrClasses>(() => ({
        main: { 'd1-buttonGroup': true }
      }))
      const design = new ButtonGroupDesign<
        ButtonGroupComponents,
        ButtonGroupExpose,
        ButtonGroupClasses,
        ButtonGroupPropsBasic
      >(
        'd1.buttonGroup',
        mergedProps,
        {
          classes,
          components: { button: SsrButton }
        }
      )
      return design.render()
    }
  })

  return createSSRApp(SsrButtonGroup)
}

describe('ButtonGroup (SSR)', () => {
  it('should render group container with ARIA role/label and skeleton buttons in Node SSR without browser globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrButtonGroupApp({
      ariaLabel: 'SSR Actions',
      isSkeleton: true,
      list: [
        { label: 'Confirm' },
        { label: 0 }
      ]
    }))

    expect(html).toContain('role="group"')
    expect(html).toContain('aria-label="SSR Actions"')
    expect(html).toContain('d1-buttonGroup')
    expect(html).toContain('d1-buttonGroup__item')
    expect(html).toContain('d1-skeleton__background')
    expect(html).toContain('>Confirm<')
    expect(html).toContain('>0<')
  })
})
