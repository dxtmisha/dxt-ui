// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { AvatarDesign } from '../AvatarDesign'
import type { AvatarProps, AvatarPropsBasic } from '../props'
import type { AvatarClasses, AvatarComponents, AvatarExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const MockImageSsr = defineComponent({
  name: 'MockImageSsr',
  props: { value: String },
  setup(props, { attrs }) {
    return () => h('span', { class: ['mock-image', attrs.class] }, props.value)
  }
})

const MockBadgeSsr = defineComponent({
  name: 'MockBadgeSsr',
  props: { label: [String, Number], dot: Boolean },
  setup(props, { attrs }) {
    return () => h('span', { class: ['mock-badge', attrs.class] }, props.dot ? 'dot' : String(props.label ?? ''))
  }
})

const TestAvatarSsr = defineComponent({
  name: 'TestAvatarSsr',
  props: {
    label: [String, Number],
    reduction: { type: Boolean, default: true },
    tabindex: { type: [String, Number], default: '0' },
    image: String,
    badge: [String, Number],
    badgeDot: Boolean,
    href: String,
    isSkeleton: Boolean
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({
      main: { 'd1-avatar': true }
    }))
    const design = new AvatarDesign<AvatarComponents, AvatarExpose, AvatarClasses, AvatarPropsBasic>(
      'd1.avatar',
      props as Readonly<AvatarProps>,
      {
        classes,
        components: {
          image: MockImageSsr,
          badge: MockBadgeSsr
        }
      }
    )

    return design.render()
  }
})

describe('Avatar (SSR)', () => {
  it('should render initials, image, and badge cleanly in Node SSR without browser leaks', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(TestAvatarSsr, {
          label: 'Elena Petrova',
          image: 'avatar.jpg',
          badge: 3,
          isSkeleton: true
        })
      }
    }))

    const html = await renderToString(app)
    expect(html).toContain('d1-avatar')
    expect(html).toContain('d1-skeleton__background')
    expect(html).toContain('role="button"')
    expect(html).toContain('aria-label="Elena Petrova"')
    expect(html).toContain('>EP<')
    expect(html).toContain('avatar.jpg')
    expect(html).toContain('>3<')
  })

  it('should render link avatar without role="button" in SSR', async () => {
    const app = createSSRApp(defineComponent({
      setup() {
        return () => h(TestAvatarSsr, {
          label: 'Link User',
          href: '/profile'
        })
      }
    }))

    const html = await renderToString(app)
    expect(html).toContain('<a ')
    expect(html).toContain('href="/profile"')
    expect(html).not.toContain('role="button"')
  })
})
