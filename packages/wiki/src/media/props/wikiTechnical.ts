import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiTechnical object contains common technical properties for all components
 *
 * Объект wikiTechnical содержит общие технические свойства для всех компонентов
 */
export const wikiTechnical: StorybookArgsToList = {
  modelOpen: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for open state (v-model:open)',
        ru: 'Двусторонняя привязка состояния открытия (v-model:open)'
      }
    }
  },
  modelValue: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for component value (v-model)',
        ru: 'Двусторонняя привязка значения компонента (v-model)'
      }
    }
  }
}
