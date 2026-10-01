import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import clockPeriodEn from './clockPeriod.en.mdx'
import clockPeriodRu from './clockPeriod.ru.mdx'
import eventEn from './event.en.mdx'
import eventRu from './event.ru.mdx'
import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'

/**
 * MDX files for ClockPeriod component
 *
 * MDX файлы для компонента ClockPeriod
 */
export const wikiMdxClockPeriod: StorybookComponentsMdxItem = {
  name: 'ClockPeriod',
  descriptions: {
    clockPeriod: {
      en: clockPeriodEn,
      ru: clockPeriodRu
    },
    events: {
      en: eventEn,
      ru: eventRu
    },
    expose: {
      en: exposeEn,
      ru: exposeRu
    }
  }
}
