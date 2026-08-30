// md5:6c0195603a8fbc462cff839288f9da25 true
import type { ConstrClass } from '@dxtmisha/functional';
export type ModalComponents = WindowComponentInclude & BarsComponentInclude & ActionsComponentInclude;
export type ModalEmits = WindowEmitsInclude & BarsEmitsInclude & ActionsEmitsInclude & ModelEmitsOpen;
export interface ModalExpose extends WindowExposeInclude {}
export interface ModalSlots extends WindowSlots {
  /** Slot for rendering the modal header content. @keywords modal, header, slot */
  header(props: WindowControlItem): any;
}
export type ModalClasses = {
  main: ConstrClass;
  title: string;
  header: string;
  body: string;
  footer: string;
};