// md5:2406792009b2919efd127d66fec7c925 true
import { type GridItemPropsBasic } from '@dxtmisha/constructor/GridItem';
export declare const propsValues: {
    base: string[];
    align: string[];
    sm: string[];
    md: string[];
    lg: string[];
    xl: string[];
    xl2: string[];
};
type PropsToken = {
    base?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    align?: 'center' | 'top' | 'bottom' | 'stretch' | 'baseline' | 'start' | 'end';
    sm?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    md?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    lg?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    xl?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    xl2?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
};
/** Grid item properties. @keywords grid, item, layout, props */
export type GridItemProps = GridItemPropsBasic & PropsToken;
export declare const defaults: object;