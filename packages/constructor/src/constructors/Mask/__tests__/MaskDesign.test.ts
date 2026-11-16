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
  vi.restoreAllMocks()
})

/**
 * Mounts MaskDesign inside a test Vue app.
 *
 * Монтирует MaskDesign внутри тестового приложения Vue.
 * @param initialProps initial component properties / начальные свойства компонента
 * @param extraAttrs external HTML attributes / внешние HTML-атрибуты
 * @returns container, reactive props, emits log, and exposed API / контейнер, реактивные свойства, журнал событий и экспонированный API
 */
async function mountMaskDesign(
  initialProps: MaskProps = {},
  extraAttrs: Record<string, unknown> = {}
) {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)

  const props = reactive<MaskProps>({
    ...(defaultsMask as MaskProps),
    ...initialProps
  })
  const emitted: Array<unknown[]> = []
  let exposed!: MaskExpose & { elementHtml: { value: HTMLInputElement | undefined } }

  const Inner = defineComponent({
    inheritAttrs: false,
    setup(_, { attrs }) {
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
      return () => h(render, attrs)
    }
  })

  const Host = defineComponent({
    setup() {
      return () => h(Inner, extraAttrs)
    }
  })

  const container = document.createElement('div')
  document.body.appendChild(container)
  const app = createApp(Host)
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

describe('MaskDesign', () => {
  it('should render root span, visible input, and aria-hidden character display', async () => {
    const { container } = await mountMaskDesign({
      mask: '+1 ***',
      value: '5'
    })

    const root = container.querySelector('.d1-mask')
    const input = container.querySelector<HTMLInputElement>('input.d1-mask__input')
    const character = container.querySelector('.d1-mask__character')
    const items = container.querySelectorAll('.d1-mask__character__item')

    expect(root?.tagName).toBe('SPAN')
    expect(input).not.toBeNull()
    expect(input?.value).toBe('+1 5')
    expect(character?.getAttribute('aria-hidden')).toBe('true')
    expect(items.length).toBe(6)
    expect(items[3]?.textContent).toBe('5')
    expect(items[4]?.textContent).toBe('_')
    expect(items[4]?.className).toContain('d1-mask__character__item--placeholder')
  })

  it('should render hidden input when name prop is set and omit it when name is absent', async () => {
    const { container, props } = await mountMaskDesign({
      mask: '***',
      value: '12'
    })

    expect(container.querySelector('input[type="hidden"]')).toBeNull()

    props.name = 'phone'
    await nextTick()

    const hidden = container.querySelector<HTMLInputElement>('input[type="hidden"]')
    expect(hidden).not.toBeNull()
    expect(hidden?.name).toBe('phone')
    expect(hidden?.value).toBe('12')
  })

  it('should merge external attrs and classes onto root element cleanly', async () => {
    const { container } = await mountMaskDesign(
      { mask: '**' },
      { 'id': 'custom-mask', 'class': 'extra-root', 'data-test': 'mask' }
    )

    const root = container.querySelector('.d1-mask')
    expect(root?.id).toBe('custom-mask')
    expect(root?.classList.contains('extra-root')).toBe(true)
    expect(root?.getAttribute('data-test')).toBe('mask')
  })

  it('should expose getValueBasic, getValue, setValue, clear, and elementHtml pointing to input', async () => {
    const { exposed, emitted } = await mountMaskDesign({
      mask: '(*)-*',
      value: '1'
    })

    expect(exposed.elementHtml.value?.tagName).toBe('INPUT')
    expect(exposed.getValueBasic()).toBe('(1)-')
    expect(exposed.getValue()).toBe('(1)-')

    expect(exposed.setValue('78')).toBe(true)
    await nextTick()
    expect(exposed.getValueBasic()).toBe('(7)-8')
    expect(exposed.getValue()).toBe('(7)-8')

    expect(exposed.clear()).toBe(true)
    await nextTick()
    expect(exposed.getValueBasic()).toBe('(')
    expect(exposed.getValue()).toBe('(')
    expect(emitted.some(args => args[0] === 'reset')).toBe(true)
  })
})
