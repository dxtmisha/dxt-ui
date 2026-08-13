// md5:8d71dfeb9fa7e67c84db4cb929f276dc true
import { ConstrClassObject, ConstrStyles } from '@dxtmisha/functional';
export type ProgressBarItem = {
    index?: string;
    label?: string;
    value: string | number;
    color?: string;
    palette?: string;
};
export type ProgressBarList = ProgressBarItem[];
export type ProgressBarInfoItem = ProgressBarItem & {
    percent: number;
    classes: ConstrClassObject;
    style: ConstrStyles;
    aria: AriaList;
};
export type ProgressBarInfoList = ProgressBarInfoItem[];