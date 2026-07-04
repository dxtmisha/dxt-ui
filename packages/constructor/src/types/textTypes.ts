/** Type for text value/ Тип для текстового значения */
export type TextValue = string | (() => string) | undefined

/** List of available text indexes/ Список доступных индексов текста */
export type TextIndex = 'cancel'
  | 'characterLimit'
  | 'characterRemaining'
  | 'close'
  | 'copiedClipboard'
  | 'decrement'
  | 'entriesMatch'
  | 'first'
  | 'hide'
  | 'increment'
  | 'info'
  | 'last'
  | 'loading'
  | 'more'
  | 'morePrev'
  | 'next'
  | 'notFound'
  | 'notifications'
  | 'ok'
  | 'page'
  | 'previous'
  | 'rowsPerPage'
  | 'show'
  | 'symbol'
  | string

/** List of text values/ Список текстовых значений */
export type TextList = Record<TextIndex, TextValue>

/** Interface for including breadcrumb text/ Интерфейс для включения текста хлебных крошек */
export type TextBreadcrumbPropsInclude = {
  /** Breadcrumb navigation text/ Текст навигации хлебных крошек */
  textBreadcrumb?: TextValue
}

/** Interface for including cancel text/ Интерфейс для включения текста отмены */
export type TextCancelPropsInclude = {
  /** Cancel text/ Текст отмены */
  textCancel?: TextValue
}

/** Interface for including character limit text/ Интерфейс для включения текста лимита символов */
export type TextCharacterLimitPropsInclude = {
  /** Character limit exceeded text/ Текст о превышении лимита символов */
  textCharacterLimit?: TextValue
}

/** Interface for including character remaining text/ Интерфейс для включения текста оставшихся символов */
export type TextCharacterRemainingPropsInclude = {
  /** Remaining characters text/ Текст об оставшихся символах */
  textCharacterRemaining?: TextValue
}

/** Interface for including close text/ Интерфейс для включения текста закрытия */
export type TextClosePropsInclude = {
  /** Close text/ Текст закрытия */
  textClose?: TextValue
}

/** Interface for including copied to clipboard text/ Интерфейс для включения текста копирования в буфер */
export type TextCopiedClipboardPropsInclude = {
  /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
  textCopiedClipboard?: TextValue
}

/** Interface for including decrement text/ Интерфейс для включения текста уменьшения */
export type TextDecrementPropsInclude = {
  /** Text for decreasing value/ Текст для уменьшения значения */
  textDecrement?: TextValue
}

/** Interface for including entries match text/ Интерфейс для включения текста совпадения записей */
export type TextEntriesMatchPropsInclude = {
  /** Text entries match/ Текст о несовпадении записей */
  textEntriesMatch?: TextValue
}

/** Interface for including first text/ Интерфейс для включения текста первой страницы */
export type TextFirstPropsInclude = {
  /** First text/ Текст первой страницы */
  textFirst?: TextValue
}

/** Interface for including hide text/ Интерфейс для включения текста скрытия */
export type TextHidePropsInclude = {
  /** Hide text/ Текст скрытия */
  textHide?: TextValue
}

/** Interface for including increment text/ Интерфейс для включения текста увеличения */
export type TextIncrementPropsInclude = {
  /** Text for increasing value/ Текст для увеличения значения */
  textIncrement?: TextValue
}

/** Interface for including info text/ Интерфейс для включения текста информации о диапазоне */
export type TextInfoPropsInclude = {
  /** Info text/ Текст информации о диапазоне */
  textInfo?: TextValue
}

/** Interface for including last text/ Интерфейс для включения текста последней страницы */
export type TextLastPropsInclude = {
  /** Last text/ Текст последней страницы */
  textLast?: TextValue
}

/** Interface for including loading text/ Интерфейс для включения текста загрузки */
export type TextLoadingPropsInclude = {
  /** Loading text/ Текст загрузки */
  textLoading?: TextValue
}

/** Interface for including more text/ Интерфейс для включения текста "показать еще" */
export type TextMorePropsInclude = {
  /** More text/ Текст "показать еще" */
  textMore?: TextValue
}

/** Interface for including more previous text/ Интерфейс для включения текста "показать предыдущие" */
export type TextMorePrevPropsInclude = {
  /** More previous text/ Текст "показать предыдущие" */
  textMorePrev?: TextValue
}

/** Interface for including next text/ Интерфейс для включения текста следующего */
export type TextNextPropsInclude = {
  /** Next text/ Текст следующего */
  textNext?: TextValue
}

/** Interface for including not found text/ Интерфейс для включения текста «ничего не найдено» */
export type TextNotFoundPropsInclude = {
  /** Nothing found text/ Текст о том, что ничего не найдено */
  textNotFound?: TextValue
}

/** Interface for including notifications text/ Интерфейс для включения текста уведомлений */
export type TextNotificationsPropsInclude = {
  /** Notifications text/ Текст уведомлений */
  textNotifications?: TextValue
}

/** Interface for including OK text/ Интерфейс для включения текста подтверждения */
export type TextOkPropsInclude = {
  /** OK text/ Текст подтверждения */
  textOk?: TextValue
}

/** Interface for including page text/ Интерфейс для включения текста страницы */
export type TextPagePropsInclude = {
  /** Page text/ Текст страницы */
  textPage?: TextValue
}

/** Interface for including previous text/ Интерфейс для включения текста предыдущего */
export type TextPreviousPropsInclude = {
  /** Previous text/ Текст предыдущего */
  textPrevious?: TextValue
}

/** Interface for including rows per page text/ Интерфейс для включения текста "строк на странице" */
export type TextRowsPerPagePropsInclude = {
  /** Rows per page text/ Текст "строк на странице" */
  textRowsPerPage?: TextValue
}

/** Interface for including show text/ Интерфейс для включения текста показа */
export type TextShowPropsInclude = {
  /** Show text/ Текст показа */
  textShow?: TextValue
}

/** Interface for including symbol text/ Интерфейс для включения текста символа */
export type TextSymbolPropsInclude = {
  /** Symbol text/ Текст символа */
  textSymbol?: TextValue
}

/** Type for including all text properties/ Тип для включения всех текстовых свойств */
export type TextAllPropsInclude = TextBreadcrumbPropsInclude
  & TextCancelPropsInclude
  & TextCharacterLimitPropsInclude
  & TextCharacterRemainingPropsInclude
  & TextClosePropsInclude
  & TextCopiedClipboardPropsInclude
  & TextDecrementPropsInclude
  & TextEntriesMatchPropsInclude
  & TextFirstPropsInclude
  & TextHidePropsInclude
  & TextIncrementPropsInclude
  & TextInfoPropsInclude
  & TextLastPropsInclude
  & TextLoadingPropsInclude
  & TextMorePropsInclude
  & TextMorePrevPropsInclude
  & TextNextPropsInclude
  & TextNotFoundPropsInclude
  & TextNotificationsPropsInclude
  & TextOkPropsInclude
  & TextPagePropsInclude
  & TextPreviousPropsInclude
  & TextRowsPerPagePropsInclude
  & TextShowPropsInclude
  & TextSymbolPropsInclude
