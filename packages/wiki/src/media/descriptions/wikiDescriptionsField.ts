import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Field properties
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
      'handles states: focus, disabled, readonly, selected, block, warning, isValue',
      'supports prefix, suffix, caption, leading and trailing slots',
      'validation and non-blocking warning highlighting based on validationMessage, warning, warningMessage, and forceShowMessage',
      'optional cancel and navigation (arrow) icons with visibility flags',
      'counter position control with counterTop',
      'integrated helpers for sizing, element semantics, and icons (FieldSize, FieldElement, FieldIcons)'
    ],
    ru: [
      'композит из FieldLabel, FieldMessage, FieldCounter, Progress и включений иконок',
      'обрабатывает состояния: focus, disabled, readonly, selected, block, warning, isValue',
      'поддерживает слоты prefix, suffix, caption, leading и trailing',
      'подсветка валидации и неблокирующих предупреждений на основе validationMessage, warning, warningMessage и forceShowMessage',
      'дополнительные иконки отмены и навигации (стрелки) с флагами видимости',
      'управление позицией счётчика через counterTop',
      'встроенные помощники для размеров, семантики элемента и иконок (FieldSize, FieldElement, FieldIcons)'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\''
  ],
  render: `
      <DesignComponent v-bind="args">
        <template v-slot:default="{binds}">
          <input :value="args.value" readonly v-bind="binds"/>
        </template>
      </DesignComponent>
    `,
  play: `
const component = canvasElement.querySelector('.design-component')
await expect(component).toBeInTheDocument()
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'FieldWidth',
      name: {
        en: 'Width',
        ru: 'Ширина'
      },
      propsName: ['width', 'label'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent label="auto">
            <template #default="{binds}">
              <input v-bind="binds" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent width="320px" label="320px">
            <template #default="{binds}">
              <input v-bind="binds" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent width="50%" label="50%">
            <template #default="{binds}">
              <input v-bind="binds" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent width="min(100%,320px)" label="min(...)">
            <template #default="{binds}">
              <input v-bind="binds" value="" readonly/>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(4)
await expect(items[1]).toHaveClass('design-component--width--custom')
      `
    },
    {
      id: 'FieldCancel',
      name: {
        en: 'Cancel button',
        ru: 'Кнопка очистки'
      },
      propsName: ['cancel', 'cancelShow', 'label'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent cancel="auto" label="auto">
            <template #default="{binds}">
              <input v-bind="binds" value="" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent cancel="auto" :cancel-show="true" label="auto + value">
            <template #default="{binds}">
              <input v-bind="binds" value="Value" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent cancel="always" label="always">
            <template #default="{binds}">
              <input v-bind="binds" value="" readonly/>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(3)
await expect(items[0]).not.toHaveClass('design-component--cancel')
await expect(items[1]).toHaveClass('design-component--cancel')
await expect(items[2]).toHaveClass('design-component--cancel')
      `
    },
    {
      id: 'FieldNavigation',
      name: {
        en: 'Navigation & arrows',
        ru: 'Навигация / стрелки'
      },
      propsName: ['arrowCarousel', 'arrowStepper', 'align', 'disabledPrevious', 'disabledNext', 'label'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent arrow-carousel label="carousel (start)" :disabled-previous="true">
            <template #default="{binds}">
              <input v-bind="binds" value="Item 1" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent arrow-carousel label="carousel (end)" :disabled-next="true">
            <template #default="{binds}">
              <input v-bind="binds" value="Item 9" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent arrow-stepper align="center" label="stepper (center)">
            <template #default="{binds}">
              <input v-bind="binds" value="42" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent arrow-stepper label="stepper (prev off)" :disabled-previous="true">
            <template #default="{binds}">
              <input v-bind="binds" value="0" readonly/>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(4)
await expect(items[0]).toHaveClass('design-component--arrowCarousel')
await expect(items[2]).toHaveClass('design-component--arrowStepper')
await expect(items[2]).toHaveClass('design-component--align--center')
      `
    },
    {
      id: 'FieldSkeleton',
      name: {
        en: 'Skeleton',
        ru: 'Скелетон'
      },
      components: ['Skeleton'],
      propsName: ['isSkeleton', 'label', 'counter', 'helperMessage'],
      template: `
        <DesignSkeleton :active="true" style="max-width:280px">
          <DesignComponent is-skeleton label="Skeleton" :counter="12" helper-message="Helper message: loading description.">
            <template #default="{binds}">
              <input v-bind="binds" readonly/>
            </template>
          </DesignComponent>
        </DesignSkeleton>
      `,
      play: `
const body = canvasElement.querySelector('.design-component__body')
await expect(body).not.toBeNull()
await expect(body?.className).toContain('skeleton__background')
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
          id="field-slots-demo"
          :cancel-show="true"
          label="Label prop"
          icon="home"
          icon-trailing="close"
          value="Value"
        >
          <template #default="{binds}">
            <input v-bind="binds" value="Value" readonly/>
          </template>
          <template #leading="{id}"><span :data-leading-id="id">Leading slot</span></template>
          <template #trailing="{id}"><span :data-trailing-id="id">Trailing slot</span></template>
          <template #label><b>Label slot</b></template>
          <template #prefix>Prefix slot</template>
          <template #suffix>Suffix slot</template>
          <template #caption>Caption slot</template>
        </DesignComponent>
      `,
      play: `
const component = canvasElement.querySelector('.design-component')
const leadingSlot = canvasElement.querySelector('[data-leading-id]')
const trailingSlot = canvasElement.querySelector('[data-trailing-id]')
await expect(component).toHaveTextContent('Leading slot')
await expect(component).toHaveTextContent('Trailing slot')
await expect(component).toHaveTextContent('Prefix slot')
await expect(component).toHaveTextContent('Suffix slot')
await expect(component).toHaveTextContent('Caption slot')
await expect(leadingSlot?.getAttribute('data-leading-id')).toBe('field-slots-demo')
await expect(trailingSlot?.getAttribute('data-trailing-id')).toBe('field-slots-demo')
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props Only)
    // =========================================================================
    {
      id: 'FieldTestStates',
      name: {
        en: 'Test: Visual styles, states, and validation combinations',
        ru: 'Тест: Стили, состояния и комбинации валидации'
      },
      propsName: [
        'classic',
        'outlined',
        'filled',
        'tonal',
        'boxed',
        'basic',
        'focus',
        'selected',
        'disabled',
        'readonly',
        'block',
        'isValue',
        'loading',
        'warning',
        'warningMessage',
        'warningId',
        'validationMessage',
        'forceShowMessage',
        'required'
      ],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent classic focus selected block is-value required label="Classic Focus" validation-message="Invalid">
            <template #default="{binds}">
              <input v-bind="binds" value="Val" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent outlined is-value readonly label="Outlined Readonly" validation-message="Hidden on readonly">
            <template #default="{binds}">
              <input v-bind="binds" value="RO" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent filled is-value disabled force-show-message label="Disabled Forced" validation-message="Visible error">
            <template #default="{binds}">
              <input v-bind="binds" value="Dis" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent tonal is-value loading label="Tonal Loading">
            <template #default="{binds}">
              <input v-bind="binds" value="Load" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent classic is-value warning label="Classic Warning" warning-message="Needs confirmation" warning-id="field-test-warning">
            <template #default="{binds}">
              <input v-bind="binds" value="Warn" readonly/>
            </template>
          </DesignComponent>
          <DesignComponent outlined is-value warning label="Validation Priority" warning-message="Suppressed warning" validation-message="Blocking error">
            <template #default="{binds}">
              <input v-bind="binds" value="Conflict" readonly/>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const items = canvasElement.querySelectorAll('.design-component')
await expect(items.length).toBe(6)

await expect(items[0].tagName).toBe('DIV')
await expect(items[0]).toHaveClass('design-component--classic')
await expect(items[0]).toHaveClass('design-component--focus')
await expect(items[0]).toHaveClass('design-component--selected')
await expect(items[0]).toHaveClass('design-component--block')
await expect(items[0]).toHaveClass('design-component--validation')

await expect(items[1].tagName).toBe('LABEL')
await expect(items[1]).toHaveClass('design-component--outlined')
await expect(items[1]).not.toHaveClass('design-component--validation')

await expect(items[2]).toHaveClass('design-component--filled')
await expect(items[2]).toHaveClass('design-component--validation')

await expect(items[3]).toHaveClass('design-component--tonal')
await expect(items[3].querySelector('.design-component__loading')).not.toBeNull()

const warningInput = items[4].querySelector('input')
await expect(items[4]).toHaveClass('design-component--warning')
await expect(items[4]).not.toHaveClass('design-component--validation')
await expect(warningInput?.getAttribute('aria-invalid')).toBeNull()
await expect(warningInput?.getAttribute('aria-describedby')).toContain('field-test-warning')

const conflictInput = items[5].querySelector('input')
await expect(items[5]).toHaveClass('design-component--validation')
await expect(items[5]).not.toHaveClass('design-component--warning')
await expect(conflictInput?.getAttribute('aria-invalid')).toBe('true')
      `
    },
    {
      id: 'FieldTestPrefixSuffixCaption',
      name: {
        en: 'Test: Prefix, suffix, caption, and ARIA describedby',
        ru: 'Тест: Префикс, суффикс, подпись и ARIA describedby'
      },
      propsName: ['prefix', 'prefixId', 'suffix', 'suffixId', 'caption', 'captionDecorative', 'value', 'id'],
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            id="field-aria-test"
            label="Amount"
            prefix="$"
            prefix-id="field-pref-id"
            suffix="USD"
            suffix-id="field-suf-id"
            caption="Net"
            :caption-decorative="true"
            value="100"
            is-value
          >
            <template #default="{binds}">
              <input v-bind="binds" value="100" readonly/>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const field = canvasElement.querySelector('.design-component')
const input = canvasElement.querySelector('#field-aria-test')
const caption = canvasElement.querySelector('.design-component__caption')
await expect(field).toHaveClass('design-component--suffix')
await expect(input?.getAttribute('aria-describedby')).toContain('field-pref-id')
await expect(input?.getAttribute('aria-describedby')).toContain('field-suf-id')
await expect(caption?.getAttribute('aria-hidden')).toBe('true')
      `
    },
    {
      id: 'FieldTestCounterAndEvents',
      name: {
        en: 'Test: Top/bottom counter and scoreboard click events',
        ru: 'Тест: Счётчик сверху/снизу и события клика'
      },
      propsName: ['counterTop', 'counter', 'counterShow', 'maxlength', 'cancel', 'icon', 'iconTrailing', 'arrowAlign'],
      setup: `
      const lastEvent = ref('none')
      const onFieldClick = (_event: MouseEvent, options: EventClickValue) => {
        lastEvent.value = options.type
      }
      return { lastEvent, onFieldClick }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            classic
            label="Top Counter"
            counter-top
            counter-show
            :counter="5"
            :maxlength="20"
            cancel="always"
            icon="search"
            icon-trailing="home"
            @click="onFieldClick"
          >
            <template #default="{binds}">
              <input v-bind="binds" value="Hello" readonly/>
            </template>
          </DesignComponent>
          <div class="wiki-storybook-card" data-testid="field-event-output">{{ lastEvent }}</div>
        </div>
      `,
      play: `
const cancelButton = canvasElement.querySelector('[data-event-type="cancel"]') as HTMLElement | null
const output = canvasElement.querySelector('[data-testid="field-event-output"]')
await expect(cancelButton).not.toBeNull()
await step('Trigger cancel icon click', async () => {
  await userEvent.click(cancelButton!)
  await expect(output?.textContent?.trim()).toBe('cancel')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Field'} type={'field'}/>

<StorybookDescriptions componentName={'Field'} type={'value'}/>

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
    `,
    slots: `
<Canvas of={Component.FieldSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'label'} />
<StorybookDescriptions componentName={'Slot'} type={'prefix'} />
<StorybookDescriptions componentName={'Slot'} type={'suffix'} />
<StorybookDescriptions componentName={'Slot'} type={'caption'} />
<StorybookDescriptions componentName={'Field'} type={'slots'} />
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Field label="Field Label" helper-message="Helper text" v-bind="args">
    <template v-slot:default="{binds}">
      <input :value="args.value" readonly v-bind="binds as any"/>
    </template>
  </Field>
</div>
    `,
    description: `
Foundational wrapper component for all form inputs. Provides the structural layout, styling, and state management for labels, helper messages, non-blocking warnings (warning, warningMessage, warningId), validation errors, icons, and progress indicators.
Features a composable structure with prefix/suffix slots, leading/trailing icons, and a character counter. Automatically handles validation states, non-blocking warning highlights (without failing checkValidity), loading spinners, and disabled/readonly appearances.
Integrates with native inputs via the #default slot, exposing essential bindings (id, class, aria) to maintain design consistency and accessibility. Use as a base when creating custom form controls.
    `,
    hide: true
  }
}
