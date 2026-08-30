// md5:94bf7561e0d0eddb875aa6b70187dc86 true
import { type InputImagePropsBasic } from '@dxtmisha/constructor/InputImage';

export declare const propsValues: {
    size: string[];
};

type PropsToken = {
    disabled?: boolean;
    readonly?: boolean;
    size?: 'sm' | 'md' | 'lg';
};

/** Image input component properties. @keywords input, image, props */
export type InputImageProps = InputImagePropsBasic<ActionsProps, DropzoneProps, FieldCounterProps, FieldLabelProps, FieldMessageProps, IconProps, ImageCropProps> & PropsToken;

export declare const defaults: object;