import type { ConstrBind, RefOrNormal } from '@dxtmisha/functional'

export type ComponentIncludeProps<Props extends Record<string, any>> = Readonly<Props> | (() => Props)
export type ComponentIncludePropsAttrs<Props extends Record<string, any>> = keyof Props | undefined
export type ComponentIncludeExtra<PropsExtra extends Record<string, any>> = RefOrNormal<ConstrBind<PropsExtra>> | (() => ConstrBind<PropsExtra>) | undefined

export type ComponentIncludeExposeItem<V = any> = {
  name: string
  method?: string
  defaultValue?: V
  type?: 'string' | 'boolean' | 'number'
}
