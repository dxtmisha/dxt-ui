import { computed, ref, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  DesignComponents,
  getRef,
  type RefOrNormal,
  toBind
} from '@dxt-ui/functional'

import type { MenuExposeInclude, MenuPropsInclude } from './basicTypes'
import type { MenuComponents, MenuEmits, MenuSlots } from './types'
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
  protected readonly element = ref<any>()

  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<MenuComponents, Props>,
    protected readonly emits?: ConstrEmit<MenuEmits>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
  }

  /**
   * Checks whether menu should be displayed
   * Проверяет, нужно ли отображать меню
   */
  readonly is = computed(() => Boolean(
    !this.props.disabled && this.components
  ))

  /** Computed bindings for the menu/ Вычисляемые привязки для меню */
  readonly binds = computed<PropsExtra>(() => {
    const props = toBind<PropsExtra>(
      getRef(this.extra) ?? {},
      this.props.menuAttrs ?? {}
    )

    return {
      ...props,
      disabled: this.props.disabled,
      class: `${this.className}__menu`
    }
  })

  /**
   * Menu expose functionality
   *
   * Функциональность экспорта меню
   */
  readonly expose: MenuExposeInclude = {
    open: computed(() => Boolean(this.element.value?.open)),
    setOpen: async (open: boolean) => this.element.value?.setOpen(open),
    toggle: async () => this.element.value?.toggle()
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
    if (this.components && this.is.value) {
      return this.components.render(
        'window',
        {
          ref: this.element,
          ...attrs,
          ...this.binds.value
        },
        slotsChildren as any,
        this.index ?? 'menu'
      )
    }

    return []
  }
}
