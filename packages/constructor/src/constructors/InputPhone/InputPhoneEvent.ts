import { watch } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { FieldEventInclude } from '../../classes/Field/FieldEventInclude'

import type { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude'
import type { FieldFormInclude } from '../../classes/Field/FieldFormInclude'
import type { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import type { ModelInclude } from '../../classes/ModelInclude'
import type { InputPhoneData } from './InputPhoneData'

import type { FieldAllProps, FieldBasicEmits, FieldValidationItem } from '../../types/fieldTypes'

/**
 * Event manager for the InputPhone component.
 * Extends FieldEventInclude to enrich emitted event payloads with resolved phone metadata (`detail`)
 * and synchronize dedicated `v-model:e164` and `v-model:digits` bindings.
 *
 * Менеджер событий для компонента InputPhone.
 * Расширяет FieldEventInclude, добавляя контекст метаданных телефона (`detail`) в события
 * и синхронизируя отдельные модели `v-model:e164` и `v-model:digits`.
 */
export class InputPhoneEvent extends FieldEventInclude {
  /** Cleanup function for main value model watcher / Функция очистки наблюдателя основной модели */
  protected watchValueStop?: () => void
  /** Cleanup function for e164 model watcher / Функция очистки наблюдателя модели e164 */
  protected watchE164Stop?: () => void
  /** Cleanup function for digits model watcher / Функция очистки наблюдателя модели digits */
  protected watchDigitsStop?: () => void

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param change function returning object for working with data change label / функция, возвращающая объект для работы с меткой об изменении данных
   * @param value function returning object for working with values / функция, возвращающая объект для работы со значениями
   * @param data function returning phone data manager / функция, возвращающая менеджер данных телефона
   * @param validation function returning object for working with validity / функция, возвращающая объект для работы с валидностью
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param form function returning object for working with the form element context / функция, возвращающая объект для работы с контекстом элемента формы
   * @param modelE164 function returning E.164 model manager / функция, возвращающая менеджер модели E.164
   * @param modelDigits function returning digits model manager / функция, возвращающая менеджер модели цифр номера
   */
  constructor(
    props: FieldAllProps,
    change: () => FieldChangeInclude,
    value: () => FieldValueInclude,
    protected readonly data: () => InputPhoneData,
    validation?: () => FieldValidationInclude,
    emits?: ConstrEmit<FieldBasicEmits>,
    form?: () => FieldFormInclude,
    protected readonly modelE164?: () => ModelInclude<string | undefined>,
    protected readonly modelDigits?: () => ModelInclude<string | undefined>
  ) {
    super(
      props,
      change,
      value,
      validation,
      emits,
      form
    )
  }

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    this.resetWatch()

    this.watchValueStop = watch(
      this.value().itemByFull,
      (newValue) => {
        this.model.emit(newValue)
      }
    )

    this.watchE164Stop = watch(
      this.data().e164,
      (newValue) => {
        this.modelE164?.().emit(newValue)
      }
    )

    this.watchDigitsStop = watch(
      this.data().digits,
      (newValue) => {
        this.modelDigits?.().emit(newValue)
      }
    )
  }

  /** Callback after component unmounting / Обработчик после размонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.resetWatch()
  }

  /**
   * Emits updates for main model value as well as `v-model:e164` and `v-model:digits`.
   *
   * Испускает обновления основной модели, а также `v-model:e164` и `v-model:digits`.
   */
  protected override emitModel(): void {
    super.emitModel()
    this.modelE164?.().emit(this.data().e164.value)
    this.modelDigits?.().emit(this.data().digits.value)
  }

  /**
   * Returns input data enriched with resolved phone metadata in `detail`.
   *
   * Возвращает данные ввода, обогащённые метаданными телефона в поле `detail`.
   * @returns validation item data / данные элемента валидации
   */
  protected override getData(): FieldValidationItem {
    const data = super.getData()

    return {
      ...data,
      detail: {
        ...this.data().getDetail(),
        ...this.props.detail
      }
    }
  }

  /**
   * Stops active model watchers.
   *
   * Останавливает активные наблюдатели моделей.
   */
  protected resetWatch(): void {
    this.watchValueStop?.()
    this.watchValueStop = undefined
    this.watchE164Stop?.()
    this.watchE164Stop = undefined
    this.watchDigitsStop?.()
    this.watchDigitsStop = undefined
  }
}
