import { computed, type VNode } from 'vue'
import { type ConstrBind, type DesignComponents, getBind, isFilled, type RefOrNormal, toBinds } from '@dxtmisha/functional'

import { IconInclude } from './IconInclude'

import type { IconComponentInclude, IconTrailingPropsInclude } from './basicTypes'
import type { IconPropsBasic } from './props'

/**
 * Class for simplified integration of the icon-handling component
 *
 * Класс для упрощённого внедрения компонента для работы с иконками
 */
export class IconTrailingInclude<
  Props extends IconTrailingPropsInclude = IconTrailingPropsInclude
> extends IconInclude<Props> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<IconComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<ConstrBind<IconPropsBasic>>
  ) {
    super(
      props,
      className,
      components,
      extra,
      computed(() => Boolean(!props.iconTrailing && !props.iconTrailingTurnOnly && props.iconTurn)),
      computed(() => Boolean(!props.iconTrailing && !props.iconTrailingDirOnly && props.iconDir)),
      true
    )
  }

  /**
   * Checks whether an icon is specified for rendering the component/
   * Проверяет, указана ли иконка для отображения компонента
   */
  readonly isIconTrailing = computed<boolean>(() => Boolean(this.props.iconTrailing))

  /**
   * Checks if there is at least one icon/
   * Проверяет, есть ли хотя бы одна иконка
   */
  readonly hasAtLeastOneIcon = computed<boolean>(() => Boolean(this.props.iconTrailing || this.props.icon))

  /**
   * list of properties for the secondary icon component/ список свойств для вторичного компонента иконки
   */
  readonly trailingBind = computed(() => getBind(
    this.props.iconTrailing,
    {
      turn: this.props.iconTurn,
      asPalette: this.props.iconPalette,
      dir: this.props.iconDir,
      end: true,
      high: true,
      ...toBinds(
        this.getExtra(),
        this.props.iconAttrs,
        this.getClasses(this.props.iconAttrs?.class, 'trailing')
      ),
      ...this.getEventType('icon-trailing')
    },
    'icon'
  ))

  /**
   * Render of the secondary icon component
   *
   * Рендер вторичного компонента иконки
   */
  readonly renderIconTrailing = (): VNode[] => {
    if (
      this.components
      && isFilled(this.props.iconTrailing)
    ) {
      return this.components.render(
        'icon',
        this.trailingBind.value,
        undefined,
        'iconTrailing'
      )
    }

    return []
  }

  /**
   * Method for rendering all icons — first the main ones, then the additional icons
   *
   * Метод для рендеринга всех иконок — сначала основных, затем дополнительных
   */
  readonly render = (): VNode[] => {
    return [
      ...this.renderIcon(),
      ...this.renderIconTrailing()
    ]
  }
}
