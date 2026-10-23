// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ErrorCenter } from '../ErrorCenter'
import { ErrorCenterInstance } from '../ErrorCenterInstance'
import type { ErrorCenterCauseItem, ErrorCenterHandlerList } from '../../types/errorCenterTypes'

describe('ErrorCenter', () => {
  beforeEach(() => {
    const instance = ErrorCenter.getItem()
    // @ts-expect-error: Accessing protected member to reset singleton state
    instance.causes = []
    // @ts-expect-error: Accessing protected member to reset singleton state
    instance.handler.handlers = []
    // @ts-expect-error: Accessing protected member to reset singleton state
    instance.handler.callbacks = []
    instance.setIsConsole(true)

    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('should return singleton ErrorCenterInstance via getItem()', () => {
    const firstInstance = ErrorCenter.getItem()
    const secondInstance = ErrorCenter.getItem()

    expect(firstInstance).toBeInstanceOf(ErrorCenterInstance)
    expect(firstInstance).toBe(secondInstance)
  })

  it('should initialize a new ErrorCenterInstance if static item is undefined', () => {
    // @ts-expect-error: Resetting protected static item for initialization test
    ErrorCenter.item = undefined
    const instance = ErrorCenter.getItem()
    expect(instance).toBeInstanceOf(ErrorCenterInstance)
  })

  it('should add and check for causes via static methods', () => {
    const cause: ErrorCenterCauseItem = { code: 'C1', group: 'G1', label: 'L1' }
    const result = ErrorCenter.add(cause)

    expect(result).toBeUndefined()
    expect(ErrorCenter.has('C1', 'G1')).toBe(true)
    expect(ErrorCenter.has('C1', 'G2')).toBe(false)
    expect(ErrorCenter.get('C1', 'G1')).toEqual(cause)
    expect(ErrorCenter.get('UNKNOWN', 'G1')).toBeUndefined()
  })

  it('should add and retrieve causes without a group', () => {
    const cause: ErrorCenterCauseItem = { code: 'NO_GROUP', label: 'Ungrouped' }
    ErrorCenter.add(cause)

    expect(ErrorCenter.has('NO_GROUP')).toBe(true)
    expect(ErrorCenter.get('NO_GROUP')).toEqual(cause)
  })

  it('should add a list of causes via static addList()', () => {
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

  it('should add multiple handlers via static addHandlerList()', () => {
    const list: ErrorCenterHandlerList = [
      { group: 'G1', handlers: [vi.fn()] },
      { group: 'G2', handlers: [vi.fn()] }
    ]
    const result = ErrorCenter.addHandlerList(list)
    expect(result).toBeUndefined()

    // @ts-expect-error: Accessing protected member to verify registered handlers
    expect(ErrorCenter.getItem().handler.has('G1')).toBe(true)
    // @ts-expect-error: Accessing protected member to verify registered handlers
    expect(ErrorCenter.getItem().handler.has('G2')).toBe(true)
  })

  it('should register a global callback that runs on every error via static addCallback()', () => {
    const callback = vi.fn()
    ErrorCenter.addCallback(callback)

    const cause: ErrorCenterCauseItem = { code: 'ERR', group: 'G1', message: 'Static global test' }
    ErrorCenter.on(cause)

    expect(callback).toHaveBeenCalledWith(cause)
  })

  it('should control console output via static setIsConsole()', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error')
    consoleErrorSpy.mockClear()

    ErrorCenter.setIsConsole(false)
    ErrorCenter.on({ code: 'SILENT_ERR', message: 'Should not log' })
    expect(consoleErrorSpy).not.toHaveBeenCalled()

    ErrorCenter.setIsConsole(cause => cause.code === 'ALLOWED')
    ErrorCenter.on({ code: 'BLOCKED', message: 'Blocked' })
    expect(consoleErrorSpy).not.toHaveBeenCalled()

    ErrorCenter.on({ code: 'ALLOWED', message: 'Allowed' })
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error Center: ALLOWED')
  })
})
