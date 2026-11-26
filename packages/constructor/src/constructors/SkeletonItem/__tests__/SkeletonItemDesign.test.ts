// @vitest-environment jsdom
import { describe, it, expect, afterEach, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, ref, type Component, type FunctionalComponent } from 'vue'

import { SkeletonItemDesign } from '../SkeletonItemDesign'
import { SkeletonItem } from '../SkeletonItem'
import { defaultsSkeletonItem, type SkeletonItemProps } from '../props'
import type { SkeletonItemClasses, SkeletonItemComponents, SkeletonItemExpose } from '../types'

const createSkeletonItemComponent = (ItemConstructor: typeof SkeletonItem = SkeletonItem) => defineComponent({
  name: 'TestSkeletonItem',
  props: {
    tag: { type: [String, Object, Function] as unknown as () => SkeletonItemProps['tag'], default: undefined },
    label: { type: [String, Number] as unknown as () => SkeletonItemProps['label'], default: undefined },
    length: { type: [String, Number, Array] as unknown as () => SkeletonItemProps['length'], default: defaultsSkeletonItem.length },
    itemAttrs: { type: Object as () => SkeletonItemProps['itemAttrs'], default: undefined },
    text: Boolean,
    textVariant: Boolean,
    background: Boolean,
    backgroundVariant: Boolean,
    border: Boolean,
    borderVariant: Boolean
  },
  setup(props, { expose }) {
    const design = new SkeletonItemDesign<
      SkeletonItemComponents,
      SkeletonItemExpose,
      SkeletonItemClasses,
      SkeletonItemProps
    >(
      'd1.skeletonItem',
      props as Readonly<SkeletonItemProps>,
      undefined,
      ItemConstructor
    )

    expose(design.expose())
    return design.render()
  }
})

const mountComponent = (component: Component, props?: Record<string, unknown>, slots?: Record<string, () => unknown>) => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const exposedRef = ref<Record<string, unknown> | null>(null)
  const app = createApp({
    render: () => h(component, { ...props, ref: exposedRef }, slots)
  })
  app.mount(container)
  return {
    container,
    element: container.firstElementChild as HTMLElement,
    exposedRef,
    unmount: () => {
      app.unmount()
      container.remove()
    }
  }
}

describe('SkeletonItemDesign (unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  it('should merge external attrs, itemAttrs, class, style, and click handlers without overwriting', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const outerClick = vi.fn()
    const itemClick = vi.fn()
    const TestComponent = createSkeletonItemComponent()

    const mounted = mountComponent(TestComponent, {
      'text': true,
      'label': 'Merged label',
      'itemAttrs': {
        'class': 'item-extra',
        'style': { paddingLeft: '8px' },
        'data-item': 'yes',
        'onClick': itemClick
      },
      'class': 'outer-extra',
      'style': { marginTop: '4px' },
      'data-outer': 'yes',
      'onClick': outerClick
    })

    const root = mounted.element
    expect(root.classList.contains('d1-skeleton__text')).toBe(true)
    expect(root.classList.contains('item-extra')).toBe(true)
    expect(root.classList.contains('outer-extra')).toBe(true)
    expect(root.getAttribute('data-item')).toBe('yes')
    expect(root.getAttribute('data-outer')).toBe('yes')
    expect(root.style.marginTop).toBe('4px')
    expect(root.style.paddingLeft).toBe('8px')
    expect((mounted.exposedRef.value as { elementHtml?: HTMLElement } | null)?.elementHtml).toBe(root)

    root.click()
    expect(outerClick).toHaveBeenCalledTimes(1)
    expect(itemClick).toHaveBeenCalledTimes(1)
    expect(warnSpy).not.toHaveBeenCalled()

    mounted.unmount()
  })

  it('should escape HTML/XSS payloads safely as plain text instead of innerHTML', () => {
    const xssPayload = '<img src=x onerror=alert(1)><script>alert(2)</script>'
    const TestComponent = createSkeletonItemComponent()

    const labelMounted = mountComponent(TestComponent, {
      text: true,
      label: xssPayload
    })
    expect(labelMounted.element.querySelector('img')).toBeNull()
    expect(labelMounted.element.querySelector('script')).toBeNull()
    expect(labelMounted.element.textContent).toBe(xssPayload)
    labelMounted.unmount()

    const lengthMounted = mountComponent(TestComponent, {
      text: true,
      length: xssPayload
    })
    expect(lengthMounted.element.querySelector('img')).toBeNull()
    expect(lengthMounted.element.querySelector('script')).toBeNull()
    expect(lengthMounted.element.textContent).toBe(xssPayload)
    lengthMounted.unmount()
  })

  it('should render both object and functional Vue components properly with and without default slot', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const TestComponent = createSkeletonItemComponent()

    const ObjectChild = defineComponent({
      name: 'ObjectChild',
      setup(_, { slots }) {
        return () => h(
          'button',
          { 'data-has-default-slot': String(Boolean(slots.default)) },
          slots.default ? slots.default() : 'No Slot Fallback'
        )
      }
    })

    const FunctionalChild: FunctionalComponent = (props, { slots }) => h(
      'article',
      {
        ...props,
        'data-has-default-slot': String(Boolean(slots.default)),
        'data-has-inner-html': String('innerHTML' in props)
      },
      slots.default ? slots.default() : 'Functional Fallback'
    )

    const objectNoSlot = mountComponent(TestComponent, { tag: ObjectChild, background: true })
    expect(objectNoSlot.element.tagName).toBe('BUTTON')
    expect(objectNoSlot.element.getAttribute('data-has-default-slot')).toBe('false')
    expect(objectNoSlot.element.textContent).toBe('No Slot Fallback')
    objectNoSlot.unmount()

    const objectWithSlot = mountComponent(
      TestComponent,
      { tag: ObjectChild, background: true },
      { default: () => h('span', 'Object Slot') }
    )
    expect(objectWithSlot.element.getAttribute('data-has-default-slot')).toBe('true')
    expect(objectWithSlot.element.textContent).toBe('Object Slot')
    objectWithSlot.unmount()

    const functionalNoSlot = mountComponent(TestComponent, { tag: FunctionalChild, border: true })
    expect(functionalNoSlot.element.tagName).toBe('ARTICLE')
    expect(functionalNoSlot.element.getAttribute('data-has-default-slot')).toBe('false')
    expect(functionalNoSlot.element.getAttribute('data-has-inner-html')).toBe('false')
    expect(functionalNoSlot.element.textContent).toBe('Functional Fallback')
    functionalNoSlot.unmount()

    const functionalWithSlot = mountComponent(
      TestComponent,
      { tag: FunctionalChild, border: true },
      { default: () => h('em', 'Functional Slot') }
    )
    expect(functionalWithSlot.element.getAttribute('data-has-default-slot')).toBe('true')
    expect(functionalWithSlot.element.textContent).toBe('Functional Slot')
    functionalWithSlot.unmount()

    expect(warnSpy).not.toHaveBeenCalled()
  })

  it('should support DI ItemConstructor override and respect external aria-label / aria-hidden', async () => {
    const customSpy = vi.fn()
    class CustomSkeletonItem extends SkeletonItem {
      override get label(): string | number {
        customSpy()
        return 'Custom DI Label'
      }
    }

    const CustomComponent = createSkeletonItemComponent(CustomSkeletonItem)
    const customMounted = mountComponent(CustomComponent, { text: true })
    expect(customMounted.element.textContent).toBe('Custom DI Label')
    expect(customSpy).toHaveBeenCalled()
    customMounted.unmount()

    const DefaultComponent = createSkeletonItemComponent()
    const decorativeMounted = mountComponent(DefaultComponent, { text: true, length: 2 })
    expect(decorativeMounted.element.getAttribute('aria-hidden')).toBe('true')
    decorativeMounted.unmount()

    const ariaLabelMounted = mountComponent(DefaultComponent, {
      'text': true,
      'length': 2,
      'aria-label': 'Loading article title'
    })
    expect(ariaLabelMounted.element.getAttribute('aria-label')).toBe('Loading article title')
    expect(ariaLabelMounted.element.getAttribute('aria-hidden')).toBeNull()
    ariaLabelMounted.unmount()

    const ariaHiddenFalseMounted = mountComponent(DefaultComponent, {
      'text': true,
      'length': 2,
      'aria-hidden': 'false'
    })
    expect(ariaHiddenFalseMounted.element.getAttribute('aria-hidden')).toBe('false')
    ariaHiddenFalseMounted.unmount()

    const unicodeText = ref('Привет · Học tiếng Việt · 你好 · 🚀')
    const UnicodeHost = defineComponent({
      setup() {
        return () => h(DefaultComponent, { text: true, label: unicodeText.value })
      }
    })
    const unicodeMounted = mountComponent(UnicodeHost)
    expect(unicodeMounted.element.textContent).toBe('Привет · Học tiếng Việt · 你好 · 🚀')
    unicodeText.value = 'Обновлено · Nguyễn'
    await nextTick()
    expect(unicodeMounted.element.textContent).toBe('Обновлено · Nguyễn')
    unicodeMounted.unmount()
  })
})
