export type TextValue = string | (() => string) | undefined;
export type TextIndex = 'cancel' | 'characterLimit' | 'characterRemaining' | 'close' | 'copiedClipboard' | 'decrement' | 'entriesMatch' | 'hide' | 'increment' | 'loading' | 'next' | 'ok' | 'previous' | 'show' | string;
export type TextList = Record<TextIndex, TextValue>;
export type TextCancelPropsInclude = {
    /** Cancel text/ Текст отмены */
    textCancel?: TextValue;
};
export type TextCharacterLimitPropsInclude = {
    /** Character limit exceeded text/ Текст о превышении лимита символов */
    textCharacterLimit?: TextValue;
};
export type TextCharacterRemainingPropsInclude = {
    /** Remaining characters text/ Текст об оставшихся символах */
    textCharacterRemaining?: TextValue;
};
export type TextClosePropsInclude = {
    /** Close text/ Текст закрытия */
    textClose?: TextValue;
};
export type TextCopiedClipboardPropsInclude = {
    /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
    textCopiedClipboard?: TextValue;
};
export type TextDecrementPropsInclude = {
    /** Text for decreasing value/ Текст для уменьшения значения */
    textDecrement?: TextValue;
};
export type TextEntriesMatchPropsInclude = {
    /** Text entries match/ Текст о несовпадении записей */
    textEntriesMatch?: TextValue;
};
export type TextHidePropsInclude = {
    /** Hide text/ Текст скрытия */
    textHide?: TextValue;
};
export type TextIncrementPropsInclude = {
    /** Text for increasing value/ Текст для увеличения значения */
    textIncrement?: TextValue;
};
export type TextLoadingPropsInclude = {
    /** Loading text/ Текст загрузки */
    textLoading?: TextValue;
};
export type TextNextPropsInclude = {
    /** Next text/ Текст следующего */
    textNext?: TextValue;
};
export type TextOkPropsInclude = {
    /** OK text/ Текст подтверждения */
    textOk?: TextValue;
};
export type TextPreviousPropsInclude = {
    /** Previous text/ Текст предыдущего */
    textPrevious?: TextValue;
};
export type TextShowPropsInclude = {
    /** Show text/ Текст показа */
    textShow?: TextValue;
};
export type TextAllPropsInclude = TextCancelPropsInclude & TextCharacterLimitPropsInclude & TextCharacterRemainingPropsInclude & TextClosePropsInclude & TextCopiedClipboardPropsInclude & TextDecrementPropsInclude & TextEntriesMatchPropsInclude & TextHidePropsInclude & TextIncrementPropsInclude & TextLoadingPropsInclude & TextNextPropsInclude & TextOkPropsInclude & TextPreviousPropsInclude & TextShowPropsInclude;
