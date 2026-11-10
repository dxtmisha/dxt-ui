import { describe, it, expect, vi, beforeEach } from 'vitest'
import { UI_FIGMA_CLIENT_STORAGE_GET, UI_FIGMA_CLIENT_STORAGE_SET } from '@dxtmisha/figma'

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

vi.mock('../../classes/FigmaClientStorage', () => ({
  FigmaClientStorage: {
    getInstance: vi.fn(() => ({
      get: mockGet,
      set: mockSet
    }))
  }
}))

import { setupClientStorage } from '../setupClientStorage'

describe('setupClientStorage', () => {
  let callbacks: Record<string, (data: any) => Promise<void>>

  beforeEach(() => {
    callbacks = {}
    mockAdd.mockClear()
    mockPost.mockClear()
    mockGet.mockClear()
    mockSet.mockClear()

    mockAdd.mockImplementation((type: string, cb: (data: any) => Promise<void>) => {
      callbacks[type] = cb
    })
    mockGet.mockResolvedValue('stored-data')
    mockSet.mockResolvedValue('saved-data')
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should register listeners for UI_FIGMA_CLIENT_STORAGE_GET and UI_FIGMA_CLIENT_STORAGE_SET', () => {
      setupClientStorage()

      expect(mockAdd).toHaveBeenCalledTimes(2)
      expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_GET, expect.any(Function))
      expect(mockAdd).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, expect.any(Function))
    })

    it('should retrieve stored value on GET message and reply to UI', async () => {
      setupClientStorage()

      await callbacks[UI_FIGMA_CLIENT_STORAGE_GET]({ name: 'theme', value: 'light-default' })

      expect(mockGet).toHaveBeenCalledWith('light-default')
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_GET, {
        name: 'theme',
        value: 'stored-data'
      })
    })

    it('should persist new value on SET message and reply with updated value to UI', async () => {
      setupClientStorage()

      await callbacks[UI_FIGMA_CLIENT_STORAGE_SET]({ name: 'theme', value: 'dark' })

      expect(mockSet).toHaveBeenCalledWith('dark')
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_GET, {
        name: 'theme',
        value: 'saved-data'
      })
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should correctly handle falsy values (0, false, empty string)', async () => {
      setupClientStorage()

      mockGet.mockResolvedValue(0)
      await callbacks[UI_FIGMA_CLIENT_STORAGE_GET]({ name: 'counter', value: 0 })
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_GET, {
        name: 'counter',
        value: 0
      })

      mockSet.mockResolvedValue(false)
      await callbacks[UI_FIGMA_CLIENT_STORAGE_SET]({ name: 'enabled', value: false })
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_GET, {
        name: 'enabled',
        value: false
      })
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Unicode storage names and multilingual values', async () => {
      setupClientStorage()
      const unicodePayload = { ru: 'Тема', vi: 'Giao diện' }
      mockSet.mockResolvedValue(unicodePayload)

      await callbacks[UI_FIGMA_CLIENT_STORAGE_SET]({
        name: 'giao_diện_ключ',
        value: unicodePayload
      })

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_GET, {
        name: 'giao_diện_ключ',
        value: unicodePayload
      })
    })
  })
})
