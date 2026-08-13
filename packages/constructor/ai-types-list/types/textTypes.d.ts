// md5:f60952f2924fd834d0e43075859aa64c true
export type TextValue = string | (() => string) | undefined;
export type TextIndex = 'cancel' | 'characterLimit' | 'characterRemaining' | 'close' | 'copiedClipboard' | 'decrement' | 'entriesMatch' | 'first' | 'hide' | 'increment' | 'info' | 'last' | 'loading' | 'more' | 'morePrev' | 'next' | 'notFound' | 'notifications' | 'ok' | 'page' | 'previous' | 'rowsPerPage' | 'show' | 'symbol' | string;
export type TextList = Record<TextIndex, TextValue>;
export type TextBreadcrumbPropsInclude = {
    textBreadcrumb?: TextValue;
};
export type TextCancelPropsInclude = {
    textCancel?: TextValue;
};
export type TextCharacterLimitPropsInclude = {
    textCharacterLimit?: TextValue;
};
export type TextCharacterRemainingPropsInclude = {
    textCharacterRemaining?: TextValue;
};
export type TextClosePropsInclude = {
    textClose?: TextValue;
};
export type TextCopiedClipboardPropsInclude = {
    textCopiedClipboard?: TextValue;
};
export type TextDecrementPropsInclude = {
    textDecrement?: TextValue;
};
export type TextEntriesMatchPropsInclude = {
    textEntriesMatch?: TextValue;
};
export type TextFirstPropsInclude = {
    textFirst?: TextValue;
};
export type TextHidePropsInclude = {
    textHide?: TextValue;
};
export type TextIncrementPropsInclude = {
    textIncrement?: TextValue;
};
export type TextInfoPropsInclude = {
    textInfo?: TextValue;
};
export type TextLastPropsInclude = {
    textLast?: TextValue;
};
export type TextLoadingPropsInclude = {
    textLoading?: TextValue;
};
export type TextMorePropsInclude = {
    textMore?: TextValue;
};
export type TextMorePrevPropsInclude = {
    textMorePrev?: TextValue;
};
export type TextNextPropsInclude = {
    textNext?: TextValue;
};
export type TextNotFoundPropsInclude = {
    textNotFound?: TextValue;
};
export type TextNotificationsPropsInclude = {
    textNotifications?: TextValue;
};
export type TextOkPropsInclude = {
    textOk?: TextValue;
};
export type TextPagePropsInclude = {
    textPage?: TextValue;
};
export type TextPreviousPropsInclude = {
    textPrevious?: TextValue;
};
export type TextRowsPerPagePropsInclude = {
    textRowsPerPage?: TextValue;
};
export type TextShowPropsInclude = {
    textShow?: TextValue;
};
export type TextSymbolPropsInclude = {
    textSymbol?: TextValue;
};
export type TextAllPropsInclude = TextBreadcrumbPropsInclude & TextCancelPropsInclude & TextCharacterLimitPropsInclude & TextCharacterRemainingPropsInclude & TextClosePropsInclude & TextCopiedClipboardPropsInclude & TextDecrementPropsInclude & TextEntriesMatchPropsInclude & TextFirstPropsInclude & TextHidePropsInclude & TextIncrementPropsInclude & TextInfoPropsInclude & TextLastPropsInclude & TextLoadingPropsInclude & TextMorePropsInclude & TextMorePrevPropsInclude & TextNextPropsInclude & TextNotFoundPropsInclude & TextNotificationsPropsInclude & TextOkPropsInclude & TextPagePropsInclude & TextPreviousPropsInclude & TextRowsPerPagePropsInclude & TextShowPropsInclude & TextSymbolPropsInclude;