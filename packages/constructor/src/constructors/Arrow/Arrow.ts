import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type ConstrStyles, DesignComp, getElementId } from '@dxtmisha/functional'

import { ArrowElement } from './ArrowElement'
import { ArrowParent } from './ArrowParent'

import { ArrowDirection } from './basicTypes'
import type { ArrowComponents, ArrowEmits, ArrowSlots } from './types'
import type { ArrowProps } from './props'

/**
 * Arrow
 */
export class Arrow {
  readonly id: string = getElementId()
  readonly idMask: string = `${this.id}-mark`
  readonly idMaskBorder: string = `${this.id}-mark-border`

  readonly elementItem: ArrowElement
  readonly parent: ArrowParent

  readonly markUrl = `url("#${this.idMask}")`
  readonly markUrlBorder = `url("#${this.idMaskBorder}")`

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
    protected readonly props: ArrowProps,
    protected readonly refs: ToRefs<ArrowProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ArrowComponents, ArrowProps>,
    protected readonly slots?: ArrowSlots,
    protected readonly emits?: ConstrEmit<ArrowEmits>
  ) {
    this.elementItem = new ArrowElement(
      this.element,
      this.className
    )
    this.parent = new ArrowParent(
      this.element,
      this.className,
      this.elementItem
    )
  }

  /** Direction of the arrow/ Направление стрелки */
  readonly direction = computed<ArrowDirection>(() => {
    if (
      this.props.position
      && this.props.position !== 'auto'
    ) {
      return this.props.position as ArrowDirection
    }

    return ArrowDirection.TOP
  })

  /** Styles for the component/ Стили для компонента */
  readonly styles = computed<ConstrStyles>(() => {
    return {
      [`--${this.className}-sys-background`]: this.parent.background.value,
      [`--${this.className}-sys-borderWidth`]: this.parent.borderWidth.value,
      [`--${this.className}-sys-borderColor`]: this.parent.borderColor.value,
      [`--${this.className}-sys-borderRadius`]: this.parent.borderRadius.value,
      [`--${this.className}-sys-boxShadow`]: this.parent.boxShadow.value,
      [`--${this.className}-sys-url-mark`]: this.markUrl,
      [`--${this.className}-sys-url-markBorder`]: this.markUrlBorder
    }
  })
}
