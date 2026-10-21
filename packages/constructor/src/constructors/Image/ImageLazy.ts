// ai-none

import {
  type Ref,
  ref,
  type WatchHandle,
  watch
} from 'vue'
import {
  DesignLifecycleAbstract,
  useLazyItemByMarginRef
} from '@dxtmisha/functional'

import type { ImageProps } from './props'

/**
 * Class for managing lazy loading of image elements.
 * Tracks element visibility via IntersectionObserver, manages preload offsets,
 * and controls deferred resource loading states.
 *
 * Класс для управления ленивой загрузкой элементов изображения.
 * Отслеживает видимость элемента через IntersectionObserver, управляет отступами предзагрузки
 * и контролирует состояния отложенной загрузки ресурсов.
 */
export class ImageLazy extends DesignLifecycleAbstract {
  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    this.update()
  }

  /** Callback after component unmounting / Обработчик после демонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.reset()
  }

  /** Initialization status / Статус инициализации */
  protected readonly init = ref<boolean>(false)

  /** Item tracking instance / Экземпляр отслеживания появления */
  protected item?: ReturnType<typeof useLazyItemByMarginRef>

  /** Watch handle for tracking status / Дескриптор наблюдения за статусом */
  protected status?: WatchHandle

  /**
   * Constructor for creating a lazy loading manager.
   *
   * Конструктор для создания менеджера ленивой загрузки.
   * @param props input data / входные данные
   * @param element image element / элемент изображения
   */
  constructor(
    protected readonly props: ImageProps,
    protected readonly element: Ref<HTMLElement | undefined>
  ) {
    super()

    watch([
      element,
      () => props.lazy,
      () => props.preloadOffset
    ], () => this.update())
  }

  /**
   * Determines whether lazy loading is enabled.
   *
   * Определяет, включена ли ленивая загрузка.
   * @returns true if lazy loading is enabled / true, если ленивая загрузка включена
   */
  isLazy(): boolean {
    return Boolean(this.props.lazy) && !this.init.value
  }

  /**
   * Updates lazy loading status and listener based on element and props.
   *
   * Обновляет статус и слушатель ленивой загрузки на основе элемента и свойств.
   */
  update(): void {
    if (
      this.props.lazy
      && this.element.value
    ) {
      this.make()
    } else {
      this.reset()
    }
  }

  /**
   * Resets lazy loading status and stops the active watcher.
   *
   * Сбрасывает статус ленивой загрузки и останавливает активный наблюдатель.
   */
  reset(): void {
    this.init.value = false
    this.stop()
  }

  /**
   * Initializes lazy loading.
   *
   * Инициализирует ленивую загрузку.
   */
  make(): void {
    this.reset()

    this.item = useLazyItemByMarginRef(this.element, `${this.props.preloadOffset} 0px`)
    this.status = watch(this.item.lazyItemStatus, (status) => {
      if (status) {
        this.init.value = true
        this.stop()
      }
    }, { immediate: true })
  }

  /**
   * Stops lazy tracking and active watcher.
   *
   * Останавливает отслеживание ленивой загрузки и активный наблюдатель.
   */
  stop(): void {
    if (this.status) {
      this.status.stop()
      this.status = undefined
    }

    if (this.item) {
      this.item.removeLazyItem()
      this.item = undefined
    }
  }
}
