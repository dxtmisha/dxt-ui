// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Query } from '../Query'
import { QueryInstance } from '../QueryInstance'
import { ServerStorage } from '../ServerStorage'

describe('Query', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    ServerStorage.remove('__ui:query-instance__')
  })

  it('should return a QueryInstance via ServerStorage and reuse it across calls', () => {
    const storageSpy = vi.spyOn(ServerStorage, 'get')
    const firstInstance = Query.getItem()
    const secondInstance = Query.getItem()

    expect(firstInstance).toBeInstanceOf(QueryInstance)
    expect(firstInstance).toBe(secondInstance)
    expect(storageSpy).toHaveBeenCalledWith('__ui:query-instance__', expect.any(Function))
  })

  it('should isolate instances across different SSR contexts in ServerStorage', () => {
    const firstContextInstance = new QueryInstance()
    const secondContextInstance = new QueryInstance()

    const storageSpy = vi.spyOn(ServerStorage, 'get')
      .mockReturnValueOnce(firstContextInstance)
      .mockReturnValueOnce(secondContextInstance)

    expect(Query.getItem()).toBe(firstContextInstance)
    expect(Query.getItem()).toBe(secondContextInstance)
    expect(firstContextInstance).not.toBe(secondContextInstance)

    storageSpy.mockRestore()
  })

  it('should delegate get() and set() calls to QueryInstance', () => {
    const instance = Query.getItem()
    const getSpy = vi.spyOn(instance, 'get').mockReturnValue('mockedValue')
    const setSpy = vi.spyOn(instance, 'set').mockReturnThis()

    const result = Query.get('testKey', 'defaultValue')
    expect(getSpy).toHaveBeenCalledWith('testKey', 'defaultValue')
    expect(result).toBe('mockedValue')

    Query.set('testKey', 'newValue')
    expect(setSpy).toHaveBeenCalledWith('testKey', 'newValue')
  })

  it('should delegate addWatch() and removeWatch() calls to QueryInstance', () => {
    const instance = Query.getItem()
    const addWatchSpy = vi.spyOn(instance, 'addWatch').mockReturnThis()
    const removeWatchSpy = vi.spyOn(instance, 'removeWatch').mockReturnThis()

    const callback = vi.fn()
    Query.addWatch('watchedKey', callback)
    expect(addWatchSpy).toHaveBeenCalledWith('watchedKey', callback)

    Query.removeWatch('watchedKey', callback)
    expect(removeWatchSpy).toHaveBeenCalledWith('watchedKey', callback)
  })

  it('should delegate reload() to QueryInstance', () => {
    const instance = Query.getItem()
    const reloadSpy = vi.spyOn(instance, 'reload').mockReturnThis()

    Query.reload()
    expect(reloadSpy).toHaveBeenCalledTimes(1)
  })

  it('should delegate reset() to QueryInstance.destroy()', () => {
    const instance = Query.getItem()
    const destroySpy = vi.spyOn(instance, 'destroy').mockReturnThis()

    Query.reset()
    expect(destroySpy).toHaveBeenCalledTimes(1)
  })
})
