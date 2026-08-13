import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import dropzoneEn from './dropzone.en.mdx'
import dropzoneRu from './dropzone.ru.mdx'

/**
 * MDX descriptions for the Dropzone component
 *
 * MDX описания для компонента Dropzone
 */
export const wikiMdxDropzone: StorybookComponentsMdxItem = {
  name: 'Dropzone',
  descriptions: {
    dropzone: {
      en: dropzoneEn,
      ru: dropzoneRu
    }
  }
}
