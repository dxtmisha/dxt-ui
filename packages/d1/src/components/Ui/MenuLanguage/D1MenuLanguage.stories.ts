import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MenuLanguage from './D1MenuLanguage.vue'
import { MenuLanguageWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { ListSelectedList, NumberOrStringOrBoolean } from '@dxtmisha/functional'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { MenuLanguageExpose } from '@dxtmisha/constructor/MenuLanguage'
import type { WindowEmitOptions } from '@dxtmisha/constructor/Window'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MenuLanguage',
  component: D1MenuLanguage,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MenuLanguageWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MenuLanguageWikiStorybook.getWiki(),
  args: MenuLanguageWikiStorybook.getValues()
} satisfies Meta<typeof D1MenuLanguage>

export default meta

type Story = StoryObj<typeof meta>

export const MenuLanguage: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1MenuLanguage },
    setup: () => ({ args }),
    template: `
      <D1MenuLanguage v-bind="args">
      <template #control="{ binds }">
        <button class="wiki-storybook-button" type="button" v-bind="binds" data-testid="menu-language-main-trigger">
          Select Language
        </button>
      </template>
    </D1MenuLanguage>
    `
  }),
  play: async ({ canvasElement }) => {
    const triggerButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-language-main-trigger"]')
    await expect(triggerButton).toBeInTheDocument()
    await expect(triggerButton).toHaveAttribute('aria-haspopup', 'listbox')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MenuLanguageFilter: Story = {
  name: 'Фильтрация языков',
  render: () => ({
    components: { D1MenuLanguage },
    setup() {
      return {
        selectedLanguage: ref<ListSelectedList>('en'),
        languageCodes: ['en', 'vi']
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-align-center">
          <D1MenuLanguage
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
          </D1MenuLanguage>
          <span class="wiki-storybook-card" data-testid="filter-value">{{ selectedLanguage }}</span>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
export const MenuLanguagePhoneCode: Story = {
  name: 'Телефонные коды (showPhoneCode)',
  render: () => ({
    components: { D1MenuLanguage },
    setup() {
      return {
        selectedLanguage: ref<ListSelectedList>('vi'),
        languageCodes: ['en', 'vi']
      }
    },
    template: `
        
        <D1MenuLanguage
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
        </D1MenuLanguage>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
export const MenuLanguageLanguage: Story = {
  name: 'Языковая локализация (language)',
  render: () => ({
    components: { D1MenuLanguage },
    setup() {
      return {
        selectedLanguage: ref<ListSelectedList>('vi'),
        currentLanguage: ref('ru'),
        languageCodes: ['en', 'vi']
      }
    },
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
          <D1MenuLanguage
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
          </D1MenuLanguage>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const triggerButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="language-trigger"]')
    const switchEnglishButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="switch-en"]')
    await expect(triggerButton).toHaveTextContent('вьетнамский')

    await userEvent.click(switchEnglishButton!)
    await waitFor(async () => {
      await expect(triggerButton).toHaveTextContent('Vietnamese')
    })
  }
}
export const MenuLanguageSlots: Story = {
  name: 'Пользовательские слоты',
  render: () => ({
    components: { D1MenuLanguage },
    setup() {
      return {
        selectedLanguage: ref<ListSelectedList>('en'),
        languageCodes: ['en', 'vi']
      }
    },
    template: `
        
        <D1MenuLanguage
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
        </D1MenuLanguage>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const triggerButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="slots-trigger"]')
    await userEvent.click(triggerButton!)

    await waitFor(async () => {
      await expect(document.querySelector('[data-testid="slot-title"]')).toHaveTextContent('Title Slot')
      await expect(document.querySelector('[data-testid="slot-top"]')).toHaveTextContent('Top Context')
      await expect(document.querySelector('[data-testid="slot-bottom"]')).toHaveTextContent('Bottom Context')
      await expect(document.querySelector('[data-testid="slot-footer"]')).toHaveTextContent('Footer Slot')
    })
    await userEvent.keyboard('{Escape}')
  }
}
export const MenuLanguageEvents: Story = {
  name: 'События (click, updateValue, window)',
  render: () => ({
    components: { D1MenuLanguage },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-align-center">
          <D1MenuLanguage
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
          </D1MenuLanguage>
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
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
export const MenuLanguageExposeApi: Story = {
  name: 'Программное управление через expose',
  render: () => ({
    components: { D1MenuLanguage },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-align-center">
          <D1MenuLanguage
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
          </D1MenuLanguage>
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
      
    `
  }),
  play: async ({ canvasElement }) => {
    const nextButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="expose-next"]')
    const outputElement = canvasElement.querySelector<HTMLElement>('[data-testid="expose-output"]')
    await userEvent.click(nextButton!)

    await waitFor(async () => {
      await expect(outputElement).toHaveTextContent('values=["vi"]')
    })
  }
}
export const MenuLanguageTestStates: Story = {
  name: 'Тест: Отключённое состояние, встроенный поиск и массив выбора',
  render: () => ({
    components: { D1MenuLanguage },
    setup() {
      return {
        selectedDisabled: ref<ListSelectedList>('en'),
        selectedEmbedded: ref<ListSelectedList>(['en', 'vi'])
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1MenuLanguage
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
          </D1MenuLanguage>

          <D1MenuLanguage
            v-model:selected="selectedEmbedded"
            :list="['en', 'vi']"
            :is-selected-by-value="false"
            show-phone-code
            :menu-attrs="{ embedded: true, showSearch: true, filterMode: true, windowAttrs: { open: true } }"
          />
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const disabledTrigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="test-disabled-trigger"]')
    await expect(disabledTrigger).toBeDisabled()

    await waitFor(async () => {
      const embeddedMenu = canvasElement.querySelector<HTMLElement>('.d1-menuLanguage')
      await expect(embeddedMenu).toBeInTheDocument()
      const options = Array.from(canvasElement.querySelectorAll<HTMLElement>('[role="option"]'))
      await expect(options.length).toBe(2)
    })
  }
}
export const MenuLanguageTestSearchAndModels: Story = {
  name: 'Тест: Свойства поиска, highlightLengthStart, modelSelected и disableFocusReturn',
  render: () => ({
    components: { D1MenuLanguage },
    setup() {
      return {
        selectedModel: ref<ListSelectedList>('en'),
        selectedSearch: ref<ListSelectedList>('en')
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-align-center">
          <D1MenuLanguage
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
          </D1MenuLanguage>

          <D1MenuLanguage
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
          </D1MenuLanguage>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
// :story-items [!] System label / Системная метка
