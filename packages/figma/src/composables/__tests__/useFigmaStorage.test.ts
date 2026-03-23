import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useFigmaStorage } from '../useFigmaStorage'
import { FigmaStorage } from '../../classes/FigmaStorage'

describe('useFigmaStorage', () => {
  const mockItem = {
    id: 'test-node-id',
    getPluginData: vi.fn(() => ''),
    setPluginData: vi.fn()
  }

  // Mock figma global
  ;(global as any).figma = {
    root: {
      getPluginData: vi.fn(() => ''),
      setPluginData: vi.fn()
    }
  } as any

  beforeEach(() => {
    vi.clearAllMocks()
    // Clear the internal cache if possible, but it's a module-level variable.
    // For testing purposes, we might just use different names.
  })

  it('should return a FigmaStorage instance', () => {
    const storage = useFigmaStorage('test-key')
    expect(storage).toBeInstanceOf(FigmaStorage)
  })

  it('should return the same instance for the same name and node (singleton)', () => {
    const storage1 = useFigmaStorage('shared-key')
    const storage2 = useFigmaStorage('shared-key')
    
    expect(storage1).toBe(storage2)
  })

  it('should return different instances for different nodes', () => {
    const storageRoot = useFigmaStorage('node-key')
    const storageNode = useFigmaStorage('node-key', mockItem as any)
    
    expect(storageRoot).not.toBe(storageNode)
  })

  it('should return different instances for different names', () => {
    const storage1 = useFigmaStorage('key1')
    const storage2 = useFigmaStorage('key2')
    
    expect(storage1).not.toBe(storage2)
  })
})
