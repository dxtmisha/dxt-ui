import { computed } from 'vue'
import { type ConstrBind, DesignComponents, getBind, getRef, type RefOrNormal, toBinds } from '@dxt-ui/functional'

import { IconLiteInclude } from './IconLiteInclude'

import type { IconComponentInclude, IconPropsInclude } from './basicTypes'
import type { IconPropsBasic } from './props'

/**
 * Class for simplified integration of the icon-handling component
 *
 * Класс для упрощённого внедрения компонента для работы с иконками
 */
export class IconInclude<
  Props extends IconPropsInclude = IconPropsInclude
> extends IconLiteInclude<Props> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   * @param turn should the icon be flipped/ надо ли перевернуть иконку
   * @param dir should the icon be mirrored/ надо ли зеркально отображать иконка
   * @param start add sorting at the beginning/ добавить сортировку в начале
   * @param end add sorting at the end/ добавить сортировку в конце
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<IconComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<ConstrBind<IconPropsBasic>>,
    protected readonly turn?: RefOrNormal<boolean>,
    protected readonly dir?: RefOrNormal<boolean>,
    protected readonly start: RefOrNormal<boolean | undefined> = false,
    protected readonly end: RefOrNormal<boolean | undefined> = false
  ) {
    super(props, className, components, extra)
  }

  /**
   * List of properties for the icon component/ Список свойств для компонента иконки
   */
  readonly iconBind = computed(() => getBind(
    this.props.icon,
    {
      active: this.props.selected,
      turn: getRef(this.turn) ?? this.props.iconTurn,
      hide: this.props.iconHide,
      asPalette: this.props.iconPalette,
      animationType: 'type2',
      dir: getRef(this.dir) ?? this.props.iconDir,
      start: this.start,
      end: this.end,
      ...toBinds(
        this.getExtra(),
        this.props.iconAttrs,
        this.getClasses(this.props.iconAttrs?.class)
      ),
      ...this.getEventType()
    },
    'icon'
  ))
}
