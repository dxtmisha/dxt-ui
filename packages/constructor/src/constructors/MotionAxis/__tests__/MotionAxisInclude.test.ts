// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { MotionAxisInclude } from '../MotionAxisInclude'
import type {
  MotionAxisComponentInclude,
  MotionAxisEmitOptions,
  MotionAxisPropsInclude
} from '../basicTypes'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

describe('MotionAxisInclude', () => {
  it('should resolve selectedItem from explicit selected or props (object and getter)', () => {
    const naming = new DesignName('d1.tabs')

    const plainInclude = new MotionAxisInclude({ selected: 'tab-1' }, naming)
    expect(plainInclude.selectedItem).toBe('tab-1')

    const getterProps = reactive({ selected: 'tab-2' })
    const getterInclude = new MotionAxisInclude(() => getterProps, naming)
    expect(getterInclude.selectedItem).toBe('tab-2')

    getterProps.selected = 'tab-3'
    expect(getterInclude.selectedItem).toBe('tab-3')

    const explicitRef = ref<string | undefined>('override-1')
    const overrideInclude = new MotionAxisInclude(
      { selected: 'tab-1' },
      naming,
      undefined,
      undefined,
      undefined,
      undefined,
      explicitRef
    )
    expect(overrideInclude.selectedItem).toBe('override-1')

    explicitRef.value = 'override-2'
    expect(overrideInclude.selectedItem).toBe('override-2')

    const emptyInclude = new MotionAxisInclude(undefined, naming)
    expect(emptyInclude.selectedItem).toBeUndefined()
  })

  it('should compose onMotionAxis handlers via mergeProps without overwriting motionAxisAttrs.onMotionAxis', () => {
    const naming = new DesignName('d1.tabs')
    const userHandler = vi.fn()
    const parentEmits = vi.fn()

    const props: MotionAxisPropsInclude = {
      selected: 'tab-1',
      motionAxisAttrs: {
        axis: 'y',
        onMotionAxis: userHandler
      } as Record<string, unknown>
    }

    const include = new MotionAxisInclude(
      props,
      naming,
      undefined,
      { direction: 'next' },
      undefined,
      parentEmits
    )

    const binds = include.binds.value as Record<string, unknown>
    expect(binds.axis).toBe('y')
    expect(binds.direction).toBe('next')
    expect(binds.class).toBe('d1-tabs__motionAxis')

    const payload: MotionAxisEmitOptions = {
      type: 'start',
      selected: 'tab-1',
      previous: undefined,
      preparation: 'tab-1',
      active: 'tab-1'
    }

    const handler = binds.onMotionAxis
    if (Array.isArray(handler)) {
      handler.forEach(fn => fn(payload))
    } else if (typeof handler === 'function') {
      handler(payload)
    }

    expect(userHandler).toHaveBeenCalledWith(payload)
    expect(parentEmits).toHaveBeenCalledWith('motionAxis', payload)
  })

  it('should render included MotionAxis component with slots and forward events', async () => {
    const naming = new DesignName('d1.tabs')
    const parentEmits = vi.fn()

    const MockMotionAxis = defineComponent({
      name: 'MockMotionAxis',
      props: {
        selected: String,
        axis: String
      },
      emits: ['motionAxis'],
      setup(componentProps, { attrs, emit, slots }) {
        return () => h(
          'div',
          {
            'class': ['mock-motion-axis', attrs.class],
            'data-selected': componentProps.selected,
            'onClick': () => emit('motionAxis', { type: 'end', selected: componentProps.selected })
          },
          slots.default?.()
        )
      }
    })

    const components = new DesignComponents<MotionAxisComponentInclude, MotionAxisPropsInclude>({
      motionAxis: MockMotionAxis
    })
    const props = reactive<MotionAxisPropsInclude>({
      selected: 'tab-a',
      motionAxisAttrs: { axis: 'z' }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    mountedCleanups.push(() => container.remove())

    const include = new MotionAxisInclude(
      props,
      naming,
      components,
      undefined,
      'main-axis',
      parentEmits
    )

    const app = createApp({
      render() {
        return h('div', include.render({ default: () => [h('span', 'Slide Content')] }))
      }
    })
    app.mount(container)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    const node = container.querySelector('.mock-motion-axis') as HTMLElement
    expect(node).not.toBeNull()
    expect(node.getAttribute('data-selected')).toBe('tab-a')
    expect(node.textContent).toBe('Slide Content')

    node.click()
    expect(parentEmits).toHaveBeenCalledWith('motionAxis', {
      type: 'end',
      selected: 'tab-a'
    })
  })
})
