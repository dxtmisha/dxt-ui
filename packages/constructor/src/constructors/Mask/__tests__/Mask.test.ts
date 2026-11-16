// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { MaskDesign } from '../MaskDesign'
import { defaultsMask, type MaskProps } from '../props'
import type {
  MaskClasses,
  MaskComponents,
  MaskExpose
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  ServerStorage.reset()
  vi.useRealTimers()
  vi.restoreAllMocks()
})

/**
 * Mounts full Mask component integration setup in jsdom.
 *
 * Монтирует полную интеграцию компонента Mask в jsdom.
 * @param initialProps initial mask properties / начальные свойства маски
 * @returns container, reactive props, emitted events log, and exposed API / контейнер, реактивные свойства, журнал событий и экспонированный API
 */
async function mountMask(initialProps: MaskProps = {}) {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)

  const props = reactive<MaskProps>({
    ...(defaultsMask as MaskProps),
    ...initialProps
  })
  const emitted: Array<unknown[]> = []
  let exposed!: MaskExpose & { elementHtml: { value: HTMLInputElement | undefined } }

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-mask': true,
          'd1-mask--visible': props.visible,
          'd1-mask--visiblePartly': props.visiblePartly,
          [`d1-mask--align--${props.align}`]: Boolean(props.align),
          [`d1-mask--dir--${props.dir}`]: Boolean(props.dir)
        }
      }))

      const design = new MaskDesign<
        MaskComponents,
        MaskExpose,
        MaskClasses,
        MaskProps
      >(
        'd1.mask',
        props,
        {
          emits: (...args: unknown[]) => {
            emitted.push(args)
          },
          classes: classesToken
        }
      )

      exposed = design.expose() as unknown as MaskExpose & {
        elementHtml: { value: HTMLInputElement | undefined }
      }

      const render = design.render()
      return () => h(render)
    }
  })

  const container = document.createElement('div')
  document.body.appendChild(container)

  const app = createApp(Component)
  app.mount(container)
  await nextTick()

  mountedCleanups.push(() => {
    app.unmount()
    container.remove()
  })

  return {
    container,
    props,
    emitted,
    exposed
  }
}

describe('Mask (integration)', () => {
  it('should render full masked DOM hierarchy and update reactively on props.value change', async () => {
    const { container, props, exposed } = await mountMask({
      mask: '+7 (***) ***-**-**',
      value: '999',
      name: 'phone'
    })

    const root = container.querySelector('.d1-mask')
    const input = container.querySelector<HTMLInputElement>('input.d1-mask__input')
    const hidden = container.querySelector<HTMLInputElement>('input[type="hidden"]')

    expect(root?.classList.contains('d1-mask--value')).toBe(true)
    expect(input?.value).toBe('+7 (999) ')
    expect(hidden?.value).toBe('+7 (999) ')
    expect(exposed.getValue()).toBe('+7 (999) ')

    props.value = '9991234567'
    await nextTick()

    expect(input?.value).toBe('+7 (999) 123-45-67')
    expect(hidden?.value).toBe('+7 (999) 123-45-67')
    expect(exposed.getValue()).toBe('+7 (999) 123-45-67')
  })

  it('should handle numeric zero (0) initial value and numeric formatting', async () => {
    const { container, exposed } = await mountMask({
      type: 'number',
      value: 0
    })

    const input = container.querySelector<HTMLInputElement>('input.d1-mask__input')
    expect(input?.value).toBe('0')
    expect(exposed.getValue()).toBe('0')
  })

  it('should handle currency and date mask types', async () => {
    const { container: currencyContainer, exposed: currencyExposed } = await mountMask({
      type: 'currency',
      currency: 'USD',
      language: 'en-US',
      value: '1234.56'
    })

    expect(currencyContainer.querySelector('.d1-mask')?.classList.contains('d1-mask--end')).toBe(true)
    expect(currencyExposed.getValue()).toBe('1234.56')

    const { exposed: dateExposed } = await mountMask({
      type: 'date',
      language: 'en-US',
      value: '2026-09-23'
    })

    expect(dateExposed.getValue()).toContain('2026-09-23')
  })

  it('should support fullOnly mode returning empty value until mask is complete', async () => {
    const { props, exposed } = await mountMask({
      mask: '****',
      fullOnly: true,
      value: '12'
    })

    expect(exposed.getValue()).toBe('')

    props.value = '1234'
    await nextTick()

    expect(exposed.getValue()).toBe('1234')
  })

  it('should process user keyboard input, backspace deletion, blur change emission, and clear', async () => {
    vi.useFakeTimers()
    const { container, emitted, exposed } = await mountMask({
      mask: '**-**'
    })

    const input = container.querySelector<HTMLInputElement>('input.d1-mask__input')!
    input.dispatchEvent(new FocusEvent('focus'))

    input.selectionStart = 0
    input.selectionEnd = 0
    input.dispatchEvent(new KeyboardEvent('keydown', { key: '1', bubbles: true }))
    input.dispatchEvent(new InputEvent('beforeinput', { data: '1', bubbles: true }))
    vi.runAllTimers()
    await nextTick()

    input.selectionStart = 1
    input.selectionEnd = 1
    input.dispatchEvent(new KeyboardEvent('keydown', { key: '2', bubbles: true }))
    input.dispatchEvent(new InputEvent('beforeinput', { data: '2', bubbles: true }))
    vi.runAllTimers()
    await nextTick()

    expect(exposed.getValue()).toBe('12-')
    expect(emitted.some(args => args[0] === 'input')).toBe(true)
    expect(emitted.some(args => args[0] === 'inputLite')).toBe(true)

    input.selectionStart = 3
    input.selectionEnd = 3
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true }))
    input.dispatchEvent(new InputEvent('beforeinput', { inputType: 'deleteContentBackward', bubbles: true }))
    vi.runAllTimers()
    await nextTick()

    expect(exposed.getValue()).toBe('1')

    input.dispatchEvent(new FocusEvent('blur'))
    expect(emitted.some(args => args[0] === 'change')).toBe(true)
    expect(emitted.some(args => args[0] === 'blur')).toBe(true)

    expect(exposed.clear()).toBe(true)
    vi.runAllTimers()
    await nextTick()
    expect(exposed.getValue()).toBe('')
    vi.useRealTimers()
  })

  it('should coalesce rapid buffered keystrokes even when goSelection(false) follows goSelection(true)', async () => {
    vi.useFakeTimers()
    const { container, exposed } = await mountMask({
      mask: '+7 (***) ***'
    })

    const input = container.querySelector<HTMLInputElement>('input.d1-mask__input')!
    input.dispatchEvent(new FocusEvent('focus'))

    for (const digit of ['9', '0', '0', '1', '2', '3']) {
      input.dispatchEvent(new KeyboardEvent('keydown', { key: digit, bubbles: true }))
      input.dispatchEvent(new InputEvent('beforeinput', { data: digit, bubbles: true }))
    }

    await nextTick()
    vi.runAllTimers()
    await nextTick()

    expect(exposed.getValue()).toBe('+7 (900) 123')
    vi.useRealTimers()
  })

  it('should support align and dir reactive modifiers', async () => {
    const { container, props } = await mountMask({
      mask: '***',
      align: 'center',
      dir: 'rtl'
    })

    const root = container.querySelector('.d1-mask')
    expect(root?.classList.contains('d1-mask--align--center')).toBe(true)
    expect(root?.classList.contains('d1-mask--dir--rtl')).toBe(true)
    expect(root?.classList.contains('d1-mask--end')).toBe(true)

    props.align = 'left'
    await nextTick()
    expect(root?.classList.contains('d1-mask--align--left')).toBe(true)
    expect(root?.classList.contains('d1-mask--end')).toBe(false)
  })
})
