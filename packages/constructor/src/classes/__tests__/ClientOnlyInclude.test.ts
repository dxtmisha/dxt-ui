import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ClientOnlyInclude } from '../ClientOnlyInclude'

let mountedCallback: (() => void) | null = null

// Mock onMounted to capture the callback
vi.mock('vue', async () => {
  const original = await vi.importActual<typeof import('vue')>('vue')
  return {
    ...original,
    onMounted: (fn: () => void) => {
      mountedCallback = fn
    }
  }
})

describe('ClientOnlyInclude', () => {
  beforeEach(() => {
    mountedCallback = null
  })

  it('should initialize isMounted as false / должен инициализировать isMounted как false', () => {
    const instance = new ClientOnlyInclude()
    expect(instance.isMounted.value).toBe(false)
  })

  it('should set isMounted to true when onMounted triggers / должен устанавливать isMounted в true при вызове onMounted', () => {
    const instance = new ClientOnlyInclude()
    expect(instance.isMounted.value).toBe(false)

    if (mountedCallback) {
      mountedCallback()
    }

    expect(instance.isMounted.value).toBe(true)
  })

  describe('isRender behavior / поведение isRender', () => {
    it('should return false before mount and true after mount when no props are provided / должен возвращать false до монтирования и true после, если props не переданы', () => {
      const instance = new ClientOnlyInclude()

      expect(instance.isRender).toBe(false)

      if (mountedCallback) {
        mountedCallback()
      }

      expect(instance.isRender).toBe(true)
    })

    it('should return true both before and after mount when clientOnly is false / должен возвращать true как до, так и после монтирования, если clientOnly равен false', () => {
      const instance = new ClientOnlyInclude({ clientOnly: false })

      expect(instance.isRender).toBe(true)

      if (mountedCallback) {
        mountedCallback()
      }

      expect(instance.isRender).toBe(true)
    })

    it('should return false before mount and true after mount when clientOnly is true / должен возвращать false до монтирования и true после монтирования, если clientOnly равен true', () => {
      const instance = new ClientOnlyInclude({ clientOnly: true })

      expect(instance.isRender).toBe(false)

      if (mountedCallback) {
        mountedCallback()
      }

      expect(instance.isRender).toBe(true)
    })
  })
})
