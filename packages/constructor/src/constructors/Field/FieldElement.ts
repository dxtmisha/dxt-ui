import { nextTick, onMounted, ref, watch, type Ref } from 'vue'
import { getElementId } from '@dxtmisha/functional'

import type { FieldProps } from './props'

/**
 * Class for managing DOM elements and their attributes in the field.
 * It handles tag selection (div/label), label 'for' attributes, and references to the input element.
 *
 * Класс для управления DOM-элементами и их атрибутами в поле.
 * Управляет выбором тега (div/label), атрибутом 'for' для метки и ссылками на элемент ввода.
 */
export class FieldElement {
  /** Reactive reference to the input element / Реактивная ссылка на элемент ввода */
  readonly inputElement = ref<HTMLInputElement | undefined>()

  /** Default unique element identifier / Идентификатор элемента по умолчанию */
  protected readonly elementIdDefault = getElementId()

  /**
   * Constructor for initializing FieldElement.
   *
   * Конструктор для инициализации FieldElement.
   * @param props input properties / входящие свойства
   * @param element reference to the parent DOM element / ссылка на родительский DOM-элемент
   */
  constructor(
    protected readonly props: FieldProps,
    protected readonly element: Ref<HTMLLabelElement | undefined>
  ) {
    onMounted(async () => {
      await nextTick()

      watch(element, () => {
        this.inputElement.value = this.element.value
          ?.querySelector<HTMLInputElement>(`*[data-length]`) ?? undefined
      }, { immediate: true })
    })
  }

  /**
   * Returns the unique identifier of the field.
   *
   * Возвращает уникальный идентификатор поля.
   * @returns unique identifier / уникальный идентификатор
   */
  get id(): string {
    return String(this.props.id || this.elementIdDefault)
  }

  /**
   * Returns the tag name depending on whether it is classic.
   *
   * Возвращает название тега в зависимости от того, является ли поле классическим.
   * @returns tag name / название тега
   */
  get tag(): 'div' | 'label' {
    return this.isClassic() ? 'div' : 'label'
  }

  /**
   * Returns the value for the 'for' attribute of the label.
   *
   * Возвращает значение для атрибута 'for' метки.
   * @returns element ID or undefined / идентификатор элемента или undefined
   */
  get forId(): string | undefined {
    return this.isClassic() ? undefined : this.id
  }

  /**
   * Checks if the field style is classic.
   *
   * Проверяет, является ли поле классическим.
   * @returns true if style is classic / true, если стиль классический
   */
  isClassic(): boolean {
    return Boolean(
      (this.props as any).classic
      && !(this.props as any).basic
      && !(this.props as any).boxed
      && !(this.props as any).filled
      && !(this.props as any).outlined
      && !(this.props as any).tonal
    )
  }

  /**
   * Checks if a validation error needs to be displayed.
   *
   * Проверяет, надо ли выводить ошибку валидации.
   * @returns true if validation should be shown / true, если ошибка должна отображаться
   */
  isValidation(): boolean {
    return Boolean(
      this.props.validationMessage
      && (
        this.props.forceShowMessage
        || (
          !this.props.readonly
          && !this.props.disabled
        )
      )
    )
  }
}
