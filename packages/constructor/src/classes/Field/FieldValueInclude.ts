import { computed, ref, type ToRefs, watch } from 'vue'
import {
  anyToString,
  getRef,
  isArray,
  isFilled,
  isObject,
  type RefOrNormal,
  setValues,
  toArray,
  toNumber
} from '@dxtmisha/functional'

import { FieldElementInclude } from './FieldElementInclude'

import type { FieldValueProps } from '../../types/fieldTypes'

/**
 * Class for working with input values.
 *
 * Класс для работы со значениями инпута.
 */
export class FieldValueInclude<Value = any> {
  /** Current value/ Текущее значение */
  readonly item = ref<Value>()
  /** Indicates if the value is complete/ Указывает, полное ли значение */
  readonly isFull = ref<boolean>(true)

  /** Indicates if there are temporary values/ Указывает, есть ли временные значения */
  protected readonly hasEdit = ref<boolean>(false)

  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param refs input data in the form of reactive elements /<br>входные данные в виде реактивных элементов
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param original original values /<br>оригинальные значения
   */

  constructor(
    protected readonly props: FieldValueProps<Value>,
    protected readonly refs: ToRefs<FieldValueProps<Value>>,
    protected readonly element?: FieldElementInclude,
    protected readonly original?: RefOrNormal<Value>
  ) {
    this.item.value = this.getOriginal()

    watch([
      refs.value,
      refs.modelValue
    ], this.update)
  }

  /** Checks if there are values or temporary values/ Проверяет, есть ли значения или временные значения */
  readonly is = computed<boolean>(() => {
    return this.hasEdit.value
      || this.boolean.value
      || Boolean(this.props.placeholder)
  })

  /** Checks if there are any values/ Проверяет, есть ли значения */
  readonly isValue = computed<boolean>(() => this.hasEdit.value || this.boolean.value)

  /** Returns the current value if isFull is true/ Возвращает текущее значение, если isFull истинно */
  readonly itemByFull = computed<Value | undefined>(() => this.isFull.value ? this.item.value : undefined)

  /**
   * Returns the current value, converted to a number/
   * Возвращает текущее значение, преобразованное в номер
   */
  readonly number = computed<number>(() => {
    if (this.boolean.value) {
      return toNumber(this.string.value)
    }

    return 0
  })

  /** Returns the current value of type string/ Возвращает текущее значение типа string */
  readonly string = computed<string>(() => anyToString(this.item.value))

  /** Returns the current value of type boolean/ Возвращает текущее значение типа boolean */
  readonly boolean = computed<boolean>(() => isFilled(this.item.value))

  /** Returns the length of the entered value/ Возвращает длину введенного значения */
  readonly length = computed<number>(() => {
    const value = this.item.value

    if (isArray(value)) {
      return value.length
    }

    if (isObject(value)) {
      return Object.keys(value).length
    }

    return this.string.value.length ?? 0
  })

  /**
   * Returns the current value.
   *
   * Возвращает текущее значение.
   */
  get(): Value | undefined {
    return this.item.value
  }

  /**
   * Returns the current value as an array.
   *
   * Возвращает текущее значение в виде массива.
   */
  getToArray(): Value[] {
    return toArray(this.item.value) as Value[]
  }

  /**
   * Changes the value.
   *
   * Изменяет значение.
   * @param value changeable value/ изменяемое значение
   */
  set(value: any): this {
    if (this.isDifference(value)) {
      this.item.value = setValues(
        this.item.value,
        value,
        {
          multiple: this.props.multiple,
          maxlength: toNumber(this.props.maxlength)
        }
      ) as Value

      const element = this.element?.getElement()

      if (
        element
        && element.value
        && 'setValue' in element.value
      ) {
        element.value?.setValue(this.item.value)
      }
    }

    return this
  }

  /**
   * Changes the values by the selected element.
   *
   * Изменяет значения по выбранному элементу.
   * @param event event object/ объект события
   */
  setByEvent(event: Event): this
  setByEvent(value: Record<string, any>): this
  setByEvent(value: any): this
  setByEvent(eventValue: Event | Record<string, any> | any): this {
    switch (typeof eventValue) {
      case 'object':
        if (eventValue) {
          if (
            'value' in eventValue
            && eventValue.value !== undefined
          ) {
            this.set(eventValue.value)
          } else if ('target' in eventValue) {
            this.setByTarget(eventValue.target as HTMLInputElement)
          }

          if ('hasEdit' in eventValue) {
            this.setHasEdit(eventValue.hasEdit)
          }

          if ('isFull' in eventValue) {
            this.setFull(eventValue.isFull)
          }
        }

        break
      default:
        this.set(eventValue)
        break
    }

    return this
  }

  /**
   * Changes the values by the selected element.
   *
   * Изменяет значения по выбранному элементу.
   * @param target selected elements/ выбранные элементы
   */
  setByTarget(target: HTMLInputElement): this {
    return this.set(
      this.isCheckbox(target)
        ? target.checked
        : target.value
    )
  }

  /**
   * Changes the value by the checked property.
   *
   * Изменяет значение по свойству checked.
   * @param event event value/ значение события
   */
  setByChecked(event: Event): this {
    const input = event.target as HTMLInputElement

    return this.set(input.checked)
  }

  /**
   * Changes the value for radio type.
   *
   * Изменяет значение для типа radio.
   * @param event event object/ объект события
   */
  setByRadio(event: Event): this {
    const input = event.target as HTMLInputElement
    const value = input.checked ? input.value : ''

    return this.set(value)
  }

  /**
   * Sets the isFull value.
   *
   * Устанавливает значение isFull.
   * @param isFull isFull value/ значение isFull
   */
  setFull(isFull: boolean) {
    this.isFull.value = isFull
  }

  /**
   * Sets the hasEdit value.
   *
   * Устанавливает значение hasEdit.
   * @param hasEdit hasEdit value/ значение hasEdit
   */
  setHasEdit(hasEdit: boolean) {
    this.hasEdit.value = hasEdit
  }

  /**
   * Sets the value to the original one.
   *
   * Устанавливает значение на оригинальное.
   */
  setToOriginal(): this {
    this.item.value = this.getOriginal()
    return this
  }

  /**
   * Clear all values to the original ones.
   *
   * Очисти все значения до оригинальных.
   */
  clear(): this {
    this.item.value = getRef(this.original)
    this.element?.clear()

    this.hasEdit.value = false
    this.isFull.value = true

    return this
  }

  /**
   * Is the selected type a checkbox.
   *
   * Является ли выбранный тип чекбокс.
   * @param target selected elements/ выбранные элементы
   */
  protected isCheckbox(target: HTMLInputElement): boolean {
    return target.type === 'checkbox'
  }

  /**
   * Checks if the value has actually been changed.
   *
   * Проверяет, было ли значение действительно изменено.
   * @param value value to check/ значение для проверки
   */
  protected isDifference(
    value: any = this.getOriginal()
  ): boolean {
    return this.string.value !== anyToString(value)
  }

  /**
   * Returns the original value.
   *
   * Возвращает оригинальное значение.
   */
  protected getOriginal(): any {
    return this.props.value || this.props.modelValue || getRef(this.original)
  }

  /**
   * Changes the values to the original ones.
   *
   * Изменяет значения на оригинальные.
   */
  protected readonly update = (): void => {
    if (
      this.isEdit(this.props.value)
      || this.isEdit(this.props.modelValue)
    ) {
      this.setToOriginal()
    }
  }

  /**
   * Checks if the value is being edited.
   *
   * Проверяет, редактируется ли значение.
   * @param value value to check/ значение для проверки
   */
  protected isEdit(value?: Value): boolean {
    return value !== undefined && anyToString(value) !== this.string.value
  }
}
