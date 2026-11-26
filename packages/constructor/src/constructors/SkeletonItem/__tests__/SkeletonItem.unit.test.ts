import { describe, it, expect, afterEach, vi } from 'vitest'
import { defineComponent, effectScope, h, markRaw, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { SkeletonItem } from '../SkeletonItem'
import type { SkeletonItemProps } from '../props'

describe('SkeletonItem (unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should compute all 6 skeleton token classes dynamically from props and design name', () => {
      const scope = effectScope()
      const props = reactive<SkeletonItemProps>({
        text: true,
        borderVariant: true
      })
      let instance!: SkeletonItem

      scope.run(() => {
        instance = new SkeletonItem(props, ref<HTMLDivElement | undefined>(), new DesignName('d1.skeletonItem'))
      })

      expect(instance.classes).toEqual({
        'd1-skeleton__text': true,
        'd1-skeleton__textVariant': false,
        'd1-skeleton__background': false,
        'd1-skeleton__backgroundVariant': false,
        'd1-skeleton__border': false,
        'd1-skeleton__borderVariant': true
      })

      props.text = false
      props.textVariant = true
      props.background = true
      props.backgroundVariant = true
      props.border = true
      props.borderVariant = false

      expect(instance.classes).toEqual({
        'd1-skeleton__text': false,
        'd1-skeleton__textVariant': true,
        'd1-skeleton__background': true,
        'd1-skeleton__backgroundVariant': true,
        'd1-skeleton__border': true,
        'd1-skeleton__borderVariant': false
      })

      scope.stop()
    })

    it('should resolve tag default, custom HTML tag, object component, and functional component', () => {
      const scope = effectScope()
      const ObjectTag = markRaw(defineComponent({
        name: 'ObjectTag',
        render: () => h('section')
      }))
      const FunctionalTag = () => h('article')
      const props = reactive<SkeletonItemProps>({})
      let instance!: SkeletonItem

      scope.run(() => {
        instance = new SkeletonItem(props, ref<HTMLDivElement | undefined>(), new DesignName('d1.skeletonItem'))
      })

      expect(instance.tag).toBe('div')
      expect(instance.isObject()).toBe(false)

      props.tag = 'span'
      expect(instance.tag).toBe('span')
      expect(instance.isObject()).toBe(false)

      props.tag = ObjectTag
      expect(instance.tag).toBe(ObjectTag)
      expect(instance.isObject()).toBe(true)

      props.tag = FunctionalTag
      expect(instance.tag).toBe(FunctionalTag)
      expect(instance.isObject()).toBe(true)

      scope.stop()
    })

    it('should forward itemAttrs via binds without mutating input object', () => {
      const scope = effectScope()
      const itemAttrs = { 'data-id': 'item-1', 'tabindex': 0 }
      const snapshot = { ...itemAttrs }
      let instance!: SkeletonItem

      scope.run(() => {
        instance = new SkeletonItem(
          reactive<SkeletonItemProps>({ itemAttrs }),
          ref<HTMLDivElement | undefined>(),
          new DesignName('d1.skeletonItem')
        )
      })

      expect(instance.binds).toEqual(snapshot)
      expect(instance.binds).not.toBe(itemAttrs)
      expect(itemAttrs).toEqual(snapshot)

      scope.stop()
    })
  })

  describe('Boundary values, zero/falsy traps, and deterministic SSR memoization', () => {
    it('should preserve numeric 0 label and fallback empty string or undefined to generated label', () => {
      const scope = effectScope()
      const props = reactive<SkeletonItemProps>({
        label: 0,
        length: 3
      })
      let instance!: SkeletonItem

      scope.run(() => {
        instance = new SkeletonItem(props, ref<HTMLDivElement | undefined>(), new DesignName('d1.skeletonItem'))
      })

      expect(instance.label).toBe(0)

      props.label = ''
      const deterministic = instance.label
      expect(typeof deterministic).toBe('string')
      expect(String(deterministic).split(' ')).toHaveLength(3)
      expect(String(deterministic)).toMatch(/^#+( #+)*$/)
      expect(instance.label).toBe(deterministic)

      props.label = undefined
      expect(instance.label).toBe(deterministic)

      scope.stop()
    })

    it('should produce deterministic placeholder before mount and memoized random text after mount', () => {
      const scope = effectScope()
      const props = reactive<SkeletonItemProps>({
        length: [2, 4] as const
      })
      let firstInstance!: SkeletonItem
      let secondInstance!: SkeletonItem

      scope.run(() => {
        firstInstance = new SkeletonItem(props, ref<HTMLDivElement | undefined>(), new DesignName('d1.skeletonItem'))
        secondInstance = new SkeletonItem(props, ref<HTMLDivElement | undefined>(), new DesignName('d1.skeletonItem'))
      })

      // Before mount (SSR / hydration): identical deterministic output
      expect(firstInstance.label).toBe(secondInstance.label)
      expect(String(firstInstance.label).split(' ')).toHaveLength(3)

      // After mount: switches to memoized random text, stable across repeated reads
      firstInstance.isMounted.value = true
      const mountedLabel = firstInstance.label
      expect(typeof mountedLabel).toBe('string')
      expect(firstInstance.label).toBe(mountedLabel)
      expect(String(mountedLabel).split(' ').length).toBeGreaterThanOrEqual(2)
      expect(String(mountedLabel).split(' ').length).toBeLessThanOrEqual(4)

      scope.stop()
    })

    it('should handle string length, numeric string length, zero, negative, and NaN length safely', () => {
      const scope = effectScope()
      const props = reactive<SkeletonItemProps>({ length: 'Custom text' })
      let instance!: SkeletonItem

      scope.run(() => {
        instance = new SkeletonItem(props, ref<HTMLDivElement | undefined>(), new DesignName('d1.skeletonItem'))
      })

      expect(instance.label).toBe('Custom text')

      props.length = '2'
      expect(String(instance.label).split(' ')).toHaveLength(2)

      props.length = 0
      expect(instance.label).toBe('')

      props.length = -5
      expect(instance.label).toBe('')

      props.length = Number.NaN
      expect(instance.label).toBe('')

      props.length = undefined
      expect(instance.label).toBe('')

      scope.stop()
    })

    it('should return false from isObject when tag is null', () => {
      const scope = effectScope()
      let instance!: SkeletonItem

      scope.run(() => {
        instance = new SkeletonItem(
          reactive<SkeletonItemProps>({ tag: null as unknown as string }),
          ref<HTMLDivElement | undefined>(),
          new DesignName('d1.skeletonItem')
        )
      })

      expect(instance.isObject()).toBe(false)
      expect(instance.tag).toBe('div')

      scope.stop()
    })
  })

  describe('ARIA attributes for decorative placeholder content', () => {
    it('should apply aria-hidden="true" only for decorative auto-generated placeholders', () => {
      const scope = effectScope()
      const props = reactive<SkeletonItemProps>({
        text: true,
        length: 3
      })
      let instance!: SkeletonItem

      scope.run(() => {
        instance = new SkeletonItem(props, ref<HTMLDivElement | undefined>(), new DesignName('d1.skeletonItem'))
      })

      expect(instance.aria).toEqual({ 'aria-hidden': 'true' })

      // Explicit label disables aria-hidden
      props.label = 'Visible text'
      expect(instance.aria).toEqual({})

      // Explicit numeric 0 label disables aria-hidden
      props.label = 0
      expect(instance.aria).toEqual({})

      // Explicit aria-label in itemAttrs disables aria-hidden
      props.label = undefined
      props.itemAttrs = { 'aria-label': 'Loading title' }
      expect(instance.aria).toEqual({})

      // Explicit aria-labelledby in itemAttrs disables aria-hidden
      props.itemAttrs = { 'aria-labelledby': 'heading-id' }
      expect(instance.aria).toEqual({})

      // Custom string length disables aria-hidden
      props.itemAttrs = undefined
      props.length = 'Static placeholder'
      expect(instance.aria).toEqual({})

      scope.stop()
    })

    it('should omit aria-hidden when default slot or component tag is used', () => {
      const scope = effectScope()
      const ComponentTag = defineComponent({ render: () => h('div') })
      let slotInstance!: SkeletonItem
      let componentInstance!: SkeletonItem

      scope.run(() => {
        slotInstance = new SkeletonItem(
          reactive<SkeletonItemProps>({ text: true, length: 3 }),
          ref<HTMLDivElement | undefined>(),
          new DesignName('d1.skeletonItem'),
          undefined,
          { default: () => [h('span', 'Slot')] }
        )
        componentInstance = new SkeletonItem(
          reactive<SkeletonItemProps>({ tag: ComponentTag, length: 3 }),
          ref<HTMLDivElement | undefined>(),
          new DesignName('d1.skeletonItem')
        )
      })

      expect(slotInstance.aria).toEqual({})
      expect(componentInstance.aria).toEqual({})

      scope.stop()
    })
  })
})
