// md5:031fe4f5b611389ce6756dc9c7773163 true
export type FieldMessagePropsToken = {};
export type FieldMessagePropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = FieldCounterPropsInclude<FieldCounter> & SkeletonPropsInclude & {
    forceShow?: boolean;
    hasHtmlCode?: boolean;
    disabled?: boolean;
    helperMessage?: string;
    validationMessage?: string;
    helperId?: string;
    validationId?: string;
};
/** Incoming properties for field message. @keywords FieldMessageProps message props */
export type FieldMessageProps = FieldMessagePropsBasic & FieldMessagePropsToken;
/** Default properties for field message. @keywords defaultsFieldMessage default values */
export declare const defaultsFieldMessage: {};