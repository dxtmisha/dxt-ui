// md5:640680b1231c73ac206491141d5164bf true
import type { ConstrBind } from '@dxtmisha/functional';

/** Component map for including the Actions component. @keywords actions, component, include */
export type ActionsComponentInclude = {
    /** Actions component configuration. */
    actions?: object;
};

/** Event definitions for including Actions events. @keywords actions, emits, events */
export type ActionsEmitsInclude = {
    /** Click event for actions. */
    actions: EventClickEmits['click'];
    /** Simple click event for actions. */
    actionsLite: EventClickEmits['clickLite'];
};

/** Properties for including and configuring the Actions component. @keywords actions, props, include */
export type ActionsPropsInclude<Actions extends ActionsPropsBasic = ActionsPropsBasic> = {
    /** Controls whether actions are hidden. */
    actionsHide?: boolean;
    /** List of action buttons. */
    actionsList?: ConstrBind<Actions['list']>;
    /** List of secondary action buttons. */
    actionsSecondary?: ConstrBind<Actions['listSecondary']>;
    /** Additional attributes for the Actions component. */
    actionsAttrs?: ConstrBind<Actions>;
};