// md5:a516feef224343d259d02da209a815b5 true
/** Base abstract class for design component functional parts, BEM conventions, and CSS custom properties. @keywords design constructor bem css */
export declare abstract class DesignConstructorBasicAbstract<COMP extends ConstrComponent = ConstrComponent, EMITS extends ConstrItem = ConstrItem, EXPOSE extends ConstrItem = ConstrItem, SLOTS extends ConstrItem = ConstrItem, CLASSES extends ConstrClasses = ConstrClasses, P extends ConstrItem = ConstrItem> {
    /** Gets the component class name. @keywords name class bem */
    getName(): string;
    /** Gets the design system name. @keywords design theme */
    getDesign(): string;
    /** Generates a BEM sub-element class name. @keywords sub-class element bem */
    getSubClass(name: string | string[]): string;
    /** Generates a status modifier class name. @keywords status modifier class */
    getStatusClass(name: string | string[]): string;
    /** Generates a CSS custom property style name. @keywords style css variable property */
    getStyle(name: string | string[]): string;
    /** Retrieves additional component attributes. @keywords attributes attrs */
    getAttrs(): ConstrItem;
}