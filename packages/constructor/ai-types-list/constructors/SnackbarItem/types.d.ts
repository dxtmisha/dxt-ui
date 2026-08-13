// md5:4704cf597d4cb0111ce00d960fe34043 true
import { ConstrClass } from '@dxtmisha/functional';

export type SnackbarItemComponents = IconComponentInclude & ButtonComponentInclude & ActionsComponentInclude;

/** Type describing available events. @keywords snackbar item emits events */
export type SnackbarItemEmits = ActionsEmitsInclude & EventClickEmits & {
    /** Event triggered when notification is closed @keywords close event */
    close: [value: string | undefined];
};

export interface SnackbarItemExpose {
}

/** Type describing available slots. @keywords snackbar item slots */
export interface SnackbarItemSlots extends LabelSlots, DescriptionSlots {
    /** Slot for the notification body @keywords body slot */
    body?(props: any): any;
}

/** Type describing subclasses. @keywords snackbar item classes */
export type SnackbarItemClasses = {
    main: ConstrClass;
    tool: string;
    icon: string;
    trailing: string;
    context: string;
    label: string;
    description: string;
    body: string;
    button: string;
    close: string;
    actions: string;
};