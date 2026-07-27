import { toRefs, watch } from 'vue'
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
   * Constructor
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: AreaPropsInclude
  ) {
    const { area } = toRefs(props)

    watch([area], this.updateValue, { immediate: true })
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
