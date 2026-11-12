import { watch } from 'vue'
import { setAreaValue } from '../functions/setAreaValue'
import type { AreaPropsInclude } from '../types/areaTypes'

/**
 * Class for managing the component layout area value.
 * Watches area props and applies CSS area variables to layout containers.
 *
 * Класс для управления значением области макета компонента.
 * Отслеживает свойства области и применяет CSS-переменные области к контейнерам макета.
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

  /**
   * Constructor
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: Readonly<AreaPropsInclude>
  ) {
    watch(() => props.area, this.updateValue, { immediate: true })
  }

  /**
   * Update value
   *
   * Обновить значение
   */
  protected readonly updateValue = (): void => {
    if (this.props.area) {
      setAreaValue(this.props.area)
    }
  }
}
