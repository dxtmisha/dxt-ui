import { computed, type VNode } from 'vue'
import { type ConstrBind, type DesignComponents, getBind, getRef, type RefOrNormal, toBinds } from '@dxtmisha/functional'

import type { ChipComponentInclude, ChipPropsInclude } from './basicTypes'
import type { ChipPropsBasic } from './props'

/**
 * ChipInclude class provides functionality for conditionally rendering chip components
 * within other components. It manages the logic for determining when to display a chip
 * and configures the appropriate properties.
 *
 * Класс ChipInclude предоставляет функциональность для условного рендеринга компонентов
 * чипа внутри других компонентов. Он управляет логикой определения необходимости
 * отображения чипа и настраивает соответствующие свойства.
 *
 * @template Props - Properties interface extending ChipPropsInclude
 */
export class ChipInclude<Props extends ChipPropsInclude = ChipPropsInclude> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<ChipComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<ConstrBind<ChipPropsBasic>>,
    protected readonly index?: string
  ) {
  }

  /**
   * Computed bindings for the chip/ Вычисляемые привязки для чипа
   */
  readonly binds = computed(
    () => toBinds(
      this.props.chipAttrs,
      getBind(
        getRef(this.props),
        getRef(this.extra),
        'label'
      )
    )
  )

  /**
   * Renders the chip component with provided properties and configuration.
   * Returns an array of VNode elements representing the rendered chip, or an empty
   * array if the component cannot be rendered.
   *
   * Отрисовывает компонент чипа с предоставленными свойствами и конфигурацией.
   * Возвращает массив VNode элементов, представляющих отрисованный чип, или пустой
   * массив, если компонент не может быть отрисован.
   *
   * @param props additional properties/ дополнительные свойства
   */
  readonly render = (props?: RefOrNormal<ConstrBind<ChipPropsBasic>>): VNode[] => {
    if (
      this.components
      && (
        ('label' in this.binds.value)
        || ('icon' in this.binds.value)
        || ('iconTrailing' in this.binds.value)
      )
    ) {
      return this.components.render(
        'chip',
        {
          ...this.binds.value,
          ...getRef(props)
        },
        undefined,
        this.index ?? 'chip'
      )
    }

    return []
  }
}
