// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { LabelInclude } from '../../../classes/LabelInclude'
import { IconTrailingInclude } from '../../Icon'
import { ProgressInclude } from '../../Progress'
import { RippleInclude } from '../../Ripple'
import { SkeletonInclude } from '../../Skeleton'
import { Button, type ButtonConstructors } from '../Button'
import type { ButtonPropsBasic } from '../props'

/**
 * Inspectable subclass of Button exposing internal lazy-instantiated instances.
 *
 * Проверяемый подкласс Button, предоставляющий доступ к внутренним лениво созданным экземплярам.
 */
class InspectableButton extends Button {
  /**
   * Returns internal instances map for lazy-evaluation verification.
   *
   * Возвращает внутреннюю карту экземпляров для проверки ленивой инициализации.
   * @returns instantiated constructors map / карта созданных экземпляров конструкторов
   */
  get instantiatedItems(): Partial<Record<keyof ButtonConstructors, unknown>> {
    return this.instances
  }
}

describe('Button', () => {
  const naming = new DesignName('d1.button')

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize with default button tag and standard bindings', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({})

      scope.run(() => {
        const button = new Button(props, element, naming)

        expect(button.tag).toBe('button')
        expect(button.binds.type).toBe('button')
        expect(button.binds.disabled).toBeUndefined()
        expect(button.binds['data-value']).toBeUndefined()
        expect(typeof button.eventList.onClick).toBe('function')
        expect(button.eventList.onKeydown).toBeUndefined()
      })

      scope.stop()
    })

    it('should resolve tag to "a" when href is supplied and tag is omitted', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({ href: 'https://example.com' })

      scope.run(() => {
        const button = new Button(props, element, naming)

        expect(button.tag).toBe('a')
        expect(button.binds.href).toBe('https://example.com')
        expect(button.binds.type).toBeUndefined()
      })

      scope.stop()
    })

    it('should prioritize explicit tag prop over href', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({
        href: 'https://example.com',
        tag: 'span'
      })

      scope.run(() => {
        const button = new Button(props, element, naming)

        expect(button.tag).toBe('span')
        expect(button.binds.type).toBeUndefined()
      })

      scope.stop()
    })

    it('should handle custom button type when passed in props', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({ type: 'submit' })

      scope.run(() => {
        const button = new Button(props, element, naming)

        expect(button.binds.type).toBe('submit')
      })

      scope.stop()
    })
  })

  describe('Non-button tag accessibility and keyboard interactions', () => {
    it('should provide ARIA button role, tabindex and onKeydown handler for non-button tags', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({ tag: 'div' })

      scope.run(() => {
        const button = new Button(props, element, naming)

        expect(button.aria.role).toBe('button')
        expect(button.aria.tabindex).toBe('0')
        expect(typeof button.eventList.onKeydown).toBe('function')
      })

      scope.stop()
    })

    it('should set aria-disabled when non-button tag is disabled or loading', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({
        disabled: true,
        tag: 'div'
      })

      scope.run(() => {
        const button = new Button(props, element, naming)

        expect(button.aria['aria-disabled']).toBe('true')
      })

      scope.stop()
    })

    it('should set aria-disabled when loading is true on non-button tag', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({
        loading: true,
        tag: 'span'
      })

      scope.run(() => {
        const button = new Button(props, element, naming)

        expect(button.aria['aria-disabled']).toBe('true')
      })

      scope.stop()
    })

    it('should include aria-label when ariaLabel prop is provided', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({
        ariaLabel: 'Close modal'
      })

      scope.run(() => {
        const button = new Button(props, element, naming)

        expect(button.aria['aria-label']).toBe('Close modal')
      })

      scope.stop()
    })
  })

  describe('Classes and icon resolution', () => {
    it('should assign icon class when icon prop is specified', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({ icon: 'home' })

      scope.run(() => {
        const button = new Button(props, element, naming)

        expect(IconTrailingInclude.is(props)).toBe(true)
        expect(button.classes[naming.getStatusClass('icon')]).toBe(true)
      })

      scope.stop()
    })

    it('should not assign icon class when icon prop is not specified', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({})

      scope.run(() => {
        const button = new Button(props, element, naming)

        expect(IconTrailingInclude.is(props)).toBe(false)
        expect(button.classes[naming.getStatusClass('icon')]).toBe(false)
      })

      scope.stop()
    })
  })

  describe('Lazy loading & on-demand instantiation', () => {
    it('should not instantiate any sub-constructors eagerly on creation', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({})

      scope.run(() => {
        const button = new InspectableButton(props, element, naming)

        expect(Object.keys(button.instantiatedItems)).toHaveLength(0)
      })

      scope.stop()
    })

    it('should instantiate progress only when loading is active during aria calculation', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const propsWithoutLoading: ButtonPropsBasic = reactive({ loading: false })
      const propsWithLoading: ButtonPropsBasic = reactive({ loading: true })

      scope.run(() => {
        const buttonNoLoading = new InspectableButton(propsWithoutLoading, element, naming)
        // Accessing aria when not loading should not instantiate progress
        const ariaNoLoading = buttonNoLoading.aria
        expect(ariaNoLoading['aria-disabled']).toBeUndefined()
        expect(buttonNoLoading.instantiatedItems.progress).toBeUndefined()

        const buttonLoading = new InspectableButton(propsWithLoading, element, naming)
        const ariaLoading = buttonLoading.aria
        expect(ariaLoading['aria-disabled']).toBe('true')
        expect(buttonLoading.instantiatedItems.progress).toBeDefined()
      })

      scope.stop()
    })

    it('should instantiate ripple on-demand when accessed via this.i("ripple")', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({})

      scope.run(() => {
        const button = new InspectableButton(props, element, naming)

        expect(button.instantiatedItems.ripple).toBeUndefined()
        expect(button.instantiatedItems.enabled).toBeUndefined()

        const ripple = button.i('ripple')
        expect(ripple).toBeDefined()
        expect(button.instantiatedItems.ripple).toBeDefined()
        expect(button.instantiatedItems.enabled).toBeUndefined()
      })

      scope.stop()
    })

    it('should correctly evaluate predicate helpers IconTrailingInclude.is, LabelInclude.is, ProgressInclude.is, RippleInclude.is, and SkeletonInclude.is', () => {
      const scope = effectScope()

      scope.run(() => {
        const emptyProps = {} as ButtonPropsBasic
        expect(IconTrailingInclude.is(emptyProps)).toBe(false)
        expect(LabelInclude.is(emptyProps)).toBe(false)
        expect(ProgressInclude.is(emptyProps)).toBe(false)
        expect(RippleInclude.is(emptyProps)).toBe(true)
        expect(RippleInclude.is({ disabled: true })).toBe(false)
        expect(SkeletonInclude.is(emptyProps)).toBe(false)

        const fullProps = {
          icon: 'star',
          isSkeleton: true,
          label: 'Action',
          loading: true
        } as ButtonPropsBasic
        expect(IconTrailingInclude.is(fullProps)).toBe(true)
        expect(LabelInclude.is(fullProps)).toBe(true)
        expect(ProgressInclude.is(fullProps)).toBe(true)
        expect(RippleInclude.is(fullProps)).toBe(false)
        expect(SkeletonInclude.is(fullProps)).toBe(true)
      })

      scope.stop()
    })

    it('should not instantiate icon when icon and iconTrailing are not specified during classes calculation', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({})

      scope.run(() => {
        const button = new InspectableButton(props, element, naming)
        const classes = button.classes

        expect(classes).toBeDefined()
        expect(button.instantiatedItems.icon).toBeUndefined()
      })

      scope.stop()
    })

    it('should instantiate icon when icon prop is specified during classes calculation', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({ icon: 'star' })

      scope.run(() => {
        const button = new InspectableButton(props, element, naming)
        const classes = button.classes

        expect(classes[naming.getStatusClass('icon')]).toBe(true)
        expect(button.instantiatedItems.icon).toBeDefined()
      })

      scope.stop()
    })

    it('should not instantiate skeleton when isSkeleton is false during classes calculation', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({ isSkeleton: false })

      scope.run(() => {
        const button = new InspectableButton(props, element, naming)
        const classes = button.classes

        expect(classes).toBeDefined()
        expect(button.instantiatedItems.skeleton).toBeUndefined()
      })

      scope.stop()
    })

    it('should not instantiate label on creation or classes calculation, and instantiate on-demand when accessed', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({ label: 'Submit' })

      scope.run(() => {
        const button = new InspectableButton(props, element, naming)
        expect(button.instantiatedItems.label).toBeUndefined()

        const classes = button.classes
        expect(classes).toBeDefined()
        expect(button.instantiatedItems.label).toBeUndefined()

        const label = button.i('label')
        expect(label).toBeDefined()
        expect(button.instantiatedItems.label).toBeDefined()
      })

      scope.stop()
    })
  })

  describe('Dependency Injection', () => {
    it('should permit overriding subordinate constructors via constructors parameter', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({})

      let customProgressInstantiated = false

      class CustomProgress {
        readonly is = false
        readonly aria = ref({})
        render() {
          customProgressInstantiated = true
          return []
        }
      }

      scope.run(() => {
        const button = new Button(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          {
            progress: CustomProgress as any
          }
        )

        const rendered = button.i('progress').render()
        expect(customProgressInstantiated).toBe(true)
        expect(rendered).toEqual([])
      })

      scope.stop()
    })
  })

  describe('Click event handling and propagation', () => {
    it('should delegate click events and emit via ConstrEmit', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: ButtonPropsBasic = reactive({ value: 'submit-data' })
      const emitSpy = vi.fn()

      scope.run(() => {
        const button = new Button(
          props,
          element,
          naming,
          undefined,
          undefined,
          emitSpy
        )

        const clickEvent = new MouseEvent('click')
        button.eventList.onClick(clickEvent)

        expect(emitSpy).toHaveBeenCalledTimes(2)
        expect(emitSpy).toHaveBeenNthCalledWith(1, 'click', clickEvent, {
          detail: undefined,
          type: 'click',
          value: 'submit-data'
        })
        expect(emitSpy).toHaveBeenNthCalledWith(2, 'clickLite', {
          detail: undefined,
          type: 'click',
          value: 'submit-data'
        })
      })

      scope.stop()
    })
  })
})
