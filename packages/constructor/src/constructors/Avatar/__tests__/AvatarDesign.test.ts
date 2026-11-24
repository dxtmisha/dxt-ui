// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, reactive } from 'vue'
import { type ConstrClasses } from '@dxtmisha/functional'

import { Avatar } from '../Avatar'
import { AvatarDesign } from '../AvatarDesign'
import type { AvatarPropsBasic } from '../props'
import type { AvatarClasses, AvatarComponents, AvatarExpose } from '../types'

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
  setup(props, { attrs }) {
    return () => h('span', { 'class': ['mock-image', attrs.class], 'data-value': String(props.value ?? ''), 'data-disabled': String(Boolean(props.disabled)) })
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
    return () => h('span', { 'class': ['mock-badge', attrs.class], 'data-dot': String(Boolean(props.dot)), 'data-overlap': props.overlap }, String(props.label ?? ''))
  }
})

describe('AvatarDesign (isolated class)', () => {
  it('should render merged root attributes, label, image, badge, and expose event API', () => {
    const props = reactive<AvatarPropsBasic>({
      label: 'Alice Bob',
      reduction: true,
      image: 'avatar.png',
      badge: 5,
      value: 'avatar-1',
      detail: { id: 1 },
      tabindex: '0'
    })
    const onExternalClick = vi.fn()
    let exposed: Partial<AvatarExpose> = {}

    const Inner = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: { 'd1-avatar': true }
        }))
        const design = new AvatarDesign<AvatarComponents, AvatarExpose, AvatarClasses, AvatarPropsBasic>(
          'd1.avatar',
          props,
          {
            classes,
            components: {
              image: MockImage,
              badge: MockBadge
            }
          }
        )

        exposed = design.expose()
        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(Inner, {
          'class': 'custom-avatar',
          'data-testid': 'avatar-root',
          'onClick': onExternalClick
        })
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    const root = host.querySelector('[data-testid="avatar-root"]') as HTMLElement
    expect(root.tagName).toBe('DIV')
    expect(root.classList.contains('d1-avatar')).toBe(true)
    expect(root.classList.contains('custom-avatar')).toBe(true)
    expect(root.getAttribute('role')).toBe('button')
    expect(root.querySelector('.d1-avatar__label')?.textContent).toBe('AB')
    expect(root.querySelector('.mock-image')?.getAttribute('data-value')).toBe('avatar.png')
    expect(root.querySelector('.mock-badge')?.getAttribute('data-overlap')).toBe('circular')
    expect(root.querySelector('.mock-badge')?.textContent).toBe('5')
    expect(exposed.getValue?.()).toBe('avatar-1')
    expect(exposed.getDetail?.()).toEqual({ id: 1 })

    root.click()
    expect(onExternalClick).toHaveBeenCalledTimes(1)
  })

  it('should support custom ItemConstructor dependency injection', () => {
    class CustomAvatar extends Avatar {
      override get tag(): string {
        return 'span'
      }
    }

    const Wrapper = defineComponent({
      setup() {
        const design = new AvatarDesign<AvatarComponents, AvatarExpose, AvatarClasses, AvatarPropsBasic>(
          'd1.avatar',
          reactive<AvatarPropsBasic>({ label: 'JD', reduction: true }),
          {},
          CustomAvatar
        )

        return design.render()
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    expect(host.firstElementChild?.tagName).toBe('SPAN')
  })
})
