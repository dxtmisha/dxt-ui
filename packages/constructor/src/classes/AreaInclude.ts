import { ref, type Ref, watch, type WatchStopHandle } from 'vue'
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
  /** Reactive area value / Реактивное значение области */
  protected readonly value: Ref<string | undefined> = ref()

  /** Stop handle for the reactive area watcher / Функция остановки реактивного наблюдателя области */
  protected stopWatch?: WatchStopHandle

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
    this.stopWatch = watch(() => props.area, this.updateValue)
  }

  /**
   * Stops the reactive area watcher and releases resources.
   *
   * Останавливает реактивный наблюдатель области и освобождает ресурсы.
   */
  destroy(): void {
    this.stopWatch?.()
    this.stopWatch = undefined
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
