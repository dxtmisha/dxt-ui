import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { AreaInclude } from '../../classes/AreaInclude'
import { CaptionInclude } from '../../classes/CaptionInclude'
import { IconInclude } from '../Icon'
import { LabelInclude } from '../../classes/LabelInclude'

import type { HeaderComponents, HeaderEmits, HeaderSlots } from './types'
import type { HeaderProps } from './props'

/**
 * Header controller class managing caption, icons, labels, tags, and area. /
 * Класс контроллера Header, управляющий подписью, иконками, метками, тегами и областью.
 */
export class Header {
  /** Object for working with label / Объект для работы с меткой */
  readonly label: LabelInclude

  /** Object for working with caption / Объект для работы с подписью */
  readonly caption: CaptionInclude

  /** Object for working with icon / Объект для работы с иконкой */
  readonly icon: IconInclude

  /** Object for working with area value / Объект для работы со значением области */
  readonly area: AreaInclude

  /**
   * Constructor /
   * Конструктор
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   */
  constructor(
    protected readonly props: HeaderProps,
    protected readonly refs: ToRefs<HeaderProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<HeaderComponents, HeaderProps>,
    protected readonly slots?: HeaderSlots,
    protected readonly emits?: ConstrEmit<HeaderEmits>,
    constructors: {
      AreaIncludeConstructor?: typeof AreaInclude
      CaptionIncludeConstructor?: typeof CaptionInclude
      IconIncludeConstructor?: typeof IconInclude
      LabelIncludeConstructor?: typeof LabelInclude
    } = {}
  ) {
    const {
      AreaIncludeConstructor = AreaInclude,
      CaptionIncludeConstructor = CaptionInclude,
      IconIncludeConstructor = IconInclude,
      LabelIncludeConstructor = LabelInclude
    } = constructors

    this.label = new LabelIncludeConstructor(
      props,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      undefined,
      undefined,
      () => String(this.props.tag)
    )
    this.caption = new CaptionIncludeConstructor(props, className, slots)
    this.icon = new IconIncludeConstructor(props, className, components)
    this.area = new AreaIncludeConstructor(props)
  }

  /**
   * List of classes for the input element. /
   * Список классов для элемента ввода.
   * @returns array of class names / массив названий классов
   */
  get classList(): string[] {
    return [String(this.props.tag)]
  }
}
