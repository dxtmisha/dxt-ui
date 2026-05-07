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

import { setupStorage } from '../setupStorage'

describe('setupStorage', () => {
  beforeEach(() => {
    mockAdd.mockClear()
  })

  it('should register storage GET and SET listeners', () => {
    setupStorage()
    expect(mockAdd).toHaveBeenCalledTimes(2)
  })
})
