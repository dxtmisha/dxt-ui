import { describe, it, expect, vi, beforeEach } from 'vitest'
import { effectScope, nextTick } from 'vue'
import { fetchClientStorage, sendClientStorage } from '@dxtmisha/figma'
import { useFigmaClientStorage } from '../useFigmaClientStorage'

vi.mock('@dxtmisha/figma', () => ({
  fetchClientStorage: vi.fn(),
  sendClientStorage: vi.fn()
}))

describe('useFigmaClientStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should call fetchClientStorage with name, callback, defaultValue, and isOnce=false', () => {
      let receivedCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchClientStorage).mockImplementation((_name, onReceive) => {
        receivedCallback = onReceive
      })

      const { item, loading } = useFigmaClientStorage<string>('theme', 'light')

      expect(fetchClientStorage).toHaveBeenCalledWith('theme', expect.any(Function), 'light', false)
      expect(loading.value).toBe(true)
      expect(item.value).toBeUndefined()

      expect(receivedCallback).toBeDefined()
      receivedCallback?.('dark')

      expect(item.value).toBe('dark')
      expect(loading.value).toBe(false)
    })

    it('should call sendClientStorage when item is modified by the consumer', async () => {
      const { item } = useFigmaClientStorage<string>('theme')

      item.value = 'solarized'
      await nextTick()

      expect(sendClientStorage).toHaveBeenCalledWith('theme', 'solarized')
    })
  })

  describe('Boundary values, falsy inputs, and complex types', () => {
    it('should correctly preserve numeric 0 as valid value', async () => {
      let receivedCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchClientStorage).mockImplementation((_name, onReceive) => {
        receivedCallback = onReceive
      })

      const { item, loading } = useFigmaClientStorage<number>('count', 10)
      receivedCallback?.(0)

      expect(item.value).toBe(0)
      expect(loading.value).toBe(false)

      item.value = 42
      await nextTick()
      expect(sendClientStorage).toHaveBeenCalledWith('count', 42)
    })

    it('should correctly preserve boolean false as valid value', async () => {
      let receivedCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchClientStorage).mockImplementation((_name, onReceive) => {
        receivedCallback = onReceive
      })

      const { item, loading } = useFigmaClientStorage<boolean>('enabled', true)
      receivedCallback?.(false)

      expect(item.value).toBe(false)
      expect(loading.value).toBe(false)

      item.value = true
      await nextTick()
      expect(sendClientStorage).toHaveBeenCalledWith('enabled', true)
    })

    it('should handle complex object structures and arrays', async () => {
      let receivedCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchClientStorage).mockImplementation((_name, onReceive) => {
        receivedCallback = onReceive
      })

      const initialSettings = { autoSync: true, tags: ['figma', 'ui'] }
      const { item } = useFigmaClientStorage<typeof initialSettings>('settings')
      receivedCallback?.(initialSettings)

      expect(item.value).toEqual(initialSettings)

      const updatedSettings = { autoSync: false, tags: ['figma'] }
      item.value = updatedSettings
      await nextTick()

      expect(sendClientStorage).toHaveBeenCalledWith('settings', updatedSettings)
    })

    it('should handle empty string and null values', async () => {
      let receivedCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchClientStorage).mockImplementation((_name, onReceive) => {
        receivedCallback = onReceive
      })

      const { item } = useFigmaClientStorage<string | null>('token')
      receivedCallback?.('')
      expect(item.value).toBe('')

      receivedCallback?.(null)
      expect(item.value).toBeNull()
    })
  })

  describe('Echo prevention & Watcher behavior', () => {
    it('should not call sendClientStorage if value matches storageValue from callback', async () => {
      let receivedCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchClientStorage).mockImplementation((_name, onReceive) => {
        receivedCallback = onReceive
      })

      const { item } = useFigmaClientStorage<string>('profile')
      receivedCallback?.('active')
      await nextTick()
      vi.mocked(sendClientStorage).mockClear()

      // Setting to the exact value received from storageValue
      item.value = 'active'
      await nextTick()

      expect(sendClientStorage).not.toHaveBeenCalled()
    })

    it('should not re-trigger item assignment if incoming callback matches existing item.value', () => {
      let receivedCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchClientStorage).mockImplementation((_name, onReceive) => {
        receivedCallback = onReceive
      })

      const { item } = useFigmaClientStorage<string>('profile')
      item.value = 'pre-set'

      receivedCallback?.('pre-set')
      expect(item.value).toBe('pre-set')
    })
  })

  describe('Lifecycle and effect scope isolation', () => {
    it('should stop watching when the effect scope is stopped', async () => {
      const scope = effectScope()
      let storageItem: ReturnType<typeof useFigmaClientStorage<string>>['item'] | undefined

      scope.run(() => {
        const { item } = useFigmaClientStorage<string>('scoped-key')
        storageItem = item
      })

      expect(storageItem).toBeDefined()

      scope.stop()

      if (storageItem) {
        storageItem.value = 'after-scope-stop'
      }
      await nextTick()

      expect(sendClientStorage).not.toHaveBeenCalledWith('scoped-key', 'after-scope-stop')
    })
  })
})
