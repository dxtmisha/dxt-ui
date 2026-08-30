// md5:975ac51cbe3826ec338d88d70ea6fcff true
type TextareaPropsToken = {};
export type TextareaPropsBasic<TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = TextareaAutosizePropsInclude<TextareaAutosize> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldTextareaProps<string>;
/** Textarea component properties. @keywords textarea, props */
export type TextareaProps = TextareaPropsBasic & TextareaPropsToken;
/** Default property values for textarea component. @keywords textarea, defaults */
export declare const defaultsTextarea: {
    cancel: string;
    autosize: boolean;
};