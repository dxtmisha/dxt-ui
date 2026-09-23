import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import inputFileDropzoneEn from './inputFileDropzone.en.mdx'
import inputFileDropzoneRu from './inputFileDropzone.ru.mdx'
import inputFileDropzoneAddEn from './event.add.en.mdx'
import inputFileDropzoneAddRu from './event.add.ru.mdx'

/**
 * MDX files for InputFileDropzone component
 *
 * MDX файлы для компонента InputFileDropzone
 */
export const wikiMdxInputFileDropzone: StorybookComponentsMdxItem = {
  name: 'InputFileDropzone',
  descriptions: {
    'inputFileDropzone': {
      en: inputFileDropzoneEn,
      ru: inputFileDropzoneRu
    },
    'event.add': {
      en: inputFileDropzoneAddEn,
      ru: inputFileDropzoneAddRu
    }
  }
}
