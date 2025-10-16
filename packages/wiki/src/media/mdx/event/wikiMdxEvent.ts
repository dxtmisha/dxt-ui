import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import eventsActionsEn from './events.actions.en.mdx'
import eventsActionsRu from './events.actions.ru.mdx'
import eventsBarsEn from './events.bars.en.mdx'
import eventsBarsRu from './events.bars.ru.mdx'
import eventsBeforeinputEn from './events.beforeinput.en.mdx'
import eventsBeforeinputRu from './events.beforeinput.ru.mdx'
import eventsClickEn from './events.click.en.mdx'
import eventsClickRu from './events.click.ru.mdx'
import eventsFocusEn from './events.focus.en.mdx'
import eventsFocusRu from './events.focus.ru.mdx'
import eventsInputEn from './events.input.en.mdx'
import eventsInputRu from './events.input.ru.mdx'
import eventsKeyboardEn from './events.keyboard.en.mdx'
import eventsKeyboardRu from './events.keyboard.ru.mdx'
import eventsPasteEn from './events.paste.en.mdx'
import eventsPasteRu from './events.paste.ru.mdx'
import eventsResetEn from './events.reset.en.mdx'
import eventsResetRu from './events.reset.ru.mdx'

export const wikiMdxEvent: StorybookComponentsMdxItem = {
  name: 'Event',
  descriptions: {
    actions: {
      en: eventsActionsEn,
      ru: eventsActionsRu
    },
    bars: {
      en: eventsBarsEn,
      ru: eventsBarsRu
    },
    beforeinput: {
      en: eventsBeforeinputEn,
      ru: eventsBeforeinputRu
    },
    click: {
      en: eventsClickEn,
      ru: eventsClickRu
    },
    focus: {
      en: eventsFocusEn,
      ru: eventsFocusRu
    },
    input: {
      en: eventsInputEn,
      ru: eventsInputRu
    },
    keyboard: {
      en: eventsKeyboardEn,
      ru: eventsKeyboardRu
    },
    paste: {
      en: eventsPasteEn,
      ru: eventsPasteRu
    },
    reset: {
      en: eventsResetEn,
      ru: eventsResetRu
    }
  }
}
