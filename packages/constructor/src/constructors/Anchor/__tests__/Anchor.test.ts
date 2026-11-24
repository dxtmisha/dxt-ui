// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref, type Slots } from 'vue'
import { goScrollSmooth, writeClipboardData, type ConstrClasses } from '@dxtmisha/functional'

import { AnchorDesign } from '../AnchorDesign'
import { defaultsAnchor, type AnchorProps } from '../props'

vi.mock('@dxtmisha/functional', async () => {
  const actual = await vi.importActual<typeof import('@dxtmisha/functional')>('@dxtmisha/functional')
  return {
    ...actual,
    goScrollSmooth: vi.fn(),
    writeClipboardData: vi.fn().mockResolvedValue(undefined)
  }
})

const cleanups: Array<() => void> = []

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: { type: [String, Object], default: undefined },
    iconActive: { type: [String, Object], default: undefined },
    active: { type: Boolean, default: false }
  },
  setup(props) {
    return () => h('span', {
      'class': 'mock-icon',
      'data-icon': String(props.icon ?? ''),
      'data-icon-active': String(props.iconActive ?? ''),
      'data-active': String(props.active)
    })
  }
})

const MockTooltip = defineComponent({
  name: 'MockTooltip',
  props: {
    label: { type: [String, Number], default: undefined },
    description: { type: [String, Number], default: undefined },
    interactive: { type: Boolean, default: true }
  },
  setup(props, { slots, expose }) {
    const isOpen = ref(false)
    expose({
      toggle: (open: boolean) => {
        isOpen.value = open
      }
    })

    return () => h('div', { 'class': 'mock-tooltip', 'data-open': String(isOpen.value) }, [
      slots.control?.({
        class: 'mock-tooltip__control',
        open: isOpen,
        binds: { class: 'mock-tooltip__control' }
      }),
      isOpen.value ? h('div', { class: 'mock-tooltip__popup' }, String(props.description ?? props.label ?? '')) : null
    ])
  }
})

function mountAnchor(
  initialProps: Partial<AnchorProps> = {},
  slots: Record<string, (...args: any[]) => any> = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const props = reactive<AnchorProps>({
    ...defaultsAnchor,
    iconLink: 'link',
    iconTag: 'tag',
    iconContentCopy: 'content_copy',
    ...initialProps
  })

  let exposed: { go: () => void } = { go: () => {} }

  const AnchorComponent = defineComponent({
    name: 'TestAnchor',
    setup(_, { expose }) {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-anchor': true
        }
      }))

      const design = new AnchorDesign(
        'd1.anchor',
        props,
        {
          classes: classesToken,
          components: {
            icon: MockIcon,
            tooltip: MockTooltip
          }
        }
      )

      exposed = design.expose()
      expose(exposed)
      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      return () => h(AnchorComponent, null, slots as Slots)
    }
  })

  const app = createApp(Root)
  app.mount(container)

  const unmount = () => {
    app.unmount()
    container.remove()
  }
  cleanups.push(unmount)

  return { container, props, exposed, unmount }
}

describe('Anchor (integration)', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.clearAllMocks()
    vi.mocked(writeClipboardData).mockResolvedValue(undefined)
  })

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(cleanup => cleanup())
    document.body.innerHTML = ''
    history.replaceState({}, '', '/')
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('should render visible navigation anchor with icon, label, href, and scroll on click', () => {
    const { container } = mountAnchor({
      name: 'section-intro',
      label: 'Introduction',
      shift: 80
    })

    const link = container.querySelector('a.d1-anchor') as HTMLAnchorElement | null
    expect(link).not.toBeNull()
    expect(link?.getAttribute('href')).toBe('#section-intro')
    expect(link?.getAttribute('aria-current')).toBe('page')
    expect(link?.querySelector('.mock-icon')?.getAttribute('data-icon')).toBe('link')
    expect(link?.textContent).toContain('Introduction')

    link?.click()

    expect(goScrollSmooth).toHaveBeenCalledWith(link, { behavior: undefined, block: undefined, inline: undefined }, 80)
    expect(location.hash).toBe('#section-intro')
  })

  it('should copy URL, toggle active icon, and open/close tooltip when isCopy is true', async () => {
    const { container } = mountAnchor({
      name: 'copy-section',
      label: 'Copy Section',
      isCopy: true,
      delayHide: 500
    })

    const link = container.querySelector('a.d1-anchor') as HTMLAnchorElement | null
    expect(link).not.toBeNull()
    expect(link?.getAttribute('href')).toBeNull()
    expect(link?.getAttribute('role')).toBe('button')
    expect(link?.classList.contains('mock-tooltip__control')).toBe(true)
    expect(link?.querySelector('.mock-icon')?.getAttribute('data-icon')).toBe('tag')

    link?.click()
    await Promise.resolve()
    await nextTick()

    expect(writeClipboardData).toHaveBeenCalledWith(`${location.origin}${location.pathname}#copy-section`)
    expect(container.querySelector('.mock-tooltip')?.getAttribute('data-open')).toBe('true')
    expect(link?.querySelector('.mock-icon')?.getAttribute('data-active')).toBe('true')

    vi.advanceTimersByTime(500)
    await nextTick()

    expect(container.querySelector('.mock-tooltip')?.getAttribute('data-open')).toBe('false')
    expect(link?.querySelector('.mock-icon')?.getAttribute('data-active')).toBe('false')
  })

  it('should support hidden scroll target anchors via exposed go()', () => {
    const { container, exposed } = mountAnchor({
      name: 'hidden-target',
      hide: true,
      shift: 32
    })

    const link = container.querySelector('a') as HTMLAnchorElement | null
    expect(link).not.toBeNull()
    expect(link?.getAttribute('aria-hidden')).toBe('true')
    expect(link?.getAttribute('name')).toBe('hidden-target')

    exposed.go()

    expect(goScrollSmooth).toHaveBeenCalledWith(link, { behavior: undefined, block: undefined, inline: undefined }, 32)
    expect(location.hash).toBe('#hidden-target')
  })

  it('should render default slot content as label', () => {
    const { container } = mountAnchor(
      { name: 'slot-anchor' },
      { default: () => 'Slotted Heading' }
    )

    const link = container.querySelector('a.d1-anchor')
    expect(link?.textContent).toContain('Slotted Heading')
  })

  it('should auto-scroll on mount when location.hash matches anchor href', () => {
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      callback(0)
      return 1
    })
    history.replaceState({}, '', '#auto-focus-target')

    const { container } = mountAnchor({
      name: 'auto-focus-target',
      label: 'Auto Focus'
    })

    const link = container.querySelector('a.d1-anchor')
    expect(goScrollSmooth).toHaveBeenCalledWith(link, { behavior: undefined, block: undefined, inline: undefined }, 64)
    vi.unstubAllGlobals()
  })
})
