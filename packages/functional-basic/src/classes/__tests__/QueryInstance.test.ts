/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { QueryInstance } from '../QueryInstance'
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
  replaceState: vi.fn((_state, _title, url) => {
    // Sync mockLocation components from url
    const parsed = new URL(url, 'http://localhost')
    mockLocation.pathname = parsed.pathname
    mockLocation.search = parsed.search
    mockLocation.hash = parsed.hash
  })
}

vi.stubGlobal('location', mockLocation)
vi.stubGlobal('history', mockHistory)
vi.stubGlobal('addEventListener', vi.fn())
vi.stubGlobal('requestAnimationFrame', (cb: () => void) => cb())

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

  it('should return default value if key is missing', () => {
    const value = queryInstance.get('testKey', 'defaultValue')
    expect(value).toBe('defaultValue')
  })

  it('should call defaultValue function', () => {
    const value = queryInstance.get('funcKey', () => 'funcValue')
    expect(value).toBe('funcValue')
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
    const callback1 = vi.fn()
    const callback2 = vi.fn()

    queryInstance.addWatch('watchKey', callback1)
    queryInstance.addWatch('watchKey', callback2)

    // Simulate query change from outside
    mockLocation.search = '?watchKey=newValue'
    queryInstance.reload()
    expect(callback1).toHaveBeenCalledWith('newValue')
    expect(callback2).toHaveBeenCalledWith('newValue')
  })

  it('should not call removed handlers', () => {
    const callback = vi.fn()
    queryInstance.addWatch('removeKey', callback)
    queryInstance.removeWatch('removeKey', callback)

    // Simulate query change from outside
    mockLocation.search = '?removeKey=value2'
    queryInstance.reload()
    expect(callback).not.toHaveBeenCalled()
  })

  it('chaining should work correctly', () => {
    const cb = () => {}
    expect(queryInstance.set('a', 1)).toBe(queryInstance)
    expect(queryInstance.addWatch('a', cb)).toBe(queryInstance)
    expect(queryInstance.removeWatch('a', cb)).toBe(queryInstance)
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
    queryInstance.set('ssrKey', 'ssrValue')
    expect(mockHistory.replaceState).not.toHaveBeenCalled()
  })

  it('should correctly handle the timer in the update method', async () => {
    vi.useFakeTimers()
    queryInstance.set('key1', 'value1')
    expect(mockHistory.replaceState).toHaveBeenCalled()

    queryInstance.set('key2', 'value2')

    vi.advanceTimersByTime(120)
    vi.useRealTimers()
  })

  it('reload should wait if block === true', async () => {
    vi.useFakeTimers()
    queryInstance.set('key', 'val') // sets block = true for 120ms

    const initSpy = vi.spyOn(queryInstance as any, 'initData')
    queryInstance.reload()

    expect(initSpy).not.toHaveBeenCalled()

    vi.advanceTimersByTime(32)
    expect(initSpy).not.toHaveBeenCalled()

    vi.advanceTimersByTime(120)
    vi.advanceTimersByTime(32)

    expect(initSpy).toHaveBeenCalled()

    vi.useRealTimers()
  })
})
