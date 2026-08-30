// md5:a5adf316bccc60daf1d73f5a475deeae true
import type { ConstrBind } from '@dxtmisha/functional';

/** Configuration interface specifying components required for FieldCounter. @keywords field-counter component include */
export type FieldCounterComponentInclude = {
    /** FieldCounter component configuration. */
    fieldCounter?: object;
};

/** Properties for FieldCounter integration. @keywords field-counter props include */
export interface FieldCounterPropsInclude<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> {
    /** Counter value. */
    counter?: FieldCounterPropsBasic['counter'];
    /** Whether to show the counter. */
    counterShow?: boolean;
    /** Template for the counter display. */
    counterTemplate?: FieldCounterPropsBasic['template'];
    /** Unique identifier for the counter. */
    counterId?: string;
    /** Maximum allowed character length. */
    maxlength?: FieldCounterPropsBasic['maxlength'];
    /** Additional attributes for the FieldCounter component. */
    fieldCounterAttrs?: ConstrBind<FieldCounter>;
}