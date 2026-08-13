// md5:64aff7928bf4058a294f589dcca2304f true
import { PaginationPropsBasic } from '@dxtmisha/constructor/Pagination';
/** Predefined values for pagination properties @keywords props values adaptive */
export declare const propsValues: {
    adaptive: string[];
    adaptiveMore: string[];
    adaptiveMorePrev: string[];
};
type PropsToken = {
    adaptive?: 'lineAlways' | 'lineSm' | 'lineMd' | 'lineLg' | 'lineXl' | 'line2xl';
    adaptiveMore?: 'lineAlways' | 'lineSm' | 'lineMd' | 'lineLg' | 'lineXl' | 'line2xl';
    adaptiveMorePrev?: 'lineAlways' | 'lineSm' | 'lineMd' | 'lineLg' | 'lineXl' | 'line2xl';
};
/** Pagination component properties @keywords pagination props token */
export type PaginationProps = PaginationPropsBasic<IconProps, ButtonProps, MenuProps> & PropsToken;
/** Default values for pagination component properties @keywords defaults pagination */
export declare const defaults: object;
export {};