// md5:2725d213c2d41a1c79165e4d4aa6e352 true
import { DummyPropsBasic } from '@dxtmisha/constructor/Dummy';
/** Properties values definition @keywords props, values, size, palette */
export declare const propsValues: {
    size: string[];
    palette: string[];
};
type PropsToken = {
    size?: 'x' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Dummy component properties @keywords dummy, props */
export type DummyProps = DummyPropsBasic & PropsToken;
/** Default properties configuration @keywords defaults, config */
export declare const defaults: object;