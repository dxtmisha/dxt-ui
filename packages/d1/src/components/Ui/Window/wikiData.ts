import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'string', option: ['menu', 'menuWindow', 'modal', 'modalDynamic', 'actionSheetRight', 'actionSheetBottom', 'static', 'actionSheet', 'actionSheetToModal', 'autoStaticSm', 'autoStaticMd', 'autoStaticLg', 'autoStaticXl', 'autoStatic2xl'] },
  { name: 'alignment', type: 'string', option: ['top', 'left', 'center', 'topRight', 'topLeft', 'topFull', 'right', 'rightFull', 'bottom', 'bottomRight', 'bottomLeft', 'bottomFull', 'leftFull'] },
  { name: 'ariaDescribedby', type: 'string' },
  { name: 'ariaHaspopup', type: 'string', option: ['menu', 'dialog', 'grid', 'listbox', 'tree', 'true', 'false'] },
  { name: 'ariaLabelledby', type: 'string' },
  { name: 'autoClose', type: 'boolean' },
  { name: 'autoTabIndex', type: 'boolean' },
  { name: 'axis', type: 'string', option: ['x', 'y', 'on'] },
  { name: 'beforeClosing', type: '() => NormalOrPromise<boolean>' },
  { name: 'beforeOpening', type: '() => NormalOrPromise<boolean>' },
  { name: 'closeButton', type: 'boolean' },
  { name: 'closeMobileHide', type: 'boolean' },
  { name: 'closeOnEsc', type: 'boolean' },
  { name: 'closing', type: '() => NormalOrPromise<boolean>' },
  { name: 'contextmenu', type: 'boolean' },
  { name: 'dense', type: 'boolean' },
  { name: 'disabled', type: 'boolean' },
  { name: 'divider', type: 'boolean' },
  { name: 'embedded', type: 'boolean' },
  { name: 'flash', type: 'boolean' },
  { name: 'fullscreen', type: 'boolean' },
  { name: 'height', type: 'string', option: ['auto', 'max', 'sm', 'md', 'lg', 'custom'] },
  { name: 'hide', type: 'boolean' },
  { name: 'iconClose', type: 'IconValue<Icon>' },
  { name: 'image', type: 'string | ConstrBind<Image>' },
  { name: 'imagePosition', type: 'string', option: ['top', 'left'] },
  { name: 'imageSize', type: 'string', option: ['sm', 'md', 'lg', 'quarter', 'half'] },
  { name: 'indent', type: 'number' },
  { name: 'inDom', type: 'boolean' },
  { name: 'inert', type: 'boolean' },
  { name: 'modelOpen', type: 'boolean' },
  { name: 'onUpdate:modelOpen', type: '(value: boolean) => void' },
  { name: 'onUpdate:open', type: '(value: boolean) => void' },
  { name: 'open', type: 'boolean' },
  { name: 'opening', type: '() => NormalOrPromise<boolean>' },
  { name: 'openOnArrowDown', type: 'boolean' },
  { name: 'origin', type: 'string', option: ['top', 'left', 'center', 'right', 'bottom', 'topToBottom', 'rightToLeft', 'bottomToTop', 'leftToRight'] },
  { name: 'overElement', type: 'ElementOrString<HTMLElement>' },
  { name: 'overscroll', type: 'boolean' },
  { name: 'persistent', type: 'boolean' },
  { name: 'preparation', type: '() => NormalOrPromise<void>' },
  { name: 'role', type: 'string' },
  { name: 'scrollbarAttrs', type: 'ConstrBind<Scrollbar>' },
  { name: 'staticMode', type: 'boolean' },
  { name: 'textClose', type: 'TextValue' },
  { name: 'width', type: 'string', option: ['auto', 'max', 'sm', 'md', 'lg', 'custom'] },
  { name: 'widthMatch', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'control', description: `Control slot for window management/
Слот управления для управления окном`, properties: [{ name: 'props', type: 'WindowControlItem' }] },
  { name: 'default', description: `Default slot for main content/
Основной слот для главного содержимого`, properties: [{ name: 'props', type: 'WindowControlItem' }] },
  { name: 'footer', description: `Footer slot for window bottom/
Слот подвала для низа окна`, properties: [{ name: 'props', type: 'WindowControlItem' }] },
  { name: 'title', description: `Title slot for window header/
Слот заголовка для шапки окна`, properties: [{ name: 'props', type: 'WindowControlItem' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'load', description: `Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`, properties: [{ name: 'image', type: 'ImageEventData' }] },
  { name: 'scrollbarBottom', description: `Event triggered when reaching the bottom/ Событие при достижении низа`, properties: [{ name: 'isBottom', type: 'boolean' }] },
  { name: 'scrollbarEdge', description: `Event triggered when reaching any edge/ Событие при достижении любого края`, properties: [{ name: 'isTop', type: 'boolean' }, { name: 'isBottom', type: 'boolean' }, { name: 'edge', type: 'ScrollbarEdgeType' }] },
  { name: 'scrollbarLeaveBottom', description: `Event triggered when leaving the bottom position/ Событие при уходе с нижней позиции` },
  { name: 'scrollbarLeaveTop', description: `Event triggered when leaving the top position/ Событие при уходе с верхней позиции` },
  { name: 'scrollbarReachBottom', description: `Event triggered when precisely reaching the bottom position/ Событие при точном достижении нижней позиции` },
  { name: 'scrollbarReachTop', description: `Event triggered when precisely reaching the top position/ Событие при точном достижении верхней позиции` },
  { name: 'scrollbarTop', description: `Event triggered when reaching the top/ Событие при достижении верха`, properties: [{ name: 'isTop', type: 'boolean' }] },
  { name: 'update:modelOpen', description: `Update model open event/ Событие обновления открытия модели`, properties: [{ name: 'value', type: 'boolean' }] },
  { name: 'update:open', description: `Update open event/ Событие обновления открытия`, properties: [{ name: 'value', type: 'boolean' }] },
  { name: 'window', description: `Window event triggered on state change/ Событие окна при изменении состояния`, properties: [{ name: 'options', type: 'WindowEmitOptions' }] }
  // :eventsList [!] System label / Системная метка
]

export const WindowWikiData: WikiDataItem = {
  component: 'Window',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
