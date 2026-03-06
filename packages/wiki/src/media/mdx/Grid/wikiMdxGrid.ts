import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import gridEn from './grid.en.mdx'
import gridRu from './grid.ru.mdx'

/**
 * MDX files for Grid component
 *
 * MDX файлы для компонента Grid
 */
export const wikiMdxGrid: StorybookComponentsMdxItem = {
  name: 'Grid',
  descriptions: {
    grid: {
      en: gridEn,
      ru: gridRu
    }
  }
}
