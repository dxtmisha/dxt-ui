import { ref } from 'vue'
import type { ConstrClassObject } from '@dxtmisha/functional'

/**
 * Class managing the even state and class generation for Collage.
 *
 * Класс, управляющий состоянием четности и генерацией классов для Collage.
 */
export class CollageEven {
  /** Indicates whether the maximum columns in woven mode is even / Указывает, является ли максимальное число колонок в режиме woven четным */
  readonly item = ref<boolean>(false)

  /**
   * Constructor for CollageEven.
   *
   * Конструктор для CollageEven.
   * @param className base class name of the component / базовое имя класса компонента
   */
  constructor(
    protected readonly className: string
  ) {}

  /**
   * Returns classes for even state.
   *
   * Возвращает классы для состояния четности.
   * @returns classes object / объект классов
   */
  get classes(): ConstrClassObject {
    return {
      [`${this.className}--even`]: this.item.value
    }
  }

  /**
   * Returns whether the columns count is even.
   *
   * Возвращает, является ли количество колонок четным.
   * @returns true if columns count is even / true, если количество колонок четное
   */
  is(): boolean {
    return this.item.value
  }

  /**
   * Updates even state.
   *
   * Обновляет состояние четности.
   * @param value new even state / новое состояние четности
   */
  set(value: boolean): void {
    this.item.value = value
  }
}
