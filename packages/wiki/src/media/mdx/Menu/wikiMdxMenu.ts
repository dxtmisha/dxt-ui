import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import ajaxEn from './ajax.en.mdx'
import ajaxRu from './ajax.ru.mdx'
import menuEn from './menu.en.mdx'
import menuRu from './menu.ru.mdx'

import slotControlEn from './slot.control.en.mdx'
import slotControlRu from './slot.control.ru.mdx'
import slotTitleEn from './slot.title.en.mdx'
import slotTitleRu from './slot.title.ru.mdx'
import slotFooterEn from './slot.footer.en.mdx'
import slotFooterRu from './slot.footer.ru.mdx'
import slotContextTopEn from './slot.contextTop.en.mdx'
import slotContextTopRu from './slot.contextTop.ru.mdx'
import slotContextBottomEn from './slot.contextBottom.en.mdx'
import slotContextBottomRu from './slot.contextBottom.ru.mdx'

/** MDX документация для компонента Menu */
export const wikiMdxMenu: StorybookComponentsMdxItem = {
  name: 'Menu',
  descriptions: {
    'ajax': {
      en: ajaxEn,
      ru: ajaxRu
    },
    'menu': {
      en: menuEn,
      ru: menuRu
    },
    'slot.control': {
      en: slotControlEn,
      ru: slotControlRu
    },
    'slot.title': {
      en: slotTitleEn,
      ru: slotTitleRu
    },
    'slot.footer': {
      en: slotFooterEn,
      ru: slotFooterRu
    },
    'slot.contextTop': {
      en: slotContextTopEn,
      ru: slotContextTopRu
    },
    'slot.contextBottom': {
      en: slotContextBottomEn,
      ru: slotContextBottomRu
    }
  }
}
