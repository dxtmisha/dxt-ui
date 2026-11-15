import { ref, type Ref, watch } from 'vue'
import { setAreaValue } from '../functions/setAreaValue'
import type { AreaPropsInclude } from '../types/areaTypes'

/**
 * Class for managing the component layout area value.
 * Provides the layout area identifier to descendant components via Vue dependency injection.
 *
 * Класс для управления значением области макета компонента.
 * Передает идентификатор области макета дочерним компонентам через внедрение зависимостей Vue.
 */
export class AreaInclude {
  /**
   * Checks whether the area property is provided in props.
   *
   * Проверяет, указано ли свойство area в свойствах.
   * @param props input data / входные данные
   * @returns true if area is defined / true, если area определено
   */
  static is(props?: Readonly<AreaPropsInclude>): boolean {
    return Boolean(props?.area)
  }

  /** Reactive area value / Реактивное значение области */
  protected readonly value: Ref<string | undefined> = ref()

  /**
   * Constructor for AreaInclude.
   *
   * Конструктор для AreaInclude.
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: Readonly<AreaPropsInclude>
  ) {
    this.updateValue()

    setAreaValue(this.value)
    watch(() => props.area, this.updateValue)
  }

  /**
   * Updates the reactive area value when props.area changes.
   *
   * Обновляет реактивное значение области при изменении props.area.
   */
  protected readonly updateValue = (): void => {
    this.value.value = this.props.area
  }
}
