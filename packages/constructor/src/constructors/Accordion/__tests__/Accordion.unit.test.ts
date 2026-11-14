// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Accordion, type AccordionConstructors } from '../Accordion'
import { AccordionHead } from '../AccordionHead'
import type { AccordionProps } from '../props'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

class InspectableAccordion extends Accordion {
  get instantiatedItems(): Partial<Record<keyof AccordionConstructors, unknown>> {
    return this.instances
  }

  getMotionTransformExtra(): Record<string, unknown> {
    const entry = this.constructorItems.motionTransform
    const parameters = entry.parameters?.()
    const extraFactory = parameters?.[4] as (() => Record<string, unknown>) | undefined

    return extraFactory ? extraFactory() : {}
  }
}

function createMountedAccordion(
  properties: AccordionProps = {},
  emitSpy = vi.fn(),
  slots?: Record<string, () => unknown>,
  constructors?: Partial<AccordionConstructors>
): { accordion: InspectableAccordion, props: AccordionProps, emitSpy: ReturnType<typeof vi.fn> } {
  const naming = new DesignName('d1.accordion')
  const props = reactive<AccordionProps>({ ...properties })
  let accordion!: InspectableAccordion

  const Component = defineComponent({
    setup() {
      const element = ref<HTMLDivElement>()
      accordion = new InspectableAccordion(
        props,
        element,
        naming,
        undefined,
        slots,
        emitSpy,
        constructors
      )

      return () => null
    }
  })

  const container = document.createElement('div')
  document.body.appendChild(container)
  const app = createApp(Component)
  app.mount(container)

  cleanups.push(() => {
    app.unmount()
    container.remove()
  })

  return { accordion, props, emitSpy }
}

describe('Accordion (Unit)', () => {
  describe('Initialization, model sync, and lazy dependencies', () => {
    it('should initialize model eagerly and keep event, head, and motionTransform lazy', () => {
      const { accordion } = createMountedAccordion({ open: true })

      expect(accordion.open.value).toBe(true)
      expect(accordion.instantiatedItems.model).toBeDefined()
      expect(accordion.instantiatedItems.event).toBeUndefined()
      expect(accordion.instantiatedItems.head).toBeUndefined()
      expect(accordion.instantiatedItems.motionTransform).toBeUndefined()
    })

    it('should initialize open from modelOpen when open is undefined or false', async () => {
      const { accordion, props } = createMountedAccordion({ open: false, modelOpen: true })

      expect(accordion.open.value).toBe(true)

      props.modelOpen = false
      await nextTick()

      expect(accordion.open.value).toBe(false)
    })

    it('should disable clickOpen in motionTransform when cellAttrs.disabled is true', () => {
      const { accordion } = createMountedAccordion({
        clickOpen: true,
        cellAttrs: { disabled: true }
      })

      expect(accordion.i('motionTransform').binds.value.clickOpen).toBe(false)
    })

    it('should synchronize open state when props.open changes and via update()', async () => {
      const { accordion, props, emitSpy } = createMountedAccordion({ open: false })

      expect(accordion.open.value).toBe(false)

      props.open = true
      await nextTick()

      expect(accordion.open.value).toBe(true)
      expect(emitSpy).toHaveBeenCalledWith('update:open', true)
      expect(emitSpy).toHaveBeenCalledWith('update:modelOpen', true)

      props.open = false
      await nextTick()

      expect(accordion.open.value).toBe(false)
      expect(emitSpy).toHaveBeenCalledWith('update:open', false)
      expect(emitSpy).toHaveBeenCalledWith('update:modelOpen', false)
    })

    it('should return model binds via binds and head binds via bindsCell', () => {
      const { accordion } = createMountedAccordion({
        open: true,
        label: 'Header Title'
      })

      expect(accordion.binds.modelOpen).toBe(true)
      expect(typeof accordion.binds['onUpdate:open']).toBe('function')
      expect(typeof accordion.binds['onUpdate:modelOpen']).toBe('function')

      const cellBinds = accordion.bindsCell
      expect(cellBinds.label).toBe('Header Title')
      expect(cellBinds.dynamic).toBe(true)
    })
  })

  describe('MotionTransform extra parameters and accessibility bindings', () => {
    it('should omit aria-describedby when description is absent and include it when present', async () => {
      const { accordion, props } = createMountedAccordion({
        label: 'Only Label',
        divider: true
      })

      const extraWithoutDesc = accordion.getMotionTransformExtra()
      expect(extraWithoutDesc.adaptive).toBe('planeAlways')
      expect(extraWithoutDesc.inDom).toBe(true)
      expect(extraWithoutDesc.section).toBe(true)
      expect(extraWithoutDesc['data-divider']).toBe('divider')
      expect(extraWithoutDesc['aria-labelledby']).toBe(accordion.i('head').getLabelId())
      expect(extraWithoutDesc['aria-describedby']).toBeUndefined()

      props.description = 'Now has description'
      await nextTick()

      const extraWithDesc = accordion.getMotionTransformExtra()
      expect(extraWithDesc['aria-describedby']).toBe(accordion.i('head').getDescriptionId())
    })

    it('should include aria-describedby when description slot or cellAttrs.description is provided', () => {
      const { accordion: withSlot } = createMountedAccordion(
        { label: 'Slot Desc' },
        vi.fn(),
        { description: () => 'Slot content' }
      )
      expect(withSlot.getMotionTransformExtra()['aria-describedby']).toBe(withSlot.i('head').getDescriptionId())

      const { accordion: withCellAttrs } = createMountedAccordion({
        label: 'CellAttrs Desc',
        cellAttrs: { description: 'Cell description' }
      })
      expect(withCellAttrs.getMotionTransformExtra()['aria-describedby']).toBe(withCellAttrs.i('head').getDescriptionId())
    })

    it('should omit data-divider when divider is false', () => {
      const { accordion } = createMountedAccordion({ divider: false })
      expect(accordion.getMotionTransformExtra()['data-divider']).toBeUndefined()
    })
  })

  describe('onEmitsTransform event forwarding and open synchronization', () => {
    it('should update open and forward transform, transformLite, update:open, and update:modelOpen events', () => {
      const { accordion, emitSpy } = createMountedAccordion({ open: false })
      const nativeEvent = new MouseEvent('click')

      accordion.onEmitsTransform('transform', nativeEvent, { type: 'head', open: true })
      expect(accordion.open.value).toBe(true)
      expect(emitSpy).toHaveBeenCalledWith('transform', nativeEvent, { type: 'head', open: true })

      accordion.onEmitsTransform('transformLite', { type: 'body', open: false })
      expect(accordion.open.value).toBe(false)
      expect(emitSpy).toHaveBeenCalledWith('transformLite', { type: 'body', open: false })

      accordion.onEmitsTransform('update:open', true)
      expect(emitSpy).toHaveBeenCalledWith('update:open', true)

      accordion.onEmitsTransform('update:modelOpen', false)
      expect(emitSpy).toHaveBeenCalledWith('update:modelOpen', false)
    })

    it('should support constructor injection overrides', () => {
      class CustomHead extends AccordionHead {}

      const { accordion } = createMountedAccordion(
        {},
        vi.fn(),
        undefined,
        { head: CustomHead }
      )

      expect(accordion.i('head')).toBeInstanceOf(CustomHead)
    })
  })
})
