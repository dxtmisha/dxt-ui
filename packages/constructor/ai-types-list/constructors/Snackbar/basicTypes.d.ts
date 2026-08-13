// md5:9e92c02c1b85e445361d63f984a02192 true
import { ConstrBind } from '@dxtmisha/functional';
import { ResumableTimer } from '@dxtmisha/functional-basic';

/** Snackbar value item defining notification properties and timers. @keywords snackbar value notification item */
export type SnackbarValue = {
    component?: any;
    data?: ConstrBind<SnackbarItemPropsBasic>;
    highPriority?: boolean;
    delay?: number;
    value?: string;
    resumableTimer?: ResumableTimer;
};

/** Array list of snackbar notification values. @keywords snackbar list values array */
export type SnackbarList = SnackbarValue[];