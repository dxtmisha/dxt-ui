import { type ConstrBind, type DesignComponents, executeFunction, getBind, getRef, type RefOrNormal, toBinds } from '@dxtmisha/functional'

import { IconLiteInclude } from './IconLiteInclude'

import type { IconComponentInclude, IconPropsInclude } from './basicTypes'
import type { IconPropsBasic } from './props'

/**
 * Class for simplified integration of the full icon-handling component.
 * It extends IconLiteInclude to add advanced icon transformations such as flip (turn), mirror (dir), and start/end sorting alignment.
 *
 * Класс для упрощённого внедрения полнофункционального компонента для работы с иконками.
 * Расширяет IconLiteInclude, добавляя расширенные трансформации иконки, такие как переворот (turn), отражение (dir) и выравнивание start/end.
 */
export class IconInclude<
  Props extends IconPropsInclude = IconPropsInclude
> extends IconLiteInclude<Props> {
  /**
   * Constructor for initializing the IconInclude helper.
   *
   * Конструктор для инициализации помощника IconInclude.
   * @param props input parameter / входной параметр
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter / дополнительный параметр
   * @param turn should the icon be flipped / надо ли перевернуть иконку
   * @param dir should the icon be mirrored / надо ли зеркально отображать иконку
   * @param start add sorting at the beginning / добавить сортировку в начале
   * @param end add sorting at the end / добавить сортировку в конце
   */
  constructor(
    protected readonly props: Readonly<Props> | (() => Readonly<Props>),
    protected readonly className: string,
    protected readonly components?: DesignComponents<IconComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<ConstrBind<IconPropsBasic>>,
    protected readonly turn?: RefOrNormal<boolean> | (() => boolean),
    protected readonly dir?: RefOrNormal<boolean> | (() => boolean),
    protected readonly start: RefOrNormal<boolean | undefined> | (() => boolean | undefined) = false,
    protected readonly end: RefOrNormal<boolean | undefined> | (() => boolean | undefined) = false
  ) {
    super(props, className, components, extra)
  }

  /** List of properties for the icon component / Список свойств для компонента иконки */
  override get iconBind(): ConstrBind<IconPropsBasic> {
    const props = this.getProps()

    return getBind(
      props.icon,
      {
        active: props.selected,
        turn: getRef(executeFunction(this.turn)) ?? props.iconTurn,
        hide: props.iconHide,
        asPalette: props.iconPalette,
        animationType: 'type2',
        dir: getRef(executeFunction(this.dir)) ?? props.iconDir,
        start: getRef(executeFunction(this.start)),
        end: getRef(executeFunction(this.end)),
        ...toBinds(
          this.getExtra(),
          props.iconAttrs,
          this.getClasses(props.iconAttrs?.class)
        ),
        ...this.getEventType()
      },
      'icon'
    )
  }
}
