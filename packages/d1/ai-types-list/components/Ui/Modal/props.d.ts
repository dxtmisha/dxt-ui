// md5:421c2aad5f2c2a34990c1beab8f1aebe true
import { type ModalPropsBasic } from '@dxtmisha/constructor/Modal';

export declare const propsValues: {
    imagePosition: string[];
    width: string[];
};

type PropsToken = {
    imagePosition?: 'top' | 'left' | 'adaptiveSm' | 'adaptiveMd' | 'adaptiveLg' | 'adaptiveXl' | 'adaptive2xl';
    width?: 'sm' | 'md' | 'lg' | 'xl' | 'auto';
};

/** Modal component properties. @keywords modal, props, dialog */
export type ModalProps = ModalPropsBasic<WindowProps, BarsProps, ActionsProps, ImageProps> & PropsToken;

/** Default property values for the modal component. @keywords modal, defaults */
export declare const defaults: object;