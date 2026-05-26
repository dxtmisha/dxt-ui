import type { ConstrBind, RefOrNormal } from '@dxtmisha/functional'

/** Component properties type or function returning properties / Тип свойств компонента или функция, возвращающая свойства */
export type ComponentIncludeProps<Props extends Record<string, any>> = Readonly<Props> | (() => Props)
/** Component properties attribute names / Имена атрибутов свойств компонента */
export type ComponentIncludePropsAttrs<Props extends Record<string, any>> = keyof Props | undefined
/**
 * Extra attributes type for the component or function returning them /
 * Дополнительный тип атрибутов для компонента или функция, возвращающая их
 */
export type ComponentIncludeExtra<PropsExtra extends Record<string, any>> = RefOrNormal<ConstrBind<PropsExtra>> | (() => ConstrBind<PropsExtra>) | undefined

/**
 * Shape of a sub-component exposed API method configuration /
 * Структура конфигурации экспортируемого API-метода субкомпонента
 */
export type ComponentIncludeExposeItem<V = any> = {
  /** Name of the exposed method / Имя экспортируемого метода */
  name: string
  /** Sub-component method name to proxy / Имя метода субкомпонента для проксирования */
  method?: string
  /** Default value if the method returns undefined / Значение по умолчанию, если метод возвращает undefined */
  defaultValue?: V
  /** Type of the returned value for casting / Тип возвращаемого значения для приведения */
  type?: 'string' | 'boolean' | 'number'
}
