import { ref, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, getElementId, toBinds } from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { type CellExpose } from '../Cell'
import { MotionTransformInclude } from '../MotionTransform'

import type { AccordionComponents, AccordionEmits, AccordionSlots } from './types'
import type { AccordionProps } from './props'

/**
 * Class representing the core logic and state manager for the Accordion component.
 * It coordinates panel open/close states, transitions, accessibility identifiers,
 * dynamic cells, and reactive model updates.
 *
 * Класс, представляющий основную логику и менеджер состояния для компонента Accordion.
 * Координирует состояния открытия/закрытия панели, переходы анимации, идентификаторы
 * доступности, динамические ячейки и реактивные обновления модели.
 */
export class Accordion {
  /** Motion transform manager for transition animation / Менеджер анимации переходов */
  readonly motionTransform: MotionTransformInclude

  /** Event manager for click events / Менеджер клик-событий */
  readonly event: EventClickInclude

  /** Open state reference / Ссылка на состояние открытия */
  readonly open = ref<boolean>(false)

  /** Model synchronization manager / Менеджер синхронизации модели */
  readonly model: ModelInclude<boolean>

  /** Reference to the head cell component / Ссылка на компонент ячейки заголовка */
  readonly elementHead = ref<CellExpose>()

  /** Unique element identifier for label ARIA binding / Уникальный идентификатор элемента для ARIA-привязки метки */
  protected readonly labelId: string = getElementId()

  /** Unique element identifier for description ARIA binding / Уникальный идентификатор элемента для ARIA-привязки описания */
  protected readonly descriptionId: string = getElementId()

  /**
   * Constructor for initializing Accordion properties and inclusion managers.
   *
   * Конструктор для инициализации свойств Accordion и включенных менеджеров.
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.EventClickIncludeConstructor class for working with event click / класс для работы с событием клика
   * @param constructors.ModelIncludeConstructor class for working with model / класс для работы с моделью
   * @param constructors.MotionTransformIncludeConstructor class for working with motion transform / класс для работы с анимацией перехода
   */
  constructor(
    protected readonly props: AccordionProps,
    protected readonly refs: ToRefs<AccordionProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<AccordionComponents, AccordionProps>,
    protected readonly slots?: AccordionSlots,
    protected readonly emits?: ConstrEmit<AccordionEmits>,
    constructors?: {
      EventClickIncludeConstructor?: typeof EventClickInclude
      ModelIncludeConstructor?: typeof ModelInclude
      MotionTransformIncludeConstructor?: typeof MotionTransformInclude
    }
  ) {
    const {
      EventClickIncludeConstructor = EventClickInclude,
      ModelIncludeConstructor = ModelInclude,
      MotionTransformIncludeConstructor = MotionTransformInclude
    } = constructors ?? {}

    this.motionTransform = new MotionTransformIncludeConstructor(
      this.className,
      this.props,
      this.components,
      () => ({
        'section': true,
        'adaptive': 'planeAlways',
        'inDom': true,
        'ariaLabelledby': this.labelId,
        'ariaDescribedby': this.descriptionId,
        'data-divider': this.props.divider ? 'divider' : undefined
      }),
      undefined,
      this.emits
    )

    this.event = new EventClickIncludeConstructor(
      undefined,
      undefined,
      emits
    )

    this.model = new ModelIncludeConstructor('open', this.emits, this.open)
  }

  /**
   * Returns bindings for the header cell.
   *
   * Возвращает привязки для ячейки заголовка.
   * @returns bindings object / объект привязок
   */
  get bindsCell() {
    return toBinds(
      this.props.cellAttrs,
      {
        ref: this.elementHead,
        icon: this.props.icon,
        iconTrailing: this.props.iconArrowDown,
        label: this.props.label,
        description: this.props.description,
        dynamic: true,
        labelId: this.labelId,
        descriptionId: this.descriptionId,
        onClick: this.event.onClick,
        onKeydown: this.event.onKeydown
      }
    )
  }
}
