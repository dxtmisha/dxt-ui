// ai-none

import { nextTick, type Ref, ref, watch } from 'vue'
import { DesignLifecycleAbstract, isDomRuntime } from '@dxtmisha/functional'

import type { TextareaAutosizeValue } from './TextareaAutosizeValue'
import type { TextareaAutosizeProps } from './props'

/** CSS custom property marking fallback mode when field-sizing is unsupported / CSS-переменная, указывающая на fallback-режим при отсутствии поддержки field-sizing */
const FIELD_SIZING_NONE_PROPERTY = '--sys-field-sizing-none'

/** Expected CSS custom property value enabling JS-based autosize fallback / Ожидаемое значение CSS-переменной, включающее JS-расчёт высоты */
const FIELD_SIZING_NONE_VALUE = '"--YES--"'

/**
 * Class for managing the height of the textarea field using a hidden clone element
 * when CSS `field-sizing: content` is not supported by the browser.
 *
 * Класс управления высотой текстового поля с помощью скрытого элемента-клона,
 * когда браузер не поддерживает CSS `field-sizing: content`.
 */
export class TextareaAutosizeResize extends DesignLifecycleAbstract {
  /**
   * Checks whether autosize functionality is enabled in component properties.
   *
   * Проверяет, включена ли функциональность автоматического изменения размера в свойствах компонента.
   * @param props component properties / свойства компонента
   * @returns true if autosize is enabled / true, если авторазмер включён
   */
  static is(props?: TextareaAutosizeProps): boolean {
    return Boolean(props?.autosize)
  }

  /** Whether the instance is currently mounted / Смонтирован ли текущий экземпляр */
  protected mounted: boolean = false

  /** Active requestAnimationFrame identifier for mount synchronization / Идентификатор активного requestAnimationFrame для синхронизации при монтировании */
  protected frameMount?: number

  /** Active requestAnimationFrame identifier for height updates / Идентификатор активного requestAnimationFrame для обновления высоты */
  protected frameHeight?: number

  /** Last measured textarea width in pixels to guard against height-only resize loops / Последняя измеренная ширина textarea в пикселях для защиты от циклов при изменении только высоты */
  protected lastWidth?: number

  /** ResizeObserver instance tracking container width changes in fallback mode / Экземпляр ResizeObserver для отслеживания изменений ширины контейнера в fallback-режиме */
  protected resizeObserver?: ResizeObserver

  /** Watcher stop handle / Функция остановки наблюдателя */
  protected stopWatch?: () => void

  /**
   * Constructor for TextareaAutosizeResize.
   *
   * Конструктор для TextareaAutosizeResize.
   * @param props input data / входные данные
   * @param element textarea DOM element reference / ссылка на DOM-элемент textarea
   * @param value lazy getter for value handler / ленивый геттер обработчика значения
   */
  constructor(
    protected readonly props: Readonly<TextareaAutosizeProps>,
    protected readonly element: Ref<HTMLTextAreaElement | undefined>,
    protected readonly value: () => TextareaAutosizeValue
  ) {
    super()
  }

  /** Reference to the hidden clone element / Ссылка на скрытый элемент-клон */
  readonly clone = ref<HTMLDivElement>()

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    this.mounted = true
    this.stopWatch?.()
    this.stopWatch = watch(this.value().item, this.on)

    if (isDomRuntime()) {
      void nextTick(() => {
        if (this.mounted) {
          this.initResizeObserver()
          this.cancelFrameMount()

          let completed = false
          const frameId = requestAnimationFrame(() => {
            completed = true
            this.frameMount = undefined

            if (this.mounted) {
              this.on()
            }
          })

          if (!completed) {
            this.frameMount = frameId
          }
        }
      })
    }
  }

  /** Callback after component unmounting / Обработчик после демонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.mounted = false
    this.stopWatch?.()
    this.stopWatch = undefined
    this.disconnectResizeObserver()
    this.cancelFrameMount()
    this.cancelFrameHeight()
  }

  /**
   * Synchronizes clone width and paddings with the textarea element.
   *
   * Синхронизирует ширину и внутренние отступы элемента-клона с элементом textarea.
   */
  readonly updateSize = (): void => {
    if (this.isElements()) {
      const style = getComputedStyle(this.element.value)
      const styleClone = this.clone.value.style
      const width = this.element.value.offsetWidth

      this.lastWidth = width
      styleClone.paddingTop = style.paddingTop
      styleClone.paddingRight = style.paddingRight
      styleClone.paddingBottom = style.paddingBottom
      styleClone.paddingLeft = style.paddingLeft
      styleClone.width = `${width}px`
    }
  }

  /**
   * Event handler for updating clone dimensions and text measurement.
   *
   * Обработчик события для обновления размеров клона и расчёта высоты текста.
   */
  readonly on = (): void => {
    this.updateSize()
    this.updateValue()
  }

  /**
   * Event handler for changing the value and recalculating textarea height.
   *
   * Обработчик события изменения значения и пересчёта высоты textarea.
   * @param event invoked input event / вызываемое событие ввода
   */
  readonly onInput = (event: InputEvent): void => {
    this.value().on(event)
    this.on()
  }

  /**
   * Checks whether DOM elements are attached and JS autosize fallback mode is active.
   *
   * Проверяет, привязаны ли DOM-элементы и активен ли fallback-режим JS-авторазмера.
   * @returns true if elements are ready for JS autosize / true, если элементы готовы для JS-авторазмера
   */
  protected isElements(): this is {
    element: Ref<HTMLTextAreaElement>
    clone: Ref<HTMLDivElement>
  } {
    return Boolean(
      isDomRuntime()
      && TextareaAutosizeResize.is(this.props)
      && this.element.value
      && this.clone.value
      && getComputedStyle(this.element.value)
        .getPropertyValue(FIELD_SIZING_NONE_PROPERTY)
        .trim() === FIELD_SIZING_NONE_VALUE
    )
  }

  /**
   * Updates the content of the clone element and schedules height adjustment.
   *
   * Обновляет содержимое элемента-клона и планирует корректировку высоты.
   */
  protected updateValue(): void {
    if (this.isElements()) {
      this.clone.value.innerText = `${this.value().item.value} --`
      this.cancelFrameHeight()

      let completed = false
      const frameId = requestAnimationFrame(() => {
        completed = true
        this.frameHeight = undefined
        this.updateHeight()
      })

      if (!completed) {
        this.frameHeight = frameId
      }
    }
  }

  /**
   * Updates the height of the textarea element from the clone element height.
   *
   * Обновляет высоту элемента textarea на основе высоты элемента-клона.
   */
  protected readonly updateHeight = (): void => {
    if (this.isElements()) {
      this.element.value.style.height = `${this.clone.value.offsetHeight}px`
    }
  }

  /**
   * Cancels a pending mount animation frame if scheduled.
   *
   * Отменяет запланированный кадр анимации монтирования, если он активен.
   */
  protected cancelFrameMount(): void {
    if (this.frameMount !== undefined) {
      cancelAnimationFrame(this.frameMount)
      this.frameMount = undefined
    }
  }

  /**
   * Cancels a pending height update animation frame if scheduled.
   *
   * Отменяет запланированный кадр анимации обновления высоты, если он активен.
   */
  protected cancelFrameHeight(): void {
    if (this.frameHeight !== undefined) {
      cancelAnimationFrame(this.frameHeight)
      this.frameHeight = undefined
    }
  }

  /**
   * Disconnects and releases the active ResizeObserver instance if present.
   *
   * Отключает и освобождает активный экземпляр ResizeObserver при его наличии.
   */
  protected disconnectResizeObserver(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
      this.resizeObserver = undefined
    }

    this.lastWidth = undefined
  }

  /**
   * Initializes a ResizeObserver on the textarea element in fallback mode to recalculate height when width changes.
   *
   * Инициализирует ResizeObserver на элементе textarea в fallback-режиме для пересчёта высоты при изменении ширины.
   */
  protected initResizeObserver(): void {
    this.disconnectResizeObserver()

    if (
      this.isElements()
      && typeof ResizeObserver !== 'undefined'
    ) {
      this.lastWidth = this.element.value.offsetWidth
      this.resizeObserver = new ResizeObserver(this.onResize)
      this.resizeObserver.observe(this.element.value)
    }
  }

  /**
   * Handles ResizeObserver notifications and recalculates height only when element width actually changes.
   *
   * Обрабатывает уведомления ResizeObserver и пересчитывает высоту только при фактическом изменении ширины элемента.
   */
  protected readonly onResize = (): void => {
    if (this.mounted && this.element.value) {
      const width = this.element.value.offsetWidth

      if (width !== this.lastWidth) {
        this.lastWidth = width
        this.on()
      }
    }
  }
}
