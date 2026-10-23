import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ErrorCenterHandler } from '../ErrorCenterHandler'
import { ErrorCenterInstance } from '../ErrorCenterInstance'
import type { ErrorCenterCauseItem } from '../../types/errorCenterTypes'

describe('ErrorCenterInstance', () => {
  let instance: ErrorCenterInstance
  let mockHandler: ErrorCenterHandler

  beforeEach(() => {
    mockHandler = new ErrorCenterHandler()
    instance = new ErrorCenterInstance([], mockHandler)
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize with default causes and default handler when none provided', () => {
    const defaultInstance = new ErrorCenterInstance([{ code: 'INIT_CODE', group: 'INIT_GROUP' }])
    expect(defaultInstance.has('INIT_CODE', 'INIT_GROUP')).toBe(true)
  })

  it('should add and check for causes', () => {
    const cause: ErrorCenterCauseItem = { code: 'C1', group: 'G1', label: 'L1' }
    const returnValue = instance.add(cause)

    expect(returnValue).toBe(instance)
    expect(instance.has('C1', 'G1')).toBe(true)
    expect(instance.get('C1', 'G1')).toEqual(cause)
    expect(instance.has('C1', 'G2')).toBe(false)
  })

  it('should prioritize newly added causes via unshift', () => {
    const olderCause: ErrorCenterCauseItem = { code: 'DUP', group: 'G1', label: 'Old' }
    const newerCause: ErrorCenterCauseItem = { code: 'DUP', group: 'G1', label: 'New' }

    instance.add(olderCause)
    instance.add(newerCause)

    expect(instance.get('DUP', 'G1')).toEqual(newerCause)
  })

  it('should add a list of causes', () => {
    const returnValue = instance.addList([
      { code: 'C1', group: 'G1' },
      { code: 'C2', group: 'G1' }
    ])
    expect(returnValue).toBe(instance)
    expect(instance.has('C1', 'G1')).toBe(true)
    expect(instance.has('C2', 'G1')).toBe(true)
  })

  it('should register handlers through addHandler and addHandlerList', () => {
    const callback = () => {}
    expect(instance.addHandler('G1', callback)).toBe(instance)
    expect(instance.addHandlerList([{ group: 'G2', handlers: [callback] }])).toBe(instance)

    // @ts-expect-error: Accessing protected member for testing
    expect(instance.handler.has('G1')).toBe(true)
    // @ts-expect-error: Accessing protected member for testing
    expect(instance.handler.has('G2')).toBe(true)
  })

  it('should forward setIsConsole to underlying handler and return this', () => {
    const setIsConsoleSpy = vi.spyOn(mockHandler, 'setIsConsole')
    expect(instance.setIsConsole(false)).toBe(instance)
    expect(setIsConsoleSpy).toHaveBeenCalledWith(false)
  })

  it('should merge cause data when triggered', () => {
    const storedCause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', label: 'Stored Label', message: 'Stored Message' }
    instance.add(storedCause)

    const handlerCallback = vi.fn()
    instance.addHandler('G1', handlerCallback)

    const triggerCause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', message: 'New Message' }
    expect(instance.on(triggerCause)).toBe(instance)

    expect(handlerCallback).toHaveBeenCalledWith({
      code: 'ERR',
      group: 'G1',
      label: 'Stored Label',
      message: 'New Message'
    })
  })

  it('should respect priority when merging (stored cause wins if higher priority)', () => {
    const storedCause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', label: 'Protected Label', priority: 1000 }
    instance.add(storedCause)

    const handlerCallback = vi.fn()
    instance.addHandler('G1', handlerCallback)

    const triggerCause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', label: 'Attempted Override', priority: 500 }
    instance.on(triggerCause)

    expect(handlerCallback).toHaveBeenCalledWith({
      code: 'ERR',
      group: 'G1',
      label: 'Protected Label',
      priority: 1000
    })
  })

  it('should respect priority when merging (trigger wins if higher or equal priority)', () => {
    const storedCause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', label: 'Base Label', priority: 500 }
    instance.add(storedCause)

    const handlerCallback = vi.fn()
    instance.addHandler('G1', handlerCallback)

    const higherTriggerCause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', label: 'Better Label', priority: 1000 }
    instance.on(higherTriggerCause)

    expect(handlerCallback).toHaveBeenCalledWith({
      code: 'ERR',
      group: 'G1',
      label: 'Better Label',
      priority: 1000
    })

    const equalTriggerCause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', label: 'Equal Label', priority: 500 }
    instance.on(equalTriggerCause)

    expect(handlerCallback).toHaveBeenLastCalledWith({
      code: 'ERR',
      group: 'G1',
      label: 'Equal Label',
      priority: 500
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

  it('should register a global callback that runs on every error via addCallback', () => {
    const callback = vi.fn()
    expect(instance.addCallback(callback)).toBe(instance)

    const cause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', message: 'Instance global test' }
    instance.on(cause)

    expect(callback).toHaveBeenCalledWith(cause)
  })
})
