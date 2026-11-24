// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { HeaderDesign } from '../HeaderDesign'
import type { HeaderProps, HeaderPropsBasic } from '../props'
import type { HeaderClasses, HeaderComponents, HeaderExpose, HeaderSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object],
    turn: Boolean,
    hide: Boolean
  },
  setup(props, { attrs }) {
    return () => h('span', {
      'class': ['mock-icon', attrs.class],
      'data-icon': typeof props.icon === 'string' ? props.icon : 'object',
      'data-turn': String(Boolean(props.turn))
    })
  }
})

function mountHeaderDesign(
  initialProps: HeaderProps = {},
  slots?: HeaderSlots,
  extraAttrs: Record<string, unknown> = {}
) {
  const state = reactive<HeaderProps>({ ...initialProps })
  let designInstance: HeaderDesign<HeaderComponents, HeaderExpose, HeaderClasses, HeaderPropsBasic> | undefined
  let exposed: (HeaderExpose & { elementHtml?: unknown }) | undefined

  let trailingLength = 0

  const Host = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-header': true,
          [`d1-header--tag--${state.tag ?? 'h3'}`]: true
        }
      }))
      const styles = computed<ConstrStyles>(() => ({
        '--custom-token': '12px'
      }))

      designInstance = new HeaderDesign<HeaderComponents, HeaderExpose, HeaderClasses, HeaderPropsBasic>(
        'd1.header',
        state,
        {
          classes,
          styles,
          components: {
            icon: MockIcon
          }
        }
      )
      exposed = designInstance.expose() as HeaderExpose & { elementHtml?: unknown }
      const renderFn = designInstance.render()
      return () => {
        trailingLength = designInstance!.renderTrailing().length
        return renderFn()
      }
    }
  })

  const container = document.createElement('div')
  const app = createApp({
    render: () => h(Host, extraAttrs, slots as Record<string, () => unknown>)
  })
  app.mount(container)
  cleanups.push(() => app.unmount())

  return {
    container,
    state,
    getDesign: () => designInstance!,
    getExposed: () => exposed!,
    getTrailingLength: () => trailingLength
  }
}

describe('HeaderDesign (isolated class)', () => {
  it('should render root div, bind elementHtml ref, and merge external class and style attributes', () => {
    const onClick = vi.fn()
    const { container, getExposed } = mountHeaderDesign(
      { label: 'Main Title', tag: 'h2' },
      undefined,
      {
        'class': 'external-header',
        'style': { opacity: '0.9' },
        'data-testid': 'hdr',
        onClick
      }
    )

    const root = container.querySelector('[data-testid="hdr"]') as HTMLDivElement | null
    expect(root).not.toBeNull()
    expect(root?.tagName).toBe('DIV')
    expect(root?.classList.contains('d1-header')).toBe(true)
    expect(root?.classList.contains('d1-header--tag--h2')).toBe(true)
    expect(root?.classList.contains('external-header')).toBe(true)
    expect(root?.style.getPropertyValue('--custom-token')).toBe('12px')
    expect(root?.style.opacity).toBe('0.9')

    const elementRef = getExposed().elementHtml as { value?: HTMLElement } | undefined
    expect(elementRef?.value).toBe(root)

    root?.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should render icon, heading label, caption, and trailing spacer + slot in DOM order', async () => {
    const { container, state, getTrailingLength } = mountHeaderDesign(
      {
        icon: 'star',
        iconTurn: true,
        label: 'Dashboard',
        caption: '(12)',
        tag: 'h1'
      },
      {
        trailing: () => [h('button', { class: 'trailing-action' }, 'Action')]
      }
    )

    const root = container.querySelector('.d1-header')!
    const children = Array.from(root.children)
    expect(children).toHaveLength(5)

    expect(children[0]?.classList.contains('d1-header__icon')).toBe(true)
    expect(children[0]?.getAttribute('data-icon')).toBe('star')
    expect(children[0]?.getAttribute('data-turn')).toBe('true')

    expect(children[1]?.tagName).toBe('H1')
    expect(children[1]?.classList.contains('d1-header__label')).toBe(true)
    expect(children[1]?.textContent).toBe('Dashboard')

    expect(children[2]?.classList.contains('d1-header__caption')).toBe(true)
    expect(children[2]?.getAttribute('aria-live')).toBe('polite')
    expect(children[2]?.textContent).toBe('(12)')

    expect(children[3]?.classList.contains('d1-header__space')).toBe(true)
    expect(children[4]?.classList.contains('trailing-action')).toBe(true)

    expect(getTrailingLength()).toBe(2)

    state.captionDecorative = true
    state.tag = 'h4'
    await nextTick()

    expect(root.querySelector('.d1-header__label')?.tagName).toBe('H4')
    expect(root.querySelector('.d1-header__caption')?.getAttribute('aria-hidden')).toBe('true')
  })

  it('should return empty array from renderTrailing and avoid instantiating unused sub-helpers when empty', () => {
    const { container, getDesign } = mountHeaderDesign({})

    expect(getDesign().renderTrailing()).toEqual([])
    expect(container.querySelector('.d1-header__space')).toBeNull()
    expect(container.querySelector('.d1-header__label')).toBeNull()
    expect(container.querySelector('.d1-header__caption')).toBeNull()
    expect(container.querySelector('.d1-header__icon')).toBeNull()
  })
})
