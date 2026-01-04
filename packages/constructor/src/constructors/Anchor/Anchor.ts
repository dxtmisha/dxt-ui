import { computed, onMounted, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxtmisha/functional'

import { LabelInclude } from '../../classes/LabelInclude'
import { TextInclude } from '../../classes/TextInclude'
import { TooltipInclude } from '../Tooltip'

import { AnchorHref } from './AnchorHref'
import { AnchorTo } from './AnchorTo'
import { AnchorEvent } from './AnchorEvent'
import { AnchorIcon } from './AnchorIcon'

import type { AnchorComponents, AnchorEmits, AnchorSlots } from './types'
import type { AnchorProps } from './props'

/**
 * Anchor
 */
export class Anchor {
  readonly label: LabelInclude
  readonly text: TextInclude
  readonly tooltip: TooltipInclude

  readonly href: AnchorHref
  readonly to: AnchorTo
  readonly event: AnchorEvent
  readonly icon: AnchorIcon

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
    this.label = new LabelInclude(props, className, undefined, slots)
    this.text = new TextInclude(this.props)
    this.tooltip = new TooltipInclude(
      this.props,
      this.className,
      this.components,
      computed(() => ({
        description: this.text.copiedClipboard.value
      }))
    )

    this.href = new AnchorHref(this.props)
    this.to = new AnchorTo(
      this.props,
      this.element,
      this.href
    )
    this.event = new AnchorEvent(
      this.props,
      this.tooltip,
      this.href,
      this.to
    )
    this.icon = new AnchorIcon(this.props, this.event)

    onMounted(() => {
      requestAnimationFrame(this.goIsFocus)
    })
  }

  /** Is hide anchor/ Скрыть якорь */
  readonly isHide = computed<boolean>(() => {
    return this.props.hide
      || (
        !this.label.is.value
        && !this.props.isCopy
      )
  })

  /**
   * Go if focus on anchor
   *
   * Перейти, если фокус на якоре
   */
  protected readonly goIsFocus = (): void => {
    if (location.hash === this.href.get()) {
      this.to.go()
    }
  }
}
