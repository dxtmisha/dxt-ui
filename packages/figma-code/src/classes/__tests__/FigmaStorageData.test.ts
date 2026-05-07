import { describe, it, expect } from 'vitest'
import { FigmaStorageData } from '../FigmaStorageData'
import { FigmaPostCode } from '@dxtmisha/figma'

describe('FigmaStorageData', () => {
  it('getName() should return a key starting with FigmaPostCode', () => {
    const storageData = new FigmaStorageData('test-name')
    const name = storageData.getName()
    expect(name).toContain(FigmaPostCode.get())
    expect(name).toContain('test-name')
  })

  it('set() and get() should work correctly', () => {
    const storageData = new FigmaStorageData<string>('test')
    storageData.set('hello', 123)
    expect(storageData.get()).toBe('hello')
    expect(storageData.getAge()).toBe(123)
  })

  it('isValue() should check cache', () => {
    const storageData = new FigmaStorageData<string>('test', 60) // 60s cache
    const now = Date.now()

    storageData.set('hello', now - 30 * 1000) // 30s ago
    expect(storageData.isValue()).toBe(true)

    storageData.set('hello', now - 90 * 1000) // 90s ago
    expect(storageData.isValue()).toBe(false)
  })

  it('update() should set current age', () => {
    const storageData = new FigmaStorageData<string>('test')
    const now = Date.now()
    storageData.update('new-val')
    expect(storageData.get()).toBe('new-val')
    expect(storageData.getAge()).toBeGreaterThanOrEqual(now)
  })

  it('toValue() should return correct object', () => {
    const storageData = new FigmaStorageData<string>('test')
    storageData.set('val', 100)
    expect(storageData.toValue()).toEqual({ value: 'val', age: 100 })
  })
})
