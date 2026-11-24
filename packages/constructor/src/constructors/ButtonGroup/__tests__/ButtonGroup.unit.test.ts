// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, reactive, ref } from 'vue'
import { type ConstrEmit, DesignComponents, DesignName } from '@dxtmisha/functional'

import { AreaInclude } from '../../../classes/AreaInclude'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { getAreaValue } from '../../../functions/getAreaValue'
import { ButtonGroup } from '../ButtonGroup'
import type { ButtonGroupProps } from '../props'
import type { ButtonGroupComponents, ButtonGroupEmits, ButtonGroupSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
  vi.useRealTimers()
})

function createButtonGroup(
  props: ButtonGroupProps = {},
  slots?: ButtonGroupSlots,
  emits?: ConstrEmit<ButtonGroupEmits>,
  components?: DesignComponents<ButtonGroupComponents, ButtonGroupProps>,
  constructors?: ConstructorParameters<typeof ButtonGroup>[6]
): { instance: ButtonGroup, getChildArea: () => string | undefined } {
  let instance!: ButtonGroup
  let childArea: string | undefined

  const AreaProbe = defineComponent({
    setup() {
      const injected = getAreaValue()
      return () => {
        childArea = typeof injected === 'object' && injected !== null && 'value' in injected
          ? (injected as { value?: string }).value
          : injected
        return h('span')
      }
    }
  })

  const Host = defineComponent({
    setup() {
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.buttonGroup')
      instance = new ButtonGroup(props, element, naming, components, slots, emits, constructors)
      return () => h('div', [h(AreaProbe)])
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return {
    instance,
    getChildArea: () => childArea
  }
}

describe('ButtonGroup (isolated class)', () => {
  it('should expose default role="group" and reactive ariaLabel / role overrides', () => {
    const props = reactive<ButtonGroupProps>({
      area: 'button-group'
    })
    const { instance } = createButtonGroup(props)

    expect(instance.aria).toEqual({
      role: 'group'
    })

    props.role = 'toolbar'
    props.ariaLabel = 'Formatting actions — Панель форматирования'
    expect(instance.aria).toEqual({
      'role': 'toolbar',
      'aria-label': 'Formatting actions — Панель форматирования'
    })
  })

  it('should return false in isList() for empty or omitted list, and true for non-empty list or default slot', () => {
    const props = reactive<ButtonGroupProps>({ list: [] })
    const { instance } = createButtonGroup(props)

    expect(instance.isList()).toBe(false)

    props.list = [{ label: 'Save', value: 0 }]
    expect(instance.isList()).toBe(true)

    const { instance: slottedInstance } = createButtonGroup(
      {},
      { default: () => [h('button', 'Custom')] }
    )
    expect(slottedInstance.isList()).toBe(true)
  })

  it('should eagerly initialize AreaInclude for Vue provide/inject and keep EventClickInclude lazy with DI support', () => {
    const areaSpy = vi.fn()
    const eventSpy = vi.fn()

    class CustomAreaInclude extends AreaInclude {
      constructor(...args: ConstructorParameters<typeof AreaInclude>) {
        super(...args)
        areaSpy()
      }
    }

    class CustomEventInclude extends EventClickInclude {
      constructor(...args: ConstructorParameters<typeof EventClickInclude>) {
        super(...args)
        eventSpy()
      }
    }

    const { instance } = createButtonGroup(
      { area: 'custom-toolbar' },
      undefined,
      undefined,
      undefined,
      {
        area: CustomAreaInclude,
        event: CustomEventInclude
      }
    )

    expect(instance.hasInstance('area')).toBe(true)
    expect(areaSpy).toHaveBeenCalledTimes(1)
    expect(instance.hasInstance('event')).toBe(false)

    expect(instance.i('event')).toBeInstanceOf(CustomEventInclude)
    expect(eventSpy).toHaveBeenCalledTimes(1)
  })
})
