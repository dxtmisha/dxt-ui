// md5:dc60fd2ef566ffcdecfc4c90a028179d true
import { type TooltipPropsBasic } from '@dxtmisha/constructor/Tooltip';

export declare const propsValues: {
    maxWidth: string[];
};

type PropsToken = {
    interactive?: boolean;
    embedded?: boolean;
    maxWidth?: 'sm' | 'md' | 'lg';
};

/** Tooltip component properties. @keywords tooltip, props, options */
export type TooltipProps = TooltipPropsBasic<ArrowProps> & PropsToken;

export declare const defaults: object;