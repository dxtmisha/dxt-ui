// md5:8d5db1c07fef4303d7f75d84bd2f0bef true
type CropAreaPropsToken = {
    readonly?: boolean;
    disabled?: boolean;
    disabledTop?: boolean;
    disabledRight?: boolean;
    disabledBottom?: boolean;
    disabledLeft?: boolean;
};
/** Basic properties for crop area component. @keywords crop, area, properties */
export type CropAreaPropsBasic = ModelProps<any> & FieldStepProps & {
    /** Initial coordinate values [top, right, bottom, left]. */
    value?: CropAreaCoordinator;
    /** Tab index order. */
    tabindex?: number | string;
    /** HTML tag of the wrapper element. */
    tag?: string;
};
/** Incoming properties for crop area component. @keywords crop, area, props */
export type CropAreaProps = CropAreaPropsBasic & CropAreaPropsToken;
/** Default property values for crop area component. @keywords crop, defaults */
export declare const defaultsCropArea: {
    min: number;
    step: number;
    tag: string;
};