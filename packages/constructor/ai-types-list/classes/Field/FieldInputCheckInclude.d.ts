// md5:a3fbe298eebbb6875b0c2517b852383b true
/** Creates a hidden input and performs native validation against a pattern. @keywords field validation input check */
export declare class FieldInputCheckInclude<Value = any> {
    readonly pattern: FieldPatternItemOrFunction;
    readonly group: string;
    /** Creates a FieldInputCheckInclude instance. @keywords constructor */
    constructor(pattern: FieldPatternItemOrFunction, group?: string, code?: FieldCodeInclude | undefined);
    /** Runs validation and returns the result. @keywords check validate */
    check(value: Value): FieldValidationItem;
    /** Runs validation by input element and returns the result. @keywords check input validate */
    checkByInput(input: FieldElementDom): FieldValidationItem;
    protected getAttributes(): FieldPatternElement;
    /** Returns the default group name. @keywords group default */
    static getGroupDefault(): string;
}
export type FieldInputCheckListInclude = Record<string, FieldInputCheckInclude>;