import { describe, it, expect, beforeEach, vi } from 'vitest'
import { HashInstance } from '../HashInstance'
import { isDomRuntime } from '../../functions/isDomRuntime'

// Мокаем isDomRuntime, чтобы контролировать окружение
vi.mock('../../functions/isDomRuntime', () => ({
  isDomRuntime: vi.fn(() => true)
}))

describe('HashInstance', () => {
  let hashInstance: HashInstance

  beforeEach(() => {
    hashInstance = new HashInstance()
    
    // Очищаем DOM API перед каждым тестом
    if (typeof window !== 'undefined') {
      window.location.hash = ''
    }
  })

  it('должен возвращать значение по умолчанию, если ключа нет', () => {
    const value = hashInstance.get('testKey', 'defaultValue')
    expect(value).toBe('defaultValue')
  })

  it('должен устанавливать и возвращать значение', () => {
    hashInstance.set('myKey', 'myValue')
    expect(hashInstance.get('myKey')).toBe('myValue')
  })

  it('должен вызывать обработчики при изменении значения (watch)', () => {
    const callback = vi.fn()
    hashInstance.addWatch('watchKey', callback)
    
    hashInstance.set('watchKey', 'newValue')
    
    // Эмуляция reload, который должен триггерить вызовы
    // Для этого нужно, чтобы в location.hash появилось значение
    if (typeof window !== 'undefined') {
      window.location.hash = '#watchKey=newValue'
      hashInstance.reload()
      expect(callback).toHaveBeenCalledWith('newValue')
    }
  })

  it('не должен вызывать удаленные обработчики', () => {
    const callback = vi.fn()
    hashInstance.addWatch('removeKey', callback)
    hashInstance.removeWatch('removeKey', callback)
    
    hashInstance.set('removeKey', 'value2')
    
    if (typeof window !== 'undefined') {
      window.location.hash = '#removeKey=value2'
      hashInstance.reload()
      expect(callback).not.toHaveBeenCalled()
    }
  })

  it('цепочка вызовов (chaining) должна работать корректно', () => {
    const cb = () => {}
    expect(hashInstance.set('a', 1)).toBe(hashInstance)
    expect(hashInstance.addWatch('a', cb)).toBe(hashInstance)
    expect(hashInstance.removeWatch('a', cb)).toBe(hashInstance)
    expect(hashInstance.reload()).toBe(hashInstance)
  })
})
