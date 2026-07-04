import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputCodeItem component
 *
 * Описания свойств компонента InputCodeItem
 */
export const wikiDescriptionsInputCodeItem: StorybookComponentsDescriptionItem = {
  name: 'InputCodeItem',
  description: {
    en: 'An individual input field cell representing a single character or digit within a verification code sequence',
    ru: 'Отдельная ячейка ввода, представляющая собой один символ или цифру в составе проверочного кода'
  },
  possibilities: {
    en: [
      'represents a single digit/character entry field',
      'custom RegExp character validation (match property)',
      'keystroke intercepting and focus routing (arrows, backspace)',
      'character hiding support (hide property for PINs)'
    ],
    ru: [
      'представляет поле ввода для одного символа/цифры',
      'пользовательская проверка символа с помощью RegExp (свойство match)',
      'перехват нажатий клавиш и перенаправление фокуса (стрелки, backspace)',
      'поддержка скрытия символов (свойство hide для PIN-кодов)'
    ]
  },
  stories: [
    {
      id: 'InputCodeItemBasic',
      name: {
        en: 'Basic',
        ru: 'Базовый'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent value="0" />
          <DesignComponent hide value="1" />
          <DesignComponent success value="2" />
          <DesignComponent error value="3" />
          <DesignComponent disabled value="4" />
        </div>
      `
    },
    {
      id: 'InputCodeItemSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:320px">
          <div class="wiki-storybook-flex">
            <DesignComponent isSkeleton value="0" />
            <DesignComponent isSkeleton value="1" />
            <DesignComponent isSkeleton value="2" />
          </div>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputCodeItem'} type={'inputCodeItem'}/>
<Canvas of={Component.InputCodeItemBasic}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.InputCodeItemSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'InputCodeItem'} type={'events'}/>
    `,
    expose: `
<StorybookDescriptions componentName={'InputCodeItem'} type={'expose'}/>
    `
  },
  ai: {
    description: `
An individual code input cell managed by InputCode.
Handles single key entries, RegExp check via match prop, hidden values via hide, and emits focus/input/paste/backspace.
    `
  }
}
