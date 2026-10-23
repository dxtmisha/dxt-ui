import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { HashInstance } from '../HashInstance'
import * as isDomRuntimeModule from '../../functions/isDomRuntime'

const mockLocation = { hash: '' }
const mockHistory = { replaceState: vi.fn() }

vi.stubGlobal('location', mockLocation)
vi.stubGlobal('history', mockHistory)
vi.stubGlobal('addEventListener', vi.fn())
vi.stubGlobal('removeEventListener', vi.fn())
vi.stubGlobal('requestAnimationFrame', (callback: () => void) => callback())

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

  it('should accept falsy defaultValue such as 0, false, or empty string', () => {
    expect(hashInstance.get('zeroKey', 0)).toBe(0)
    expect(hashInstance.get('falseKey', false)).toBe(false)
    expect(hashInstance.get('emptyKey', '')).toBe('')
  })

  it('should decode URL-encoded hash values and support non-word characters in keys', () => {
    mockLocation.hash = '#query=hello%20world;filter[type]=admin;encoded%5Bkey%5D=123'
    hashInstance.reload()

    expect(hashInstance.get('query')).toBe('hello world')
    expect(hashInstance.get('filter[type]')).toBe('admin')
    expect(hashInstance.get('encoded[key]')).toBe(123)
  })

  it('should gracefully handle malformed URI sequences in hash', () => {
    mockLocation.hash = '#badKey=%E0%A4%A'
    hashInstance.reload()

    expect(hashInstance.get('badKey')).toBe('%E0%A4%A')
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
    const firstCallback = vi.fn()
    const secondCallback = vi.fn()

    hashInstance.addWatch('watchKey', firstCallback)
    hashInstance.addWatch('watchKey', secondCallback)

    mockLocation.hash = '#watchKey=newValue'
    hashInstance.reload()
    expect(firstCallback).toHaveBeenCalledWith('newValue')
    expect(secondCallback).toHaveBeenCalledWith('newValue')
  })

  it('should not call removed handlers', () => {
    const callback = vi.fn()
    hashInstance.addWatch('removeKey', callback)
    hashInstance.removeWatch('removeKey', callback)

    mockLocation.hash = '#removeKey=value2'
    hashInstance.reload()
    expect(callback).not.toHaveBeenCalled()
  })

  it('chaining should work correctly', () => {
    const callback = () => {}
    expect(hashInstance.set('alpha', 1)).toBe(hashInstance)
    expect(hashInstance.addWatch('alpha', callback)).toBe(hashInstance)
    expect(hashInstance.removeWatch('alpha', callback)).toBe(hashInstance)
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

  it('should correctly handle the timer in the update method', () => {
    vi.useFakeTimers()
    hashInstance.set('key1', 'value1')
    expect(mockHistory.replaceState).toHaveBeenCalled()

    hashInstance.set('key2', 'value2')

    vi.advanceTimersByTime(120)
    vi.useRealTimers()
  })

  it('reload should wait if block === true', () => {
    vi.useFakeTimers()
    hashInstance.set('key', 'value')

    const watcher = vi.fn()
    hashInstance.addWatch('key', watcher)
    mockLocation.hash = '#key=updatedValue'

    hashInstance.reload()

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
    hashInstance.set('key', 'value')
    hashInstance.reload()

    // @ts-expect-error: inspecting protected reloadTimer
    expect(hashInstance.reloadTimer).toBeDefined()

    hashInstance.destroy()
    expect(removeEventListener).toHaveBeenCalledWith('hashchange', expect.any(Function))
    // @ts-expect-error: inspecting protected reloadTimer
    expect(hashInstance.reloadTimer).toBeUndefined()

    vi.useRealTimers()
  })
})
