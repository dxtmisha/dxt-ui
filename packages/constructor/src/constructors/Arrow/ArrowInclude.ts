import { computed, type VNode } from 'vue'
import {
  type ConstrBind,
  DesignComponents,
  getRef,
  type RefOrNormal,
  toBinds
} from '@dxtmisha/functional'

import type { ArrowComponentInclude, ArrowPropsInclude } from './basicTypes'
import type { ArrowProps } from './props'

/**
 * ArrowInclude class provides functionality for conditionally rendering arrow components
 * within other components. It manages the logic for determining when to display arrow
 * and configures the appropriate properties.
 *
 * Класс ArrowInclude предоставляет функциональность для условного рендеринга компонентов
 * стрелки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения стрелки и настраивает соответствующие свойства.
 */
export class ArrowInclude<
  Props extends ArrowPropsInclude = ArrowPropsInclude,
  PropsExtra extends ConstrBind<ArrowProps> = ConstrBind<ArrowProps>
> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param elementTarget target element or selector/ целевой элемент или селектор
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<ArrowComponentInclude, Props>,
    protected readonly elementTarget?: HTMLElement | string,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
  }

  /**
   * Checks whether arrow should be displayed/
   * Проверяет, нужно ли отображать стрелку
   */
  readonly is = computed(() => Boolean(
    this.props.arrowShow
  ))

  /** Computed bindings for the arrow/ Вычисляемые привязки для стрелки */
  readonly binds = computed<PropsExtra>(() => {
    return toBinds<PropsExtra>(
      getRef(this.extra),
      this.props.arrowAttrs,
      {
        class: `${this.className}__arrow`,
        elementTarget: this.elementTarget
      }
    )
  })

  /**
   * Render the Arrow component
   *
   * Рендер компонента стрелки
   */
  readonly render = (): VNode[] => {
    if (
      this.components
      && this.is.value
    ) {
      return this.components.render(
        'arrow',
        this.binds.value,
        undefined,
        this.index
      )
    }

    return []
  }
}
