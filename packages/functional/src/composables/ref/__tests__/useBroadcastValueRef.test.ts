/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'

let broadcastCallbacks: Record<string, (event: any) => void> = {}
const broadcastSpy = vi.fn()

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal() as any
  return {
    ...actual,
    executeFunction: (value: any) => (typeof value === 'function' ? value() : value),
    BroadcastMessage: class {
      constructor(public name: string, public callback?: (event: any) => void) {
        if (callback) {
          broadcastCallbacks[name] = callback
        }
      }

      post(message: any) {
        broadcastSpy(this.name, message)
      }
    }
  }
})

import { useBroadcastValueRef } from '../useBroadcastValueRef'

describe('useBroadcastValueRef', () => {
  beforeEach(() => {
    broadcastCallbacks = {}
    broadcastSpy.mockClear()
  })

  it('should initialize with static default value', () => {
    const item = useBroadcastValueRef('test-static', 'initial')
    expect(item.value).toBe('initial')
  })

  it('should initialize with function default value', () => {
    const item = useBroadcastValueRef('test-func', () => 'from-func')
    expect(item.value).toBe('from-func')
  })

  it('should implement singleton pattern for the same name', () => {
    const item1 = useBroadcastValueRef('single', 'first')
    const item2 = useBroadcastValueRef('single', 'second')

    expect(item1).toBe(item2)
    expect(item1.value).toBe('first')
  })

  it('should broadcast changes when local ref updates', async () => {
    const item = useBroadcastValueRef('sync-out', 'start')

    item.value = 'updated'
    await nextTick()

    expect(broadcastSpy).toHaveBeenCalledWith('broadcast--sync-out', { message: 'updated' })
  })

  it('should update local ref when message is received', async () => {
    const item = useBroadcastValueRef('sync-in', 'initial')
    const callback = broadcastCallbacks['broadcast--sync-in']

    expect(callback).toBeDefined()

    callback?.({ data: { message: 'remote-update' } })
    await nextTick()

    expect(item.value).toBe('remote-update')
  })

  it('should not update if received message is same as current value', async () => {
    const item = useBroadcastValueRef('sync-no-loop', 'same')
    const callback = broadcastCallbacks['broadcast--sync-no-loop']

    item.value = 'same'
    await nextTick()

    callback?.({ data: { message: 'same' } })
    await nextTick()

    expect(item.value).toBe('same')
  })
})
