// md5:5308dbb4a9558a29c5505e54ecf8b5b6 true
type InputCodePropsToken = {
    validation?: boolean;
};
/** Basic properties for the InputCode component. @keywords input-code, props */
export type InputCodePropsBasic<InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic> = InputCodeItemPropsInclude<InputCodeItem> & Omit<FieldLabelPropsInclude<FieldLabel>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs' | 'required'> & Omit<FieldMessagePropsInclude<FieldMessage>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs'> & ModelProps & {
    /** Flag for successful input status. */
    success?: boolean;
    /** Flag for loading status. */
    loading?: boolean;
    /** Input code value. */
    value?: string;
    /** Code length. */
    length?: number;
};
/** InputCode component incoming properties. @keywords input-code, props */
export type InputCodeProps = InputCodePropsToken & InputCodePropsBasic;
/** Default property values for the InputCode component. @keywords input-code, defaults */
export declare const defaultsInputCode: {
    length: number;
    match: RegExp;
    inputMode: string;
};