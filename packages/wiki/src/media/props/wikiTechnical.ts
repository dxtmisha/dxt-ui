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
  id: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Unique identifier attribute for the element',
        ru: 'Уникальный идентификатор атрибута для элемента'
      }
    }
  },
  labelId: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Unique identifier for the label element',
        ru: 'Уникальный идентификатор для элемента метки'
      }
    }
  },
  messageId: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.technical,
      type: 'string',
      description: {
        en: 'Unique identifier for the message element',
        ru: 'Уникальный идентификатор для элемента сообщения'
      }
    }
  },
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
  modelSelected: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for selected state (v-model:selected)',
        ru: 'Двусторонняя привязка состояния выбора (v-model:selected)'
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
