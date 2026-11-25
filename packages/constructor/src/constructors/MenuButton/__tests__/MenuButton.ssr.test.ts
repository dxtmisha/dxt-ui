// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { MenuButtonDesign } from '../MenuButtonDesign'
import { defaultsMenuButton, type MenuButtonProps } from '../props'
import type { MenuButtonClasses, MenuButtonComponents, MenuButtonExpose } from '../types'

const SsrButton = defineComponent({
  name: 'SsrButton',
  inheritAttrs: false,
  props: {
    disabled: Boolean
  },
  setup(componentProps, { attrs, slots }) {
    return () => h(
      'button',
      {
        ...attrs,
        type: 'button',
        class: ['ssr-button', attrs.class],
        disabled: componentProps.disabled
      },
      slots.default?.()
    )
  }
})

const SsrMenu = defineComponent({
  name: 'SsrMenu',
  inheritAttrs: false,
  props: {
    selected: [String, Number, Boolean, Array]
  },
  setup(componentProps, { attrs, slots }) {
    const selectedNames = ref(
      componentProps.selected !== undefined && componentProps.selected !== ''
        ? [`Label ${String(componentProps.selected)}`]
        : []
    )

    return () => h(
      'div',
      { ...attrs, class: ['ssr-menu', attrs.class] },
      slots.control?.({
        open: ref(false),
        selectedNames,
        binds: { 'aria-haspopup': 'listbox' }
      })
    )
  }
})

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Renders MenuButtonDesign in Node SSR environment.
 *
 * Рендерит MenuButtonDesign в серверном окружении Node.
 * @param properties component props / свойства компонента
 * @returns rendered HTML string / отрендеренная HTML-строка
 */
async function renderMenuButtonSsr(properties: MenuButtonProps = {}): Promise<string> {
  const props = reactive<MenuButtonProps>({
    ...(defaultsMenuButton as MenuButtonProps),
    ...properties
  })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: { 'd1-menuButton': true }
      }))

      const design = new MenuButtonDesign<
        MenuButtonComponents,
        MenuButtonExpose,
        MenuButtonClasses,
        MenuButtonProps
      >(
        'd1.menuButton',
        props,
        {
          classes: classesToken,
          components: {
            button: SsrButton,
            menu: SsrMenu
          }
        }
      )

      return design.render()
    }
  })

  return renderToString(createSSRApp(Component))
}

describe('MenuButton (SSR)', () => {
  it('should render button trigger and hidden input safely in Node without DOM globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderMenuButtonSsr({
      label: 'Sort by',
      name: 'sortOrder',
      value: 'newest',
      hideLabelValue: false
    })

    expect(html).toContain('d1-menuButton')
    expect(html).toContain('ssr-button')
    expect(html).toContain('Sort by')
    expect(html).toContain('Label newest')
    expect(html).toContain('type="hidden"')
    expect(html).toContain('name="sortOrder"')
    expect(html).toContain('value="newest"')
  })

  it('should render disabled MenuButton without icon and isolate ServerStorage requests', async () => {
    const disabledHtml = await renderMenuButtonSsr({
      label: 'Locked',
      disabled: true
    })

    expect(disabledHtml).toContain('ssr-button')
    expect(disabledHtml).toContain('Locked')

    ServerStorage.reset()
    const requestFirst: Record<string, unknown> = {}
    ServerStorage.init(() => requestFirst)
    const htmlFirst = await renderMenuButtonSsr({ value: 'first' })

    ServerStorage.reset()
    const requestSecond: Record<string, unknown> = {}
    ServerStorage.init(() => requestSecond)
    const htmlSecond = await renderMenuButtonSsr({ value: 'second' })

    expect(htmlFirst).toContain('value="first"')
    expect(htmlFirst).not.toContain('value="second"')
    expect(htmlSecond).toContain('value="second"')
    expect(htmlSecond).not.toContain('value="first"')
  })
})
