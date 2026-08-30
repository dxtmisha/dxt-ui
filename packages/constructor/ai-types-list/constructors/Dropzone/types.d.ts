// md5:891eb7dbd5f5236b2dac17fa3ca9df6b true
import type { ConstrClass } from '@dxtmisha/functional';

export type DropzoneComponents = IconComponentInclude;

export type DropzoneEmits = FieldBasicEmits<FileList | undefined> & ModelEmitsFiles;

/** Component expose interface. @keywords expose, methods, api */
export interface DropzoneExpose {
  /** Opens the file selection dialog. @keywords open, file picker, upload */
  open: () => void;
  /** Clears selected files. @keywords clear, reset, remove */
  clear: () => void;
}

/** Slot definitions for dropzone component. @keywords slots, template */
export interface DropzoneSlots extends LabelSlots, DescriptionSlots {
  /** Default slot content. @keywords default, slot */
  default?: (props: any) => any;
}

export type DropzoneClasses = {
  main: ConstrClass;
  input: string;
};