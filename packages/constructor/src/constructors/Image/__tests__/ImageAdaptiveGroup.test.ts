// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { nextTick, onMounted, onUnmounted, reactive, ref } from 'vue'
import { ServerStorage } from '@dxtmisha/functional'

import { ImageAdaptiveGroup } from '../ImageAdaptiveGroup'
import { ImageAdaptiveItem } from '../ImageAdaptiveItem'
import { ImageBackground } from '../ImageBackground'
import { ImageCalculationList } from '../ImageCalculationList'
import { ImageCoordinator } from '../ImageCoordinator'
import { ImageData } from '../ImageData'
import { ImageLazy } from '../ImageLazy'
import { ImageType } from '../ImageType'
import { ImageUint8Array } from '../ImageUint8Array'
import { MAX_IMAGE_OFFSET } from '../ImageCalculation'

import type { ImageElement, ImageSize } from '../basicTypes'
import type { ImageProps } from '../props'
import { browser, flushUpdates, intersect, loadImage, mountHelper, type MountedHelper } from './domFixtures'

/** Mounted adaptive unit with connected lifecycle hooks / Смонтированная адаптивная единица с подключёнными хуками жизненного цикла */
interface AdaptiveUnit {
  /** Adaptive item controller / Контроллер адаптивного элемента */
  adaptive: ImageAdaptiveItem
  /** Background style calculator / Вычислитель стилей фона */
  background: ImageBackground
  /** Loaded image data manager / Менеджер данных загруженного изображения */
  data: ImageData
  /** Mutable DOM dimensions / Изменяемые размеры DOM */
  dimensions: ImageSize
}

/**
 * Defines configurable offsetWidth and offsetHeight getters on a DOM element.
 *
 * Определяет настраиваемые геттеры offsetWidth и offsetHeight на DOM-элементе.
 * @param element target HTML element / целевой HTML-элемент
 * @param dimensions mutable size object / изменяемый объект размеров
 */
function bindElementDimensions(element: ImageElement, dimensions: ImageSize): void {
  if (element) {
    Object.defineProperties(element, {
      offsetWidth: { configurable: true, get: () => dimensions.width },
      offsetHeight: { configurable: true, get: () => dimensions.height }
    })
  }
}

/**
 * Mounts an ImageAdaptiveItem with real Image dependencies and lifecycle callbacks connected.
 *
 * Монтирует ImageAdaptiveItem с реальными зависимостями Image и подключёнными хуками жизненного цикла.
 * @param initialProps image component properties / свойства компонента изображения
 * @param initialDimensions initial DOM offsetWidth and offsetHeight / начальные размеры DOM offsetWidth и offsetHeight
 * @returns mounted helper fixture / смонтированная тестовая фикстура
 */
function mountAdaptiveUnit(
  initialProps: ImageProps,
  initialDimensions: ImageSize = { width: 200, height: 200 }
): MountedHelper<AdaptiveUnit> {
  const props = Object.assign(initialProps, {
    lazy: initialProps.lazy ?? false,
    preloadOffset: initialProps.preloadOffset ?? '1024px'
  })
  const dimensions: ImageSize = { ...initialDimensions }

  return mountHelper((element) => {
    const isMounted = ref(false)
    const lazy = new ImageLazy(props, element)
    const type = new ImageType(props, isMounted)
    const uint8Array = new ImageUint8Array(props)
    const data = new ImageData(props, isMounted, () => lazy, () => type, () => uint8Array)
    const coordinator = new ImageCoordinator(props)
    const adaptive = new ImageAdaptiveItem(props, element, isMounted, () => data)
    const background = new ImageBackground(props, () => data, () => coordinator, () => adaptive)

    onMounted(() => {
      isMounted.value = true
      bindElementDimensions(element.value, dimensions)
      adaptive.onMounted()
    })

    onUnmounted(() => {
      adaptive.onUnmounted()
    })

    return { adaptive, background, data, dimensions }
  })
}

describe('ImageAdaptiveGroup', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should register, check presence via is(), deduplicate repeated add() calls, and remove items', async () => {
      const fixture = mountAdaptiveUnit(reactive({
        value: '/photo.png',
        adaptive: true,
        adaptiveAlways: true,
        objectWidth: 200,
        adaptiveGroup: 'gallery'
      }))

      await flushUpdates()
      loadImage(browser.images[0]!, 200, 100)
      await flushUpdates()

      expect(ImageAdaptiveGroup.is(fixture.item.adaptive)).toBe(true)

      const makeSpy = vi.spyOn(fixture.item.adaptive, 'make')
      ImageAdaptiveGroup.add(fixture.item.adaptive)
      ImageAdaptiveGroup.add(fixture.item.adaptive)

      await nextTick()
      expect(browser.frames.size).toBe(1)

      await flushUpdates()
      expect(makeSpy).toHaveBeenCalledTimes(1)
      expect(ImageCalculationList.get('gallery').width).toBe(200)

      ImageAdaptiveGroup.remove(fixture.item.adaptive)
      await flushUpdates()
      expect(ImageAdaptiveGroup.is(fixture.item.adaptive)).toBe(false)
      expect(ImageCalculationList.isSize()).toBe(false)
    })

    it('should calculate proportional percent and backgroundSize along the X axis across multiple items', async () => {
      const largeFixture = mountAdaptiveUnit(
        reactive({
          value: '/large.png',
          adaptive: true,
          adaptiveAlways: true,
          objectWidth: 400,
          adaptiveGroup: 'catalog-x'
        }),
        { width: 200, height: 200 }
      )
      const smallFixture = mountAdaptiveUnit(
        reactive({
          value: '/small.png',
          adaptive: true,
          adaptiveAlways: true,
          objectWidth: 100,
          adaptiveGroup: 'catalog-x'
        }),
        { width: 400, height: 200 }
      )

      await flushUpdates()
      loadImage(browser.images[0]!, 400, 200)
      loadImage(browser.images[1]!, 100, 50)
      await flushUpdates()

      const calculation = ImageCalculationList.get('catalog-x')
      expect(calculation.width).toBe(400)
      expect(calculation.offsetWidth).toBe(200)
      expect(calculation.factorMax).toBe(1)
      expect(largeFixture.item.background.size.value).toBe('100% auto')
      // small item: (100 / 400) * (200 / 400) = 0.125 => 12.5% auto
      expect(smallFixture.item.background.size.value).toBe('12.5% auto')
    })

    it('should calculate proportional percent and backgroundSize along the Y axis across multiple items', async () => {
      const tallFixture = mountAdaptiveUnit(
        reactive({
          value: '/tall.png',
          adaptive: true,
          adaptiveAlways: true,
          objectHeight: 300,
          adaptiveGroup: 'catalog-y'
        }),
        { width: 200, height: 150 }
      )
      const shortFixture = mountAdaptiveUnit(
        reactive({
          value: '/short.png',
          adaptive: true,
          adaptiveAlways: true,
          objectHeight: 150,
          adaptiveGroup: 'catalog-y'
        }),
        { width: 200, height: 300 }
      )

      await flushUpdates()
      loadImage(browser.images[0]!, 100, 300)
      loadImage(browser.images[1]!, 100, 150)
      await flushUpdates()

      const calculation = ImageCalculationList.get('catalog-y')
      expect(calculation.height).toBe(300)
      expect(calculation.offsetHeight).toBe(150)
      expect(calculation.factorMax).toBe(1)
      expect(tallFixture.item.background.size.value).toBe('auto 100%')
      // short item: (150 / 300) * (150 / 300) = 0.25 => auto 25%
      expect(shortFixture.item.background.size.value).toBe('auto 25%')
    })
  })

  describe('Factor clamping and multi-group isolation (makeFactorMax & adaptiveGroup)', () => {
    it('should apply the smallest limiting factorMax to all items in the same group when an image overflows its container', async () => {
      const overflowingFixture = mountAdaptiveUnit(
        reactive({
          value: '/overflow.png',
          adaptive: true,
          adaptiveAlways: true,
          objectWidth: 200,
          adaptiveGroup: 'clamped-group'
        }),
        { width: 200, height: 100 }
      )
      const companionFixture = mountAdaptiveUnit(
        reactive({
          value: '/companion.png',
          adaptive: true,
          adaptiveAlways: true,
          objectWidth: 100,
          adaptiveGroup: 'clamped-group'
        }),
        { width: 200, height: 200 }
      )

      await flushUpdates()
      // Intrinsic height 400 at width 200 gives size = 400 > container height 100 => factor = 100 / 400 = 0.25
      loadImage(browser.images[0]!, 200, 400)
      loadImage(browser.images[1]!, 200, 100)
      await flushUpdates()

      const calculation = ImageCalculationList.get('clamped-group')
      expect(overflowingFixture.item.adaptive.factor.value).toBe(0.25)
      expect(companionFixture.item.adaptive.factor.value).toBe(1)
      expect(calculation.factorMax).toBe(0.25)
      expect(overflowingFixture.item.background.size.value).toBe('25% auto')
      expect(companionFixture.item.background.size.value).toBe('12.5% auto')
    })

    it.each([
      ['gallery-alpha', 'gallery-beta'],
      ['галерея-1', 'галерея-2'],
      ['nhóm-một', 'nhóm-hai']
    ])('should isolate sizes, offsets, and factors between independent groups (%s vs %s)', async (firstGroup, secondGroup) => {
      const firstFixture = mountAdaptiveUnit(
        reactive({
          value: '/first.png',
          adaptive: true,
          adaptiveAlways: true,
          objectWidth: 300,
          adaptiveGroup: firstGroup
        }),
        { width: 150, height: 60 }
      )
      const secondFixture = mountAdaptiveUnit(
        reactive({
          value: '/second.png',
          adaptive: true,
          adaptiveAlways: true,
          objectWidth: 120,
          adaptiveGroup: secondGroup
        }),
        { width: 240, height: 240 }
      )

      await flushUpdates()
      // First group overflows vertically: size = 150 > height 60 => factorMax = 60 / 150 = 0.4
      loadImage(browser.images[0]!, 200, 200)
      // Second group fits comfortably: size = 120 <= height 240 => factorMax = 1
      loadImage(browser.images[1]!, 200, 100)
      await flushUpdates()

      expect(ImageCalculationList.get(firstGroup).width).toBe(300)
      expect(ImageCalculationList.get(firstGroup).offsetWidth).toBe(150)
      expect(ImageCalculationList.get(firstGroup).factorMax).toBeCloseTo(0.4)

      expect(ImageCalculationList.get(secondGroup).width).toBe(120)
      expect(ImageCalculationList.get(secondGroup).offsetWidth).toBe(240)
      expect(ImageCalculationList.get(secondGroup).factorMax).toBe(1)

      expect(firstFixture.item.background.size.value).toBe('40% auto')
      expect(secondFixture.item.background.size.value).toBe('100% auto')
    })
  })

  describe('Visibility and viewport filtering (makeAdaptive & isBeyond)', () => {
    it('should exclude off-screen items until intersection and recalculate when they leave', async () => {
      const fixture = mountAdaptiveUnit(reactive({
        value: '/photo.png',
        adaptive: true,
        adaptiveAlways: false,
        objectWidth: 200,
        adaptiveGroup: 'viewport-group'
      }))

      await flushUpdates()
      loadImage(browser.images[0]!)
      await flushUpdates()

      expect(fixture.item.adaptive.isBeyond()).toBe(false)
      expect(ImageCalculationList.get('viewport-group').width).toBe(0)

      intersect(fixture.element.value!, true)
      await flushUpdates()

      expect(fixture.item.adaptive.isBeyond()).toBe(true)
      expect(ImageCalculationList.get('viewport-group').width).toBe(200)

      intersect(fixture.element.value!, false)
      await flushUpdates()

      expect(fixture.item.adaptive.isBeyond()).toBe(false)
      expect(ImageCalculationList.get('viewport-group').width).toBe(0)
    })

    it('should compute group maxima only from currently visible items in a mixed group', async () => {
      const visibleFixture = mountAdaptiveUnit(reactive({
        value: '/visible.png',
        adaptive: true,
        adaptiveAlways: true,
        objectWidth: 150,
        adaptiveGroup: 'mixed-group'
      }))
      const offscreenFixture = mountAdaptiveUnit(reactive({
        value: '/offscreen.png',
        adaptive: true,
        adaptiveAlways: false,
        objectWidth: 600,
        adaptiveGroup: 'mixed-group'
      }))

      await flushUpdates()
      loadImage(browser.images[0]!)
      loadImage(browser.images[1]!)
      await flushUpdates()

      expect(visibleFixture.item.adaptive.isBeyond()).toBe(true)
      expect(offscreenFixture.item.adaptive.isBeyond()).toBe(false)
      expect(ImageCalculationList.get('mixed-group').width).toBe(150)

      intersect(offscreenFixture.element.value!, true)
      await flushUpdates()

      expect(ImageCalculationList.get('mixed-group').width).toBe(600)
      expect(visibleFixture.item.background.size.value).toBe('25% auto')
    })
  })

  describe('Boundary values, zero dimensions, and floating-point precision', () => {
    it('should produce 0 percent when DOM offsetWidth and offsetHeight are 0 and recover when resized', async () => {
      const fixture = mountAdaptiveUnit(
        reactive({
          value: '/photo.png',
          adaptive: true,
          adaptiveAlways: true,
          objectWidth: 200,
          objectHeight: 100,
          adaptiveGroup: 'zero-dom'
        }),
        { width: 0, height: 0 }
      )

      await flushUpdates()
      loadImage(browser.images[0]!, 200, 100)
      await flushUpdates()

      const calculation = ImageCalculationList.get('zero-dom')
      expect(calculation.width).toBe(200)
      expect(calculation.height).toBe(100)
      expect(calculation.offsetWidth).toBe(MAX_IMAGE_OFFSET)
      expect(calculation.offsetHeight).toBe(MAX_IMAGE_OFFSET)
      expect(fixture.item.adaptive.backgroundSize).toBeNull()

      fixture.item.dimensions.width = 250
      fixture.item.dimensions.height = 125
      fixture.item.adaptive.update()
      await flushUpdates()

      expect(calculation.offsetWidth).toBe(250)
      expect(calculation.offsetHeight).toBe(125)
      expect(fixture.item.background.size.value).toBe('100% auto')
    })

    it.each([49, 98, 103, 107])('should preserve exact 100 percent scaling without IEEE 754 reciprocal rounding drift for width=%i', async (objectWidth) => {
      const fixture = mountAdaptiveUnit(
        reactive({
          value: '/exact.png',
          adaptive: true,
          adaptiveAlways: true,
          objectWidth,
          adaptiveGroup: `precision-${objectWidth}`
        }),
        { width: 200, height: 200 }
      )

      await flushUpdates()
      loadImage(browser.images[0]!, 200, 100)
      await flushUpdates()

      expect(fixture.item.background.size.value).toBe('100% auto')
    })

    it('should safely skip elements whose getElement() returns undefined during calculation', async () => {
      const fixture = mountAdaptiveUnit(reactive({
        value: '/detached.png',
        adaptive: true,
        adaptiveAlways: true,
        objectWidth: 200,
        adaptiveGroup: 'detached-group'
      }))

      await flushUpdates()
      loadImage(browser.images[0]!)
      await flushUpdates()

      vi.spyOn(fixture.item.adaptive, 'getElement').mockReturnValue(undefined)
      vi.spyOn(fixture.item.adaptive, 'isBeyond').mockReturnValue(true)

      ImageAdaptiveGroup.reset()

      expect(ImageCalculationList.get('detached-group').width).toBe(0)
    })
  })

  describe('Frame batching, post-removal frame guard, and immediate reset', () => {
    it('should not execute start() in a scheduled animation frame if all items were removed before the frame fires', async () => {
      const fixture = mountAdaptiveUnit(reactive({
        value: '/photo.png',
        adaptive: true,
        adaptiveAlways: true,
        objectWidth: 200,
        adaptiveGroup: 'transient-group'
      }))

      await flushUpdates()
      loadImage(browser.images[0]!)
      await flushUpdates()

      const makeSpy = vi.spyOn(fixture.item.adaptive, 'make')
      makeSpy.mockClear()

      // Schedule a recalculation frame, then immediately remove the last item in the same tick
      ImageAdaptiveGroup.make()
      expect(browser.frames.size).toBe(1)

      ImageAdaptiveGroup.remove(fixture.item.adaptive)
      expect(ImageAdaptiveGroup.is(fixture.item.adaptive)).toBe(false)

      await flushUpdates()
      expect(makeSpy).not.toHaveBeenCalled()
      expect(ImageCalculationList.isSize()).toBe(false)
    })

    it('should recalculate immediately without waiting for requestAnimationFrame when reset() is called', async () => {
      const fixture = mountAdaptiveUnit(
        reactive({
          value: '/photo.png',
          adaptive: true,
          adaptiveAlways: true,
          objectWidth: 200,
          adaptiveGroup: 'immediate-reset'
        }),
        { width: 200, height: 200 }
      )

      await flushUpdates()
      loadImage(browser.images[0]!, 200, 100)
      await flushUpdates()

      fixture.item.dimensions.width = 320
      ImageAdaptiveGroup.reset()

      expect(ImageCalculationList.get('immediate-reset').offsetWidth).toBe(320)
    })

    it('should safely ignore remove() for unregistered items and make() on an empty group', () => {
      const fixture = mountAdaptiveUnit(reactive({
        value: '/photo.png',
        adaptive: false
      }))

      expect(ImageAdaptiveGroup.is(fixture.item.adaptive)).toBe(false)
      ImageAdaptiveGroup.remove(fixture.item.adaptive)
      ImageAdaptiveGroup.make()
      ImageAdaptiveGroup.reset()

      expect(browser.frames.size).toBe(0)
      expect(ImageCalculationList.isSize()).toBe(false)
    })
  })

  describe('Statefulness, SSR safety, and request isolation', () => {
    it('should not schedule requestAnimationFrame when DOM runtime is unavailable (SSR environment)', async () => {
      const fixture = mountAdaptiveUnit(reactive({
        value: '/photo.png',
        adaptive: true,
        adaptiveAlways: true,
        objectWidth: 200,
        adaptiveGroup: 'ssr-guard'
      }))

      await flushUpdates()
      loadImage(browser.images[0]!)
      await flushUpdates()

      const ssrRequestContext: Record<string, unknown> = {}
      ServerStorage.init(() => ssrRequestContext)
      vi.mocked(requestAnimationFrame).mockClear()
      const originalDocument = globalThis.document

      try {
        vi.stubGlobal('document', undefined)
        ImageAdaptiveGroup.add(fixture.item.adaptive)
        ImageAdaptiveGroup.make()
        expect(ImageAdaptiveGroup.is(fixture.item.adaptive)).toBe(true)
        expect(requestAnimationFrame).not.toHaveBeenCalled()
      } finally {
        vi.stubGlobal('document', originalDocument)
      }
    })

    it('should isolate tracked items and frame state across concurrent SSR requests via ServerStorage', async () => {
      const fixture = mountAdaptiveUnit(reactive({
        value: '/photo.png',
        adaptive: true,
        adaptiveAlways: true,
        objectWidth: 200,
        adaptiveGroup: 'isolated-ssr'
      }))

      await flushUpdates()
      loadImage(browser.images[0]!)
      await flushUpdates()

      const firstContext: Record<string, unknown> = {}
      const secondContext: Record<string, unknown> = {}
      let activeRequestContext: Record<string, unknown> = firstContext
      ServerStorage.init(() => activeRequestContext)
      const originalDocument = globalThis.document

      try {
        vi.stubGlobal('document', undefined)
        ImageAdaptiveGroup.add(fixture.item.adaptive)
        expect(ImageAdaptiveGroup.is(fixture.item.adaptive)).toBe(true)

        activeRequestContext = secondContext
        expect(ImageAdaptiveGroup.is(fixture.item.adaptive)).toBe(false)

        activeRequestContext = firstContext
        expect(ImageAdaptiveGroup.is(fixture.item.adaptive)).toBe(true)
      } finally {
        vi.stubGlobal('document', originalDocument)
      }
    })

    it('should remove the last item on unmount, reset calculations, and dispose all observer subscriptions', async () => {
      const fixture = mountAdaptiveUnit(reactive({
        value: '/photo.png',
        adaptive: true,
        adaptiveAlways: true,
        objectWidth: 200,
        adaptiveGroup: 'cleanup-group'
      }))

      await flushUpdates()
      loadImage(browser.images[0]!)
      await flushUpdates()

      expect(ImageAdaptiveGroup.is(fixture.item.adaptive)).toBe(true)
      expect(ImageCalculationList.isSize()).toBe(true)

      fixture.unmount()
      await flushUpdates()

      expect(ImageAdaptiveGroup.is(fixture.item.adaptive)).toBe(false)
      expect(ImageCalculationList.isSize()).toBe(false)
      expect(browser.resizes.every(observation => observation.targets.size === 0)).toBe(true)
      expect(browser.intersections.every(observation => observation.targets.size === 0)).toBe(true)
    })
  })
})
