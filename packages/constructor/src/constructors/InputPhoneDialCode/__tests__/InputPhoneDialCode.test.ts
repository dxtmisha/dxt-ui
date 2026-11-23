// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { type ConstrEmit, Geo, type ListSelectedList } from '@dxtmisha/functional'

import { InputPhoneDialCodeDesign } from '../InputPhoneDialCodeDesign'
import type { MenuControlItem } from '../../Menu'
import type { WindowEmitOptions } from '../../Window'
import type { InputPhoneDialCodeProps } from '../props'
import type {
  InputPhoneDialCodeClasses,
  InputPhoneDialCodeComponents,
  InputPhoneDialCodeEmits,
  InputPhoneDialCodeExpose
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

describe('InputPhoneDialCode (Integration)', () => {
  const createHarness = (initialProps: InputPhoneDialCodeProps = {}) => {
    const isOpen = ref(false)
    const selectedItemMap: Record<string, { icon: string, caption: string, label: string, value: string }> = {
      US: { icon: 'flag-us', caption: '+1', label: 'United States', value: 'US' },
      VN: { icon: 'flag-vn', caption: '+84', label: 'Vietnam', value: 'VN' },
      DE: { icon: 'flag-de', caption: '+49', label: 'Germany', value: 'DE' }
    }
    const lastMenuAttrs = ref<Record<string, unknown>>({})
    const emitted: Array<{ event: string, args: unknown[] }> = []

    const MockButton = defineComponent({
      name: 'MockButton',
      inheritAttrs: false,
      props: {
        disabled: Boolean,
        readonly: Boolean,
        icon: String,
        iconTrailing: String,
        iconTurn: Boolean,
        label: String
      },
      setup(props, { attrs }) {
        return () => h(
          'button',
          {
            'type': 'button',
            'class': attrs.class,
            'disabled': props.disabled,
            'aria-expanded': attrs['aria-expanded'],
            'data-readonly': String(Boolean(props.readonly)),
            'data-icon': props.icon ?? '',
            'data-icon-trailing': props.iconTrailing ?? '',
            'data-icon-turn': String(Boolean(props.iconTurn)),
            'onClick': attrs.onClick as ((event: MouseEvent) => void) | undefined
          },
          props.label ?? ''
        )
      }
    })

    const MockMenuCountry = defineComponent({
      name: 'MockMenuCountry',
      inheritAttrs: false,
      props: {
        selected: [String, Number, Boolean, Array],
        showPhoneCode: Boolean,
        disabled: Boolean,
        disableFocusReturn: Boolean,
        menuAttrs: Object
      },
      emits: ['click', 'updateValue', 'window'],
      setup(props, { attrs, emit, expose, slots }) {
        const getSelectedList = () => {
          const key = String(props.selected ?? Geo.getCountry())
          return selectedItemMap[key] ? [selectedItemMap[key]] : []
        }

        const getOpen = () => isOpen.value

        expose({
          getSelectedList,
          getOpen
        })

        const controlProps = computed<MenuControlItem>(() => ({
          class: 'd1-window__control',
          open: isOpen,
          classesWindow: {} as MenuControlItem['classesWindow'],
          loading: ref(false),
          isSelected: computed(() => Boolean(props.selected)),
          selectedList: computed(() => []),
          selectedNames: computed(() => []),
          selectedValues: computed(() => []),
          previous: () => undefined,
          next: () => undefined,
          onClick: async () => {
            isOpen.value = !isOpen.value
          },
          onKeydown: async () => {},
          onContextmenu: async () => {},
          binds: {
            'class': 'd1-window__control',
            'aria-expanded': isOpen.value,
            'onClick': async () => {
              isOpen.value = !isOpen.value
            },
            'onKeydown': async () => {},
            'onContextmenu': async () => {}
          }
        }))

        return () => {
          lastMenuAttrs.value = (props.menuAttrs ?? {}) as Record<string, unknown>

          return h(
            'div',
            {
              'class': ['mock-menu-country', attrs.class],
              'data-selected': String(props.selected ?? ''),
              'data-show-phone-code': String(Boolean(props.showPhoneCode)),
              'data-disabled': String(Boolean(props.disabled)),
              'data-disable-focus-return': String(Boolean(props.disableFocusReturn))
            },
            [
              slots.control?.(controlProps.value),
              h(
                'button',
                {
                  type: 'button',
                  class: 'mock-select-vn',
                  onClick: (event: MouseEvent) => {
                    emit('click', event, { type: 'item', value: 'VN', detail: { code: '+84' } })
                    emit('updateValue', 'VN')
                  }
                },
                'Select VN'
              ),
              h(
                'button',
                {
                  type: 'button',
                  class: 'mock-select-group',
                  onClick: (event: MouseEvent) => {
                    emit('click', event, {
                      type: 'group',
                      value: [{ index: 'DO', value: 'DO' }, { index: 'DO-1-829', value: 'DO-1-829' }]
                    })
                  }
                },
                'Toggle DO Group'
              ),
              h(
                'button',
                {
                  type: 'button',
                  class: 'mock-close-window',
                  onClick: () => {
                    const options: WindowEmitOptions = {
                      id: 'win-1',
                      element: document.createElement('div'),
                      control: document.createElement('button'),
                      open: false
                    }
                    emit('window', options)
                  }
                },
                'Close Window'
              )
            ]
          )
        }
      }
    })

    const state = reactive<InputPhoneDialCodeProps>({
      iconArrowDown: 'keyboard_arrow_down',
      ...initialProps
    })

    const emitHandler = (event: string, ...args: unknown[]) => {
      emitted.push({ event, args })
      if (event === 'update:modelSelected') {
        state.modelSelected = args[0] as ListSelectedList
      }
    }

    const Host = defineComponent({
      setup() {
        const design = new InputPhoneDialCodeDesign<
          InputPhoneDialCodeComponents,
          InputPhoneDialCodeExpose,
          InputPhoneDialCodeClasses,
          InputPhoneDialCodeProps
        >(
          'd1.inputPhoneDialCode',
          state,
          {
            emits: emitHandler as unknown as ConstrEmit<InputPhoneDialCodeEmits>,
            classes: ref({
              main: { 'd1-inputPhoneDialCode': true }
            }),
            components: {
              button: MockButton,
              menuCountry: MockMenuCountry
            }
          }
        )

        return design.render()
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)

    const app = createApp(Host)
    app.mount(container)
    mountedCleanups.push(() => {
      app.unmount()
      container.remove()
    })

    return {
      container,
      state,
      isOpen,
      lastMenuAttrs,
      emitted
    }
  }

  it('should render with BEM classes, selected country flag, dial code label, and disableFocusReturn', async () => {
    const { container, lastMenuAttrs } = createHarness({
      value: 'US',
      labelType: 'code',
      menuCountryAttrs: {
        menuAttrs: {
          showSearch: true
        }
      }
    })

    await nextTick()

    const menuElement = container.querySelector('.mock-menu-country') as HTMLElement
    expect(menuElement).not.toBeNull()
    expect(menuElement.classList.contains('d1-inputPhoneDialCode')).toBe(true)
    expect(menuElement.classList.contains('d1-inputPhoneDialCode__menuCountry')).toBe(true)
    expect(menuElement.getAttribute('data-selected')).toBe('US')
    expect(menuElement.getAttribute('data-show-phone-code')).toBe('true')
    expect(menuElement.getAttribute('data-disable-focus-return')).toBe('true')

    const buttonElement = container.querySelector('button.d1-inputPhoneDialCode__button') as HTMLButtonElement
    expect(buttonElement).not.toBeNull()
    expect(buttonElement.classList.contains('d1-window__control')).toBe(true)
    expect(buttonElement.getAttribute('data-icon')).toBe('flag-us')
    expect(buttonElement.getAttribute('data-icon-trailing')).toBe('keyboard_arrow_down')
    expect(buttonElement.textContent).toBe('+1')

    expect(lastMenuAttrs.value).toMatchObject({
      showSearch: true
    })
  })

  it('should update label reactively across labelType variants and disabled state', async () => {
    const { container, state } = createHarness({
      value: 'DE',
      labelType: 'name'
    })

    await nextTick()

    const getButton = () => container.querySelector('button.d1-inputPhoneDialCode__button') as HTMLButtonElement
    expect(getButton().textContent).toBe('Germany')
    expect(getButton().getAttribute('data-icon')).toBe('flag-de')

    state.labelType = 'code'
    await nextTick()
    expect(getButton().textContent).toBe('+49')

    state.labelType = 'none'
    await nextTick()
    expect(getButton().textContent).toBe('')

    state.disabled = true
    await nextTick()
    expect(getButton().disabled).toBe(true)
    expect(getButton().getAttribute('data-icon-trailing')).toBe('')
  })

  it('should emit update:selected, updateValue, click, clickLite, and window on user interaction', async () => {
    const { container, isOpen, emitted } = createHarness({
      value: 'US',
      labelType: 'code'
    })

    await nextTick()

    const getButton = () => container.querySelector('button.d1-inputPhoneDialCode__button') as HTMLButtonElement
    getButton().click()
    await nextTick()

    expect(isOpen.value).toBe(true)
    expect(getButton().getAttribute('data-icon-turn')).toBe('true')

    ;(container.querySelector('.mock-select-vn') as HTMLButtonElement).click()
    await nextTick()

    expect(emitted.filter(item => item.event === 'updateValue').map(item => item.args)).toEqual([['VN']])
    expect(emitted.filter(item => item.event === 'update:selected').map(item => item.args)).toEqual([['VN']])
    expect(emitted.filter(item => item.event === 'update:modelSelected').map(item => item.args)).toEqual([['VN']])
    expect(emitted.find(item => item.event === 'click')?.args[1]).toEqual({ type: 'item', value: 'VN', detail: { code: '+84' } })
    expect(emitted.find(item => item.event === 'clickLite')?.args).toEqual([{ type: 'item', value: 'VN', detail: { code: '+84' } }])
    expect(getButton().textContent).toBe('+84')

    ;(container.querySelector('.mock-close-window') as HTMLButtonElement).click()
    await nextTick()
    expect(emitted.find(item => item.event === 'window')?.args[0]).toMatchObject({ id: 'win-1', open: false })
  })

  it('should support reactive modelSelected prop updates', async () => {
    const { container, state } = createHarness({
      modelSelected: 'US',
      labelType: 'name'
    })

    await nextTick()

    const getButton = () => container.querySelector('button.d1-inputPhoneDialCode__button') as HTMLButtonElement
    expect(getButton().textContent).toBe('United States')

    state.modelSelected = 'VN'
    await nextTick()

    expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('VN')
    expect(getButton().textContent).toBe('Vietnam')
  })

  it('should preserve selected country flag and value when a group header is clicked without selecting a subitem', async () => {
    const { container, isOpen, emitted } = createHarness({
      value: 'US',
      labelType: 'code'
    })

    await nextTick()

    const getButton = () => container.querySelector('button.d1-inputPhoneDialCode__button') as HTMLButtonElement
    getButton().click()
    await nextTick()
    expect(isOpen.value).toBe(true)

    ;(container.querySelector('.mock-select-group') as HTMLButtonElement).click()
    await nextTick()

    ;(container.querySelector('.mock-close-window') as HTMLButtonElement).click()
    await nextTick()

    expect(container.querySelector('.mock-menu-country')?.getAttribute('data-selected')).toBe('US')
    expect(getButton().getAttribute('data-icon')).toBe('flag-us')
    expect(getButton().textContent).toBe('+1')
    expect(emitted.some(item => item.event === 'click' || item.event === 'clickLite')).toBe(false)
  })

  it('should hide trailing arrow and lock menu for single-country lists while keeping flag visible', async () => {
    const { container } = createHarness({
      value: 'US',
      labelType: 'code',
      countryList: ['US']
    })

    await nextTick()

    const button = container.querySelector('button.d1-inputPhoneDialCode__button') as HTMLButtonElement
    expect(button.getAttribute('data-readonly')).toBe('true')
    expect(button.getAttribute('data-icon')).toBe('flag-us')
    expect(button.getAttribute('data-icon-trailing')).toBe('')
    expect(button.textContent).toBe('+1')
    expect(container.querySelector('.mock-menu-country')?.getAttribute('data-disabled')).toBe('true')
  })

  it('should keep menu interactive for single multi-code country and respect explicit disableFocusReturn false', async () => {
    const { container } = createHarness({
      value: 'US',
      labelType: 'code',
      countryList: ['DO'],
      disableFocusReturn: false
    })

    await nextTick()

    const button = container.querySelector('button.d1-inputPhoneDialCode__button') as HTMLButtonElement
    const menuElement = container.querySelector('.mock-menu-country') as HTMLElement
    expect(button.getAttribute('data-readonly')).toBe('false')
    expect(button.getAttribute('data-icon-trailing')).toBe('keyboard_arrow_down')
    expect(menuElement.getAttribute('data-disabled')).toBe('false')
    expect(menuElement.getAttribute('data-disable-focus-return')).toBe('false')
  })
})
