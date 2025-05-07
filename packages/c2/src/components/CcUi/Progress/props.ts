import { type ProgressPropsBasic, defaultsProgress } from '@dxt-ui/constructor/Progress'

export const propsValues = {
  // :values [!] System label / Системная метка
  indeterminate: ['type2', 'type1', 'type3'],
  position: ['top', 'bottom', 'static'],
  palette: ['carmine', 'iris', 'redfish', 'goldenrod', 'asparagus', 'slate', 'gray', 'alpha', 'pistachio', 'mint', 'jade', 'teal', 'celestial', 'indigo', 'orchid', 'cerise', 'informative', 'positive', 'negative', 'neutral', 'warning']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  point?: boolean
  linear?: boolean
  circular?: boolean
  indeterminate?: 'type2' | 'type1' | 'type3'
  position?: 'top' | 'bottom' | 'static'
  dense?: boolean
  inverse?: boolean
  palette?: 'carmine' | 'iris' | 'redfish' | 'goldenrod' | 'asparagus' | 'slate' | 'gray' | 'alpha' | 'pistachio' | 'mint' | 'jade' | 'teal' | 'celestial' | 'indigo' | 'orchid' | 'cerise' | 'informative' | 'positive' | 'negative' | 'neutral' | 'warning'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface ProgressProps extends ProgressPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsProgress,
  ...{
    // :default [!] System label / Системная метка
    point: true,
    linear: true,
    indeterminate: 'type3',
    position: 'top'
    // :default [!] System label / Системная метка
  }
}
