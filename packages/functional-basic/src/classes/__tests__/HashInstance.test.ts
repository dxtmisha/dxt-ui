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

  it('должен возвращать значение по умолчанию, если ключа нет', () => {
    const value = hashInstance.get('testKey', 'defaultValue')
    expect(value).toBe('defaultValue')
  })

  it('должен вызывать функцию defaultValue', () => {
    const value = hashInstance.get('funcKey', () => 'funcValue')
    expect(value).toBe('funcValue')
  })

  it('должен устанавливать и возвращать значение', () => {
    hashInstance.set('myKey', 'myValue')
    expect(hashInstance.get('myKey')).toBe('myValue')
    expect(mockHistory.replaceState).toHaveBeenCalledWith(null, '', '#myKey=myValue')
  })

  it('должен корректно обновлять hash при set с вызовом функции', () => {
    hashInstance.set('myKey', () => 'computedValue')
    expect(hashInstance.get('myKey')).toBe('computedValue')
  })

  it('должен вызывать обработчики при изменении значения (watch)', () => {
    const callback1 = vi.fn()
    const callback2 = vi.fn()

    hashInstance.addWatch('watchKey', callback1)
    hashInstance.addWatch('watchKey', callback2)

    // Симулируем изменение хэша извне
    mockLocation.hash = '#watchKey=newValue'
    hashInstance.reload()
    expect(callback1).toHaveBeenCalledWith('newValue')
    expect(callback2).toHaveBeenCalledWith('newValue')
  })

  it('не должен вызывать удаленные обработчики', () => {
    const callback = vi.fn()
    hashInstance.addWatch('removeKey', callback)
    hashInstance.removeWatch('removeKey', callback)

    // Симулируем изменение хэша извне
    mockLocation.hash = '#removeKey=value2'
    hashInstance.reload()
    expect(callback).not.toHaveBeenCalled()
  })

  it('цепочка вызовов (chaining) должна работать корректно', () => {
    const cb = () => {}
    expect(hashInstance.set('a', 1)).toBe(hashInstance)
    expect(hashInstance.addWatch('a', cb)).toBe(hashInstance)
    expect(hashInstance.removeWatch('a', cb)).toBe(hashInstance)
    expect(hashInstance.reload()).toBe(hashInstance)
  })

  it('корректно парсит сложные hash-строки', () => {
    mockLocation.hash = '#key1=value1;key2:value2'
    hashInstance.reload()
    expect(hashInstance.get('key1')).toBe('value1')
    expect(hashInstance.get('key2')).toBe('value2')
  })

  it('не обновляет location, если isDomRuntime === false', () => {
    vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
    hashInstance.set('ssrKey', 'ssrValue')
    expect(mockHistory.replaceState).not.toHaveBeenCalled()
  })

  it('должен корректно работать с таймером в методе update', async () => {
    vi.useFakeTimers()
    hashInstance.set('key1', 'value1')
    expect(mockHistory.replaceState).toHaveBeenCalled()
    // block должен быть true

    hashInstance.set('key2', 'value2')
    // block все еще true, update не должен вызываться повторно немедленно (хотя в коде вызывается, но блокируется таймером)
    // На самом деле метод update вызывает clearTimeout(this.time) и устанавливает block = true

    vi.advanceTimersByTime(120)
    // block должен стать false
    vi.useRealTimers()
  })

  it('reload должен ждать, если block === true', async () => {
    vi.useFakeTimers()
    hashInstance.set('key', 'val') // устанавливает block = true на 120мс

    const initSpy = vi.spyOn(hashInstance as any, 'initData')
    hashInstance.reload()

    expect(initSpy).not.toHaveBeenCalled()

    // Нужно запустить таймеры, чтобы setTimeout в reload сработал
    vi.advanceTimersByTime(32)
    // После 32мс setTimeout вызывает reload() еще раз.
    // В этот момент block все еще true (так как прошло только 32мс из 120мс).
    // Значит reload() опять вызовет setTimeout(..., 32).

    expect(initSpy).not.toHaveBeenCalled()

    vi.advanceTimersByTime(120)
    // Теперь прошло > 120мс, block должен стать false по таймеру из update.
    // Но сам таймер из update тоже должен сработать.

    // Ждем еще немного, чтобы сработал очередной setTimeout из reload
    vi.advanceTimersByTime(32)

    expect(initSpy).toHaveBeenCalled()

    vi.useRealTimers()
  })
})
