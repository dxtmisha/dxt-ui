// md5:54949a7df60d7449f4f456ed55760700 true
import { type InputFileDropzonePropsBasic } from '@dxtmisha/constructor/InputFileDropzone';
import type { DropzoneProps } from '../Dropzone';
import type { FieldCounterProps } from '../FieldCounter';
import type { FieldLabelProps } from '../FieldLabel';
import type { FieldMessageProps } from '../FieldMessage';
import type { IconProps } from '../Icon';

export declare const propsValues: {};

type PropsToken = {
    disabled?: boolean;
    readonly?: boolean;
};

/** Properties for the InputFileDropzone component. @keywords input, file, dropzone, props */
export type InputFileDropzoneProps = InputFileDropzonePropsBasic<DropzoneProps, FieldCounterProps, FieldLabelProps, FieldMessageProps, IconProps> & PropsToken;

/** Default property values for InputFileDropzone. @keywords defaults, properties */
export declare const defaults: object;