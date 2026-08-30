// md5:9d4efed5e5935028ec897f633957dd61 true
type GridItemPropsToken = {
    base?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    align?: 'center' | 'top' | 'bottom' | 'stretch' | 'baseline' | 'start' | 'end';
};
export type GridItemPropsBasic = {};
/** Grid item component properties. @keywords grid item, props, layout */
export type GridItemProps = GridItemPropsBasic & GridItemPropsToken;
/** Default values for GridItem properties. @keywords grid item, defaults */
export declare const defaultsGridItem: {
    base: string;
};