// md5:fefe2dfcb57ace983a7ce6cb190d84ad true
import type { ConstrClass } from '@dxtmisha/functional';

/** Components required for InputImage functionality. @keywords components, dependencies */
export type InputImageComponents = ActionsComponentInclude & DropzoneComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude & ImageCropComponentInclude;

export type InputImageEmits = FieldBasicEmits<FieldFileValue>;

/** Exposed methods and properties for InputImage. @keywords expose, api, ref */
export interface InputImageExpose extends FieldBasicExpose<FieldFileValue> {
    /** Opens the file selection dialog. @keywords open, file picker, dialog */
    open: () => void;
    /** Clears the image and crop selection. @keywords clear, reset, remove */
    clear: () => void;
}

export interface InputImageSlots extends LabelAlternativeSlots {
}

/** CSS class names for component elements. @keywords classes, styling */
export type InputImageClasses = {
    main: ConstrClass;
    body: string;
    crop: string;
    dropzone: string;
    actions: string;
};