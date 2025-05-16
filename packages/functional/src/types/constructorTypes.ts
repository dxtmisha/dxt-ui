import type { Ref, PropType } from 'vue'

import type { Undefined } from './basicTypes'
import type {
  RefOrNormal,
  RefType
} from './refTypes'

export type ConstrItem = Record<string, any>
export type ConstrValue<T = any> = {
  value?: T
}

export type ConstrComponent = Record<string, any>
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
  [K in keyof P]?: RefOrNormal<P[K]>
}

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T]
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
  [K in keyof T]: (evt: K, ...args: T[K]) => void
}>>

export type ConstrClassObject = Record<string, boolean>
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject
export type ConstrClassList = Record<string, ConstrClass>
export type ConstrClasses = { main: ConstrClass } & ConstrClassList

export type ConstrStylesItem = string | null
export type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[]

export type ConstrOptions<
  COMP extends ConstrComponent,
  EMITS extends ConstrItem,
  P extends ConstrItem
> = {
  components?: COMP
  compMod?: ConstrComponentMod<P>
  emits?: ConstrEmit<EMITS>
  classes?: RefType<ConstrClasses>
  styles?: RefType<ConstrStyles>
}

export type ConstrSetup<
  E extends Element,
  CLASSES extends ConstrClasses,
  SETUP extends ConstrItem
> = {
  name: string
  element: Ref<E | undefined>
  classes: RefType<CLASSES>
  styles: RefType<ConstrStyles>
} & SETUP

export type ConstrRegistration = {
  flag?: boolean
  translate?: Record<string, string>
}

export type ConstrBind<T> =
  T &
  Record<string, any> &
  {
    class?: ConstrClass
    style?: ConstrStyles
  }

export type ConstrPropItemOptions<T = any> = {
  type?: PropType<T>
  required?: boolean
  default?: any
  validator?(value: any, props: any): boolean
}
export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>
export type ConstrProps<P = Record<string, any>> = {
  [K in keyof P]: ConstrPropItem<P[K]>
}
