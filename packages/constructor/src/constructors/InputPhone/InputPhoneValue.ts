import { computed, watch } from 'vue'
import { anyToString, isFilled, type RefOrNormal } from '@dxtmisha/functional'

import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import type { FieldElementInclude } from '../../classes/Field/FieldElementInclude'
import type { InputPhoneData } from './InputPhoneData'

import type { InputPhonePropsBasic } from './props'

/**
 * Value manager for InputPhone component.
 * Extends FieldValueInclude to support `formatOutput` ('mask' | 'e164' | 'digits') and reactive `v-model:e164` / `v-model:digits` inputs.
 *
 * Менеджер значения для компонента InputPhone.
 * Расширяет FieldValueInclude, добавляя поддержку `formatOutput` ('mask' | 'e164' | 'digits') и реактивную синхронизацию пропсов `e164` / `digits`.
 */
export class InputPhoneValue extends FieldValueInclude<string> {
  /** Cleanup function for value/modelValue prop watcher / Функция очистки наблюдателя пропсов value и modelValue */
  protected watchPropStop?: () => void
  /** Cleanup function for e164 prop watcher / Функция очистки наблюдателя свойства e164 */
  protected watchE164Stop?: () => void
  /** Cleanup function for digits prop watcher / Функция очистки наблюдателя свойства digits */
  protected watchDigitsStop?: () => void

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param data function returning phone data manager / функция, возвращающая менеджер данных телефона
   * @param element function returning object for working with the input element / функция, возвращающая объект для работы с элементом ввода
   * @param original original value / оригинальное значение
   */
  constructor(
    protected override readonly props: InputPhonePropsBasic,
    protected readonly data: () => InputPhoneData,
    element?: () => FieldElementInclude,
    original?: RefOrNormal<string>
  ) {
    super(
      props,
      element,
      original
    )
  }

  /**
   * Returns the current value formatted according to `formatOutput` when `isFull` is true.
   *
   * Возвращает текущее значение в формате `formatOutput`, если `isFull` истинно.
   */
  override readonly itemByFull = computed<string | undefined>(() => {
    if (this.isFull.value) {
      const currentValue = this.item.value

      if (
        !currentValue
        || !this.props.formatOutput
        || this.props.formatOutput === 'mask'
      ) {
        return currentValue
      }

      return this.data().getDetail(currentValue)[this.props.formatOutput] || undefined
    }

    return undefined
  })

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    this.resetWatch()

    this.watchPropStop = watch([
      () => this.props.value,
      () => this.props.modelValue
    ], this.update)

    this.watchE164Stop = watch(
      () => this.props.e164 ?? this.props.modelE164,
      (nextValue) => {
        if (this.isExternalFormatEdit('e164', nextValue)) {
          this.set(nextValue)
        }
      }
    )

    this.watchDigitsStop = watch(
      () => this.props.digits ?? this.props.modelDigits,
      (nextValue) => {
        if (this.isExternalFormatEdit('digits', nextValue)) {
          this.set(nextValue)
        }
      }
    )
  }

  /** Callback after component unmounting / Обработчик после размонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.resetWatch()
  }

  /**
   * Checks whether an external `e164` or `digits` prop update differs from the current formatted phone value.
   *
   * Проверяет, отличается ли внешнее обновление `e164` или `digits` от текущего значения телефона.
   * @param format format mode (`e164` | `digits`) / режим формата (`e164` | `digits`)
   * @param value incoming prop value / входящее значение пропса
   * @returns true if value should be applied / true, если значение нужно применить
   */
  protected isExternalFormatEdit(
    format: 'e164' | 'digits',
    value?: string
  ): boolean {
    if (value === undefined) {
      return false
    }

    const stringValue = anyToString(value)

    return stringValue !== this.data().getDetail(this.string)[format]
  }

  /**
   * Checks if the prop value has actually been changed externally, ignoring round-trip `formatOutput` formatting differences.
   *
   * Проверяет, было ли значение пропса изменено извне, игнорируя обратное совпадение отформатированного значения `formatOutput`.
   * @param value value to check / значение для проверки
   * @returns true if there is an external difference / true, если есть внешнее изменение
   */
  protected override isEdit(value?: string): boolean {
    if (
      value !== undefined
      && (
        this.props.formatOutput === 'e164'
        || this.props.formatOutput === 'digits'
      )
      && anyToString(value) === this.data().getDetail(this.string)[this.props.formatOutput]
    ) {
      return false
    }

    return super.isEdit(value)
  }

  /**
   * Returns the original value, falling back to `e164`/`digits` props when `value`/`modelValue` are unset.
   *
   * Возвращает исходное значение, используя `e164`/`digits`, если `value` и `modelValue` не заданы.
   * @returns original value / исходное значение
   */
  protected override getOriginal(): string | undefined {
    const original = super.getOriginal()

    if (isFilled(original)) {
      return original
    }

    return this.props.e164
      ?? this.props.modelE164
      ?? this.props.digits
      ?? this.props.modelDigits
      ?? original
  }

  /**
   * Stops active prop watchers.
   *
   * Останавливает активные наблюдатели пропсов.
   */
  protected resetWatch(): void {
    this.watchPropStop?.()
    this.watchPropStop = undefined
    this.watchE164Stop?.()
    this.watchE164Stop = undefined
    this.watchDigitsStop?.()
    this.watchDigitsStop = undefined
  }
}
