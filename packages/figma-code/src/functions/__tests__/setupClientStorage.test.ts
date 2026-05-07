import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockAdd = vi.fn()
vi.mock('../../classes/FigmaPluginMessenger', () => ({
  FigmaPluginMessenger: {
    getInstance: vi.fn(() => ({
      add: mockAdd,
      post: vi.fn()
    }))
  }
}))

import { setupClientStorage } from '../setupClientStorage'

describe('setupClientStorage', () => {
  beforeEach(() => {
    mockAdd.mockClear()
  })

  it('should register listeners for storage GET and SET', () => {
    setupClientStorage()
    expect(mockAdd).toHaveBeenCalledTimes(2)
  })
})
