export type TextValue = string | (() => string) | undefined

export type TextIndex = 'close'
  | 'entriesMatch'
  | 'ok'
  | string
export type TextList = Record<TextIndex, TextValue>

export interface TextClosePropsInclude {
  /** Close text/ Текст закрытия */
  textClose?: TextValue
}

export interface TextCopiedClipboardPropsInclude {
  /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
  textCopiedClipboard?: TextValue
}

export interface TextEntriesMatchPropsInclude {
  /** Text entries match/ Текст о несовпадении записей */
  textEntriesMatch?: TextValue
}

export interface TextOkPropsInclude {
  /** OK text/ Текст подтверждения */
  textOk?: TextValue
}

export interface TextAllPropsInclude extends TextClosePropsInclude,
  TextCopiedClipboardPropsInclude,
  TextEntriesMatchPropsInclude,
  TextOkPropsInclude {
}
