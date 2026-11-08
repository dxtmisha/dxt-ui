// md5:2f581819714e8cd87fb45aa4a511cc41 true
import type { ConstrItem } from '@dxtmisha/functional';
export type ComponentOutletPropsToken = {};
export type ComponentOutletPropsBasic = {
  /** Registered component name in ComponentStorage */
  name?: string;
  /** Additional properties passed to the resolved component */
  props?: ConstrItem;
};
export type ComponentOutletProps = ComponentOutletPropsBasic & ComponentOutletPropsToken;
/** Default properties for ComponentOutlet @keywords defaults, component outlet */
export declare const defaultsComponentOutlet: {};