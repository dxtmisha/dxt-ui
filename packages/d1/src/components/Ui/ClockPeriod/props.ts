import { type ClockPeriodPropsBasic, defaultsClockPeriod } from '@dxtmisha/constructor/ClockPeriod'

export const propsValues = {
  // :values [!] System label / Системная метка
  orientation: ['vertical', 'horizontal'],
  palette: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  readonly?: boolean
  disabled?: boolean
  orientation?: 'vertical' | 'horizontal'
  palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ClockPeriodProps = ClockPeriodPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsClockPeriod,
  ...{
    // :default [!] System label / Системная метка
    orientation: 'vertical'
    // :default [!] System label / Системная метка
  }
}
