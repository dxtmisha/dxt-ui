// md5:a7b50c04b8c1dc7e29355e3f5e6b84a8 true
import { type DummyPropsBasic } from '@dxtmisha/constructor/Dummy';

/** Available property values. @keywords dummy props values size palette */
export declare const propsValues: {
    size: string[];
    palette: string[];
};
type PropsToken = {
    size?: 'x' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Incoming component properties. @keywords dummy props */
export type DummyProps = DummyPropsBasic & PropsToken;
/** Default property values. @keywords dummy defaults */
export declare const defaults: object;