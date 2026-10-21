import './testWarnings'
import { afterEach, beforeEach, expect, vi } from 'vitest'
import { createApp, h, nextTick, onMounted, onUnmounted, ref, type Ref, type VNodeChild } from 'vue'
import { DesignLifecycleAbstract, ServerStorage, type ConstrEmit } from '@dxtmisha/functional'
import { ClientOnlyInclude } from '../../../classes/ClientOnlyInclude'
import { ImageAdaptiveItem } from '../ImageAdaptiveItem'
import { ImageBackground } from '../ImageBackground'
import { ImageCoordinator } from '../ImageCoordinator'
import { ImageData } from '../ImageData'
import { ImageEvent } from '../ImageEvent'
import { ImageImg } from '../ImageImg'
import { ImageLazy } from '../ImageLazy'
import { ImagePosition } from '../ImagePosition'
import { ImageText } from '../ImageText'
import { ImageType } from '../ImageType'
import { ImageUint8Array } from '../ImageUint8Array'
import type { ImageEmits } from '../types'
import type { ImageProps } from '../props'

/** Mounted helper and its lifecycle / Смонтированный помощник и его жизненный цикл */
export interface MountedHelper<Item> {
  /** Tested helper / Проверяемый помощник */
  item: Item
  /** Host container / Контейнер */
  host: HTMLElement
  /** Reactive element / Реактивный элемент */
  element: Ref<HTMLElement | undefined>
  /** Idempotent cleanup / Идемпотентная очистка */
  unmount: () => void
}

/** Real image helper dependencies / Реальные зависимости помощников изображения */
export interface ImageGraph {
  /** Client readiness / Готовность клиента */
  clientOnly: ClientOnlyInclude
  /** Source classification / Классификация источника */
  type: ImageType
  /** Lazy loading / Ленивая загрузка */
  lazy: ImageLazy
  /** Loaded data / Загруженные данные */
  data: ImageData
  /** Event manager / Менеджер событий */
  event: ImageEvent
  /** Crop coordinates / Координаты кадрирования */
  coordinator: ImageCoordinator
  /** Position / Позиция */
  position: ImagePosition
  /** Adaptive scaling / Адаптивное масштабирование */
  adaptive: ImageAdaptiveItem
  /** Background / Фон */
  background: ImageBackground
  /** Native image bindings / Привязки нативного изображения */
  img: ImageImg
  /** Text representation / Текстовое представление */
  text: ImageText
  /** Manager for images in Uint8Array format / Менеджер для изображений в формате Uint8Array */
  uint8Array: ImageUint8Array
}

/** Controlled intersection observer / Управляемый наблюдатель пересечений */
export interface IntersectionObservation {
  /** Browser observer / Браузерный наблюдатель */
  observer: IntersectionObserver
  /** Platform callback / Обработчик платформы */
  callback: IntersectionObserverCallback
  /** Active targets / Активные цели */
  targets: Set<Element>
}

/** Controlled resize observer / Управляемый наблюдатель размеров */
export interface ResizeObservation {
  /** Browser observer / Браузерный наблюдатель */
  observer: ResizeObserver
  /** Platform callback / Обработчик платформы */
  callback: ResizeObserverCallback
  /** Active targets / Активные цели */
  targets: Set<Element>
}

/** Controlled browser state / Управляемое состояние браузера */
export const browser = {
  /** Decoding image elements / Элементы декодирования изображений */
  images: [] as HTMLImageElement[],
  /** Intersection observers / Наблюдатели пересечений */
  intersections: [] as IntersectionObservation[],
  /** Resize observers / Наблюдатели размеров */
  resizes: [] as ResizeObservation[],
  /** Pending animation frames / Ожидающие кадры анимации */
  // eslint-disable-next-line @stylistic/spaced-comment -- Required bundler annotation / Обязательная аннотация сборщика
  frames: /*#__PURE__*/ new Map<number, FrameRequestCallback>()
}

/** Mounted application cleanup callbacks / Обработчики очистки приложений */
const cleanup: Array<() => void> = []

beforeEach(() => {
  ServerStorage.reset()
  browser.images.length = 0
  browser.intersections.length = 0
  browser.resizes.length = 0
  browser.frames.clear()
  let frameIdentifier = 0
  let objectIdentifier = 0

  vi.stubGlobal('requestAnimationFrame', vi.fn((callback: FrameRequestCallback): number => {
    browser.frames.set(++frameIdentifier, callback)
    return frameIdentifier
  }))
  vi.stubGlobal('cancelAnimationFrame', vi.fn((identifier: number): void => {
    browser.frames.delete(identifier)
  }))
  vi.stubGlobal('Image', vi.fn(function (): HTMLImageElement {
    const image = document.createElement('img')
    browser.images.push(image)
    return image
  }))

  /**
   * Controls blob URL allocation without changing URL parsing.
   *
   * Управляет выделением URL объектов, сохраняя разбор URL.
   */
  class ObjectURL extends URL {
    /** Allocated URL / Выделенный URL */
    static createObjectURL = vi.fn(() => `blob:image-${++objectIdentifier}`)
    /** URL disposal / Освобождение URL */
    static revokeObjectURL = vi.fn()
  }
  vi.stubGlobal('URL', ObjectURL)
  vi.stubGlobal('IntersectionObserver', vi.fn(function (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ): IntersectionObserver {
    const targets = new Set<Element>()
    const observer: IntersectionObserver = {
      root: options?.root ?? null,
      rootMargin: options?.rootMargin ?? '0px',
      scrollMargin: '0px',
      thresholds: [0],
      observe: vi.fn((target: Element): void => { targets.add(target) }),
      unobserve: vi.fn((target: Element): void => { targets.delete(target) }),
      disconnect: vi.fn((): void => { targets.clear() }),
      takeRecords: (): IntersectionObserverEntry[] => []
    }
    browser.intersections.push({ callback, observer, targets })
    return observer
  }))
  vi.stubGlobal('ResizeObserver', vi.fn(function (callback: ResizeObserverCallback): ResizeObserver {
    const targets = new Set<Element>()
    const observer: ResizeObserver = {
      observe: vi.fn((target: Element): void => { targets.add(target) }),
      unobserve: vi.fn((target: Element): void => { targets.delete(target) }),
      disconnect: vi.fn((): void => { targets.clear() })
    }
    browser.resizes.push({ observer, callback, targets })
    return observer
  }))
})

afterEach(async () => {
  try {
    cleanup.splice(0).reverse().forEach(unmount => unmount())
    await flushUpdates()
    expect(browser.intersections.every(observation => observation.targets.size === 0), 'Leaked intersection subscriptions').toBe(true)
    expect(browser.resizes.every(observation => observation.targets.size === 0), 'Leaked resize subscriptions').toBe(true)
    expect(URL.revokeObjectURL).toHaveBeenCalledTimes(vi.mocked(URL.createObjectURL).mock.calls.length)
  } finally {
    browser.frames.clear()
    ServerStorage.reset()
    vi.unstubAllGlobals()
  }
})

/**
 * Mounts helpers in the actual Vue lifecycle and registers cleanup.
 *
 * Монтирует помощников в настоящем жизненном цикле Vue и регистрирует очистку.
 * @param factory helper factory / фабрика помощника
 * @param render optional rendered output / необязательный результат рендеринга
 * @returns mounted fixture / смонтированная фикстура
 */
export function mountHelper<Item>(
  factory: (element: Ref<HTMLElement | undefined>) => Item,
  render?: (item: Item) => VNodeChild
): MountedHelper<Item> {
  const host = document.createElement('div')
  document.body.append(host)
  const element = ref<HTMLElement>()
  let item!: Item
  const application = createApp({
    setup() {
      item = factory(element)

      if (item instanceof DesignLifecycleAbstract) {
        const lifecycle = item as DesignLifecycleAbstract
        onMounted(() => lifecycle.onMounted?.())
        onUnmounted(() => lifecycle.onUnmounted?.())
      }

      return () => h('div', { ref: element }, render ? [render(item)] : undefined)
    }
  })
  let mounted = true
  const unmount = (): void => {
    if (mounted) {
      mounted = false

      if (item instanceof DesignLifecycleAbstract) {
        (item as DesignLifecycleAbstract).onUnmounted?.()
      }

      application.unmount()
      host.remove()
    }
  }
  cleanup.push(unmount)
  application.mount(host)
  return { item, host, element, unmount }
}

/**
 * Connects actual Image dependencies without replacing their logic.
 *
 * Соединяет реальные зависимости Image без подмены их логики.
 * @param props reactive image properties / реактивные свойства изображения
 * @param emits load event observer / наблюдатель события загрузки
 * @param render optional rendered output / необязательный результат рендеринга
 * @returns mounted helper graph / смонтированный граф помощников
 */
export function mountImageGraph(
  props: ImageProps,
  emits?: ConstrEmit<ImageEmits>,
  render?: (graph: ImageGraph) => VNodeChild
): MountedHelper<ImageGraph> {
  Object.assign(props, { lazy: props.lazy ?? false, preloadOffset: props.preloadOffset ?? '1024px' })
  return mountHelper((element) => {
    const clientOnly = new ClientOnlyInclude({ clientOnly: true })
    const lazy = new ImageLazy(props, element)
    const type = new ImageType(props, clientOnly.isMounted)
    const uint8Array = new ImageUint8Array(props)
    const data = new ImageData(
      props,
      clientOnly.isMounted,
      () => lazy,
      () => type,
      () => uint8Array
    )
    const event = new ImageEvent(
      () => type,
      () => data,
      emits
    )
    const coordinator = new ImageCoordinator(props)
    const position = new ImagePosition(props, () => coordinator)
    const adaptive = new ImageAdaptiveItem(props, element, clientOnly.isMounted, () => data)
    const background = new ImageBackground(props, () => data, () => coordinator, () => adaptive)
    const img = new ImageImg(props, element, type, position, background, lazy)
    const text = new ImageText(props, () => type, () => data)

    onMounted(() => {
      lazy.onMounted?.()
    })

    onUnmounted(() => {
      lazy.onUnmounted?.()
      uint8Array.onUnmounted()
    })

    return { clientOnly, lazy, type, data, event, coordinator, position, adaptive, background, img, text, uint8Array }
  }, render)
}

/**
 * Flushes Vue updates, promises and scheduled platform frames.
 *
 * Выполняет обновления Vue, промисы и запланированные кадры платформы.
 * @returns completion promise / промис завершения
 */
export async function flushUpdates(): Promise<void> {
  for (let iteration = 0; iteration < 4; iteration++) {
    await nextTick()
    const frames = [...browser.frames.values()]
    browser.frames.clear()
    frames.forEach(callback => callback(0))
    await Promise.resolve()
  }
  await nextTick()
}

/**
 * Completes platform decoding with controlled intrinsic dimensions.
 *
 * Завершает декодирование платформы с управляемыми исходными размерами.
 * @param image decoding element / элемент декодирования
 * @param width intrinsic width / исходная ширина
 * @param height intrinsic height / исходная высота
 */
export function loadImage(image: HTMLImageElement, width = 200, height = 100): void {
  Object.defineProperties(image, {
    naturalWidth: { configurable: true, value: width },
    naturalHeight: { configurable: true, value: height }
  })
  image.dispatchEvent(new Event('load'))
}

/**
 * Delivers an intersection event to currently observing browser instances.
 *
 * Передаёт событие пересечения текущим браузерным наблюдателям.
 * @param element observed element / наблюдаемый элемент
 * @param visible intersection state / состояние пересечения
 */
export function intersect(element: Element, visible = true): void {
  browser.intersections.filter(observation => observation.targets.has(element)).forEach((observation) => {
    observation.callback([{
      time: 0,
      target: element,
      rootBounds: null,
      boundingClientRect: element.getBoundingClientRect(),
      intersectionRect: element.getBoundingClientRect(),
      isIntersecting: visible,
      intersectionRatio: visible ? 1 : 0
    }], observation.observer)
  })
}
