// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { ClockDialDesign } from '../ClockDialDesign'
import type { ClockDialMarkSlot } from '../basicTypes'
import type { ClockDialProps } from '../props'
import type { ClockDialClasses, ClockDialComponents, ClockDialEmits, ClockDialExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
})

describe('ClockDialDesign', () => {
  const mountDesign = (
    initialProps: ClockDialProps,
    options?: {
      attrs?: Record<string, unknown>
      emitsSpy?: ReturnType<typeof vi.fn>
      slots?: {
        default?: () => unknown
        item?: (slotProps: ClockDialMarkSlot) => unknown
      }
    }
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const props = reactive<ClockDialProps>({ ...initialProps })
    const emitsSpy = options?.emitsSpy ?? vi.fn()
    let exposed!: ClockDialExpose & { elementHtml?: Ref<HTMLDivElement | undefined> }

    const InnerComponent = defineComponent({
      inheritAttrs: false,
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
        >('d1.clockDial', props, {
          classes: classesToken,
          emits: emitsSpy as unknown as ConstrEmit<ClockDialEmits>
        })

        exposed = design.expose() as ClockDialExpose & { elementHtml?: Ref<HTMLDivElement | undefined> }
        return design.render()
      }
    })

    const app = createApp({
      render() {
        return h(InnerComponent, options?.attrs ?? {}, options?.slots)
      }
    })

    app.mount(container)
    cleanups.push(() => app.unmount())

    return { container, props, emitsSpy, exposed }
  }

  it('renders root element, binds ref to elementHtml, renders 12 marks, arrowSelect, and censor', async () => {
    const { container, exposed } = mountDesign({ type: '12', value: 6, min: 1, max: 12 })
    await nextTick()

    const root = container.querySelector('.d1-clockDial') as HTMLDivElement
    expect(root).not.toBeNull()
    expect(exposed.elementHtml?.value).toBe(root)
    expect(root.getAttribute('role')).toBe('slider')
    expect(root.getAttribute('aria-valuenow')).toBe('6')
    expect(root.getAttribute('tabindex')).toBe('0')

    const markElements = container.querySelectorAll('.d1-clockDial__value')
    expect(markElements).toHaveLength(12)
    expect(markElements[5]?.classList.contains('d1-clockDial__value--selected')).toBe(true)

    const selectArrow = container.querySelector('.d1-clockDial__arrowSelect') as HTMLSpanElement
    expect(selectArrow).not.toBeNull()
    expect(selectArrow.style.getPropertyValue('--d1-clockDial-sys-arrowRotate')).toBe('180deg')

    expect(container.querySelector('.d1-clockDial__info')?.getAttribute('aria-hidden')).toBe('true')
    expect(container.querySelector('.d1-clockDial__point')?.getAttribute('aria-hidden')).toBe('true')
    expect(container.querySelector('.d1-clockDial__censor')?.getAttribute('aria-hidden')).toBe('true')

    expect(exposed.getValue()).toBe(6)
    exposed.setValue(9)
    await nextTick()
    expect(exposed.getValue()).toBe(9)
  })

  it('renders clock display mode with hour, minute, second hands, showTime text, and no censor', async () => {
    const { container, exposed } = mountDesign({
      type: '24',
      clock: true,
      showTime: true,
      hour: 14,
      minute: 30,
      second: 15
    })
    await nextTick()

    const root = container.querySelector('.d1-clockDial') as HTMLDivElement
    expect(root.getAttribute('role')).toBe('timer')
    expect(root.getAttribute('aria-label')).toBeTruthy()
    expect(root.getAttribute('tabindex')).toBeNull()

    expect(container.querySelector('.d1-clockDial__arrowHour')).not.toBeNull()
    expect(container.querySelector('.d1-clockDial__arrowMinute')).not.toBeNull()
    expect(container.querySelector('.d1-clockDial__arrowSecond')).not.toBeNull()
    expect(container.querySelector('.d1-clockDial__arrowSelect')).toBeNull()
    expect(container.querySelector('.d1-clockDial__censor')).toBeNull()
    expect(container.querySelector('.d1-clockDial__dial')?.textContent).toBeTruthy()
    expect(exposed.selectByCoordinates(100, 100)).toBeNull()
  })

  it('merges external attrs (class, style, onKeydown) cleanly via mergeProps', async () => {
    const externalKeydown = vi.fn()
    const emitsSpy = vi.fn()

    const { container } = mountDesign(
      { type: '12', value: 3 },
      {
        emitsSpy,
        attrs: {
          'class': 'custom-dial-class',
          'style': 'opacity: 0.9',
          'data-testid': 'clock-root',
          'onKeydown': externalKeydown
        }
      }
    )
    await nextTick()

    const root = container.querySelector('[data-testid="clock-root"]') as HTMLDivElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('d1-clockDial')).toBe(true)
    expect(root.classList.contains('custom-dial-class')).toBe(true)
    expect(root.style.opacity).toBe('0.9')

    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    await nextTick()

    expect(externalKeydown).toHaveBeenCalledTimes(1)
    expect(emitsSpy).toHaveBeenCalledWith('input', expect.anything(), 4)
  })

  it('renders custom default and item slots accurately', async () => {
    const { container } = mountDesign(
      { type: '12', value: 2 },
      {
        slots: {
          default: () => h('strong', { class: 'center-slot' }, 'AM'),
          item: ({ item }) => h('em', { class: 'custom-mark' }, `#${item.value}`)
        }
      }
    )
    await nextTick()

    expect(container.querySelector('.d1-clockDial__dial .center-slot')?.textContent).toBe('AM')
    const customMarks = container.querySelectorAll('.custom-mark')
    expect(customMarks).toHaveLength(12)
    expect(customMarks[0]?.textContent).toBe('#1')
    expect(customMarks[11]?.textContent).toBe('#12')
  })
})
