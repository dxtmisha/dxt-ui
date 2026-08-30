// md5:5ea0ba490808d60037a13c146af60f49 true
import type { ConstrBind } from '@dxtmisha/functional';

export type AccordionPropsToken = {
    divider?: boolean;
};

export type AccordionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Cell extends CellPropsBasic = CellPropsBasic, MotionTransform extends MotionTransformPropsBasic = MotionTransformPropsBasic> = LabelProps & DescriptionProps & IconLitePropsInclude<Icon> & MotionTransformPropsInclude<MotionTransform> & ModelPropsOpen & {
    /** Dropdown indicator icon. @keywords accordion, icon, indicator */
    iconArrowDown?: IconValue<Icon>;
    /** Additional attributes for the header cell component. @keywords accordion, cell, attributes */
    cellAttrs?: ConstrBind<Cell>;
};

/** Incoming properties for the Accordion component. @keywords accordion, props */
export type AccordionProps = AccordionPropsBasic & AccordionPropsToken;

/** Default property values for the Accordion component. @keywords accordion, defaults */
export declare const defaultsAccordion: {
    divider: boolean;
    clickOpen: boolean;
    autoClose: boolean;
};