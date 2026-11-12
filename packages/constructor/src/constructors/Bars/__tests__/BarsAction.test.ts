// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { nextTick, ref } from 'vue'

import { BarsAction } from '../BarsAction'
import type { BarsProps } from '../props'

function createBarsAction(initialProps: Partial<BarsProps>) {
  const reactiveProperties = ref({
    action: undefined,
    actionLabel: undefined,
    actionDescription: undefined,
    actionBars: undefined,
    ...initialProps
  })

  const barsAction = new BarsAction(reactiveProperties.value as unknown as BarsProps)
  barsAction.onMounted?.()
  return { barsAction, reactiveProperties }
}

describe('BarsAction', () => {
  it('should initialize action value correctly based on initial action prop', () => {
    const { barsAction } = createBarsAction({ action: true })
    expect(barsAction.action.value).toBe(true)
  })

  it('should initialize action value as false if action prop is false or undefined', () => {
    const { barsAction } = createBarsAction({ action: false })
    expect(barsAction.action.value).toBe(false)
  })

  it('should update action value when reactive action prop changes', async () => {
    const { barsAction, reactiveProperties } = createBarsAction({ action: false })

    expect(barsAction.action.value).toBe(false)

    reactiveProperties.value.action = true
    await nextTick()
    expect(barsAction.action.value).toBe(true)

    reactiveProperties.value.action = false
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
    expect(BarsAction.is({})).toBe(false)
    expect(BarsAction.is({ action: true })).toBe(true)
    expect(BarsAction.is({ actionLabel: 'Test Label' })).toBe(true)
    expect(BarsAction.is({ actionDescription: 'Test Description' })).toBe(true)
    expect(BarsAction.is({ actionBars: [] })).toBe(true)
  })

  it('should set action value manually using set()', () => {
    const { barsAction } = createBarsAction({})
    expect(barsAction.action.value).toBe(false)

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
