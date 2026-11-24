import type { Ref } from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'

import { AreaInclude } from '../../classes/AreaInclude'

import type { ContainerProps } from './props'
import type {
  ContainerComponents,
  ContainerEmits,
  ContainerSlots
} from './types'

/** Container dependency constructors type / Тип конструкторов зависимостей Container */
export type ContainerConstructors = {
  /** Area context manager constructor / Конструктор менеджера контекста области */
  area: typeof AreaInclude
}

/**
 * Class managing the business logic and orchestration of the Container component.
 * Initializes the reactive layout area context during setup so descendant components can inject it.
 *
 * Класс, управляющий бизнес-логикой и оркестрацией компонента Container.
 * Инициализирует реактивный контекст области макета на этапе setup для передачи дочерним компонентам.
 */
export class Container extends DesignLogicAbstract<
  HTMLElement,
  ContainerComponents,
  ContainerEmits,
  ContainerSlots,
  ContainerProps,
  ContainerConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ContainerConstructors> = {
    area: {
      item: AreaInclude,
      parameters: () => [this.props]
    }
  }

  /**
   * Constructor for initializing Container orchestrator and layout area injection context.
   *
   * Конструктор для инициализации оркестратора Container и контекста инъекции области макета.
   * @param props input data / входные данные
   * @param element root HTML element reference / ссылка на корневой HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits event emitter callback / функция обратного вызова при событиях
   * @param constructors dependency constructors override map / карта переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<ContainerProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<ContainerComponents, ContainerProps>,
    slots?: ContainerSlots,
    emits?: ConstrEmit<ContainerEmits>,
    constructors?: Partial<ContainerConstructors>
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
}
