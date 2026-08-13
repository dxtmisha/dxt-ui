// md5:3794411d360515b66738852df843523c true
import { GridItemPropsBasic } from '@dxtmisha/constructor/GridItem';
/** Predefined values array for grid item properties. @keywords props values grid */
export declare const propsValues: {
    base: string[];
    sm: string[];
    md: string[];
    lg: string[];
    xl: string[];
    xl2: string[];
};
type PropsToken = {
    base?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    sm?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    md?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    lg?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    xl?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    xl2?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
};
/** Grid item properties combining basic props and token layout sizing. @keywords grid item properties props */
export type GridItemProps = GridItemPropsBasic & PropsToken;
/** Default object values for grid item configuration. @keywords defaults grid item */
export declare const defaults: object;