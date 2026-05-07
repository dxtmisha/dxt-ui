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

import { setupFrameStyles } from '../setupFrameStyles'

describe('setupFrameStyles', () => {
  beforeEach(() => {
    mockAdd.mockClear()
  })

  it('should register style messenger listener', () => {
    setupFrameStyles()
    expect(mockAdd).toHaveBeenCalled()
  })
})
