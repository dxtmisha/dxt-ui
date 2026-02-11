import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

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

export const WindowWikiStorybook = new WikiStorybook(
  'Window',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
