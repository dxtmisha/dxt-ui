// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { AccordionHead } from '../AccordionHead'
import type { AccordionProps } from '../props'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('AccordionHead', () => {
  describe('ARIA identifiers and initialization', () => {
    it('should generate distinct labelId and descriptionId by default', () => {
      const eventGetter = () => new EventClickInclude()
      const head = new AccordionHead({}, eventGetter)

      expect(head.labelId).toBeTruthy()
      expect(head.descriptionId).toBeTruthy()
      expect(head.labelId).not.toBe(head.descriptionId)
      expect(head.getLabelId()).toBe(head.labelId)
      expect(head.getDescriptionId()).toBe(head.descriptionId)
    })

    it('should prefer explicit props.labelId and props.descriptionId over generated IDs', () => {
      const eventGetter = () => new EventClickInclude()
      const props = reactive<AccordionProps>({
        labelId: 'custom-label-id',
        descriptionId: 'custom-description-id'
      })
      const head = new AccordionHead(props, eventGetter)

      expect(head.getLabelId()).toBe('custom-label-id')
      expect(head.getDescriptionId()).toBe('custom-description-id')
      expect(head.binds.labelId).toBe('custom-label-id')
      expect(head.binds.descriptionId).toBe('custom-description-id')

      props.labelId = undefined
      props.descriptionId = undefined

      expect(head.getLabelId()).toBe(head.labelId)
      expect(head.getDescriptionId()).toBe(head.descriptionId)
    })
  })

  describe('Bindings and non-destructive merging', () => {
    it('should lazily resolve event getter only when binds is accessed', () => {
      const event = new EventClickInclude()
      const eventGetter = vi.fn(() => event)
      const head = new AccordionHead({ label: 'Section' }, eventGetter)

      expect(eventGetter).not.toHaveBeenCalled()

      const binds = head.binds
      expect(eventGetter).toHaveBeenCalledTimes(1)
      expect(binds.onClick).toBe(event.onClick)
      expect(binds.onKeydown).toBe(event.onKeydown)
      expect(binds.dynamic).toBe(true)
      expect(binds.ref).toBe(head.element)
    })

    it('should preserve numeric 0 and empty string boundary values for label and description', () => {
      const event = new EventClickInclude()
      const head = new AccordionHead(
        {
          label: 0,
          description: 0,
          icon: 'folder',
          iconArrowDown: 'chevron_down'
        },
        () => event
      )

      const binds = head.binds
      expect(binds.label).toBe(0)
      expect(binds.description).toBe(0)
      expect(binds.icon).toBe('folder')
      expect(binds.iconTrailing).toBe('chevron_down')
    })

    it('should preserve cellAttrs fallbacks when top-level props are undefined', () => {
      const event = new EventClickInclude()
      const head = new AccordionHead(
        {
          cellAttrs: {
            label: 'Fallback Label',
            description: 'Fallback Description',
            icon: 'star',
            iconTrailing: 'arrow_drop_down',
            class: 'custom-cell'
          }
        },
        () => event
      )

      const binds = head.binds
      expect(binds.label).toBe('Fallback Label')
      expect(binds.description).toBe('Fallback Description')
      expect(binds.icon).toBe('star')
      expect(binds.iconTrailing).toBe('arrow_drop_down')
      expect(binds.class).toBe('custom-cell')
    })

    it('should compose cellAttrs event handlers with AccordionHead event handlers', () => {
      const cellClickSpy = vi.fn()
      const cellKeydownSpy = vi.fn()
      const emitSpy = vi.fn()
      const event = new EventClickInclude(undefined, undefined, emitSpy)

      const head = new AccordionHead(
        {
          label: 'Interactive',
          cellAttrs: {
            onClick: cellClickSpy,
            onKeydown: cellKeydownSpy
          }
        },
        () => event
      )

      const binds = head.binds
      expect(Array.isArray(binds.onClick)).toBe(true)
      expect(Array.isArray(binds.onKeydown)).toBe(true)

      const clickEvent = new MouseEvent('click')
      ;(binds.onClick as Array<(e: MouseEvent) => void>).forEach(handler => handler(clickEvent))

      expect(cellClickSpy).toHaveBeenCalledWith(clickEvent)
      expect(emitSpy).toHaveBeenCalledWith('click', clickEvent, expect.any(Object))

      const keyEvent = new KeyboardEvent('keydown', { key: 'Enter' })
      ;(binds.onKeydown as Array<(e: KeyboardEvent) => void>).forEach(handler => handler(keyEvent))

      expect(cellKeydownSpy).toHaveBeenCalledWith(keyEvent)
      expect(emitSpy).toHaveBeenCalledWith('click', keyEvent, expect.any(Object))
    })
  })
})
