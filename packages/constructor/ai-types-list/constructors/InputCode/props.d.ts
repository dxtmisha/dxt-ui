// md5:e6e2e36a1519d038cebc7d9894b678a9 true
type InputCodePropsToken = {
    validation?: boolean;
};
/** Basic properties contract for the InputCode component. @keywords input-code, verification-code, otp, props */
export type InputCodePropsBasic<InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic> = InputCodeItemPropsInclude<InputCodeItem> & Omit<FieldLabelPropsInclude<FieldLabel>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs' | 'required'> & Omit<FieldMessagePropsInclude<FieldMessage>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs'> & ModelProps & {
    /** Successful input status flag. */
    success?: boolean;
    /** Loading status flag. */
    loading?: boolean;
    /** Input code value. */
    value?: string;
    /** Code length. */
    length?: number;
};
export type InputCodeProps = InputCodePropsToken & InputCodePropsBasic;
/** Default properties for the InputCode component. @keywords input-code, defaults, otp-config */
export declare const defaultsInputCode: {
    length: number;
    match: RegExp;
    autocomplete: string;
    inputMode: string;
};