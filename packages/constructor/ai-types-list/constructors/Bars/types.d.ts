// md5:9a38fdf0523362959a2eaa2035f2d149 true
import { ConstrClass } from '@dxtmisha/functional';
export type BarsComponents = ButtonComponentInclude;
export type BarsEmits = EventClickEmits & {
    /** Event for updating the action mode status @keywords update action status */
    'update:action': [value: boolean];
    /** Event for updating the action model status @keywords update model action status */
    'update:modelAction': [value: boolean];
};
export interface BarsExpose {
}
export interface BarsSlots extends LabelSlots, DescriptionSlots {
    /** Slot for displaying a list of buttons @keywords bars slot buttons */
    bars?(props: any): any;
    /** Slot for displaying buttons in action mode @keywords action bars slot */
    actionBars?(props: any): any;
}
export type BarsClasses = {
    main: ConstrClass;
    context: string;
    label: string;
    description: string;
};