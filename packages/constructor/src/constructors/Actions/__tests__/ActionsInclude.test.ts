// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ActionsInclude } from '../ActionsInclude'
import type { EventClickValue } from '../../../types/eventClickTypes'
import type { ActionsEmitsInclude, ActionsPropsInclude } from '../basicTypes'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('ActionsInclude (Embedding Helper)', () => {
  const naming = new DesignName('d1.modal')

  describe('Visibility logic (is getter)', () => {
    it('should return false when no action lists are provided in props or binds', () => {
      const props: ActionsPropsInclude = reactive({})
      const include = new ActionsInclude(props, naming)

      expect(include.is).toBe(false)
    })

    it('should return true when actionsList is provided in props', () => {
      const props: ActionsPropsInclude = reactive({
        actionsList: [{ label: 'OK' }]
      })
      const include = new ActionsInclude(props, naming)

      expect(include.is).toBe(true)
    })

    it('should return true when actionsSecondary is provided in props', () => {
      const props: ActionsPropsInclude = reactive({
        actionsSecondary: [{ label: 'Cancel' }]
      })
      const include = new ActionsInclude(props, naming)

      expect(include.is).toBe(true)
    })

    it('should return false when actionsHide is true even if lists are present', () => {
      const props: ActionsPropsInclude = reactive({
        actionsHide: true,
        actionsList: [{ label: 'Confirm' }],
        actionsSecondary: [{ label: 'Dismiss' }]
      })
      const include = new ActionsInclude(props, naming)

      expect(include.is).toBe(false)
    })
  })

  describe('Bindings resolution (toBinds)', () => {
    it('should resolve and forward action lists and attach onClick handler', () => {
      const props: ActionsPropsInclude = reactive({
        actionsList: [{ label: 'Primary Action' }],
        actionsSecondary: [{ label: 'Secondary Action' }]
      })
      const include = new ActionsInclude(props, naming)

      const binds = include.binds.value
      expect(binds.list).toEqual([{ label: 'Primary Action' }])
      expect(binds.listSecondary).toEqual([{ label: 'Secondary Action' }])
      expect(typeof binds.onClick).toBe('function')
    })

    it('should prefer actionsList / actionsSecondary from props over existing binds', () => {
      const props: ActionsPropsInclude = reactive({
        actionsList: [{ label: 'Overridden Primary' }],
        actionsSecondary: [{ label: 'Overridden Secondary' }],
        actionsAttrs: {
          list: [{ label: 'Old Primary' }],
          listSecondary: [{ label: 'Old Secondary' }]
        }
      })
      const include = new ActionsInclude(props, naming)

      const binds = include.binds.value
      expect(binds.list).toEqual([{ label: 'Overridden Primary' }])
      expect(binds.listSecondary).toEqual([{ label: 'Overridden Secondary' }])
    })
  })

  describe('Event forwarding', () => {
    it('should emit "actions" and "actionsLite" on parent emitter when clicked', () => {
      const onEmits = vi.fn()
      const props: ActionsPropsInclude = reactive({
        actionsList: [{ label: 'Clickable' }]
      })
      const include = new ActionsInclude(
        props,
        naming,
        undefined,
        undefined,
        undefined,
        (type: keyof ActionsEmitsInclude, ...args: any[]) => onEmits(type, ...args)
      )

      const mouseEvent = new MouseEvent('click')
      const payload: EventClickValue = {
        type: 'click',
        value: 'item-1',
        detail: { key: 'test-detail' }
      }

      include.onClick(mouseEvent, payload)

      expect(onEmits).toHaveBeenCalledTimes(2)
      expect(onEmits).toHaveBeenNthCalledWith(1, 'actions', mouseEvent, payload)
      expect(onEmits).toHaveBeenNthCalledWith(2, 'actionsLite', payload)
    })
  })
})
