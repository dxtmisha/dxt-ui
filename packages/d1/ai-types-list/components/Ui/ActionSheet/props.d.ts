// md5:cac035e20ebef11e34e995d4ffa83405 true
import { ActionSheetPropsBasic } from '@dxtmisha/constructor/ActionSheet';
/** @keywords propsValues width action sheet */
export declare const propsValues: {
    width: string[];
};
type PropsToken = {
    width?: 'sm' | 'md' | 'lg' | 'auto';
};
/** ActionSheet component properties @keywords ActionSheetProps properties */
export type ActionSheetProps = ActionSheetPropsBasic<WindowProps, BarsProps, ActionsProps> & PropsToken;
/** Default properties for ActionSheet @keywords defaults */
export declare const defaults: object;
export {};