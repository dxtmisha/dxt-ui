import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

const mockPost = vi.fn()
vi.mock('../../classes/FigmaPluginMessenger', () => ({
  FigmaPluginMessenger: {
    getInstance: vi.fn(() => ({
      post: mockPost
    }))
  }
}))

import { makeFigmaFrameSelection } from '../makeFigmaFrameSelection'

describe('makeFigmaFrameSelection', () => {
  beforeEach(() => {
    vi.stubGlobal('figma', {
      on: vi.fn(),
      currentPage: { id: 'page-1', selection: [] }
    })
    mockPost.mockClear()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('should register selectionchange listener and post message', async () => {
    makeFigmaFrameSelection()
    expect(figma.on).toHaveBeenCalledWith('selectionchange', expect.any(Function))
    // Wait for the async call inside makeFigmaFrameSelection
    await new Promise(resolve => setTimeout(resolve, 0))
    expect(mockPost).toHaveBeenCalled()
  })
})
