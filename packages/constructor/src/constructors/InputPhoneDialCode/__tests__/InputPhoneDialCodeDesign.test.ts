// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, ref } from 'vue'
import type { ConstrInstance } from '@dxtmisha/functional'

import { InputPhoneDialCode, type InputPhoneDialCodeConstructors } from '../InputPhoneDialCode'
import { InputPhoneDialCodeDesign } from '../InputPhoneDialCodeDesign'
import type { MenuControlItem } from '../../Menu'
import type { InputPhoneDialCodeProps } from '../props'
import type {
  InputPhoneDialCodeClasses,
  InputPhoneDialCodeComponents,
  InputPhoneDialCodeExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('InputPhoneDialCodeDesign', () => {
  it('should delegate initRender to menu with merged main class and render button in control slot', () => {
    const menuRender = vi.fn(() => [h('div', { class: 'mock-menu' })])
    const buttonRender = vi.fn(() => [h('button', { class: 'mock-button' }, 'US')])

    class MockInputPhoneDialCode extends InputPhoneDialCode {
      override i<K extends keyof InputPhoneDialCodeConstructors>(name: K): ConstrInstance<InputPhoneDialCodeConstructors, K> {
        if (name === 'menu') {
          return { render: menuRender } as unknown as ConstrInstance<InputPhoneDialCodeConstructors, K>
        }
        if (name === 'button') {
          return { render: buttonRender } as unknown as ConstrInstance<InputPhoneDialCodeConstructors, K>
        }
        return super.i(name)
      }
    }

    let designInstance!: InputPhoneDialCodeDesign<
      InputPhoneDialCodeComponents,
      InputPhoneDialCodeExpose,
      InputPhoneDialCodeClasses,
      InputPhoneDialCodeProps
    >

    const Inner = defineComponent({
      inheritAttrs: false,
      setup() {
        designInstance = new InputPhoneDialCodeDesign(
          'd1.inputPhoneDialCode',
          { value: 'US' },
          {
            classes: ref({
              main: { 'd1-inputPhoneDialCode': true }
            })
          },
          MockInputPhoneDialCode
        )

        return designInstance.render()
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)

    const app = createApp({
      render: () => h(Inner, { 'data-custom': 'dial' })
    })
    app.mount(container)
    cleanups.push(() => {
      app.unmount()
      container.remove()
    })

    expect(container.querySelector('.mock-menu')).not.toBeNull()
    expect(menuRender).toHaveBeenCalledTimes(1)

    const [slotsArg, attrsArg] = menuRender.mock.calls[0] as unknown as [
      { control: (props: MenuControlItem) => unknown },
      Record<string, unknown>
    ]
    expect(typeof slotsArg.control).toBe('function')
    expect(attrsArg).toMatchObject({
      'data-custom': 'dial',
      'class': 'd1-inputPhoneDialCode'
    })

    const controlClick = vi.fn()
    const controlVNodes = designInstance.renderControl({
      binds: {
        'class': 'd1-window__control',
        'aria-expanded': false,
        'onClick': controlClick
      }
    } as unknown as MenuControlItem)

    expect(controlVNodes).toHaveLength(1)
    expect(buttonRender).toHaveBeenCalledTimes(1)
    const [, buttonAttrs, isShow] = buttonRender.mock.calls[0] as unknown as [
      unknown,
      Record<string, unknown>,
      () => boolean
    ]
    expect(buttonAttrs).toMatchObject({
      'class': 'd1-window__control d1-inputPhoneDialCode__button',
      'aria-expanded': false,
      'onClick': controlClick
    })
    expect(isShow()).toBe(true)

    expect(designInstance.expose()).toHaveProperty('elementHtml')
  })
})
