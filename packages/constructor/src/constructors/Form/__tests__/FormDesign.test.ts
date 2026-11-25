// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { Form } from '../Form'
import { FormDesign } from '../FormDesign'
import type { FormPropsBasic } from '../props'
import type { FormClasses, FormComponents, FormExpose } from '../types'

const cleanups: Array<() => void> = []

describe('FormDesign', () => {
  afterEach(() => {
    cleanups.splice(0).reverse().forEach(unmount => unmount())
    vi.restoreAllMocks()
  })

  it('should render <form>, bind elementHtml ref, project header/default/footer slots in order, and expose API', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let exposed!: FormExpose & { elementHtml?: Ref<HTMLFormElement | undefined> }

    const Component = defineComponent({
      setup() {
        const props = reactive<FormPropsBasic>({
          action: '/submit',
          method: 'post'
        })
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-form': true }
        }))

        const design = new FormDesign<
          FormComponents,
          FormExpose,
          FormClasses,
          FormPropsBasic
        >('d1.form', props, { classes: classesToken })

        exposed = design.expose() as FormExpose & { elementHtml?: Ref<HTMLFormElement | undefined> }
        return design.render()
      }
    })

    const app = createApp({
      render() {
        return h(Component, {}, {
          header: () => [h('div', { class: 'slot-header' }, 'Header')],
          default: () => [h('div', { class: 'slot-default' }, 'Body')],
          footer: () => [h('div', { class: 'slot-footer' }, 'Footer')]
        })
      }
    })

    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    const formElement = container.querySelector('form.d1-form') as HTMLFormElement
    expect(formElement).not.toBeNull()
    expect(formElement.getAttribute('action')).toBe('/submit')
    expect(formElement.getAttribute('method')).toBe('post')
    expect(formElement.hasAttribute('novalidate')).toBe(true)
    expect(exposed.elementHtml?.value).toBe(formElement)

    const childClasses = Array.from(formElement.children).map(node => node.className)
    expect(childClasses).toEqual(['slot-header', 'slot-default', 'slot-footer'])

    expect(typeof exposed.checkValidity).toBe('function')
    expect(typeof exposed.getValues).toBe('function')
    expect(typeof exposed.reset).toBe('function')
    expect(typeof exposed.set).toBe('function')
    expect(typeof exposed.setValues).toBe('function')
    expect(typeof exposed.setValuesAll).toBe('function')
    expect(typeof exposed.submit).toBe('function')
  })

  it('should merge external class, style, and event listeners with Form binds via mergeProps', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const externalSubmit = vi.fn((event: Event) => event.preventDefault())
    const emitMock = vi.fn()

    const Component = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<FormPropsBasic>({})
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-form': true }
        }))

        const design = new FormDesign<
          FormComponents,
          FormExpose,
          FormClasses,
          FormPropsBasic
        >('d1.form', props, {
          classes: classesToken,
          emits: emitMock
        })

        return design.render()
      }
    })

    const app = createApp({
      render() {
        return h(Component, {
          class: 'custom-form-class',
          style: 'display: flex',
          onSubmit: externalSubmit
        })
      }
    })

    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    const formElement = container.querySelector('form') as HTMLFormElement
    expect(formElement.classList.contains('d1-form')).toBe(true)
    expect(formElement.classList.contains('custom-form-class')).toBe(true)
    expect(formElement.getAttribute('style')).toContain('display: flex')

    const submitEvent = new SubmitEvent('submit', { cancelable: true })
    formElement.dispatchEvent(submitEvent)

    expect(externalSubmit).toHaveBeenCalledTimes(1)
    expect(emitMock).toHaveBeenCalledWith('submit', submitEvent)
  })

  it('should support custom ItemConstructor injection without eagerly instantiating unused helpers', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let injectedOrchestrator!: Form

    class CustomForm extends Form {
      readonly marker = 'custom-form'
    }

    const Component = defineComponent({
      setup() {
        const props = reactive<FormPropsBasic>({})
        const design = new FormDesign<
          FormComponents,
          FormExpose,
          FormClasses,
          FormPropsBasic
        >('d1.form', props, undefined, CustomForm)

        injectedOrchestrator = (design as unknown as { item: Form }).item
        design.expose()
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(injectedOrchestrator).toBeInstanceOf(CustomForm)
    expect(injectedOrchestrator.hasInstance('provide')).toBe(true)
    expect(injectedOrchestrator.hasInstance('event')).toBe(true)
    expect(injectedOrchestrator.hasInstance('elements')).toBe(false)
    expect(injectedOrchestrator.hasInstance('error')).toBe(false)
    expect(injectedOrchestrator.hasInstance('model')).toBe(false)
    expect(injectedOrchestrator.hasInstance('native')).toBe(false)
    expect(injectedOrchestrator.hasInstance('value')).toBe(false)
  })
})
