// md5:71c49431d82b4178d37c03e775cfbd17 true
export type TextValue = string | (() => string) | undefined;
export type TextIndex = 'cancel' | 'change' | 'characterLimit' | 'characterRemaining' | 'close' | 'copiedClipboard' | 'decrement' | 'dropzone' | 'edit' | 'entriesMatch' | 'first' | 'hide' | 'increment' | 'info' | 'last' | 'loading' | 'more' | 'morePrev' | 'next' | 'notFound' | 'notifications' | 'ok' | 'page' | 'previous' | 'rowsPerPage' | 'show' | 'symbol' | string;
export type TextList = Record<TextIndex, TextValue>;
export type TextBreadcrumbPropsInclude = {
    textBreadcrumb?: TextValue;
};
export type TextCancelPropsInclude = {
    textCancel?: TextValue;
};
export type TextChangePropsInclude = {
    textChange?: TextValue;
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
export type TextDropzonePropsInclude = {
    textDropzone?: TextValue;
};
export type TextEditPropsInclude = {
    textEdit?: TextValue;
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
/** Combined interface containing all text property configurations. @keywords text, i18n, props */
export type TextAllPropsInclude = TextBreadcrumbPropsInclude & TextCancelPropsInclude & TextChangePropsInclude & TextCharacterLimitPropsInclude & TextCharacterRemainingPropsInclude & TextClosePropsInclude & TextCopiedClipboardPropsInclude & TextDecrementPropsInclude & TextDropzonePropsInclude & TextEditPropsInclude & TextEntriesMatchPropsInclude & TextFirstPropsInclude & TextHidePropsInclude & TextIncrementPropsInclude & TextInfoPropsInclude & TextLastPropsInclude & TextLoadingPropsInclude & TextMorePropsInclude & TextMorePrevPropsInclude & TextNextPropsInclude & TextNotFoundPropsInclude & TextNotificationsPropsInclude & TextOkPropsInclude & TextPagePropsInclude & TextPreviousPropsInclude & TextRowsPerPagePropsInclude & TextShowPropsInclude & TextSymbolPropsInclude;