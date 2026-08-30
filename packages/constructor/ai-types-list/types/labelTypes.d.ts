// md5:fa7ed89ed53c24c1229ac756d9c465b0 true
import type { NumberOrString } from '@dxtmisha/functional';

export interface LabelSlots {
    default?(props: any): any;
}

export interface LabelAlternativeSlots {
    label?(props: any): any;
}

export interface LabelNumberSlots extends LabelSlots {}

export interface LabelHighlightSlots extends LabelSlots {}

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