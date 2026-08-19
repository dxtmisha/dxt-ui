// md5:e01c723ca610da590147b09bb43f2bb7 true
type CropAreaPropsToken = {
    disabled?: boolean;
    disabledTop?: boolean;
    disabledRight?: boolean;
    disabledBottom?: boolean;
    disabledLeft?: boolean;
};
export type CropAreaPropsBasic = ModelProps<CropAreaCoordinator> & {
    value?: CropAreaCoordinator;
    min?: number;
    tag?: string;
};
export type CropAreaProps = CropAreaPropsBasic & CropAreaPropsToken;
/** Default values for crop area properties @keywords defaults, crop area */
export declare const defaultsCropArea: {
    min: number;
    tag: string;
};