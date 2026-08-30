// md5:f4cf3e69cafe3a3d32cb6d85d9cd9e51 true
import type { ConstrClass } from '@dxtmisha/functional';

/** Component dependencies required for snackbar item @keywords snackbar, components */
export type SnackbarItemComponents = IconComponentInclude & ButtonComponentInclude & ActionsComponentInclude;

/** Event definitions for snackbar item @keywords events, emits, close */
export type SnackbarItemEmits = ActionsEmitsInclude & EventClickEmits & {
    /** Triggered when the notification is closed */
    close: [
        value: string | undefined
    ];
};

export interface SnackbarItemExpose {
}

/** Slot definitions for snackbar item @keywords slots */
export interface SnackbarItemSlots extends LabelSlots, DescriptionSlots {
    /** Notification body content slot */
    body?(props: any): any;
}

/** CSS class map for snackbar item sub-elements @keywords classes, styles */
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