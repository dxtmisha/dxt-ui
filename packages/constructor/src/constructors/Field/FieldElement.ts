// ai-none

import { nextTick, ref, watch, type Ref } from 'vue'
import { DesignLifecycleAbstract, getElementId, isFilled } from '@dxtmisha/functional'

import type { FieldProps } from './props'

/**
 * Class for managing DOM elements and their attributes in the field.
 * It handles tag selection (div/label), label 'for' attributes, and references to the input element.
 *
 * Класс для управления DOM-элементами и их атрибутами в поле.
 * Управляет выбором тега (div/label), атрибутом 'for' для метки и ссылками на элемент ввода.
 */
export class FieldElement extends DesignLifecycleAbstract {
  /**
   * Checks if the field style is classic.
   *
   * Проверяет, является ли поле классическим.
   * @param props input properties / входящие свойства
   * @returns true if style is classic / true, если стиль классический
   */
  static isClassic(props?: Readonly<FieldProps>): boolean {
    return Boolean(
      props?.classic
      && !props.basic
      && !props.boxed
      && !props.filled
      && !props.outlined
      && !props.tonal
    )
  }

  /** Reactive reference to the input element / Реактивная ссылка на элемент ввода */
  readonly inputElement = ref<HTMLInputElement | undefined>()

  /** Default unique element identifier / Идентификатор элемента по умолчанию */
  protected readonly elementIdDefault = getElementId()

  /** Watcher stop handle / Функция остановки наблюдателя */
  protected stopWatch?: () => void

  /**
   * Constructor for initializing FieldElement.
   *
   * Конструктор для инициализации FieldElement.
   * @param props input properties / входящие свойства
   * @param element reference to the parent DOM element / ссылка на родительский DOM-элемент
   */
  constructor(
    protected readonly props: Readonly<FieldProps>,
    protected readonly element: Ref<HTMLLabelElement | undefined>
  ) {
    super()
  }

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = watch(this.element, this.update)
    void nextTick().then(() => {
      if (this.stopWatch) {
        this.update()
      }
    })
  }

  /** Callback after component unmounting / Обработчик после демонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
  }

  /**
   * Returns the unique identifier of the field.
   *
   * Возвращает уникальный идентификатор поля.
   * @returns unique identifier / уникальный идентификатор
   */
  get id(): string {
    return isFilled(this.props.id) ? String(this.props.id) : this.elementIdDefault
  }

  /**
   * Returns the tag name depending on whether it is classic.
   *
   * Возвращает название тега в зависимости от того, является ли поле классическим.
   * @returns tag name / название тега
   */
  get tag(): 'div' | 'label' {
    return FieldElement.isClassic(this.props) ? 'div' : 'label'
  }

  /**
   * Returns the value for the 'for' attribute of the label.
   *
   * Возвращает значение для атрибута 'for' метки.
   * @returns element ID or undefined / идентификатор элемента или undefined
   */
  get forId(): string | undefined {
    return FieldElement.isClassic(this.props) ? undefined : this.id
  }

  /**
   * Checks if a validation error needs to be displayed.
   *
   * Проверяет, надо ли выводить ошибку валидации.
   * @returns true if validation should be shown / true, если ошибка должна отображаться
   */
  isValidation(): boolean {
    return Boolean(
      isFilled(this.props.validationMessage)
      && (
        this.props.forceShowMessage
        || (
          !this.props.readonly
          && !this.props.disabled
        )
      )
    )
  }

  /**
   * Checks if a warning state needs to be displayed (validation errors take precedence).
   *
   * Проверяет, надо ли отображать состояние предупреждения (ошибка валидации имеет приоритет).
   * @returns true if warning should be shown / true, если предупреждение должно отображаться
   */
  isWarning(): boolean {
    return Boolean(
      !this.isValidation()
      && (
        this.props.warning
        || isFilled(this.props.warningMessage)
      )
      && (
        this.props.forceShowMessage
        || (
          !this.props.readonly
          && !this.props.disabled
        )
      )
    )
  }

  /**
   * Updates the input element reference.
   *
   * Обновляет ссылку на элемент ввода.
   */
  readonly update = (): void => {
    this.inputElement.value = this.element.value
      ?.querySelector<HTMLInputElement>('*[data-length]') ?? undefined
  }
}
