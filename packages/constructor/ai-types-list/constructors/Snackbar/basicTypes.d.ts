// md5:e704ab5bea996e4670a9173911751045 true
import type { ConstrBind } from '@dxtmisha/functional';
import type { ResumableTimer } from '@dxtmisha/functional-basic';

/** Snackbar notification item configuration. @keywords snackbar, toast, notification, value */
export type SnackbarValue = {
    /** Custom component for the snackbar item. */
    component?: any;
    /** Data properties for the snackbar item. */
    data?: ConstrBind<SnackbarItemPropsBasic>;
    /** Whether the notification has high priority. */
    highPriority?: boolean;
    /** Delay before auto-closing in milliseconds. */
    delay?: number;
    /** Text content of the notification. */
    value?: string;
    /** Timer instance managing auto-close state. */
    resumableTimer?: ResumableTimer;
};

export type SnackbarList = SnackbarValue[];