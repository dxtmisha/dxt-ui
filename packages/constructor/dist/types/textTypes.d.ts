export type TextValue = string | (() => string) | undefined;
export type TextIndex = 'close' | 'entriesMatch' | 'ok' | string;
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
export type TextOkPropsInclude = {
    /** OK text/ Текст подтверждения */
    textOk?: TextValue;
};
export type TextAllPropsInclude = TextClosePropsInclude & TextCopiedClipboardPropsInclude & TextEntriesMatchPropsInclude & TextOkPropsInclude;
