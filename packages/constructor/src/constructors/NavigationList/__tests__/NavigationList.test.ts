// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, shallowReactive, shallowReadonly, type App } from 'vue'
import { ServerStorage } from '@dxtmisha/functional'

import { NavigationListDesign } from '../NavigationListDesign'
import { defaultsNavigationList, type NavigationListProps } from '../props'
import type {
  NavigationListClasses,
  NavigationListComponents,
  NavigationListEmits,
  NavigationListExpose
} from '../types'

const applications: App[] = []

afterEach(() => {
  applications.splice(0).forEach(application => application.unmount())
  document.body.replaceChildren()
  ServerStorage.reset()
  vi.restoreAllMocks()
})

const MockInteractiveItem = defineComponent({
  name: 'MockInteractiveItem',
  props: ['label', 'value', 'listId', 'focus', 'disabled', 'highlight'],
  emits: ['click'],
  setup(props, { attrs, emit }) {
    return () => h(
      'a',
      {
        ...attrs,
        'class': ['test-item', attrs.class],
        'data-value': props.value,
        'data-list-id': props.listId,
        'data-focus': String(Boolean(props.focus)),
        'data-disabled': String(Boolean(props.disabled)),
        'data-highlight': props.highlight ?? '',
        'onClick': (event: MouseEvent) => emit('click', event, { value: props.value, type: 'click' })
      },
      String(props.label ?? '')
    )
  }
})

const MockSearchInput = defineComponent({
  name: 'MockSearchInput',
  props: ['modelValue'],
  emits: ['update:modelValue', 'inputLite'],
  setup(props, { emit }) {
    return () => h('input', {
      class: 'test-search-input',
      value: props.modelValue ?? '',
      onInput: (event: Event) => {
        const value = (event.target as HTMLInputElement).value
        emit('update:modelValue', value)
        emit('inputLite', { value })
      }
    })
  }
})

describe('NavigationList (Integration)', () => {
  it('tracks reactive selected, Record datasets, keyValue/keyLabel mapping, and lite mode through exposed API', async () => {
    ServerStorage.init(() => ({}))
    let exposed!: NavigationListExpose

    const props = shallowReactive<NavigationListProps>({
      ...defaultsNavigationList,
      ariaMultiselectable: true,
      list: [
        { index: 'h-idx', description: 'Home', value: 'h-val', label: 'H Label' },
        { index: 'd-idx', description: 'Docs', value: 'd-val', label: 'D Label' }
      ],
      selected: 'h-idx'
    })

    const app = createApp(defineComponent({
      setup() {
        const design = new NavigationListDesign<
          NavigationListComponents,
          NavigationListExpose,
          NavigationListClasses,
          NavigationListProps
        >('d1.navigationList', shallowReadonly(props))

        exposed = design.expose()
        return design.render()
      }
    }))

    const host = document.createElement('div')
    document.body.appendChild(host)
    applications.push(app)
    app.mount(host)

    const root = host.firstElementChild as HTMLElement
    expect(root.getAttribute('aria-multiselectable')).toBe('true')
    expect(exposed.isSelected()).toBe(true)
    expect(exposed.getSelectedNames()).toEqual(['H Label'])
    expect(exposed.getSelectedValues()).toEqual(['h-val'])

    props.keyValue = 'index'
    props.keyLabel = 'description'
    props.selected = 'd-idx'
    await nextTick()

    expect(exposed.getSelectedNames()).toEqual(['Docs'])
    expect(exposed.getSelectedValues()).toEqual(['d-idx'])

    props.lite = true
    await nextTick()
    expect(exposed.getSelectedValues()).toEqual(['d-idx'])
  })

  it('forwards click and clickLite events and filters items including empty state and Vietnamese diacritics', async () => {
    ServerStorage.init(() => ({}))
    const onClick = vi.fn()
    const onClickLite = vi.fn()

    const props = shallowReactive<NavigationListProps>({
      ...defaultsNavigationList,
      showSearch: true,
      filterMode: true,
      textNotFound: 'Nothing matches filter',
      list: [
        { value: 'overview', label: 'Overview' },
        { value: 'guides', label: 'Tiếng Việt Guides' }
      ]
    })

    const app = createApp(defineComponent({
      setup() {
        const design = new NavigationListDesign<
          NavigationListComponents,
          NavigationListExpose,
          NavigationListClasses,
          NavigationListProps
        >(
          'd1.navigationList',
          shallowReadonly(props),
          {
            components: {
              listItem: MockInteractiveItem,
              input: MockSearchInput
            } as unknown as NavigationListComponents,
            emits: ((event: keyof NavigationListEmits, ...argumentsList: unknown[]) => {
              if (event === 'click') {
                onClick(...argumentsList)
              }
              if (event === 'clickLite') {
                onClickLite(...argumentsList)
              }
            }) as never
          }
        )

        return design.render()
      }
    }))

    const host = document.createElement('div')
    document.body.appendChild(host)
    applications.push(app)
    app.mount(host)

    const items = host.querySelectorAll<HTMLElement>('.test-item')
    expect(items).toHaveLength(2)

    items[1]?.click()
    await nextTick()

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClickLite).toHaveBeenCalledWith({ value: 'guides', type: 'click' })

    const input = host.querySelector<HTMLInputElement>('.test-search-input')!
    input.value = 'việt'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()

    const root = host.firstElementChild as HTMLElement
    expect(root.classList.contains('d1-navigationList--searchActive')).toBe(true)
    expect(root.classList.contains('d1-navigationList--highlightActive')).toBe(true)

    input.value = 'zzzz-missing'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await nextTick()

    expect(host.querySelector('.d1-navigationList__none')?.textContent).toBe('Nothing matches filter')
  })

  it('handles keyboard navigation, IME composition guard, and listener cleanup on unmount when control=true', async () => {
    ServerStorage.init(() => ({}))
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0)
      return 1
    })
    vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

    const onClick = vi.fn()
    const onClose = vi.fn()

    const app = createApp(defineComponent({
      setup() {
        const design = new NavigationListDesign<
          NavigationListComponents,
          NavigationListExpose,
          NavigationListClasses,
          NavigationListProps
        >(
          'd1.navigationList',
          {
            ...defaultsNavigationList,
            control: true,
            list: [
              { value: 'first', label: 'First' },
              { value: 'second', label: 'Second' }
            ]
          },
          {
            components: {
              listItem: MockInteractiveItem
            } as unknown as NavigationListComponents,
            emits: ((event: keyof NavigationListEmits, ...args: unknown[]) => {
              if (event === 'click') {
                onClick(...args)
              } else if (event === 'close') {
                onClose(...args)
              }
            }) as never
          }
        )

        return design.render()
      }
    }))

    const host = document.createElement('div')
    document.body.appendChild(host)
    applications.push(app)
    app.mount(host)
    await nextTick()

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', isComposing: true, bubbles: true }))
    await nextTick()
    expect(host.querySelector('.test-item[data-value="first"]')?.getAttribute('data-focus')).toBe('false')

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    await nextTick()
    expect(host.querySelector('.test-item[data-value="first"]')?.getAttribute('data-focus')).toBe('true')

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    expect(onClick).toHaveBeenCalledTimes(1)

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    expect(onClose).toHaveBeenCalledTimes(1)

    app.unmount()
    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
