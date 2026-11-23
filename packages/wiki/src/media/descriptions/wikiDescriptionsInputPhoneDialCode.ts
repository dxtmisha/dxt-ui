import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for InputPhoneDialCode component properties
 *
 * Описания свойств компонента InputPhoneDialCode
 */
export const wikiDescriptionsInputPhoneDialCode: StorybookComponentsDescriptionItem = {
  name: 'InputPhoneDialCode',
  description: {
    en: 'Trigger button for selecting a country phone dial code via a country menu',
    ru: 'Кнопка-триггер для выбора кода страны телефонного номера через меню стран'
  },
  possibilities: {
    en: [
      'automatic detection of the current country via Geo.getCountry()',
      'country selection via a MenuCountry popup with flag and phone code display',
      'configurable label display: country name, phone code, or none',
      'reactive model binding via v-model:model-selected and value',
      'customizable trailing icon (arrow) for open/close indication',
      'supports readonly locking and automatically locks when countryList or menuCountryAttrs.list restricts choices to a single single-code country (while keeping multi-code countries like DO interactive)',
      'supports direct countryList, showSearch, filterMode, highlightLengthStart, and configurable disableFocusReturn (defaults to true) props',
      'forwards window, click, clickLite, updateValue, and model selection events while ignoring group-header clicks',
      'inherits all Button and MenuCountry capabilities'
    ],
    ru: [
      'автоматическое определение текущей страны через Geo.getCountry()',
      'выбор страны через всплывающее меню MenuCountry с флагом и кодом телефона',
      'настраиваемый тип метки: название страны, телефонный код или без метки',
      'реактивная привязка модели через v-model:model-selected и value',
      'настраиваемая иконка-стрелка для индикации открытия/закрытия',
      'поддерживает блокировку выбора через readonly и автоматически блокируется, если countryList или menuCountryAttrs.list ограничен одной однокодовой страной (сохраняя интерактивность для многокодовых стран вроде DO)',
      'поддерживает прямые свойства countryList, showSearch, filterMode, highlightLengthStart и настраиваемый disableFocusReturn (по умолчанию true)',
      'пробрасывает события window, click, clickLite, updateValue и обновления модели, игнорируя клики по заголовкам групп',
      'наследует все возможности компонентов Button и MenuCountry'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { ListSelectedList } from \'@dxtmisha/functional\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { WindowEmitOptions } from \'@dxtmisha/constructor/Window\''
  ],
  render: `
    <DesignComponent v-bind="args"/>
  `,
  play: `
const trigger = canvasElement.querySelector<HTMLButtonElement>('.design-component__button')
await expect(trigger).toBeInTheDocument()
await expect(trigger).toHaveAttribute('aria-haspopup', 'listbox')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'InputPhoneDialCodeVModel',
      name: {
        en: 'Two-way binding (v-model)',
        ru: 'Двусторонняя привязка (v-model)'
      },
      propsName: ['modelSelected', 'labelType', 'menuCountryAttrs'],
      setup: `
      return {
        selectedCountry: ref<ListSelectedList | undefined>('US')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button
              class="wiki-storybook-button"
              type="button"
              data-testid="select-us-button"
              @click="selectedCountry = 'US'"
            >
              Select US
            </button>
            <button
              class="wiki-storybook-button"
              type="button"
              data-testid="select-vn-button"
              @click="selectedCountry = 'VN'"
            >
              Select VN
            </button>
            <button
              class="wiki-storybook-button wiki-storybook-button-warning"
              type="button"
              data-testid="clear-country-button"
              @click="selectedCountry = undefined"
            >
              Clear
            </button>
          </div>
          <DesignComponent
            v-model:model-selected="selectedCountry"
            label-type="code"
            :menu-country-attrs="{ list: ['US', 'VN'] }"
          />
          <div class="wiki-storybook-card" data-testid="selected-country-value">
            Selected: {{ selectedCountry ?? '—' }}
          </div>
        </div>
      `,
      play: `
const trigger = canvasElement.querySelector<HTMLButtonElement>('.design-component__button')
const valueDisplay = canvasElement.querySelector<HTMLElement>('[data-testid="selected-country-value"]')
const selectVietnamButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="select-vn-button"]')
const selectUsButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="select-us-button"]')

await expect(trigger).toBeInTheDocument()
await expect(valueDisplay).toHaveTextContent('Selected: US')

await userEvent.click(selectVietnamButton!)
await waitFor(async () => {
  await expect(valueDisplay).toHaveTextContent('Selected: VN')
  await expect(trigger).toHaveTextContent('+84')
})

await userEvent.click(selectUsButton!)
await waitFor(async () => {
  await expect(valueDisplay).toHaveTextContent('Selected: US')
  await expect(trigger).toHaveTextContent('+1')
})
      `
    },
    {
      id: 'InputPhoneDialCodeLabelTypes',
      name: {
        en: 'Label display modes (labelType)',
        ru: 'Режимы отображения метки (labelType)'
      },
      propsName: ['labelType', 'value', 'menuCountryAttrs'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">none</div>
            <DesignComponent value="US" label-type="none" :menu-country-attrs="{ list: ['US', 'VN'] }"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">code</div>
            <DesignComponent value="US" label-type="code" :menu-country-attrs="{ list: ['US', 'VN'] }"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">name</div>
            <DesignComponent value="VN" label-type="name" :menu-country-attrs="{ list: ['US', 'VN'], language: 'en' }"/>
          </div>
        </div>
      `,
      play: `
const triggers = canvasElement.querySelectorAll<HTMLButtonElement>('.design-component__button')
await expect(triggers.length).toBe(3)
await waitFor(async () => {
  await expect(triggers[0]).not.toHaveTextContent('+1')
  await expect(triggers[1]).toHaveTextContent('+1')
  await expect(triggers[2]).toHaveTextContent('Vietnam')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor Props & Behavior Only)
    // =========================================================================
    {
      id: 'InputPhoneDialCodeTestStates',
      name: {
        en: 'Test: Disabled, readonly, single-country lock, multi-code list, arrow icon, and attributes',
        ru: 'Тест: Отключённое состояние, readonly, одна страна, многокодовый список, стрелка и атрибуты'
      },
      propsName: ['disabled', 'readonly', 'countryList', 'iconArrowDown', 'buttonAttrs', 'menuCountryAttrs'],
      template: `
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">disabled</div>
            <DesignComponent value="US" label-type="code" disabled :country-list="['US', 'VN']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">readonly</div>
            <DesignComponent value="RU" label-type="code" readonly icon-arrow-down="expand_more" :country-list="['US', 'RU']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">single country auto-lock</div>
            <DesignComponent value="RU" label-type="code" icon-arrow-down="expand_more" :country-list="['RU']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">single multi-code interactive</div>
            <DesignComponent value="DO" label-type="code" icon-arrow-down="expand_more" :country-list="['DO']"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto">
            <div class="wiki-storybook-item__label">custom arrow & buttonAttrs</div>
            <DesignComponent
              value="VN"
              label-type="code"
              icon-arrow-down="expand_more"
              :button-attrs="{ 'data-custom': 'button-prop' }"
              :menu-country-attrs="{ list: ['US', 'VN'] }"
            />
          </div>
        </div>
      `,
      play: `
const triggers = canvasElement.querySelectorAll<HTMLButtonElement>('.design-component__button')
await expect(triggers.length).toBe(5)

await expect(triggers[0]).toBeDisabled()
await expect(triggers[1]).toHaveTextContent('+7')
await expect(triggers[1]).not.toHaveTextContent('expand_more')
await userEvent.click(triggers[1]!)
await expect(triggers[1]).toHaveAttribute('aria-expanded', 'false')
await expect(triggers[2]).toHaveTextContent('+7')
await expect(triggers[2]).not.toHaveTextContent('expand_more')
await userEvent.click(triggers[2]!)
await expect(triggers[2]).toHaveAttribute('aria-expanded', 'false')
await expect(triggers[3]).not.toBeDisabled()
await expect(triggers[3]).toHaveTextContent('+1-809')
await expect(triggers[3]).toHaveTextContent('expand_more')
await expect(triggers[4]).not.toBeDisabled()
await expect(triggers[4]).toHaveAttribute('data-custom', 'button-prop')
await expect(triggers[4]).toHaveTextContent('expand_more')
      `
    },
    {
      id: 'InputPhoneDialCodeTestSearchAndGroups',
      name: {
        en: 'Test: Direct search props, alternative dial code groups, and disableFocusReturn',
        ru: 'Тест: Прямые свойства поиска, группы альтернативных кодов и disableFocusReturn'
      },
      propsName: ['countryList', 'showSearch', 'filterMode', 'highlightLengthStart', 'disableFocusReturn'],
      setup: `
      const selectedAlternative = ref<ListSelectedList | undefined>('DO')
      return { selectedAlternative }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <DesignComponent
              v-model:model-selected="selectedAlternative"
              label-type="code"
              :country-list="['DO', 'US', 'VN']"
              :show-search="true"
              :filter-mode="true"
              :highlight-length-start="1"
              :disable-focus-return="false"
            />
            <DesignComponent
              value="US"
              label-type="code"
              :country-list="['US', 'VN']"
              :show-search="false"
            />
          </div>
          <div class="wiki-storybook-card" data-testid="alternative-output">
            {{ selectedAlternative }}
          </div>
        </div>
      `,
      play: `
const triggers = canvasElement.querySelectorAll<HTMLButtonElement>('.design-component__button')
const output = canvasElement.querySelector<HTMLElement>('[data-testid="alternative-output"]')

await expect(triggers.length).toBe(2)
await expect(output).toHaveTextContent('DO')

await userEvent.click(triggers[0]!)
await waitFor(async () => {
  await expect(document.querySelector('[role="option"][data-value="DO-1-829"]')).not.toBeNull()
})

const alternativeOption = document.querySelector<HTMLElement>('[role="option"][data-value="DO-1-829"]')
await userEvent.click(alternativeOption!)

await waitFor(async () => {
  await expect(output).toHaveTextContent('DO-1-829')
  await expect(triggers[0]).toHaveTextContent('+1-829')
})
      `
    },
    {
      id: 'InputPhoneDialCodeTestEvents',
      name: {
        en: 'Test: Events and popup selection',
        ru: 'Тест: События и выбор из меню'
      },
      propsName: ['value', 'labelType', 'menuCountryAttrs'],
      setup: `
      const lastEvent = ref<string>('none')
      const windowOpenState = ref<boolean>(false)
      const selectedValue = ref<string>('US')

      const onClick = (_event: MouseEvent, options?: EventClickValue) => {
        lastEvent.value = 'click:' + String(options?.value ?? '')
      }
      const onUpdateSelected = (value: ListSelectedList) => {
        selectedValue.value = String(value)
      }
      const onWindow = (options: WindowEmitOptions) => {
        windowOpenState.value = options.open
      }

      return {
        lastEvent,
        windowOpenState,
        selectedValue,
        onClick,
        onUpdateSelected,
        onWindow
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            :value="selectedValue"
            label-type="code"
            :menu-country-attrs="{ list: ['US', 'VN'] }"
            @click="onClick"
            @update:selected="onUpdateSelected"
            @window="onWindow"
          />
          <div class="wiki-storybook-card" data-testid="events-output">
            {{ selectedValue }} | {{ lastEvent }} | {{ windowOpenState }}
          </div>
        </div>
      `,
      play: `
const trigger = canvasElement.querySelector<HTMLButtonElement>('.design-component__button')
const output = canvasElement.querySelector<HTMLElement>('[data-testid="events-output"]')

await expect(trigger).toBeInTheDocument()
await userEvent.click(trigger!)

await waitFor(async () => {
  await expect(output).toHaveTextContent('true')
  await expect(document.querySelector('[role="option"][data-value="VN"]')).not.toBeNull()
})

const vietnamOption = document.querySelector<HTMLElement>('[role="option"][data-value="VN"]')
await userEvent.click(vietnamOption!)

await waitFor(async () => {
  await expect(output).toHaveTextContent('VN | click:VN | true')
  await expect(trigger).toHaveTextContent('+84')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'InputPhoneDialCode'} type={'inputPhoneDialCode'}/>

<StorybookDescriptions componentName={'Value'} type={'v-model'}/>
<Canvas of={Component.InputPhoneDialCodeVModel}/>

<Canvas of={Component.InputPhoneDialCodeLabelTypes}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Menu'} type={'event.updateValue'}/>
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <DesignComponent v-bind="args" />
</div>
    `,
    description: `
The InputPhoneDialCode component is a compact trigger button that opens a MenuCountry popup for selecting a country phone dial code.
It automatically detects the user's current country via Geo.getCountry() as the default value and reactively binds the selection via v-model:model-selected (or value + @update:selected).
The trigger button can display the selected country's flag icon alongside an optional label — either the phone code (e.g. "+1") or the country name — controlled by the labelType prop ('code' | 'name' | 'none').
Supports readonly locking (and automatically locks when countryList or menuCountryAttrs.list contains a single single-code country, while keeping multi-code countries like DO interactive), keeping the flag and dial code visible while disabling menu interaction.
Supports direct countryList, showSearch, filterMode, highlightLengthStart, and configurable disableFocusReturn (defaults to true) props, forwarding the window lifecycle event so host inputs can manage focus directly on close. Typically used as a prefix element inside a phone number input field.
    `,
    hide: true
  }
}
