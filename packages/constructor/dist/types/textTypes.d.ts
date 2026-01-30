export type TextValue = string | (() => string) | undefined;
export type TextIndex = 'close' | 'entriesMatch' | 'loading' | 'ok' | string;
export type TextList = Record<TextIndex, TextValue>;
export type TextClosePropsInclude = {
    /** Close text/ Текст закрытия */
    textClose?: TextValue;
};
export type TextCopiedClipboardPropsInclude = {
    /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
    textCopiedClipboard?: TextValue;
};
export type TextEntriesMatchPropsInclude = {
    /** Text entries match/ Текст о несовпадении записей */
    textEntriesMatch?: TextValue;
};
export type TextLoadingPropsInclude = {
    /** Loading text/ Текст загрузки */
    textLoading?: TextValue;
};
export type TextOkPropsInclude = {
    /** OK text/ Текст подтверждения */
    textOk?: TextValue;
};
export type TextAllPropsInclude = TextClosePropsInclude & TextCopiedClipboardPropsInclude & TextEntriesMatchPropsInclude & TextLoadingPropsInclude & TextOkPropsInclude;
