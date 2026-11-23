import type { Meta, StoryObj } from '@storybook/vue3-vite'

import D1MenuCountry from './D1MenuCountry.vue'
import { MenuCountryWikiStorybook } from './wiki'

// :story-import [!] System label / Системная метка
import { ref } from 'vue'
import type { ListSelectedList, NumberOrStringOrBoolean } from '@dxtmisha/functional'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { MenuCountryExpose } from '@dxtmisha/constructor/MenuCountry'
import type { WindowEmitOptions } from '@dxtmisha/constructor/Window'
import { expect, userEvent, waitFor } from 'storybook/test'
// :story-import [!] System label / Системная метка

const meta = {
  title: 'Ui/MenuCountry',
  component: D1MenuCountry,
  parameters: {
    design: 'd1',
    docs: {
      description: {
        component: MenuCountryWikiStorybook.getDescription()
      }
    }
  },
  argTypes: MenuCountryWikiStorybook.getWiki(),
  args: MenuCountryWikiStorybook.getValues()
} satisfies Meta<typeof D1MenuCountry>

export default meta

type Story = StoryObj<typeof meta>

export const MenuCountry: Story = {
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: { D1MenuCountry },
    setup: () => ({ args }),
    template: `
      <D1MenuCountry v-bind="args">
      <template #control="{ binds }">
        <button class="wiki-storybook-button" type="button" v-bind="binds" data-testid="menu-country-main-trigger">
          Select Country
        </button>
      </template>
    </D1MenuCountry>
    `
  }),
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="menu-country-main-trigger"]')
    await expect(trigger).toBeInTheDocument()
    await expect(trigger).toHaveAttribute('aria-haspopup', 'listbox')
  }
  // :story-main [!] System label / Системная метка
}

// :story-items [!] System label / Системная метка
export const MenuCountryFilter: Story = {
  name: 'Фильтрация стран',
  render: () => ({
    components: { D1MenuCountry },
    setup() {
      return {
        selectedValue: ref<ListSelectedList>('US'),
        list: ['US', 'VN']
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-align-center">
          <D1MenuCountry
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
          </D1MenuCountry>
          <span class="wiki-storybook-card" data-testid="filter-value">{{ selectedValue }}</span>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
export const MenuCountryPhoneCode: Story = {
  name: 'Телефонные коды (showPhoneCode)',
  render: () => ({
    components: { D1MenuCountry },
    setup() {
      return {
        selectedCountry: ref<ListSelectedList>('VN'),
        countryCodes: ['US', 'VN']
      }
    },
    template: `
        
        <D1MenuCountry
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
        </D1MenuCountry>
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
export const MenuCountryLanguage: Story = {
  name: 'Языковая локализация (language)',
  render: () => ({
    components: { D1MenuCountry },
    setup() {
      return {
        selectedCountry: ref<ListSelectedList>('VN'),
        currentLanguage: ref('ru'),
        countryCodes: ['US', 'VN']
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
          <D1MenuCountry
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
          </D1MenuCountry>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="language-trigger"]')
    const switchEn = canvasElement.querySelector<HTMLButtonElement>('[data-testid="switch-en"]')
    await expect(trigger).toHaveTextContent('Вьетнам')

    await userEvent.click(switchEn!)
    await waitFor(async () => {
      await expect(trigger).toHaveTextContent('Vietnam')
    })
  }
}
export const MenuCountrySlots: Story = {
  name: 'Пользовательские слоты',
  render: () => ({
    components: { D1MenuCountry },
    setup() {
      return {
        selectedCountry: ref<ListSelectedList>('US'),
        countryCodes: ['US', 'VN']
      }
    },
    template: `
        
        <D1MenuCountry
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
        </D1MenuCountry>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="slots-trigger"]')
    await userEvent.click(trigger!)

    await waitFor(async () => {
      await expect(document.querySelector('[data-testid="slot-title"]')).toHaveTextContent('Title Slot')
      await expect(document.querySelector('[data-testid="slot-top"]')).toHaveTextContent('Top Context')
      await expect(document.querySelector('[data-testid="slot-bottom"]')).toHaveTextContent('Bottom Context')
      await expect(document.querySelector('[data-testid="slot-footer"]')).toHaveTextContent('Footer Slot')
    })
    await userEvent.keyboard('{Escape}')
  }
}
export const MenuCountryEvents: Story = {
  name: 'События (click, updateValue, window)',
  render: () => ({
    components: { D1MenuCountry },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-align-center">
          <D1MenuCountry
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
          </D1MenuCountry>
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
      
    `
  }),
  play: async ({ canvasElement }) => {
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
  }
}
export const MenuCountryExposeApi: Story = {
  name: 'Программное управление через expose',
  render: () => ({
    components: { D1MenuCountry },
    setup() {
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
    },
    template: `
        
        <div class="wiki-storybook-flex-align-center">
          <D1MenuCountry
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
          </D1MenuCountry>
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
      
    `
  }),
  play: async ({ canvasElement }) => {
    const nextButton = canvasElement.querySelector<HTMLButtonElement>('[data-testid="expose-next"]')
    const output = canvasElement.querySelector<HTMLElement>('[data-testid="expose-output"]')
    await userEvent.click(nextButton!)

    await waitFor(async () => {
      await expect(output).toHaveTextContent('values=["VN"]')
    })
  }
}
export const MenuCountryTestStates: Story = {
  name: 'Тест: Отключённое состояние, встроенный поиск и массив выбора',
  render: () => ({
    components: { D1MenuCountry },
    setup() {
      return {
        selectedDisabled: ref<ListSelectedList>('US'),
        selectedEmbedded: ref<ListSelectedList>(['US', 'VN'])
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-column">
          <D1MenuCountry
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
          </D1MenuCountry>

          <D1MenuCountry
            v-model:selected="selectedEmbedded"
            :list="['US', 'VN']"
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
      const embeddedMenu = canvasElement.querySelector<HTMLElement>('.d1-menuCountry')
      await expect(embeddedMenu).toBeInTheDocument()
      const options = Array.from(canvasElement.querySelectorAll<HTMLElement>('[role="option"]'))
      await expect(options.length).toBe(2)
    })
  }
}
export const MenuCountryTestSearchAndDialGroups: Story = {
  name: 'Тест: Группы альтернативных кодов, свойства поиска, modelSelected и disableFocusReturn',
  render: () => ({
    components: { D1MenuCountry },
    setup() {
      return {
        selectedModel: ref<ListSelectedList>('GB'),
        selectedGroup: ref<ListSelectedList>('VN')
      }
    },
    template: `
        
        <div class="wiki-storybook-flex-align-center">
          <D1MenuCountry
            v-model:model-selected="selectedModel"
            :list="['US', 'GB', 'VN']"
            :show-search="false"
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
          </D1MenuCountry>

          <D1MenuCountry
            v-model:selected="selectedGroup"
            :list="['VN', 'DO']"
            :highlight-length-start="2"
            show-phone-code
            show-search
            filter-mode
          >
            <template #control="{ binds }">
              <button
                class="wiki-storybook-button"
                type="button"
                v-bind="binds"
                data-testid="test-group-search-trigger"
              >
                Dial Group: {{ selectedGroup }}
              </button>
            </template>
          </D1MenuCountry>
        </div>
      
    `
  }),
  play: async ({ canvasElement }) => {
    const modelTrigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="test-model-nosearch-trigger"]')
    await expect(modelTrigger).toHaveTextContent('United Kingdom')

    await userEvent.click(modelTrigger!)
    await waitFor(async () => {
      await expect(document.querySelector('[role="option"][data-value="VN"]')).not.toBeNull()
    })
    const vietnamOption = document.querySelector<HTMLElement>('[role="option"][data-value="VN"]')
    await userEvent.click(vietnamOption!)
    await waitFor(async () => {
      await expect(modelTrigger).toHaveTextContent('Vietnam')
    })

    const groupTrigger = canvasElement.querySelector<HTMLButtonElement>('[data-testid="test-group-search-trigger"]')
    await userEvent.click(groupTrigger!)
    await waitFor(async () => {
      const searchInput = document.querySelector<HTMLInputElement>('[data-status="open"] input')
      await expect(searchInput).not.toBeNull()
    })

    const searchInput = document.querySelector<HTMLInputElement>('[data-status="open"] input')
    await userEvent.type(searchInput!, '1829')
    await waitFor(async () => {
      const matchedOption = document.querySelector<HTMLElement>('[role="option"][data-value="DO-1-829"]')
      await expect(matchedOption).not.toBeNull()
    })
    const matchedOption = document.querySelector<HTMLElement>('[role="option"][data-value="DO-1-829"]')
    await userEvent.click(matchedOption!)
    await waitFor(async () => {
      await expect(groupTrigger).toHaveTextContent('Dial Group: DO-1-829')
    })
  }
}
// :story-items [!] System label / Системная метка
