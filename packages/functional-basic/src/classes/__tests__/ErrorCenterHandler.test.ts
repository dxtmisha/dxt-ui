import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ErrorCenterHandler } from '../ErrorCenterHandler'
import type { ErrorCenterCauseItem, ErrorCenterHandlerList } from '../../types/errorCenter'

describe('ErrorCenterHandler', () => {
  let handler: ErrorCenterHandler
  let consoleErrorSpy: any

  beforeEach(() => {
    handler = new ErrorCenterHandler()
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('should add a handler and check if it exists', () => {
    handler.add('group1', () => {})
    expect(handler.has('group1')).toBe(true)
    expect(handler.has('group2')).toBe(false)
  })

  it('should get a handler item', () => {
    const callback = () => {}
    handler.add('group1', callback)
    const item = handler.get('group1')
    expect(item?.group).toBe('group1')
    expect(item?.handlers).toContain(callback)
  })

  it('should add multiple handlers using addList', () => {
    const list: ErrorCenterHandlerList = [
      { group: 'group1', handlers: [() => {}] },
      { group: 'group2', handlers: [() => {}] }
    ]
    handler.addList(list)
    expect(handler.has('group1')).toBe(true)
    expect(handler.has('group2')).toBe(true)
  })

  it('should trigger handlers on "on" call', () => {
    const callback = vi.fn()
    const cause: ErrorCenterCauseItem = { code: 'ERR001', group: 'group1', message: 'Test error' }

    handler.add('group1', callback)
    handler.on(cause)

    expect(callback).toHaveBeenCalledWith(cause)
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error Center: ERR001')
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error Center/message: ', 'Test error')
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
    const callback1 = vi.fn()
    const callback2 = vi.fn()
    const groupCallback = vi.fn()

    handler.addCallback(callback1)
    handler.addCallback(callback2)
    handler.add('group1', groupCallback)

    const cause1: ErrorCenterCauseItem = { code: 'ERR001', group: 'group1', message: 'Group 1 error' }
    const cause2: ErrorCenterCauseItem = { code: 'ERR002', group: 'group2', message: 'Group 2 error' }

    handler.on(cause1)
    expect(callback1).toHaveBeenCalledWith(cause1)
    expect(callback2).toHaveBeenCalledWith(cause1)
    expect(groupCallback).toHaveBeenCalledWith(cause1)

    handler.on(cause2)
    expect(callback1).toHaveBeenCalledWith(cause2)
    expect(callback2).toHaveBeenCalledWith(cause2)
  })
})
