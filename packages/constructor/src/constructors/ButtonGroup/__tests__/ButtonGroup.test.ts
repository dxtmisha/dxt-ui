// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, inject, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { AREA_PROP_NAME } from '../../../types/areaTypes'
import { ButtonDesign } from '../../Button/ButtonDesign'
import type { ButtonProps, ButtonPropsBasic } from '../../Button/props'
import type { ButtonClasses, ButtonComponents, ButtonExpose } from '../../Button/types'
import { ButtonGroupDesign } from '../ButtonGroupDesign'
import { defaultsButtonGroup, type ButtonGroupProps, type ButtonGroupPropsBasic } from '../props'
import type { ButtonGroupClasses, ButtonGroupComponents, ButtonGroupExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const AreaAwareButton = defineComponent({
  name: 'AreaAwareButton',
  props: {
    label: [String, Number],
    isSkeleton: Boolean
  },
  setup(props) {
    const injectedArea = inject<Ref<string | undefined> | string | undefined>(AREA_PROP_NAME, undefined)
    const classes = computed<ConstrClasses>(() => {
      const areaName = typeof injectedArea === 'object' && injectedArea !== null && 'value' in injectedArea
        ? injectedArea.value
        : injectedArea
      return {
        main: {
          'd1-button': true,
          [`area-${areaName}`]: Boolean(areaName)
        }
      }
    })
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

describe('ButtonGroup integration & reactivity', () => {
  it('should propagate reactive area context, ariaLabel, and isSkeleton without mutating caller readonly arrays', async () => {
    const readonlyButtons = [
      { label: 'Save' },
      { label: 'Cancel' }
    ] as const

    const state = reactive<ButtonGroupProps>({
      ...defaultsButtonGroup,
      list: readonlyButtons,
      isSkeleton: false
    })

    const Host = defineComponent({
      setup() {
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
          state,
          {
            classes,
            components: { button: AreaAwareButton }
          }
        )
        return design.render()
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    const firstBtn = container.querySelector('button')
    expect(firstBtn?.classList.contains('area-button-group')).toBe(true)
    expect(container.querySelector('.d1-skeleton__background')).toBeNull()

    state.area = 'toolbar-actions'
    state.ariaLabel = 'Editor Toolbar'
    state.isSkeleton = true
    await nextTick()

    expect(container.querySelector('[role="group"]')?.getAttribute('aria-label')).toBe('Editor Toolbar')
    expect(firstBtn?.classList.contains('area-toolbar-actions')).toBe(true)
    expect(container.querySelectorAll('.d1-skeleton__background')).toHaveLength(2)
    expect(readonlyButtons).toEqual([{ label: 'Save' }, { label: 'Cancel' }])
  })
})
