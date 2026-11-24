// ai-none

import { ref } from 'vue'
import { type ConstrClassObject, type DesignName } from '@dxtmisha/functional'

/**
 * Class for working with a hidden element.
 *
 * Класс для работы со скрытым элементом.
 */
export class AlertHide {
  /**
   * Constructor
   * @param naming component naming helper / помощник именования компонента
   */
  constructor(
    protected readonly naming: DesignName
  ) {
  }

  /** Animation end status / Статус окончания анимации */
  readonly destroy = ref<boolean>(false)

  /** Visibility state / Состояние видимости */
  readonly hide = ref<boolean>(false)

  /**
   * Returns classes for dynamic status control.
   *
   * Возвращает классы для динамического контроля статусов.
   * @returns status classes object / объект классов статуса
   */
  get classes(): ConstrClassObject {
    return {
      [this.naming.getStatusClass('hide')]: this.hide.value
    }
  }

  /**
   * Checks if the element is hidden.
   *
   * Проверяет, скрыт ли элемент.
   * @returns true if hidden / true, если скрыт
   */
  get isHide(): boolean {
    return this.hide.value
  }

  /**
   * Changes the animation end status.
   *
   * Изменяет статус окончания анимации.
   * @param value new status / новый статус
   * @returns current instance / текущий экземпляр
   */
  setDestroy(value: boolean): this {
    this.destroy.value = value
    return this
  }

  /**
   * Changes the visibility state.
   *
   * Изменяет состояние видимости.
   * @param value new state / новое состояние
   * @returns current instance / текущий экземпляр
   */
  setHide(value: boolean): this {
    this.hide.value = value
    return this
  }
}
