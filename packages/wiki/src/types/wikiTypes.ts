import type { StorybookArgsToList, StorybookProps } from './storybookTypes'

export type WikiDataItem = {
  component: string
  props: StorybookProps
  defaults: Record<string, any>
  wikiDesign: StorybookArgsToList
}
