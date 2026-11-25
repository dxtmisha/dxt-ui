import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import inputFileDropzoneEn from './inputFileDropzone.en.mdx'
import inputFileDropzoneRu from './inputFileDropzone.ru.mdx'
import inputFileDropzoneAddEn from './event.add.en.mdx'
import inputFileDropzoneAddRu from './event.add.ru.mdx'
import inputFileDropzoneRejectEn from './event.reject.en.mdx'
import inputFileDropzoneRejectRu from './event.reject.ru.mdx'

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
    },
    'event.reject': {
      en: inputFileDropzoneRejectEn,
      ru: inputFileDropzoneRejectRu
    }
  }
}
