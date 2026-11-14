// md5:31c757f36333edaf7046d2db72e1d35a true
import { type InputFileItemPropsBasic } from '@dxtmisha/constructor/InputFileItem';
import type { ButtonProps } from '../Button';
import type { ImageProps } from '../Image';
import type { ImageCropProps } from '../ImageCrop';
import type { ProgressProps } from '../Progress';
export declare const propsValues: {
    appearance: string[];
    status: string[];
    palette: string[];
};
type PropsToken = {
    focus?: boolean;
    selected?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    appearance?: 'list' | 'compact' | 'tile';
    status?: 'uploading' | 'uploaded' | 'error' | 'idle';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Properties for the InputFileItem component. @keywords input, file, item, props */
export type InputFileItemProps = InputFileItemPropsBasic<ButtonProps, ImageProps, ProgressProps, ImageCropProps> & PropsToken;
export declare const defaults: object;