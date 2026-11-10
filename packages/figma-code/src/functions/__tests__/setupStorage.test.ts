import { describe, it, expect, vi, beforeEach } from 'vitest'
import { UI_FIGMA_STORAGE_GET, UI_FIGMA_STORAGE_SET } from '@dxtmisha/figma'

const mockAdd = vi.fn()
const mockPost = vi.fn()
const mockGet = vi.fn()
const mockSet = vi.fn()

vi.mock('../../classes/FigmaPluginMessenger', () => ({
  FigmaPluginMessenger: {
    getInstance: vi.fn(() => ({
      add: mockAdd,
      post: mockPost
    }))
  }
}))

vi.mock('../../classes/FigmaStorage', () => ({
  FigmaStorage: {
    getInstanceById: vi.fn().mockImplementation((name: string, _id?: string) => Promise.resolve({
      get: mockGet.mockImplementation((defVal: any) => `stored-${name}-${defVal}`),
      set: mockSet.mockImplementation((newVal: any) => `saved-${name}-${newVal}`)
    }))
  }
}))

import { setupStorage } from '../setupStorage'

describe('setupStorage', () => {
  let callbacks: Record<string, (data?: any) => Promise<void>>

  beforeEach(() => {
    callbacks = {}
    mockAdd.mockClear()
    mockPost.mockClear()
    mockGet.mockClear()
    mockSet.mockClear()

    mockAdd.mockImplementation((name: string, cb: (data?: any) => Promise<void>) => {
      callbacks[name] = cb
    })
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should register listeners for UI_FIGMA_STORAGE_GET and UI_FIGMA_STORAGE_SET', () => {
      setupStorage()

      expect(mockAdd).toHaveBeenCalledTimes(2)
      expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_STORAGE_GET, expect.any(Function))
      expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_STORAGE_SET, expect.any(Function))
    })

    it('should retrieve stored value on GET message and reply with result to UI', async () => {
      setupStorage()

      await callbacks[UI_FIGMA_STORAGE_GET]({ name: 'theme', value: 'light', id: '1:10' })

      expect(mockGet).toHaveBeenCalledWith('light')
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_STORAGE_GET, {
        name: 'theme',
        value: 'stored-theme-light',
        id: '1:10'
      })
    })

    it('should update stored value on SET message and reply with updated value to UI', async () => {
      setupStorage()

      await callbacks[UI_FIGMA_STORAGE_SET]({ name: 'theme', value: 'dark', id: '1:10' })

      expect(mockSet).toHaveBeenCalledWith('dark')
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_STORAGE_GET, {
        name: 'theme',
        value: 'saved-theme-dark',
        id: '1:10'
      })
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should handle undefined data payload safely without crashing', async () => {
      setupStorage()

      await callbacks[UI_FIGMA_STORAGE_GET](undefined)

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_STORAGE_GET, {
        name: '',
        value: expect.any(String),
        id: undefined
      })
    })

    it('should handle storage calls without optional id parameter', async () => {
      setupStorage()

      await callbacks[UI_FIGMA_STORAGE_GET]({ name: 'global-setting', value: 'default-val' })

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_STORAGE_GET, {
        name: 'global-setting',
        value: 'stored-global-setting-default-val',
        id: undefined
      })
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Unicode storage names and multilingual values', async () => {
      setupStorage()

      await callbacks[UI_FIGMA_STORAGE_SET]({
        name: 'ngôn_ngữ_языка',
        value: 'Tiếng Việt',
        id: '10:20'
      })

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_STORAGE_GET, {
        name: 'ngôn_ngữ_языка',
        value: 'saved-ngôn_ngữ_языка-Tiếng Việt',
        id: '10:20'
      })
    })
  })
})
