// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, effectScope, h, mergeProps, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, DesignName, ServerStorage } from '@dxtmisha/functional'

import { Chip } from '../Chip'
import { ChipDesign } from '../ChipDesign'
import { defaultsChip, type ChipPropsBasic } from '../props'
import type {
  ChipClasses,
  ChipComponents,
  ChipExpose,
  ChipSlots
} from '../types'

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object]
  },
  setup(componentProps, { attrs }) {
    return () => h('span', mergeProps({ class: 'ssr-mock-icon' }, attrs), String(componentProps.icon ?? ''))
  }
})

const MockProgress = defineComponent({
  name: 'MockProgress',
  props: {
    visible: Boolean
  },
  setup(componentProps, { attrs }) {
    return () => componentProps.visible
      ? h('span', mergeProps({ class: 'ssr-mock-progress' }, attrs), 'loading')
      : null
  }
})

const MockRipple = defineComponent({
  name: 'MockRipple',
  setup(_, { attrs }) {
    return () => h('span', mergeProps({ class: 'ssr-mock-ripple' }, attrs))
  }
})

beforeEach(() => {
  ServerStorage.reset()
  const storage: Record<string, unknown> = {}
  ServerStorage.init(() => storage)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Renders full ChipDesign component in a server-side Node environment without DOM globals.
 *
 * Рендерит полный компонент ChipDesign в серверном окружении Node без глобальных объектов DOM.
 * @param initialProps chip properties / свойства чипа
 * @param customSlots optional component slots / необязательные слоты компонента
 * @returns rendered HTML string / отрендеренная HTML-строка
 */
async function renderChipSsr(
  initialProps: ChipPropsBasic = {},
  customSlots: ChipSlots = {}
): Promise<string> {
  const props = reactive<ChipPropsBasic>({
    ...defaultsChip,
    ...initialProps
  })

  const TestComponent = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-chip': true,
          'd1-chip--disabled': Boolean(props.disabled)
        }
      }))

      const design = new ChipDesign<
        ChipComponents,
        ChipExpose,
        ChipClasses,
        ChipPropsBasic
      >(
        'd1.chip',
        props,
        {
          classes: classesToken,
          components: {
            icon: MockIcon,
            progress: MockProgress,
            ripple: MockRipple
          }
        }
      )

      return design.render()
    }
  })

  const app = createSSRApp({
    render: () => h(TestComponent, null, customSlots as Record<string, () => unknown>)
  })
  return renderToString(app)
}

describe('Chip (SSR)', () => {
  const naming = new DesignName('d1.chip')

  it('should initialize and evaluate Chip bindings in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<ChipPropsBasic>({
      ...defaultsChip,
      ariaLabel: 'Category filter',
      label: 'Design',
      value: 'design-123'
    })

    scope.run(() => {
      const chip = new Chip(props, element, naming)

      expect(chip.tag).toBe('span')
      expect(chip.binds['data-value']).toBe('design-123')
      expect(chip.binds['aria-label']).toBe('Category filter')
      expect(chip.aria.role).toBe('button')
      expect(chip.aria.tabindex).toBe('0')
      expect(chip.classes[naming.getStatusClass('icon')]).toBe(false)
    })

    scope.stop()
  })

  it('should render full ChipDesign component with icons and ripple to HTML string in SSR', async () => {
    const html = await renderChipSsr({
      label: 'SSR Chip',
      icon: 'star',
      iconTrailing: 'close',
      value: 'ssr-chip-val',
      ariaLabel: 'SSR Filter'
    })

    expect(html).toContain('<span')
    expect(html).toContain('d1-chip')
    expect(html).toContain('d1-chip--icon')
    expect(html).toContain('role="button"')
    expect(html).toContain('tabindex="0"')
    expect(html).toContain('data-value="ssr-chip-val"')
    expect(html).toContain('aria-label="SSR Filter"')
    expect(html).toContain('SSR Chip')
    expect(html).toContain('ssr-mock-icon')
    expect(html).toContain('ssr-mock-ripple')
  })

  it('should render polymorphic, numeric 0, disabled, loading, skeleton, and slot variants cleanly in SSR', async () => {
    const anchorHtml = await renderChipSsr({
      label: 'Link Chip',
      tag: 'a',
      href: 'https://example.com'
    })
    expect(anchorHtml).toContain('<a')
    expect(anchorHtml).toContain('href="https://example.com"')

    const buttonHtml = await renderChipSsr({
      label: 0,
      tag: 'button',
      value: 0
    })
    expect(buttonHtml).toContain('<button')
    expect(buttonHtml).toContain('type="button"')
    expect(buttonHtml).toContain('data-value="0"')

    const loadingHtml = await renderChipSsr({
      label: 'Loading',
      loading: true,
      isSkeleton: true
    })
    expect(loadingHtml).toContain('ssr-mock-progress')
    expect(loadingHtml).not.toContain('ssr-mock-ripple')
    expect(loadingHtml).toContain('d1-skeleton__background')
    expect(loadingHtml).toContain('aria-disabled="true"')

    const slotHtml = await renderChipSsr({}, {
      default: () => [h('strong', 'Tiếng Việt — Слот 🚀')]
    })
    expect(slotHtml).toContain('<strong>Tiếng Việt — Слот 🚀</strong>')
  })

  it('should isolate ServerStorage across separate SSR requests', async () => {
    ServerStorage.reset()
    const requestFirst: Record<string, unknown> = {}
    ServerStorage.init(() => requestFirst)
    const htmlFirst = await renderChipSsr({ label: 'Request First', value: 'first' })

    ServerStorage.reset()
    const requestSecond: Record<string, unknown> = {}
    ServerStorage.init(() => requestSecond)
    const htmlSecond = await renderChipSsr({ label: 'Request Second', value: 'second', disabled: true })

    expect(htmlFirst).toContain('Request First')
    expect(htmlFirst).toContain('data-value="first"')
    expect(htmlFirst).not.toContain('Request Second')
    expect(htmlSecond).toContain('Request Second')
    expect(htmlSecond).toContain('aria-disabled="true"')
    expect(htmlSecond).not.toContain('Request First')
  })
})
