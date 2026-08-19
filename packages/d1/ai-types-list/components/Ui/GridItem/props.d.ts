// md5:f99497f3375265a9d22a526232bb4f23 true
import { GridItemPropsBasic } from '@dxtmisha/constructor/GridItem';
/** Grid property configuration values for responsive layouts and alignment @keywords propsValues grid layout alignment */
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
/** Grid item properties combining basic props and responsive tokens @keywords GridItemProps grid item properties tokens */
export type GridItemProps = GridItemPropsBasic & PropsToken;
/** Default values for grid item properties @keywords defaults grid item */
export declare const defaults: object;