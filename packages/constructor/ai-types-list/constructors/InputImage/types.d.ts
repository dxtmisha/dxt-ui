// md5:b9a2255c71e5f37eacd64565bdd7ec70 true
import type { ConstrClass } from '@dxtmisha/functional';

export type InputImageComponents = ActionsComponentInclude & DropzoneComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude & ImageCropComponentInclude;

export type InputImageEmits = FieldBasicEmits<InputImageValue>;

export interface InputImageExpose extends FieldBasicExpose<InputImageValue> {
    /** Opens the file selection dialog. @keywords open, select, browse, file */
    open: () => void;
    /** Clears the selected image and crop state. @keywords clear, reset, remove */
    clear: () => void;
}

export interface InputImageSlots extends LabelAlternativeSlots {
}

export type InputImageClasses = {
    main: ConstrClass;
    body: string;
    crop: string;
    dropzone: string;
    actions: string;
};