import { ref } from 'vue'
import { type ConstrClass } from '@dxtmisha/functional'
/**
 * Class for working with a hidden element.
 *
 * Класс для работы со скрытым элементом.
 */
export class AlertHide {
  /** Animation end status / Статус окончания анимации */
  readonly destroy = ref<boolean>(false)

  /** Visibility state / Состояние видимости */
  readonly hide = ref<boolean>(false)

  /**
   * Constructor
   * @param className class name / название класса
   */
  constructor(
    protected readonly className: string
  ) {
  }

  /**
   * Checks if the element is hidden.
   *
   * Проверяет, скрыт ли элемент.
   */
  get isHide(): boolean {
    return this.hide.value
  }

  /**
   * Returns classes for dynamic status control.
   *
   * Возвращает классы для динамического контроля статусов.
   */
  get classes(): ConstrClass {
    return {
      [`${this.className}--hide`]: this.hide.value
    }
  }

  /**
   * Changes the visibility state.
   *
   * Изменяет состояние видимости.
   * @param value new state / новое состояние
   */
  setHide(value: boolean): this {
    this.hide.value = value
    return this
  }

  /**
   * Changes the animation end status.
   *
   * Изменяет статус окончания анимации.
   * @param value new status / новый статус
   */
  setDestroy(value: boolean): this {
    this.destroy.value = value
    return this
  }
}
