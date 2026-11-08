import type { Component } from 'vue'
import type { ItemList } from '@dxtmisha/functional-basic'
import type { ConstrBind } from './constructorTypes'

/** Stored component and its default properties / Сохранённый компонент и его свойства по умолчанию */
export type ComponentStorageData<
  C extends Component = Component,
  P extends ItemList = ItemList
> = {
  /** Vue component / Vue компонент */
  component: C
  /** Default component properties / Свойства компонента по умолчанию */
  props?: P
}

/** Component item for registration in storage / Элемент компонента для регистрации в хранилище */
export type ComponentStorageItem<
  C extends Component = Component,
  P extends ItemList = ItemList
> = ComponentStorageData<C, P> & {
  /** Component name / Название компонента */
  name: string
}

/** List of components for registration in storage / Список компонентов для регистрации в хранилище */
export type ComponentStorageList = ComponentStorageItem[]

/** Returned component and merged properties from storage / Возвращаемый компонент и объединённые свойства из хранилища */
export type ComponentStorageReturn<
  C extends Component = Component,
  P extends ItemList = ItemList
> = {
  /** Vue component / Vue компонент */
  component: C
  /** Merged component properties / Объединённые свойства компонента */
  props: ConstrBind<P>
}
