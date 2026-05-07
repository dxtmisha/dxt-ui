import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { FigmaClientStorage } from '../FigmaClientStorage'

describe('FigmaClientStorage', () => {
  beforeEach(() => {
    vi.stubGlobal('figma', {
      clientStorage: {
        getAsync: vi.fn(),
        setAsync: vi.fn(),
        deleteAsync: vi.fn()
      }
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('getInstance() should return singleton', () => {
    const s1 = FigmaClientStorage.getInstance('test')
    const s2 = FigmaClientStorage.getInstance('test')
    expect(s1).toBe(s2)
  })

  it('get() should fetch from figma.clientStorage', async () => {
    const storage = new FigmaClientStorage<string>('test')
    vi.mocked(figma.clientStorage.getAsync).mockResolvedValue({ value: 'cached', age: 123 })

    const val = await storage.get()
    expect(val).toBe('cached')
    expect(figma.clientStorage.getAsync).toHaveBeenCalled()
  })

  it('set() should save to figma.clientStorage', async () => {
    const storage = new FigmaClientStorage<string>('test')
    await storage.set('new-val')

    expect(figma.clientStorage.setAsync).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ value: 'new-val' })
    )
  })

  it('remove() should delete from figma.clientStorage', async () => {
    const storage = new FigmaClientStorage<string>('test')
    await storage.remove()
    expect(figma.clientStorage.deleteAsync).toHaveBeenCalled()
  })
})
