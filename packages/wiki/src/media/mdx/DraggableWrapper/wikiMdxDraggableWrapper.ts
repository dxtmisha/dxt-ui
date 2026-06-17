import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import draggableWrapperEn from './draggableWrapper.en.mdx'
import draggableWrapperRu from './draggableWrapper.ru.mdx'
import instructionEn from './instruction.en.mdx'
import instructionRu from './instruction.ru.mdx'
import classesSquareEn from './classesSquare.en.mdx'
import classesSquareRu from './classesSquare.ru.mdx'

/**
 * MDX files for DraggableWrapper component
 *
 * MDX файлы для компонента DraggableWrapper
 */
export const wikiMdxDraggableWrapper: StorybookComponentsMdxItem = {
  name: 'DraggableWrapper',
  descriptions: {
    draggableWrapper: {
      en: draggableWrapperEn,
      ru: draggableWrapperRu
    },
    instruction: {
      en: instructionEn,
      ru: instructionRu
    },
    classesSquare: {
      en: classesSquareEn,
      ru: classesSquareRu
    }
  }
}
