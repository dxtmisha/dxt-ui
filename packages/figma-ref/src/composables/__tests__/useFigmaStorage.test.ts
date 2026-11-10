import { describe, it, expect, vi, beforeEach } from 'vitest'
import { effectScope, nextTick } from 'vue'
import { fetchStorage, sendStorage } from '@dxtmisha/figma'
import { useFigmaStorage } from '../useFigmaStorage'

vi.mock('@dxtmisha/figma', () => ({
  fetchStorage: vi.fn(),
  sendStorage: vi.fn()
}))

describe('useFigmaStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should call fetchStorage with name, id, defaultValue, and isOnce=false', () => {
      let receivedCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchStorage).mockImplementation((_name, onReceive) => {
        receivedCallback = onReceive
      })

      const { item, loading } = useFigmaStorage<string>('project-config', 'fallback', 'node:123')

      expect(fetchStorage).toHaveBeenCalledWith(
        'project-config',
        expect.any(Function),
        'node:123',
        'fallback',
        false
      )
      expect(loading.value).toBe(true)
      expect(item.value).toBeUndefined()

      expect(receivedCallback).toBeDefined()
      receivedCallback?.('active-config')

      expect(item.value).toBe('active-config')
      expect(loading.value).toBe(false)
    })

    it('should call sendStorage with id when item changes', async () => {
      const { item } = useFigmaStorage<string>('meta', undefined, 'node:999')

      item.value = 'new-meta'
      await nextTick()

      expect(sendStorage).toHaveBeenCalledWith('meta', 'new-meta', 'node:999')
    })

    it('should work without node id for document-level storage', async () => {
      const { item } = useFigmaStorage<string>('global-doc-key')

      expect(fetchStorage).toHaveBeenCalledWith(
        'global-doc-key',
        expect.any(Function),
        undefined,
        undefined,
        false
      )

      item.value = 'doc-value'
      await nextTick()

      expect(sendStorage).toHaveBeenCalledWith('global-doc-key', 'doc-value', undefined)
    })
  })

  describe('Boundary values, falsy inputs, and complex types', () => {
    it('should correctly preserve numeric 0 as valid value', async () => {
      let receivedCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchStorage).mockImplementation((_name, onReceive) => {
        receivedCallback = onReceive
      })

      const { item, loading } = useFigmaStorage<number>('zoom-level', 100)
      receivedCallback?.(0)

      expect(item.value).toBe(0)
      expect(loading.value).toBe(false)

      item.value = 50
      await nextTick()
      expect(sendStorage).toHaveBeenCalledWith('zoom-level', 50, undefined)
    })

    it('should correctly preserve boolean false as valid value', async () => {
      let receivedCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchStorage).mockImplementation((_name, onReceive) => {
        receivedCallback = onReceive
      })

      const { item, loading } = useFigmaStorage<boolean>('isLocked', true)
      receivedCallback?.(false)

      expect(item.value).toBe(false)
      expect(loading.value).toBe(false)

      item.value = true
      await nextTick()
      expect(sendStorage).toHaveBeenCalledWith('isLocked', true, undefined)
    })

    it('should handle complex objects and array collections', async () => {
      let receivedCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchStorage).mockImplementation((_name, onReceive) => {
        receivedCallback = onReceive
      })

      const complexPayload = { frameIds: ['1:1', '1:2'], meta: { author: 'DXT' } }
      const { item } = useFigmaStorage<typeof complexPayload>('complex-data')
      receivedCallback?.(complexPayload)

      expect(item.value).toEqual(complexPayload)

      const updatedPayload = { frameIds: ['1:1'], meta: { author: 'DXT' } }
      item.value = updatedPayload
      await nextTick()

      expect(sendStorage).toHaveBeenCalledWith('complex-data', updatedPayload, undefined)
    })

    it('should handle empty string and null values', async () => {
      let receivedCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchStorage).mockImplementation((_name, onReceive) => {
        receivedCallback = onReceive
      })

      const { item } = useFigmaStorage<string | null>('desc')
      receivedCallback?.('')
      expect(item.value).toBe('')

      receivedCallback?.(null)
      expect(item.value).toBeNull()
    })
  })

  describe('Echo prevention & Watcher behavior', () => {
    it('should not call sendStorage if value matches storageValue from callback', async () => {
      let receivedCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchStorage).mockImplementation((_name, onReceive) => {
        receivedCallback = onReceive
      })

      const { item } = useFigmaStorage<string>('node-status', undefined, 'node:1')
      receivedCallback?.('ready')
      await nextTick()
      vi.mocked(sendStorage).mockClear()

      item.value = 'ready'
      await nextTick()

      expect(sendStorage).not.toHaveBeenCalled()
    })
  })

  describe('Lifecycle and effect scope isolation', () => {
    it('should stop watching when the effect scope is stopped', async () => {
      const scope = effectScope()
      let storageItem: ReturnType<typeof useFigmaStorage<string>>['item'] | undefined

      scope.run(() => {
        const { item } = useFigmaStorage<string>('scoped-doc-key')
        storageItem = item
      })

      expect(storageItem).toBeDefined()

      scope.stop()

      if (storageItem) {
        storageItem.value = 'after-scope-stop'
      }
      await nextTick()

      expect(sendStorage).not.toHaveBeenCalledWith('scoped-doc-key', 'after-scope-stop', undefined)
    })
  })
})
