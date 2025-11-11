import { ref, watch } from 'vue'
import type { RefType } from '@dxtmisha/functional'

import { EventClickInclude } from './EventClickInclude'
import { ModelInclude } from './ModelInclude'

import type { EventClickValue } from '../types/eventClickTypes'

/**
 * Class for managing model value with reactive reference and click handling.
 *
 * Класс для управления значением модели с реактивной ссылкой и обработкой клика.
 */
export class ModelValueInclude<Value = any> {
  readonly value = ref<Value>()

  /**
   * Constructor
   * @param index identifier/ идентификатор
   * @param emits emits function/ функция эмитов
   * @param event event click handler/ обработчик клика
   * @param inputValue input value reference/ ссылка на входное значение
   * @param readonly readonly flag/ флаг только для чтения
   */
  constructor(
    protected readonly index: string,
    protected readonly emits?: any,
    protected readonly event?: EventClickInclude,
    protected readonly inputValue?: RefType<any>,
    protected readonly readonly?: RefType<boolean | undefined>
  ) {
    new ModelInclude(this.index, this.emits, this.value)

    watch(
      [this.inputValue],
      () => {
        this.value.value = this.inputValue?.value
      },
      { immediate: true }
    )
  }

  /**
   * Returns the current value.
   *
   * Возвращает текущее значение.
   */
  getValue(): Value | undefined {
    return this.value.value
  }

  /**
   * Click handler.
   *
   * Обработчик клика.
   * @param event event object/ объект события
   * @param options data object/ объект с данными
   */
  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    if (
      options
      && 'value' in options
      && !this.readonly?.value
    ) {
      this.value.value = options.value
    }

    this.event?.onClick(event, options)
  }
}
