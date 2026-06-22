import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Query } from '../Query'
import { QueryInstance } from '../QueryInstance'
import { ServerStorage } from '../ServerStorage'

describe('Query', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.spyOn(ServerStorage, 'get').mockImplementation((_, cb) => cb ? cb() : undefined)
  })

  it('should return a QueryInstance via ServerStorage', () => {
    const storageSpy = vi.spyOn(ServerStorage, 'get')
    const instance = Query.getItem()
    expect(instance).toBeInstanceOf(QueryInstance)
    expect(storageSpy).toHaveBeenCalledWith('__ui:query-instance__', expect.any(Function))
  })

  it('facade methods should correctly delegate calls to QueryInstance', () => {
    const instance = Query.getItem()
    vi.spyOn(ServerStorage, 'get').mockReturnValue(instance)

    // Intercept instance methods
    const getSpy = vi.spyOn(instance, 'get').mockReturnValue('mockedValue')
    const setSpy = vi.spyOn(instance, 'set').mockReturnThis()
    const addWatchSpy = vi.spyOn(instance, 'addWatch').mockReturnThis()
    const removeWatchSpy = vi.spyOn(instance, 'removeWatch').mockReturnThis()
    const reloadSpy = vi.spyOn(instance, 'reload').mockReturnThis()

    // Check get
    const result = Query.get('testKey', 'default')
    expect(getSpy).toHaveBeenCalledWith('testKey', 'default')
    expect(result).toBe('mockedValue')

    // Check set
    Query.set('testKey', 'newValue')
    expect(setSpy).toHaveBeenCalledWith('testKey', 'newValue')

    // Check watchers
    const cb = () => {}
    Query.addWatch('testKey', cb)
    expect(addWatchSpy).toHaveBeenCalledWith('testKey', cb)

    Query.removeWatch('testKey', cb)
    expect(removeWatchSpy).toHaveBeenCalledWith('testKey', cb)

    // Check reload
    Query.reload()
    expect(reloadSpy).toHaveBeenCalled()
  })
})
