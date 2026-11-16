// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'

import { Badge } from '../Badge'
import { BadgeDesign } from '../BadgeDesign'
import type { BadgeProps } from '../props'
import type { BadgeClasses, BadgeComponents, BadgeExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object]
  },
  setup(props) {
    return () => h('i', { 'class': 'mock-icon', 'data-icon': String(props.icon ?? '') })
  }
})

describe('BadgeDesign', () => {
  it('should render root span, merge external attrs/classes/styles, and bind ref to elementHtml', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let elementHtmlRef!: Ref<HTMLDivElement | undefined>
    const externalClick = vi.fn()

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<BadgeProps>({
          label: 'New',
          icon: 'star',
          ariaLabel: 'New item'
        })

        const design = new BadgeDesign<BadgeComponents, BadgeExpose, BadgeClasses, BadgeProps>(
          'd1.badge',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-badge': true }
            })),
            components: {
              icon: MockIcon
            }
          } as unknown as ConstructorParameters<typeof BadgeDesign>[2]
        )

        const expose = design.expose() as BadgeExpose & { elementHtml: Ref<HTMLDivElement | undefined> }
        elementHtmlRef = expose.elementHtml

        return design.render()
      }
    })

    const app = createApp({
      render: () => h(TestComponent, {
        'class': 'custom-badge',
        'style': { marginLeft: '4px' },
        'data-testid': 'badge-root',
        'onClick': externalClick
      })
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.firstElementChild as HTMLSpanElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.tagName.toLowerCase()).toBe('span')
    expect(rootElement.classList.contains('d1-badge')).toBe(true)
    expect(rootElement.classList.contains('custom-badge')).toBe(true)
    expect(rootElement.style.marginLeft).toBe('4px')
    expect(rootElement.dataset.testid).toBe('badge-root')
    expect(rootElement.getAttribute('aria-label')).toBe('New item')
    expect(rootElement.querySelector('.d1-badge__label')?.textContent).toBe('New')
    expect(rootElement.querySelector('.d1-badge__label')?.getAttribute('aria-hidden')).toBe('true')
    expect(rootElement.querySelector('.mock-icon')?.getAttribute('data-icon')).toBe('star')
    expect(elementHtmlRef.value).toBe(rootElement)

    rootElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
  })

  it('should render empty children in dot mode and support ItemConstructor override', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    class CustomBadge extends Badge {
      override get autoHide(): boolean {
        return false
      }
    }

    const props = reactive<BadgeProps>({
      dot: true,
      label: '99',
      icon: 'star'
    })

    const TestComponent = defineComponent({
      setup() {
        const design = new BadgeDesign<BadgeComponents, BadgeExpose, BadgeClasses, BadgeProps>(
          'd1.badge',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-badge': true, 'd1-badge--dot': props.dot }
            })),
            components: {
              icon: MockIcon
            }
          } as unknown as ConstructorParameters<typeof BadgeDesign>[2],
          CustomBadge
        )
        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.firstElementChild as HTMLSpanElement
    expect(rootElement.classList.contains('d1-badge--dot')).toBe(true)
    expect(rootElement.classList.contains('d1-badge--hideAuto')).toBe(false)
    expect(rootElement.children).toHaveLength(0)

    props.dot = false
    await nextTick()
    expect(rootElement.querySelector('.d1-badge__label')?.textContent).toBe('99')
    expect(rootElement.querySelector('.mock-icon')?.getAttribute('data-icon')).toBe('star')
  })

  it('should render safely when icon component is omitted', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const TestComponent = defineComponent({
      setup() {
        const design = new BadgeDesign<BadgeComponents, BadgeExpose, BadgeClasses, BadgeProps>(
          'd1.badge',
          reactive({ icon: 'bell' })
        )
        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.firstElementChild as HTMLSpanElement
    expect(rootElement.tagName.toLowerCase()).toBe('span')
    expect(rootElement.children).toHaveLength(0)
  })
})
