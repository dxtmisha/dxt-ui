// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { FieldMessageDesign } from '../FieldMessageDesign'
import type { FieldMessageProps } from '../props'
import type {
  FieldMessageClasses,
  FieldMessageComponents,
  FieldMessageExpose
} from '../types'
import type { FieldMessageSlot } from '../basicTypes'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

describe('FieldMessageDesign (unit & DOM)', () => {
  it('should render nothing when helper, validation, and counter are inactive', async () => {
    const props = reactive<FieldMessageProps>({})
    const Component = defineComponent({
      setup() {
        const design = new FieldMessageDesign<
          FieldMessageComponents,
          FieldMessageExpose,
          FieldMessageClasses,
          FieldMessageProps
        >('d1.fieldMessage', props)

        return design.render()
      }
    })

    const container = document.createElement('div')
    const app = createApp(Component)
    app.mount(container)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    expect(container.querySelector('div')).toBeNull()
  })

  it('should bind ref, merge external attrs/classes/styles/listeners, and render info and error elements', async () => {
    const props = reactive<FieldMessageProps>({
      helperMessage: 'Helper hint',
      helperId: 'helper-1',
      validationMessage: 'Required field',
      validationId: 'validation-1',
      isSkeleton: true
    })
    const onExternalClick = vi.fn()
    let exposedElement: HTMLDivElement | undefined

    const Inner = defineComponent({
      setup() {
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-fieldMessage': true
          }
        }))

        const design = new FieldMessageDesign<
          FieldMessageComponents,
          FieldMessageExpose,
          FieldMessageClasses,
          FieldMessageProps
        >('d1.fieldMessage', props, {
          classes: classesToken,
          styles: computed(() => ({ gap: '4px' }))
        })

        const expose = design.expose() as { elementHtml?: { value?: HTMLDivElement } }
        const renderResult = design.render()

        return () => {
          const rendered = renderResult()
          exposedElement = expose.elementHtml?.value
          return rendered
        }
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Inner, {
          class: 'external-message-class',
          style: 'color: red',
          onClick: onExternalClick
        })
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    const rootElement = container.querySelector('div.d1-fieldMessage')
    expect(rootElement).not.toBeNull()
    expect(exposedElement).toBe(rootElement)
    expect(rootElement?.classList.contains('d1-fieldMessage--validation')).toBe(true)
    expect(rootElement?.classList.contains('external-message-class')).toBe(true)
    expect(rootElement?.getAttribute('style')).toContain('gap: 4px')
    expect(rootElement?.getAttribute('style')).toContain('color: red')

    const infoElement = rootElement?.querySelector('.d1-fieldMessage__info')
    expect(infoElement?.getAttribute('id')).toBe('helper-1')
    expect(infoElement?.classList.contains('d1-skeleton__textVariant')).toBe(true)
    expect(infoElement?.textContent).toBe('Helper hint')

    const errorElement = rootElement?.querySelector('.d1-fieldMessage__error')
    expect(errorElement?.getAttribute('id')).toBe('validation-1')
    expect(errorElement?.getAttribute('role')).toBe('alert')
    expect(errorElement?.textContent).toBe('Required field')

    rootElement?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(onExternalClick).toHaveBeenCalledTimes(1)
  })

  it('should render HTML only when hasHtmlCode is true and escape text by default', async () => {
    const props = reactive<FieldMessageProps>({
      helperMessage: '<b>Bold Helper</b>',
      validationMessage: '<i>Italic Error</i>',
      hasHtmlCode: false
    })

    const Component = defineComponent({
      setup() {
        const design = new FieldMessageDesign<
          FieldMessageComponents,
          FieldMessageExpose,
          FieldMessageClasses,
          FieldMessageProps
        >('d1.fieldMessage', props)

        return design.render()
      }
    })

    const container = document.createElement('div')
    const app = createApp(Component)
    app.mount(container)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    expect(container.querySelector('.d1-fieldMessage__info b')).toBeNull()
    expect(container.querySelector('.d1-fieldMessage__info')?.textContent).toBe('<b>Bold Helper</b>')
    expect(container.querySelector('.d1-fieldMessage__error i')).toBeNull()
    expect(container.querySelector('.d1-fieldMessage__error')?.textContent).toBe('<i>Italic Error</i>')

    props.hasHtmlCode = true
    await nextTick()

    expect(container.querySelector('.d1-fieldMessage__info b')?.textContent).toBe('Bold Helper')
    expect(container.querySelector('.d1-fieldMessage__error i')?.textContent).toBe('Italic Error')
  })

  it('should project helper and validation slots with slot data and prefer slots over innerHTML', async () => {
    const props = reactive<FieldMessageProps>({
      helperMessage: 'Helper text',
      validationMessage: 'Validation text',
      hasHtmlCode: true
    })
    const capturedHelperProps: unknown[] = []
    const capturedValidationProps: unknown[] = []

    const Component = defineComponent({
      setup() {
        const design = new FieldMessageDesign<
          FieldMessageComponents,
          FieldMessageExpose,
          FieldMessageClasses,
          FieldMessageProps
        >('d1.fieldMessage', props)

        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Component, null, {
          helper: (slotProps: FieldMessageSlot) => {
            capturedHelperProps.push(slotProps)
            return h('span', { class: 'slot-helper' }, 'Custom Helper: ')
          },
          validation: (slotProps: FieldMessageSlot) => {
            capturedValidationProps.push(slotProps)
            return h('span', { class: 'slot-validation' }, 'Custom Error: ')
          }
        })
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    expect(capturedHelperProps[0]).toEqual({
      message: 'Helper text',
      helperMessage: 'Helper text',
      validationMessage: 'Validation text'
    })
    expect(capturedValidationProps[0]).toEqual({
      message: 'Validation text',
      helperMessage: 'Helper text',
      validationMessage: 'Validation text'
    })
    expect(container.querySelector('.slot-helper')?.textContent).toBe('Custom Helper: ')
    expect(container.querySelector('.d1-fieldMessage__info')?.textContent).toBe('Custom Helper: Helper text')
    expect(container.querySelector('.slot-validation')?.textContent).toBe('Custom Error: ')
    expect(container.querySelector('.d1-fieldMessage__error')?.textContent).toBe('Custom Error: Validation text')
  })
})
