import { describe, it, expect, vi, beforeEach } from 'vitest'
import { UI_FIGMA_CLIENT_STORAGE_SET } from '../../types/framesTypes'

const mockPost = vi.fn()
vi.mock('../../classes/FigmaUiMessenger', () => ({
  FigmaUiMessenger: {
    getInstance: vi.fn(() => ({
      post: mockPost
    }))
  }
}))

import { sendClientStorage } from '../sendClientStorage'

describe('sendClientStorage', () => {
  beforeEach(() => {
    mockPost.mockClear()
    vi.clearAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should post client storage SET message with provided key name and string payload', () => {
      sendClientStorage('user-theme', 'dark-mode')

      expect(mockPost).toHaveBeenCalledTimes(1)
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
        name: 'user-theme',
        value: 'dark-mode'
      })
    })

    it('should post complex nested objects and arrays correctly', () => {
      const complexObject = {
        config: { zoom: 1.5, panelOpen: true },
        tags: ['recent', 'active']
      }

      sendClientStorage('app-state', complexObject)

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
        name: 'app-state',
        value: complexObject
      })
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should preserve falsy values without mutation (0, false, empty string, null, undefined)', () => {
      sendClientStorage('num-zero', 0)
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
        name: 'num-zero',
        value: 0
      })

      sendClientStorage('bool-false', false)
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
        name: 'bool-false',
        value: false
      })

      sendClientStorage('empty-str', '')
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
        name: 'empty-str',
        value: ''
      })

      sendClientStorage('nullable', null)
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
        name: 'nullable',
        value: null
      })

      sendClientStorage('undef', undefined)
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
        name: 'undef',
        value: undefined
      })
    })

    it('should safely post when name is an empty string', () => {
      sendClientStorage('', 'some-value')

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
        name: '',
        value: 'some-value'
      })
    })

    it('should safely post empty array and empty object', () => {
      sendClientStorage('arr', [])
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
        name: 'arr',
        value: []
      })

      sendClientStorage('obj', {})
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
        name: 'obj',
        value: {}
      })
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Unicode names and multilingual payloads (Cyrillic, Vietnamese, Emoji)', () => {
      const payload = {
        ru: 'Темная тема',
        vi: 'Giao diện tối',
        icon: '🌙'
      }

      sendClientStorage('cài_đặt_пользователя_🚀', payload)

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_CLIENT_STORAGE_SET, {
        name: 'cài_đặt_пользователя_🚀',
        value: payload
      })
    })
  })
})
