// md5:06da3535e1721f03fcf2339d84967534 true
/** Input arrow controller class. @keywords field, arrow, step */
export declare class FieldArrowInclude {
    /** Creates FieldArrowInclude instance. */
    constructor(props: FieldAllProps, value: FieldValueInclude, type?: FieldTypeInclude | undefined);
    /** Checks if arrows are active. */
    get is(): boolean;
    /** Checks if previous action is disabled. */
    get disabledPrevious(): boolean;
    /** Checks if next action is disabled. */
    get disabledNext(): boolean;
    /** Checks if arrow mode is carousel. */
    isCarousel(): boolean;
    /** Checks if arrow mode is stepper. */
    isStepper(): boolean;
    /** Checks if previous step is available. */
    isPrevious(value: number): boolean;
    /** Checks if next step is available. */
    isNext(value: number): boolean;
    /** Gets current arrow mode. */
    get(): FieldArrowProps['arrow'] | undefined;
    /** Gets arrow alignment. */
    align(): string | undefined;
    /** Decrements input value. */
    previous(): this;
    /** Increments input value. */
    next(): this;
    /** Sets value to minimum. */
    toMin(): this;
    /** Sets value to maximum. */
    toMax(): this;
    /** Gets step increment value. */
    protected get step(): number;
    /** Gets minimum boundary. */
    protected get min(): number | undefined;
    /** Gets maximum boundary. */
    protected get max(): number | undefined;
}