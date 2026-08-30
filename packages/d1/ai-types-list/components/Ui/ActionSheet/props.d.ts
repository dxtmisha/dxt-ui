// md5:35e56c43c58e1c51a3677632a8199cc3 true
import { type ActionSheetPropsBasic } from '@dxtmisha/constructor/ActionSheet';

export declare const propsValues: {
    width: string[];
};
type PropsToken = {
    width?: 'sm' | 'md' | 'lg' | 'auto';
};
/** Properties for the ActionSheet component. @keywords actionsheet, props */
export type ActionSheetProps = ActionSheetPropsBasic<WindowProps, BarsProps, ActionsProps> & PropsToken;
/** Default property values for the ActionSheet component. @keywords actionsheet, defaults */
export declare const defaults: object;