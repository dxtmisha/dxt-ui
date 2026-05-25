import { computed, ref, type VNode } from 'vue'
import {
  type ConstrBind,
  type DesignComponents,
  getRef,
  type ListNames,
  type RawSlots,
  type RefOrNormal,
  toBind,
  toBinds
} from '@dxtmisha/functional'

import type { MenuCountryComponentInclude, MenuCountryExposeInclude, MenuCountryPropsInclude } from './basicTypes'
import type { MenuCountryExpose, MenuCountrySlots } from './types'
import type { MenuCountryProps } from './props'

/**
 * MenuCountryInclude class provides functionality for conditionally rendering MenuCountry components
 * within other components. It manages the logic for determining when to display MenuCountry
 * and configures the appropriate properties.
 *
 * Класс MenuCountryInclude предоставляет функциональность для условного рендеринга компонентов
 * выбора страны MenuCountry внутри других компонентов. Он управляет логикой определения необходимости
 * отображения MenuCountry и настраивает соответствующие свойства.
 */
export class MenuCountryInclude<
  Props extends MenuCountryPropsInclude = MenuCountryPropsInclude,
  PropsExtra extends ConstrBind<MenuCountryProps> = ConstrBind<MenuCountryProps>
> {
  /** Reference to menu country element / Ссылка на элемент menu country */
  protected readonly element = ref<ConstrBind<MenuCountryExpose> | undefined>()

  /**
   * Constructor
   * @param props input parameter / входной параметр
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<MenuCountryComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
  }

  /**
   * Checks whether menu country should be displayed /
   * Проверяет, нужно ли отображать menu country
   */
  readonly is = computed(() => Boolean(!this.props.disabled && this.components))

  readonly isOpen = computed<boolean>(() => Boolean(this.element.value?.open))

  /** Computed bindings for the menu country / Вычисляемые привязки для menu country */
  readonly binds = computed<PropsExtra>(() => {
    const props = toBinds<PropsExtra>(
      getRef(this.extra),
      this.props.menuCountryAttrs,
      {
        class: `${this.className}__menuCountry`
      }
    )

    return {
      disabled: this.props.disabled,
      ...props
    }
  })

  /** Menu country expose functionality / Функциональность экспорта menu country */
  readonly expose: MenuCountryExposeInclude = {
    open: computed(() => Boolean(this.element.value?.open)),
    setOpen: async (open: boolean) => this.element.value?.setOpen(open),
    toOpen: async () => this.element.value?.toOpen(),
    toClose: async () => this.element.value?.toClose(),
    toggle: async () => this.element.value?.toggle(),

    menuElement: this.element,

    isSelected: computed(() => this.element.value?.isSelected.value ?? false),
    selectedList: computed(() => this.element.value?.selectedList.value ?? []),
    selectedNames: computed(() => this.element.value?.selectedNames.value ?? {} as ListNames),
    selectedValues: computed(() => this.element.value?.selectedValues.value ?? [])
  }

  /**
   * Get the menu country element
   *
   * Получить элемент menu country
   */
  getElement() {
    return this.element.value
  }

  /**
   * Render the MenuCountry component
   *
   * Рендер компонента menu country
   * @param slotsChildren menu country slots / слоты menu country
   * @param attrs additional attributes / дополнительные атрибуты
   * @returns VNode array / массив VNode
   */
  readonly render = (
    slotsChildren?: MenuCountrySlots,
    attrs?: Record<string, any>
  ): VNode[] => {
    if (this.components) {
      return this.components.render(
        'menuCountry',
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
