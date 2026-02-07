export type TextValue = string | (() => string) | undefined

export type TextIndex = 'characterLimit'
  | 'characterRemaining'
  | 'close'
  | 'copiedClipboard'
  | 'entriesMatch'
  | 'loading'
  | 'ok'
  | string
export type TextList = Record<TextIndex, TextValue>

export type TextCharacterLimitPropsInclude = {
  /** Character limit exceeded text/ Текст о превышении лимита символов */
  textCharacterLimit?: TextValue
}

export type TextCharacterRemainingPropsInclude = {
  /** Remaining characters text/ Текст об оставшихся символах */
  textCharacterRemaining?: TextValue
}

export type TextClosePropsInclude = {
  /** Close text/ Текст закрытия */
  textClose?: TextValue
}

export type TextCopiedClipboardPropsInclude = {
  /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
  textCopiedClipboard?: TextValue
}

export type TextEntriesMatchPropsInclude = {
  /** Text entries match/ Текст о несовпадении записей */
  textEntriesMatch?: TextValue
}

export type TextLoadingPropsInclude = {
  /** Loading text/ Текст загрузки */
  textLoading?: TextValue
}

export type TextOkPropsInclude = {
  /** OK text/ Текст подтверждения */
  textOk?: TextValue
}

export type TextAllPropsInclude = TextCharacterLimitPropsInclude
  & TextCharacterRemainingPropsInclude
  & TextClosePropsInclude
  & TextCopiedClipboardPropsInclude
  & TextEntriesMatchPropsInclude
  & TextLoadingPropsInclude
  & TextOkPropsInclude
