// md5:b84f4b7b5f9ba2207893c9a7a2a7404a true
export type TextareaPropsToken = {};
export type TextareaPropsBasic<TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = TextareaAutosizePropsInclude<TextareaAutosize> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldTextareaProps<string>;
/** Type describing incoming properties. @keywords textarea props properties configuration */
export type TextareaProps = TextareaPropsBasic & TextareaPropsToken;
/** Default values for textarea component properties. @keywords defaults textarea configuration */
export declare const defaultsTextarea: {
    cancel: string;
    autosize: boolean;
};