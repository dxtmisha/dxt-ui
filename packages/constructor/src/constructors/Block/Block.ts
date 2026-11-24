import type { Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName,
  getElementId,
  isFilled,
  isNumber
} from '@dxtmisha/functional'

import { AreaInclude } from '../../classes/AreaInclude'
import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { HeaderInclude } from '../Header'

import type { AriaList } from '../../types/ariaTypes'
import type { BlockProps } from './props'
import type { BlockComponents, BlockEmits, BlockSlots } from './types'

/** Block dependency constructors type / Тип конструкторов зависимостей Block */
export type BlockConstructors = {
  /** Area manager constructor / Конструктор менеджера области */
  area: typeof AreaInclude
  /** Description manager constructor / Конструктор менеджера описания */
  description: typeof DescriptionInclude
  /** Header manager constructor / Конструктор менеджера шапки */
  header: typeof HeaderInclude
}

/**
 * Block orchestrator class managing headline, header inclusion, description, polymorphic root tag,
 * reactive area context, and ARIA section bindings.
 *
 * Класс-оркестратор Block, управляющий хедлайном, подключением шапки, описанием, полиморфным корневым тегом,
 * реактивным контекстом области и ARIA-привязками секции.
 */
export class Block extends DesignLogicAbstract<
  HTMLDivElement,
  BlockComponents,
  BlockEmits,
  BlockSlots,
  BlockProps,
  BlockConstructors
> {
  /** Default identifier for the header label / Идентификатор по умолчанию для метки шапки */
  readonly labelId: string = getElementId()

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<BlockConstructors> = {
    area: {
      item: AreaInclude,
      parameters: () => [this.props]
    },
    description: {
      item: DescriptionInclude,
      canCreate: () => DescriptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots
      ]
    },
    header: {
      item: HeaderInclude,
      canCreate: () => HeaderInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        undefined,
        undefined,
        this.labelId,
        this.slots
      ]
    }
  }

  /**
   * Constructor for initializing Block orchestrator and area injection context.
   *
   * Конструктор для инициализации оркестратора Block и контекста инъекции области.
   * @param props input data / входные данные
   * @param element target HTML element / целевой HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова при событиях
   * @param constructors optional class constructor overrides / необязательные переопределения конструкторов классов
   */
  constructor(
    props: Readonly<BlockProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<BlockComponents, BlockProps>,
    slots?: BlockSlots,
    emits?: ConstrEmit<BlockEmits>,
    constructors?: Partial<BlockConstructors>
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
   * ARIA attributes linking the block container to its rendered header label and description.
   *
   * ARIA-атрибуты, связывающие контейнер блока с его отрисованной меткой шапки и описанием.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    const aria: AriaList = {}

    if (this.hasHeaderLabel()) {
      Object.assign(
        aria,
        AriaStaticInclude.labelledby(this.getHeaderLabelId())
      )
    }

    const descriptionId = this.callInstance(
      'description',
      item => (item.is ? item.id : undefined)
    )

    if (descriptionId) {
      Object.assign(
        aria,
        AriaStaticInclude.describedby(descriptionId)
      )
    }

    return aria
  }

  /**
   * Computed bindings for the main element.
   *
   * Вычисляемые привязки для главного элемента.
   * @returns bindings object / объект привязок
   */
  get binds(): ConstrBind {
    return {
      ...this.aria
    }
  }

  /**
   * Root HTML tag name.
   *
   * Имя корневого HTML-тега.
   * @returns tag name / название тега
   */
  get tag(): string {
    return this.props.tag || 'div'
  }

  /**
   * Checks if headline content or slot is provided.
   *
   * Проверяет, задано ли содержимое или слот хедлайна.
   * @returns true if headline exists / true, если хедлайн существует
   */
  isHeadline(): boolean {
    return Boolean(
      isFilled(this.props.headline, true)
      || isNumber(this.props.headline)
      || this.slots?.headline
    )
  }

  /**
   * Checks whether the header renders a label element for `aria-labelledby`.
   *
   * Проверяет, отрисовывает ли шапка элемент метки для `aria-labelledby`.
   * @returns true if header label exists / true, если метка шапки существует
   */
  protected hasHeaderLabel(): boolean {
    return Boolean(
      (
        this.components?.is('header')
        && (
          isFilled(this.props.label, true)
          || isNumber(this.props.label)
          || isFilled(this.props.headerAttrs?.label, true)
          || isNumber(this.props.headerAttrs?.label)
          || this.slots?.label
        )
      )
    )
  }

  /**
   * Resolves the effective DOM `id` of the rendered header label.
   *
   * Разрешает фактический DOM `id` отрисованной метки шапки.
   * @returns header label id / идентификатор метки шапки
   */
  protected getHeaderLabelId(): string {
    return this.props.labelId
      || (this.props.headerAttrs?.labelId as string | undefined)
      || this.labelId
  }
}
