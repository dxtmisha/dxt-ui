// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { MenuChipDesign } from '../MenuChipDesign'
import { defaultsMenuChip, type MenuChipProps } from '../props'
import type { MenuChipClasses, MenuChipComponents, MenuChipExpose } from '../types'

const SsrChip = defineComponent({
  name: 'SsrChip',
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
        class: ['ssr-chip', attrs.class],
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
        ? [`Tag ${String(componentProps.selected)}`]
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
 * Renders MenuChipDesign in Node SSR environment.
 *
 * Рендерит MenuChipDesign в серверном окружении Node.
 * @param properties component props / свойства компонента
 * @returns rendered HTML string / отрендеренная HTML-строка
 */
async function renderMenuChipSsr(properties: MenuChipProps = {}): Promise<string> {
  const props = reactive<MenuChipProps>({
    ...(defaultsMenuChip as MenuChipProps),
    ...properties
  })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: { 'd1-menuChip': true }
      }))

      const design = new MenuChipDesign<
        MenuChipComponents,
        MenuChipExpose,
        MenuChipClasses,
        MenuChipProps
      >(
        'd1.menuChip',
        props,
        {
          classes: classesToken,
          components: {
            chip: SsrChip,
            menu: SsrMenu
          }
        }
      )

      return design.render()
    }
  })

  return renderToString(createSSRApp(Component))
}

describe('MenuChip (SSR)', () => {
  it('should render chip trigger and hidden input safely in Node without DOM globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderMenuChipSsr({
      label: 'Topic',
      name: 'topicFilter',
      value: 'vue',
      hideLabelValue: false
    })

    expect(html).toContain('d1-menuChip')
    expect(html).toContain('ssr-chip')
    expect(html).toContain('Topic')
    expect(html).toContain('Tag vue')
    expect(html).toContain('type="hidden"')
    expect(html).toContain('name="topicFilter"')
    expect(html).toContain('value="vue"')
  })

  it('should render disabled MenuChip without icon and isolate ServerStorage requests', async () => {
    const disabledHtml = await renderMenuChipSsr({
      label: 'Locked Chip',
      disabled: true
    })

    expect(disabledHtml).toContain('ssr-chip')
    expect(disabledHtml).toContain('Locked Chip')

    ServerStorage.reset()
    const requestFirst: Record<string, unknown> = {}
    ServerStorage.init(() => requestFirst)
    const htmlFirst = await renderMenuChipSsr({ value: 'alpha' })

    ServerStorage.reset()
    const requestSecond: Record<string, unknown> = {}
    ServerStorage.init(() => requestSecond)
    const htmlSecond = await renderMenuChipSsr({ value: 'beta' })

    expect(htmlFirst).toContain('value="alpha"')
    expect(htmlFirst).not.toContain('value="beta"')
    expect(htmlSecond).toContain('value="beta"')
    expect(htmlSecond).not.toContain('value="alpha"')
  })
})
