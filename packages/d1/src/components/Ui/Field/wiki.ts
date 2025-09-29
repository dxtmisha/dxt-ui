import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string', option: ['center', 'right', 'left'] },
  { name: 'arrowCarousel', type: 'boolean' },
  { name: 'arrowStepper', type: 'boolean' },
  { name: 'basic', type: 'boolean' },
  { name: 'block', type: 'boolean' },
  { name: 'boxed', type: 'boolean' },
  { name: 'cancel', type: 'string', option: ['auto', 'always'] },
  { name: 'cancelShow', type: 'boolean' },
  { name: 'caption', type: 'string | number' },
  { name: 'classic', type: 'boolean' },
  { name: 'counter', type: 'string | number' },
  { name: 'counterShow', type: 'boolean' },
  { name: 'counterTemplate', type: 'string' },
  { name: 'counterTop', type: 'boolean' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'disabledNext', type: 'boolean' },
  { name: 'disabledPrevious', type: 'boolean' },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounterPropsBasic>' },
  { name: 'fieldLabelAttrs', type: 'ConstrBind<FieldLabelPropsBasic<FieldCounterPropsBasic, ProgressPropsBasic>>' },
  { name: 'fieldMessageAttrs', type: 'ConstrBind<FieldMessagePropsBasic<FieldCounterPropsBasic>>' },
  { name: 'filled', type: 'boolean' },
  { name: 'focus', type: 'boolean' },
  { name: 'forceShowMessage', type: 'boolean' },
  { name: 'helperMessage', type: 'string' },
  { name: 'icon', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconArrowLeft', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconArrowRight', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconClose', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconMinus', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconPlus', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconTrailing', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconTrailingDirOnly', type: 'boolean' },
  { name: 'iconTrailingPalette', type: 'boolean' },
  { name: 'iconTrailingTurnOnly', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'isValue', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'loading', type: 'boolean | ConstrBind<ProgressPropsBasic>' },
  { name: 'maxlength', type: 'string | number' },
  { name: 'outlined', type: 'boolean' },
  { name: 'prefix', type: 'string | number' },
  { name: 'readonly', type: 'boolean' },
  { name: 'required', type: 'boolean' },
  { name: 'selected', type: 'boolean' },
  { name: 'suffix', type: 'string | number' },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric' },
  { name: 'tonal', type: 'boolean' },
  { name: 'validationMessage', type: 'string' },
  { name: 'value', type: 'any' },
  { name: 'width', type: 'string', option: ['custom'] }
  // :propsList [!] System label / Системная метка
]

export const FieldWikiStorybook = new WikiStorybook(
  'Field',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
