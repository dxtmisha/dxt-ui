// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { FieldLabelDesign } from '../FieldLabelDesign'
import type { FieldLabelProps } from '../props'
import type {
  FieldLabelClasses,
  FieldLabelComponents,
  FieldLabelExpose
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

describe('FieldLabelDesign (unit & DOM)', () => {
  it('should render nothing when label, progress, and counter are all inactive', async () => {
    const props = reactive<FieldLabelProps>({})
    const Component = defineComponent({
      setup() {
        const design = new FieldLabelDesign<
          FieldLabelComponents,
          FieldLabelExpose,
          FieldLabelClasses,
          FieldLabelProps
        >('d1.fieldLabel', props)

        return design.render()
      }
    })

    const container = document.createElement('div')
    const app = createApp(Component)
    app.mount(container)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    expect(container.querySelector('label')).toBeNull()
  })

  it('should render label with for attribute, required asterisk with aria-hidden, and merge external attrs', async () => {
    const props = reactive<FieldLabelProps>({
      for: 'phone-input',
      label: 'Phone number',
      labelId: 'phone-label-id',
      required: true,
      isSkeleton: true
    })
    const onExternalClick = vi.fn()
    let exposedElement: HTMLLabelElement | undefined

    const Inner = defineComponent({
      setup() {
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-fieldLabel': true
          }
        }))

        const design = new FieldLabelDesign<
          FieldLabelComponents,
          FieldLabelExpose,
          FieldLabelClasses,
          FieldLabelProps
        >('d1.fieldLabel', props, {
          classes: classesToken,
          styles: computed(() => ({ gap: '8px' }))
        })

        const expose = design.expose() as { elementHtml?: { value?: HTMLLabelElement } }
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
          class: 'external-label-class',
          style: 'font-weight: 600',
          onClick: onExternalClick
        })
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    const labelElement = container.querySelector('label')
    expect(labelElement).not.toBeNull()
    expect(exposedElement).toBe(labelElement)
    expect(labelElement?.getAttribute('for')).toBe('phone-input')
    expect(labelElement?.classList.contains('d1-fieldLabel')).toBe(true)
    expect(labelElement?.classList.contains('d1-skeleton__textVariant')).toBe(true)
    expect(labelElement?.classList.contains('external-label-class')).toBe(true)
    expect(labelElement?.getAttribute('style')).toContain('gap: 8px')
    expect(labelElement?.getAttribute('style')).toContain('font-weight: 600')

    const textSpan = labelElement?.querySelector('.d1-fieldLabel__label')
    expect(textSpan?.getAttribute('id')).toBe('phone-label-id')
    expect(textSpan?.classList.contains('d1-skeleton__textVariant')).toBe(true)
    expect(textSpan?.textContent).toBe('Phone number*')

    const requiredSpan = labelElement?.querySelector('.d1-fieldLabel__required')
    expect(requiredSpan?.textContent).toBe('*')
    expect(requiredSpan?.getAttribute('aria-hidden')).toBe('true')

    labelElement?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(onExternalClick).toHaveBeenCalledTimes(1)
  })

  it('should render custom label slot and toggle required asterisk reactively', async () => {
    const props = reactive<FieldLabelProps>({
      required: false
    })

    const Component = defineComponent({
      setup() {
        const design = new FieldLabelDesign<
          FieldLabelComponents,
          FieldLabelExpose,
          FieldLabelClasses,
          FieldLabelProps
        >('d1.fieldLabel', props, undefined)

        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Component, null, {
          label: () => h('strong', 'Custom Slot')
        })
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    mountedCleanups.push(() => app.unmount())
    await nextTick()

    expect(container.querySelector('.d1-fieldLabel__label strong')?.textContent).toBe('Custom Slot')
    expect(container.querySelector('.d1-fieldLabel__required')).toBeNull()

    props.required = true
    await nextTick()

    expect(container.querySelector('.d1-fieldLabel__required')?.textContent).toBe('*')
  })
})
