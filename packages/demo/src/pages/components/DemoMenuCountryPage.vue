<script setup lang="ts">
import { ref } from 'vue'
import type { ListSelectedList } from '@dxtmisha/functional'
import type { MenuCountryExpose } from '@dxtmisha/constructor/MenuCountry'
import type { WindowEmitOptions } from '@dxtmisha/constructor/Window'

import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const selectedBasic = ref<ListSelectedList>('VN')

const selectedCustom = ref<ListSelectedList>('RU')
const customList = ref<string[]>(['VN', 'RU', 'US', 'GB', 'FR', 'DE', 'CN', 'JP'])
const shortList = ['US', 'CA', 'MX']

const selectedPhoneCode = ref<ListSelectedList>('VN')

const selectedLanguage = ref<ListSelectedList>('VN')
const currentLanguage = ref<string>('en')

const selectedByValue = ref<ListSelectedList>('US')
const selectedByKey = ref<ListSelectedList>('GB')
const selectedMultiple = ref<ListSelectedList>(['US', 'VN'])

const selectedDisabled = ref<ListSelectedList>('FR')
const selectedEmbedded = ref<ListSelectedList>('US')
const selectedSlots = ref<ListSelectedList>('JP')

const { eventName, eventValue, onEvent } = useDemoEvent()
const lastWindowOpen = ref<boolean>(false)

const menuCountryRef = ref<MenuCountryExpose | null>(null)
const selectedExpose = ref<ListSelectedList>('US')
const exposeStatus = ref<string>('Not checked')

const onWindowEvent = (options: WindowEmitOptions) => {
  lastWindowOpen.value = options.open
  onEvent('window', `open=${options.open}`)
}

const checkExposeState = () => {
  if (!menuCountryRef.value) {
    exposeStatus.value = 'Ref not initialized'
    return
  }

  exposeStatus.value = [
    `id=${menuCountryRef.value.getId()}`,
    `open=${menuCountryRef.value.getOpen()}`,
    `selected=${menuCountryRef.value.isSelected()}`,
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
            @click="customList = ['VN', 'RU', 'US', 'GB', 'FR', 'DE', 'CN', 'JP']"
          />
          <D1Button
            label="North America (3)"
            secondary
            @click="customList = shortList"
          />
          <D1Button
            label="Empty List"
            outline
            @click="customList = []"
          />
        </DemoFlex>
        <DemoFlex>
          <D1MenuCountry
            v-model:selected="selectedCustom"
            :list="customList"
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

      <D1Group label="Phone Dial Codes (show-phone-code)">
        <DemoFlex>
          <D1MenuCountry
            v-model:selected="selectedPhoneCode"
            :list="['VN', 'RU', 'US', 'GB', 'FR', 'DE', 'JP']"
            show-phone-code
          >
            <template #control="{ binds, selectedList, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="selectedList.value[0]?.phoneCode ? `${selectedNames.value[0]} (+${selectedList.value[0].phoneCode})` : 'Select Phone Code'"
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

      <D1Group label="Selection Modes (is-selected-by-value & Array)">
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
        </DemoFlex>
        <DemoValue label="selectedByValue" :value="selectedByValue"/>
        <DemoValue label="selectedMultiple" :value="selectedMultiple"/>
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

      <D1Group label="Slots (control, title, contextTop, contextBottom, footer)">
        <DemoFlex>
          <D1MenuCountry
            v-model:selected="selectedSlots"
            :list="['VN', 'US', 'JP', 'GB']"
            show-phone-code
          >
            <template #control="{ binds, selectedNames }">
              <D1Button
                v-bind="binds"
                :label="`Slots: ${selectedNames.value[0] || 'Select'}`"
                icon="view_quilt"
                primary
              />
            </template>
            <template #title>
              <div class="demo-menu-country-page__slot">Choose Country (title slot)</div>
            </template>
            <template #contextTop>
              <div class="demo-menu-country-page__slot">Top Context Hint (contextTop)</div>
            </template>
            <template #contextBottom>
              <div class="demo-menu-country-page__slot">Bottom Context Hint (contextBottom)</div>
            </template>
            <template #footer>
              <div class="demo-menu-country-page__slot">ISO 3166-1 Country List (footer)</div>
            </template>
          </D1MenuCountry>
        </DemoFlex>
        <DemoValue label="selectedSlots" :value="selectedSlots"/>
      </D1Group>

      <D1Group label="Events & Expose API">
        <DemoFlex>
          <D1MenuCountry
            ref="menuCountryRef"
            v-model:selected="selectedExpose"
            :list="['US', 'VN', 'GB', 'FR']"
            @click="onEvent('click')"
            @update-value="(value) => onEvent('updateValue', value)"
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
          <D1Button label="toggle()" outline @click="menuCountryRef?.toggle()"/>
          <D1Button label="previous()" outline @click="menuCountryRef?.previous()"/>
          <D1Button label="next()" outline @click="menuCountryRef?.next()"/>
          <D1Button label="Check Expose" secondary @click="checkExposeState"/>
        </DemoFlex>
        <DemoValue label="selectedExpose" :value="selectedExpose"/>
        <DemoValue label="eventName" :value="eventName || 'No events triggered yet'"/>
        <DemoValue label="eventValue" :value="eventValue"/>
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
  }
}
</style>
