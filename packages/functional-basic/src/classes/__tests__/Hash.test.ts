import { describe, it, expect, vi } from 'vitest'
import { Hash } from '../Hash'
import { HashInstance } from '../HashInstance'

describe('Hash', () => {
  it('должен возвращать экземпляр HashInstance', () => {
    const instance = Hash.getItem()
    expect(instance).toBeInstanceOf(HashInstance)
  })

  it('методы фасада должны корректно делегировать вызовы в HashInstance', () => {
    const instance = Hash.getItem()
    
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
