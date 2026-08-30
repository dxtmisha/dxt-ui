// md5:c980bf1f821e0c621d814b9ef3a583ca true
import { type PaginationPropsBasic } from '@dxtmisha/constructor/Pagination';

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
export type PaginationProps = PaginationPropsBasic<IconProps, ButtonProps, MenuProps> & PropsToken;
export declare const defaults: object;