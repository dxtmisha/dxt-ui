// md5:65299e25fd76d5c6d4f2b6c3e1c33128 true
import type { ConstrBind, RefOrNormalOrFunction } from '@dxtmisha/functional';

/** Component properties value or getter function @keywords component, props */
export type ComponentIncludeProps<Props extends Record<string, any>> = Readonly<ConstrBind<Props>> | (() => ConstrBind<Props>) | undefined;

/** Component property attribute keys @keywords component, props, keys */
export type ComponentIncludePropsAttrs<Props extends Record<string, any>> = keyof Props | undefined;

/** Additional component properties or reactive getter @keywords component, extra props */
export type ComponentIncludeExtra<PropsExtra extends Record<string, any> = Record<string, any>> = RefOrNormalOrFunction<Partial<ConstrBind<PropsExtra>>>;

/** Sub-component exposed API method proxy configuration @keywords expose, method, proxy */
export type ComponentIncludeExposeItem<V = any> = {
    /** Exposed method name */
    name: string;
    /** Target sub-component method name to proxy */
    method?: string;
    /** Fallback value when method returns undefined */
    defaultValue?: V;
    /** Target return value type cast */
    type?: 'string' | 'boolean' | 'number';
};