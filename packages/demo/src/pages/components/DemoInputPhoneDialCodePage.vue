<script setup lang="ts">
import { ref } from 'vue'
import type { ListSelectedList, NumberOrStringOrBoolean } from '@dxtmisha/functional'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { WindowEmitOptions } from '@dxtmisha/constructor/Window'

import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const selectedBasic = ref<ListSelectedList | undefined>('VN')
const selectedModel = ref<ListSelectedList | undefined>('US')
const selectedLabelType = ref<'name' | 'code' | 'none'>('code')
const selectedCountryLanguage = ref<ListSelectedList | undefined>('VN')
const currentLanguage = ref<string>('en')
const selectedFiltered = ref<ListSelectedList | undefined>('DE')
const selectedAlternative = ref<ListSelectedList | undefined>('DO')
const selectedEvents = ref<ListSelectedList | undefined>('US')
const lastWindowOpen = ref<boolean>(false)

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<unknown>(undefined)

const onClickEvent = (_event: MouseEvent, options?: EventClickValue) => {
  eventPayload.value = options?.value
  onEvent('click', options?.value)
}

const onClickLiteEvent = (options?: EventClickValue) => {
  eventPayload.value = options?.value
  onEvent('clickLite', options?.value)
}

const onUpdateValueEvent = (value?: NumberOrStringOrBoolean) => {
  eventPayload.value = value
  onEvent('updateValue', value)
}

const onWindowEvent = (options: WindowEmitOptions) => {
  lastWindowOpen.value = options.open
  eventPayload.value = `open=${options.open}`
  onEvent('window', `open=${options.open}`)
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="InputPhoneDialCode">
    <D1Section>
      <D1Group label="Basic Usage & Two-Way Binding">
        <DemoFlex>
          <D1InputPhoneDialCode/>
          <D1InputPhoneDialCode value="US" label-type="code"/>
          <D1InputPhoneDialCode value="VN" label-type="name"/>
        </DemoFlex>
        <DemoFlex>
          <D1InputPhoneDialCode
            v-model:model-selected="selectedBasic"
            label-type="code"
          />
          <D1Button label="Select US" outline @click="selectedBasic = 'US'"/>
          <D1Button label="Select VN" outline @click="selectedBasic = 'VN'"/>
          <D1Button label="Select FR" outline @click="selectedBasic = 'FR'"/>
          <D1Button label="Clear" outline @click="selectedBasic = undefined"/>
        </DemoFlex>
        <DemoValue label="selectedBasic (v-model:model-selected)" :value="selectedBasic"/>
        <DemoFlex>
          <D1InputPhoneDialCode
            :value="typeof selectedModel === 'string' ? selectedModel : undefined"
            label-type="name"
            @update:selected="(value) => selectedModel = value"
          />
        </DemoFlex>
        <DemoValue label="selectedModel (:value + @update:selected)" :value="selectedModel"/>
      </D1Group>

      <D1Group label="Label Display Types (label-type)">
        <DemoFlex>
          <D1InputPhoneDialCode value="US" label-type="none"/>
          <D1InputPhoneDialCode value="US" label-type="code"/>
          <D1InputPhoneDialCode value="US" label-type="name"/>
          <D1InputPhoneDialCode value="VN" :label-type="selectedLabelType"/>
        </DemoFlex>
        <DemoFlex>
          <D1Button label="none" outline @click="selectedLabelType = 'none'"/>
          <D1Button label="code" outline @click="selectedLabelType = 'code'"/>
          <D1Button label="name" outline @click="selectedLabelType = 'name'"/>
        </DemoFlex>
        <DemoValue label="labelType" :value="selectedLabelType"/>
      </D1Group>

      <D1Group label="Trailing Arrow Icon (icon-arrow-down)">
        <DemoFlex>
          <D1InputPhoneDialCode value="US" label-type="code"/>
          <D1InputPhoneDialCode value="VN" label-type="code" icon-arrow-down="expand_more"/>
          <D1InputPhoneDialCode value="DE" label-type="code" :icon-arrow-down="{ icon: 'arrow_drop_down' }"/>
          <D1InputPhoneDialCode value="GB" label-type="code" :icon-arrow-down="undefined"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Disabled & Readonly States">
        <DemoFlex>
          <D1InputPhoneDialCode value="US" label-type="none" disabled/>
          <D1InputPhoneDialCode value="VN" label-type="code" disabled/>
          <D1InputPhoneDialCode value="DE" label-type="name" disabled/>
        </DemoFlex>
        <DemoFlex>
          <D1InputPhoneDialCode value="US" label-type="none" readonly/>
          <D1InputPhoneDialCode value="VN" label-type="code" readonly/>
          <D1InputPhoneDialCode value="DE" label-type="name" readonly/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Country List, Alternative Codes & Auto-Readonly (country-list)">
        <DemoFlex>
          <D1InputPhoneDialCode
            v-model:model-selected="selectedAlternative"
            label-type="code"
            :country-list="['DO', 'VA', 'US', 'VN', 'DE']"
          />
          <D1InputPhoneDialCode
            value="RU"
            label-type="code"
            :country-list="['RU']"
          />
          <D1InputPhoneDialCode
            value="DO"
            label-type="code"
            :country-list="['DO']"
          />
        </DemoFlex>
        <DemoValue label="selectedAlternative (grouped codes DO/VA)" :value="selectedAlternative"/>
      </D1Group>

      <D1Group label="Search, Highlighting, Focus Return & Localization">
        <DemoFlex>
          <D1InputPhoneDialCode
            v-model:model-selected="selectedFiltered"
            label-type="code"
            :country-list="['VN', 'US', 'DE', 'GB', 'FR', 'JP', 'DO']"
            :show-search="true"
            :filter-mode="true"
            :highlight-length-start="1"
          />
          <D1InputPhoneDialCode
            value="US"
            label-type="code"
            :country-list="['US', 'VN', 'DE']"
            :show-search="false"
            :disable-focus-return="false"
          />
          <D1InputPhoneDialCode
            v-model:model-selected="selectedCountryLanguage"
            label-type="name"
            :menu-country-attrs="{
              language: currentLanguage,
              list: ['VN', 'RU', 'US', 'GB', 'FR', 'DE']
            }"
          />
        </DemoFlex>
        <DemoFlex>
          <D1Button label="en" outline @click="currentLanguage = 'en'"/>
          <D1Button label="ru" outline @click="currentLanguage = 'ru'"/>
          <D1Button label="vi" outline @click="currentLanguage = 'vi'"/>
        </DemoFlex>
        <DemoValue label="selectedFiltered" :value="selectedFiltered"/>
        <DemoValue label="language" :value="currentLanguage"/>
      </D1Group>

      <D1Group label="Button Customization (button-attrs)">
        <DemoFlex>
          <D1InputPhoneDialCode
            value="US"
            label-type="code"
            :button-attrs="{ outline: true, primary: true }"
          />
          <D1InputPhoneDialCode
            value="VN"
            label-type="name"
            :button-attrs="{ tonal: true, size: 'md' }"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <DemoFlex>
          <D1InputPhoneDialCode
            v-model:model-selected="selectedEvents"
            label-type="code"
            :menu-country-attrs="{ list: ['US', 'VN', 'DE', 'GB', 'FR'] }"
            @click="onClickEvent"
            @click-lite="onClickLiteEvent"
            @update-value="onUpdateValueEvent"
            @window="onWindowEvent"
          />
        </DemoFlex>
        <DemoValue label="selectedEvents" :value="selectedEvents"/>
        <DemoValue label="eventName" :value="eventName || 'No events triggered yet'"/>
        <DemoValue label="eventPayload" :value="eventPayload"/>
        <DemoValue label="windowOpen" :value="lastWindowOpen"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
