// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref, type Ref } from 'vue'

import { ControlAbstract } from '../ControlAbstract'
import type { ControlProps } from '../../types/controlTypes'

describe('ControlAbstract', () => {
  beforeEach(() => {
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => callback(0))
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  class TestControl extends ControlAbstract {
    constructor(
      props: ControlProps | undefined,
      element: Ref<HTMLElement | undefined>,
      public currentIndex: number = 1,
      public maxCount: number = 5,
      public minCount: number = 1,
      public selectorPattern: (index: number) => string = (index) => `[data-index="${index}"]`
    ) {
      super(props, element)
    }

    public override isFocusable(): boolean {
      return super.isFocusable()
    }

    public override getIndex(): number {
      return this.currentIndex
    }

    public override getMax(): number {
      return this.maxCount
    }

    public override getMin(): number {
      return this.minCount
    }

    public override getSelector(index: number): string {
      return this.selectorPattern(index)
    }

    public override setIndex(index: number): void {
      this.currentIndex = index
    }

    public override first(): void {
      super.first()
    }

    public override last(): void {
      super.last()
    }

    public override next(): void {
      super.next()
    }

    public override previous(): void {
      super.previous()
    }

    public override focus(index?: number): void {
      super.focus(index)
    }
  }

  const createInstance = (options: {
    props?: ControlProps
    initialIndex?: number
    max?: number
    min?: number
    selector?: (index: number) => string
  } = {}) => {
    const element = ref<HTMLDivElement>()
    const instance = new TestControl(
      options.props,
      element,
      options.initialIndex ?? 1,
      options.max ?? 5,
      options.min ?? 1,
      options.selector
    )

    return {
      instance,
      element,
      getCurrentIndex: () => instance.currentIndex,
      onKeydown: (event: KeyboardEvent) => {
        const handler = instance.binds.onKeydown as ((e: KeyboardEvent) => void) | undefined
        handler?.(event)
      }
    }
  }

  it('should be focusable by default when props is undefined or control is true', () => {
    const { instance } = createInstance()

    expect(instance.isFocusable()).toBe(true)
    expect(instance.binds).toHaveProperty('onKeydown')
  })

  it('should not be focusable when control is false', () => {
    const { instance } = createInstance({ props: { control: false } })

    expect(instance.isFocusable()).toBe(false)
    expect(instance.binds).toEqual({})
  })

  it('can be overridden by subclass for custom focusable conditions', () => {
    class CustomControl extends TestControl {
      override isFocusable(): boolean {
        return super.isFocusable() && false
      }
    }

    const element = ref<HTMLDivElement>()
    const customInstance = new CustomControl({ control: true }, element)

    expect(customInstance.isFocusable()).toBe(false)
    expect(customInstance.binds).toEqual({})
  })

  it('should navigate next on ArrowRight and ArrowDown keydown', () => {
    const { getCurrentIndex, onKeydown } = createInstance({
      initialIndex: 1,
      max: 5
    })

    const eventRight = new KeyboardEvent('keydown', { key: 'ArrowRight' })
    const preventDefaultRight = vi.spyOn(eventRight, 'preventDefault')
    onKeydown(eventRight)

    expect(preventDefaultRight).toHaveBeenCalled()
    expect(getCurrentIndex()).toBe(2)

    const eventDown = new KeyboardEvent('keydown', { key: 'ArrowDown' })
    const preventDefaultDown = vi.spyOn(eventDown, 'preventDefault')
    onKeydown(eventDown)

    expect(preventDefaultDown).toHaveBeenCalled()
    expect(getCurrentIndex()).toBe(3)
  })

  it('should not advance next past max index', () => {
    const { getCurrentIndex, onKeydown } = createInstance({
      initialIndex: 5,
      max: 5
    })

    const eventRight = new KeyboardEvent('keydown', { key: 'ArrowRight' })
    onKeydown(eventRight)

    expect(getCurrentIndex()).toBe(5)
  })

  it('should navigate previous on ArrowLeft and ArrowUp keydown', () => {
    const { getCurrentIndex, onKeydown } = createInstance({
      initialIndex: 3,
      max: 5
    })

    const eventLeft = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
    const preventDefaultLeft = vi.spyOn(eventLeft, 'preventDefault')
    onKeydown(eventLeft)

    expect(preventDefaultLeft).toHaveBeenCalled()
    expect(getCurrentIndex()).toBe(2)

    const eventUp = new KeyboardEvent('keydown', { key: 'ArrowUp' })
    const preventDefaultUp = vi.spyOn(eventUp, 'preventDefault')
    onKeydown(eventUp)

    expect(preventDefaultUp).toHaveBeenCalled()
    expect(getCurrentIndex()).toBe(1)
  })

  it('should not move previous below min index', () => {
    const { getCurrentIndex, onKeydown } = createInstance({
      initialIndex: 1,
      max: 5
    })

    const eventLeft = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
    onKeydown(eventLeft)

    expect(getCurrentIndex()).toBe(1)
  })

  it('should navigate to first item on Home and last item on End', () => {
    const { getCurrentIndex, onKeydown } = createInstance({
      initialIndex: 3,
      max: 5
    })

    const eventHome = new KeyboardEvent('keydown', { key: 'Home' })
    const preventDefaultHome = vi.spyOn(eventHome, 'preventDefault')
    onKeydown(eventHome)

    expect(preventDefaultHome).toHaveBeenCalled()
    expect(getCurrentIndex()).toBe(1)

    const eventEnd = new KeyboardEvent('keydown', { key: 'End' })
    const preventDefaultEnd = vi.spyOn(eventEnd, 'preventDefault')
    onKeydown(eventEnd)

    expect(preventDefaultEnd).toHaveBeenCalled()
    expect(getCurrentIndex()).toBe(5)
  })

  it('should ignore other keys', () => {
    const { getCurrentIndex, onKeydown } = createInstance({
      initialIndex: 2,
      max: 5
    })

    const eventTab = new KeyboardEvent('keydown', { key: 'Tab' })
    const preventDefaultTab = vi.spyOn(eventTab, 'preventDefault')
    onKeydown(eventTab)

    expect(preventDefaultTab).not.toHaveBeenCalled()
    expect(getCurrentIndex()).toBe(2)
  })

  it('should support custom min index', () => {
    const { instance, getCurrentIndex } = createInstance({
      initialIndex: 1,
      min: 0,
      max: 3
    })

    instance.previous()
    expect(getCurrentIndex()).toBe(0)

    instance.first()
    expect(getCurrentIndex()).toBe(0)
  })

  it('should focus target element in DOM matching selector', () => {
    const { instance, element } = createInstance({
      initialIndex: 1,
      max: 3
    })

    const container = document.createElement('div')
    const button1 = document.createElement('button')
    button1.setAttribute('data-index', '1')
    const button2 = document.createElement('button')
    button2.setAttribute('data-index', '2')
    container.appendChild(button1)
    container.appendChild(button2)
    document.body.appendChild(container)

    element.value = container

    const focusSpy = vi.spyOn(button2, 'focus')
    instance.focus(2)

    expect(focusSpy).toHaveBeenCalled()

    document.body.removeChild(container)
  })

  it('should focus using custom selector function', () => {
    const { instance, element } = createInstance({
      initialIndex: 1,
      max: 3,
      selector: (index: number) => `[data-item-id="${index}"]`
    })

    const container = document.createElement('div')
    const button = document.createElement('button')
    button.setAttribute('data-item-id', '3')
    container.appendChild(button)
    document.body.appendChild(container)

    element.value = container

    const focusSpy = vi.spyOn(button, 'focus')
    instance.focus(3)

    expect(focusSpy).toHaveBeenCalled()

    document.body.removeChild(container)
  })
})
