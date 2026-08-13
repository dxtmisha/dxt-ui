// md5:f9e599ce22ef5271a664c0ccde12ab5a true
/** @keywords enabled, active, readonly, disabled, status */
export declare class EnabledInclude {
    /** @keywords constructor */
    constructor(props: EnabledProps, progress?: ProgressInclude | undefined);
    /** @keywords isEnabled, active, check */
    get isEnabled(): boolean;
    /** @keywords isReadonly, readonly, check */
    get isReadonly(): boolean;
    /** @keywords isDisabled, disabled, check */
    get isDisabled(): boolean;
    /** @keywords isDisabledOrUndefined, disabled, undefined */
    get isDisabledOrUndefined(): boolean | undefined;
    /** @keywords aria, attributes, disabled */
    get aria(): AriaList;
}