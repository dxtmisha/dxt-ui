// @vitest-environment jsdom
import { describe, it, expect, expectTypeOf, vi, beforeEach, afterEach } from 'vitest'
import { ErrorCenter } from '../ErrorCenter'
import { ErrorCenterInstance } from '../ErrorCenterInstance'
import { ServerStorage } from '../ServerStorage'
import type { ErrorCenterCauseItem, ErrorCenterHandlerList } from '../../types/errorCenterTypes'

describe('ErrorCenter', () => {
  beforeEach(() => {
    ServerStorage.reset()
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    ServerStorage.reset()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should reuse the ErrorCenterInstance in browser storage', () => {
      const firstInstance = ErrorCenter.getItem()
      const secondInstance = ErrorCenter.getItem()

      expect(firstInstance).toBeInstanceOf(ErrorCenterInstance)
      expect(firstInstance).toBe(secondInstance)
    })

    it('should load the default causes when a new storage instance is created', () => {
      const firstInstance = ErrorCenter.getItem()
      ServerStorage.reset()

      expect(ErrorCenter.getItem()).not.toBe(firstInstance)
      expect(ErrorCenter.has('unauthorized', 'api')).toBe(true)
      expect(ErrorCenter.has('notFound', 'api')).toBe(true)
      expect(ErrorCenter.has('context', 'storage')).toBe(true)
      expect(ErrorCenter.has('invalid', 'intl')).toBe(true)
      expect(ErrorCenter.has('error', 'transformation')).toBe(true)
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

      expect(ErrorCenter.getHandler().has('G1')).toBe(true)
      expect(ErrorCenter.getHandler().has('G2')).toBe(true)
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

    it('should remove handlers and callbacks via static removeHandler, removeCallback, and reset', () => {
      const handlerFn = vi.fn()
      const globalFn = vi.fn()

      ErrorCenter.addHandler('TEMP_G', handlerFn)
      ErrorCenter.addCallback(globalFn)

      ErrorCenter.removeHandler('TEMP_G', handlerFn)
      ErrorCenter.removeCallback(globalFn)

      ErrorCenter.on({ code: 'TEST', group: 'TEMP_G' })
      expect(handlerFn).not.toHaveBeenCalled()
      expect(globalFn).not.toHaveBeenCalled()

      ErrorCenter.addHandler('TEMP_G2', handlerFn)
      ErrorCenter.reset()

      ErrorCenter.on({ code: 'TEST', group: 'TEMP_G2' })
      expect(handlerFn).not.toHaveBeenCalled()

      ErrorCenter.add({ code: 'STATIC_CAUSE', group: 'TEMP_G', label: 'Static Cause' })
      expect(ErrorCenter.has('STATIC_CAUSE', 'TEMP_G')).toBe(true)

      ErrorCenter.remove('STATIC_CAUSE', 'TEMP_G')
      expect(ErrorCenter.has('STATIC_CAUSE', 'TEMP_G')).toBe(false)
    })

    it('should merge cause with stored metadata via static assign() and preserve generic types', () => {
      ErrorCenter.add({ code: 'STATIC_ASSIGN', group: 'G_ASSIGN', label: 'Static Label', message: 'Static Message' })

      const merged = ErrorCenter.assign<{ ok: boolean }>({
        code: 'STATIC_ASSIGN',
        group: 'G_ASSIGN',
        details: { ok: true }
      })

      expectTypeOf(merged).toEqualTypeOf<ErrorCenterCauseItem<{ ok: boolean }>>()
      expectTypeOf(ErrorCenter.get('STATIC_ASSIGN', 'G_ASSIGN')).toEqualTypeOf<ErrorCenterCauseItem | undefined>()
      expect(merged).toEqual({
        code: 'STATIC_ASSIGN',
        group: 'G_ASSIGN',
        label: 'Static Label',
        message: 'Static Message',
        details: { ok: true }
      })
    })
  })

  describe('Boundary values, zero/falsy traps, and immutability', () => {
    it('should respect priority 0 and non-destructive undefined fields in static assign()', () => {
      ErrorCenter.add({
        code: 'STATIC_PRIO',
        group: 'G_BOUND',
        label: 'Stored Label',
        message: 'Stored Message',
        priority: 500
      })

      expect(ErrorCenter.assign({
        code: 'STATIC_PRIO',
        group: 'G_BOUND',
        priority: 0,
        label: 'Ignored Override'
      })).toEqual({
        code: 'STATIC_PRIO',
        group: 'G_BOUND',
        priority: 500,
        label: 'Stored Label',
        message: 'Stored Message'
      })

      expect(ErrorCenter.assign({
        code: 'STATIC_PRIO',
        group: 'G_BOUND',
        message: undefined,
        details: 0
      })).toEqual({
        code: 'STATIC_PRIO',
        group: 'G_BOUND',
        priority: 500,
        label: 'Stored Label',
        message: 'Stored Message',
        details: 0
      })
    })

    it('should not mutate caller-passed cause objects in static assign()', () => {
      const inputCause: ErrorCenterCauseItem<{ id: number }> = {
        group: 'api',
        code: 'notFound',
        details: { id: 12 }
      }
      const snapshot = { ...inputCause }

      const merged = ErrorCenter.assign(inputCause)

      expect(merged).not.toBe(inputCause)
      expect(inputCause).toEqual(snapshot)
      expect(merged.label).toBe('Resource Not Found')
    })
  })

  describe('SSR request isolation and hydration safety', () => {
    it('should reuse an instance within a server request and isolate separate requests', () => {
      vi.stubGlobal('window', undefined)
      const firstContext: Record<string, unknown> = {}
      let context: Record<string, unknown> = firstContext
      ServerStorage.init(() => context)

      const firstInstance = ErrorCenter.getItem()
      const firstCallback = vi.fn()
      ErrorCenter.addCallback(firstCallback)
      ErrorCenter.add({ code: 'REQ_ONE_CAUSE', label: 'First Request Only' })

      context = {}
      const secondInstance = ErrorCenter.getItem()
      const secondCallback = vi.fn()
      ErrorCenter.addCallback(secondCallback)
      const cause = { code: 'SECOND_REQUEST' }
      ErrorCenter.on(cause)

      expect(secondInstance).not.toBe(firstInstance)
      expect(ErrorCenter.has('REQ_ONE_CAUSE')).toBe(false)
      expect(ErrorCenter.assign({ code: 'REQ_ONE_CAUSE' })).toEqual({ code: 'REQ_ONE_CAUSE' })
      expect(secondCallback).toHaveBeenCalledExactlyOnceWith(cause)
      expect(firstCallback).not.toHaveBeenCalled()

      context = firstContext
      expect(ErrorCenter.getItem()).toBe(firstInstance)
      expect(ErrorCenter.assign({ code: 'REQ_ONE_CAUSE' })).toEqual({
        code: 'REQ_ONE_CAUSE',
        label: 'First Request Only'
      })
    })

    it('should reuse fallback storage without reporting a recursive context error', () => {
      vi.stubGlobal('window', undefined)
      const consoleError = vi.mocked(console.error)

      const instance = ErrorCenter.getItem()
      expect(ErrorCenter.getItem()).toBe(instance)
      expect(consoleError).not.toHaveBeenCalled()

      ServerStorage.get('outside-request')
      expect(consoleError).toHaveBeenCalledWith('Error Center: context')
      expect(consoleError.mock.calls.filter(([message]) => message === 'Error Center: context')).toHaveLength(1)
    })

    it('should initialize once when invalid hydration data reports an error', () => {
      const script = document.createElement('script')
      script.id = '__ui:server:storage:id__'
      script.type = 'application/json'
      script.textContent = '{invalid'
      document.body.append(script)

      try {
        const instance = ErrorCenter.getItem()

        expect(ErrorCenter.getItem()).toBe(instance)
        expect(console.error).toHaveBeenCalledWith('Error Center: error')
        expect(script.isConnected).toBe(false)
      } finally {
        script.remove()
      }
    })
  })
})
