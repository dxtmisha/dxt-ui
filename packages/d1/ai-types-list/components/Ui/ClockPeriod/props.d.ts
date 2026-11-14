// md5:81dd3b34fa850b1ee1fcbb6a43f30270 true
import { type ClockPeriodPropsBasic } from '@dxtmisha/constructor/ClockPeriod';

export declare const propsValues: {
  orientation: string[];
  palette: string[];
};
type PropsToken = {
  readonly?: boolean;
  disabled?: boolean;
  orientation?: 'vertical' | 'horizontal';
  palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Clock period component properties. @keywords clock, period, props */
export type ClockPeriodProps = ClockPeriodPropsBasic & PropsToken;
/** Default property values for the clock period component. @keywords defaults */
export declare const defaults: object;