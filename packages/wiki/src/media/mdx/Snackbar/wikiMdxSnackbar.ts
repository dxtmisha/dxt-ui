import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import adaptationEn from './adaptation.en.mdx'
import adaptationRu from './adaptation.ru.mdx'
import addEn from './add.en.mdx'
import addRu from './add.ru.mdx'
import positionEn from './position.en.mdx'
import positionRu from './position.ru.mdx'
import snackbarEn from './snackbar.en.mdx'
import snackbarRu from './snackbar.ru.mdx'
import eventShowEn from './event.show.en.mdx'
import eventShowRu from './event.show.ru.mdx'
import eventHideEn from './event.hide.en.mdx'
import eventHideRu from './event.hide.ru.mdx'
import exposeIsItemEn from './expose.isItem.en.mdx'
import exposeIsItemRu from './expose.isItem.ru.mdx'
import exposeAddEn from './expose.add.en.mdx'
import exposeAddRu from './expose.add.ru.mdx'
import exposeRemoveEn from './expose.remove.en.mdx'
import exposeRemoveRu from './expose.remove.ru.mdx'
import exposeClearEn from './expose.clear.en.mdx'
import exposeClearRu from './expose.clear.ru.mdx'

/**
 * MDX files for Snackbar component
 *
 * MDX файлы для компонента Snackbar
 */
export const wikiMdxSnackbar: StorybookComponentsMdxItem = {
  name: 'Snackbar',
  descriptions: {
    'snackbar': {
      en: snackbarEn,
      ru: snackbarRu
    },
    'adaptation': {
      en: adaptationEn,
      ru: adaptationRu
    },
    'add': {
      en: addEn,
      ru: addRu
    },
    'position': {
      en: positionEn,
      ru: positionRu
    },
    'event.show': {
      en: eventShowEn,
      ru: eventShowRu
    },
    'event.hide': {
      en: eventHideEn,
      ru: eventHideRu
    },
    'expose.isItem': {
      en: exposeIsItemEn,
      ru: exposeIsItemRu
    },
    'expose.add': {
      en: exposeAddEn,
      ru: exposeAddRu
    },
    'expose.remove': {
      en: exposeRemoveEn,
      ru: exposeRemoveRu
    },
    'expose.clear': {
      en: exposeClearEn,
      ru: exposeClearRu
    }
  }
}
