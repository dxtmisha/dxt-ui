// md5:aba13baa83645baaca2780d0fa77cb15 true
import type { ConstrClass } from '@dxtmisha/functional';

export type InputFileDropzoneComponents = DropzoneComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude;

export type InputFileDropzoneEmits = {
  /** Triggered when files are added @keywords dropzone, add, files */
  add: [files: File[]];
};

export interface InputFileDropzoneExpose {
  /** Opens the file selection dialog @keywords open, file picker, select */
  open: () => void;
}

export interface InputFileDropzoneSlots extends LabelAlternativeSlots {
  /** Default slot @keywords default, slot, content */
  default?: (props: any) => any;
}

export type InputFileDropzoneClasses = {
  main: ConstrClass;
  body: string;
  dropzone: string;
};