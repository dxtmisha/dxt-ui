// md5:3e6120a685613d63c02b7757ff93972d true
import type { ConstrClass } from '@dxtmisha/functional';

export type DialogComponents = ModalComponents & IconComponentInclude;

export type DialogEmits = ModalEmits & {
  /** Event emitted on OK button click @keywords ok, confirm */
  ok: [];
  /** Event emitted on close button click @keywords close, cancel */
  close: [];
};

export interface DialogExpose extends ModalExpose {}

export interface DialogSlots extends ModalSlots, LabelAlternativeSlots, DescriptionSlots {}

export type DialogClasses = {
  main: ConstrClass;
  title: string;
  header: string;
  information: string;
  icon: string;
  label: string;
  description: string;
  body: string;
  footer: string;
};