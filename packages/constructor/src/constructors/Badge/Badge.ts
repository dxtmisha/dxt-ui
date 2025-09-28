import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp, isFilled } from '@dxtmisha/functional'

import { LabelNumberInclude } from '../../classes/LabelNumberInclude'
import { IconInclude } from '../Icon'

import type { BadgeComponents, BadgeEmits, BadgeSlots } from './types'
import type { BadgeProps } from './props'

/**
 * The Badge class implements a badge constructor with icon support and auto-hide logic.
 *
 * Класс Badge реализует конструктор бейджа с поддержкой иконок и авто-скрытия.
 */
export class Badge {
  readonly label: LabelNumberInclude
  readonly icon: IconInclude

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
   */
  constructor(
    protected readonly props: BadgeProps,
    protected readonly refs: ToRefs<BadgeProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<BadgeComponents, BadgeProps>,
    protected readonly slots?: BadgeSlots,
    protected readonly emits?: ConstrEmit<BadgeEmits>
  ) {
    this.label = new LabelNumberInclude(
      props,
      className,
      undefined,
      slots
    )

    this.icon = new IconInclude(
      props,
      className,
      components
    )
  }

  /**
   * Computes if the badge should auto-hide when there is no dot, icon, or label.
   *
   * Вычисляет, должен ли бейдж автоматически скрываться, если нет точки, иконки и текста.
   */
  readonly autoHide = computed(
    () => !this.props.dot
      && !isFilled(this.icon.isIcon.value)
      && !isFilled(this.label.is.value)
  )

  /**
   * Classes for controlling badge visibility.
   *
   * Классы для управления видимостью бейджа.
   */
  readonly classes = computed(() => ({
    [`${this.className}--hideAuto`]: this.autoHide.value
  }))
}
