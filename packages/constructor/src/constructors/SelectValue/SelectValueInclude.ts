import { computed, type VNode } from 'vue'
import {
  type ConstrBind,
  type DesignComponents,
  getRef,
  type RefOrNormal,
  toBind,
  toBinds
} from '@dxtmisha/functional'

import type { SelectValueComponentInclude, SelectValuePropsInclude } from './basicTypes'
import type { SelectValueProps } from './props'

/**
 * SelectValueInclude class provides functionality for conditionally rendering selectValue components
 * within other components. It manages the logic for determining when to display selectValue
 * and configures the appropriate properties.
 *
 * Класс SelectValueInclude предоставляет функциональность для условного рендеринга компонентов
 * selectValue внутри других компонентов. Он управляет логикой определения необходимости
 * отображения selectValue и настраивает соответствующие свойства.
 */
export class SelectValueInclude<
  Props extends SelectValuePropsInclude = SelectValuePropsInclude,
  PropsExtra extends ConstrBind<SelectValueProps> = ConstrBind<SelectValueProps>
> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<SelectValueComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
  }

  /**
   * Checks whether selectValue should be displayed/
   * Проверяет, нужно ли отображать selectValue
   */
  readonly is = computed(() => Boolean(!this.props.disabled && this.components))

  /** Computed bindings for the selectValue/ Вычисляемые привязки для selectValue */
  readonly binds = computed<PropsExtra>(() => {
    const props = toBinds<PropsExtra>(
      getRef(this.extra),
      this.props.selectValueAttrs,
      {
        class: `${this.className}__select-value`
      }
    )

    return {
      ...props,
      disabled: this.props.disabled
    }
  })

  /**
   * Render the SelectValue component
   *
   * Рендер компонента selectValue
   * @param attrs additional attributes/ дополнительные атрибуты
   * @returns VNode array/ массив VNode
   */
  readonly render = (
    attrs?: Record<string, any>
  ): VNode[] => {
    if (
      this.components
      && this.is.value
    ) {
      return this.components.render(
        'selectValue',
        toBind(
          attrs ?? {},
          this.binds.value
        ),
        this.index
      )
    }

    return []
  }
}
