interface TextareaAutosizePropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface TextareaAutosizePropsBasic {
  // Value
  value?: string

  // Style
  autosize?: boolean
  inputAttrs?: Record<string, any>
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface TextareaAutosizeProps extends TextareaAutosizePropsBasic, TextareaAutosizePropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTextareaAutosize = {
  autosize: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
