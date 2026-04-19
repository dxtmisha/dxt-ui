import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Hash } from '../Hash'
import { HashInstance } from '../HashInstance'
import { ServerStorage } from '../ServerStorage'

describe('Hash', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(ServerStorage, 'get').mockImplementation((_, cb) => cb ? cb() : undefined)
  })

  it('должен возвращать экземпляр HashInstance через ServerStorage', () => {
    const storageSpy = vi.spyOn(ServerStorage, 'get')
    const instance = Hash.getItem()
    expect(instance).toBeInstanceOf(HashInstance)
    expect(storageSpy).toHaveBeenCalledWith('__ui:hash-instance__', expect.any(Function))
  })

  it('методы фасада должны корректно делегировать вызовы в HashInstance', () => {
    const instance = Hash.getItem()
    vi.spyOn(ServerStorage, 'get').mockReturnValue(instance)

    // Перехватываем методы инстанса
    const getSpy = vi.spyOn(instance, 'get').mockReturnValue('mockedValue')
    const setSpy = vi.spyOn(instance, 'set').mockReturnThis()
    const addWatchSpy = vi.spyOn(instance, 'addWatch').mockReturnThis()
    const removeWatchSpy = vi.spyOn(instance, 'removeWatch').mockReturnThis()
    const reloadSpy = vi.spyOn(instance, 'reload').mockReturnThis()

    // Проверяем get
    const result = Hash.get('testKey', 'default')
    expect(getSpy).toHaveBeenCalledWith('testKey', 'default')
    expect(result).toBe('mockedValue')

    // Проверяем set
    Hash.set('testKey', 'newValue')
    expect(setSpy).toHaveBeenCalledWith('testKey', 'newValue')

    // Проверяем watchers
    const cb = () => {}
    Hash.addWatch('testKey', cb)
    expect(addWatchSpy).toHaveBeenCalledWith('testKey', cb)

    Hash.removeWatch('testKey', cb)
    expect(removeWatchSpy).toHaveBeenCalledWith('testKey', cb)

    // Проверяем reload
    Hash.reload()
    expect(reloadSpy).toHaveBeenCalled()
  })
})
