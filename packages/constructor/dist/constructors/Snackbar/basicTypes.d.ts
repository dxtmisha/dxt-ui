import { ConstrBind } from '@dxtmisha/functional';
import { SnackbarItemPropsBasic } from '../SnackbarItem';
export type SnackbarValue = {
    component?: any;
    data?: ConstrBind<SnackbarItemPropsBasic>;
    highPriority?: boolean;
    delay?: number;
    value?: string;
};
export type SnackbarList = SnackbarValue[];
