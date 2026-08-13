// md5:271a3e64616042cae6259e0a50477c58 true
import { ConstrBind, RefOrNormalOrFunction } from '@dxtmisha/functional';
export type ComponentIncludeProps<Props extends Record<string, any>> = Readonly<ConstrBind<Props>> | (() => ConstrBind<Props>) | undefined;
export type ComponentIncludePropsAttrs<Props extends Record<string, any>> = keyof Props | undefined;
export type ComponentIncludeExtra<PropsExtra extends Record<string, any> = Record<string, any>> = RefOrNormalOrFunction<Partial<ConstrBind<PropsExtra>>>;
/** Component sub-component exposed API method configuration @keywords component expose api item */
export type ComponentIncludeExposeItem<V = any> = {
    name: string;
    method?: string;
    defaultValue?: V;
    type?: 'string' | 'boolean' | 'number';
};