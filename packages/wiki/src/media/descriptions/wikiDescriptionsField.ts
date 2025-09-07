import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Field component
 *
 * Описания свойств компонента Field
 */
export const wikiDescriptionsField: StorybookComponentsDescriptionItem = {
  name: 'Field',
  description: {
    en: 'Base container for form controls that composes label, messages, counter, icons and progress',
    ru: 'Базовый контейнер для полей ввода, который собирает метку, сообщения, счётчик, иконки и прогресс'
  },
  possibilities: {
    en: [
      'composes FieldLabel, FieldMessage, FieldCounter, Progress and icon includes',
      'handles states: focus, disabled, readonly, selected, block',
      'supports prefix, suffix and caption slots',
      'validation highlighting based on validationMessage and forceShowMessage',
      'optional cancel and navigation (arrow) icons with visibility flags',
      'counter position control with counterTop',
      'integrated helpers for sizing and icons (FieldSize, FieldIcons)'
    ],
    ru: [
      'композит из FieldLabel, FieldMessage, FieldCounter, Progress и включений иконок',
      'обрабатывает состояния: focus, disabled, readonly, selected, block',
      'поддерживает слоты prefix, suffix и caption',
      'подсветка валидации на основе validationMessage и forceShowMessage',
      'дополнительные иконки отмены и навигации (стрелки) с флагами видимости',
      'управление позицией счётчика через counterTop',
      'встроенные помощники для размеров и иконок (FieldSize, FieldIcons)'
    ]
  },
  import: [],
  render: `
      <DesignComponent v-bind="args">
        <template v-slot:default="{id, className}">
          <input :value="args.value" :id="id" :class="className" readonly/>
        </template>
      </DesignComponent>
    `,
  stories: [
    {
      id: 'FieldSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:280px">
          <DesignComponent isSkeleton label="Skeleton" counter="12" helper-message="Helper text">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </DesignComponent>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Field'} type={'field'}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.FieldSkeleton}/>
    `
  }
}
