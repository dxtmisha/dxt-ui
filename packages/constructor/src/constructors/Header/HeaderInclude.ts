import { computed, type VNode } from 'vue'
import {
  type ConstrBind,
  type DesignComponents,
  getRef,
  type RefOrNormal,
  toBinds
} from '@dxtmisha/functional'

import type {
  HeaderComponentInclude,
  HeaderPropsInclude,
  HeaderSlotsInclude
} from './basicTypes'
import type { HeaderProps } from './props'

/**
 * The class returns data for working with the Header component
 *
 * Класс возвращает данные для работы с компонентом Header
 */
export class HeaderInclude<
  Props extends HeaderPropsInclude = HeaderPropsInclude,
  PropsExtra extends ConstrBind<HeaderProps> = ConstrBind<HeaderProps>
> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots list of slots/ список слотов
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param labelId identifier for the label/ идентификатор для метки
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<HeaderComponentInclude, Props>,
    protected readonly slots?: HeaderSlotsInclude,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly labelId?: string,
    protected readonly index?: string
  ) {
  }

  /** Checks whether header should be displayed/ Проверяет, нужно ли отображать заголовок */
  readonly is = computed(() => {
    return Boolean(this.components && (
      this.props.label
      || this.props.caption
      || this.props.icon
      || this.props.headerAttrs
    ))
  })

  /** Computed bindings for the header/ Вычисляемые привязки для header */
  readonly binds = computed<PropsExtra>(() => {
    return toBinds<PropsExtra>(
      getRef(this.extra),
      this.props.headerAttrs,
      {
        class: `${this.className}__header`,
        labelId: this.labelId
      }
    )
  })

  /**
   * Render the Header component with slots/
   * Рендер компонента Header со слотами
   */
  readonly render = (): VNode[] => {
    if (this.components) {
      const children: Record<string, any> = []

      if (this.slots) {
        if ('label' in this.slots) {
          children['default'] = this.slots.label
        }

        if ('caption' in this.slots) {
          children['caption'] = this.slots.caption
        }

        if ('trailing' in this.slots) {
          children['trailing'] = this.slots.trailing
        }
      }

      return this.components.render(
        'header',
        this.binds.value,
        children,
        this.index
      )
    }

    return []
  }
}
