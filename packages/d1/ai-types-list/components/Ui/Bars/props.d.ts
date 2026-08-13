// md5:4b72758b18665692d882347837e912da true
import { BarsPropsBasic } from '@dxtmisha/constructor/Bars';
/** Default property values. @keywords defaults propsValues configuration */
export declare const propsValues: {
    padding: string[];
};
type PropsToken = {
    padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none';
    paddingByIndent?: boolean;
};
/** Bars component properties contract combining basic props and token definitions. @keywords BarsProps properties type */
export type BarsProps = BarsPropsBasic<IconProps, ButtonProps> & PropsToken;
/** Default configuration object. @keywords defaults object configuration */
export declare const defaults: object;