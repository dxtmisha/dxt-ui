import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import detailEn from './detail.en.mdx'
import detailRu from './detail.ru.mdx'
import valueEn from './value.en.mdx'
import valueRu from './value.ru.mdx'
import isSelectedEn from './isSelected.en.mdx'
import isSelectedRu from './isSelected.ru.mdx'
import selectedListEn from './selectedList.en.mdx'
import selectedListRu from './selectedList.ru.mdx'
import selectedNamesEn from './selectedNames.en.mdx'
import selectedNamesRu from './selectedNames.ru.mdx'
import selectedValuesEn from './selectedValues.en.mdx'
import selectedValuesRu from './selectedValues.ru.mdx'

export const wikiMdxExpose: StorybookComponentsMdxItem = {
  name: 'Expose',
  descriptions: {
    detail: {
      en: detailEn,
      ru: detailRu
    },
    value: {
      en: valueEn,
      ru: valueRu
    },
    isSelected: {
      en: isSelectedEn,
      ru: isSelectedRu
    },
    selectedList: {
      en: selectedListEn,
      ru: selectedListRu
    },
    selectedNames: {
      en: selectedNamesEn,
      ru: selectedNamesRu
    },
    selectedValues: {
      en: selectedValuesEn,
      ru: selectedValuesRu
    }
  }
}
