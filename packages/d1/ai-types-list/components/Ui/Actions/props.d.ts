// md5:810387737720ec45db25bc24e445b504 true
import { type ActionsPropsBasic } from '@dxtmisha/constructor/Actions';
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
/** Actions component properties. @keywords actions, properties, tokens */
export type ActionsProps = ActionsPropsBasic<ButtonProps> & PropsToken;
/** Default property values for Actions component. @keywords actions, defaults */
export declare const defaults: object;