import { computed, ref, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComponents,
  getRef,
  type RefOrNormal,
  toBinds
} from '@dxtmisha/functional'

import type {
  MotionAxisComponentInclude,
  MotionAxisEmitOptions,
  MotionAxisEmitsInclude,
  MotionAxisPropsInclude,
  MotionAxisSelectedValue
} from './basicTypes'
import type { MotionAxisExpose, MotionAxisSlots } from './types'
import type { MotionAxisProps } from './props'

/**
 * The class returns data for working with the MotionAxis component
 *
 * Класс возвращает данные для работы с компонентом MotionAxis
 */
export class MotionAxisInclude<
  Props extends MotionAxisPropsInclude = MotionAxisPropsInclude,
  PropsExtra extends ConstrBind<MotionAxisProps> = ConstrBind<MotionAxisProps>
> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param selected selected element/ выбранный элемент
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<MotionAxisComponentInclude, Props>,
    protected readonly emits?: ConstrEmit<MotionAxisEmitsInclude>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly selected?: RefOrNormal<MotionAxisSelectedValue>,
    protected readonly index?: string
  ) {
  }

  /** Reference to motionAxis element expose/ Ссылка на expose элемента motionAxis */
  readonly element = ref<ConstrBind<MotionAxisExpose> | undefined>()

  /** Computed selected element/ Вычисляемый выбранный элемент */
  readonly selectedItem = computed(() => {
    if (this.selected) {
      return getRef(this.selected)
    }

    return this.props.selected
  })

  /** Computed bindings for the motionAxis/ Вычисляемые привязки для motionAxis */
  readonly binds = computed<PropsExtra>(() => {
    return toBinds<PropsExtra>(
      getRef(this.extra),
      {
        class: `${this.className}__motionAxis`
      },
      this.props.motionAxisAttrs
    )
  })

  /**
   * Render the MotionAxis component with slots/
   * Рендер компонента MotionAxis со слотами
   * @param slotsChildren slots passed to the motionAxis/ слоты, передаваемые motionAxis
   * @param attrs additional attributes/ дополнительные атрибуты
   */
  readonly render = (
    slotsChildren?: MotionAxisSlots,
    attrs?: Record<string, any>
  ): VNode[] => {
    if (this.components) {
      return this.components.render(
        'motionAxis',
        {
          ...toBinds(
            attrs,
            this.binds.value,
            { selected: this.selectedItem.value }
          ),
          ref: this.element,
          onMotionAxis: this.onMotionAxis
        },
        slotsChildren as unknown as Record<string, any>,
        this.index
      )
    }

    return []
  }

  /**
   * Emits 'motionAxis' event upward/
   * Поднимает событие 'motionAxis' наверх
   * @param options event payload/ параметры события
   */
  protected readonly onMotionAxis = (options: MotionAxisEmitOptions) => {
    this.emits?.('motionAxis', options)
  }
}
