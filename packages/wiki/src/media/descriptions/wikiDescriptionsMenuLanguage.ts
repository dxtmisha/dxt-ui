import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for MenuLanguage component properties
 *
 * Описания свойств компонента MenuLanguage
 */
export const wikiDescriptionsMenuLanguage: StorybookComponentsDescriptionItem = {
  name: 'MenuLanguage',
  description: {
    en: 'Specialized menu for selecting languages with automatic flag, localized name, and native name loading',
    ru: 'Специализированное меню для выбора языков с автоматической загрузкой флагов, локализованных и родных названий'
  },
  possibilities: {
    en: [
      'automatic generation of language list with native names via GeoFlagRef',
      'filtering by language or locale codes via list prop',
      'built-in search, filtering, and highlight threshold via showSearch, filterMode, and highlightLengthStart props',
      'support for localized language labels via language prop',
      'optional phone dial code captions via showPhoneCode prop',
      'all features of the base Menu component, disableFocusReturn, and window lifecycle events'
    ],
    ru: [
      'автоматическая генерация списка языков с родными названиями через GeoFlagRef',
      'фильтрация по кодам языков или локалей через свойство list',
      'встроенный поиск, фильтрация и порог подсветки через свойства showSearch, filterMode и highlightLengthStart',
      'поддержка локализованных названий языков через свойство language',
      'опциональное отображение телефонных кодов через свойство showPhoneCode',
      'все возможности базового компонента Menu, disableFocusReturn и проброс событий окна'
    ]
  },
  import: [
    'import { ref } from \'vue\'',
    'import type { ListSelectedList, NumberOrStringOrBoolean } from \'@dxtmisha/functional\'',
    'import type { EventClickValue } from \'@dxtmisha/constructor\'',
    'import type { MenuLanguageExpose } from \'@dxtmisha/constructor/MenuLanguage\'',
    'import type { WindowEmitOptions } from \'@dxtmisha/constructor/Window\''
  ],
  render: `
    <DesignComponent v-bind="args">
      <template #control="{ binds }">
        <button class="wiki-storybook-button" type="button" v-bind="binds" data-testid="menu-language-main-trigger">
          Select Language
        </button>
      </template>
    </DesignComponent>
  `,
  play: `
const triggerButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-language-main-trigger"]')
await expect(triggerButton).toBeInTheDocument()
await expect(triggerButton).toHaveAttribute('aria-haspopup', 'listbox')
  `,
  stories: [
    // =========================================================================
    // TIER 1: DOCUMENTATION STORIES
    // =========================================================================
    {
      id: 'MenuLanguageFilter',
      name: {
        en: 'Filtering languages',
        ru: 'Фильтрация языков'
      },
      propsName: ['list', 'selected', 'isSelectedByValue'],
      setup: `
      return {
        selectedLanguage: ref<ListSelectedList>('en'),
        languageCodes: ['en', 'vi']
      }
      `,
      template: `
        <div class="wiki-storybook-flex-align-center">
          <DesignComponent
            v-model:selected="selectedLanguage"
            :list="languageCodes"
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
          <span class="wiki-storybook-card" data-testid="filter-value">{{ selectedLanguage }}</span>
        </div>
      `,
      play: `
const triggerButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="filter-trigger"]')
const valueDisplay = canvasElement.querySelector<HTMLElement>('[data-testid="filter-value"]')
await expect(triggerButton).toBeInTheDocument()
await expect(valueDisplay).toHaveTextContent('en')

await userEvent.click(triggerButton!)
await waitFor(async () => {
  const options = Array.from(document.querySelectorAll<HTMLElement>('[role="option"]'))
  await expect(options.length).toBe(2)
  await expect(document.querySelector('[role="option"][data-value="vi"]')).not.toBeNull()
})

const vietnameseOption = document.querySelector<HTMLElement>('[role="option"][data-value="vi"]')
await userEvent.click(vietnameseOption!)

await waitFor(async () => {
  await expect(valueDisplay).toHaveTextContent('vi')
})
      `
    },
    {
      id: 'MenuLanguagePhoneCode',
      name: {
        en: 'Phone dial codes (showPhoneCode)',
        ru: 'Телефонные коды (showPhoneCode)'
      },
      propsName: ['showPhoneCode', 'list', 'selected'],
      setup: `
      return {
        selectedLanguage: ref<ListSelectedList>('vi'),
        languageCodes: ['en', 'vi']
      }
      `,
      template: `
        <DesignComponent
          v-model:selected="selectedLanguage"
          :list="languageCodes"
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
              Language: {{ selectedNames.value[0] || 'None' }}
            </button>
          </template>
        </DesignComponent>
      `,
      play: `
const triggerButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="phone-code-trigger"]')
await expect(triggerButton).toBeInTheDocument()
await userEvent.click(triggerButton!)

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
      id: 'MenuLanguageLanguage',
      name: {
        en: 'Language localization (language)',
        ru: 'Языковая локализация (language)'
      },
      propsName: ['language', 'list', 'selected'],
      setup: `
      return {
        selectedLanguage: ref<ListSelectedList>('vi'),
        currentLanguage: ref('ru'),
        languageCodes: ['en', 'vi']
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
            v-model:selected="selectedLanguage"
            :list="languageCodes"
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
const triggerButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="language-trigger"]')
const switchEnglishButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="switch-en"]')
await expect(triggerButton).toHaveTextContent('вьетнамский')

await userEvent.click(switchEnglishButton!)
await waitFor(async () => {
  await expect(triggerButton).toHaveTextContent('Vietnamese')
})
      `
    },
    {
      id: 'MenuLanguageSlots',
      name: {
        en: 'Custom slots',
        ru: 'Пользовательские слоты'
      },
      setup: `
      return {
        selectedLanguage: ref<ListSelectedList>('en'),
        languageCodes: ['en', 'vi']
      }
      `,
      template: `
        <DesignComponent
          v-model:selected="selectedLanguage"
          :list="languageCodes"
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
const triggerButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="slots-trigger"]')
await userEvent.click(triggerButton!)

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
      id: 'MenuLanguageEvents',
      name: {
        en: 'Events (click, updateValue, window)',
        ru: 'События (click, updateValue, window)'
      },
      setup: `
      const eventsMenuReference = ref<MenuLanguageExpose | null>(null)
      const selectedLanguage = ref<ListSelectedList>('en')
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
        eventsMenuReference,
        selectedLanguage,
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
            ref="eventsMenuReference"
            v-model:selected="selectedLanguage"
            :list="['en', 'vi']"
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
            @click="eventsMenuReference?.next()"
          >
            Next
          </button>
          <span class="wiki-storybook-card" data-testid="events-log">{{ lastClick }} | {{ lastUpdateValue }} | open={{ lastWindowOpen }}</span>
        </div>
      `,
      play: `
const triggerButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="events-trigger"]')
const nextButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="events-next"]')
const eventLog = canvasElement.querySelector<HTMLElement>('[data-testid="events-log"]')
await userEvent.click(triggerButton!)

await waitFor(async () => {
  await expect(eventLog).toHaveTextContent('open=true')
  await expect(document.querySelector('[role="option"][data-value="vi"]')).not.toBeNull()
})

const vietnameseOption = document.querySelector<HTMLElement>('[role="option"][data-value="vi"]')
await userEvent.click(vietnameseOption!)

await waitFor(async () => {
  await expect(eventLog).toHaveTextContent('click:vi')
})

await userEvent.click(nextButton!)
await waitFor(async () => {
  await expect(eventLog).toHaveTextContent('updateValue:en')
})
      `
    },
    {
      id: 'MenuLanguageExposeApi',
      name: {
        en: 'Programmatic control via expose',
        ru: 'Программное управление через expose'
      },
      setup: `
      const menuLanguageReference = ref<MenuLanguageExpose | null>(null)
      const selectedLanguage = ref<ListSelectedList>('en')
      const exposeInfo = ref('')

      const readExpose = () => {
        if (menuLanguageReference.value) {
          exposeInfo.value = 'open=' + String(menuLanguageReference.value.getOpen()) + ', values=' + JSON.stringify(menuLanguageReference.value.getSelectedValues())
        }
      }

      return {
        menuLanguageReference,
        selectedLanguage,
        exposeInfo,
        readExpose
      }
      `,
      template: `
        <div class="wiki-storybook-flex-align-center">
          <DesignComponent
            ref="menuLanguageReference"
            v-model:selected="selectedLanguage"
            :list="['en', 'vi']"
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
            @click="menuLanguageReference?.next(); readExpose()"
          >
            Next & Read
          </button>
          <span class="wiki-storybook-card" data-testid="expose-output">{{ exposeInfo }}</span>
        </div>
      `,
      play: `
const nextButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="expose-next"]')
const outputElement = canvasElement.querySelector<HTMLElement>('[data-testid="expose-output"]')
await userEvent.click(nextButton!)

await waitFor(async () => {
  await expect(outputElement).toHaveTextContent('values=["vi"]')
})
      `
    },

    // =========================================================================
    // TIER 2: TEST STORIES (Constructor-level props & combinations)
    // =========================================================================
    {
      id: 'MenuLanguageTestStates',
      name: {
        en: 'Test: Disabled, embedded search, and array selection',
        ru: 'Тест: Отключённое состояние, встроенный поиск и массив выбора'
      },
      propsName: ['disabled', 'isSelectedByValue', 'menuAttrs', 'selected', 'list', 'showPhoneCode'],
      setup: `
      return {
        selectedDisabled: ref<ListSelectedList>('en'),
        selectedEmbedded: ref<ListSelectedList>(['en', 'vi'])
      }
      `,
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent
            v-model:selected="selectedDisabled"
            :list="['en', 'vi']"
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
            :list="['en', 'vi']"
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
    },
    {
      id: 'MenuLanguageTestSearchAndModels',
      name: {
        en: 'Test: Search props, highlightLengthStart, modelSelected, and disableFocusReturn',
        ru: 'Тест: Свойства поиска, highlightLengthStart, modelSelected и disableFocusReturn'
      },
      propsName: [
        'showSearch',
        'filterMode',
        'highlightLengthStart',
        'modelSelected',
        'disableFocusReturn',
        'language',
        'list'
      ],
      setup: `
      return {
        selectedModel: ref<ListSelectedList>('en'),
        selectedSearch: ref<ListSelectedList>('en')
      }
      `,
      template: `
        <div class="wiki-storybook-flex-align-center">
          <DesignComponent
            v-model:model-selected="selectedModel"
            :list="['en', 'vi']"
            :show-search="false"
            :window-attrs="{ 'data-menu-group': 'model' }"
            language="en"
            disable-focus-return
          >
            <template #control="{ binds, selectedNames }">
              <button
                class="wiki-storybook-button"
                type="button"
                v-bind="binds"
                data-testid="test-model-nosearch-trigger"
              >
                {{ selectedNames.value[0] || 'None' }}
              </button>
            </template>
          </DesignComponent>

          <DesignComponent
            v-model:selected="selectedSearch"
            :list="['en', 'vi']"
            :highlight-length-start="2"
            :window-attrs="{ 'data-menu-group': 'search' }"
            language="en"
            show-search
            filter-mode
          >
            <template #control="{ binds }">
              <button
                class="wiki-storybook-button"
                type="button"
                v-bind="binds"
                data-testid="test-search-trigger"
              >
                Search Language: {{ selectedSearch }}
              </button>
            </template>
          </DesignComponent>
        </div>
      `,
      play: `
const modelTrigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="test-model-nosearch-trigger"]')
await expect(modelTrigger).toHaveTextContent('English')

await userEvent.click(modelTrigger!)
await waitFor(async () => {
  await expect(document.querySelector('[data-menu-group="model"] [role="option"][data-value="vi"]')).not.toBeNull()
})
const vietnameseOption = document.querySelector<HTMLElement>('[data-menu-group="model"] [role="option"][data-value="vi"]')
await userEvent.click(vietnameseOption!)
await waitFor(async () => {
  await expect(modelTrigger).toHaveTextContent('Vietnamese')
})

const searchTrigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="test-search-trigger"]')
await userEvent.click(searchTrigger!)
await waitFor(async () => {
  const searchInput = document.querySelector<HTMLInputElement>('[data-menu-group="search"] input')
  await expect(searchInput).not.toBeNull()
})

const searchInput = document.querySelector<HTMLInputElement>('[data-menu-group="search"] input')
await userEvent.type(searchInput!, 'Viet')
await waitFor(async () => {
  const matchedOption = document.querySelector<HTMLElement>('[data-menu-group="search"] [role="option"][data-value="vi"]')
  await expect(matchedOption).not.toBeNull()
})
const matchedOption = document.querySelector<HTMLElement>('[data-menu-group="search"] [role="option"][data-value="vi"]')
await userEvent.click(matchedOption!)
await waitFor(async () => {
  await expect(searchTrigger).toHaveTextContent('Search Language: vi')
})
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'MenuLanguage'} type={'menuLanguage'}/>
<Canvas of={Component.MenuLanguageFilter}/>
<Canvas of={Component.MenuLanguagePhoneCode}/>
<Canvas of={Component.MenuLanguageLanguage}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'click'}/>
<StorybookDescriptions componentName={'Menu'} type={'event.updateValue'}/>
<StorybookDescriptions componentName={'Window'} type={'event.window'}/>
<Canvas of={Component.MenuLanguageEvents}/>
    `,
    expose: `
<StorybookDescriptions componentName={'Window'} type={'expose'}/>
<StorybookDescriptions componentName={'Expose'} type={'selected'}/>
<StorybookDescriptions componentName={'Expose'} type={'loading'}/>
<StorybookDescriptions componentName={'Menu'} type={'expose.navigation'}/>
<Canvas of={Component.MenuLanguageExposeApi}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Menu'} type={'slotsControl'}/>
<StorybookDescriptions componentName={'Menu'} type={'slots'}/>
<Canvas of={Component.MenuLanguageSlots}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <MenuLanguage v-bind="args">
    <template #control="{ binds }">
      <button class="wiki-storybook-button" v-bind="binds">
        Select Language
      </button>
    </template>
  </MenuLanguage>
</div>
    `,
    description: `
The MenuLanguage component is a specialized version of the MenuCountry and Menu components, designed specifically for language selection.
It leverages GeoFlagRef.getNationalLanguage to automatically populate the menu with a list of languages, including native language names and country flags.
It supports all the standard Menu functionalities like Window-based popups, embedded mode, search, custom controls, and expose navigation methods.
Use the 'list' prop to restrict the selection to a specific subset of language or locale codes, 'language' to customize localization, and 'showPhoneCode' to display phone dial code captions.
    `
  }
}
