import { type StorybookArgsToList, StorybookCategory, StorybookControl } from '../../types/storybookTypes'

export const wikiForm: StorybookArgsToList = {
  arrow: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.form,
      type: 'string',
      options: ['auto', 'carousel', 'stepper', 'none'],
      description: {
        en: 'Arrow controls type for numeric input (auto, carousel, stepper, none)',
        ru: 'Тип стрелочных элементов управления для числового ввода (auto, carousel, stepper, none)'
      }
    }
  },
  arrowStep: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.form,
      type: ['number', 'string'],
      description: {
        en: 'Step size for input arrows (type="number" only) when using increment/decrement buttons',
        ru: 'Размер шага для стрелок ввода (только для type="number") при использовании кнопок увеличения/уменьшения'
      }
    }
  },
  arrowAlign: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.form,
      type: 'string',
      options: ['center', 'right', 'left'],
      description: {
        en: 'Sets alignment position of arrow buttons within the field',
        ru: 'Задает позицию выравнивания кнопок-стрелок внутри поля'
      }
    }
  },
  autocapitalize: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.form,
      type: 'string',
      description: {
        en: 'Auto capitalization mode for text input (off, none, sentences, words, characters)',
        ru: 'Режим автоматической капитализации для текстового ввода (off, none, sentences, words, characters)'
      }
    }
  },
  autocomplete: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.form,
      type: 'string',
      description: {
        en: 'Autocomplete hint for browser autofill feature (e.g., email, name, tel)',
        ru: 'Подсказка автозаполнения для функции автозаполнения браузера (например, email, name, tel)'
      }
    }
  },
  autocorrect: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.form,
      type: 'string',
      description: {
        en: 'Autocorrect mode for iOS/Safari (on or off)',
        ru: 'Режим автокоррекции для iOS/Safari (on или off)'
      }
    }
  },
  autofocus: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.form,

      description: {
        en: 'Automatically focuses the element when the page loads',
        ru: 'Автоматически устанавливает фокус на элемент при загрузке страницы'
      }
    }
  },
  max: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.form,
      type: ['number', 'string'],
      description: {
        en: 'Maximum value',
        ru: 'Максимальное значение'
      }
    }
  },
  maxlength: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.form,
      type: ['number', 'string'],
      description: {
        en: 'Maximum allowed characters',
        ru: 'Максимально допустимое количество символов'
      },
      value: 100
    }
  },
  required: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.form,
      description: {
        en: 'Marks the field as required and shows the required indicator',
        ru: 'Помечает поле как обязательное и показывает индикатор обязательности'
      }
    }
  }
}
