// md5:bb91f4df7a2c15687b2439d17332943f true
/** BEM naming helper for design components. @keywords bem, classnames, design system, naming */
export declare class DesignName {
    /** Initializes DesignName by parsing design and component segments. @keywords constructor, init, bem */
    constructor(name: string);
    /** Returns the normalized design segment name. @keywords design, prefix, segment */
    getDesign(): string;
    /** Returns the normalized component class name. @keywords component, class, bem block */
    getName(): string;
    /** Generates a BEM modifier class using `--` suffix. @keywords modifier, status, bem, css class */
    getStatusClass(...names: (string | number | undefined)[]): string;
    /** Constructs a CSS custom property name prefixed with `--` and `-sys-`. @keywords css var, custom property, style token */
    getStyle(...names: (string | number | undefined)[]): string;
    /** Generates a BEM element class using `__` suffix. @keywords element, subclass, bem, css class */
    getSubClass(...names: (string | number | undefined)[]): string;
}