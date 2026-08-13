// md5:f470086096627ade9393eb30d96488ac true
type InputCodePropsToken = {
    validation?: boolean;
};
export type InputCodePropsBasic<InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic> = InputCodeItemPropsInclude<InputCodeItem> & Omit<FieldLabelPropsInclude<FieldLabel>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs' | 'required'> & Omit<FieldMessagePropsInclude<FieldMessage>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs'> & ModelProps & {
    success?: boolean;
    loading?: boolean;
    value?: string;
    length?: number;
};
export type InputCodeProps = InputCodePropsToken & InputCodePropsBasic;
/** Default configuration constants for InputCode @keywords defaults, inputCode */
export declare const defaultsInputCode: {
    length: number;
    match: RegExp;
    inputMode: string;
};