// md5:1702e5a98ea71271799056598ad468ac true
import { ConstrBind } from '@dxtmisha/functional';

export type ActionsComponentInclude = {
    actions?: object;
};

export type ActionsEmitsInclude = {
    actions: EventClickEmits['click'];
    actionsLite: EventClickEmits['clickLite'];
};

export type ActionsPropsInclude<Actions extends ActionsPropsBasic = ActionsPropsBasic> = {
    actionsHide?: boolean;
    actionsList?: ConstrBind<Actions['list']>;
    actionsSecondary?: ConstrBind<Actions['listSecondary']>;
    actionsAttrs?: ConstrBind<Actions>;
};