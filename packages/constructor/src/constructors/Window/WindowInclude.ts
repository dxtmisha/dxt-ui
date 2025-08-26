import { computed, ref, type VNode } from 'vue'
import {
  type ConstrBind, type ConstrEmit,
  DesignComponents,
  getRef,
  type RefOrNormal,
  toBind
} from '@dxt-ui/functional'

import type { WindowProps } from './props'
import type { WindowExpose, WindowSlots } from './types'
import type {
  WindowComponentInclude,
  WindowEmitOptions,
  WindowEmitsInclude, WindowExposeInclude,
  WindowPropsInclude
} from './basicTypes'

/**
 * The class returns data for working with the Window component
 *
 * Класс возвращает данные для работы с компонентом Window
 */
export class WindowInclude<
  Props extends WindowPropsInclude = WindowPropsInclude,
  PropsExtra extends ConstrBind<WindowProps> = ConstrBind<WindowProps>
> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<WindowComponentInclude, Props>,
    protected readonly emits?: ConstrEmit<WindowEmitsInclude>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
  }

  /** Reference to window element expose/ Ссылка на expose элемента окна */
  readonly element = ref<ConstrBind<WindowExpose> | undefined>()

  /** Computed bindings for the window/ Вычисляемые привязки для окна */
  readonly binds = computed<PropsExtra>(() => {
    const props = toBind<PropsExtra>(
      getRef(this.extra) ?? {},
      this.props.windowAttrs ?? {}
    )

    return {
      ...props,

      disabled: this.props.disabled,
      autoClose: this.props.autoClose,

      preparation: this.getPreparation,
      opening: this.getOpening,
      closing: this.getClosing
    }
  })

  /**
   * Expose helpers for window state and actions/
   * Вспомогательные методы expose для состояния и действий окна
   */
  readonly expose: WindowExposeInclude = {
    id: computed(() => String(this.element.value?.id)),
    open: computed(() => Boolean(this.element.value?.open)),
    control: computed(() => this.element.value?.control),
    setOpen: async (open: boolean) => this.element.value?.setOpen(open),
    toOpen: async () => this.element.value?.toOpen(),
    toClose: async () => this.element.value?.toClose(),
    toggle: async () => this.element.value?.toggle(),

    windowElement: this.element
  }

  /**
   * Render the Window component with slots/
   * Рендер компонента Window со слотами
   * @param slotsChildren slots passed to the window/ слоты, передаваемые окну
   * @param attrs additional attributes/ дополнительные атрибуты
   */
  readonly render = (
    slotsChildren: WindowSlots,
    attrs?: Record<string, any>
  ): VNode[] => {
    if (this.components) {
      return this.components.render(
        'window',
        {
          onWindow: this.onWindow,
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

  /** Returns preparation result/ Возвращает результат preparation */
  protected readonly getPreparation = () =>
    getRef(this.extra)?.preparation?.() ?? this.props.windowAttrs?.preparation?.()

  /** Returns opening result/ Возвращает результат opening */
  protected readonly getOpening = () =>
    getRef(this.extra)?.opening?.() ?? this.props.windowAttrs?.opening?.() ?? true

  /** Returns closing result/ Возвращает результат closing */
  protected readonly getClosing = () =>
    getRef(this.extra)?.closing?.() ?? this.props.windowAttrs?.closing?.() ?? true

  /**
   * Emits 'window' event upward/
   * Поднимает событие 'window' наверх
   * @param options event payload/ параметры события
   */
  protected readonly onWindow = (options: WindowEmitOptions) => {
    this.emits?.('window', options)
  }
}
