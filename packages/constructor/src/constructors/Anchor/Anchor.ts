import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp, writeClipboardData } from '@dxtmisha/functional'

import { TooltipInclude } from '../Tooltip'
import { TextInclude } from '../../classes/TextInclude'

import type { AnchorComponents, AnchorEmits, AnchorSlots } from './types'
import type { AnchorProps } from './props'

/**
 * Anchor
 */
export class Anchor {
  readonly tooltip: TooltipInclude
  readonly text: TextInclude

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: AnchorProps,
    protected readonly refs: ToRefs<AnchorProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<AnchorComponents, AnchorProps>,
    protected readonly slots?: AnchorSlots,
    protected readonly emits?: ConstrEmit<AnchorEmits>
  ) {
    this.tooltip = new TooltipInclude(
      this.props,
      this.className,
      this.components
    )
    this.text = new TextInclude(this.props)
  }

  /** Computed href attribute/ Вычисляемый атрибут href */
  readonly href = computed<string | undefined>(() => {
    if (this.props.name) {
      return `#${this.props.name}`
    }

    return undefined
  })

  /**
   * On click handler
   *
   * Обработчик нажатия
   */
  readonly onClick = (): void => {
    writeClipboardData(`${location.origin}${location.pathname}${this.href.value}`)
      .then(() => this.tooltip.open())
  }
}
