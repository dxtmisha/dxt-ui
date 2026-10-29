import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ErrorCenterHandler } from '../ErrorCenterHandler'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'
import type { ErrorCenterCauseItem, ErrorCenterHandlerList } from '../../types/errorCenterTypes'

describe('ErrorCenterHandler', () => {
  let handler: ErrorCenterHandler
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    handler = new ErrorCenterHandler()
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    consoleErrorSpy.mockClear()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should initialize with optional handlers and isConsole flag in constructor', () => {
    const groupCallback = vi.fn()
    const customHandler = new ErrorCenterHandler(
      [{ group: 'initial', handlers: [groupCallback] }],
      false
    )

    expect(customHandler.has('initial')).toBe(true)

    const cause: ErrorCenterCauseItem = { code: 'INIT_ERR', group: 'initial' }
    customHandler.on(cause)

    expect(groupCallback).toHaveBeenCalledWith(cause)
    expect(consoleErrorSpy).not.toHaveBeenCalled()
  })

  it('should add a handler and check if it exists', () => {
    const returnValue = handler.add('group1', () => {})
    expect(returnValue).toBe(handler)
    expect(handler.has('group1')).toBe(true)
    expect(handler.has('group2')).toBe(false)
  })

  it('should append multiple handlers to an existing group', () => {
    const firstCallback = vi.fn()
    const secondCallback = vi.fn()

    handler.add('group1', firstCallback)
    handler.add('group1', secondCallback)

    const item = handler.get('group1')
    expect(item?.group).toBe('group1')
    expect(item?.handlers).toHaveLength(2)
    expect(item?.handlers).toContain(firstCallback)
    expect(item?.handlers).toContain(secondCallback)
  })

  it('should add multiple handlers using addList', () => {
    const list: ErrorCenterHandlerList = [
      { group: 'group1', handlers: [() => {}] },
      { group: 'group2', handlers: [() => {}] }
    ]
    const returnValue = handler.addList(list)
    expect(returnValue).toBe(handler)
    expect(handler.has('group1')).toBe(true)
    expect(handler.has('group2')).toBe(true)
  })

  it('should trigger handlers on "on" call and log details to console', () => {
    const callback = vi.fn()
    const cause: ErrorCenterCauseItem = {
      code: 'ERR001',
      group: 'group1',
      message: 'Test error',
      details: { reason: 'timeout' }
    }

    handler.add('group1', callback)
    const returnValue = handler.on(cause)

    expect(returnValue).toBe(handler)
    expect(callback).toHaveBeenCalledWith(cause)
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error Center: ERR001')
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error Center/message: ', 'Test error')
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error Center/details: ', { reason: 'timeout' })
  })

  it('should log stack trace in non-DOM runtime and omit trace in DOM runtime', () => {
    const cause: ErrorCenterCauseItem = { code: 'SSR_ERR', message: 'Server error' }

    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    handler.on(cause)
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error Center/trace: ', expect.any(String))

    consoleErrorSpy.mockClear()
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
    handler.on(cause)
    expect(consoleErrorSpy).not.toHaveBeenCalledWith('Error Center/trace: ', expect.anything())
  })

  it('should still log to the console if no handlers exist', () => {
    const cause: ErrorCenterCauseItem = { code: 'ERR002', group: 'nonexistent', message: 'Silent error' }
    handler.on(cause)

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error Center: ERR002')
  })

  it('should fall back to an undefined group if specific group handler is not found', () => {
    const undefinedCallback = vi.fn()
    const cause: ErrorCenterCauseItem = { code: 'ERR_FALLBACK', group: 'nonexistent', message: 'Fallback error' }

    handler.add(undefined, undefinedCallback)
    handler.on(cause)

    expect(undefinedCallback).toHaveBeenCalledWith(cause)
  })

  it('should trigger registered global callbacks on every error', () => {
    const firstCallback = vi.fn()
    const secondCallback = vi.fn()
    const groupCallback = vi.fn()

    expect(handler.addCallback(firstCallback)).toBe(handler)
    handler.addCallback(secondCallback)
    handler.add('group1', groupCallback)

    const firstCause: ErrorCenterCauseItem = { code: 'ERR001', group: 'group1', message: 'Group 1 error' }
    const secondCause: ErrorCenterCauseItem = { code: 'ERR002', group: 'group2', message: 'Group 2 error' }

    handler.on(firstCause)
    expect(firstCallback).toHaveBeenCalledWith(firstCause)
    expect(secondCallback).toHaveBeenCalledWith(firstCause)
    expect(groupCallback).toHaveBeenCalledWith(firstCause)

    handler.on(secondCause)
    expect(firstCallback).toHaveBeenCalledWith(secondCause)
    expect(secondCallback).toHaveBeenCalledWith(secondCause)
  })

  it('should not log to console when isConsole is false', () => {
    expect(handler.setIsConsole(false)).toBe(handler)
    const cause: ErrorCenterCauseItem = { code: 'ERR_SILENT', message: 'Silent error' }
    handler.on(cause)

    expect(consoleErrorSpy).not.toHaveBeenCalled()
  })

  it('should filter console logging using a function for isConsole', () => {
    handler.setIsConsole(cause => cause.code !== 'IGNORE_ME')

    const ignoredCause: ErrorCenterCauseItem = { code: 'IGNORE_ME', message: 'Ignore' }
    const loggedCause: ErrorCenterCauseItem = { code: 'LOG_ME', message: 'Log' }

    handler.on(ignoredCause)
    expect(consoleErrorSpy).not.toHaveBeenCalled()

    handler.on(loggedCause)
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error Center: LOG_ME')
  })

  it('should remove a specific handler from a group', () => {
    const callback1 = vi.fn()
    const callback2 = vi.fn()

    handler.add('api', callback1)
    handler.add('api', callback2)

    expect(handler.remove('api', callback1)).toBe(handler)

    const cause: ErrorCenterCauseItem = { code: 'API_ERR', group: 'api' }
    handler.on(cause)

    expect(callback1).not.toHaveBeenCalled()
    expect(callback2).toHaveBeenCalledWith(cause)
    expect(handler.has('api')).toBe(true)

    handler.remove('api', callback2)
    expect(handler.has('api')).toBe(false)
  })

  it('should remove all handlers for a group when no handler argument is passed', () => {
    const callback1 = vi.fn()
    const callback2 = vi.fn()

    handler.add('auth', callback1)
    handler.add('auth', callback2)
    expect(handler.has('auth')).toBe(true)

    expect(handler.remove('auth')).toBe(handler)
    expect(handler.has('auth')).toBe(false)

    const cause: ErrorCenterCauseItem = { code: 'AUTH_ERR', group: 'auth' }
    handler.on(cause)

    expect(callback1).not.toHaveBeenCalled()
    expect(callback2).not.toHaveBeenCalled()
  })

  it('should remove a global callback using removeCallback', () => {
    const callback1 = vi.fn()
    const callback2 = vi.fn()

    handler.addCallback(callback1)
    handler.addCallback(callback2)

    expect(handler.removeCallback(callback1)).toBe(handler)

    const cause: ErrorCenterCauseItem = { code: 'ERR_ALL' }
    handler.on(cause)

    expect(callback1).not.toHaveBeenCalled()
    expect(callback2).toHaveBeenCalledWith(cause)
  })

  it('should reset all handlers and callbacks on reset()', () => {
    const groupCallback = vi.fn()
    const globalCallback = vi.fn()

    handler.add('api', groupCallback)
    handler.addCallback(globalCallback)

    expect(handler.has('api')).toBe(true)
    expect(handler.reset()).toBe(handler)

    expect(handler.has('api')).toBe(false)

    const cause: ErrorCenterCauseItem = { code: 'RESET_TEST', group: 'api' }
    handler.on(cause)

    expect(groupCallback).not.toHaveBeenCalled()
    expect(globalCallback).not.toHaveBeenCalled()
  })

  it('should handle remove on non-existent group gracefully', () => {
    const fn = vi.fn()
    expect(handler.remove('unknown', fn)).toBe(handler)
    expect(handler.remove('unknown')).toBe(handler)
  })
})
