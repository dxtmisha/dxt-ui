// @vitest-environment jsdom
import { describe, it, expect, afterEach, vi } from 'vitest'
import { createApp, defineComponent, h, ref } from 'vue'

import { MotionFlip } from '../MotionFlip'
import { MotionFlipDesign } from '../MotionFlipDesign'
import type { MotionFlipPropsBasic } from '../props'
import type {
  MotionFlipClasses,
  MotionFlipComponents,
  MotionFlipExpose
} from '../types'

describe('MotionFlipDesign', () => {
  const containers: HTMLElement[] = []

  afterEach(() => {
    while (containers.length > 0) {
      containers.pop()?.remove()
    }
    vi.restoreAllMocks()
  })

  const createDesignComponent = (
    ItemConstructor: typeof MotionFlip = MotionFlip
  ) => defineComponent({
    name: 'TestMotionFlipDesign',
    props: {
      auto: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    setup(props, context) {
      const design = new MotionFlipDesign<
        MotionFlipComponents,
        MotionFlipExpose,
        MotionFlipClasses,
        MotionFlipPropsBasic
      >(
        'd1.motion-flip',
        props,
        undefined,
        ItemConstructor
      )

      context.expose(design.expose())
      return design.render()
    }
  })

  it('should render root div with default slot, class, and merged external attrs', () => {
    const Component = createDesignComponent()
    const externalTransitionHandler = vi.fn()
    const container = document.createElement('div')
    document.body.appendChild(container)
    containers.push(container)

    const app = createApp({
      render: () => h(
        Component,
        {
          'class': 'external-flip-class',
          'data-testid': 'motion-flip-root',
          'onTransitionend': externalTransitionHandler
        },
        {
          default: () => h('div', { class: 'child-item' }, 'Item')
        }
      )
    })

    app.mount(container)

    const root = container.querySelector('[data-testid="motion-flip-root"]') as HTMLElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('external-flip-class')).toBe(true)
    expect(root.querySelector('.child-item')?.textContent).toBe('Item')

    // External onTransitionend must be preserved alongside internal handler via mergeProps
    root.dispatchEvent(new Event('transitionend', { bubbles: true }))
    expect(externalTransitionHandler).toHaveBeenCalledTimes(1)

    app.unmount()
  })

  it('should expose stop and update delegated to the MotionFlip logic orchestrator', async () => {
    const stopSpy = vi.fn()
    const updateSpy = vi.fn(async (callback: () => Promise<void> | void) => {
      await callback()
    })

    class CustomMotionFlip extends MotionFlip {
      override readonly stop = stopSpy
      override readonly update = updateSpy
    }

    const Component = createDesignComponent(CustomMotionFlip)
    const container = document.createElement('div')
    document.body.appendChild(container)
    containers.push(container)

    const flipRef = ref<MotionFlipExpose | undefined>(undefined)
    const app = createApp({
      render: () => h(Component, { ref: flipRef })
    })

    app.mount(container)

    const callback = vi.fn()
    await flipRef.value!.update(callback)
    expect(updateSpy).toHaveBeenCalledWith(callback)
    expect(callback).toHaveBeenCalledTimes(1)

    flipRef.value!.stop()
    expect(stopSpy).toHaveBeenCalledTimes(1)

    app.unmount()
  })
})
