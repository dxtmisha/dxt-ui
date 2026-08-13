// md5:854d21cb86220d5b62c10595dc83c0b7 true
import { ConstrBind } from '@dxtmisha/functional';
export type FieldMessageSlot = {
    message?: string;
    helperMessage?: string;
    validationMessage?: string;
};
export type FieldMessageComponentInclude = {
    fieldMessage?: object;
};
export interface FieldMessagePropsInclude<FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> extends FieldCounterPropsInclude<FieldCounter> {
    forceShowMessage?: boolean;
    hasHtmlCode?: boolean;
    disabled?: boolean;
    helperMessage?: string;
    validationMessage?: string;
    fieldMessageAttrs?: ConstrBind<FieldMessage>;
    helperId?: string;
    validationId?: string;
}