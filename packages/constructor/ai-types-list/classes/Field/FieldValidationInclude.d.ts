// md5:e75ec55951590e890cc3edfd7de2906d true
import { Ref, ComputedRef } from 'vue';

/** Manages field validation state and constraints. @keywords validation field validity error */
export declare class FieldValidationInclude {
    /** Creates a field validation instance. @keywords constructor validation */
    constructor(props: FieldAllProps, attributes: FieldAttributesInclude, value: FieldValueInclude, change?: FieldChangeInclude | undefined, code?: FieldCodeInclude | undefined, match?: FieldMatchInclude | undefined);
    /** Gets the validation error message string. @keywords message error string */
    get message(): string;
    /** Checks whether a validation error exists. @keywords isError check validity */
    isError(): boolean;
    /** Checks if constraints are satisfied. @keywords checkValidity constraints */
    readonly checkValidity: () => boolean;
    /** Exposes validation methods for external use. @keywords expose validation api */
    readonly expose: () => {
        checkValidity: () => boolean;
        getValidationMessage: () => string;
    };
    /** Sets validation data. @keywords set validation item */
    set(validation: Record<string, any> | FieldValidationItem): this;
}