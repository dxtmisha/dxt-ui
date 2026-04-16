// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ErrorCenter } from '../ErrorCenter'
import type { ErrorCenterCauseItem, ErrorCenterHandlerList } from '../../types/errorCenter'

describe('ErrorCenter', () => {
  beforeEach(() => {
    // Reset the static instance state (causes and handlers)
    // Since we can't easily replace the static item, we access its internal protected members
    // @ts-expect-error: Accessing protected member
    const instance = ErrorCenter.item
    // @ts-expect-error: Accessing protected member
    instance.causes = []
    // @ts-expect-error: Accessing protected member
    instance.handler.handlers = []

    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('should add and check for causes via static methods', () => {
    const cause: ErrorCenterCauseItem = { code: 'C1', group: 'G1', label: 'L1' }
    const result = ErrorCenter.add(cause)

    expect(result).toBeUndefined()
    expect(ErrorCenter.has('C1', 'G1')).toBe(true)
    expect(ErrorCenter.get('C1', 'G1')).toEqual(cause)
  })

  it('should add a list of causes via static methods', () => {
    const result = ErrorCenter.addList([
      { code: 'C1', group: 'G1' },
      { code: 'C2', group: 'G1' }
    ])
    expect(result).toBeUndefined()
    expect(ErrorCenter.has('C1', 'G1')).toBe(true)
    expect(ErrorCenter.has('C2', 'G1')).toBe(true)
  })

  it('should add handlers and handle errors via static methods', () => {
    const callback = vi.fn()
    const resultAdd = ErrorCenter.addHandler('G1', callback)

    const cause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', message: 'Static test' }
    const resultOn = ErrorCenter.on(cause)

    expect(resultAdd).toBeUndefined()
    expect(resultOn).toBeUndefined()
    expect(callback).toHaveBeenCalledWith(cause)
  })

  it('should add multiple handlers via addHandlerList', () => {
    const list: ErrorCenterHandlerList = [
      { group: 'G1', handlers: [vi.fn()] },
      { group: 'G2', handlers: [vi.fn()] }
    ]
    const result = ErrorCenter.addHandlerList(list)
    expect(result).toBeUndefined()

    // @ts-expect-error: Accessing protected member
    expect(ErrorCenter.getItem().handler.has('G1')).toBe(true)
    // @ts-expect-error: Accessing protected member
    expect(ErrorCenter.getItem().handler.has('G2')).toBe(true)
  })
})
