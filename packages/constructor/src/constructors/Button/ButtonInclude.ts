import { computed, type VNode } from 'vue'
import { type ConstrBind, DesignComponents, getBind, getRef, type RefOrNormal } from '@dxt-ui/functional'

import type { ButtonComponentInclude, ButtonPropsInclude } from './basicTypes'
import type { ButtonPropsBasic } from './props'

/**
 * ButtonInclude class provides functionality for conditionally rendering button components
 * within other components. It manages the logic for determining when to display a button
 * and configures the appropriate properties.
 *
 * Класс ButtonInclude предоставляет функциональность для условного рендеринга компонентов
 * кнопки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения кнопки и настраивает соответствующие свойства.
 *
 * @template Props - Properties interface extending ButtonPropsInclude
 */
export class ButtonInclude<Props extends ButtonPropsInclude = ButtonPropsInclude> {
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
    protected readonly components?: DesignComponents<ButtonComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<ConstrBind<ButtonPropsBasic>>,
    protected readonly index?: string
  ) {
  }

  /**
   * Computed bindings for the button/ Вычисляемые привязки для кнопки
   */
  readonly binds = computed(() => getBind(getRef(this.props), this.extra, 'label'))

  /**
   * Renders the button component with provided properties and configuration.
   * Returns an array of VNode elements representing the rendered button, or an empty
   * array if the component cannot be rendered.
   *
   * Обрисовывает компонент кнопки с предоставленными свойствами и конфигурацией.
   * Возвращает массив VNode элементов, представляющих отрисованную кнопку, или пустой
   * массив, если компонент не может быть отрисованы.
   *
   * @param props additional properties/ дополнительные свойства
   */
  readonly render = (props?: RefOrNormal<ConstrBind<ButtonPropsBasic>>): VNode[] => {
    if (
      this.components
      && (
        ('label' in this.binds.value)
        || ('icon' in this.binds.value)
        || ('iconTrailing' in this.binds.value)
      )
    ) {
      return this.components.render(
        'button',
        {
          ...this.binds.value,
          ...getRef(props)
        },
        undefined,
        this.index ?? 'button'
      )
    }

    return []
  }
}
