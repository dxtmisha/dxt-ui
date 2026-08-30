// md5:f452dc8035443ce7afcad5428251e0d0 true
import { type CellPropsBasic } from '@dxtmisha/constructor/Cell';

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

/** Cell component properties contract. @keywords cell, props */
export type CellProps = CellPropsBasic<IconProps, ProgressProps> & PropsToken;

/** Default property values for the Cell component. @keywords cell, defaults */
export declare const defaults: object;