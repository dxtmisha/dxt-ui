import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'actionsAttrs', type: 'ConstrBind<ActionsProps>' },
  { name: 'actionsHide', type: 'boolean' },
  { name: 'actionsList', type: '(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined' },
  { name: 'actionsSecondary', type: '(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'image', type: 'string | ConstrBind<ImageProps>' },
  { name: 'imageAttrs', type: 'ConstrBind<ImageProps>' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg'] }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'context', properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'description', description: `Description slot/ Слот описания`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'actions', description: `Click event for actions/ Событие клика для действий`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'actionsLite', description: `Simple click event for actions/ Простое событие клика для действий`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'load', description: `Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`, properties: [{ name: 'image', type: 'ImageEventData' }] }
  // :eventsList [!] System label / Системная метка
]

export const PlaceholderWikiData: WikiDataItem = {
  component: 'Placeholder',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
