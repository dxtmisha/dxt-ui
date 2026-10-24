// md5:f491ca4125006e357efb8399a8916d8d true
/** BEM naming helper for design components and CSS custom properties. @keywords bem, class name, css variable, design */
export declare class DesignName {
    /** Initializes the design component naming helper. @keywords constructor, init */
    constructor(name: string);
    /** Returns the normalized design name prefix. @keywords design, prefix */
    getDesign(): string;
    /** Returns the base BEM component class name. @keywords component, class name */
    getName(): string;
    /** Generates a modifier or status class name. @keywords status class, modifier */
    getStatusClass(...names: (string | number | undefined)[]): string;
    /** Generates a CSS custom property name. @keywords css variable, custom property, style */
    getStyle(...names: (string | number | undefined)[]): string;
    /** Generates a BEM sub-element class name. @keywords sub-element, element class, bem */
    getSubClass(...names: (string | number | undefined)[]): string;
}