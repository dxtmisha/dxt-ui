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
  enterKeyHint: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.form,
      type: 'string',
      options: ['enter', 'done', 'go', 'next', 'previous', 'search', 'send'],
      description: {
        en: 'Hint for the enter key label on virtual keyboards',
        ru: 'Подсказка для метки клавиши Enter на виртуальных клавиатурах'
      }
    }
  },
  form: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.form,
      type: 'string',
      description: {
        en: 'ID of the form element this input belongs to',
        ru: 'ID элемента формы, к которой относится данный инпут'
      }
    }
  },
  inputMode: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.form,
      type: 'string',
      options: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'],
      description: {
        en: 'Hint for the type of virtual keyboard to display',
        ru: 'Подсказка для типа виртуальной клавиатуры'
      }
    }
  },
  match: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.form,
      type: 'string',
      description: {
        en: 'Reference to another field for value matching validation (e.g., password confirmation)',
        ru: 'Ссылка на другое поле для валидации совпадения значений (например, подтверждение пароля)'
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
  min: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.form,
      type: ['number', 'string'],
      description: {
        en: 'Minimum value',
        ru: 'Минимальное значение'
      }
    }
  },
  minlength: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.form,
      type: ['number', 'string'],
      description: {
        en: 'Minimum required characters',
        ru: 'Минимально необходимое количество символов'
      }
    }
  },
  pattern: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.form,
      type: 'string',
      description: {
        en: 'Regular expression pattern for input validation',
        ru: 'Регулярное выражение для валидации ввода'
      }
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
  },
  spellcheck: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.form,
      description: {
        en: 'Enables or disables spell checking for the input',
        ru: 'Включает или отключает проверку орфографии для ввода'
      }
    }
  },
  step: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.form,
      type: ['number', 'string'],
      description: {
        en: 'Step size for numeric inputs',
        ru: 'Размер шага для числовых инпутов'
      }
    }
  },
  tabindex: {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.form,
      type: 'number',
      description: {
        en: 'Tab order position for keyboard navigation',
        ru: 'Позиция порядка табуляции для навигации с клавиатуры'
      }
    }
  },
  validationCode: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.form,
      type: ['string', 'object'],
      description: {
        en: 'Custom validation error messages or validity state map',
        ru: 'Пользовательские сообщения об ошибках валидации или карта состояний валидности'
      }
    }
  }
}
