import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, getElementId } from '@dxtmisha/functional'

import { AreaInclude } from '../../classes/AreaInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'

import { HeaderInclude } from '../Header'

import type { BlockComponents, BlockEmits, BlockSlots } from './types'
import type { BlockProps } from './props'

/**
 * Block
 */
export class Block {
  /**
   * Object for working with description/
   * Объект для работы с описанием
   */
  readonly description: DescriptionInclude

  /**
   * Object for working with header/
   * Объект для работы с шапкой
   */
  readonly header: HeaderInclude

  /**
   * Object for working with area value/
   * Объект для работы со значением области
   */
  readonly area: AreaInclude

  /**
   * Identifier for the label/
   * Идентификатор для метки
   */
  readonly labelId: string = getElementId()

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
   * @param constructors object with classes/ объект с классами
   * @param constructors.AreaIncludeConstructor class for working with area value/ класс для работы со значением области
   * @param constructors.DescriptionIncludeConstructor class for working with the description/ класс для работы с описанием
   */
  constructor(
    protected readonly props: BlockProps,
    protected readonly refs: ToRefs<BlockProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<BlockComponents, BlockProps>,
    protected readonly slots?: BlockSlots,
    protected readonly emits?: ConstrEmit<BlockEmits>,
    constructors?: {
      AreaIncludeConstructor?: typeof AreaInclude
      HeaderIncludeConstructor?: typeof HeaderInclude
      DescriptionIncludeConstructor?: typeof DescriptionInclude
    }
  ) {
    const {
      AreaIncludeConstructor = AreaInclude,
      HeaderIncludeConstructor = HeaderInclude,
      DescriptionIncludeConstructor = DescriptionInclude
    } = constructors ?? {}

    this.header = new HeaderIncludeConstructor(
      props,
      className,
      components,
      this.slots,
      undefined,
      this.labelId
    )

    this.description = new DescriptionIncludeConstructor(props, className, slots)
    this.area = new AreaIncludeConstructor(props)
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
   * Tag name/
   * Название тега
   */
  readonly tag = computed<string>(() => {
    return this.props.tag || 'div'
  })
}
