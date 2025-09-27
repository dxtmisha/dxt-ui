import type { PropertyItem } from './propertyTypes'

export type DesignStructureState = {
  index: string
  type: string
  item: PropertyItem
  className?: string
  state: DesignStructureState[]
}
export type DesignStructureStateList = DesignStructureState['state']

export type DesignStructureClassesItem = {
  index: string
  className: string
  full: boolean
}
export type DesignStructureClassesList = DesignStructureClassesItem[]

export type DesignStructureItemSub = {
  name: string
  index: string
  value: (string | boolean)[]
  state: DesignStructureItemSub[]
}

export type DesignStructureItem = {
  name: string
  index: string
  type: string
  className?: string
  value: (string | boolean)[]
  valueAll: (string | boolean)[]
  state: DesignStructureItemSub[]
  style?: boolean
  default?: string | number | boolean
  category?: string
}
export type DesignStructureList = Record<string, DesignStructureItem>

export type DesignTypescriptProp = {
  name: string
  type: string
  option?: string[]
  description?: string
}
export type DesignTypescriptProps = DesignTypescriptProp[]

export type DesignTypescriptItem = {
  name: string
  props: DesignTypescriptProps
}
export type DesignTypescriptList = DesignTypescriptItem[]
