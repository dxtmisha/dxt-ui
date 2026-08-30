// md5:038667da476ec905be98ec2ad7a1dbd1 true
import { type InputCodeItemPropsBasic } from '@dxtmisha/constructor/InputCodeItem';

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

/** Properties for the InputCodeItem component. @keywords input, code, item, props */
export type InputCodeItemProps = InputCodeItemPropsBasic & PropsToken;

export declare const defaults: object;