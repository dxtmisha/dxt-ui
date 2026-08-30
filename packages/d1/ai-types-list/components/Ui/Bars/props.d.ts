// md5:a750801990fa7927e91ffd0814ec8557 true
import { type BarsPropsBasic } from '@dxtmisha/constructor/Bars';
export declare const propsValues: {
    padding: string[];
};
type PropsToken = {
    padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none';
    paddingByIndent?: boolean;
};
/** Bars component properties. @keywords bars, props */
export type BarsProps = BarsPropsBasic<IconProps, ButtonProps> & PropsToken;
/** Default property values. @keywords bars, defaults */
export declare const defaults: object;