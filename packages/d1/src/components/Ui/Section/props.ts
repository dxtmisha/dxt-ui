import { type SectionPropsBasic, defaultsSection } from '@dxtmisha/constructor/Section'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface SectionProps extends SectionPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsSection,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
