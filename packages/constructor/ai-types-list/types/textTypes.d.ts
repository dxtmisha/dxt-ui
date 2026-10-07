// md5:5fdb89aaa2e35121f8c8b6064e242965 true
export type TextValue = string | (() => string) | undefined;
export type TextIndex = 'am' | 'cancel' | 'change' | 'characterLimit' | 'characterRemaining' | 'close' | 'copiedClipboard' | 'decrement' | 'delete' | 'deleteConfirm' | 'dropzone' | 'edit' | 'entriesMatch' | 'error' | 'first' | 'hide' | 'increment' | 'info' | 'last' | 'loading' | 'loadingFile' | 'more' | 'morePrev' | 'next' | 'notFound' | 'notifications' | 'ok' | 'page' | 'pagination' | 'pm' | 'previous' | 'retry' | 'rowsPerPage' | 'show' | 'symbol' | 'uploadSuccess' | string;
export type TextList = Record<TextIndex, TextValue>;
export type TextAmPropsInclude = {
  textAm?: TextValue;
};
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
export type TextDeletePropsInclude = {
  textDelete?: TextValue;
};
export type TextDeleteConfirmPropsInclude = {
  textDeleteConfirm?: TextValue;
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
export type TextErrorPropsInclude = {
  textError?: TextValue;
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
export type TextLoadingFilePropsInclude = {
  textLoadingFile?: TextValue;
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
export type TextPaginationPropsInclude = {
  textPagination?: TextValue;
};
export type TextPmPropsInclude = {
  textPm?: TextValue;
};
export type TextPreviousPropsInclude = {
  textPrevious?: TextValue;
};
export type TextRetryPropsInclude = {
  textRetry?: TextValue;
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
export type TextUploadSuccessPropsInclude = {
  textUploadSuccess?: TextValue;
};
export type TextAllPropsInclude = TextAmPropsInclude & TextBreadcrumbPropsInclude & TextCancelPropsInclude & TextChangePropsInclude & TextCharacterLimitPropsInclude & TextCharacterRemainingPropsInclude & TextClosePropsInclude & TextCopiedClipboardPropsInclude & TextDecrementPropsInclude & TextDeletePropsInclude & TextDeleteConfirmPropsInclude & TextDropzonePropsInclude & TextEditPropsInclude & TextEntriesMatchPropsInclude & TextErrorPropsInclude & TextFirstPropsInclude & TextHidePropsInclude & TextIncrementPropsInclude & TextInfoPropsInclude & TextLastPropsInclude & TextLoadingPropsInclude & TextLoadingFilePropsInclude & TextMorePropsInclude & TextMorePrevPropsInclude & TextNextPropsInclude & TextNotFoundPropsInclude & TextNotificationsPropsInclude & TextOkPropsInclude & TextPagePropsInclude & TextPaginationPropsInclude & TextPmPropsInclude & TextPreviousPropsInclude & TextRetryPropsInclude & TextRowsPerPagePropsInclude & TextShowPropsInclude & TextSymbolPropsInclude & TextUploadSuccessPropsInclude;