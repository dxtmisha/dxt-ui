import { computed, ref, type VNode } from 'vue'
import {
  type ConstrBind,
  DesignComponents,
  getRef,
  type RawSlots,
  type RefOrNormal,
  toBind,
  toBinds
} from '@dxtmisha/functional'

import type { MenuComponentInclude, MenuExposeInclude, MenuPropsInclude } from './basicTypes'
import type { MenuExpose, MenuSlots } from './types'
import type { MenuProps } from './props'

/**
 * MenuInclude class provides functionality for conditionally rendering menu components
 * within other components. It manages the logic for determining when to display menu
 * and configures the appropriate properties.
 *
 * Класс MenuInclude предоставляет функциональность для условного рендеринга компонентов
 * меню внутри других компонентов. Он управляет логикой определения необходимости
 * отображения меню и настраивает соответствующие свойства.
 */
export class MenuInclude<
  Props extends MenuPropsInclude = MenuPropsInclude,
  PropsExtra extends ConstrBind<MenuProps> = ConstrBind<MenuProps>
> {
  /** Reference to menu element/ Ссылка на элемент меню */
  protected readonly element = ref<ConstrBind<MenuExpose> | undefined>()

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
    protected readonly components?: DesignComponents<MenuComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
  }

  /**
   * Checks whether menu should be displayed/
   * Проверяет, нужно ли отображать меню
   */
  readonly is = computed(() => Boolean(!this.props.disabled && this.components))

  /** Computed bindings for the menu/ Вычисляемые привязки для меню */
  readonly binds = computed<PropsExtra>(() => {
    const props = toBinds<PropsExtra>(
      getRef(this.extra),
      this.props.menuAttrs,
      {
        class: `${this.className}__menu`
      }
    )

    return {
      ...props,
      disabled: this.props.disabled
    }
  })

  /** Menu expose functionality/ Функциональность экспорта меню */
  readonly expose: MenuExposeInclude = {
    open: computed(() => Boolean(this.element.value?.open)),
    setOpen: async (open: boolean) => this.element.value?.setOpen(open),
    toOpen: async () => this.element.value?.toOpen(),
    toClose: async () => this.element.value?.toClose(),
    toggle: async () => this.element.value?.toggle(),

    menuElement: this.element
  }

  /**
   * Get the menu element
   *
   * Получить элемент меню
   */
  getElement() {
    return this.element.value
  }

  /**
   * Render the Menu component
   *
   * Рендер компонента меню
   * @param slotsChildren menu slots/ слоты меню
   * @param attrs additional attributes/ дополнительные атрибуты
   * @returns VNode array/ массив VNode
   */
  readonly render = (
    slotsChildren?: MenuSlots,
    attrs?: Record<string, any>
  ): VNode[] => {
    if (this.components) {
      return this.components.render(
        'menu',
        {
          ref: this.element,
          ...toBind(
            attrs ?? {},
            this.binds.value
          )
        },
        slotsChildren as RawSlots,
        this.index
      )
    }

    return []
  }
}
