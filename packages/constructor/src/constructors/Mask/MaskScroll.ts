import { type Ref, ref } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { MaskElementInput } from './basicTypes'

/**
 * Scroll synchronization helper for the Mask component.
 * Keeps horizontal scroll offset of the visual character overlay aligned with the native input.
 *
 * Помощник синхронизации прокрутки для компонента Mask.
 * Поддерживает синхронное горизонтальное смещение визуального слоя символов и нативного поля ввода.
 */
export class MaskScroll extends DesignLifecycleAbstract {
  /** Reference to the mask character view container / Ссылка на контейнер отображения символов маски */
  readonly elementView = ref<HTMLElement | undefined>(undefined)

  /** Pending animation frame ID for horizontal scroll synchronization / Идентификатор ожидающего кадра анимации для синхронизации горизонтальной прокрутки */
  protected animationFrame?: number

  /**
   * Constructor
   *
   * Конструктор
   * @param element input element reference / ссылка на элемент ввода
   */
  constructor(
    protected readonly element: Ref<MaskElementInput>
  ) {
    super()
  }

  /**
   * Synchronizes scroll offset after component mount.
   *
   * Синхронизирует смещение прокрутки после монтирования компонента.
   */
  override readonly onMounted = (): void => {
    this.sync(true)
  }

  /**
   * Cancels pending scroll synchronization animation frame on unmount.
   *
   * Отменяет ожидающий кадр анимации синхронизации прокрутки при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    if (this.animationFrame !== undefined) {
      cancelAnimationFrame(this.animationFrame)
      this.animationFrame = undefined
    }
  }

  /**
   * Handles native input scroll event and aligns the character overlay scroll offset.
   *
   * Обрабатывает нативное событие прокрутки поля ввода и выравнивает смещение отображения маски.
   */
  readonly onScroll = (): void => {
    this.sync()
  }

  /**
   * Synchronizes horizontal scroll of the character overlay with the underlying input element.
   *
   * Синхронизирует горизонтальную прокрутку слоя отображения символов с элементом ввода.
   * @param withFrame schedule additional sync on the next animation frame / запланировать дополнительную синхронизацию на следующем кадре анимации
   */
  readonly sync = (withFrame?: boolean): void => {
    const applyScroll = (): void => {
      const input = this.element.value
      const view = this.elementView.value

      if (input && view) {
        view.scrollLeft = input.scrollLeft
      }
    }

    applyScroll()

    if (
      withFrame
      && typeof requestAnimationFrame !== 'undefined'
    ) {
      if (this.animationFrame !== undefined) {
        cancelAnimationFrame(this.animationFrame)
      }

      this.animationFrame = requestAnimationFrame(() => {
        this.animationFrame = undefined
        applyScroll()
      })
    }
  }
}
