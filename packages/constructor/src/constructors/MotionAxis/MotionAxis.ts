import { getCurrentInstance, onUpdated, type Ref, watch } from 'vue'
import {
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'

import { ModelInclude } from '../../classes/ModelInclude'

import { MotionAxisElement } from './MotionAxisElement'
import { MotionAxisGo } from './MotionAxisGo'
import { MotionAxisPrevious } from './MotionAxisPrevious'
import { MotionAxisSelected } from './MotionAxisSelected'
import { MotionAxisSlides } from './MotionAxisSlides'
import { MotionAxisStatus } from './MotionAxisStatus'
import { MotionAxisStyles } from './MotionAxisStyles'

import type { MotionAxisComponents, MotionAxisEmits, MotionAxisSlots } from './types'
import type { MotionAxisProps } from './props'

/** MotionAxis dependency constructors type / Тип конструкторов зависимостей MotionAxis */
export type MotionAxisConstructors = {
  /** Element manager constructor / Конструктор менеджера элементов */
  element: typeof MotionAxisElement
  /** Axis movement and navigation constructor / Конструктор перемещения по осям и навигации */
  go: typeof MotionAxisGo
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude
  /** Previous slide tracker constructor / Конструктор отслеживания предыдущего слайда */
  previous: typeof MotionAxisPrevious
  /** Selected slide state constructor / Конструктор состояния выбранного слайда */
  selected: typeof MotionAxisSelected
  /** Slides list manager constructor / Конструктор менеджера списка слайдов */
  slides: typeof MotionAxisSlides
  /** Transition status manager constructor / Конструктор менеджера статуса перехода */
  status: typeof MotionAxisStatus
  /** Transition styles coordinator constructor / Конструктор координатора стилей перехода */
  styles: typeof MotionAxisStyles
}

/**
 * Controller class for managing axis-based transition animations (MotionAxis).
 * It orchestrates DOM elements, slides, selection state, and style updates.
 *
 * Класс-контроллер для управления анимациями перехода по осям (MotionAxis).
 * Управляет DOM-элементами, слайдами, состоянием выбора и обновлением стилей.
 */
export class MotionAxis extends DesignLogicAbstract<
  HTMLDivElement,
  MotionAxisComponents,
  MotionAxisEmits,
  MotionAxisSlots,
  MotionAxisProps,
  MotionAxisConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<MotionAxisConstructors> = {
    element: {
      item: MotionAxisElement,
      parameters: () => [
        this.element,
        this.naming
      ]
    },
    go: {
      item: MotionAxisGo,
      parameters: () => [
        this.props,
        () => this.i('slides'),
        () => this.i('status')
      ]
    },
    model: {
      item: ModelInclude,
      parameters: () => [
        'selected',
        this.emits,
        this.i('selected').item
      ]
    },
    previous: {
      item: MotionAxisPrevious,
      parameters: () => [
        () => this.i('styles')
      ]
    },
    selected: {
      item: MotionAxisSelected,
      parameters: () => [
        this.props
      ]
    },
    slides: {
      item: MotionAxisSlides,
      parameters: () => [
        () => this.i('status'),
        this.slots
      ]
    },
    status: {
      item: MotionAxisStatus,
      parameters: () => [
        this.props,
        () => this.i('element'),
        () => this.i('previous'),
        () => this.i('selected'),
        () => this.i('styles'),
        this.emits
      ]
    },
    styles: {
      item: MotionAxisStyles,
      parameters: () => [
        this.element,
        this.naming,
        () => this.i('selected')
      ]
    }
  }

  /**
   * Constructor for initializing the MotionAxis controller.
   *
   * Конструктор для инициализации контроллера MotionAxis.
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<MotionAxisProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<MotionAxisComponents, MotionAxisProps>,
    slots?: MotionAxisSlots,
    emits?: ConstrEmit<MotionAxisEmits>,
    constructors?: Partial<MotionAxisConstructors>
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

    this.i('model')

    if (getCurrentInstance()) {
      onUpdated(() => {
        if (this.hasInstance('slides')) {
          this.i('slides').update()
        }
      })
    }
  }

  /**
   * Synchronizes selected state on mount and starts watching prop changes.
   *
   * Синхронизирует выбранное состояние при монтировании и запускает отслеживание изменений свойств.
   */
  protected override readonly onMounted = (): void => {
    this.updateSelected()
    watch(() => this.props.selected, this.updateSelected)
  }

  /**
   * Returns a list of available CSS classes based on the motion configuration.
   *
   * Возвращает список доступных CSS-классов на основе конфигурации движения.
   * @returns map of class names to boolean activation / карта имён классов и булевых значений активации
   */
  get classes(): ConstrClassObject {
    const go = this.i('go')

    return {
      [this.naming.getStatusClass('axis', go.axis.value)]: true,
      [this.naming.getStatusClass('direction', go.direction.value)]: true,
      [this.naming.getStatusClass('start')]: Boolean(this.props.animationHeight) && this.i('element').getStart(),
      [this.naming.getStatusClass('move')]: Boolean(this.props.animationHeight) && this.i('element').getMove()
    }
  }

  /**
   * Checking the element for inclusion in the DOM by key.
   *
   * Проверка элемента на включение в DOM по ключу.
   * @param key element key / ключ элемента
   * @returns true if the element is included in the DOM / true если элемент включен в DOM
   */
  isInDom(key: string): boolean {
    return Boolean(this.props.inDom)
      || this.isInDomSlide(key)
      || this.i('previous').is(key)
      || this.i('status').isPreparation(key)
      || this.i('status').isActive(key)
  }

  /**
   * Checking the element for inclusion in the DOM by key in slide.
   *
   * Проверка элемента на включение в DOM по ключу в слайде.
   * @param key element key / ключ элемента
   * @returns true if the element is included in the DOM / true если элемент включен в DOM
   */
  isInDomSlide(key: string): boolean {
    return Boolean(
      this.props.inDomSlide
      && this.props.inDomSlide.indexOf(key) !== -1
    )
  }

  /**
   * Updating data based on its status.
   *
   * Обновление данных по его статусу.
   */
  protected readonly updateSelected = (): void => {
    const selected = this.props.selected

    if (
      !this.i('selected').is(selected)
    ) {
      if (this.props.direction === 'auto') {
        this.i('go').to(selected)
        return
      }

      this.i('status').set(selected)
    }
  }
}
