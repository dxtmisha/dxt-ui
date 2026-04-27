import { toRefs, watch } from 'vue'
import { setAreaValue } from '../functions/setAreaValue'
import type { AreaProps } from '../types/areaTypes'

/**
 * Class for managing the area value.
 *
 * Класс для управления значением области.
 */
export class AreaInclude {
  /**
   * Constructor
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: AreaProps
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
