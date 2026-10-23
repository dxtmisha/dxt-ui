import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { UrlInstanceAbstract } from '../UrlInstanceAbstract'

class ConcreteUrlInstance extends UrlInstanceAbstract {
  public mockLocation: Record<string, unknown> = {}
  public initCalls = 0
  public updateCalls = 0
  public removeListenerCalls = 0

  public setBlock(isBlocked: boolean, blockDurationMs = 120): void {
    clearTimeout(this.time)
    this.block = isBlocked

    if (isBlocked) {
      this.time = setTimeout(() => {
        this.block = false
      }, blockDurationMs)
    }
  }

  public getReloadTimer(): ReturnType<typeof setTimeout> | undefined {
    return this.reloadTimer
  }

  protected init(): this {
    this.initCalls++
    this.initData()
    return this
  }

  protected getLocation(): Record<string, unknown> {
    return { ...this.mockLocation }
  }

  protected update(): this {
    this.updateCalls++
    return this
  }

  protected removeListener(): void {
    this.removeListenerCalls++
  }
}

describe('UrlInstanceAbstract', () => {
  let instance: ConcreteUrlInstance

  beforeEach(() => {
    instance = new ConcreteUrlInstance()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  describe('get and set', () => {
    it('should initialize lazily on first get() and return undefined for missing keys', () => {
      expect(instance.initCalls).toBe(0)
      expect(instance.get('nonexistent')).toBeUndefined()
      expect(instance.initCalls).toBe(1)
    })

    it('should apply defaultValue when key is not present in data', () => {
      expect(instance.get('theme', 'dark')).toBe('dark')
      expect(instance.updateCalls).toBe(1)
      expect(instance.get('theme', 'light')).toBe('dark')
      expect(instance.updateCalls).toBe(1)
    })

    it('should evaluate function defaultValue when key is missing', () => {
      const factory = vi.fn(() => 'computed-default')
      expect(instance.get('computedKey', factory)).toBe('computed-default')
      expect(factory).toHaveBeenCalledTimes(1)
    })

    it('should accept falsy defaultValue values (0, false, empty string)', () => {
      expect(instance.get('count', 0)).toBe(0)
      expect(instance.get('enabled', false)).toBe(false)
      expect(instance.get('query', '')).toBe('')
      expect(instance.updateCalls).toBe(3)
    })

    it('should only call update() in set() when the value actually changes', () => {
      instance.set('page', 1)
      expect(instance.updateCalls).toBe(1)

      instance.set('page', 1)
      expect(instance.updateCalls).toBe(1)

      instance.set('page', () => 2)
      expect(instance.updateCalls).toBe(2)
      expect(instance.get('page')).toBe(2)
    })
  })

  describe('addWatch and removeWatch', () => {
    it('should notify watchers when reload() detects changed values', () => {
      const firstWatcher = vi.fn()
      const secondWatcher = vi.fn()
      const unchangedWatcher = vi.fn()

      instance.mockLocation = { tab: 'home', unchanged: 'same' }
      instance.reload()

      instance.addWatch('tab', firstWatcher)
      instance.addWatch('tab', secondWatcher)
      instance.addWatch('unchanged', unchangedWatcher)

      instance.mockLocation = { tab: 'profile', unchanged: 'same' }
      instance.reload()

      expect(firstWatcher).toHaveBeenCalledTimes(1)
      expect(firstWatcher).toHaveBeenCalledWith('profile')
      expect(secondWatcher).toHaveBeenCalledTimes(1)
      expect(secondWatcher).toHaveBeenCalledWith('profile')
      expect(unchangedWatcher).not.toHaveBeenCalled()
    })

    it('should stop notifying removed watchers', () => {
      const removedWatcher = vi.fn()
      const keptWatcher = vi.fn()

      instance.addWatch('filter', removedWatcher)
      instance.addWatch('filter', keptWatcher)
      instance.removeWatch('filter', removedWatcher)
      instance.removeWatch('nonexistent', removedWatcher)

      instance.mockLocation = { filter: 'active' }
      instance.reload()

      expect(removedWatcher).not.toHaveBeenCalled()
      expect(keptWatcher).toHaveBeenCalledWith('active')
    })
  })

  describe('reload and block debounce', () => {
    it('should immediately reload when block is false', () => {
      instance.mockLocation = { search: 'instant' }
      instance.reload()

      expect(instance.get('search')).toBe('instant')
      expect(instance.getReloadTimer()).toBeUndefined()
    })

    it('should debounce and deduplicate multiple reload() calls while block is true', () => {
      vi.useFakeTimers()

      const watcher = vi.fn()
      instance.addWatch('status', watcher)
      instance.mockLocation = { status: 'updated' }

      instance.setBlock(true, 100)

      instance.reload()
      const firstTimer = instance.getReloadTimer()
      expect(firstTimer).toBeDefined()
      expect(watcher).not.toHaveBeenCalled()

      instance.reload()
      const secondTimer = instance.getReloadTimer()
      expect(secondTimer).toBeDefined()

      // Advance 32ms: still blocked (100ms total), so reload reschedules another 32ms timer
      vi.advanceTimersByTime(32)
      expect(watcher).not.toHaveBeenCalled()
      expect(instance.getReloadTimer()).toBeDefined()

      // Advance past the 100ms block window and let the next 32ms reload timer fire
      vi.advanceTimersByTime(100)
      expect(watcher).toHaveBeenCalledTimes(1)
      expect(watcher).toHaveBeenCalledWith('updated')
      expect(instance.getReloadTimer()).toBeUndefined()
    })
  })

  describe('destroy', () => {
    it('should clear timers and call removeListener() on destroy()', () => {
      vi.useFakeTimers()

      const watcher = vi.fn()
      instance.addWatch('key', watcher)
      instance.mockLocation = { key: 'after-destroy' }

      instance.setBlock(true, 120)
      instance.reload()
      expect(instance.getReloadTimer()).toBeDefined()

      const returnValue = instance.destroy()
      expect(returnValue).toBe(instance)
      expect(instance.getReloadTimer()).toBeUndefined()
      expect(instance.removeListenerCalls).toBe(1)

      vi.advanceTimersByTime(200)
      expect(watcher).not.toHaveBeenCalled()
    })
  })
})
