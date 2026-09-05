import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import formEn from './form.en.mdx'
import formRu from './form.ru.mdx'
import nativeEn from './native.en.mdx'
import nativeRu from './native.ru.mdx'
import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'
import eventSubmitEn from './event.submit.en.mdx'
import eventSubmitRu from './event.submit.ru.mdx'
import eventsEn from './events.en.mdx'
import eventsRu from './events.ru.mdx'

/**
 * MDX files for Form component
 *
 * MDX файлы для компонента Form
 */
export const wikiMdxForm: StorybookComponentsMdxItem = {
  name: 'Form',
  descriptions: {
    'event.submit': {
      en: eventSubmitEn,
      ru: eventSubmitRu
    },
    'events': {
      en: eventsEn,
      ru: eventsRu
    },
    'expose': {
      en: exposeEn,
      ru: exposeRu
    },
    'form': {
      en: formEn,
      ru: formRu
    },
    'native': {
      en: nativeEn,
      ru: nativeRu
    }
  }
}
