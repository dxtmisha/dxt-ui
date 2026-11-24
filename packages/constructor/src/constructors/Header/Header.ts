import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'
import type { Ref } from 'vue'

import { AreaInclude } from '../../classes/AreaInclude'
import { CaptionInclude } from '../../classes/CaptionInclude'
import { IconInclude } from '../Icon'
import { LabelInclude } from '../../classes/LabelInclude'

import type { HeaderProps } from './props'
import type { HeaderComponents, HeaderEmits, HeaderSlots } from './types'

/** Header dependency constructors type / Тип конструкторов зависимостей Header */
export type HeaderConstructors = {
  /** Area manager constructor / Конструктор менеджера области */
  area: typeof AreaInclude
  /** Caption manager constructor / Конструктор менеджера подписи */
  caption: typeof CaptionInclude
  /** Icon manager constructor / Конструктор менеджера иконки */
  icon: typeof IconInclude
  /** Label manager constructor / Конструктор менеджера метки */
  label: typeof LabelInclude
}

/**
 * Header orchestrator class managing label, caption, leading icon, semantic heading tag,
 * and reactive layout area context.
 *
 * Класс-оркестратор Header, управляющий меткой, подписью, ведущей иконкой, семантическим тегом
 * заголовка и реактивным контекстом области макета.
 */
export class Header extends DesignLogicAbstract<
  HTMLDivElement,
  HeaderComponents,
  HeaderEmits,
  HeaderSlots,
  HeaderProps,
  HeaderConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<HeaderConstructors> = {
    area: {
      item: AreaInclude,
      parameters: () => [this.props]
    },
    caption: {
      item: CaptionInclude,
      canCreate: () => CaptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots
      ]
    },
    icon: {
      item: IconInclude,
      canCreate: () => IconInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    },
    label: {
      item: LabelInclude,
      canCreate: () => LabelInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        undefined,
        this.slots,
        undefined,
        undefined,
        undefined,
        undefined,
        () => this.tag
      ]
    }
  }

  /**
   * Constructor for initializing Header orchestrator and area injection context.
   *
   * Конструктор для инициализации оркестратора Header и контекста инъекции области.
   * @param props input data / входные данные
   * @param element target HTML element / целевой HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова при событиях
   * @param constructors optional class constructor overrides / необязательные переопределения конструкторов классов
   */
  constructor(
    props: Readonly<HeaderProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<HeaderComponents, HeaderProps>,
    slots?: HeaderSlots,
    emits?: ConstrEmit<HeaderEmits>,
    constructors?: Partial<HeaderConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )

    this.i('area')
  }

  /**
   * Semantic HTML tag for the heading label element.
   *
   * Семантический HTML-тег для элемента метки заголовка.
   * @returns heading tag name / название тега заголовка
   */
  get tag(): string {
    return this.props.tag ?? 'h3'
  }
}
