/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { QueryInstance } from '../QueryInstance'
import { ServerStorage } from '../ServerStorage'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

const mockLocation = {
  search: '',
  pathname: '/path',
  hash: '#hash',
  get href() {
    return `http://localhost${this.pathname}${this.search}${this.hash}`
  },
  origin: 'http://localhost'
}
const mockHistory = {
  replaceState: vi.fn((_state: unknown, _title: string, url: string) => {
    const parsed = new URL(url, 'http://localhost')
    mockLocation.pathname = parsed.pathname
    mockLocation.search = parsed.search
    mockLocation.hash = parsed.hash
  })
}

vi.stubGlobal('location', mockLocation)
vi.stubGlobal('history', mockHistory)
vi.stubGlobal('addEventListener', vi.fn())
vi.stubGlobal('removeEventListener', vi.fn())
vi.stubGlobal('requestAnimationFrame', (callback: () => void) => callback())

describe('QueryInstance', () => {
  let queryInstance: QueryInstance

  beforeEach(() => {
    vi.restoreAllMocks()
    mockLocation.search = ''
    mockLocation.pathname = '/path'
    mockLocation.hash = '#hash'
    mockHistory.replaceState.mockClear()

    queryInstance = new QueryInstance()

    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('registers popstate once when reload is the first operation', () => {
    mockLocation.search = '?page=1'
    queryInstance.reload()
    expect(queryInstance.get('page')).toBe(1)
    expect(addEventListener).toHaveBeenCalledWith('popstate', expect.any(Function))

    mockLocation.search = '?page=2'
    queryInstance.reload()
    expect(queryInstance.get('page')).toBe(2)
    expect(vi.mocked(addEventListener).mock.calls.filter(([type]) => type === 'popstate')).toHaveLength(1)
  })

  it('should return default value if key is missing', () => {
    const value = queryInstance.get('testKey', 'defaultValue')
    expect(value).toBe('defaultValue')
  })

  it('should call defaultValue function', () => {
    const value = queryInstance.get('funcKey', () => 'funcValue')
    expect(value).toBe('funcValue')
  })

  it('should accept falsy defaultValue such as 0, false, or empty string', () => {
    expect(queryInstance.get('zeroKey', 0)).toBe(0)
    expect(queryInstance.get('falseKey', false)).toBe(false)
    expect(queryInstance.get('emptyKey', '')).toBe('')
  })

  it('should set and return a value', () => {
    queryInstance.set('myKey', 'myValue')
    expect(queryInstance.get('myKey')).toBe('myValue')
    expect(mockHistory.replaceState).toHaveBeenCalledWith(null, '', '/path?myKey=myValue#hash')
  })

  it('should correctly update query when set with a function call', () => {
    queryInstance.set('myKey', () => 'computedValue')
    expect(queryInstance.get('myKey')).toBe('computedValue')
  })

  it('should call handlers when value changes (watch)', () => {
    const firstCallback = vi.fn()
    const secondCallback = vi.fn()

    queryInstance.addWatch('watchKey', firstCallback)
    queryInstance.addWatch('watchKey', secondCallback)

    mockLocation.search = '?watchKey=newValue'
    queryInstance.reload()
    expect(firstCallback).toHaveBeenCalledWith('newValue')
    expect(secondCallback).toHaveBeenCalledWith('newValue')
  })

  it('should not call removed handlers', () => {
    const callback = vi.fn()
    queryInstance.addWatch('removeKey', callback)
    queryInstance.removeWatch('removeKey', callback)

    mockLocation.search = '?removeKey=value2'
    queryInstance.reload()
    expect(callback).not.toHaveBeenCalled()
  })

  it('chaining should work correctly', () => {
    const callback = () => {}
    expect(queryInstance.set('alpha', 1)).toBe(queryInstance)
    expect(queryInstance.addWatch('alpha', callback)).toBe(queryInstance)
    expect(queryInstance.removeWatch('alpha', callback)).toBe(queryInstance)
    expect(queryInstance.reload()).toBe(queryInstance)
  })

  it('should correctly parse complex search query parameters', () => {
    mockLocation.search = '?key1=value1&key2=true&key3=123'
    queryInstance.reload()
    expect(queryInstance.get('key1')).toBe('value1')
    expect(queryInstance.get('key2')).toBe(true)
    expect(queryInstance.get('key3')).toBe(123)
  })

  it('should not update location if isDomRuntime === false', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    ServerStorage.init(() => ({}))
    queryInstance.set('ssrKey', 'ssrValue')
    expect(mockHistory.replaceState).not.toHaveBeenCalled()
  })

  it('should correctly handle the timer in the update method', () => {
    vi.useFakeTimers()
    queryInstance.set('key1', 'value1')
    expect(mockHistory.replaceState).toHaveBeenCalled()

    queryInstance.set('key2', 'value2')

    vi.advanceTimersByTime(120)
    vi.useRealTimers()
  })

  it('reload should wait if block === true', () => {
    vi.useFakeTimers()
    queryInstance.set('key', 'value')

    const watcher = vi.fn()
    queryInstance.addWatch('key', watcher)
    mockLocation.search = '?key=updatedValue'

    queryInstance.reload()

    expect(watcher).not.toHaveBeenCalled()

    vi.advanceTimersByTime(32)
    expect(watcher).not.toHaveBeenCalled()

    vi.advanceTimersByTime(120)
    vi.advanceTimersByTime(32)

    expect(watcher).toHaveBeenCalledWith('updatedValue')

    vi.useRealTimers()
  })

  it('destroy should remove event listener and cancel pending reload timer', () => {
    vi.useFakeTimers()
    queryInstance.set('key', 'value')
    queryInstance.reload()

    // @ts-expect-error: inspecting protected reloadTimer
    expect(queryInstance.reloadTimer).toBeDefined()

    queryInstance.destroy()
    expect(removeEventListener).toHaveBeenCalledWith('popstate', expect.any(Function))
    // @ts-expect-error: inspecting protected reloadTimer
    expect(queryInstance.reloadTimer).toBeUndefined()

    vi.useRealTimers()
  })

  it('should handle popstate event listener and reload state from URL', () => {
    const watcher = vi.fn()
    queryInstance.get('page')
    queryInstance.addWatch('page', watcher)

    expect(addEventListener).toHaveBeenCalledWith('popstate', expect.any(Function))
    const popstateListener = vi.mocked(addEventListener).mock.calls.find(
      call => call[0] === 'popstate'
    )?.[1] as (() => void) | undefined

    expect(popstateListener).toBeDefined()

    mockLocation.search = '?page=5'
    popstateListener?.()

    expect(queryInstance.get('page')).toBe(5)
    expect(watcher).toHaveBeenCalledWith(5)
  })
})
