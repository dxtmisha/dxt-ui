import {
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import type { ClientOnlyComponents, ClientOnlyEmits, ClientOnlySlots } from './types'
import type { ClientOnlyProps } from './props'

/** ClientOnly dependency constructors type / Тип конструкторов зависимостей ClientOnly */
export type ClientOnlyConstructors = {
  // No subordinate constructors / Нет дочерних конструкторов
}

/**
 * Class representing the ClientOnly logic orchestrator.
 * Controls whether slot content should render immediately or wait until client-side mount.
 *
 * Класс, представляющий оркестратор логики ClientOnly.
 * Управляет тем, должно ли содержимое слота рендериться сразу или ожидать монтирования на клиенте.
 */
export class ClientOnly extends DesignLogicAbstract<
  HTMLDivElement,
  ClientOnlyComponents,
  ClientOnlyEmits,
  ClientOnlySlots,
  ClientOnlyProps,
  ClientOnlyConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ClientOnlyConstructors> = {}

  /**
   * Checks whether the component content is ready for rendering.
   *
   * Проверяет, готово ли содержимое компонента к рендерингу.
   * @returns true if content can be rendered / true, если содержимое может быть отрендерено
   */
  isRender(): boolean {
    return !this.props.clientOnly || this.isMounted.value
  }
}
