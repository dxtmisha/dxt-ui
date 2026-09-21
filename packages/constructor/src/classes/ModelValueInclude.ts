import { ref, watch } from 'vue'
import {
  executeFunctionRef,
  type RefOrNormalOrFunction,
  type RefType,
  setValues
} from '@dxtmisha/functional'

import { EventClickInclude } from './EventClickInclude'
import { ModelInclude } from './ModelInclude'

import type { EventClickValue } from '../types/eventClickTypes'

/**
 * Class for managing the model value with a reactive reference and click handling.
 * It synchronizes the state using ModelInclude and listens for input value updates.
 * Supports single and multiple selection modes and respects the readonly flag.
 *
 * Класс для управления значением модели с реактивной ссылкой и обработкой клика.
 * Синхронизирует состояние с помощью ModelInclude и отслеживает обновления входного значения.
 * Поддерживает режимы одиночного и множественного выбора, а также учитывает флаг readonly.
 */
export class ModelValueInclude<Value = any> {
  /** Reactive reference to the model value / Реактивная ссылка на значение модели */
  readonly value = ref<Value>()

  /**
   * Constructor.
   *
   * Конструктор.
   * @param index unique identifier for the model emit / уникальный идентификатор для эмита модели
   * @param emits emit function for triggering events / функция эмитов для вызова событий
   * @param event click event handling class / класс для обработки событий клика
   * @param inputValue reference to the input value / ссылка на входное значение
   * @param readonly flag or function for readonly state / флаг или функция состояния только для чтения
   * @param multiple flag or function enabling multiple selection / флаг или функция множественного выбора
   */
  constructor(
    protected readonly index: string,
    protected readonly emits?: any,
    protected readonly event?: EventClickInclude,
    protected readonly inputValue?: RefType<any>,
    protected readonly readonly?: RefOrNormalOrFunction<boolean | undefined>,
    protected readonly multiple?: RefOrNormalOrFunction<boolean | undefined>
  ) {
    if (this.inputValue) {
      this.value.value = this.inputValue?.value

      watch(
        this.inputValue,
        this.update
      )
    }

    new ModelInclude(this.index, this.emits, this.value)
  }

  /**
   * Checks if multiple selection is enabled.
   *
   * Проверяет, включен ли режим множественного выбора.
   * @returns true if multiple selection is enabled / true, если множественный выбор включен
   */
  readonly isMultiple = (): boolean => {
    return Boolean(executeFunctionRef(this.multiple))
  }

  /**
   * Checks if the model is in readonly state.
   *
   * Проверяет, находится ли модель в состоянии только для чтения.
   * @returns true if readonly / true, если только для чтения
   */
  readonly isReadonly = (): boolean => {
    return Boolean(executeFunctionRef(this.readonly))
  }

  /**
   * Returns the current model value.
   *
   * Возвращает текущее значение модели.
   * @returns current model value / текущее значение модели
   */
  readonly getValue = (): Value | undefined => {
    return this.value.value
  }

  /**
   * Sets the model value.
   *
   * Устанавливает значение модели.
   * @param value new model value / новое значение модели
   */
  readonly set = (value?: Value): void => {
    this.value.value = value
  }

  /**
   * Click event handler.
   * Updates the model value if a value option is provided and the component is not in a readonly state.
   *
   * Обработчик события клика.
   * Обновляет значение модели, если передан параметр значения и компонент не находится в состоянии только для чтения.
   * @param event native mouse click event / нативное событие клика мыши
   * @param options event click options / опции клика события
   */
  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    if (
      options
      && 'value' in options
      && !this.isReadonly()
    ) {
      this.value.value = setValues(
        this.value.value,
        options.value,
        { multiple: this.isMultiple() }
      ) as Value
    }

    this.event?.onClick(event, options)
  }

  /**
   * Directly updates the model value with the given value.
   *
   * Напрямую обновляет значение модели переданным значением.
   * @param value new model value / новое значение модели
   */
  readonly onUpdate = (value: Value) => {
    this.value.value = value
  }

  /**
   * Updates the internal model value from the input value reference.
   *
   * Обновляет внутреннее значение модели из ссылки на входное значение.
   */
  protected readonly update = () => {
    this.value.value = this.inputValue?.value
  }
}
