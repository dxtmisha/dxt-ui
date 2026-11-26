<script setup lang="ts">
import { ref } from 'vue'
import type { ListSelectedList, NumberOrStringOrBoolean } from '@dxtmisha/functional'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { ListItemProps } from '@dxtmisha/d1/D1ListItem'
import type { MenuLanguageExpose } from '@dxtmisha/constructor/MenuLanguage'
import type { WindowEmitOptions } from '@dxtmisha/constructor/Window'

import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const selectedBasic = ref<ListSelectedList>('en')

const selectedCustom = ref<ListSelectedList>('ru')
const defaultEightLanguages = ['en', 'ru', 'vi', 'fr', 'de', 'es', 'zh', 'ja']
const europeanLanguages = ['en', 'fr', 'de', 'es']
const customLanguageList = ref<string[]>(defaultEightLanguages)

const selectedLanguage = ref<ListSelectedList>('vi')
const currentLanguage = ref<string>('en')

const selectedByValue = ref<ListSelectedList>('en')
const selectedByKey = ref<ListSelectedList>('fr')
const selectedMultiple = ref<ListSelectedList>(['en', 'vi'])
const selectedModelSelected = ref<ListSelectedList>('de')
const selectedMutation = ref<ListSelectedList>('en')

const selectedCustomKeys = ref<ListSelectedList>('en-US')
const selectedSearchMode = ref<ListSelectedList>('ru')
const selectedNoSearch = ref<ListSelectedList>('en')
const selectedLiteThreshold = ref<ListSelectedList>('vi')
const selectedLiteForced = ref<ListSelectedList>('fr')
const selectedFocusReturn = ref<ListSelectedList>('en')

const selectedDisabled = ref<ListSelectedList>('fr')
const selectedLoading = ref<ListSelectedList>('en')
const ajaxRequestCount = ref<number>(0)

const selectedEmbedded = ref<ListSelectedList>('en')
const selectedStatic = ref<ListSelectedList>('vi')

const selectedSlots = ref<ListSelectedList>('ja')
const selectedAccessibility = ref<ListSelectedList>('vi')

const selectedBoundaryEmpty = ref<ListSelectedList>('')
const selectedBoundarySpaces = ref<ListSelectedList>('   ')
const selectedBoundaryNullish = ref<ListSelectedList | undefined>(undefined)
const selectedBoundaryUnknown = ref<ListSelectedList>('zz')
const selectedBoundaryNarrow = ref<ListSelectedList>('vi')
const highlightBoundaryText = ref<string>('')
const xssPayload = '<img src=x onerror=alert(1)>'
const unicodePayload = 'Tiếng Việt / Кириллица / 🚀🔥✨'
const unbrokenString = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'

const selectedInDom = ref<ListSelectedList>('en')
const isLifecycleMounted = ref<boolean>(true)
const selectedLifecycle = ref<ListSelectedList>('vi')

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')
const lastWindowOpen = ref<boolean>(false)

const menuLanguageRef = ref<MenuLanguageExpose | null>(null)
const selectedExpose = ref<ListSelectedList>('en')
const exposeStatus = ref<string>('Not checked')

/**
 * Simulates asynchronous language list loading for demonstrating loading state.
 *
 * Имитирует асинхронную загрузку списка языков для демонстрации состояния загрузки.
 * @returns promise resolving to list items / промис со списком элементов
 */
const loadAsyncLanguages = (): Promise<ListItemProps[]> => {
  ajaxRequestCount.value += 1

  return new Promise<ListItemProps[]>(resolve => setTimeout(() => resolve([
    { label: 'English', description: 'English', value: 'en', icon: 'f-us' },
    { label: 'Vietnamese', description: 'Tiếng Việt', value: 'vi', icon: 'f-vn' },
    { label: 'Russian', description: 'русский', value: 'ru', icon: 'f-ru' },
    { label: 'Japanese', description: '日本語', value: 'ja', icon: 'f-jp' }
  ]), 350))
}

/**
 * Tracks emitted demo events and stores serialized payload for display.
 *
 * Отслеживает события демо и сохраняет сериализованную нагрузку для отображения.
 * @param name event name / название события
 * @param payload event arguments / аргументы события
 */
const trackEvent = (name: string, payload?: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = payload === undefined ? 'undefined' : JSON.stringify(payload)
}

/**
 * Handles window state change events from D1MenuLanguage.
 *
 * Обрабатывает события изменения состояния окна от D1MenuLanguage.
 * @param options window event options / параметры события окна
 */
const onWindowEvent = (options: WindowEmitOptions): void => {
  lastWindowOpen.value = options.open
  trackEvent('window', { id: options.id, open: options.open })
}

/**
 * Handles click events from D1MenuLanguage.
 *
 * Обрабатывает события клика от D1MenuLanguage.
 * @param _event mouse event / событие мыши
 * @param options click payload options / параметры клика
 */
const onMenuClick = (_event: MouseEvent, options: EventClickValue): void => {
  trackEvent('click', { type: options.type, value: options.value })
}

/**
 * Handles lightweight click events from D1MenuLanguage.
 *
 * Обрабатывает облегчённые события клика от D1MenuLanguage.
 * @param options click payload options / параметры клика
 */
const onMenuClickLite = (options: EventClickValue): void => {
  trackEvent('clickLite', { type: options.type, value: options.value })
}

/**
 * Handles updateValue events from D1MenuLanguage.
 *
 * Обрабатывает события updateValue от D1MenuLanguage.
 * @param value updated item value / обновлённое значение элемента
 */
const onMenuUpdateValue = (value?: NumberOrStringOrBoolean): void => {
  trackEvent('updateValue', value)
}

/**
 * Reads all exposed methods from the template ref and formats their state.
 *
 * Считывает все экспонируемые методы из template ref и форматирует их состояние.
 */
const checkExposeState = (): void => {
  if (!menuLanguageRef.value) {
    exposeStatus.value = 'Ref not initialized'
    return
  }

  exposeStatus.value = [
    `id=${menuLanguageRef.value.getId()}`,
    `open=${menuLanguageRef.value.getOpen()}`,
    `hasControl=${Boolean(menuLanguageRef.value.getControl())}`,
    `hasMenuElement=${Boolean(menuLanguageRef.value.getMenuElement())}`,
    `loading=${menuLanguageRef.value.loading()}`,
    `selected=${menuLanguageRef.value.isSelected()}`,
    `listCount=${menuLanguageRef.value.getSelectedList().length}`,
    `values=${JSON.stringify(menuLanguageRef.value.getSelectedValues())}`,
    `names=${JSON.stringify(menuLanguageRef.value.getSelectedNames())}`
  ].join(', ')
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="MenuLanguage">
    <D1Section>
      <D1Group label="Basic Usage (Default List)">
        <DemoFlex>
          <D1MenuLanguage v-model:selected="selectedBasic">
            <template #control="{ binds, selectedNames, open }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Select Language'"
                :icon-turn="open.value"
                icon="language"
                icon-trailing="keyboard_arrow_down"
                primary
              />
            </template>
          </D1MenuLanguage>
        </DemoFlex>
        <DemoValue label="selected" :value="selectedBasic"/>
      </D1Group>

      <D1Group label="Custom Language List (list)">
        <DemoFlex>
          <D1Button
            label="8 Languages"
            secondary
            @click="customLanguageList = defaultEightLanguages"
          />
          <D1Button
            label="European (4)"
            secondary
            @click="customLanguageList = europeanLanguages"
          />
          <D1Button
            label="Empty List"
            outline
            @click="customLanguageList = []"
          />
        </DemoFlex>
        <DemoFlex>
          <D1MenuLanguage
            v-model:selected="selectedCustom"
            :list="customLanguageList"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Select Custom Language'"
                icon="translate"
                secondary
              />
            </template>
          </D1MenuLanguage>
        </DemoFlex>
        <DemoValue label="selected" :value="selectedCustom"/>
      </D1Group>

      <D1Group label="Language Localization (language)">
        <DemoFlex>
          <D1Button label="en" outline @click="currentLanguage = 'en'"/>
          <D1Button label="ru" outline @click="currentLanguage = 'ru'"/>
          <D1Button label="vi" outline @click="currentLanguage = 'vi'"/>
          <D1Button label="fr" outline @click="currentLanguage = 'fr'"/>
          <DemoValue label="language" :value="currentLanguage"/>
        </DemoFlex>
        <DemoFlex>
          <D1MenuLanguage
            v-model:selected="selectedLanguage"
            :list="['en', 'ru', 'vi', 'fr', 'de', 'es']"
            :language="currentLanguage"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Select Language'"
                icon="public"
                tonal
              />
            </template>
          </D1MenuLanguage>
        </DemoFlex>
        <DemoValue label="selected" :value="selectedLanguage"/>
      </D1Group>

      <D1Group label="Selection Modes (is-selected-by-value, v-model:model-selected & Multiple)">
        <DemoFlex>
          <D1MenuLanguage
            v-model:selected="selectedByValue"
            :list="['en', 'fr', 'vi']"
            is-selected-by-value
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`By Value: ${selectedNames.value[0] || 'None'}`"
                icon="check_circle"
                outline
              />
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage
            v-model:selected="selectedByKey"
            :list="['en', 'fr', 'vi']"
            :is-selected-by-value="false"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`By Key: ${selectedNames.value[0] || 'None'}`"
                icon="key"
                outline
              />
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage
            v-model:selected="selectedMultiple"
            :list="['en', 'fr', 'vi', 'ru', 'ja']"
            :is-selected-by-value="false"
            :menu-attrs="{ selectionStyle: 'checkbox', max: 3, roleList: 'listbox', roleItem: 'option' }"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Multiple (${selectedNames.value.length}): ${selectedNames.value.join(', ') || 'None'}`"
                icon="checklist"
                tonal
              />
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage
            v-model:model-selected="selectedModelSelected"
            :list="['en', 'de', 'vi']"
            is-selected-by-value
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`v-model:model-selected: ${selectedNames.value[0] || 'None'}`"
                icon="sync"
                outline
              />
            </template>
          </D1MenuLanguage>
        </DemoFlex>
        <DemoValue label="selectedByValue" :value="selectedByValue"/>
        <DemoValue label="selectedByKey" :value="selectedByKey"/>
        <DemoValue label="selectedMultiple" :value="selectedMultiple"/>
        <DemoValue label="selectedModelSelected" :value="selectedModelSelected"/>
      </D1Group>

      <D1Group label="Programmatic v-model Mutation">
        <DemoFlex>
          <D1Button label="Set vi" outline @click="selectedMutation = 'vi'"/>
          <D1Button label="Set ja" outline @click="selectedMutation = 'ja'"/>
          <D1Button label="Clear Selection" outline @click="selectedMutation = ''"/>
        </DemoFlex>
        <DemoFlex>
          <D1MenuLanguage
            v-model:selected="selectedMutation"
            :list="['en', 'vi', 'ja', 'fr']"
          >
            <template #control="{ binds, selectedNames, selectedValues }">
              <D1Button
                v-bind="binds"
                :label="`Controlled: ${selectedNames.value[0] || 'None'} (${selectedValues.value[0] || 'empty'})`"
                icon="edit"
                secondary
              />
            </template>
          </D1MenuLanguage>
        </DemoFlex>
        <DemoValue label="selectedMutation" :value="selectedMutation"/>
      </D1Group>

      <D1Group label="Custom Keys, Search & Lite Mode (keyValue, keyLabel, search, lite, disable-focus-return)">
        <DemoFlex>
          <D1MenuLanguage
            v-model:selected="selectedCustomKeys"
            :list="['en', 'vi', 'ru', 'fr']"
            :menu-attrs="{ keyLabel: 'nationalLanguage', keyValue: 'standard' }"
          >
            <template #control="{ binds, selectedNames, selectedValues }">
              <D1Button
                v-bind="binds"
                :label="`Custom Keys (nationalLanguage/standard): ${selectedNames.value[0] || 'None'} (${selectedValues.value[0] || ''})`"
                icon="label"
                outline
              />
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage
            v-model:selected="selectedSearchMode"
            :list="defaultEightLanguages"
            :highlight-length-start="2"
            show-search
            filter-mode
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Filter Search (min 2): ${selectedNames.value[0] || String(selectedSearchMode)}`"
                icon="search"
                primary
              />
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage
            v-model:selected="selectedNoSearch"
            :list="['en', 'fr', 'vi', 'ja']"
            :show-search="false"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`No Search: ${selectedNames.value[0] || 'None'}`"
                icon="search_off"
                outline
              />
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage
            v-model:selected="selectedLiteThreshold"
            :list="defaultEightLanguages"
            :menu-attrs="{ liteThreshold: 4 }"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Lite Threshold (4): ${selectedNames.value[0] || 'None'}`"
                icon="bolt"
                secondary
              />
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage
            v-model:selected="selectedLiteForced"
            :list="defaultEightLanguages"
            :menu-attrs="{ listAttrs: { lite: true } }"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Forced Lite: ${selectedNames.value[0] || 'None'}`"
                icon="speed"
                secondary
              />
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage
            v-model:selected="selectedFocusReturn"
            :list="['en', 'fr', 'vi']"
            disable-focus-return
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Disable Focus Return: ${selectedNames.value[0] || 'None'}`"
                icon="tab_unselected"
                tonal
              />
            </template>
          </D1MenuLanguage>
        </DemoFlex>
        <DemoValue label="selectedCustomKeys" :value="selectedCustomKeys"/>
        <DemoValue label="selectedSearchMode" :value="selectedSearchMode"/>
        <DemoValue label="selectedNoSearch" :value="selectedNoSearch"/>
        <DemoValue label="selectedLiteThreshold" :value="selectedLiteThreshold"/>
        <DemoValue label="selectedLiteForced" :value="selectedLiteForced"/>
        <DemoValue label="selectedFocusReturn" :value="selectedFocusReturn"/>
      </D1Group>

      <D1Group label="Disabled & Loading States">
        <DemoFlex>
          <D1MenuLanguage
            v-model:selected="selectedDisabled"
            :list="['en', 'fr', 'vi']"
            disabled
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Disabled Language Menu'"
                disabled
              />
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage
            v-model:selected="selectedLoading"
            :list="['en', 'vi']"
            :menu-attrs="{ ajax: loadAsyncLanguages, cache: false }"
          >
            <template #control="{ binds, loading, selectedNames }">
              <D1Button
                v-bind="binds"
                :loading="loading.value"
                :label="`Async Loading${loading.value ? ' (loading...)' : `: ${selectedNames.value[0] || 'None'}`}`"
                icon="cloud_download"
                secondary
              />
            </template>
          </D1MenuLanguage>
        </DemoFlex>
        <DemoValue label="selectedDisabled" :value="selectedDisabled"/>
        <DemoValue label="selectedLoading" :value="selectedLoading"/>
        <DemoValue label="ajaxRequestCount" :value="ajaxRequestCount"/>
      </D1Group>

      <D1Group label="Embedded & Static Modes (embedded, staticMode)">
        <DemoFlex direction="column">
          <DemoBox>
            <D1MenuLanguage
              v-model:selected="selectedEmbedded"
              :list="defaultEightLanguages"
              :menu-attrs="{ embedded: true, showSearch: true, filterMode: true, windowAttrs: { open: true } }"
            />
          </DemoBox>
          <DemoValue label="selectedEmbedded" :value="selectedEmbedded"/>

          <DemoBox>
            <D1MenuLanguage
              v-model:selected="selectedStatic"
              :list="['en', 'vi', 'ru', 'fr']"
              :menu-attrs="{ windowAttrs: { staticMode: true, adaptive: 'static' } }"
            >
              <template #control="{ binds, selectedNames }">
                <D1Button
                  v-bind="binds"
                  :label="`Static Mode Trigger: ${selectedNames.value[0] || 'None'}`"
                  icon="view_agenda"
                  outline
                />
              </template>
            </D1MenuLanguage>
          </DemoBox>
          <DemoValue label="selectedStatic" :value="selectedStatic"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots & Scoped Bindings (control, title, contextTop, contextBottom, footer)">
        <DemoFlex>
          <D1MenuLanguage
            v-model:selected="selectedSlots"
            :list="['en', 'vi', 'ja', 'fr']"
          >
            <template #control="{ binds, selectedNames, open, isSelected, previous, next }">
              <DemoFlex align="center">
                <D1Button
                  label="Prev"
                  size="sm"
                  outline
                  @click="previous"
                />
                <D1Button
                  v-bind="binds"
                  :label="`Slots: ${selectedNames.value[0] || 'Select'} (open=${open.value}, selected=${isSelected.value})`"
                  icon="view_quilt"
                  primary
                />
                <D1Button
                  label="Next"
                  size="sm"
                  outline
                  @click="next"
                />
              </DemoFlex>
            </template>
            <template #title="{ selectedNames }">
              <div class="demo-menu-language-page__slot">
                Choose Language (title slot, current={{ selectedNames.value[0] || 'None' }})
              </div>
            </template>
            <template #contextTop="{ selectedValues }">
              <div class="demo-menu-language-page__slot">
                Top Context Hint (contextTop, code={{ selectedValues.value[0] || 'None' }})
              </div>
            </template>
            <template #contextBottom>
              <div class="demo-menu-language-page__slot">Bottom Context Hint (contextBottom)</div>
            </template>
            <template #footer="{ classesWindow }">
              <div class="demo-menu-language-page__slot">
                <span>ISO 639-1 Language List (footer)</span>
                <D1Button
                  label="Done"
                  size="sm"
                  outline
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1MenuLanguage>
        </DemoFlex>
        <DemoValue label="selectedSlots" :value="selectedSlots"/>
      </D1Group>

      <D1Group label="Accessibility (WAI-ARIA & Keyboard Navigation)">
        <DemoFlex>
          <D1MenuLanguage
            v-model:selected="selectedAccessibility"
            :list="['en', 'vi', 'fr', 'de', 'es']"
            :menu-attrs="{ roleList: 'listbox', roleItem: 'option', tag: 'button' }"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                aria-label="Accessible language selector supporting keyboard navigation"
                :label="`A11y Language: ${selectedNames.value[0] || 'None'}`"
                icon="accessibility_new"
                primary
              />
            </template>
          </D1MenuLanguage>
        </DemoFlex>
        <DemoValue label="selectedAccessibility" :value="selectedAccessibility"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases (Empty, Nullish, Unknown Codes, Unicode, XSS, Narrow)">
        <DemoFlex>
          <D1MenuLanguage
            v-model:selected="selectedBoundaryEmpty"
            :list="['en', 'vi', 'fr']"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Empty '': ${selectedNames.value[0] || 'Fallback'}`"
                outline
              />
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage
            v-model:selected="selectedBoundarySpaces"
            :list="['en', 'vi', 'fr']"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Spaces '   ': ${selectedNames.value[0] || 'Fallback'}`"
                outline
              />
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage
            v-model:selected="selectedBoundaryNullish"
            :list="['en', 'vi', 'fr']"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Undefined: ${selectedNames.value[0] || 'Fallback'}`"
                outline
              />
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage
            v-model:selected="selectedBoundaryUnknown"
            :list="['zz', 'xx', 'en', 'vi']"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Unknown Codes (zz/xx): ${selectedNames.value[0] || 'None'}`"
                outline
              />
            </template>
          </D1MenuLanguage>

          <D1MenuLanguage :list="[]">
            <template #control="{ binds }">
              <D1Button
                v-bind="binds"
                label="Empty List ([])"
                outline
              />
            </template>
          </D1MenuLanguage>
        </DemoFlex>

        <DemoFlex>
          <D1Button
            label="Highlight XSS"
            size="sm"
            outline
            @click="highlightBoundaryText = xssPayload"
          />
          <D1Button
            label="Highlight Unicode"
            size="sm"
            outline
            @click="highlightBoundaryText = unicodePayload"
          />
          <D1Button
            label="Clear Highlight"
            size="sm"
            outline
            @click="highlightBoundaryText = ''"
          />
        </DemoFlex>

        <DemoBox class="demo-menu-language-page__narrow">
          <D1MenuLanguage
            v-model:selected="selectedBoundaryNarrow"
            :list="['vi', 'en', 'fr', 'ru']"
            :menu-attrs="{
              embedded: true,
              showSearch: true,
              highlight: highlightBoundaryText,
              windowAttrs: { open: true }
            }"
          >
            <template #title>
              <div class="demo-menu-language-page__slot">
                {{ unbrokenString }} | {{ unicodePayload }} | {{ xssPayload }}
              </div>
            </template>
          </D1MenuLanguage>
        </DemoBox>
        <DemoValue label="selectedBoundaryNarrow" :value="selectedBoundaryNarrow"/>
      </D1Group>

      <D1Group label="SSR & DOM Lifecycle (in-dom & Conditional Mount)">
        <DemoFlex>
          <D1MenuLanguage
            v-model:selected="selectedInDom"
            :list="['en', 'vi', 'ja']"
            :menu-attrs="{ windowAttrs: { inDom: true } }"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`In-DOM Menu: ${selectedNames.value[0] || 'Select'}`"
                icon="memory"
                outline
              />
            </template>
          </D1MenuLanguage>

          <D1Button
            :label="isLifecycleMounted ? 'Unmount MenuLanguage' : 'Mount MenuLanguage'"
            secondary
            @click="isLifecycleMounted = !isLifecycleMounted"
          />

          <D1MenuLanguage
            v-if="isLifecycleMounted"
            v-model:selected="selectedLifecycle"
            :list="['vi', 'en', 'fr']"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Mounted: ${selectedNames.value[0] || 'Select'}`"
                tonal
              />
            </template>
          </D1MenuLanguage>
        </DemoFlex>
        <DemoValue label="isLifecycleMounted" :value="isLifecycleMounted"/>
      </D1Group>

      <D1Group label="Events & Expose API">
        <DemoFlex>
          <D1MenuLanguage
            ref="menuLanguageRef"
            :selected="selectedExpose"
            :list="['en', 'vi', 'fr', 'ru']"
            @click="onMenuClick"
            @click-lite="onMenuClickLite"
            @update:selected="(value) => { selectedExpose = value; trackEvent('update:selected', value) }"
            @update:model-selected="(value) => trackEvent('update:modelSelected', value)"
            @update-value="onMenuUpdateValue"
            @window="onWindowEvent"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Event & Expose Language'"
                icon="bolt"
                tonal
              />
            </template>
          </D1MenuLanguage>

          <D1Button label="toOpen()" outline @click="menuLanguageRef?.toOpen()"/>
          <D1Button label="toClose()" outline @click="menuLanguageRef?.toClose()"/>
          <D1Button label="setOpen(true)" outline @click="menuLanguageRef?.setOpen(true)"/>
          <D1Button label="setOpen(false)" outline @click="menuLanguageRef?.setOpen(false)"/>
          <D1Button label="toggle()" outline @click="menuLanguageRef?.toggle()"/>
          <D1Button label="previous()" outline @click="menuLanguageRef?.previous()"/>
          <D1Button label="next()" outline @click="menuLanguageRef?.next()"/>
          <D1Button label="Check Expose" secondary @click="checkExposeState"/>
        </DemoFlex>
        <DemoValue label="selectedExpose" :value="selectedExpose"/>
        <DemoValue label="eventName" :value="eventName || 'No events triggered yet'"/>
        <DemoValue label="eventPayload" :value="eventPayload"/>
        <DemoValue label="windowOpen" :value="lastWindowOpen"/>
        <DemoValue label="exposeStatus" :value="exposeStatus"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-menu-language-page {
  &__slot {
    padding: 8px 16px;
    font-size: 12px;
    opacity: 0.75;
    overflow-wrap: anywhere;
  }

  &__narrow {
    max-width: 240px;
  }
}
</style>
