// md5:6f14a51542ddc276726e3563059ae774 true
export type AccordionPropsToken = {
    divider?: boolean;
};
export type AccordionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Cell extends CellPropsBasic = CellPropsBasic, MotionTransform extends MotionTransformPropsBasic = MotionTransformPropsBasic> = LabelProps & DescriptionProps & IconLitePropsInclude<Icon> & MotionTransformPropsInclude<MotionTransform> & ModelPropsOpen & {
    iconArrowDown?: IconValue<Icon>;
    cellAttrs?: ConstrBind<Cell>;
};
export type AccordionProps = AccordionPropsBasic & AccordionPropsToken;
/** Default accordion properties values @keywords defaults, accordion, configuration */
export declare const defaultsAccordion: {
    divider: boolean;
    clickOpen: boolean;
    autoClose: boolean;
};