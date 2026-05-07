import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { FigmaStorage } from '../FigmaStorage'

describe('FigmaStorage', () => {
  let mockNode: any

  beforeEach(() => {
    mockNode = {
      id: 'test-node-id',
      getPluginData: vi.fn(),
      setPluginData: vi.fn()
    }
    vi.stubGlobal('figma', {
      root: mockNode
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('getInstance() should return singleton based on node and name', () => {
    const s1 = FigmaStorage.getInstance('test', mockNode)
    const s2 = FigmaStorage.getInstance('test', mockNode)
    expect(s1).toBe(s2)
  })

  it('get() should fetch from pluginData', () => {
    const storage = new FigmaStorage<string>('test', mockNode)
    mockNode.getPluginData.mockReturnValue(JSON.stringify({ value: 'data', age: 123 }))

    const val = storage.get()
    expect(val).toBe('data')
    expect(mockNode.getPluginData).toHaveBeenCalled()
  })

  it('set() should save to pluginData', () => {
    const storage = new FigmaStorage<string>('test', mockNode)
    storage.set('new-val')

    expect(mockNode.setPluginData).toHaveBeenCalledWith(
      expect.any(String),
      expect.stringContaining('new-val')
    )
  })
})
