import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * Descriptions of MotionTransform properties
 *
 * Описания свойств MotionTransform
 */
export const wikiMotionTransform: StorybookArgsToList = {
  'motionTransform.animationHeadPosition': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      type: 'string',
      options: [],
      description: {
        en: 'Head behavior during animations',
        ru: 'Поведение Head во время анимаций'
      }
    }
  },
  'motionTransform.animationShow': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enable or disable show/hide animations',
        ru: 'Включение или отключение анимаций показа/скрытия'
      }
    }
  },
  'motionTransform.autoClose': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Automatically close on the outside click',
        ru: 'Автоматическое закрытие при клике снаружи'
      }
    }
  },
  'motionTransform.ignore': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Element id or selector to ignore in outside click checks',
        ru: 'Идентификатор элемента или селектор, который игнорируется при проверках клика снаружи'
      }
    }
  },
  'motionTransform.ignoreSelector': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'CSS selector to ignore in outside click checks',
        ru: 'CSS-селектор, который игнорируется при проверках клика снаружи'
      }
    }
  },
  'motionTransform.section': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Enable section styling mode',
        ru: 'Включение режима стилизации секции'
      }
    },
    isDemo: true,
    demoOptions: {
      open: true
    }
  }
}
