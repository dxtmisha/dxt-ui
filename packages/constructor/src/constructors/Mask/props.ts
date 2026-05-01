import type { FieldPatternItemOrFunction } from '../../types/fieldTypes'
import type {
  MaskFractionItem,
  MaskList,
  MaskMatchItem,
  MaskSpecialProp,
  MaskTypeItem
} from './basicTypes'

export type MaskPropsToken = {
  // :type [!] System label / Системная метка
  visible?: boolean
  visiblePartly?: boolean
  align?: string | 'center' | 'left' | 'right'
  dir?: string | 'ltr' | 'rtl'
  // :type [!] System label / Системная метка
}

export type MaskPropsBasic = {
  /** Value/ Значения */
  /** Field name/ Имя поля */
  name?: string
  /** Current value/ Текущее значение */
  value?: string | number
  /** Default value/ Значение по умолчанию */
  valueDefault?: string | number
  /** Currency code/ Код валюты */
  currency?: string
  /** Whether to hide the currency symbol/ Скрыт ли символ валюты */
  currencyHide?: boolean
  /** Whether only full values are allowed/ Разрешены ли только полные значения */
  fullOnly?: boolean

  /** Mask string or list of masks/ Строка маски или список масок */
  mask?: MaskList
  /** Special mask properties/ Специальные свойства маски */
  special?: MaskSpecialProp
  /** Matching rules/ Правила соответствия */
  match?: MaskMatchItem
  /** Whether to save the group/ Сохранять ли группу */
  groupSave?: boolean

  /** Pattern for validation/ Шаблон для валидации */
  pattern?: FieldPatternItemOrFunction
  /** Function for additional checking/ Функция для дополнительной проверки */
  check?: FieldPatternItemOrFunction
  /** Fraction part settings/ Настройки дробной части */
  fraction?: MaskFractionItem

  /** Style/ Стили */
  /** Mask type/ Тип маски */
  type?: MaskTypeItem
  /** Representation view/ Вид представления */
  view?: string

  /** Additional attributes for the input element/ Дополнительные атрибуты для элемента ввода */
  inputAttrs?: Partial<HTMLInputElement>

  /** Representation language/ Язык представления */
  language?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MaskProps = MaskPropsBasic & MaskPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsMask = {
  special: '*',
  match: /[0-9]/,
  type: 'text',
  groupSave: true,
  view: '_',
  ...{
    // :default [!] System label / Системная метка
    visible: true
    // :default [!] System label / Системная метка
  }
}
