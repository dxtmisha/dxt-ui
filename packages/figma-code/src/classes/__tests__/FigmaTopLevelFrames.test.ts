import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { FigmaTopLevelFrames } from '../FigmaTopLevelFrames'
import { FigmaPluginMessenger } from '../FigmaPluginMessenger'

vi.mock('../FigmaPluginMessenger', () => {
  const mockAdd = vi.fn()
  const mockPost = vi.fn()
  return {
    FigmaPluginMessenger: {
      getInstance: vi.fn(() => ({
        add: mockAdd,
        post: mockPost
      }))
    }
  }
})

describe('FigmaTopLevelFrames', () => {
  beforeEach(() => {
    vi.stubGlobal('figma', {
      currentPage: {
        id: 'page-1',
        type: 'PAGE',
        children: []
      }
    })
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('send() should setup messenger listener', () => {
    FigmaTopLevelFrames.send()
    const messenger = FigmaPluginMessenger.getInstance()
    expect(messenger.add).toHaveBeenCalled()
  })
})
