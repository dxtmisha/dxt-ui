import { watch } from 'vue'
import {
  type DesignComponents,
  executeFunctionRef,
  getBind,
  type RefOrNormal,
  type RefOrNormalOrFunction
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import { FieldTypeInclude } from '../../classes/Field/FieldTypeInclude'
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude'

import type { ComponentIncludeProps } from '../../types/componentInclude'
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
  protected readonly name = 'mask'
  protected readonly propsAttrsName = 'maskAttrs'

  /**
   * Constructor
   * @param className class name/ название класса
   * @param props input data/ входные данные
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   * @param value object for working with values/ объект для работы со значениями
   * @param valueDefault default value/ значение по умолчанию
   * @param type object for working with the input type/ объект для работы с типом ввода
   */
  constructor(
    className: string,
    props: ComponentIncludeProps<Props>,
    components?: DesignComponents<MaskComponentInclude, Props>,
    extra?: RefOrNormal<PropsExtra>,
    index?: string,
    protected readonly value?: FieldValueInclude,
    protected readonly valueDefault: RefOrNormalOrFunction<any> = '',
    protected readonly type?: FieldTypeInclude
  ) {
    super(className, props, components, extra, index)

    if (this.value) {
      watch(
        () => this.is,
        () => {
          if (!this.is) {
            this.value?.setFull(true)
          }
        }
      )
    }
  }

  /**
   * Checks if the mask is active.
   *
   * Проверяет, активна ли маска.
   */
  override get is(): boolean {
    const props = this.getProps()
    const type = this.type?.get()

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
          ].indexOf(type) !== -1
        )
      )
  }

  /**
   * Resolves and returns design properties specifically bound for the image.
   *
   * Разрешает и возвращает свойства дизайна, привязанные именно к изображению.
   * @returns resolved image properties or undefined / разрешенные свойства изображения или undefined
   */
  protected override getExtra() {
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
  protected override toBinds() {
    const props = this.getProps()

    return {
      ...super.toBinds(),
      name: props.name,
      valueDefault: executeFunctionRef(this.valueDefault),
      currency: props.currency,
      currencyHide: props.currencyHide,
      fraction: props.fraction,
      type: this.type?.get(),
      visible: props.maskVisible,
      value: props.modelValue ?? props.value
    }
  }
}
