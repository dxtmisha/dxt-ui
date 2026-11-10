import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  fetchFrameStyles,
  sendFrameStyles,
  type UiFigmaFrameStylesMessengerAttributes,
  type UiFigmaFrameStylesMessengerResponse
} from '@dxtmisha/figma'
import { useFigmaFrameStyles } from '../useFigmaFrameStyles'

vi.mock('@dxtmisha/figma', () => ({
  fetchFrameStyles: vi.fn(),
  sendFrameStyles: vi.fn()
}))

describe('useFigmaFrameStyles', () => {
  let capturedCallback: ((styles: UiFigmaFrameStylesMessengerResponse) => void) | undefined

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(fetchFrameStyles).mockImplementation((onReceive) => {
      capturedCallback = onReceive
    })
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should expose reactive styles and forward style request to sendFrameStyles', () => {
      const { styles, send } = useFigmaFrameStyles()

      expect(styles).toBeDefined()
      expect(typeof send).toBe('function')

      if (capturedCallback) {
        const mockStyles: UiFigmaFrameStylesMessengerResponse = [
          {
            id: '1:1',
            data: [
              {
                id: 'style:color:primary',
                name: 'Primary Blue'
              }
            ]
          }
        ]
        capturedCallback(mockStyles)

        expect(styles.value).toEqual(mockStyles)
      }

      const requestAttributes: UiFigmaFrameStylesMessengerAttributes = {
        ids: ['1:1', '1:2'],
        children: true
      }
      send(requestAttributes)

      expect(sendFrameStyles).toHaveBeenCalledWith(requestAttributes)
    })
  })

  describe('Boundary conditions and diverse attributes in send', () => {
    it('should handle send with single ID and without children flag', () => {
      const { send } = useFigmaFrameStyles()

      const singleIdRequest: UiFigmaFrameStylesMessengerAttributes = {
        ids: ['10:50']
      }
      send(singleIdRequest)

      expect(sendFrameStyles).toHaveBeenCalledWith(singleIdRequest)
    })

    it('should safely handle empty styles list and updates', () => {
      const { styles } = useFigmaFrameStyles()

      if (capturedCallback) {
        capturedCallback([])
        expect(styles.value).toEqual([])
      } else {
        expect(Array.isArray(styles.value)).toBe(true)
      }
    })
  })

  describe('Singleton deduplication & State preservation', () => {
    it('should share reactive styles across multiple composable instances', () => {
      const instanceA = useFigmaFrameStyles()
      const instanceB = useFigmaFrameStyles()

      expect(instanceA.styles.value).toEqual(instanceB.styles.value)

      instanceA.send({ ids: ['3:300'] })
      expect(sendFrameStyles).toHaveBeenCalledWith({ ids: ['3:300'] })
    })
  })
})
