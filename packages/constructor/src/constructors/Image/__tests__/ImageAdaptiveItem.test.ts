// @vitest-environment jsdom
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, h, nextTick, reactive, ref, shallowRef, type Ref, type ShallowRef, type VNode } from 'vue'
import { type EventRef, isString, ServerStorage } from '@dxtmisha/functional'
import { ClientOnlyInclude } from '../../../classes/ClientOnlyInclude'
import { ImageAdaptiveItem } from '../ImageAdaptiveItem'
import { ImageAdaptiveGroup } from '../ImageAdaptiveGroup'
import { ImageBackground } from '../ImageBackground'
import { ImageCalculationList } from '../ImageCalculationList'
import { ImageCoordinator } from '../ImageCoordinator'
import type { ImageData } from '../ImageData'
import type { ImageElement, ImageEventItem, ImageSize } from '../basicTypes'
import type { ImageProps } from '../props'

/**
 * Exposes the resize manager for lifecycle assertions.
 *
 * Предоставляет менеджер resize для проверок жизненного цикла.
 */
class ImageAdaptiveItemFixture extends ImageAdaptiveItem {
  /**
   * Returns the current resize manager.
   *
   * Возвращает текущий менеджер resize.
   * @returns resize manager or undefined / менеджер resize или undefined
   */
  get resizeEvent(): EventRef<HTMLElement, Event> | undefined {
    return this.resize
  }
}

/** Controlled resize observation / Управляемое наблюдение за изменением размера */
export interface ResizeObservation {
  /** Observer instance / Экземпляр наблюдателя */
  observer: ResizeObserver
  /** Resize callback / Обработчик изменения размера */
  callback: ResizeObserverCallback
  /** Observed element / Наблюдаемый элемент */
  element?: Element
}

/** Mounted adaptive helper fixture / Смонтированная фикстура адаптивного помощника */
export interface AdaptiveFixture {
  /** Adaptive helper / Адаптивный помощник */
  item: ImageAdaptiveItemFixture
  /** Background helper / Помощник фона */
  background: ImageBackground
  /** Reactive properties / Реактивные свойства */
  props: ImageProps
  /** Current element / Текущий элемент */
  element: Ref<ImageElement>
  /** Non-reactive DOM dimensions / Нереактивные размеры DOM */
  dimensions: ImageSize
  /** Loaded image data / Данные загруженного изображения */
  image: ShallowRef<ImageEventItem>
  /** Key for replacing the rendered element / Ключ для замены отрисованного элемента */
  elementKey: Ref<number>
  /** Fixture cleanup / Очистка фикстуры */
  unmount: () => void
}

/** Scheduled frame callbacks / Запланированные обработчики кадра */
let frames: FrameRequestCallback[] = []
/** Controlled resize observations / Управляемые наблюдения за изменением размера */
let observations: ResizeObservation[] = []
/** Mounted fixture cleanup callbacks / Обработчики очистки смонтированных фикстур */
let cleanup: Array<() => void> = []

beforeEach(() => {
  ServerStorage.reset()
  frames = []
  observations = []
  cleanup = []
  vi.stubGlobal('requestAnimationFrame', vi.fn((callback: FrameRequestCallback): number => frames.push(callback)))
  vi.stubGlobal('IntersectionObserver', vi.fn(function (): IntersectionObserver {
    return {
      root: null,
      rootMargin: '512px 0px',
      scrollMargin: '0px',
      thresholds: [0],
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
      takeRecords: () => []
    }
  }))
  vi.stubGlobal('ResizeObserver', vi.fn(function (callback: ResizeObserverCallback): ResizeObserver {
    const observation: ResizeObservation = {
      callback,
      observer: {
        observe: vi.fn((element: Element) => {
          observation.element = element
        }),
        unobserve: vi.fn(),
        disconnect: vi.fn(() => {
          observation.element = undefined
        })
      }
    }
    observations.push(observation)
    return observation.observer
  }))
})

afterEach(() => {
  cleanup.forEach(unmount => unmount())
  frames.splice(0).forEach(callback => callback(0))
  ServerStorage.reset()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

/**
 * Runs pending group calculations and Vue updates.
 *
 * Выполняет ожидающие групповые вычисления и обновления Vue.
 * @returns completion promise / промис завершения
 */
async function flushCalculations(): Promise<void> {
  await nextTick()
  frames.splice(0).forEach(callback => callback(0))
  await nextTick()
}

/**
 * Supplies mutable DOM dimensions without making them reactive.
 *
 * Задаёт изменяемые размеры DOM, не делая их реактивными.
 * @param element target element / целевой элемент
 * @param dimensions DOM dimensions / размеры DOM
 */
function setDimensions(element: ImageElement, dimensions: ImageSize): void {
  if (element) {
    Object.defineProperties(element, {
      offsetWidth: { configurable: true, get: () => dimensions.width },
      offsetHeight: { configurable: true, get: () => dimensions.height }
    })
  }
}

/**
 * Delivers a resize notification to active observers of the element.
 *
 * Передаёт уведомление об изменении размера активным наблюдателям элемента.
 * @param element resized element / элемент с изменённым размером
 */
function notifyResize(element: ImageElement): void {
  observations.filter(observation => observation.element === element)
    .forEach(observation => observation.callback([], observation.observer))
}

/**
 * Mounts adaptive and background helpers inside the actual Vue lifecycle.
 *
 * Монтирует адаптивный помощник и помощник фона в настоящем жизненном цикле Vue.
 * @param overrides initial properties / начальные свойства
 * @returns mounted fixture / смонтированная фикстура
 */
async function createAdaptive(overrides: Partial<ImageProps> = {}): Promise<AdaptiveFixture> {
  const props = reactive<ImageProps>({
    adaptive: true,
    adaptiveAlways: true,
    adaptiveGroup: 'gallery',
    objectWidth: 200,
    objectHeight: 100,
    ...overrides
  })
  const element = ref<ImageElement>()
  const elementKey = ref(0)
  const dimensions: ImageSize = { width: 200, height: 200 }
  const image = shallowRef<ImageEventItem>({
    image: document.createElement('img'),
    src: '/photo.png',
    width: 200,
    height: 100
  })
  const data = {
    image,
    isImage: () => Boolean(image.value && !isString(image.value))
  } as unknown as ImageData
  let item: ImageAdaptiveItemFixture | undefined
  let background: ImageBackground | undefined
  const host = document.createElement('div')
  document.body.append(host)
  const application = createApp({
    setup(): () => VNode {
      item = new ImageAdaptiveItemFixture(props, new ClientOnlyInclude({ clientOnly: false }), data, element)
      background = new ImageBackground(props, data, new ImageCoordinator(props), item)
      return () => h('div', {
        key: elementKey.value,
        ref: element,
        style: { backgroundSize: background?.size.value }
      })
    }
  })
  application.mount(host)
  let mounted = true
  const unmount = (): void => {
    if (mounted) {
      mounted = false
      application.unmount()
      host.remove()
    }
  }
  cleanup.push(unmount)
  if (!item || !background || !element.value) {
    throw new Error('Adaptive helper was not mounted')
  }
  setDimensions(element.value, dimensions)
  await flushCalculations()
  return { item, background, props, element, dimensions, image, elementKey, unmount }
}

describe('ImageAdaptiveItem', () => {
  it.each([
    [200, undefined, 0, 100],
    [undefined, 100, 100, 0]
  ] as const)('keeps scaling finite with physical %s by %s and intrinsic %s by %s', async (objectWidth, objectHeight, width, height) => {
    const fixture = await createAdaptive({ objectWidth, objectHeight })
    fixture.image.value = { image: document.createElement('img'), src: '/zero.png', width, height }
    await flushCalculations()
    expect(fixture.item.size.value).toBe(0)
    expect(fixture.item.factor.value).toBe(1)
    expect(fixture.background.size.value).not.toMatch(/NaN|Infinity/)
  })

  it('exposes identity, group and physical dimensions without losing numeric precision', async () => {
    const fixture = await createAdaptive({ objectWidth: '200.5', objectHeight: '100.25' })
    expect(fixture.item.getElement()).toBe(fixture.element.value)
    expect(fixture.item.id).not.toBe('')
    expect(fixture.item.group).toBe('gallery')
    expect(fixture.item.isGroup('gallery')).toBe(true)
    expect(fixture.item.isGroup('other')).toBe(false)
    expect([fixture.item.width, fixture.item.height]).toEqual([200.5, 100.25])
    expect(fixture.item.setPercent(1, 1)).toBe(fixture.item)
    fixture.props.objectWidth = undefined
    fixture.props.objectHeight = undefined
    await flushCalculations()
    expect(fixture.item.active).toBe(false)
    expect(fixture.item.type).toBeUndefined()
    expect(fixture.item.size.value).toBe(0)
  })

  it('registers active images and calculates their initial sizes', async () => {
    const fixture = await createAdaptive()
    expect(ImageAdaptiveGroup.is(fixture.item)).toBe(true)
    expect(fixture.item.resizeEvent?.isActive()).toBe(true)
    expect(fixture.item.isBeyond()).toBe(true)
    expect(fixture.item.size.value).toBe(100)
    expect(fixture.item.factor.value).toBe(1)
    expect(fixture.element.value?.style.backgroundSize).toBe('100%')
  })

  it('keeps disabled adaptation out of the group and stops tracking', async () => {
    const fixture = await createAdaptive({ adaptive: false })
    expect(fixture.item.is()).toBe(false)
    expect(ImageAdaptiveGroup.is(fixture.item)).toBe(false)
    expect(observations).toHaveLength(0)
    expect(fixture.item.resizeEvent).toBeUndefined()
  })

  it('recalculates physical widths while the visible element list stays the same', async () => {
    const fixture = await createAdaptive()
    const smaller = await createAdaptive({ objectWidth: 100, objectHeight: 50 })
    expect(smaller.background.size.value).toBe('50% auto')

    fixture.props.objectWidth = 400
    await flushCalculations()

    expect(ImageCalculationList.get('gallery').width).toBe(400)
    expect(smaller.element.value?.style.backgroundSize).toBe('25%')
  })

  it('recalculates physical heights when scaling along the Y axis', async () => {
    const fixture = await createAdaptive({ objectWidth: undefined })
    const smaller = await createAdaptive({ objectWidth: undefined, objectHeight: 50 })
    expect(smaller.background.size.value).toBe('auto 25%')
    fixture.props.objectHeight = 200
    await flushCalculations()

    expect(ImageCalculationList.get('gallery').height).toBe(200)
    expect(smaller.element.value?.style.backgroundSize).toBe('auto 12.5%')
  })

  it('recalculates visibility when adaptiveAlways changes', async () => {
    const fixture = await createAdaptive()
    fixture.props.adaptiveAlways = false
    await flushCalculations()
    expect(fixture.item.isBeyond()).toBe(false)
    expect(ImageCalculationList.get('gallery').width).toBe(0)

    fixture.props.adaptiveAlways = true
    await flushCalculations()
    expect(fixture.item.isBeyond()).toBe(true)
    expect(ImageCalculationList.get('gallery').width).toBe(200)
  })

  it('removes unloaded image data and reactivates after loading', async () => {
    const fixture = await createAdaptive()
    fixture.image.value = undefined
    await flushCalculations()
    expect(ImageAdaptiveGroup.is(fixture.item)).toBe(false)
    expect(observations.every(observation => !observation.element)).toBe(true)

    fixture.image.value = {
      image: document.createElement('img'),
      src: '/loaded.png',
      width: 400,
      height: 100
    }
    await flushCalculations()
    expect(ImageAdaptiveGroup.is(fixture.item)).toBe(true)
    expect(fixture.item.size.value).toBe(50)
  })

  it('recalculates both groups after an image changes its group', async () => {
    const fixture = await createAdaptive()
    const smaller = await createAdaptive({ objectWidth: 100, objectHeight: 50 })
    fixture.props.adaptiveGroup = 'other'
    await flushCalculations()

    expect(ImageCalculationList.get('gallery').width).toBe(100)
    expect(ImageCalculationList.get('other').width).toBe(200)
    expect(smaller.element.value?.style.backgroundSize).toBe('100%')
  })

  it('recalculates the group factor when loaded image dimensions change', async () => {
    const fixture = await createAdaptive()
    fixture.image.value = {
      image: document.createElement('img'),
      src: '/portrait.png',
      width: 200,
      height: 400
    }
    await flushCalculations()

    expect(fixture.item.size.value).toBe(400)
    expect(ImageCalculationList.get('gallery').factorMax).toBe(0.5)
    expect(fixture.background.size.value).toBe('50% auto')
    expect(fixture.element.value?.style.backgroundSize).toBe('50%')
  })

  it('invalidates cached computed dimensions after a DOM resize', async () => {
    const fixture = await createAdaptive()
    expect(fixture.item.size.value).toBe(100)
    fixture.dimensions.width = 300
    notifyResize(fixture.element.value)
    await flushCalculations()

    expect(ImageCalculationList.get('gallery').offsetWidth).toBe(300)
    expect(fixture.item.size.value).toBe(150)
  })

  it('updates other backgrounds when one element changes the group limiting factor', async () => {
    const fixture = await createAdaptive()
    const other = await createAdaptive()
    fixture.dimensions.height = 50
    notifyResize(fixture.element.value)
    await flushCalculations()

    expect(fixture.item.factor.value).toBe(0.5)
    expect(other.background.size.value).toBe('50% auto')
    expect(other.element.value?.style.backgroundSize).toBe('50%')
  })

  it('recovers from zero DOM dimensions without invalid percentages', async () => {
    const fixture = await createAdaptive()
    fixture.dimensions.width = 0
    fixture.dimensions.height = 0
    notifyResize(fixture.element.value)
    await flushCalculations()

    expect(fixture.item.size.value).toBe(0)
    expect(fixture.item.factor.value).toBe(1)
    expect(fixture.background.size.value).toBeNull()

    fixture.dimensions.width = 300
    fixture.dimensions.height = 200
    notifyResize(fixture.element.value)
    await flushCalculations()
    expect(fixture.item.size.value).toBe(150)
    expect(fixture.background.size.value).toBe('100% auto')
  })

  it('retargets resize observation when Vue replaces the element', async () => {
    const fixture = await createAdaptive()
    const previousElement = fixture.element.value
    const previousObservation = observations.find(observation => observation.element === previousElement)
    fixture.elementKey.value++
    await nextTick()
    fixture.dimensions.width = 300
    setDimensions(fixture.element.value, fixture.dimensions)
    notifyResize(fixture.element.value)
    await flushCalculations()

    expect(fixture.element.value).not.toBe(previousElement)
    expect(previousObservation?.observer.disconnect).toHaveBeenCalled()
    expect(observations.some(observation => observation.element === fixture.element.value)).toBe(true)
    expect(fixture.item.size.value).toBe(150)
  })

  it('disconnects resize observers on disabling, reactivation and unmount', async () => {
    const fixture = await createAdaptive()
    const resize = fixture.item.resizeEvent
    const previousElement = fixture.element.value
    const observation = observations.find(observation => observation.element === fixture.element.value)
    fixture.props.adaptive = false
    await flushCalculations()
    expect(observation?.observer.disconnect).toHaveBeenCalled()
    expect(ImageAdaptiveGroup.is(fixture.item)).toBe(false)
    expect(fixture.item.resizeEvent).toBeUndefined()

    fixture.elementKey.value++
    await nextTick()
    setDimensions(fixture.element.value, fixture.dimensions)
    expect(resize?.getElement()).toBe(previousElement)

    fixture.props.adaptive = true
    await flushCalculations()
    expect(ImageAdaptiveGroup.is(fixture.item)).toBe(true)
    expect(fixture.item.resizeEvent).not.toBe(resize)
    expect(fixture.item.resizeEvent?.isActive()).toBe(true)
    fixture.unmount()
    expect(ImageAdaptiveGroup.is(fixture.item)).toBe(false)
    expect(observations.every(observation => !observation.element)).toBe(true)
    expect(fixture.item.resizeEvent).toBeUndefined()
  })

  it('batches property changes and resize notifications into one frame', async () => {
    const fixture = await createAdaptive()
    vi.mocked(requestAnimationFrame).mockClear()
    fixture.props.objectWidth = 400
    fixture.props.objectHeight = 200
    fixture.dimensions.width = 300
    notifyResize(fixture.element.value)
    notifyResize(fixture.element.value)
    await nextTick()

    expect(requestAnimationFrame).toHaveBeenCalledTimes(1)
    await flushCalculations()
    expect(ImageCalculationList.get('gallery').width).toBe(400)
    expect(fixture.item.size.value).toBe(150)
  })
})
