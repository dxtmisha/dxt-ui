import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { ActionsInclude } from '../Actions'
import { ImageInclude } from '../Image'

import type { PlaceholderComponents, PlaceholderEmits, PlaceholderSlots } from './types'
import type { PlaceholderProps } from './props'

/**
 * Class representing the business logic and structure of the Placeholder component.
 *
 * Класс, представляющий бизнес-логику и структуру компонента Placeholder.
 */
export class Placeholder {
  /** Actions controller / Контроллер действий */
  readonly actions: ActionsInclude

  /** Description controller / Контроллер описания */
  readonly description: DescriptionInclude

  /** Image controller / Контроллер изображения */
  readonly image: ImageInclude

  /** Label controller / Контроллер метки */
  readonly label: LabelInclude

  /**
   * Constructor for the warning display logic.
   *
   * Конструктор для логики отображения предупреждений.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.ActionsIncludeConstructor class for working with actions / класс для работы с действиями
   * @param constructors.DescriptionIncludeConstructor class for working with description / класс для работы с описанием
   * @param constructors.ImageIncludeConstructor class for working with image / класс для работы с изображением
   * @param constructors.LabelIncludeConstructor class for working with label / класс для работы с меткой
   */
  constructor(
    protected readonly props: PlaceholderProps,
    protected readonly refs: ToRefs<PlaceholderProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<PlaceholderComponents, PlaceholderProps>,
    protected readonly slots?: PlaceholderSlots,
    protected readonly emits?: ConstrEmit<PlaceholderEmits>,
    constructors: {
      ActionsIncludeConstructor?: typeof ActionsInclude
      DescriptionIncludeConstructor?: typeof DescriptionInclude
      ImageIncludeConstructor?: typeof ImageInclude
      LabelIncludeConstructor?: typeof LabelInclude
    } = {}
  ) {
    const {
      ActionsIncludeConstructor = ActionsInclude,
      DescriptionIncludeConstructor = DescriptionInclude,
      ImageIncludeConstructor = ImageInclude,
      LabelIncludeConstructor = LabelInclude
    } = constructors

    this.image = new ImageIncludeConstructor(
      className,
      props,
      components,
      undefined,
      emits
    )

    this.description = new DescriptionIncludeConstructor(
      props,
      className,
      slots
    )

    this.label = new LabelIncludeConstructor(
      props,
      className,
      undefined,
      slots
    )

    this.actions = new ActionsIncludeConstructor(
      className,
      props,
      components,
      () => ({ align: 'center' }),
      undefined,
      emits
    )
  }

  /**
   * Computed bindings for the main element.
   *
   * Вычисляемые привязки для главного элемента.
   * @returns bindings object / объект привязок
   */
  get binds(): Record<string, any> {
    const props = {}

    if (this.label.is) {
      Object.assign(
        props,
        AriaStaticInclude.labelledby(this.label.id)
      )
    }

    if (this.description.is) {
      Object.assign(
        props,
        AriaStaticInclude.describedby(this.description.id)
      )
    }

    return props
  }
}
