import { ref, type ToRefs, watch } from 'vue'
import { type ConstrEmit } from '@dxtmisha/functional'

import type { TextareaAutosizeEmits } from './types'
import type { TextareaAutosizeProps } from './props'

/**
 * Class for working with values.
 *
 * Класс для работы со значениями.
 */
export class TextareaAutosizeValue {
  readonly item = ref('')

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: TextareaAutosizeProps,
    protected readonly refs: ToRefs<TextareaAutosizeProps>,
    protected readonly emits?: ConstrEmit<TextareaAutosizeEmits>
  ) {
    watch(
      [refs.value],
      () => this.set(props.value),
      { immediate: true }
    )
  }

  /**
   * Changes values.
   *
   * Изменяет значения.
   * @param value changeable value/ изменяемое значение
   */
  set(value?: string): boolean {
    if (this.isDifference(value)) {
      this.item.value = value ?? ''
      return true
    }

    return false
  }

  /**
   * Event for changing the value.
   *
   * Событие для изменения значения.
   * @param event invoked event/ вызываемое событие
   */
  on(event: InputEvent) {
    if (this.set((event.target as HTMLInputElement).value)) {
      this.emits?.('input', event)
    }
  }

  /**
   * Checks if the value has actually been changed.
   *
   * Проверяет, было ли значение действительно изменено.
   * @param value changeable value/ изменяемое значение
   */
  protected isDifference(value?: string) {
    return this.item.value !== value
  }
}
