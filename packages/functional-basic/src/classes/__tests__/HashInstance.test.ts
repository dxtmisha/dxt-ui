import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { HashInstance } from '../HashInstance'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

const mockLocation = { hash: '' }
const mockHistory = { replaceState: vi.fn() }

vi.stubGlobal('location', mockLocation)
vi.stubGlobal('history', mockHistory)
vi.stubGlobal('addEventListener', vi.fn())
vi.stubGlobal('requestAnimationFrame', (cb: () => void) => cb())

describe('HashInstance', () => {
  let hashInstance: HashInstance

  beforeEach(() => {
    vi.restoreAllMocks()
    mockLocation.hash = ''
    mockHistory.replaceState.mockClear()

    hashInstance = new HashInstance()

    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(true)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return default value if key is missing', () => {
    const value = hashInstance.get('testKey', 'defaultValue')
    expect(value).toBe('defaultValue')
  })

  it('should call defaultValue function', () => {
    const value = hashInstance.get('funcKey', () => 'funcValue')
    expect(value).toBe('funcValue')
  })

  it('should set and return a value', () => {
    hashInstance.set('myKey', 'myValue')
    expect(hashInstance.get('myKey')).toBe('myValue')
    expect(mockHistory.replaceState).toHaveBeenCalledWith(null, '', '#myKey=myValue')
  })

  it('should correctly update hash when set with a function call', () => {
    hashInstance.set('myKey', () => 'computedValue')
    expect(hashInstance.get('myKey')).toBe('computedValue')
  })

  it('should call handlers when value changes (watch)', () => {
    const callback1 = vi.fn()
    const callback2 = vi.fn()

    hashInstance.addWatch('watchKey', callback1)
    hashInstance.addWatch('watchKey', callback2)

    // Simulate hash change from outside
    mockLocation.hash = '#watchKey=newValue'
    hashInstance.reload()
    expect(callback1).toHaveBeenCalledWith('newValue')
    expect(callback2).toHaveBeenCalledWith('newValue')
  })

  it('should not call removed handlers', () => {
    const callback = vi.fn()
    hashInstance.addWatch('removeKey', callback)
    hashInstance.removeWatch('removeKey', callback)

    // Simulate hash change from outside
    mockLocation.hash = '#removeKey=value2'
    hashInstance.reload()
    expect(callback).not.toHaveBeenCalled()
  })

  it('chaining should work correctly', () => {
    const cb = () => {}
    expect(hashInstance.set('a', 1)).toBe(hashInstance)
    expect(hashInstance.addWatch('a', cb)).toBe(hashInstance)
    expect(hashInstance.removeWatch('a', cb)).toBe(hashInstance)
    expect(hashInstance.reload()).toBe(hashInstance)
  })

  it('should correctly parse complex hash strings', () => {
    mockLocation.hash = '#key1=value1;key2:value2'
    hashInstance.reload()
    expect(hashInstance.get('key1')).toBe('value1')
    expect(hashInstance.get('key2')).toBe('value2')
  })

  it('should not update location if isDomRuntime === false', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    hashInstance.set('ssrKey', 'ssrValue')
    expect(mockHistory.replaceState).not.toHaveBeenCalled()
  })

  it('should correctly handle the timer in the update method', async () => {
    vi.useFakeTimers()
    hashInstance.set('key1', 'value1')
    expect(mockHistory.replaceState).toHaveBeenCalled()
    // block should be true

    hashInstance.set('key2', 'value2')
    // block is still true, update should not be called again immediately (although it's called in code, it's blocked by the timer)
    // Actually the update method calls clearTimeout(this.time) and sets block = true

    vi.advanceTimersByTime(120)
    // block should be false
    vi.useRealTimers()
  })

  it('reload should wait if block === true', async () => {
    vi.useFakeTimers()
    hashInstance.set('key', 'val') // sets block = true for 120ms

    const initSpy = vi.spyOn(hashInstance as any, 'initData')
    hashInstance.reload()

    expect(initSpy).not.toHaveBeenCalled()

    // Need to run timers so setTimeout in reload triggers
    vi.advanceTimersByTime(32)
    // After 32ms setTimeout calls reload() again.
    // At this point block is still true (as only 32ms of 120ms passed).
    // So reload() will call setTimeout(..., 32) again.

    expect(initSpy).not.toHaveBeenCalled()

    vi.advanceTimersByTime(120)
    // Now > 120ms passed, block should become false by the timer from update.
    // But the timer from update itself should also trigger.

    // Wait a bit more for the next setTimeout from reload to trigger
    vi.advanceTimersByTime(32)

    expect(initSpy).toHaveBeenCalled()

    vi.useRealTimers()
  })
})
