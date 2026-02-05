import { computed, onMounted, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

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
   * @param AnchorHrefConstructor class for working with href/ класс для работы с ссылкой
   * @param AnchorToConstructor class for working with scroll/ класс для работы с прокруткой
   * @param AnchorEventConstructor class for working with events/ класс для работы с событиями
   * @param AnchorIconConstructor class for working with icons/ класс для работы с иконками
   * @param LabelIncludeConstructor class for working with label/ класс для работы с меткой
   * @param TextIncludeConstructor class for working with text/ класс для работы с текстом
   * @param TooltipIncludeConstructor class for working with tooltip/ класс для работы с подсказкой
   */
  constructor(
    protected readonly props: AnchorProps,
    protected readonly refs: ToRefs<AnchorProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<AnchorComponents, AnchorProps>,
    protected readonly slots?: AnchorSlots,
    protected readonly emits?: ConstrEmit<AnchorEmits>,
    AnchorHrefConstructor: typeof AnchorHref = AnchorHref,
    AnchorToConstructor: typeof AnchorTo = AnchorTo,
    AnchorEventConstructor: typeof AnchorEvent = AnchorEvent,
    AnchorIconConstructor: typeof AnchorIcon = AnchorIcon,
    LabelIncludeConstructor: typeof LabelInclude = LabelInclude,
    TextIncludeConstructor: typeof TextInclude = TextInclude,
    TooltipIncludeConstructor: typeof TooltipInclude = TooltipInclude
  ) {
    this.label = new LabelIncludeConstructor(props, className, undefined, slots)
    this.text = new TextIncludeConstructor(this.props)
    this.tooltip = new TooltipIncludeConstructor(
      this.props,
      this.className,
      this.components,
      computed(() => ({
        description: this.text.copiedClipboard.value,
        interactive: false
      }))
    )

    this.href = new AnchorHrefConstructor(this.props)
    this.to = new AnchorToConstructor(
      this.props,
      this.element,
      this.href
    )
    this.event = new AnchorEventConstructor(
      this.props,
      this.tooltip,
      this.href,
      this.to
    )
    this.icon = new AnchorIconConstructor(this.props, this.event)

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
