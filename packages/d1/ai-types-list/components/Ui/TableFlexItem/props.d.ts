// md5:555d510c08961399e22870cb4a6f1ed0 true
import { type TableFlexItemPropsBasic } from '@dxtmisha/constructor/TableFlexItem';
export declare const propsValues: {
  align: string[];
  alignVertical: string[];
};
type PropsToken = {
  selected?: boolean;
  disabled?: boolean;
  align?: 'left' | 'center' | 'right';
  alignVertical?: 'top' | 'center' | 'bottom';
  dividerX?: boolean;
  dividerY?: boolean;
  labelClamp?: boolean;
  stickyTop?: boolean;
  stickyLeft?: boolean;
};
/** Table flex item properties. @keywords table, flex, item, props */
export type TableFlexItemProps = TableFlexItemPropsBasic & PropsToken;
/** Default property values. @keywords table, flex, item, defaults */
export declare const defaults: object;