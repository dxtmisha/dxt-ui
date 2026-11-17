// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'

import { ListItem } from '../ListItem'
import { ListItemDesign } from '../ListItemDesign'
import type { ListItemProps } from '../props'
import type { ListItemClasses, ListItemComponents, ListItemExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockCheckbox = defineComponent({
  name: 'MockCheckbox',
  props: { value: Boolean, label: String },
  setup(props) {
    return () => h('input', { 'type': 'checkbox', 'class': 'mock-checkbox', 'data-checked': String(Boolean(props.value)) })
  }
})

const MockRadio = defineComponent({
  name: 'MockRadio',
  props: { value: Boolean, name: String },
  setup(props) {
    return () => h('input', { 'type': 'radio', 'class': 'mock-radio', 'data-checked': String(Boolean(props.value)) })
  }
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: { icon: [String, Object], end: Boolean },
  setup(props) {
    return () => h('i', { 'class': 'mock-icon', 'data-icon': String(props.icon ?? ''), 'data-end': String(Boolean(props.end)) })
  }
})

describe('ListItemDesign', () => {
  it('should render root element, merge external attrs/classes/styles, compose click handlers, and bind elementHtml', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let elementHtmlRef!: Ref<HTMLDivElement | undefined>
    let exposed!: ListItemExpose
    const externalClick = vi.fn()
    const internalClick = vi.fn()

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<ListItemProps>({
          label: 'Profile',
          value: 'profile-id',
          detail: { role: 'admin' },
          selectionStyle: 'none'
        })

        const design = new ListItemDesign<ListItemComponents, ListItemExpose, ListItemClasses, ListItemProps>(
          'd1.listItem',
          props,
          {
            emits: (type: string, ...args: unknown[]) => {
              if (type === 'click') {
                internalClick(...args)
              }
            },
            classes: computed(() => ({
              main: { 'd1-listItem': true }
            }))
          } as unknown as ConstructorParameters<typeof ListItemDesign>[2]
        )

        exposed = design.expose()
        elementHtmlRef = (exposed as ListItemExpose & { elementHtml: Ref<HTMLDivElement | undefined> }).elementHtml

        return design.render()
      }
    })

    const app = createApp({
      render: () => h(TestComponent, {
        'class': 'custom-item',
        'style': { paddingLeft: '8px' },
        'data-testid': 'list-item-root',
        'onClick': externalClick
      })
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.firstElementChild as HTMLDivElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.tagName.toLowerCase()).toBe('div')
    expect(rootElement.classList.contains('d1-listItem')).toBe(true)
    expect(rootElement.classList.contains('custom-item')).toBe(true)
    expect(rootElement.style.paddingLeft).toBe('8px')
    expect(rootElement.dataset.testid).toBe('list-item-root')
    expect(rootElement.dataset.value).toBe('profile-id')
    expect(elementHtmlRef.value).toBe(rootElement)
    expect(exposed.getValue?.()).toBe('profile-id')
    expect(exposed.getDetail?.()).toEqual({ role: 'admin' })

    rootElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
    expect(internalClick).toHaveBeenCalledTimes(1)
  })

  it('should render selectionStyle controls (checkbox, radio, checkmark) and support filterMode hiding', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const props = reactive<ListItemProps>({
      label: 'Item One',
      selectionStyle: 'checkbox',
      selected: true,
      iconCheckbox: 'check'
    })

    const TestComponent = defineComponent({
      setup() {
        const design = new ListItemDesign<ListItemComponents, ListItemExpose, ListItemClasses, ListItemProps>(
          'd1.listItem',
          props,
          {
            classes: computed(() => ({
              main: { 'd1-listItem': true }
            })),
            components: {
              checkbox: MockCheckbox,
              radio: MockRadio,
              icon: MockIcon
            }
          } as unknown as ConstructorParameters<typeof ListItemDesign>[2]
        )

        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()
    expect(host.querySelector('.d1-listItem__control .mock-checkbox')?.getAttribute('data-checked')).toBe('true')

    props.selectionStyle = 'radio'
    await nextTick()
    expect(host.querySelector('.d1-listItem__control .mock-radio')?.getAttribute('data-checked')).toBe('true')

    props.selectionStyle = 'checkmark'
    await nextTick()
    expect(host.querySelector('.d1-listItem__control .mock-icon')?.getAttribute('data-icon')).toBe('check')

    props.selected = false
    await nextTick()
    expect(host.querySelector('.d1-listItem__control')).toBeNull()

    props.filterMode = true
    props.highlight = 'nomatch'
    await nextTick()
    expect(host.querySelector('.d1-listItem')).toBeNull()
  })

  it('should support ItemConstructor DI override', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    class CustomListItem extends ListItem {
      override get tag(): string {
        return 'li'
      }
    }

    const TestComponent = defineComponent({
      setup() {
        const design = new ListItemDesign<ListItemComponents, ListItemExpose, ListItemClasses, ListItemProps>(
          'd1.listItem',
          reactive({ label: 'Custom' }),
          undefined,
          CustomListItem
        )
        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()
    expect(host.firstElementChild?.tagName.toLowerCase()).toBe('li')
  })
})
