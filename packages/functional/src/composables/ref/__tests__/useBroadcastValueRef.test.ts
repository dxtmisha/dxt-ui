/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick, reactive } from 'vue'

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

  it('should broadcast an object that supports structured cloning', async () => {
    const item = useBroadcastValueRef<{ profile: { name: string }, roles: string[] }>('object-out')
    const value = { profile: { name: 'Alice' }, roles: ['editor'] }

    item.value = value
    await nextTick()

    const message = broadcastSpy.mock.calls[0]?.[1] as unknown
    expect(structuredClone(message)).toEqual({ message: value })
    expect(broadcastSpy).toHaveBeenCalledTimes(1)
  })

  it('should unwrap an explicitly reactive value before broadcasting', async () => {
    const item = useBroadcastValueRef<{ profile: { name: string } }>('reactive-out')
    const value = reactive({ profile: { name: 'Alice' } })

    item.value = value
    await nextTick()

    const message = broadcastSpy.mock.calls[0]?.[1] as unknown
    expect(structuredClone(message)).toEqual({ message: { profile: { name: 'Alice' } } })
  })

  it.each([
    ['array', [{ id: 1 }]],
    ['date', new Date('2026-10-25T00:00:00Z')],
    ['map', new Map([['id', 1]])],
    ['set', new Set(['editor'])],
    ['bigint', 123n]
  ] as const)('should preserve a structured-cloneable %s value', async (name, value) => {
    const item = useBroadcastValueRef<unknown>(`clone-${name}`)

    item.value = value
    await nextTick()

    const message = broadcastSpy.mock.calls[0]?.[1] as unknown
    expect(structuredClone(message)).toEqual({ message: value })
  })

  it('should preserve circular references in a broadcast object', async () => {
    const value: { id: number, self?: unknown } = { id: 1 }
    value.self = value
    const item = useBroadcastValueRef<typeof value>('circular-out')

    item.value = value
    await nextTick()

    const message = broadcastSpy.mock.calls[0]?.[1] as unknown
    const copied = structuredClone(message) as { message: typeof value }
    expect(copied.message.id).toBe(1)
    expect(copied.message.self).toBe(copied.message)
  })

  it('should not broadcast an object received from another tab', async () => {
    const item = useBroadcastValueRef<{ id: number }>('object-in', { id: 1 })
    const callback = broadcastCallbacks['broadcast--object-in']

    callback?.({ data: { message: { id: 2 } } })
    await nextTick()

    expect(item.value).toEqual({ id: 2 })
    expect(broadcastSpy).not.toHaveBeenCalled()
  })

  it('should broadcast local changes including a return to a previously received value', async () => {
    const item = useBroadcastValueRef<string>('local-after-remote', 'initial')
    const callback = broadcastCallbacks['broadcast--local-after-remote']

    callback?.({ data: { message: 'remote' } })
    await nextTick()
    expect(broadcastSpy).not.toHaveBeenCalled()

    item.value = 'local'
    await nextTick()
    item.value = 'remote'
    await nextTick()

    expect(broadcastSpy).toHaveBeenCalledTimes(2)
    expect(broadcastSpy).toHaveBeenNthCalledWith(1, 'broadcast--local-after-remote', { message: 'local' })
    expect(broadcastSpy).toHaveBeenNthCalledWith(2, 'broadcast--local-after-remote', { message: 'remote' })
  })

  it('should broadcast the latest local value when it changes before a received update is flushed', async () => {
    const item = useBroadcastValueRef<{ id: number }>('batched-local', { id: 1 })
    const callback = broadcastCallbacks['broadcast--batched-local']

    callback?.({ data: { message: { id: 2 } } })
    item.value = { id: 3 }
    await nextTick()

    expect(broadcastSpy).toHaveBeenCalledExactlyOnceWith('broadcast--batched-local', { message: { id: 3 } })
  })

  it('should not echo a received value matching a queued local change', async () => {
    const item = useBroadcastValueRef<string>('matching-queued', 'initial')
    const callback = broadcastCallbacks['broadcast--matching-queued']

    item.value = 'updated'
    callback?.({ data: { message: 'updated' } })
    await nextTick()

    expect(item.value).toBe('updated')
    expect(broadcastSpy).not.toHaveBeenCalled()
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
