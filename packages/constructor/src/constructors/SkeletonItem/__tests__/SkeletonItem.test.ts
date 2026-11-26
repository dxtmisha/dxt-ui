// @vitest-environment jsdom
import { describe, it, expect, afterEach, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, ref } from 'vue'

import { SkeletonDesign } from '../../Skeleton/SkeletonDesign'
import type { SkeletonClasses, SkeletonComponents, SkeletonExpose } from '../../Skeleton/types'
import type { SkeletonProps } from '../../Skeleton/props'

import { SkeletonItemDesign } from '../SkeletonItemDesign'
import { defaultsSkeletonItem, type SkeletonItemProps } from '../props'
import type { SkeletonItemClasses, SkeletonItemComponents, SkeletonItemExpose } from '../types'

const TestSkeleton = defineComponent({
  name: 'TestSkeleton',
  props: {
    active: Boolean
  },
  setup(props, { expose }) {
    const design = new SkeletonDesign<
      SkeletonComponents,
      SkeletonExpose,
      SkeletonClasses,
      SkeletonProps
    >(
      'd1.skeleton',
      props as Readonly<SkeletonProps>
    )

    expose(design.expose())
    return design.render()
  }
})

const TestSkeletonItem = defineComponent({
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
      props as Readonly<SkeletonItemProps>
    )

    expose(design.expose())
    return design.render()
  }
})

describe('SkeletonItem (integration)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  it('should integrate inside Skeleton wrapper and toggle active skeleton classes reactively', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const active = ref(true)
    const textMode = ref(true)
    const borderMode = ref(false)
    const counter = ref(0)

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(defineComponent({
      setup() {
        return () => h(
          TestSkeleton,
          { active: active.value },
          {
            default: () => [
              h(TestSkeletonItem, {
                'tag': 'h4',
                'text': textMode.value,
                'border': borderMode.value,
                'length': [2, 4],
                'data-counter': counter.value
              }),
              h(TestSkeletonItem, {
                tag: 'span',
                background: true,
                label: 0
              }),
              h(
                TestSkeletonItem,
                {
                  tag: 'p',
                  backgroundVariant: true,
                  textVariant: true,
                  borderVariant: true
                },
                {
                  default: () => h('strong', 'Slot priority content')
                }
              )
            ]
          }
        )
      }
    }))
    app.mount(container)

    const root = container.firstElementChild as HTMLElement
    const heading = container.querySelector('h4') as HTMLElement
    const zeroSpan = container.querySelector('span') as HTMLElement
    const slotParagraph = container.querySelector('p') as HTMLElement

    expect(root.classList.contains('d1-skeleton--active')).toBe(true)
    expect(heading.classList.contains('d1-skeleton__text')).toBe(true)
    expect(heading.getAttribute('aria-hidden')).toBe('true')
    expect(zeroSpan.classList.contains('d1-skeleton__background')).toBe(true)
    expect(zeroSpan.textContent).toBe('0')
    expect(zeroSpan.getAttribute('aria-hidden')).toBeNull()
    expect(slotParagraph.classList.contains('d1-skeleton__backgroundVariant')).toBe(true)
    expect(slotParagraph.classList.contains('d1-skeleton__textVariant')).toBe(true)
    expect(slotParagraph.classList.contains('d1-skeleton__borderVariant')).toBe(true)
    expect(slotParagraph.textContent).toBe('Slot priority content')

    // Flush post-mount transition once, then verify unrelated parent re-render (even with inline `[2, 4]`) does NOT mutate text
    await nextTick()
    const initialGenerated = heading.textContent
    counter.value = 1
    await nextTick()
    expect(heading.textContent).toBe(initialGenerated)

    // Reactive prop switch updates skeleton modifier classes without recreating placeholder text
    textMode.value = false
    borderMode.value = true
    active.value = false
    await nextTick()

    expect(root.classList.contains('d1-skeleton--active')).toBe(false)
    expect(heading.classList.contains('d1-skeleton__text')).toBe(false)
    expect(heading.classList.contains('d1-skeleton__border')).toBe(true)
    expect(heading.textContent).toBe(initialGenerated)
    expect(warnSpy).not.toHaveBeenCalled()

    app.unmount()
  })

  it('should render nested custom components via tag prop with slots and itemAttrs', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const CardBox = defineComponent({
      name: 'CardBox',
      props: {
        role: { type: String, default: undefined }
      },
      setup(props, { slots }) {
        return () => h('section', { role: props.role }, slots.default?.())
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp({
      render: () => h(
        TestSkeletonItem,
        {
          tag: CardBox,
          background: true,
          itemAttrs: { 'role': 'region', 'data-card': 'main' }
        },
        {
          default: () => h('div', 'Card Body')
        }
      )
    })
    app.mount(container)

    const root = container.firstElementChild as HTMLElement
    expect(root.tagName).toBe('SECTION')
    expect(root.getAttribute('role')).toBe('region')
    expect(root.getAttribute('data-card')).toBe('main')
    expect(root.classList.contains('d1-skeleton__background')).toBe(true)
    expect(root.textContent).toBe('Card Body')
    expect(warnSpy).not.toHaveBeenCalled()

    app.unmount()
  })
})
