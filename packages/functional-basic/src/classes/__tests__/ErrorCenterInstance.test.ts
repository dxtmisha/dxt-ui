// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ErrorCenterHandler } from '../ErrorCenterHandler'
import { ErrorCenterInstance } from '../ErrorCenterInstance'
import type { ErrorCenterCauseItem } from '../../types/errorCenter'

describe('ErrorCenterInstance', () => {
  let instance: ErrorCenterInstance
  let mockHandler: ErrorCenterHandler

  beforeEach(() => {
    mockHandler = new ErrorCenterHandler()
    instance = new ErrorCenterInstance([], mockHandler)
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('should add and check for causes', () => {
    const cause: ErrorCenterCauseItem = { code: 'C1', group: 'G1', label: 'L1' }
    instance.add(cause)

    expect(instance.has('C1', 'G1')).toBe(true)
    expect(instance.get('C1', 'G1')).toEqual(cause)
    expect(instance.has('C1', 'G2')).toBe(false)
  })

  it('should add a list of causes', () => {
    instance.addList([
      { code: 'C1', group: 'G1' },
      { code: 'C2', group: 'G1' }
    ])
    expect(instance.has('C1', 'G1')).toBe(true)
    expect(instance.has('C2', 'G1')).toBe(true)
  })

  it('should register handlers through addHandler and addHandlerList', () => {
    const callback = () => {}
    instance.addHandler('G1', callback)

    // Accessing protected member for testing
    // @ts-expect-error: Accessing protected member
    expect(instance.handler.has('G1')).toBe(true)
  })

  it('should merge cause data when triggered', () => {
    const storedCause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', label: 'Stored Label', message: 'Stored Message' }
    instance.add(storedCause)

    const handlerCallback = vi.fn()
    instance.addHandler('G1', handlerCallback)

    const triggerCause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', message: 'New Message' }
    instance.on(triggerCause)

    expect(handlerCallback).toHaveBeenCalledWith({
      code: 'ERR',
      group: 'G1',
      label: 'Stored Label',
      message: 'New Message'
    })
  })

  it('should use provided cause if no stored cause exists', () => {
    const handlerCallback = vi.fn()
    instance.addHandler('G1', handlerCallback)

    const cause: ErrorCenterCauseItem = { code: 'UNKNOWN', group: 'G1', message: 'Unknown' }
    instance.on(cause)

    expect(handlerCallback).toHaveBeenCalledWith(cause)
  })

  it('should fallback to global handler if group handler is not found', () => {
    const globalCallback = vi.fn()
    instance.addHandler(undefined, globalCallback)

    const cause: ErrorCenterCauseItem = { code: 'ERR_FALLBACK', group: 'G_NEW', message: 'Fallback' }
    instance.on(cause)

    expect(globalCallback).toHaveBeenCalledWith(cause)
  })
})
