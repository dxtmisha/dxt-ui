// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles,
  GeoRef,
  GeoUnit,
  ServerStorage
} from '@dxtmisha/functional'

import { FormattedUnit } from '../FormattedUnit'
import { FormattedUnitDesign } from '../FormattedUnitDesign'
import type { FormattedUnitPropsBasic } from '../props'
import type { FormattedUnitClasses, FormattedUnitComponents, FormattedUnitExpose } from '../types'

const cleanups: Array<() => void> = []

beforeEach(() => {
  const context: Record<string, unknown> = {}
  ServerStorage.reset()
  ServerStorage.init(() => context)
  GeoRef.set('en-US')
})

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
  ServerStorage.reset()
})

describe('FormattedUnitDesign (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should render root span with formatted unit text, merge attrs/classes/styles, and expose elementHtml', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const props = reactive<FormattedUnitPropsBasic>({
        value: 100,
        unit: 'kilogram',
        language: 'ru-RU'
      })
      const onClick = vi.fn()
      let exposed: FormattedUnitExpose & { elementHtml?: { value?: HTMLSpanElement } } = {}

      const Inner = defineComponent({
        setup() {
          const classes = computed<ConstrClasses>(() => ({
            main: { 'd1-formattedUnit': true }
          }))
          const styles = computed<ConstrStyles>(() => ({
            '--d1-formattedUnit-color': 'blue'
          }))
          const design = new FormattedUnitDesign<
            FormattedUnitComponents,
            FormattedUnitExpose,
            FormattedUnitClasses,
            FormattedUnitPropsBasic
          >(
            'd1.formattedUnit',
            props,
            { classes, styles }
          )

          exposed = design.expose() as FormattedUnitExpose & { elementHtml?: { value?: HTMLSpanElement } }
          return design.render()
        }
      })

      const Wrapper = defineComponent({
        setup() {
          return () => h(Inner, {
            'class': 'extra-unit',
            'style': { letterSpacing: '0.5px' },
            'data-testid': 'formatted-unit-root',
            'aria-label': 'Formatted weight',
            onClick
          })
        }
      })

      const host = document.createElement('div')
      const app = createApp(Wrapper)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.querySelector('[data-testid="formatted-unit-root"]') as HTMLSpanElement
      expect(root).toBeInstanceOf(HTMLSpanElement)
      expect(root.tagName).toBe('SPAN')
      expect(root.textContent).toBe(GeoUnit.getInstance('ru-RU').format(100, 'kilogram'))
      expect(root.classList.contains('d1-formattedUnit')).toBe(true)
      expect(root.classList.contains('extra-unit')).toBe(true)
      expect(root.style.getPropertyValue('--d1-formattedUnit-color')).toBe('blue')
      expect(root.style.letterSpacing).toBe('0.5px')
      expect(root.getAttribute('aria-label')).toBe('Formatted weight')
      expect(exposed.elementHtml?.value).toBe(root)

      root.click()
      expect(onClick).toHaveBeenCalledTimes(1)
      expect(warnSpy).not.toHaveBeenCalled()
    })

    it('should reactively update rendered text, classes, and styles', async () => {
      const props = reactive<FormattedUnitPropsBasic>({
        value: 0,
        unit: 'celsius',
        language: 'en-US'
      })
      const isHighlight = ref(false)
      const fontSize = ref('14px')

      const Inner = defineComponent({
        setup() {
          const classes = computed<ConstrClasses>(() => ({
            main: {
              'd1-formattedUnit': true,
              'd1-formattedUnit--highlight': isHighlight.value
            }
          }))
          const styles = computed<ConstrStyles>(() => ({
            fontSize: fontSize.value
          }))
          const design = new FormattedUnitDesign<
            FormattedUnitComponents,
            FormattedUnitExpose,
            FormattedUnitClasses,
            FormattedUnitPropsBasic
          >(
            'd1.formattedUnit',
            props,
            { classes, styles }
          )

          return design.render()
        }
      })

      const host = document.createElement('div')
      const app = createApp(Inner)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.firstElementChild as HTMLSpanElement
      expect(root.textContent).toBe(GeoUnit.getInstance('en-US').format(0, 'celsius'))
      expect(root.classList.contains('d1-formattedUnit--highlight')).toBe(false)
      expect(root.style.fontSize).toBe('14px')

      props.value = 10
      props.unit = 'kilometer'
      props.language = 'ru-RU'
      isHighlight.value = true
      fontSize.value = '18px'
      await nextTick()

      expect(root.textContent).toBe(GeoUnit.getInstance('ru-RU').format(10, 'kilometer'))
      expect(root.classList.contains('d1-formattedUnit--highlight')).toBe(true)
      expect(root.style.fontSize).toBe('18px')
    })

    it('should render cleanly when options are omitted', () => {
      const Inner = defineComponent({
        setup() {
          const design = new FormattedUnitDesign<
            FormattedUnitComponents,
            FormattedUnitExpose,
            FormattedUnitClasses,
            FormattedUnitPropsBasic
          >(
            'd1.formattedUnit',
            reactive<FormattedUnitPropsBasic>({ value: 500, unit: 'meter', language: 'ru-RU' })
          )

          return design.render()
        }
      })

      const host = document.createElement('div')
      const app = createApp(Inner)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.firstElementChild as HTMLSpanElement
      expect(root.tagName).toBe('SPAN')
      expect(root.textContent).toBe(GeoUnit.getInstance('ru-RU').format(500, 'meter'))
    })
  })

  describe('Dependency Injection', () => {
    it('should support custom ItemConstructor dependency injection', () => {
      class CustomFormattedUnit extends FormattedUnit {
        override get item(): string {
          return `CUSTOM:${this.props.value}:${this.props.unit}`
        }
      }

      const Inner = defineComponent({
        setup() {
          const design = new FormattedUnitDesign<
            FormattedUnitComponents,
            FormattedUnitExpose,
            FormattedUnitClasses,
            FormattedUnitPropsBasic
          >(
            'd1.formattedUnit',
            reactive<FormattedUnitPropsBasic>({ value: 777, unit: 'liter' }),
            {},
            CustomFormattedUnit
          )

          return design.render()
        }
      })

      const host = document.createElement('div')
      const app = createApp(Inner)
      app.mount(host)
      cleanups.push(() => app.unmount())

      const root = host.firstElementChild as HTMLSpanElement
      expect(root.tagName).toBe('SPAN')
      expect(root.textContent).toBe('CUSTOM:777:liter')
    })
  })
})
