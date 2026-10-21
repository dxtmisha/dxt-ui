import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { ServerStorage } from '@dxtmisha/functional'
import { ImageCalculationList } from '../ImageCalculationList'
import { MAX_IMAGE_OFFSET } from '../ImageCalculation'

/** Active SSR request context / Активный контекст SSR-запроса */
let request: Record<string, unknown>

beforeEach(() => {
  ServerStorage.reset()
  request = {}
  ServerStorage.init(() => request)
})

afterEach(() => ServerStorage.reset())

describe('ImageCalculationList', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should reuse group identity within a request while separating distinct group names', () => {
      const gallery = ImageCalculationList.get('gallery')

      expect(ImageCalculationList.get('gallery')).toBe(gallery)
      expect(ImageCalculationList.get('other')).not.toBe(gallery)
      expect(ImageCalculationList.isSize()).toBe(false)

      gallery.makeWidth(120)
      expect(ImageCalculationList.isSize()).toBe(true)
    })

    it('should reset every group to initial defaults without discarding group instances', () => {
      const gallery = ImageCalculationList.get('gallery')
      const other = ImageCalculationList.get('other')

      gallery.makeWidth(100).makeOffsetWidth(20).makeFactorMax(0.5)
      other.makeHeight(200).makeOffsetHeight(30).makeFactorMax(0.25)

      ImageCalculationList.reset()

      expect(ImageCalculationList.get('gallery')).toBe(gallery)
      expect(ImageCalculationList.get('other')).toBe(other)
      expect(ImageCalculationList.isSize()).toBe(false)

      for (const calculation of [gallery, other]) {
        expect([calculation.width, calculation.height, calculation.factorMax]).toEqual([0, 0, 1])
        expect([calculation.offsetWidth, calculation.offsetHeight]).toEqual([MAX_IMAGE_OFFSET, MAX_IMAGE_OFFSET])
      }
    })
  })

  describe('Boundary values, empty states, and multi-group size aggregation', () => {
    it('should report isSize() true when at least one group has width or height > 0', () => {
      const first = ImageCalculationList.get('first')
      const second = ImageCalculationList.get('second')

      expect(ImageCalculationList.isSize()).toBe(false)

      second.makeHeight(50)
      expect(first.isSize()).toBe(false)
      expect(second.isSize()).toBe(true)
      expect(ImageCalculationList.isSize()).toBe(true)
    })

    it('should safely reset an empty request without creating groups or emitting warnings', () => {
      ImageCalculationList.reset()
      expect(ImageCalculationList.isSize()).toBe(false)
    })
  })

  describe('Multilingual and Unicode group names', () => {
    it.each([
      '',
      'галерея',
      'bộ-sưu-tập',
      '画廊',
      '🖼️-gallery'
    ])('should store and retrieve calculation groups with name %j', (groupName) => {
      const group = ImageCalculationList.get(groupName)
      expect(group.is(groupName)).toBe(true)
      expect(ImageCalculationList.get(groupName)).toBe(group)
    })
  })

  describe('Statefulness, SSR safety, and request isolation', () => {
    it('should isolate identical group names and mutations between concurrent SSR requests', () => {
      const firstRequest = request
      const firstGroup = ImageCalculationList.get('gallery').makeWidth(100)

      request = {}
      const secondGroup = ImageCalculationList.get('gallery')

      expect(secondGroup).not.toBe(firstGroup)
      expect(secondGroup.width).toBe(0)

      secondGroup.makeWidth(200)
      request = firstRequest

      expect(ImageCalculationList.get('gallery')).toBe(firstGroup)
      expect(firstGroup.width).toBe(100)
    })
  })
})
