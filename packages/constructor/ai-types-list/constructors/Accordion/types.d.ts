// md5:9d767c977a75f07240f84ff87014844e true
import { ConstrClass } from '@dxtmisha/functional';
export type AccordionComponents = CellComponentInclude & MotionTransformComponentInclude;
export type AccordionEmits = EventClickEmits & MotionTransformEmitsInclude & ModelEmitsOpen;
export interface AccordionExpose extends MotionTransformExposeInclude {
}
export interface AccordionSlots extends CellSlotsInclude {
    /** Main expandable content of the accordion @keywords slot default content */
    default?(props: MotionTransformControlItem): any;
}
export type AccordionClasses = {
    main: ConstrClass;
    head: string;
    body: string;
};