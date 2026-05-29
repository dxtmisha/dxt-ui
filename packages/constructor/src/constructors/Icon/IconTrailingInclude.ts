import { type VNode } from 'vue'
import { type ConstrBind, type DesignComponents, getBind, type RefOrNormal, toBinds } from '@dxtmisha/functional'

import { IconInclude } from './IconInclude'

import type { IconComponentInclude, IconTrailingPropsInclude } from './basicTypes'
import type { IconPropsBasic } from './props'

/**
 * Class for simplified integration of the icon-handling component with an additional trailing icon.
 * It coordinates properties and rendering of both a primary icon and a secondary trailing icon.
 *
 * Класс для упрощённого внедрения компонента для работы с иконками с дополнительной вторичной иконкой.
 * Координирует свойства и рендеринг как основной, так и дополнительной вторичной иконки.
 */
export class IconTrailingInclude<
  Props extends IconTrailingPropsInclude = IconTrailingPropsInclude
> extends IconInclude<Props> {
  /**
   * Constructor for initializing the IconTrailingInclude helper.
   *
   * Конструктор для инициализации помощника IconTrailingInclude.
   * @param props input parameter / входной параметр
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter / дополнительный параметр
   */
  constructor(
    protected readonly props: Readonly<Props> | (() => Readonly<Props>),
    protected readonly className: string,
    protected readonly components?: DesignComponents<IconComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<ConstrBind<IconPropsBasic>>
  ) {
    super(
      props,
      className,
      components,
      extra,
      () => this.isTurn(),
      () => this.isDir(),
      true
    )
  }

  /** List of properties for the secondary icon component / Список свойств для вторичного компонента иконки */
  get trailingBind(): ConstrBind<IconPropsBasic> {
    const props = this.getProps()

    return getBind(
      props.iconTrailing,
      {
        turn: props.iconTurn,
        asPalette: props.iconPalette,
        dir: props.iconDir,
        end: true,
        high: true,
        ...toBinds(
          this.getExtra(),
          props.iconAttrs,
          {
            ...this.getClasses(props.iconAttrs?.class, 'trailing'),
            ...this.getEventType('icon-trailing')
          }
        )
      },
      'icon'
    )
  }

  /**
   * Checks whether an icon is specified for rendering the component.
   *
   * Проверяет, указана ли иконка для отображения компонента.
   * @returns check result / результат проверки
   */
  isIconTrailing(): boolean {
    return Boolean(this.getProps().iconTrailing)
  }

  /**
   * Checks if there is at least one icon.
   *
   * Проверяет, есть ли хотя бы одна иконка.
   * @returns check result / результат проверки
   */
  hasAtLeastOneIcon(): boolean {
    const props = this.getProps()
    return Boolean(props.iconTrailing || props.icon)
  }

  /**
   * Renders the secondary icon component.
   *
   * Рендерит вторичный компонент иконки.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderIconTrailing = (): VNode[] => {
    if (
      this.components
      && this.isIconTrailing()
    ) {
      return this.components.render(
        'icon',
        this.trailingBind,
        undefined,
        'iconTrailing'
      )
    }

    return []
  }

  /**
   * Renders all icons (first the main icon, then the additional trailing icon).
   *
   * Метод для рендеринга всех иконок — сначала основной, затем дополнительной.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly render = (): VNode[] => {
    return [
      ...this.renderIcon(),
      ...this.renderIconTrailing()
    ]
  }

  /**
   * Checks whether the main icon should be flipped.
   *
   * Проверяет, надо ли перевернуть основную иконку.
   * @returns check result / результат проверки
   */
  protected isTurn(): boolean {
    const props = this.getProps()
    return Boolean(!props.iconTrailing && !props.iconTrailingTurnOnly && props.iconTurn)
  }

  /**
   * Checks whether the main icon should be mirrored.
   *
   * Проверяет, надо ли зеркально отображать основную иконку.
   * @returns check result / результат проверки
   */
  protected isDir(): boolean {
    const props = this.getProps()
    return Boolean(!props.iconTrailing && !props.iconTrailingDirOnly && props.iconDir)
  }
}
