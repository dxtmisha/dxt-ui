import { computed, ref, type VNode } from 'vue'
import { type ConstrBind, type DesignComponents, getRef, type RefOrNormal, toBinds } from '@dxtmisha/functional'

import type { HorizontalScrollComponentInclude, HorizontalScrollPropsInclude } from './basicTypes'
import type { HorizontalScrollPropsBasic } from './props'

/**
 * HorizontalScrollInclude class provides functionality for conditionally rendering horizontal scroll components
 * within other components. It manages the logic for determining when to display a horizontal scroll
 * and configures the appropriate properties.
 *
 * Класс HorizontalScrollInclude предоставляет функциональность для условного рендеринга компонентов
 * горизонтальной прокрутки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения горизонтальной прокрутки и настраивает соответствующие свойства.
 *
 * @template Props - Properties interface extending HorizontalScrollPropsInclude
 */
export class HorizontalScrollInclude<Props extends HorizontalScrollPropsInclude = HorizontalScrollPropsInclude> {
  /**
   * Element of the component.
   *
   * Элемент компонента.
   */
  readonly element = ref<any>()

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
    protected readonly components?: DesignComponents<HorizontalScrollComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<ConstrBind<HorizontalScrollPropsBasic>>,
    protected readonly index?: string
  ) {
  }

  /**
   * Computed bindings for the horizontal scroll/ Вычисляемые привязки для горизонтальной прокрутки
   */
  readonly binds = computed(
    () => toBinds(
      this.props.horizontalScrollAttrs,
      getRef(this.extra),
      {
        ref: this.element,
        flush: this.props.horizontalScrollFlush
      }
    )
  )

  /**
   * Scrolls to the selected element.
   *
   * Прокручивает к выбранному элементу.
   */
  readonly toSelected = () => {
    this.element.value?.toSelected?.()
  }

  /**
   * Renders the horizontal scroll component with provided properties and configuration.
   * Returns an array of VNode elements representing the rendered horizontal scroll, or an empty
   * array if the component cannot be rendered.
   *
   * Обрисовывает компонент горизонтальной прокрутки с предоставленными свойствами и конфигурацией.
   * Возвращает массив VNode элементов, представляющих отрисованную горизонтальную прокрутку, или пустой
   * массив, если компонент не может быть отрисованы.
   *
   * @param props additional properties/ дополнительные свойства
   * @param children content for the default slot/ контент для слота по умолчанию
   */
  readonly render = (
    props?: RefOrNormal<ConstrBind<HorizontalScrollPropsBasic>>,
    children?: any
  ): VNode[] => {
    if (this.components) {
      return this.components.render(
        'horizontalScroll',
        {
          ...this.binds.value,
          ...getRef(props)
        },
        children,
        this.index ?? 'horizontalScroll'
      )
    }

    return []
  }
}
