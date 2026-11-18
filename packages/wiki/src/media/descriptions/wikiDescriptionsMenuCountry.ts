import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for MenuCountry component properties
 *
 * Описания свойств компонента MenuCountry
 */
export const wikiDescriptionsMenuCountry: StorybookComponentsDescriptionItem = {
  name: 'MenuCountry',
  description: {
    en: 'Specialized menu for selecting countries with automatic flag and name loading',
    ru: 'Специализированное меню для выбора стран с автоматической загрузкой флагов и названий'
  },
  possibilities: {
    en: [
      'automatic generation of country list via GeoFlagRef',
      'filtering by country codes via list prop',
      'optional phone dial code captions via showPhoneCode prop',
      'support for internationalized country names via language prop',
      'all features of the base Menu component and window lifecycle events'
    ],
    ru: [
      'автоматическая генерация списка стран через GeoFlagRef',
      'фильтрация по кодам стран через свойство list',
      'отображение телефонных кодов через свойство showPhoneCode',
      'поддержка интернационализированных названий стран через свойство language',
      'все возможности базового компонента Menu и проброс событий окна'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { ListSelectedList, NumberOrStringOrBoolean } from \'@dxtmisha/functional\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { MenuCountryExpose } from \'@dxtmisha/constructor/MenuCountry\'',
    'import type { WindowEmitOptions } from \'@dxtmisha/constructor/Window\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <template #control="{ binds }">
        <button class="wiki-storybook-button" type="button" v-bind="binds" data-testid="menu-country-main-trigger">
          Select Country
        </button>
      </template>
    </DesignComponent>
  `,
  play: `
const trigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-country-main-trigger"]')
await expect(trigger).toBeInTheDocument()
await expect(trigger).toHaveAttribute('aria-haspopup', 'listbox')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'MenuCountryFilter',
      name: {
        en: 'Filtering countries',
        ru: 'Фильтрация стран'
      },
      propsName: ['list', 'selected', 'isSelectedByValue'],
      setup: `
      return {
        selectedValue: ref<ListSelectedList>('US'),
        list: ['US', 'VN']
      }
      `,
      template: `
        <div class="wiki-storybook-flex-align-center">
          <DesignComponent
            v-model:selected="selectedValue"
            :list="list"
            is-selected-by-value
          >
            <template #control="{ binds, selectedNames }">
              <button
                class="wiki-storybook-button"
                type="button"
                v-bind="binds"
                data-testid="filter-trigger"
              >
                Selected: {{ selectedNames.value[0] || 'None' }}
              </button>
            </template>
          </DesignComponent>
          <span class="wiki-storybook-card" data-testid="filter-value">{{ selectedValue }}</span>
        </div>
      `,
      play: `
const trigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="filter-trigger"]')
const valueDisplay = canvasElement.querySelector<HTMLElement>('[data-testid="filter-value"]')
await expect(trigger).toBeInTheDocument()
await expect(valueDisplay).toHaveTextContent('US')

await userEvent.click(trigger!)
await waitFor(async () => {
  const options = Array.from(document.querySelectorAll<HTMLElement>('[role="option"]'))
  await expect(options.length).toBe(2)
  await expect(document.querySelector('[role="option"][data-value="VN"]')).not.toBeNull()
})

const vietnamOption = document.querySelector<HTMLElement>('[role="option"][data-value="VN"]')
await userEvent.click(vietnamOption!)

await waitFor(async () => {
  await expect(valueDisplay).toHaveTextContent('VN')
})
      `
    },
    {
      id: 'MenuCountryPhoneCode',
      name: {
        en: 'Phone dial codes (showPhoneCode)',
        ru: 'Телефонные коды (showPhoneCode)'
      },
      propsName: ['showPhoneCode', 'list', 'selected'],
      setup: `
      return {
        selectedCountry: ref<ListSelectedList>('VN'),
        countryCodes: ['US', 'VN']
      }
      `,
      template: `
        <DesignComponent
          v-model:selected="selectedCountry"
          :list="countryCodes"
          show-phone-code
          is-selected-by-value
        >
          <template #control="{ binds, selectedNames }">
            <button
              class="wiki-storybook-button"
              type="button"
              v-bind="binds"
              data-testid="phone-code-trigger"
            >
              Country: {{ selectedNames.value[0] || 'None' }}
            </button>
          </template>
        </DesignComponent>
      `,
      play: `
const trigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="phone-code-trigger"]')
await expect(trigger).toBeInTheDocument()
await userEvent.click(trigger!)

await waitFor(async () => {
  const listbox = document.querySelector('[role="listbox"]')
  await expect(listbox).toBeInTheDocument()
  await expect(listbox).toHaveTextContent('+1')
  await expect(listbox).toHaveTextContent('+84')
})

await userEvent.keyboard('{Escape}')
      `
    },
    {
      id: 'MenuCountryLanguage',
      name: {
        en: 'Language localization (language)',
        ru: 'Языковая локализация (language)'
      },
      propsName: ['language', 'list', 'selected'],
      setup: `
      return {
        selectedCountry: ref<ListSelectedList>('VN'),
        currentLanguage: ref('ru'),
        countryCodes: ['US', 'VN']
      }
      `,
      template: `
        <div class="wiki-storybook-flex-align-center">
          <button
            class="wiki-storybook-button"
            type="button"
            data-testid="switch-en"
            @click="currentLanguage = 'en'"
          >
            EN
          </button>
          <button
            class="wiki-storybook-button"
            type="button"
            data-testid="switch-ru"
            @click="currentLanguage = 'ru'"
          >
            RU
          </button>
          <DesignComponent
            v-model:selected="selectedCountry"
            :list="countryCodes"
            :language="currentLanguage"
            is-selected-by-value
          >
            <template #control="{ binds, selectedNames }">
              <button
                class="wiki-storybook-button"
                type="button"
                v-bind="binds"
                data-testid="language-trigger"
              >
                {{ selectedNames.value[0] || 'Select' }}
              </button>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const trigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="language-trigger"]')
const switchEn = canvasElement.querySelector<HTMLButtonElement>('[data-testid="switch-en"]')
await expect(trigger).toHaveTextContent('Вьетнам')

await userEvent.click(switchEn!)
await waitFor(async () => {
  await expect(trigger).toHaveTextContent('Vietnam')
})
      `
    },
    {
      id: 'MenuCountrySlots',
      name: {
        en: 'Custom slots',
        ru: 'Пользовательские слоты'
      },
      setup: `
      return {
        selectedCountry: ref<ListSelectedList>('US'),
        countryCodes: ['US', 'VN']
      }
      `,
      template: `
        <DesignComponent
          v-model:selected="selectedCountry"
          :list="countryCodes"
          is-selected-by-value
        >
          <template #control="{ binds }">
            <button class="wiki-storybook-button" type="button" v-bind="binds" data-testid="slots-trigger">
              Open Slots Menu
            </button>
          </template>
          <template #title>
            <div data-testid="slot-title">Title Slot</div>
          </template>
          <template #contextTop>
            <div data-testid="slot-top">Top Context</div>
          </template>
          <template #contextBottom>
            <div data-testid="slot-bottom">Bottom Context</div>
          </template>
          <template #footer>
            <div data-testid="slot-footer">Footer Slot</div>
          </template>
        </DesignComponent>
      `,
      play: `
const trigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="slots-trigger"]')
await userEvent.click(trigger!)

await waitFor(async () => {
  await expect(document.querySelector('[data-testid="slot-title"]')).toHaveTextContent('Title Slot')
  await expect(document.querySelector('[data-testid="slot-top"]')).toHaveTextContent('Top Context')
  await expect(document.querySelector('[data-testid="slot-bottom"]')).toHaveTextContent('Bottom Context')
  await expect(document.querySelector('[data-testid="slot-footer"]')).toHaveTextContent('Footer Slot')
})
await userEvent.keyboard('{Escape}')
      `
    },
    {
      id: 'MenuCountryEvents',
      name: {
        en: 'Events (click, updateValue, window)',
        ru: 'События (click, updateValue, window)'
      },
      setup: `
      const eventsMenuRef = ref<MenuCountryExpose | null>(null)
      const selectedCountry = ref<ListSelectedList>('US')
      const lastClick = ref('none')
      const lastUpdateValue = ref('none')
      const lastWindowOpen = ref(false)

      const onClick = (_event: MouseEvent, options?: EventClickValue) => {
        lastClick.value = 'click:' + String(options?.value ?? '')
      }

      const onUpdateValue = (value?: NumberOrStringOrBoolean) => {
        lastUpdateValue.value = 'updateValue:' + String(value ?? '')
      }

      const onWindow = (options: WindowEmitOptions) => {
        lastWindowOpen.value = options.open
      }

      return {
        eventsMenuRef,
        selectedCountry,
        lastClick,
        lastUpdateValue,
        lastWindowOpen,
        onClick,
        onUpdateValue,
        onWindow
      }
      `,
      template: `
        <div class="wiki-storybook-flex-align-center">
          <DesignComponent
            ref="eventsMenuRef"
            v-model:selected="selectedCountry"
            :list="['US', 'VN']"
            is-selected-by-value
            @click="onClick"
            @update-value="onUpdateValue"
            @window="onWindow"
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" type="button" v-bind="binds" data-testid="events-trigger">
                Events Trigger
              </button>
            </template>
          </DesignComponent>
          <button
            class="wiki-storybook-button"
            type="button"
            data-testid="events-next"
            @click="eventsMenuRef?.next()"
          >
            Next
          </button>
          <span class="wiki-storybook-card" data-testid="events-log">{{ lastClick }} | {{ lastUpdateValue }} | open={{ lastWindowOpen }}</span>
        </div>
      `,
      play: `
const trigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="events-trigger"]')
const nextButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="events-next"]')
const log = canvasElement.querySelector<HTMLElement>('[data-testid="events-log"]')
await userEvent.click(trigger!)

await waitFor(async () => {
  await expect(log).toHaveTextContent('open=true')
  await expect(document.querySelector('[role="option"][data-value="VN"]')).not.toBeNull()
})

const vietnamOption = document.querySelector<HTMLElement>('[role="option"][data-value="VN"]')
await userEvent.click(vietnamOption!)

await waitFor(async () => {
  await expect(log).toHaveTextContent('click:VN')
})

await userEvent.click(nextButton!)
await waitFor(async () => {
  await expect(log).toHaveTextContent('updateValue:US')
})
      `
    },
    {
      id: 'MenuCountryExposeApi',
      name: {
        en: 'Programmatic control via expose',
        ru: 'Программное управление через expose'
      },
      setup: `
      const menuCountryRef = ref<MenuCountryExpose | null>(null)
      const selectedCountry = ref<ListSelectedList>('US')
      const exposeInfo = ref('')

      const readExpose = () => {
        if (menuCountryRef.value) {
          exposeInfo.value = 'open=' + String(menuCountryRef.value.getOpen()) + ', values=' + JSON.stringify(menuCountryRef.value.getSelectedValues())
        }
      }

      return {
        menuCountryRef,
        selectedCountry,
        exposeInfo,
        readExpose
      }
      `,
      template: `
        <div class="wiki-storybook-flex-align-center">
          <DesignComponent
            ref="menuCountryRef"
            v-model:selected="selectedCountry"
            :list="['US', 'VN']"
            is-selected-by-value
          >
            <template #control="{ binds }">
              <button class="wiki-storybook-button" type="button" v-bind="binds" data-testid="expose-trigger">
                Expose Menu
              </button>
            </template>
          </DesignComponent>
          <button
            class="wiki-storybook-button"
            type="button"
            data-testid="expose-next"
            @click="menuCountryRef?.next(); readExpose()"
          >
            Next & Read
          </button>
          <span class="wiki-storybook-card" data-testid="expose-output">{{ exposeInfo }}</span>
        </div>
      `,
      play: `
const nextButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="expose-next"]')
const output = canvasElement.querySelector<HTMLElement>('[data-testid="expose-output"]')
await userEvent.click(nextButton!)

await waitFor(async () => {
  await expect(output).toHaveTextContent('values=["VN"]')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor-level props & combinations)
    // =========================================================================
    {
      id: 'MenuCountryTestStates',
      name: {
        en: 'Test: Disabled, embedded search, and array selection',
        ru: 'Тест: Отключённое состояние, встроенный поиск и массив выбора'
      },
      propsName: ['disabled', 'isSelectedByValue', 'menuAttrs', 'selected', 'list', 'showPhoneCode'],
      setup: `
      return {
        selectedDisabled: ref<ListSelectedList>('US'),
        selectedEmbedded: ref<ListSelectedList>(['US', 'VN'])
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            v-model:selected="selectedDisabled"
            :list="['US', 'VN']"
            disabled
          >
            <template #control="{ binds }">
              <button
                class="wiki-storybook-button"
                type="button"
                v-bind="binds"
                :disabled="true"
                data-testid="test-disabled-trigger"
              >
                Disabled Trigger
              </button>
            </template>
          </DesignComponent>

          <DesignComponent
            v-model:selected="selectedEmbedded"
            :list="['US', 'VN']"
            :is-selected-by-value="false"
            show-phone-code
            :menu-attrs="{ embedded: true, showSearch: true, filterMode: true, windowAttrs: { open: true } }"
          />
        </div>
      `,
      play: `
const disabledTrigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="test-disabled-trigger"]')
await expect(disabledTrigger).toBeDisabled()

await waitFor(async () => {
  const embeddedMenu = canvasElement.querySelector<HTMLElement>('.design-component')
  await expect(embeddedMenu).toBeInTheDocument()
  const options = Array.from(canvasElement.querySelectorAll<HTMLElement>('[role="option"]'))
  await expect(options.length).toBe(2)
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'MenuCountry'} type={'menuCountry'}/>
<Canvas of={Component.MenuCountryFilter}/>
<Canvas of={Component.MenuCountryPhoneCode}/>
<Canvas of={Component.MenuCountryLanguage}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Menu'} type={'event.updateValue'}/>
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<Canvas of={Component.MenuCountryEvents}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<StorybookDescriptions componentName={'Expose'} type={'loading'}/>
<StorybookDescriptions componentName={'Menu'} type={'expose.navigation'}/>
<Canvas of={Component.MenuCountryExposeApi}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Menu'} type={'slotsControl'}/>
<StorybookDescriptions componentName={'Menu'} type={'slots'}/>
<Canvas of={Component.MenuCountrySlots}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <MenuCountry v-bind="args">
    <template #control="{ binds }">
      <button class="wiki-storybook-button" v-bind="binds">
        Select Country
      </button>
    </template>
  </MenuCountry>
</div>
    `,
    description: `
The MenuCountry component is a specialized version of the Menu component, designed specifically for country selection.
It leverages the GeoFlagRef utility to automatically populate the menu with a list of countries, including their flags and localized names.
It supports all the standard Menu functionalities like Window-based popups, custom controls, and sophisticated focus management.
Use the 'list' prop to restrict the selection to a specific subset of countries, 'showPhoneCode' to display phone codes, and 'language' to customize localization.
    `
  }
}
