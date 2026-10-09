import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiInputFileItem object contains descriptions of all properties for the InputFileItem component
 *
 * Объект wikiInputFileItem содержит описание всех свойств для компонента InputFileItem
 */
export const wikiInputFileItem: StorybookArgsToList = {
  'inputFileItem.value': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      type: 'FieldFileValue',
      description: {
        en: 'File data value containing file metadata, source, name, size, and crop parameters',
        ru: 'Значение данных файла, содержащее метаданные файла, источник, имя, размер и параметры кадрирования'
      },
      value: {
        id: '1',
        name: 'image.jpg',
        type: 'image/jpeg',
        size: 2097152,
        width: 1920,
        height: 1080,
        lastModified: 1728518400000,
        value: 'https://picsum.photos/1920/1080?random=1',
        thumbnail: 'https://picsum.photos/200/200?random=1',
        crop: [0, 0, 0, 0]
      }
    }
  }
}
