// ai-none

import { type VNode, mergeProps } from 'vue'
import {
  type ConstrBind,
  type DesignComponents,
  type DesignName,
  executeFunctionRef,
  getBind
} from '@dxtmisha/functional'

import { IconInclude } from './IconInclude'

import type { ComponentIncludeExtra } from '../../types/componentInclude'
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
   * Checks whether an icon or trailing icon is specified.
   *
   * Проверяет, указана ли иконка или завершающая иконка.
   * @param props input parameter / входной параметр
   * @returns true if icon or trailing icon is specified / true, если указана иконка или завершающая иконка
   */
  static override is(props?: IconTrailingPropsInclude): boolean {
    return Boolean(props?.icon || props?.iconTrailing)
  }

  /**
   * Constructor for initializing the IconTrailingInclude helper.
   *
   * Конструктор для инициализации помощника IconTrailingInclude.
   * @param props input parameter / входной параметр
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter for both icons / дополнительный параметр для обеих иконок
   * @param extraIcon additional parameter for the main icon / дополнительный параметр для основной иконки
   * @param extraTrailing additional parameter for the trailing icon / дополнительный параметр для хвостовой иконки
   */
  constructor(
    protected readonly props: Readonly<Props> | (() => Readonly<Props>),
    protected readonly naming: DesignName,
    protected readonly components?: DesignComponents<IconComponentInclude, Props>,
    protected readonly extra?: ComponentIncludeExtra<IconPropsBasic>,
    protected readonly extraIcon?: ComponentIncludeExtra<IconPropsBasic>,
    protected readonly extraTrailing?: ComponentIncludeExtra<IconPropsBasic>
  ) {
    super(
      props,
      naming,
      components,
      extra,
      () => this.isTurn(),
      () => this.isDir(),
      true
    )
  }

  /**
   * List of properties for the secondary icon component.
   *
   * Список свойств для вторичного компонента иконки.
   * @returns trailing icon component bindings / привязки вторичного компонента иконки
   */
  get trailingBind(): ConstrBind<IconPropsBasic> {
    const props = this.getProps()

    return getBind(
      props.iconTrailing,
      mergeProps(
        {
          turn: props.iconTurn,
          asPalette: props.iconTrailingPalette || props.iconPalette,
          dir: props.iconDir,
          end: true,
          high: true
        },
        this.getExtraTrailing() ?? {},
        props.iconAttrs ?? {},
        this.getClasses('trailing'),
        this.getEventType('icon-trailing')
      ),
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
   * Checks whether the main icon should be mirrored.
   *
   * Проверяет, надо ли зеркально отображать основную иконку.
   * @returns check result / результат проверки
   */
  protected isDir(): boolean {
    const props = this.getProps()
    return Boolean(!props.iconTrailing && !props.iconTrailingDirOnly && props.iconDir)
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
   * Returns merged additional properties for the main icon.
   *
   * Возвращает объединённые дополнительные свойства для основной иконки.
   * @returns additional properties for the main icon / дополнительные свойства для основной иконки
   */
  protected override getExtraIcon(): ConstrBind<IconPropsBasic> | undefined {
    const extra = this.getExtra()
    const extraIcon = executeFunctionRef(this.extraIcon)

    if (extra && extraIcon) {
      return mergeProps(extra, extraIcon)
    }

    return extraIcon ?? extra
  }

  /**
   * Returns merged additional properties for the trailing icon.
   *
   * Возвращает объединённые дополнительные свойства для хвостовой иконки.
   * @returns additional properties for the trailing icon / дополнительные свойства для хвостовой иконки
   */
  protected getExtraTrailing(): ConstrBind<IconPropsBasic> | undefined {
    const extra = this.getExtra()
    const extraTrailing = executeFunctionRef(this.extraTrailing)

    if (extra && extraTrailing) {
      return mergeProps(extra, extraTrailing)
    }

    return extraTrailing ?? extra
  }
}
