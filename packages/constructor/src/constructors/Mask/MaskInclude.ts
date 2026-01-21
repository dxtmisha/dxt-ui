import { computed, type VNode, watch } from 'vue'
import { type ConstrBind, type DesignComponents, getBind, getRef, type RefOrNormal, toBind } from '@dxtmisha/functional'

import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'
import { FieldTypeInclude } from '../../classes/Field/FieldTypeInclude'

import type { FieldValueProps } from '../../types/fieldTypes'
import type { MaskComponentInclude, MaskPropsInclude } from './basicTypes'
import type { MaskProps } from './props'

type MaskPropsFullInclude = MaskPropsInclude & FieldValueProps

/**
 * Mask management class.
 *
 * Класс управления маской.
 */
export class MaskInclude<
  Props extends MaskPropsFullInclude = MaskPropsFullInclude,
  PropsExtra extends ConstrBind<MaskProps> = ConstrBind<MaskProps>
> {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param className class name/ название класса
   * @param value object for working with values/ объект для работы со значениями
   * @param valueDefault default value/ значение по умолчанию
   * @param components object for working with components/ объект для работы с компонентами
   * @param type object for working with the input type/ объект для работы с типом ввода
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Props,
    protected readonly className: string,
    protected readonly value: FieldValueInclude,
    protected readonly valueDefault?: RefOrNormal<any>,
    protected readonly components?: DesignComponents<MaskComponentInclude, Props>,
    protected readonly type?: FieldTypeInclude,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
    if (this.value) {
      watch(this.is, (is: boolean) => {
        if (!is) {
          this.value.setFull(true)
        }
      })
    }
  }

  /**
   * Checks if the mask is active.
   *
   * Проверяет, активна ли маска.
   */
  readonly is = computed<boolean>(() => {
    const type = this.type?.get()

    return this.props.maskNone !== true
      && Boolean(
        this.props.mask
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
          ].indexOf(type) !== -1
        )
      )
  })

  /**
   * Returns the basic properties for working with a mask.
   *
   * Возвращает базовые свойства для работы с маской.
   */
  readonly bindsStatic = computed<PropsExtra>(() => {
    const props = toBind<PropsExtra>(
      getRef(this.extra) ?? {},
      this.props.maskAttrs ?? {}
    )

    return {
      name: this.props.name,
      valueDefault: getRef(this.valueDefault),
      currency: this.props.currency,
      currencyHide: this.props.currencyHide,
      fraction: this.props.fraction,
      type: this.type?.get(),
      visible: this.props.maskVisible,

      ...getBind(this.props.mask, props, 'mask') as PropsExtra
    }
  })

  /**
   * Returns all properties for working with the mask.
   *
   * Возвращает все свойства для работы с маской.
   */
  readonly binds = computed<ConstrBind<MaskProps>>(() => {
    return {
      ...this.bindsStatic.value,
      value: (this.props.modelValue ?? this.props.value) as string
    }
  })

  /**
   * Returns the rendered mask component.
   *
   * Возвращает отрендеренный компонент маски.
   * @param attrs additional attributes/ дополнительные атрибуты
   */
  readonly render = (attrs?: Record<string, any>): VNode[] => {
    if (this.components) {
      return this.components.render(
        'mask',
        {
          ...toBind(
            attrs ?? {},
            this.binds.value
          )
        },
        undefined,
        this.index
      )
    }

    return []
  }

  /**
   * Checks if the mask is active.
   *
   * Проверяет, активна ли маска.
   */
  isActive() {
    return this.is.value
  }
}
