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
      id: 'FieldCancel',
      name: {
        en: 'Cancel button',
        ru: 'Кнопка очистки'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent cancel="auto" label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent cancel="auto" :cancel-show="true" label="auto + show">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent cancel="always" label="always">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </DesignComponent>
        </div>
      `
    },
    {
      id: 'FieldNavigation',
      name: {
        en: 'Navigation & arrows',
        ru: 'Навигация / стрелки'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent arrow-carousel label="carousel (start)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 1" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent arrow-carousel label="carousel (end)" :disabled-next="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 9" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent arrow-stepper align="center" label="stepper (center)">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="42" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent arrow-stepper label="stepper (prev off)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="0" readonly/>
            </template>
          </DesignComponent>
        </div>
      `
    },
    {
      id: 'FieldSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true" style="max-width:280px">
          <DesignComponent isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </DesignComponent>
        </DesignSkeleton>
      `
    },
    {
      id: 'FieldValue',
      name: {
        en: 'Value state',
        ru: 'Состояние значения'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="empty" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent label="value" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Hello" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent label="forced (isValue)" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" placeholder="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent label="value + isValue" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Data" readonly/>
            </template>
          </DesignComponent>
        </div>
      `
    },
    {
      id: 'FieldWidth',
      name: {
        en: 'Width',
        ru: 'Ширина'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent width="320px" label="320px">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent width="50%" label="50%">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent width="min(100%,320px)" label="min(...)" >
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </DesignComponent>
        </div>
      `
    },
    {
      id: 'FieldSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent
          :cancelShow="true"
          label="Label prop"
          icon="home"
          icon-trailing="close"
        >
          <template #default="{id, className}">
            <input :id="id" :class="className" value="Value" readonly/>
          </template>
          <template #leading>Leading slot</template>
          <template #trailing>Trailing slot</template>
          <template #label><b>Label slot</b></template>
          <template #prefix>Prefix slot</template>
          <template #suffix>Suffix slot</template>
          <template #caption>Caption slot</template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Field'} type={'field'}/>

<StorybookDescriptions componentName={'Field'} type={'value'}/>
<Canvas of={Component.FieldValue}/>

<StorybookDescriptions componentName={'Field'} type={'width'}/>
<Canvas of={Component.FieldWidth}/>

<StorybookDescriptions componentName={'Field'} type={'cancel'}/>
<Canvas of={Component.FieldCancel}/>

<StorybookDescriptions componentName={'Field'} type={'arrows'}/>
<Canvas of={Component.FieldNavigation}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.FieldSkeleton}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Event'} type={'clickLite'}/>
    `,
    slots: `
<Canvas of={Component.FieldSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'} />
<StorybookDescriptions componentName={'Field'} type={'slot.leading'} />
<StorybookDescriptions componentName={'Field'} type={'slot.trailing'} />
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
    `
  }
}
