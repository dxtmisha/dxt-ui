import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Hash } from '../Hash'
import { HashInstance } from '../HashInstance'
import { ServerStorage } from '../ServerStorage'

describe('Hash', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(ServerStorage, 'get').mockImplementation((_, cb) => cb ? cb() : undefined)
  })

  it('should return a HashInstance via ServerStorage', () => {
    const storageSpy = vi.spyOn(ServerStorage, 'get')
    const instance = Hash.getItem()
    expect(instance).toBeInstanceOf(HashInstance)
    expect(storageSpy).toHaveBeenCalledWith('__ui:hash-instance__', expect.any(Function))
  })

  it('facade methods should correctly delegate calls to HashInstance', () => {
    const instance = Hash.getItem()
    vi.spyOn(ServerStorage, 'get').mockReturnValue(instance)

    // Intercept instance methods
    const getSpy = vi.spyOn(instance, 'get').mockReturnValue('mockedValue')
    const setSpy = vi.spyOn(instance, 'set').mockReturnThis()
    const addWatchSpy = vi.spyOn(instance, 'addWatch').mockReturnThis()
    const removeWatchSpy = vi.spyOn(instance, 'removeWatch').mockReturnThis()
    const reloadSpy = vi.spyOn(instance, 'reload').mockReturnThis()

    // Check get
    const result = Hash.get('testKey', 'default')
    expect(getSpy).toHaveBeenCalledWith('testKey', 'default')
    expect(result).toBe('mockedValue')

    // Check set
    Hash.set('testKey', 'newValue')
    expect(setSpy).toHaveBeenCalledWith('testKey', 'newValue')

    // Check watchers
    const cb = () => {}
    Hash.addWatch('testKey', cb)
    expect(addWatchSpy).toHaveBeenCalledWith('testKey', cb)

    Hash.removeWatch('testKey', cb)
    expect(removeWatchSpy).toHaveBeenCalledWith('testKey', cb)

    // Check reload
    Hash.reload()
    expect(reloadSpy).toHaveBeenCalled()
  })
})
