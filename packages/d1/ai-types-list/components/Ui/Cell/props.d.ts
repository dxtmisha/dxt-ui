// md5:432898b2c103f2ce96dc1445bcb8aa31 true
import { CellPropsBasic } from '@dxtmisha/constructor/Cell';
/** Properties values definition @keywords propsValues, dividerLabel, padding */
export declare const propsValues: {
    dividerLabel: string[];
    padding: string[];
};
type PropsToken = {
    focus?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    dynamic?: boolean;
    dynamicHover?: boolean;
    divider?: boolean;
    dividerLabel?: 'always' | 'none' | 'adaptiveSm' | 'adaptiveMd' | 'adaptiveLg' | 'adaptiveXl' | 'adaptive2xl' | 'containerSm' | 'containerMd' | 'containerLg' | 'containerXl' | 'container2xl';
    iconTop?: boolean;
    padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none';
    paddingByIndent?: boolean;
};
/** Cell properties type definition @keywords CellProps, CellPropsBasic */
export type CellProps = CellPropsBasic<IconProps, ProgressProps> & PropsToken;
/** Default values object @keywords defaults, object */
export declare const defaults: object;
export {};