import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'string', option: ['menu', 'menuWindow', 'modal', 'modalDynamic', 'actionSheetRight', 'actionSheetBottom', 'static', 'actionSheet', 'actionSheetToModal', 'autoStaticSm', 'autoStaticMd', 'autoStaticLg', 'autoStaticXl', 'autoStatic2xl'] },
  { name: 'alignment', type: 'string', option: ['top', 'left', 'center', 'topRight', 'topLeft', 'topFull', 'right', 'rightFull', 'bottom', 'bottomRight', 'bottomLeft', 'bottomFull', 'leftFull'] },
  { name: 'ariaDescribedby', type: 'string | undefined' },
  { name: 'ariaHaspopup', type: 'string', option: ['menu', 'dialog', 'grid', 'listbox', 'tree', 'true', 'false'] },
  { name: 'ariaLabelledby', type: 'string | undefined' },
  { name: 'autoClose', type: 'boolean | undefined' },
  { name: 'autoTabIndex', type: 'boolean | undefined' },
  { name: 'axis', type: 'string', option: ['x', 'y', 'on'] },
  { name: 'beforeClosing', type: '(() => NormalOrPromise<boolean>) | undefined' },
  { name: 'beforeOpening', type: '(() => NormalOrPromise<boolean>) | undefined' },
  { name: 'closeButton', type: 'boolean | undefined' },
  { name: 'closeMobileHide', type: 'boolean | undefined' },
  { name: 'closeOnEsc', type: 'boolean | undefined' },
  { name: 'closing', type: '(() => NormalOrPromise<boolean>) | undefined' },
  { name: 'contextmenu', type: 'boolean | undefined' },
  { name: 'dense', type: 'boolean | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'divider', type: 'boolean | undefined' },
  { name: 'embedded', type: 'boolean | undefined' },
  { name: 'flash', type: 'boolean | undefined' },
  { name: 'fullscreen', type: 'boolean | undefined' },
  { name: 'height', type: 'string | undefined', option: ['auto', 'max', 'sm', 'md', 'lg', 'custom'] },
  { name: 'hide', type: 'boolean | undefined' },
  { name: 'iconClose', type: 'IconValue<IconProps> | undefined' },
  { name: 'image', type: 'string | ConstrBind<ImageProps> | undefined' },
  { name: 'imagePosition', type: 'string', option: ['top', 'left'] },
  { name: 'imageSize', type: 'string', option: ['sm', 'md', 'lg', 'quarter', 'half'] },
  { name: 'indent', type: 'number | undefined' },
  { name: 'inDom', type: 'boolean | undefined' },
  { name: 'inert', type: 'boolean | undefined' },
  { name: 'modelOpen', type: 'boolean | undefined' },
  { name: 'onUpdate:modelOpen', type: '((value: boolean) => void) | undefined' },
  { name: 'onUpdate:open', type: '((value: boolean) => void) | undefined' },
  { name: 'open', type: 'boolean | undefined' },
  { name: 'opening', type: '(() => NormalOrPromise<boolean>) | undefined' },
  { name: 'openOnArrowDown', type: 'boolean | undefined' },
  { name: 'origin', type: 'string', option: ['top', 'left', 'center', 'right', 'bottom', 'topToBottom', 'rightToLeft', 'bottomToTop', 'leftToRight'] },
  { name: 'overElement', type: 'ElementOrString<HTMLElement> | undefined' },
  { name: 'overscroll', type: 'boolean | undefined' },
  { name: 'persistent', type: 'boolean | undefined' },
  { name: 'preparation', type: '(() => NormalOrPromise<void>) | undefined' },
  { name: 'role', type: 'string | undefined' },
  { name: 'scrollbarAttrs', type: 'ConstrBind<ScrollbarProps> | undefined' },
  { name: 'staticMode', type: 'boolean | undefined' },
  { name: 'textClose', type: 'TextValue' },
  { name: 'width', type: 'string | undefined', option: ['auto', 'max', 'sm', 'md', 'lg', 'custom'] },
  { name: 'widthMatch', type: 'boolean | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'control', description: `Control slot for window management/
Слот управления для управления окном`, properties: [{ name: 'props', type: '(WindowControlItem) | undefined' }] },
  { name: 'default', description: `Default slot for main content/
Основной слот для главного содержимого`, properties: [{ name: 'props', type: '(WindowControlItem) | undefined' }] },
  { name: 'footer', description: `Footer slot for window bottom/
Слот подвала для низа окна`, properties: [{ name: 'props', type: '(WindowControlItem) | undefined' }] },
  { name: 'title', description: `Title slot for window header/
Слот заголовка для шапки окна`, properties: [{ name: 'props', type: '(WindowControlItem) | undefined' }] }
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
