// md5:727f2e3e8f1a20c4f6f807442eb73220 true
import { ButtonGroupPropsBasic } from '@dxtmisha/constructor/ButtonGroup';
/** Component property values for orientation options. @keywords propsValues orientation */
export declare const propsValues: {
    orientation: string[];
};
type PropsToken = {
    orientation?: 'horizontal' | 'vertical';
    wrap?: boolean;
};
export type ButtonGroupProps = ButtonGroupPropsBasic<ButtonProps> & PropsToken;
/** Default property values object. @keywords defaults object */
export declare const defaults: object;
export {};