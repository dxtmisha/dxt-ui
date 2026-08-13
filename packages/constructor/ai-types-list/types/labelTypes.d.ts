// md5:792fdf5607468233ecfaa9be9de40138 true
import { NumberOrString } from '@dxtmisha/functional';

export interface LabelSlots {
    default?(props: any): any;
}

export interface LabelAlternativeSlots {
    label?(props: any): any;
}

export interface LabelNumberSlots extends LabelSlots {
}

export interface LabelHighlightSlots extends LabelSlots {
}

export type LabelProps = {
    label?: NumberOrString;
    labelId?: string;
};

export type LabelNumberProps = LabelProps & {
    labelMax?: NumberOrString;
    formatting?: boolean;
    language?: string;
};

export type LabelHighlightProps = LabelProps & {
    highlight?: string;
    highlightLengthStart?: number;
    value?: any;
};