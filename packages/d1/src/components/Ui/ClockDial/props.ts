import { type ClockDialPropsBasic, defaultsClockDial } from '@dxtmisha/constructor/ClockDial'

export const propsValues = {
  // :values [!] System label / Системная метка
  type: ['12', '24', 'minute', 'second'],
  palette: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  readonly?: boolean
  type?: '12' | '24' | 'minute' | 'second'
  palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ClockDialProps = ClockDialPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsClockDial,
  ...{
    // :default [!] System label / Системная метка
    type: '12'
    // :default [!] System label / Системная метка
  }
}
