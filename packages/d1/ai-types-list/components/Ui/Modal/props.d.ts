// md5:619a4145fa262b0301ce3f4e2a375a18 true
import { ModalPropsBasic } from '@dxtmisha/constructor/Modal';

/** Default property values @keywords defaults props_values */
export declare const propsValues: {
    imagePosition: string[];
    width: string[];
};

type PropsToken = {
    imagePosition?: 'top' | 'left' | 'adaptiveSm' | 'adaptiveMd' | 'adaptiveLg' | 'adaptiveXl' | 'adaptive2xl';
    width?: 'sm' | 'md' | 'lg' | 'xl' | 'auto';
};

/** Modal component properties type @keywords modal_props props */
export type ModalProps = ModalPropsBasic<WindowProps, BarsProps, ActionsProps, ImageProps> & PropsToken;

/** Default configuration object @keywords defaults */
export declare const defaults: object;

export {};