// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref, toRefs, nextTick } from 'vue'
import type { ToRefs } from 'vue'
import { BarsAction } from '../BarsAction'
import type { BarsProps } from '../props'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

function createBarsAction(initialProps: Partial<BarsProps>) {
  const reactiveProperties = ref({
    action: undefined,
    actionLabel: undefined,
    actionDescription: undefined,
    actionBars: undefined,
    ...initialProps
  })
  const references = toRefs(reactiveProperties.value as any) as unknown as ToRefs<BarsProps>
  const barsAction = new BarsAction(reactiveProperties.value as unknown as BarsProps, references)
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
