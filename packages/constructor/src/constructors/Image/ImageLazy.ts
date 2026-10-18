// ai-none

import {
  onBeforeUnmount,
  onMounted,
  type Ref,
  ref,
  type WatchHandle,
  watch
} from 'vue'
import { useLazyItemByMarginRef } from '@dxtmisha/functional'

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
export class ImageLazy {
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
    watch([
      element,
      () => props.lazy,
      () => props.preloadOffset
    ], () => this.update())

    onMounted(() => this.update())
    onBeforeUnmount(() => this.reset())
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
   * Resets lazy loading status and stops the active watcher.
   *
   * Сбрасывает статус ленивой загрузки и останавливает активный наблюдатель.
   */
  reset(): void {
    this.init.value = false
    this.stop()
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
}
