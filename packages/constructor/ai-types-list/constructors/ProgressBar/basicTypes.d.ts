// md5:3dbfb823bb08b3288da4b5becffd5249 true
import type { ConstrClassObject, ConstrStyles } from '@dxtmisha/functional';

/** Progress bar item configuration. @keywords progress, bar, item */
export type ProgressBarItem = {
  index?: string;
  label?: string;
  value: string | number;
  color?: string;
  palette?: string;
};

export type ProgressBarList = ProgressBarItem[];

/** Processed progress bar item state and rendering attributes. @keywords progress, bar, info */
export type ProgressBarInfoItem = ProgressBarItem & {
  percent: number;
  classes: ConstrClassObject;
  style: ConstrStyles;
  aria: AriaList;
};

export type ProgressBarInfoList = ProgressBarInfoItem[];