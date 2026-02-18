import { computed, onMounted, type Ref, type ToRefs, watch } from 'vue'
import { type ConstrClassObject, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

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

/**
 * MotionAxis
 */
export class MotionAxis {
  readonly elementItem: MotionAxisElement
  readonly go: MotionAxisGo
  readonly previous: MotionAxisPrevious
  readonly selected: MotionAxisSelected
  readonly slides: MotionAxisSlides
  readonly status: MotionAxisStatus
  readonly styles: MotionAxisStyles

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
   * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
   * @param constructors.MotionAxisElementConstructor class for working with elements/ класс для работы с элементами
   * @param constructors.MotionAxisGoConstructor class for working with go/ класс для работы с переходом
   * @param constructors.MotionAxisPreviousConstructor class for working with previous/ класс для работы с предыдущим
   * @param constructors.MotionAxisSelectedConstructor class for working with selected/ класс для работы с выбранным
   * @param constructors.MotionAxisSlidesConstructor class for working with slides/ класс для работы со слайдами
   * @param constructors.MotionAxisStatusConstructor class for working with status/ класс для работы со статусом
   * @param constructors.MotionAxisStylesConstructor class for working with styles/ класс для работы со стилями
   */
  constructor(
    protected readonly props: MotionAxisProps,
    protected readonly refs: ToRefs<MotionAxisProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<MotionAxisComponents, MotionAxisProps>,
    protected readonly slots?: MotionAxisSlots,
    protected readonly emits?: ConstrEmit<MotionAxisEmits>,
    constructors?: {
      ModelIncludeConstructor?: typeof ModelInclude
      MotionAxisElementConstructor?: typeof MotionAxisElement
      MotionAxisGoConstructor?: typeof MotionAxisGo
      MotionAxisPreviousConstructor?: typeof MotionAxisPrevious
      MotionAxisSelectedConstructor?: typeof MotionAxisSelected
      MotionAxisSlidesConstructor?: typeof MotionAxisSlides
      MotionAxisStatusConstructor?: typeof MotionAxisStatus
      MotionAxisStylesConstructor?: typeof MotionAxisStyles
    }
  ) {
    const {
      ModelIncludeConstructor = ModelInclude,
      MotionAxisElementConstructor = MotionAxisElement,
      MotionAxisGoConstructor = MotionAxisGo,
      MotionAxisPreviousConstructor = MotionAxisPrevious,
      MotionAxisSelectedConstructor = MotionAxisSelected,
      MotionAxisSlidesConstructor = MotionAxisSlides,
      MotionAxisStatusConstructor = MotionAxisStatus,
      MotionAxisStylesConstructor = MotionAxisStyles
    } = constructors ?? {}

    this.selected = new MotionAxisSelectedConstructor(this.props)

    this.elementItem = new MotionAxisElementConstructor(
      this.element,
      this.className
    )

    this.styles = new MotionAxisStylesConstructor(
      this.element,
      this.className,
      this.selected
    )

    this.previous = new MotionAxisPreviousConstructor(this.styles)
    this.status = new MotionAxisStatusConstructor(
      this.props,
      this.elementItem,
      this.selected,
      this.previous,
      this.styles,
      this.emits
    )

    this.slides = new MotionAxisSlidesConstructor(this.status)
    this.go = new MotionAxisGoConstructor(
      this.props,
      this.refs,
      this.element,
      this.slides,
      this.status
    )

    new ModelIncludeConstructor(
      'selected',
      this.emits,
      this.selected.item
    )

    onMounted(() => {
      watch(
        [refs.selected],
        this.updateSelected,
        { immediate: true }
      )
    })
  }

  /**
   * Returns a list of available values for the style/
   * Возвращает список доступных значений для стиля
   */
  readonly classes = computed<ConstrClassObject>(() => {
    return {
      [`${this.className}--axis--${this.go.axis.value}`]: true,
      [`${this.className}--direction--${this.go.direction.value}`]: true,
      [`${this.className}--start`]: this.elementItem.getStart() && Boolean(this.props.animationHeight),
      [`${this.className}--move`]: this.elementItem.getMove() && Boolean(this.props.animationHeight)
    }
  })

  isInDom(key: string): boolean {
    return this.props.inDom
      || this.isInDomSlide(key)
      || this.previous.is(key)
      || this.status.isPreparation(key)
      || this.status.isActive(key)
  }

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
      !this.selected.is(selected)
    ) {
      if (this.props.direction === 'auto') {
        this.go.to(selected)
        return
      }

      this.status.set(selected)
    }
  }
}
