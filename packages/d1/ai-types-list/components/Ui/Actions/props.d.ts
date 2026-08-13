// md5:19cacd120a5157f36f3ccbd1b1b58005 true
import { ActionsPropsBasic } from '@dxtmisha/constructor/Actions';
/** Component property values mapping @keywords props, values, configuration */
export declare const propsValues: {
    align: string[];
    flexible: string[];
    padding: string[];
};
type PropsToken = {
    align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto';
    flexible?: 'adaptiveSm' | 'adaptiveMd' | 'adaptiveLg' | 'adaptiveXl' | 'adaptive2xl' | 'containerSm' | 'containerMd' | 'containerLg' | 'containerXl' | 'container2xl';
    wrap?: boolean;
    padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none';
    paddingByIndent?: boolean;
};
/** Incoming properties type @keywords actions, props, configuration */
export type ActionsProps = ActionsPropsBasic<ButtonProps> & PropsToken;
/** Default properties object @keywords defaults, configuration, object */
export declare const defaults: object;