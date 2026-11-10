import { describe, it, expect, vi, beforeEach } from 'vitest'
import { UI_FIGMA_STORAGE_SET } from '../../types/framesTypes'

const mockPost = vi.fn()
vi.mock('../../classes/FigmaUiMessenger', () => ({
  FigmaUiMessenger: {
    getInstance: vi.fn(() => ({
      post: mockPost
    }))
  }
}))

import { sendStorage } from '../sendStorage'

describe('sendStorage', () => {
  beforeEach(() => {
    mockPost.mockClear()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should post storage SET message with name and value when id is omitted', () => {
      sendStorage('theme-preference', 'system')

      expect(mockPost).toHaveBeenCalledTimes(1)
      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_STORAGE_SET, {
        name: 'theme-preference',
        value: 'system',
        id: undefined
      })
    })

    it('should post storage SET message including specific node id', () => {
      sendStorage('node-state', { expanded: true }, '12:34')

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_STORAGE_SET, {
        name: 'node-state',
        value: { expanded: true },
        id: '12:34'
      })
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should preserve falsy values without corruption (0, false, empty string, null, undefined)', () => {
      sendStorage('count', 0, 'node-1')
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_STORAGE_SET, {
        name: 'count',
        value: 0,
        id: 'node-1'
      })

      sendStorage('flag', false, 'node-1')
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_STORAGE_SET, {
        name: 'flag',
        value: false,
        id: 'node-1'
      })

      sendStorage('empty', '', 'node-1')
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_STORAGE_SET, {
        name: 'empty',
        value: '',
        id: 'node-1'
      })

      sendStorage('nullable', null, 'node-1')
      expect(mockPost).toHaveBeenLastCalledWith(UI_FIGMA_STORAGE_SET, {
        name: 'nullable',
        value: null,
        id: 'node-1'
      })
    })

    it('should safely post when name or id are empty strings', () => {
      sendStorage('', 'val', '')

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_STORAGE_SET, {
        name: '',
        value: 'val',
        id: ''
      })
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should support Unicode storage names, node IDs, and multilingual payloads', () => {
      const payload = { ru: 'Настройки', vi: 'Cài đặt 🚀' }
      sendStorage('данные_cấu_hình', payload, '2:3_кнопка')

      expect(mockPost).toHaveBeenCalledWith(UI_FIGMA_STORAGE_SET, {
        name: 'данные_cấu_hình',
        value: payload,
        id: '2:3_кнопка'
      })
    })
  })
})
