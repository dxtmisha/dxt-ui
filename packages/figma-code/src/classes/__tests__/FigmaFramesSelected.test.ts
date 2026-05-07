import { describe, it, expect, vi, beforeEach } from 'vitest'

const mockMessenger = {
  add: vi.fn().mockReturnThis(),
  post: vi.fn().mockReturnThis()
}

vi.mock('../FigmaPluginMessenger', () => ({
  FigmaPluginMessenger: {
    getInstance: vi.fn(() => mockMessenger)
  }
}))

vi.mock('../FigmaStorage', () => {
  return {
    FigmaStorage: vi.fn().mockImplementation(function () {
      return {
        get: vi.fn().mockReturnValue([]),
        set: vi.fn()
      }
    })
  }
})

import { FigmaFramesSelected } from '../FigmaFramesSelected'

describe('FigmaFramesSelected', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('add() should update list', () => {
    FigmaFramesSelected.add('frame-1')
    expect(FigmaFramesSelected.get()).toContain('frame-1')
  })

  it('remove() should update list', () => {
    FigmaFramesSelected.add('frame-2')
    FigmaFramesSelected.remove('frame-2')
    expect(FigmaFramesSelected.get()).not.toContain('frame-2')
  })

  it('send() should setup messenger listeners', () => {
    FigmaFramesSelected.send()
    expect(mockMessenger.add).toHaveBeenCalled()
  })
})
