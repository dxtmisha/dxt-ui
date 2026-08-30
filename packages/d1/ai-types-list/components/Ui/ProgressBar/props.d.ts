// md5:8943105b6d774b4e9f374713d7f5aac2 true
import { type ProgressBarPropsBasic } from '@dxtmisha/constructor/ProgressBar';

/** Available property options and values. @keywords progress bar, palette options */
export declare const propsValues: {
    palette: string[];
};

type PropsToken = {
    overlay?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};

/** Incoming properties for the progress bar component. @keywords progress bar, props, palette, overlay */
export type ProgressBarProps = ProgressBarPropsBasic & PropsToken;

/** Default property values for the progress bar component. @keywords progress bar, defaults */
export declare const defaults: object;