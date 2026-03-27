import type { StorybookArgsToList, StorybookProps, StorybookSlots } from './storybookTypes'

export type WikiDataItem = {
  component: string
  props: StorybookProps
  slots?: StorybookSlots
  events?: StorybookSlots
  defaults: Record<string, any>
  wikiDesign: StorybookArgsToList
}
