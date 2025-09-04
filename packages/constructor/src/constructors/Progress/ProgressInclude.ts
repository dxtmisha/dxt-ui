import { computed, type VNode } from 'vue'
import { type ConstrBind, DesignComponents, getBind, getRef, type RefOrNormal } from '@dxt-ui/functional'

import type { ProgressComponentInclude, ProgressPropsInclude } from './basicTypes'
import type { ProgressProps } from './props'

/**
 * The class returns data for working with the Progress component
 *
 * Класс возвращает данные для работы с компонентом Progress
 */
export class ProgressInclude {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   */
  constructor(
    protected readonly props: ProgressPropsInclude,
    protected readonly className: string,
    protected readonly components?: DesignComponents<ProgressComponentInclude, ProgressPropsInclude>,
    protected readonly extra?: RefOrNormal<ConstrBind<ProgressProps>>
  ) {
  }

  /**
   * Checks if data is available for the Progress component/ Проверяет, есть ли данные для компонента Progress
   */
  readonly is = computed<boolean>(() => Boolean(this.props.loading))

  /**
   * list of properties for the progress component/ список свойств для компонента Progress
   */
  readonly binds = computed(() => {
    const extra = getRef(this.extra)

    return getBind(
      this.props.loading,
      {
        ...extra,
        class: [extra?.class, `${this.className}__loading`]
      },
      'visible'
    )
  })

  /**
   * Рендер компонента Progress
   */
  readonly render = (): VNode[] => {
    if (
      this.components
      && this.props.loading
    ) {
      return this.components.render(
        'progress',
        this.binds.value,
        undefined,
        'progress'
      )
    }

    return []
  }
}
