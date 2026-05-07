import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { makeFigmaTexts } from '../makeFigmaTexts'

vi.mock('../../classes/FigmaPluginMessenger', () => ({
  FigmaPluginMessenger: {
    getInstance: vi.fn(() => ({
      post: vi.fn()
    }))
  }
}))

describe('makeFigmaTexts', () => {
  beforeEach(() => {
    vi.stubGlobal('figma', {
      on: vi.fn(),
      currentPage: { id: 'page-1', selection: [] }
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('should register selectionchange listener', () => {
    makeFigmaTexts()
    expect(figma.on).toHaveBeenCalledWith('selectionchange', expect.any(Function))
  })
})
