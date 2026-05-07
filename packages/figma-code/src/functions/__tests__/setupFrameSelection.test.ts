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

import { setupFrameSelection } from '../setupFrameSelection'

describe('setupFrameSelection', () => {
  beforeEach(() => {
    vi.stubGlobal('figma', {
      on: vi.fn(),
      currentPage: { selection: [] }
    })
    mockAdd.mockClear()
  })

  it('should call makeFigmaFrameSelection and register messenger listener', () => {
    setupFrameSelection()
    expect(mockAdd).toHaveBeenCalled()
    expect(figma.on).toHaveBeenCalledWith('selectionchange', expect.any(Function))
  })
})
