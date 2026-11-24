// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { AvatarDesign } from '../AvatarDesign'
import type { AvatarProps, AvatarPropsBasic } from '../props'
import type { AvatarClasses, AvatarComponents, AvatarEmits, AvatarExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockImage = defineComponent({
  name: 'MockImage',
  props: {
    value: [String, Object],
    disabled: Boolean
  },
  emits: ['load'],
  setup(props, { attrs, emit }) {
    return () => h('img', {
      'class': ['mock-image', attrs.class],
      'src': typeof props.value === 'string' ? props.value : '',
      'data-disabled': String(Boolean(props.disabled)),
      'onLoad': () => emit('load', { image: true })
    })
  }
})

const MockBadge = defineComponent({
  name: 'MockBadge',
  props: {
    label: [String, Number],
    dot: Boolean,
    overlap: String
  },
  setup(props, { attrs }) {
    return () => h('span', {
      'class': ['mock-badge', attrs.class],
      'data-dot': String(Boolean(props.dot)),
      'data-overlap': props.overlap
    }, String(props.label ?? ''))
  }
})

const TestAvatar = defineComponent({
  name: 'TestAvatar',
  props: {
    label: [String, Number],
    labelId: String,
    ariaLabel: String,
    reduction: { type: Boolean, default: true },
    tabindex: { type: [String, Number], default: '0' },
    image: [String, Object],
    badge: [String, Number, Object],
    badgeDot: Boolean,
    href: String,
    to: [String, Object],
    disabled: Boolean,
    readonly: Boolean,
    isSkeleton: Boolean,
    value: [String, Number],
    detail: Object
  },
  emits: ['click', 'clickLite', 'load'],
  setup(props, { emit, expose }) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-avatar': true,
        'd1-avatar--disabled': props.disabled,
        'd1-avatar--readonly': props.readonly
      }
    }))

    const design = new AvatarDesign<AvatarComponents, AvatarExpose, AvatarClasses, AvatarPropsBasic>(
      'd1.avatar',
      props as Readonly<AvatarProps>,
      {
        classes,
        emits: emit as unknown as (event: keyof AvatarEmits, ...args: unknown[]) => void,
        components: {
          image: MockImage,
          badge: MockBadge
        }
      }
    )

    expose(design.expose())
    return design.render()
  }
})

describe('Avatar (integration)', () => {
  it('should handle click events, disabled blocking, and dynamic prop updates', async () => {
    const onClick = vi.fn()
    const onClickLite = vi.fn()
    const disabled = ref(false)
    const label = ref('Jane Smith')

    const Host = defineComponent({
      setup() {
        return () => h(TestAvatar, {
          label: label.value,
          disabled: disabled.value,
          value: 'u-42',
          onClick,
          onClickLite
        })
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    const root = container.querySelector('.d1-avatar') as HTMLElement
    expect(root.querySelector('.d1-avatar__label')?.textContent).toBe('JS')
    expect(root.getAttribute('role')).toBe('button')

    root.click()
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClickLite).toHaveBeenCalledWith({
      type: 'click',
      value: 'u-42',
      detail: undefined
    })

    disabled.value = true
    await nextTick()
    expect(root.getAttribute('role')).toBe('img')
    expect(root.getAttribute('tabindex')).toBeNull()

    root.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should render anchor tag, skeleton classes, dot badge, image load forwarding, and default slot', () => {
    const onLoad = vi.fn()

    const Host = defineComponent({
      setup() {
        return () => h(TestAvatar, {
          href: '/users/1',
          image: 'https://example.com/photo.jpg',
          badgeDot: true,
          isSkeleton: true,
          onLoad
        }, {
          default: () => 'Custom Slot'
        })
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    const anchor = container.querySelector('a.d1-avatar') as HTMLElement
    expect(anchor).not.toBeNull()
    expect(anchor.getAttribute('role')).toBeNull()
    expect(anchor.classList.contains('d1-skeleton__background')).toBe(true)
    expect(anchor.querySelector('.d1-avatar__label')?.textContent).toBe('Custom Slot')
    expect(anchor.querySelector('.mock-badge')?.getAttribute('data-dot')).toBe('true')

    const image = anchor.querySelector('img.mock-image') as HTMLImageElement
    image.dispatchEvent(new Event('load'))
    expect(onLoad).toHaveBeenCalledWith({ image: true })
  })
})
