import type { Ref, ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { TextInclude } from '../../classes/TextInclude'

import type { BreadcrumbsComponents, BreadcrumbsEmits, BreadcrumbsSlots } from './types'
import type { BreadcrumbsProps } from './props'

/**
 * Class representing the business logic and orchestrator of the Breadcrumbs component.
 *
 * Класс, представляющий бизнес-логику и оркестратор компонента Breadcrumbs.
 */
export class Breadcrumbs {
  /** Click event manager / Менеджер событий клика */
  readonly event: EventClickInclude
  /** Text controller / Контроллер текста */
  readonly text: TextInclude

  /**
   * Constructor for Breadcrumbs.
   *
   * Конструктор для Breadcrumbs.
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param element input element / элемент ввода
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param slots object for working with slots / объект для работы со слотами
   * @param constructors object with classes / объект с классами
   * @param constructors.EventClickIncludeConstructor class for working with click event / класс для работы с событием клика
   * @param constructors.TextIncludeConstructor class for working with text / класс для работы с текстом
   */
  constructor(
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components: DesignComp<BreadcrumbsComponents, BreadcrumbsProps> | undefined,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly emits: ConstrEmit<BreadcrumbsEmits> | undefined,
    protected readonly props: BreadcrumbsProps,
    protected readonly refs: ToRefs<BreadcrumbsProps>,
    protected readonly slots: BreadcrumbsSlots | undefined,
    constructors: {
      EventClickIncludeConstructor?: typeof EventClickInclude
      TextIncludeConstructor?: typeof TextInclude
    } = {}
  ) {
    const {
      EventClickIncludeConstructor = EventClickInclude,
      TextIncludeConstructor = TextInclude
    } = constructors

    this.event = new EventClickIncludeConstructor(
      undefined,
      undefined,
      emits
    )

    this.text = new TextIncludeConstructor(props)
  }

  /**
   * Returns binding attributes for the container element. /
   * Возвращает атрибуты привязки для контейнера.
   * @returns object containing role and label / объект с ролью и меткой
   */
  get binds(): Record<string, any> {
    return {
      ...AriaStaticInclude.label(this.text.breadcrumb)
    }
  }
}
