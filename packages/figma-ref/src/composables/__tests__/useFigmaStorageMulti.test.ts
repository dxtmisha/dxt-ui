import { describe, it, expect, vi, beforeEach } from 'vitest'
import { effectScope, nextTick, ref } from 'vue'
import {
  fetchClientStorage,
  fetchStorage,
  sendClientStorage,
  sendStorage
} from '@dxtmisha/figma'
import { useFigmaStorageMulti } from '../useFigmaStorageMulti'

vi.mock('@dxtmisha/figma', () => ({
  fetchClientStorage: vi.fn(),
  fetchStorage: vi.fn(),
  sendClientStorage: vi.fn(),
  sendStorage: vi.fn()
}))

describe('useFigmaStorageMulti', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize with default value and load from client storage when value exists', () => {
      let clientCallback: ((value: unknown) => void) | undefined
      vi.mocked(fetchClientStorage).mockImplementation((_name, onReceive) => {
        clientCallback = onReceive
      })

      const { item, isDocument, isLocal } = useFigmaStorageMulti<string>(
        'config-key',
        true,
        false,
        'initial-default'
      )

      expect(item.value).toBe('initial-default')
      expect(isDocument.value).toBe(true)
      expect(isLocal.value).toBe(false)
      expect(fetchClientStorage).toHaveBeenCalledWith('config-key', expect.any(Function), 'initial-default', false)

      clientCallback?.('from-client-storage')
      expect(item.value).toBe('from-client-storage')
      expect(fetchStorage).not.toHaveBeenCalled()
    })

    it('should fallback to fetchStorage when client storage has no valid value', () => {
      let clientCallback: ((value: unknown) => void) | undefined
      let documentCallback: ((value: unknown) => void) | undefined

      vi.mocked(fetchClientStorage).mockImplementation((_name, onReceive) => {
        clientCallback = onReceive
      })
      vi.mocked(fetchStorage).mockImplementation((_name, onReceive) => {
        documentCallback = onReceive
      })

      const { item } = useFigmaStorageMulti<string>('config-key', false, true, 'default')

      clientCallback?.('')
      expect(fetchStorage).toHaveBeenCalledWith('config-key', expect.any(Function), undefined, 'default', false)

      documentCallback?.('from-document-storage')
      expect(item.value).toBe('from-document-storage')
    })

    it('should send value to appropriate storages based on active flags', async () => {
      const isDocumentRef = ref(true)
      const isLocalRef = ref(false)

      const { item } = useFigmaStorageMulti<string>('sync-key', isDocumentRef, isLocalRef)

      item.value = 'hello-world'
      await nextTick()

      expect(sendClientStorage).toHaveBeenCalledWith('sync-key', '')
      expect(sendStorage).toHaveBeenCalledWith('sync-key', 'hello-world')

      vi.mocked(sendClientStorage).mockClear()
      vi.mocked(sendStorage).mockClear()

      // Dynamically enabling local storage
      isLocalRef.value = true
      await nextTick()

      expect(sendClientStorage).toHaveBeenCalledWith('sync-key', 'hello-world')
      expect(sendStorage).toHaveBeenCalledWith('sync-key', 'hello-world')
    })
  })

  describe('Boundary values, numeric 0, boolean false, and clearing values', () => {
    it('should correctly preserve numeric 0 without converting it to empty string', async () => {
      const { item } = useFigmaStorageMulti<number>('counter-key', true, true, 100)

      item.value = 0
      await nextTick()

      expect(sendClientStorage).toHaveBeenCalledWith('counter-key', 0)
      expect(sendStorage).toHaveBeenCalledWith('counter-key', 0)
    })

    it('should correctly preserve boolean false without converting it to empty string', async () => {
      const { item } = useFigmaStorageMulti<boolean>('active-flag', true, true, true)

      item.value = false
      await nextTick()

      expect(sendClientStorage).toHaveBeenCalledWith('active-flag', false)
      expect(sendStorage).toHaveBeenCalledWith('active-flag', false)
    })

    it('should clear storage with empty string when item is null, undefined, or empty string', async () => {
      const { item } = useFigmaStorageMulti<string | null | undefined>('text-key', true, true, 'initial')

      item.value = ''
      await nextTick()
      expect(sendClientStorage).toHaveBeenCalledWith('text-key', '')
      expect(sendStorage).toHaveBeenCalledWith('text-key', '')

      item.value = null
      await nextTick()
      expect(sendClientStorage).toHaveBeenCalledWith('text-key', '')
      expect(sendStorage).toHaveBeenCalledWith('text-key', '')

      item.value = undefined
      await nextTick()
      expect(sendClientStorage).toHaveBeenCalledWith('text-key', '')
      expect(sendStorage).toHaveBeenCalledWith('text-key', '')
    })

    it('should handle complex object values correctly', async () => {
      const complexObject = { theme: 'dark', layout: [1, 2, 3] }
      const { item } = useFigmaStorageMulti<typeof complexObject>('obj-key', true, true)

      item.value = complexObject
      await nextTick()

      expect(sendClientStorage).toHaveBeenCalledWith('obj-key', complexObject)
      expect(sendStorage).toHaveBeenCalledWith('obj-key', complexObject)
    })
  })

  describe('Flags passed as boolean primitives vs Refs', () => {
    it('should handle static boolean primitives for inDocument and inLocal', async () => {
      const { item, isDocument, isLocal } = useFigmaStorageMulti<string>('static-key', false, false)

      expect(isDocument.value).toBe(false)
      expect(isLocal.value).toBe(false)

      item.value = 'ignored-by-both'
      await nextTick()

      expect(sendClientStorage).toHaveBeenCalledWith('static-key', '')
      expect(sendStorage).toHaveBeenCalledWith('static-key', '')
    })

    it('should default inDocument and inLocal to false when omitted', () => {
      const { isDocument, isLocal } = useFigmaStorageMulti<string>('default-flags-key')

      expect(isDocument.value).toBe(false)
      expect(isLocal.value).toBe(false)
    })
  })

  describe('Lifecycle and effect scope isolation', () => {
    it('should stop watching and syncing when the effect scope is stopped', async () => {
      const scope = effectScope()
      let multiItem: ReturnType<typeof useFigmaStorageMulti<string>>['item'] | undefined

      scope.run(() => {
        const { item } = useFigmaStorageMulti<string>('scoped-multi-key', true, true)
        multiItem = item
      })

      expect(multiItem).toBeDefined()
      scope.stop()

      if (multiItem) {
        multiItem.value = 'after-scope-stop'
      }
      await nextTick()

      expect(sendClientStorage).not.toHaveBeenCalledWith('scoped-multi-key', 'after-scope-stop')
      expect(sendStorage).not.toHaveBeenCalledWith('scoped-multi-key', 'after-scope-stop')
    })
  })
})
