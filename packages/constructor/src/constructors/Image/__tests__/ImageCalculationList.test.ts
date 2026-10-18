import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { ServerStorage } from '@dxtmisha/functional'
import { ImageCalculationList } from '../ImageCalculationList'
import { MAX_IMAGE_OFFSET } from '../ImageCalculation'

let request: Record<string, unknown>
beforeEach(() => {
  ServerStorage.reset()
  request = {}
  ServerStorage.init(() => request)
})
afterEach(() => ServerStorage.reset())

describe('ImageCalculationList (SSR)', () => {
  it('reuses group identity within a request while separating different names', () => {
    const gallery = ImageCalculationList.get('gallery')
    expect(ImageCalculationList.get('gallery')).toBe(gallery)
    expect(ImageCalculationList.get('other')).not.toBe(gallery)
    expect(ImageCalculationList.isSize()).toBe(false)
    gallery.makeWidth(120)
    expect(ImageCalculationList.isSize()).toBe(true)
  })

  it('resets every group without discarding its identity', () => {
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

  it('isolates identical group names and mutations between requests', () => {
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

  it('resets an empty request without creating groups or warnings', () => {
    ImageCalculationList.reset()
    expect(ImageCalculationList.isSize()).toBe(false)
  })
})
