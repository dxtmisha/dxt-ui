import { computed, ref, type VNode } from 'vue'
import {
  type ConstrBind,
  DesignComponents,
  getRef,
  type RefOrNormal,
  toBind,
  type ConstrEmit
} from '@dxt-ui/functional'

import type { MotionTransformProps } from './props'
import type { MotionTransformEmits, MotionTransformExpose, MotionTransformSlots } from './types'
import type {
  MotionTransformComponentInclude,
  MotionTransformEmitOptions,
  MotionTransformPropsInclude
} from './basicTypes'

/**
 * The class returns data for working with the MotionTransform component
 *
 * Класс возвращает данные для работы с компонентом MotionTransform
 */
export class MotionTransformInclude<
  Props extends MotionTransformPropsInclude = MotionTransformPropsInclude,
  PropsExtra extends ConstrBind<MotionTransformProps> = ConstrBind<MotionTransformProps>
> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается при срабатывании события
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<MotionTransformComponentInclude, Props>,
    protected readonly emits?: ConstrEmit<MotionTransformEmits>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
  }

  /** Reference to MotionTransform element expose/ Ссылка на expose элемента MotionTransform */
  readonly element = ref<ConstrBind<MotionTransformExpose> | undefined>()

  /** Computed bindings for MotionTransform/ Вычисляемые привязки для MotionTransform */
  readonly binds = computed<PropsExtra>(() => {
    const props = toBind<PropsExtra>(
      getRef(this.extra) ?? {},
      this.props.motionTransformAttrs ?? {}
    )

    return {
      ...props,

      open: this.props.open,
      clickOpen: this.props.clickOpen,
      autoClose: this.props.autoClose
    }
  })

  /**
   * Expose helpers for MotionTransform state and actions/
   * Вспомогательные методы expose для состояния и действий MotionTransform
   */
  readonly expose = {
    open: computed(() => Boolean(this.element.value?.open)),
    isShow: computed(() => Boolean(this.element.value?.isShow)),
    setOpen: async (open: boolean) => this.element.value?.setOpen(open),
    toOpen: async () => this.element.value?.toOpen(),
    toClose: async () => this.element.value?.toClose(),
    toggle: async () => this.element.value?.toggle()
  }

  /**
   * Emits 'transform' event upward/
   * Поднимает событие 'transform' наверх
   * @param event native event/ нативное событие
   * @param options payload/ параметры события
   */
  readonly onTransform = (
    event: Event | undefined,
    options: MotionTransformEmitOptions
  ) => {
    this.emits?.('transform', event, options)
    this.emits?.('transformLite', options)
  }

  /**
   * Render the MotionTransform component with slots/
   * Рендер компонента MotionTransform со слотами
   * @param slotsChildren slots passed to the component/ слоты, передаваемые компоненту
   * @param attrs additional attributes/ дополнительные атрибуты
   */
  readonly render = (
    slotsChildren: MotionTransformSlots,
    attrs?: ConstrBind<MotionTransformProps>
  ): VNode[] => {
    if (this.components) {
      return this.components.render(
        'motionTransform',
        {
          onTransform: this.onTransform,
          ...toBind(
            attrs ?? {},
            this.binds.value
          ),
          ref: this.element
        },
        slotsChildren as unknown as Record<string, any>,
        this.index
      )
    }

    return []
  }
}
