import { computed, mergeProps, watch } from 'vue'
import {
  type ConstrBind,
  type DesignComponents,
  type DesignName,
  executeFunctionRef,
  getBind,
  type RefOrNormalOrFunction
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { FieldTypeInclude } from '../../classes/Field/FieldTypeInclude'
import type { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import type { ComponentIncludeExtra, ComponentIncludeProps } from '../../types/componentInclude'
import type { MaskComponentInclude, MaskPropsInclude } from './basicTypes'
import type { MaskProps } from './props'

/**
 * Mask management class.
 *
 * Класс управления маской.
 */
export class MaskInclude<
  Props extends MaskPropsInclude = MaskPropsInclude,
  PropsExtra extends MaskProps = MaskProps
> extends ComponentIncludeAbstract<Props, PropsExtra> {
  protected readonly hasInitElement: boolean = false

  protected readonly name = 'mask'
  protected readonly propsAttrsName = 'maskAttrs'
  protected watchStop?: () => void

  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   * @param value function returning object for working with values / функция, возвращающая объект для работы со значениями
   * @param valueDefault default value / значение по умолчанию
   * @param type function returning object for working with the input type / функция, возвращающая объект для работы с типом ввода
   */
  constructor(
    props: ComponentIncludeProps<Props>,
    naming: DesignName,
    components?: DesignComponents<MaskComponentInclude, Props>,
    extra?: ComponentIncludeExtra<PropsExtra>,
    index?: string,
    protected readonly value?: () => FieldValueInclude,
    protected readonly valueDefault: RefOrNormalOrFunction<string | number> = '',
    protected readonly type?: () => FieldTypeInclude
  ) {
    super(props, naming, components, extra, index)
  }

  /** Reactive flag indicating whether the mask is active / Реактивный флаг, указывающий, активна ли маска */
  readonly active = computed(() => {
    const props = this.getProps()
    const type = this.type?.().get()

    return props.maskNone !== true
      && Boolean(
        props.mask
        || (
          type
          && [
            'number',
            'number-format',
            'currency',
            'datetime',
            'date',
            'year-month',
            'time',
            'hour-minute'
          ].includes(type)
        )
      )
  })

  /**
   * Checks if the mask is active.
   *
   * Проверяет, активна ли маска.
   */
  override get is(): boolean {
    return this.active.value
  }

  /**
   * Sets up reactive watchers after component mounting.
   *
   * Настраивает реактивные наблюдатели после монтирования компонента.
   */
  override readonly onMounted = (): void => {
    this.watchStop?.()
    this.watchStop = undefined

    const value = this.value
    if (value) {
      this.watchStop = watch(
        this.active,
        (active) => {
          if (!active) {
            value().setFull(true)
          }
        }
      )
    }
  }

  /**
   * Cleans up reactive watchers on component unmounting.
   *
   * Очищает реактивные наблюдатели при размонтировании компонента.
   */
  override readonly onUnmounted = (): void => {
    this.watchStop?.()
    this.watchStop = undefined
  }

  /**
   * Resolves and returns design properties specifically bound for the mask.
   *
   * Разрешает и возвращает свойства дизайна, привязанные именно к маске.
   * @returns resolved mask properties / разрешенные свойства маски
   */
  protected override getExtra(): PropsExtra {
    return getBind(
      this.getProps().mask,
      super.getExtra(),
      'mask'
    ) as PropsExtra
  }

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   */
  protected override toBinds(): Partial<ConstrBind<PropsExtra>> {
    const props = this.getProps()

    return mergeProps(
      super.toBinds(),
      {
        name: props.name,
        valueDefault: executeFunctionRef(this.valueDefault),
        currency: props.currency,
        currencyHide: props.currencyHide,
        fraction: props.fraction,
        type: this.type?.().get(),
        visible: props.maskVisible,
        value: props.modelValue ?? props.value
      }
    ) as Partial<ConstrBind<PropsExtra>>
  }
}
