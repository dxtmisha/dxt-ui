import { type FieldPropsBasic, defaultsField } from '@dxt-ui/constructor/Field'

export const propsValues = {
  // :values [!] System label / Системная метка
  cancel: ['auto', 'always'],
  align: ['center', 'right', 'left'],
  width: []
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  readonly?: boolean
  block?: boolean
  isValue?: boolean
  basic?: boolean
  boxed?: boolean
  tonal?: boolean
  filled?: boolean
  outlined?: boolean
  classic?: boolean
  arrowCarousel?: boolean
  arrowStepper?: boolean
  cancel?: 'auto' | 'always'
  align?: 'center' | 'right' | 'left'
  width?: string | 'custom'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface FieldProps extends FieldPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsField,
  iconArrowLeft: 'keyboard_arrow_left',
  iconArrowRight: 'keyboard_arrow_right',
  iconPlus: 'add',
  iconMinus: 'remove',
  iconClose: 'close_small',
  ...{
    // :default [!] System label / Системная метка
    classic: true,
    cancel: 'auto',
    align: 'center'
    // :default [!] System label / Системная метка
  }
}
