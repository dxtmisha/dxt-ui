// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { nextTick, reactive } from 'vue'

import { BarsAction } from '../BarsAction'
import type { BarsProps } from '../props'

/**
 * Helper to create a BarsAction instance with reactive props.
 *
 * Вспомогательная функция для создания экземпляра BarsAction с реактивными свойствами.
 * @param initialProps initial properties / начальные свойства
 * @returns instance and reactive props / экземпляр и реактивные свойства
 */
function createBarsAction(initialProps: Partial<BarsProps>) {
  const reactiveProperties = reactive<BarsProps>({
    action: undefined,
    modelAction: undefined,
    actionLabel: undefined,
    actionDescription: undefined,
    actionBars: undefined,
    ...initialProps
  })

  const barsAction = new BarsAction(reactiveProperties)
  barsAction.onMounted()

  return { barsAction, reactiveProperties }
}

describe('BarsAction', () => {
  afterEach(() => {
    // Cleanup handled by testWarnings
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize action value correctly based on initial action or modelAction prop', () => {
      const { barsAction } = createBarsAction({ action: true })
      expect(barsAction.action.value).toBe(true)

      const { barsAction: barsModelAction } = createBarsAction({ modelAction: true })
      expect(barsModelAction.action.value).toBe(true)
    })

    it('should initialize action value as false if action and modelAction props are false or undefined', () => {
      const { barsAction } = createBarsAction({ action: false })
      expect(barsAction.action.value).toBe(false)

      const { barsAction: barsUndefined } = createBarsAction({})
      expect(barsUndefined.action.value).toBe(false)
    })

    it('should update action value when reactive action or modelAction prop changes', async () => {
      const { barsAction, reactiveProperties } = createBarsAction({ action: false })

      expect(barsAction.action.value).toBe(false)

      reactiveProperties.action = true
      await nextTick()
      expect(barsAction.action.value).toBe(true)

      reactiveProperties.action = false
      await nextTick()
      expect(barsAction.action.value).toBe(false)

      reactiveProperties.modelAction = true
      await nextTick()
      expect(barsAction.action.value).toBe(true)

      reactiveProperties.modelAction = false
      await nextTick()
      expect(barsAction.action.value).toBe(false)
    })

    it('should return correct status check result from isPossible()', () => {
      const { barsAction: barsActionEmpty } = createBarsAction({})
      expect(barsActionEmpty.isPossible()).toBe(false)

      const { barsAction: barsActionWithLabel } = createBarsAction({ actionLabel: 'Test Label' })
      expect(barsActionWithLabel.isPossible()).toBe(true)

      const { barsAction: barsActionWithDescription } = createBarsAction({ actionDescription: 'Test Description' })
      expect(barsActionWithDescription.isPossible()).toBe(true)

      const { barsAction: barsActionWithBars } = createBarsAction({ actionBars: [] })
      expect(barsActionWithBars.isPossible()).toBe(true)
    })

    it('should return correct status check result from static is()', () => {
      expect(BarsAction.is()).toBe(false)
      expect(BarsAction.is({})).toBe(false)
      expect(BarsAction.is({ action: true })).toBe(true)
      expect(BarsAction.is({ modelAction: true })).toBe(true)
      expect(BarsAction.is({ actionLabel: 'Test Label' })).toBe(true)
      expect(BarsAction.is({ actionDescription: 'Test Description' })).toBe(true)
      expect(BarsAction.is({ actionBars: [] })).toBe(true)
    })
  })

  describe('State mutations (set, update, open, close)', () => {
    it('should set action value manually using set()', () => {
      const { barsAction } = createBarsAction({})
      expect(barsAction.action.value).toBe(false)

      barsAction.set(true)
      expect(barsAction.action.value).toBe(true)

      barsAction.set(true)
      expect(barsAction.action.value).toBe(true)

      barsAction.set(false)
      expect(barsAction.action.value).toBe(false)
    })

    it('should open and close action mode using open() and close()', () => {
      const { barsAction } = createBarsAction({})
      expect(barsAction.action.value).toBe(false)

      barsAction.open()
      expect(barsAction.action.value).toBe(true)

      barsAction.close()
      expect(barsAction.action.value).toBe(false)
    })
  })
})
