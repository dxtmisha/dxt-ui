import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import snackbarEn from './snackbar.en.mdx'
import snackbarRu from './snackbar.ru.mdx'

/**
 * MDX files for Snackbar component
 *
 * MDX файлы для компонента Snackbar
 */
export const wikiMdxSnackbar: StorybookComponentsMdxItem = {
  name: 'Snackbar',
  descriptions: {
    snackbar: {
      en: snackbarEn,
      ru: snackbarRu
    }
  }
}
