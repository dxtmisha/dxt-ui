// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { ClockDial } from '../ClockDial'
import { ClockDialDesign } from '../ClockDialDesign'
import type { ClockDialProps } from '../props'
import type { ClockDialClasses, ClockDialComponents, ClockDialEmits, ClockDialExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
})

describe('ClockDial (Full Component Integration)', () => {
  const mountClockDial = (initialProps: ClockDialProps = { type: '12', min: 1, max: 12 }) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const props = reactive<ClockDialProps>({ ...initialProps })
    const emitsSpy = vi.fn()
    let logicInstance!: ClockDial
    let exposed!: ClockDialExpose

    const captureLogicInstance = (instance: ClockDial) => {
      logicInstance = instance
    }

    class InspectableClockDial extends ClockDial {
      constructor(...args: ConstructorParameters<typeof ClockDial>) {
        super(...args)
        captureLogicInstance(this)
      }
    }

    const Component = defineComponent({
      setup() {
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-clockDial': true
          }
        }))

        const design = new ClockDialDesign<
          ClockDialComponents,
          ClockDialExpose,
          ClockDialClasses,
          ClockDialProps
        >(
          'd1.clockDial',
          props,
          {
            classes: classesToken,
            emits: emitsSpy as unknown as ConstrEmit<ClockDialEmits>
          },
          InspectableClockDial
        )

        exposed = design.expose()
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    const unmount = () => app.unmount()
    cleanups.push(unmount)

    return { container, props, emitsSpy, logicInstance, exposed, unmount }
  }

  it('supports clicking marks when initially unselected, then dragging on censor and cancelling on blur', async () => {
    const { container, emitsSpy, logicInstance, exposed } = mountClockDial({
      type: '12',
      min: 2,
      max: 10
    })
    await nextTick()

    expect(container.querySelector('.d1-clockDial__censor')).toBeNull()
    expect(logicInstance.hasInstance('event')).toBe(false)
    expect(logicInstance.hasInstance('control')).toBe(false)

    // Clicking disabled mark (value 1 < min 2) does nothing
    const disabledMark = container.querySelector('[data-value="1"]') as HTMLSpanElement
    disabledMark.click()
    await nextTick()
    expect(exposed.getValue()).toBeUndefined()
    expect(emitsSpy).not.toHaveBeenCalled()

    // Clicking enabled mark (value 5) selects it and reveals censor + arrowSelect
    const markFive = container.querySelector('[data-value="5"]') as HTMLSpanElement
    markFive.click()
    await nextTick()

    expect(exposed.getValue()).toBe(5)
    expect(emitsSpy).toHaveBeenCalledWith('update:value', 5)
    expect(emitsSpy).toHaveBeenCalledWith('update:modelValue', 5)
    expect(emitsSpy).toHaveBeenCalledWith('input', expect.objectContaining({ value: 5 }), 5)
    expect(emitsSpy).toHaveBeenCalledWith('change', expect.objectContaining({ value: 5 }), 5)
    expect(container.querySelector('.d1-clockDial__censor')).not.toBeNull()
    expect(container.querySelector('.d1-clockDial__arrowSelect')).not.toBeNull()

    // Mock geometry on mark name spans for drag coordinate selection
    const nameElements = container.querySelectorAll<HTMLSpanElement>('.d1-clockDial__name')
    nameElements.forEach((span, index) => {
      span.getBoundingClientRect = () => ({
        left: index * 50,
        top: 100,
        right: index * 50 + 30,
        bottom: 130,
        width: 30,
        height: 30,
        x: index * 50,
        y: 100,
        toJSON: () => {}
      })
    })

    // Drag on censor toward index 7 (value 8, center x = 365, y = 115)
    const censor = container.querySelector('.d1-clockDial__censor') as HTMLDivElement
    censor.dispatchEvent(new MouseEvent('mousedown', { button: 0, clientX: 365, clientY: 115, bubbles: true }))
    await nextTick()
    expect(exposed.getValue()).toBe(8)

    // Move toward index 8 (value 9, center x = 415, y = 115) and cancel via window blur
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 415, clientY: 115 }))
    await nextTick()
    expect(exposed.getValue()).toBe(9)

    window.dispatchEvent(new Event('blur'))
    await nextTick()
    expect(emitsSpy).toHaveBeenCalledWith('change', expect.objectContaining({ value: 9 }), 9)
  })

  it('supports keyboard navigation, respects IME composition, and updates classes reactively in 24h mode', async () => {
    const { container, props, emitsSpy, exposed } = mountClockDial({
      type: '24',
      value: 12,
      min: 0,
      max: 23
    })
    await nextTick()

    const root = container.querySelector('.d1-clockDial') as HTMLDivElement
    expect(root.classList.contains('d1-clockDial--section')).toBe(false)

    // IME composition should be ignored
    const imeEvent = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    Object.defineProperty(imeEvent, 'isComposing', { value: true })
    root.dispatchEvent(imeEvent)
    await nextTick()
    expect(exposed.getValue()).toBe(12)

    // ArrowRight moves 12 -> 13 (inner section)
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    await nextTick()
    expect(exposed.getValue()).toBe(13)
    expect(root.classList.contains('d1-clockDial--section')).toBe(true)
    expect(root.getAttribute('aria-valuenow')).toBe('13')

    // End moves to 0 (last mark in 24h mode)
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }))
    await nextTick()
    expect(exposed.getValue()).toBe(0)
    expect(root.classList.contains('d1-clockDial--section')).toBe(true)

    // Reactive v-model prop sync
    props.modelValue = 4
    await nextTick()
    expect(exposed.getValue()).toBe(4)
    expect(root.classList.contains('d1-clockDial--section')).toBe(false)
    expect(emitsSpy).toHaveBeenCalledWith('inputLite', 0)
  })

  it('cleans up active window listeners via DesignLifecycleAbstract on component unmount', async () => {
    const removeListenerSpy = vi.spyOn(window, 'removeEventListener')
    const { container, unmount } = mountClockDial({ type: '12', value: 3 })
    await nextTick()

    const censor = container.querySelector('.d1-clockDial__censor') as HTMLDivElement
    censor.dispatchEvent(new MouseEvent('mousedown', { button: 0, clientX: 10, clientY: 10, bubbles: true }))
    await nextTick()

    unmount()
    await nextTick()

    expect(removeListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
    expect(removeListenerSpy).toHaveBeenCalledWith('mouseup', expect.any(Function))
    expect(removeListenerSpy).toHaveBeenCalledWith('pointercancel', expect.any(Function))
    expect(removeListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function))
  })
})
