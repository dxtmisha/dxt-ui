import { ref, watch, type Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  type DesignName,
  DesignLogicAbstract,
  isDomRuntime
} from '@dxtmisha/functional'

import { AccordionHead } from './AccordionHead'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import {
  type MotionTransformEmitOptions,
  type MotionTransformEmits,
  MotionTransformInclude
} from '../MotionTransform'

import type { AccordionProps } from './props'
import type {
  AccordionComponents,
  AccordionEmits,
  AccordionSlots
} from './types'

/** Accordion dependency constructors type / Тип конструкторов зависимостей Accordion */
export type AccordionConstructors = {
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Header cell constructor / Конструктор ячейки заголовка */
  head: typeof AccordionHead
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude<boolean>
  /** Motion transform manager constructor / Конструктор менеджера анимации переходов */
  motionTransform: typeof MotionTransformInclude
}

/**
 * Class representing the core logic and state manager for the Accordion component.
 * It coordinates panel open/close states, transitions, accessibility identifiers,
 * dynamic cells, and reactive model updates.
 *
 * Класс, представляющий основную логику и менеджер состояния для компонента Accordion.
 * Координирует состояния открытия/закрытия панели, переходы анимации, идентификаторы
 * доступности, динамические ячейки и реактивные обновления модели.
 */
export class Accordion extends DesignLogicAbstract<
  HTMLDivElement,
  AccordionComponents,
  AccordionEmits,
  AccordionSlots,
  AccordionProps,
  AccordionConstructors
> {
  /** Open state reference / Ссылка на состояние открытия */
  readonly open: Ref<boolean> = ref<boolean>(Boolean(this.props.open))

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<AccordionConstructors> = {
    event: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        undefined,
        this.emits
      ]
    },
    head: {
      item: AccordionHead,
      parameters: () => [
        this.props,
        () => this.i('event')
      ]
    },
    model: {
      item: ModelInclude<boolean>,
      parameters: () => [
        'open',
        this.emits,
        this.open
      ]
    },
    motionTransform: {
      item: MotionTransformInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        this.onEmitsTransform,
        () => ({
          'adaptive': 'planeAlways',
          'inDom': true,
          'section': true,

          'ariaDescribedby': this.i('head').descriptionId,
          'ariaLabelledby': this.i('head').labelId,

          'data-divider': this.props.divider ? 'divider' : undefined
        })
      ]
    }
  }

  /**
   * Constructor for initializing Accordion properties and inclusion managers.
   *
   * Конструктор для инициализации свойств Accordion и включенных менеджеров.
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param hasLifecycle whether to register component lifecycle hooks / регистрировать ли хуки жизненного цикла компонента
   */
  constructor(
    props: AccordionProps,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<AccordionComponents, AccordionProps>,
    slots?: AccordionSlots,
    emits?: ConstrEmit<AccordionEmits>,
    constructors?: Partial<AccordionConstructors>,
    hasLifecycle: boolean = isDomRuntime()
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors,
      hasLifecycle
    )

    if (hasLifecycle) {
      this.i('model')
    }
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  protected override readonly onMounted = (): void => {
    watch(() => this.props.open, this.update)
    this.update()
  }

  /**
   * Computed bindings for the element.
   *
   * Вычисляемые привязки для элемента.
   * @returns element bindings / привязки элемента
   */
  get binds(): ConstrBind {
    return this.i('model').getBinds()
  }

  /**
   * Returns bindings for the header cell.
   *
   * Возвращает привязки для ячейки заголовка.
   * @returns bindings object / объект привязок
   */
  get bindsCell(): ConstrBind {
    return this.i('head').binds
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return {}
  }

  /**
   * Dispatches MotionTransform events and synchronizes the open state.
   *
   * Диспетчеризирует события MotionTransform и синхронизирует состояние открытия.
   * @param type event name / название события
   * @param args event arguments / аргументы события
   */
  readonly onEmitsTransform: ConstrEmit<MotionTransformEmits> = (
    type: string,
    ...args: any[]
  ): void => {
    if (type === 'transform' || type === 'transformLite') {
      const options = (type === 'transform' ? args[1] : args[0]) as MotionTransformEmitOptions | undefined

      if (options && typeof options.open === 'boolean') {
        this.open.value = options.open
      }
    }

    (this.emits as any)?.(type, ...args)
  }

  /**
   * Updates the open state based on props.
   *
   * Обновляет состояние открытия на основе свойств.
   */
  readonly update = (): void => {
    this.open.value = Boolean(this.props.open)
  }
}
