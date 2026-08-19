// md5:14b9c7b1f94d95f4a119823ab75cb1ce true
export type CropAreaPropsBasic = ModelProps<any> & {
    value?: CropAreaCoordinator;
    min?: number;
    step?: number;
    tabindex?: number | string;
    tag?: string;
};
export type CropAreaProps = CropAreaPropsBasic & {
    disabled?: boolean;
    disabledTop?: boolean;
    disabledRight?: boolean;
    disabledBottom?: boolean;
    disabledLeft?: boolean;
};
/** Default configuration values for crop area @keywords defaults, crop, area, configuration */
export declare const defaultsCropArea: {
    min: number;
    step: number;
    tag: string;
};