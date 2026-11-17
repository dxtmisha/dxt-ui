import { describe, it, expect, expectTypeOf, vi, beforeEach, afterEach } from 'vitest'
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

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should register initial causes and create a default handler', () => {
      const defaultInstance = new ErrorCenterInstance([{ code: 'INIT_CODE', group: 'INIT_GROUP' }])
      expect(defaultInstance.has('INIT_CODE', 'INIT_GROUP')).toBe(true)
      expect(defaultInstance.getHandler()).toBeInstanceOf(ErrorCenterHandler)
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

      expect(instance.getHandler().has('G1')).toBe(true)
      expect(instance.getHandler().has('G2')).toBe(true)
    })

    it('should forward setIsConsole to underlying handler and return this', () => {
      const setIsConsoleSpy = vi.spyOn(mockHandler, 'setIsConsole')
      expect(instance.setIsConsole(false)).toBe(instance)
      expect(setIsConsoleSpy).toHaveBeenCalledWith(false)
    })

    it('should merge cause with stored metadata via public assign() and preserve generic types', () => {
      instance.add({ code: 'ASSIGN_ERR', group: 'G1', label: 'Stored', message: 'Stored Msg' })

      const merged = instance.assign<{ id: number }>({
        code: 'ASSIGN_ERR',
        group: 'G1',
        details: { id: 1 }
      })

      expectTypeOf(merged).toEqualTypeOf<ErrorCenterCauseItem<{ id: number }>>()
      expect(merged).toEqual({
        code: 'ASSIGN_ERR',
        group: 'G1',
        label: 'Stored',
        message: 'Stored Msg',
        details: { id: 1 }
      })
    })

    it('should merge cause data when triggered via on()', () => {
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

    it('should remove handlers, global callbacks, and registered causes', () => {
      const handlerFn = vi.fn()
      const globalFn = vi.fn()

      instance.addHandler('G1', handlerFn)
      instance.addCallback(globalFn)

      expect(instance.removeHandler('G1', handlerFn)).toBe(instance)
      expect(instance.removeCallback(globalFn)).toBe(instance)

      instance.on({ code: 'ERR', group: 'G1' })
      expect(handlerFn).not.toHaveBeenCalled()
      expect(globalFn).not.toHaveBeenCalled()

      instance.addHandler('G2', handlerFn)
      expect(instance.reset()).toBe(instance)

      instance.on({ code: 'ERR', group: 'G2' })
      expect(handlerFn).not.toHaveBeenCalled()

      instance.add({ code: 'DYNAMIC_CAUSE', group: 'DYN', label: 'Dynamic' })
      expect(instance.has('DYNAMIC_CAUSE', 'DYN')).toBe(true)

      expect(instance.remove('DYNAMIC_CAUSE', 'DYN')).toBe(instance)
      expect(instance.has('DYNAMIC_CAUSE', 'DYN')).toBe(false)
    })
  })

  describe('Boundary values, zero/falsy traps, and non-destructive merging', () => {
    it('should treat numeric priority 0 as lower than default 500 instead of falling back', () => {
      instance.add({ code: 'ZERO_PRIORITY', group: 'G1', label: 'Stored Default', message: 'Stored Msg' })

      const merged = instance.assign({
        code: 'ZERO_PRIORITY',
        group: 'G1',
        priority: 0,
        label: 'Low Override',
        details: { attempt: 1 }
      })

      expect(merged).toEqual({
        code: 'ZERO_PRIORITY',
        group: 'G1',
        priority: 0,
        label: 'Stored Default',
        message: 'Stored Msg',
        details: { attempt: 1 }
      })
    })

    it('should allow priority 0 trigger to override stored priority 0 cause', () => {
      instance.add({ code: 'EQUAL_ZERO', group: 'G1', priority: 0, label: 'Stored Zero' })

      const merged = instance.assign({
        code: 'EQUAL_ZERO',
        group: 'G1',
        priority: 0,
        label: 'Trigger Zero'
      })

      expect(merged).toEqual({
        code: 'EQUAL_ZERO',
        group: 'G1',
        priority: 0,
        label: 'Trigger Zero'
      })
    })

    it('should preserve falsy values (0, false, empty string, null) and ignore explicit undefined during assign()', () => {
      instance.add({
        code: 'FALSY',
        group: 'G1',
        label: 'Stored Label',
        message: 'Stored Message'
      })

      const merged = instance.assign<number | boolean | string | null>({
        code: 'FALSY',
        group: 'G1',
        label: undefined,
        message: '',
        details: 0
      })

      expect(merged).toEqual({
        code: 'FALSY',
        group: 'G1',
        label: 'Stored Label',
        message: '',
        details: 0
      })

      expect(instance.assign({ code: 'FALSY', group: 'G1', details: false }).details).toBe(false)
      expect(instance.assign({ code: 'FALSY', group: 'G1', details: null }).details).toBeNull()
    })

    it('should handle removing non-existent or duplicate causes safely', () => {
      instance.add({ code: 'DUP', group: 'G1', label: 'First' })
      instance.add({ code: 'DUP', group: 'G1', label: 'Second' })

      expect(instance.remove('MISSING', 'G1')).toBe(instance)
      expect(instance.remove('DUP', 'G1')).toBe(instance)
      expect(instance.has('DUP', 'G1')).toBe(false)
    })
  })

  describe('Immutability, isolation, and security boundaries', () => {
    it('should keep registered causes and callbacks local to an instance', () => {
      const firstInstance = new ErrorCenterInstance().setIsConsole(false)
      const secondInstance = new ErrorCenterInstance().setIsConsole(false)
      const callback = vi.fn()
      const cause: ErrorCenterCauseItem = { code: 'LOCAL', group: 'api' }
      firstInstance.add({ ...cause, label: 'First instance' }).addCallback(callback)

      secondInstance.on(cause)
      expect(secondInstance.has('LOCAL', 'api')).toBe(false)
      expect(callback).not.toHaveBeenCalled()

      firstInstance.on(cause)
      expect(callback).toHaveBeenCalledExactlyOnceWith({ ...cause, label: 'First instance' })
    })

    it('should not mutate stored or caller-passed cause objects during assign()', () => {
      const storedCause: ErrorCenterCauseItem = {
        code: 'IMMUTABLE',
        group: 'G1',
        label: 'Stored',
        message: 'Stored Msg'
      }
      const inputCause: ErrorCenterCauseItem<{ id: number }> = {
        code: 'IMMUTABLE',
        group: 'G1',
        details: { id: 7 }
      }
      const storedSnapshot = { ...storedCause }
      const inputSnapshot = { ...inputCause }

      instance.add(storedCause)
      const result = instance.assign(inputCause)

      expect(result).not.toBe(storedCause)
      expect(result).not.toBe(inputCause)
      expect(storedCause).toEqual(storedSnapshot)
      expect(inputCause).toEqual(inputSnapshot)
    })

    it('should filter prototype pollution keys when merging causes in assign()', () => {
      instance.add({ code: 'PROTO', group: 'G1', label: 'Safe' })
      const maliciousPayload = JSON.parse('{"code":"PROTO","group":"G1","__proto__":{"polluted":true}}') as ErrorCenterCauseItem

      const merged = instance.assign(maliciousPayload)

      expect(({} as { polluted?: boolean }).polluted).toBeUndefined()
      expect(Object.prototype.hasOwnProperty.call(merged, '__proto__')).toBe(false)
    })
  })

  describe('Multilingual and Unicode handling', () => {
    it('should preserve Cyrillic, Vietnamese diacritics, CJK, and Emoji in causes', () => {
      instance.add({
        code: 'I18N',
        group: 'intl',
        label: 'Ошибка / Lỗi tiếng Việt / 错误',
        message: 'Привет Мир — Học tiếng Việt 🚀'
      })

      const merged = instance.assign({
        code: 'I18N',
        group: 'intl',
        details: { name: 'Nguyễn 日本語 👨‍👩‍👧‍👦' }
      })

      expect(merged.label).toBe('Ошибка / Lỗi tiếng Việt / 错误')
      expect(merged.message).toBe('Привет Мир — Học tiếng Việt 🚀')
      expect(merged.details).toEqual({ name: 'Nguyễn 日本語 👨‍👩‍👧‍👦' })
    })
  })
})
