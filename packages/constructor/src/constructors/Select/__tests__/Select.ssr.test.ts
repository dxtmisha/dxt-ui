// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { SelectDesign } from '../SelectDesign'
import type { SelectProps } from '../props'
import type { SelectClasses, SelectComponents, SelectExpose } from '../types'

const SsrField = defineComponent({
  name: 'SsrField',
  inheritAttrs: false,
  props: {
    label: [String, Number],
    validationMessage: String
  },
  setup(componentProps, { attrs, slots }) {
    return () => h(
      'div',
      {
        'class': ['ssr-field', attrs.class],
        'data-label': String(componentProps.label ?? ''),
        'data-validation': componentProps.validationMessage ?? ''
      },
      slots.default?.({
        id: 'ssr-select-1',
        className: 'd1-field__body__input',
        classHidden: 'd1-field__body__hidden',
        classForFocus: 'd1-field__body__focus',
        binds: { id: 'ssr-select-1' }
      })
    )
  }
})

const SsrMenu = defineComponent({
  name: 'SsrMenu',
  inheritAttrs: false,
  props: {
    selected: [String, Number, Boolean, Array],
    list: [Array, Object]
  },
  setup(componentProps, { slots }) {
    const selectedList = ref(
      componentProps.selected !== undefined
        ? [{ label: `Option ${String(componentProps.selected)}`, value: componentProps.selected }]
        : []
    )

    return () => h(
      'div',
      { 'class': 'ssr-menu', 'data-selected': String(componentProps.selected ?? '') },
      slots.control?.({
        open: ref(false),
        selectedList,
        selectedNames: ref(selectedList.value.map(item => item.label)),
        binds: { 'aria-haspopup': 'listbox' }
      })
    )
  }
})

const SsrSelectValue = defineComponent({
  name: 'SsrSelectValue',
  inheritAttrs: false,
  props: {
    value: Array,
    placeholder: String
  },
  setup(componentProps, { attrs }) {
    return () => h(
      'div',
      { ...attrs, class: 'ssr-select-value' },
      ((componentProps.value as Array<{ label: string }> | undefined) ?? []).map(item => item.label).join(', ')
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
 * Renders SelectDesign in a server-side Node environment.
 *
 * Рендерит SelectDesign в серверном окружении Node.
 * @param properties component properties / свойства компонента
 * @returns rendered HTML string / отрендеренная HTML-строка
 */
async function renderSelectSsr(properties: SelectProps = {}): Promise<string> {
  const props = reactive<SelectProps>({ ...properties })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: { 'd1-select': true }
      }))

      const design = new SelectDesign<
        SelectComponents,
        SelectExpose,
        SelectClasses,
        SelectProps
      >(
        'd1.select',
        props,
        {
          classes: classesToken,
          components: {
            field: SsrField,
            menu: SsrMenu,
            selectValue: SsrSelectValue
          }
        }
      )

      return design.render()
    }
  })

  return renderToString(createSSRApp(Component))
}

describe('Select (SSR)', () => {
  it('should render static select safely in Node without DOM globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderSelectSsr({
      label: 'Country',
      name: 'country',
      value: 'vn',
      option: [{ label: 'Vietnam', value: 'vn' }]
    })

    expect(html).toContain('class="ssr-field d1-select d1-select__field"')
    expect(html).toContain('data-label="Country"')
    expect(html).toContain('role="combobox"')
    expect(html).toContain('value="vn"')
    expect(html).toContain('Option vn')
  })

  it('should render editValue and numeric 0 deterministically during SSR', async () => {
    const html = await renderSelectSsr({
      editValue: true,
      value: 0,
      validationMessage: 'Required field'
    })

    expect(html).toContain('value="0"')
    expect(html).toContain('data-validation="Required field"')
    expect(html).not.toContain('ssr-select-value')
  })

  it('should isolate ServerStorage across independent SSR requests', async () => {
    ServerStorage.reset()
    const requestFirst: Record<string, unknown> = {}
    ServerStorage.init(() => requestFirst)
    const htmlFirst = await renderSelectSsr({ value: 'alpha' })

    ServerStorage.reset()
    const requestSecond: Record<string, unknown> = {}
    ServerStorage.init(() => requestSecond)
    const htmlSecond = await renderSelectSsr({ value: 'beta' })

    expect(htmlFirst).toContain('value="alpha"')
    expect(htmlFirst).not.toContain('value="beta"')
    expect(htmlSecond).toContain('value="beta"')
    expect(htmlSecond).not.toContain('value="alpha"')
  })
})
