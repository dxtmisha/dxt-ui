import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { LabelInclude } from '../../classes/LabelInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { CaptionInclude } from '../../classes/CaptionInclude'

import { IconInclude } from '../Icon'

import type { BlockComponents, BlockEmits, BlockSlots } from './types'
import type { BlockProps } from './props'

/**
 * Block
 */
export class Block {
  /**
   * Object for working with label/
   * Объект для работы с меткой
   */
  readonly label: LabelInclude
  /**
   * Object for working with description/
   * Объект для работы с описанием
   */
  readonly description: DescriptionInclude
  /**
   * Object for working with caption/
   * Объект для работы с подписью
   */
  readonly caption: CaptionInclude

  /**
   * Object for working with icon/
   * Объект для работы с иконкой
   */
  readonly icon: IconInclude

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
    protected readonly props: BlockProps,
    protected readonly refs: ToRefs<BlockProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<BlockComponents, BlockProps>,
    protected readonly slots?: BlockSlots,
    protected readonly emits?: ConstrEmit<BlockEmits>
  ) {
    this.label = new LabelInclude(
      props,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      true,
      undefined,
      computed(() => this.props.tagHeader || 'h3')
    )
    this.caption = new CaptionInclude(props, className, slots)
    this.description = new DescriptionInclude(props, className, slots)

    this.icon = new IconInclude(props, className, components)
  }

  /**
   * Checks if the headline exists/
   * Проверяет, существует ли заголовок
   */
  readonly isHeadline = computed<boolean>(() => {
    return Boolean(
      this.props.headline
      || (this.slots && 'headline' in this.slots)
    )
  })

  /**
   * Checks if the header exists/
   * Проверяет, существует ли шапка
   */
  readonly isHeader = computed<boolean>(() => {
    return this.label.is.value
      || this.caption.is.value
      || this.description.is.value
  })

  /**
   * Tag name/
   * Название тега
   */
  readonly tag = computed<string>(() => {
    return this.props.tag || 'div'
  })
}
