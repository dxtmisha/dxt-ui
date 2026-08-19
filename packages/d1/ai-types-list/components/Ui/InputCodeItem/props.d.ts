// md5:8332c77771de53cc19953a6abfee8bc8 true
import { InputCodeItemPropsBasic } from '@dxtmisha/constructor/InputCodeItem';
/** Available property values for size and palette @keywords propsValues, size, palette */
export declare const propsValues: {
    size: string[];
    palette: string[];
};
type PropsToken = {
    disabled?: boolean;
    success?: boolean;
    error?: boolean;
    hide?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'display';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Component input properties combining basic items and token styling @keywords InputCodeItemProps, properties */
export type InputCodeItemProps = InputCodeItemPropsBasic & PropsToken;
/** Default values for component properties @keywords defaults, object */
export declare const defaults: object;