// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Hash } from '../Hash'
import { HashInstance } from '../HashInstance'
import { ServerStorage } from '../ServerStorage'

describe('Hash', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    ServerStorage.remove('__ui:hash-instance__')
  })

  it('should return a HashInstance via ServerStorage and reuse it across calls', () => {
    const storageSpy = vi.spyOn(ServerStorage, 'get')
    const firstInstance = Hash.getItem()
    const secondInstance = Hash.getItem()

    expect(firstInstance).toBeInstanceOf(HashInstance)
    expect(firstInstance).toBe(secondInstance)
    expect(storageSpy).toHaveBeenCalledWith('__ui:hash-instance__', expect.any(Function))
  })

  it('should isolate instances across different SSR contexts in ServerStorage', () => {
    const firstContextInstance = new HashInstance()
    const secondContextInstance = new HashInstance()

    const storageSpy = vi.spyOn(ServerStorage, 'get')
      .mockReturnValueOnce(firstContextInstance)
      .mockReturnValueOnce(secondContextInstance)

    expect(Hash.getItem()).toBe(firstContextInstance)
    expect(Hash.getItem()).toBe(secondContextInstance)
    expect(firstContextInstance).not.toBe(secondContextInstance)

    storageSpy.mockRestore()
  })

  it('should delegate get() and set() calls to HashInstance', () => {
    const instance = Hash.getItem()
    const getSpy = vi.spyOn(instance, 'get').mockReturnValue('mockedValue')
    const setSpy = vi.spyOn(instance, 'set').mockReturnThis()

    const result = Hash.get('testKey', 'defaultValue')
    expect(getSpy).toHaveBeenCalledWith('testKey', 'defaultValue')
    expect(result).toBe('mockedValue')

    Hash.set('testKey', 'newValue')
    expect(setSpy).toHaveBeenCalledWith('testKey', 'newValue')
  })

  it('should delegate addWatch() and removeWatch() calls to HashInstance', () => {
    const instance = Hash.getItem()
    const addWatchSpy = vi.spyOn(instance, 'addWatch').mockReturnThis()
    const removeWatchSpy = vi.spyOn(instance, 'removeWatch').mockReturnThis()

    const callback = vi.fn()
    Hash.addWatch('watchedKey', callback)
    expect(addWatchSpy).toHaveBeenCalledWith('watchedKey', callback)

    Hash.removeWatch('watchedKey', callback)
    expect(removeWatchSpy).toHaveBeenCalledWith('watchedKey', callback)
  })

  it('should delegate reload() to HashInstance', () => {
    const instance = Hash.getItem()
    const reloadSpy = vi.spyOn(instance, 'reload').mockReturnThis()

    Hash.reload()
    expect(reloadSpy).toHaveBeenCalledTimes(1)
  })

  it('should delegate reset() to HashInstance.destroy()', () => {
    const instance = Hash.getItem()
    const destroySpy = vi.spyOn(instance, 'destroy').mockReturnThis()

    Hash.reset()
    expect(destroySpy).toHaveBeenCalledTimes(1)
  })
})
