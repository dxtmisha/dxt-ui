<script setup lang="ts">
import { ref } from 'vue'
import type { ListSelectedList, NumberOrStringOrBoolean } from '@dxtmisha/functional'
import type { MenuCountryExpose } from '@dxtmisha/constructor/MenuCountry'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { WindowEmitOptions } from '@dxtmisha/constructor/Window'

import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const selectedBasic = ref<ListSelectedList>('VN')

const selectedCustom = ref<ListSelectedList>('RU')
const customCountryList = ref<string[]>(['VN', 'RU', 'US', 'GB', 'FR', 'DE', 'CN', 'JP'])
const northAmericaList = ['US', 'CA', 'MX']

const selectedPhoneCode = ref<ListSelectedList>('VN')
const selectedModelSelected = ref<ListSelectedList>('GB')
const selectedSearchMode = ref<ListSelectedList>('DO')
const selectedNoSearch = ref<ListSelectedList>('US')
const selectedFocusReturn = ref<ListSelectedList>('VN')

const selectedLanguage = ref<ListSelectedList>('VN')
const currentLanguage = ref<string>('en')

const selectedByValue = ref<ListSelectedList>('US')
const selectedByKey = ref<ListSelectedList>('GB')
const selectedMultiple = ref<ListSelectedList>(['US', 'VN'])

const selectedDisabled = ref<ListSelectedList>('FR')
const selectedEmbedded = ref<ListSelectedList>('US')
const selectedSlots = ref<ListSelectedList>('JP')
const selectedMutation = ref<ListSelectedList>('US')
const selectedAccessibility = ref<ListSelectedList>('VN')

const selectedBoundaryEmpty = ref<ListSelectedList>('')
const selectedBoundarySpaces = ref<ListSelectedList>('   ')
const selectedBoundaryNullish = ref<ListSelectedList | undefined>(undefined)
const selectedBoundaryUnknown = ref<ListSelectedList>('ZZ')
const selectedBoundaryNarrow = ref<ListSelectedList>('VN')
const highlightBoundaryText = ref<string>('')
const xssPayload = '<img src=x onerror=alert(1)>'
const unicodePayload = 'Tiếng Việt / Кириллица / 🚀🔥✨'
const unbrokenString = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'

const selectedInDom = ref<ListSelectedList>('US')
const isLifecycleMounted = ref<boolean>(true)
const selectedLifecycle = ref<ListSelectedList>('VN')

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')
const lastWindowOpen = ref<boolean>(false)

const menuCountryRef = ref<MenuCountryExpose | null>(null)
const selectedExpose = ref<ListSelectedList>('US')
const exposeStatus = ref<string>('Not checked')

const trackEvent = (name: string, payload?: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = payload === undefined ? 'undefined' : JSON.stringify(payload)
}

const onWindowEvent = (options: WindowEmitOptions): void => {
  lastWindowOpen.value = options.open
  trackEvent('window', { id: options.id, open: options.open })
}

const onMenuClick = (_event: MouseEvent, options: EventClickValue): void => {
  trackEvent('click', { type: options.type, value: options.value })
}

const onMenuClickLite = (options: EventClickValue): void => {
  trackEvent('clickLite', { type: options.type, value: options.value })
}

const onMenuUpdateValue = (value?: NumberOrStringOrBoolean): void => {
  trackEvent('updateValue', value)
}

const checkExposeState = (): void => {
  if (!menuCountryRef.value) {
    exposeStatus.value = 'Ref not initialized'
    return
  }

  exposeStatus.value = [
    `id=${menuCountryRef.value.getId()}`,
    `open=${menuCountryRef.value.getOpen()}`,
    `hasControl=${Boolean(menuCountryRef.value.getControl())}`,
    `hasMenuElement=${Boolean(menuCountryRef.value.getMenuElement())}`,
    `loading=${menuCountryRef.value.loading()}`,
    `selected=${menuCountryRef.value.isSelected()}`,
    `listCount=${menuCountryRef.value.getSelectedList().length}`,
    `values=${JSON.stringify(menuCountryRef.value.getSelectedValues())}`,
    `names=${JSON.stringify(menuCountryRef.value.getSelectedNames())}`
  ].join(', ')
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="MenuCountry">
    <D1Section>
      <D1Group label="Basic Usage (Default List)">
        <DemoFlex>
          <D1MenuCountry v-model:selected="selectedBasic">
            <template #control="{ binds, selectedNames, open }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Select Country'"
                :icon-turn="open.value"
                icon="public"
                icon-trailing="keyboard_arrow_down"
                primary
              />
            </template>
          </D1MenuCountry>
        </DemoFlex>
        <DemoValue label="selected" :value="selectedBasic"/>
      </D1Group>

      <D1Group label="Filtered List (list)">
        <DemoFlex>
          <D1Button
            label="8 Countries"
            secondary
            @click="customCountryList = ['VN', 'RU', 'US', 'GB', 'FR', 'DE', 'CN', 'JP']"
          />
          <D1Button
            label="North America (3)"
            secondary
            @click="customCountryList = northAmericaList"
          />
          <D1Button
            label="Empty List"
            outline
            @click="customCountryList = []"
          />
        </DemoFlex>
        <DemoFlex>
          <D1MenuCountry
            v-model:selected="selectedCustom"
            :list="customCountryList"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Select Custom Country'"
                icon="flag"
                secondary
              />
            </template>
          </D1MenuCountry>
        </DemoFlex>
        <DemoValue label="selected" :value="selectedCustom"/>
      </D1Group>

      <D1Group label="Phone Dial Codes & Alternative Code Groups (show-phone-code)">
        <DemoFlex>
          <D1MenuCountry
            v-model:selected="selectedPhoneCode"
            :list="['VN', 'RU', 'US', 'GB', 'FR', 'DE', 'JP', 'DO', 'VA']"
            show-phone-code
          >
            <template #control="{ binds, selectedList, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedList.value[0]?.phoneCode ? `${selectedNames.value[0]} (+${selectedList.value[0].phoneCode})` : String(selectedPhoneCode || 'Select Phone Code')"
                icon="call"
                primary
              />
            </template>
          </D1MenuCountry>
        </DemoFlex>
        <DemoValue label="selected" :value="selectedPhoneCode"/>
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
          <D1MenuCountry
            v-model:selected="selectedLanguage"
            :list="['VN', 'RU', 'US', 'GB', 'FR', 'DE']"
            :language="currentLanguage"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Select Country'"
                icon="translate"
                tonal
              />
            </template>
          </D1MenuCountry>
        </DemoFlex>
        <DemoValue label="selected" :value="selectedLanguage"/>
      </D1Group>

      <D1Group label="Selection Modes (is-selected-by-value, v-model:model-selected & Array)">
        <DemoFlex>
          <D1MenuCountry
            v-model:selected="selectedByValue"
            :list="['US', 'GB', 'VN']"
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
          </D1MenuCountry>

          <D1MenuCountry
            v-model:selected="selectedByKey"
            :list="['US', 'GB', 'VN']"
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
          </D1MenuCountry>

          <D1MenuCountry
            v-model:selected="selectedMultiple"
            :list="['US', 'GB', 'VN', 'FR', 'JP']"
            :is-selected-by-value="false"
            :menu-attrs="{ selectionStyle: 'checkbox', max: 3 }"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Array Highlight (${selectedNames.value.length}): ${selectedNames.value.join(', ') || 'None'}`"
                icon="checklist"
                tonal
              />
            </template>
          </D1MenuCountry>

          <D1MenuCountry
            v-model:model-selected="selectedModelSelected"
            :list="['US', 'GB', 'VN']"
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
          </D1MenuCountry>
        </DemoFlex>
        <DemoValue label="selectedByValue" :value="selectedByValue"/>
        <DemoValue label="selectedByKey" :value="selectedByKey"/>
        <DemoValue label="selectedModelSelected" :value="selectedModelSelected"/>
        <DemoValue label="selectedMultiple" :value="selectedMultiple"/>
      </D1Group>

      <D1Group label="Programmatic v-model Mutation">
        <DemoFlex>
          <D1Button label="Set VN" outline @click="selectedMutation = 'VN'"/>
          <D1Button label="Set JP" outline @click="selectedMutation = 'JP'"/>
          <D1Button label="Clear Selection" outline @click="selectedMutation = ''"/>
        </DemoFlex>
        <DemoFlex>
          <D1MenuCountry
            v-model:selected="selectedMutation"
            :list="['US', 'VN', 'JP', 'GB']"
          >
            <template #control="{ binds, selectedNames, selectedValues }">
              <D1Button
                v-bind="binds"
                :label="`Controlled: ${selectedNames.value[0] || 'None'} (${selectedValues.value[0] || 'empty'})`"
                icon="edit"
                secondary
              />
            </template>
          </D1MenuCountry>
        </DemoFlex>
        <DemoValue label="selectedMutation" :value="selectedMutation"/>
      </D1Group>

      <D1Group label="Search Options & Focus Control (show-search, filter-mode, highlight-length-start, disable-focus-return)">
        <DemoFlex>
          <D1MenuCountry
            v-model:selected="selectedSearchMode"
            :list="['VN', 'RU', 'US', 'GB', 'FR', 'DE', 'DO', 'VA']"
            :highlight-length-start="2"
            show-phone-code
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
          </D1MenuCountry>

          <D1MenuCountry
            v-model:selected="selectedNoSearch"
            :list="['US', 'GB', 'VN', 'JP']"
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
          </D1MenuCountry>

          <D1MenuCountry
            v-model:selected="selectedFocusReturn"
            :list="['US', 'GB', 'VN']"
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
          </D1MenuCountry>
        </DemoFlex>
        <DemoValue label="selectedSearchMode" :value="selectedSearchMode"/>
        <DemoValue label="selectedNoSearch" :value="selectedNoSearch"/>
        <DemoValue label="selectedFocusReturn" :value="selectedFocusReturn"/>
      </D1Group>

      <D1Group label="Disabled State">
        <DemoFlex>
          <D1MenuCountry
            v-model:selected="selectedDisabled"
            :list="['US', 'FR', 'VN']"
            disabled
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Disabled Country Menu'"
                disabled
              />
            </template>
          </D1MenuCountry>
        </DemoFlex>
        <DemoValue label="selected" :value="selectedDisabled"/>
      </D1Group>

      <D1Group label="Embedded & Search (menu-attrs)">
        <DemoBox>
          <D1MenuCountry
            v-model:selected="selectedEmbedded"
            :list="['VN', 'RU', 'US', 'GB', 'FR', 'DE', 'CN', 'JP']"
            :menu-attrs="{ embedded: true, showSearch: true, filterMode: true, windowAttrs: { open: true } }"
            show-phone-code
          />
        </DemoBox>
        <DemoValue label="selectedEmbedded" :value="selectedEmbedded"/>
      </D1Group>

      <D1Group label="Slots & Scoped Bindings (control, title, contextTop, contextBottom, footer)">
        <DemoFlex>
          <D1MenuCountry
            v-model:selected="selectedSlots"
            :list="['VN', 'US', 'JP', 'GB']"
            show-phone-code
          >
            <template #control="{ binds, selectedNames, open, isSelected }">
              <D1Button
                v-bind="binds"
                :label="`Slots: ${selectedNames.value[0] || 'Select'} (open=${open.value}, selected=${isSelected.value})`"
                icon="view_quilt"
                primary
              />
            </template>
            <template #title="{ selectedNames }">
              <div class="demo-menu-country-page__slot">
                Choose Country (title slot, current={{ selectedNames.value[0] || 'None' }})
              </div>
            </template>
            <template #contextTop="{ selectedValues }">
              <div class="demo-menu-country-page__slot">
                Top Context Hint (contextTop, code={{ selectedValues.value[0] || 'None' }})
              </div>
            </template>
            <template #contextBottom>
              <div class="demo-menu-country-page__slot">Bottom Context Hint (contextBottom)</div>
            </template>
            <template #footer="{ classesWindow }">
              <div class="demo-menu-country-page__slot">
                <span>ISO 3166-1 Country List (footer)</span>
                <D1Button
                  label="Done"
                  size="sm"
                  outline
                  :class="classesWindow.close"
                />
              </div>
            </template>
          </D1MenuCountry>
        </DemoFlex>
        <DemoValue label="selectedSlots" :value="selectedSlots"/>
      </D1Group>

      <D1Group label="Accessibility (WAI-ARIA & Keyboard Navigation)">
        <DemoFlex>
          <D1MenuCountry
            v-model:selected="selectedAccessibility"
            :list="['VN', 'US', 'GB', 'FR', 'DE']"
            :menu-attrs="{ roleList: 'listbox', roleItem: 'option' }"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                aria-label="Accessible country selector"
                :label="`A11y Country: ${selectedNames.value[0] || 'None'}`"
                icon="accessibility_new"
                primary
              />
            </template>
          </D1MenuCountry>
        </DemoFlex>
        <DemoValue label="selectedAccessibility" :value="selectedAccessibility"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases (Empty, Nullish, Unknown Codes, Unicode, XSS, Narrow)">
        <DemoFlex>
          <D1MenuCountry
            v-model:selected="selectedBoundaryEmpty"
            :list="['US', 'VN', 'GB']"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Empty '': ${selectedNames.value[0] || 'Fallback'}`"
                outline
              />
            </template>
          </D1MenuCountry>

          <D1MenuCountry
            v-model:selected="selectedBoundarySpaces"
            :list="['US', 'VN', 'GB']"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Spaces '   ': ${selectedNames.value[0] || 'Fallback'}`"
                outline
              />
            </template>
          </D1MenuCountry>

          <D1MenuCountry
            v-model:selected="selectedBoundaryNullish"
            :list="['US', 'VN', 'GB']"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Undefined: ${selectedNames.value[0] || 'Fallback'}`"
                outline
              />
            </template>
          </D1MenuCountry>

          <D1MenuCountry
            v-model:selected="selectedBoundaryUnknown"
            :list="['ZZ', 'XX', 'US', 'VN']"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Unknown Codes (ZZ/XX): ${selectedNames.value[0] || 'None'}`"
                outline
              />
            </template>
          </D1MenuCountry>
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

        <DemoBox class="demo-menu-country-page__narrow">
          <D1MenuCountry
            v-model:selected="selectedBoundaryNarrow"
            :list="['VN', 'US', 'GB', 'DO']"
            :menu-attrs="{
              embedded: true,
              showSearch: true,
              highlight: highlightBoundaryText,
              windowAttrs: { open: true }
            }"
            show-phone-code
          >
            <template #title>
              <div class="demo-menu-country-page__slot">
                {{ unbrokenString }} | {{ unicodePayload }} | {{ xssPayload }}
              </div>
            </template>
          </D1MenuCountry>
        </DemoBox>
        <DemoValue label="selectedBoundaryNarrow" :value="selectedBoundaryNarrow"/>
      </D1Group>

      <D1Group label="SSR & DOM Lifecycle (in-dom & Conditional Mount)">
        <DemoFlex>
          <D1MenuCountry
            v-model:selected="selectedInDom"
            :list="['US', 'VN', 'JP']"
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
          </D1MenuCountry>

          <D1Button
            :label="isLifecycleMounted ? 'Unmount MenuCountry' : 'Mount MenuCountry'"
            secondary
            @click="isLifecycleMounted = !isLifecycleMounted"
          />

          <D1MenuCountry
            v-if="isLifecycleMounted"
            v-model:selected="selectedLifecycle"
            :list="['VN', 'US', 'GB']"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Mounted: ${selectedNames.value[0] || 'Select'}`"
                tonal
              />
            </template>
          </D1MenuCountry>
        </DemoFlex>
        <DemoValue label="isLifecycleMounted" :value="isLifecycleMounted"/>
      </D1Group>

      <D1Group label="Events & Expose API">
        <DemoFlex>
          <D1MenuCountry
            ref="menuCountryRef"
            v-model:selected="selectedExpose"
            :list="['US', 'VN', 'GB', 'FR']"
            @click="onMenuClick"
            @click-lite="onMenuClickLite"
            @update:selected="(value) => trackEvent('update:selected', value)"
            @update:model-selected="(value) => trackEvent('update:modelSelected', value)"
            @update-value="onMenuUpdateValue"
            @window="onWindowEvent"
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedNames.value[0] || 'Event & Expose Country'"
                icon="bolt"
                tonal
              />
            </template>
          </D1MenuCountry>

          <D1Button label="toOpen()" outline @click="menuCountryRef?.toOpen()"/>
          <D1Button label="toClose()" outline @click="menuCountryRef?.toClose()"/>
          <D1Button label="setOpen(true)" outline @click="menuCountryRef?.setOpen(true)"/>
          <D1Button label="setOpen(false)" outline @click="menuCountryRef?.setOpen(false)"/>
          <D1Button label="toggle()" outline @click="menuCountryRef?.toggle()"/>
          <D1Button label="previous()" outline @click="menuCountryRef?.previous()"/>
          <D1Button label="next()" outline @click="menuCountryRef?.next()"/>
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
.demo-menu-country-page {
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
