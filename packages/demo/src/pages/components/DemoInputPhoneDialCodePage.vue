<script setup lang="ts">
import { ref } from 'vue'
import type { ListSelectedList, NumberOrStringOrBoolean } from '@dxtmisha/functional'
import type { EventClickValue } from '@dxtmisha/constructor'
import type { WindowEmitOptions } from '@dxtmisha/constructor/Window'

import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const selectedBasic = ref<ListSelectedList | undefined>('VN')
const selectedDirect = ref<ListSelectedList | undefined>('GB')
const selectedModel = ref<ListSelectedList | undefined>('US')
const selectedLabelType = ref<'name' | 'code' | 'none'>('code')
const selectedCountryLanguage = ref<ListSelectedList | undefined>('VN')
const currentLanguage = ref<string>('en')
const selectedFiltered = ref<ListSelectedList | undefined>('DE')
const selectedAlternative = ref<ListSelectedList | undefined>('DO')
const selectedEvents = ref<ListSelectedList | undefined>('US')
const lastWindowOpen = ref<boolean>(false)

const isDynamicDisabled = ref<boolean>(false)
const isDynamicReadonly = ref<boolean>(false)
const isDynamicSkeleton = ref<boolean>(false)
const blockedTriggerCount = ref<number>(0)
const isLifecycleMounted = ref<boolean>(true)

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const trackEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const onClickEvent = (mouseEvent: MouseEvent, clickOptions?: EventClickValue): void => {
  trackEvent('click', { eventType: mouseEvent.type, value: clickOptions?.value, type: clickOptions?.type })
}

const onClickLiteEvent = (clickOptions?: EventClickValue): void => {
  trackEvent('clickLite', { value: clickOptions?.value, type: clickOptions?.type })
}

const onUpdateSelectedEvent = (nextValue?: ListSelectedList): void => {
  trackEvent('update:selected', { value: nextValue })
}

const onUpdateModelSelectedEvent = (nextValue?: ListSelectedList): void => {
  trackEvent('update:modelSelected', { value: nextValue })
}

const onUpdateValueEvent = (nextValue?: NumberOrStringOrBoolean): void => {
  trackEvent('updateValue', { value: nextValue })
}

const onWindowEvent = (windowOptions: WindowEmitOptions): void => {
  lastWindowOpen.value = windowOptions.open
  trackEvent('window', { open: windowOptions.open })
}

const handleBlockedEvent = (): void => {
  blockedTriggerCount.value += 1
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="InputPhoneDialCode">
    <D1Section class="demo-input-phone-dial-code-page">
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
          <D1Button label="Select US" size="sm" outline @click="selectedBasic = 'US'"/>
          <D1Button label="Select VN" size="sm" outline @click="selectedBasic = 'VN'"/>
          <D1Button label="Select FR" size="sm" outline @click="selectedBasic = 'FR'"/>
          <D1Button label="Clear" size="sm" outline @click="selectedBasic = undefined"/>
        </DemoFlex>
        <DemoValue label="selectedBasic (v-model:model-selected)" :value="selectedBasic"/>

        <DemoFlex>
          <D1InputPhoneDialCode
            v-model:selected="selectedDirect"
            label-type="code"
          />
          <D1Button label="Direct JP" size="sm" outline @click="selectedDirect = 'JP'"/>
        </DemoFlex>
        <DemoValue label="selectedDirect (v-model:selected)" :value="selectedDirect"/>

        <DemoFlex>
          <D1InputPhoneDialCode
            :value="typeof selectedModel === 'string' ? selectedModel : undefined"
            label-type="name"
            @update:selected="(nextValue) => selectedModel = nextValue"
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
          <D1Button label="none" size="sm" outline @click="selectedLabelType = 'none'"/>
          <D1Button label="code" size="sm" outline @click="selectedLabelType = 'code'"/>
          <D1Button label="name" size="sm" outline @click="selectedLabelType = 'name'"/>
        </DemoFlex>
        <DemoValue label="labelType" :value="selectedLabelType"/>
      </D1Group>

      <D1Group label="Trailing Arrow Icon (icon-arrow-down)">
        <DemoFlex>
          <D1InputPhoneDialCode value="US" label-type="code"/>
          <D1InputPhoneDialCode value="VN" label-type="code" icon-arrow-down="expand_more"/>
          <D1InputPhoneDialCode value="DE" label-type="code" :icon-arrow-down="{ icon: 'arrow_drop_down' }"/>
          <D1InputPhoneDialCode value="GB" label-type="code" :icon-arrow-down="undefined"/>
          <D1InputPhoneDialCode value="JP" label-type="code" :icon-arrow-down="null"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="States, Skeleton & Dynamic Toggles">
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
        <DemoFlex align="center">
          <D1Skeleton :active="isDynamicSkeleton">
            <D1InputPhoneDialCode
              value="VN"
              label-type="code"
              :disabled="isDynamicDisabled"
              :readonly="isDynamicReadonly"
              :button-attrs="{ isSkeleton: isDynamicSkeleton }"
            />
          </D1Skeleton>
          <D1Button label="Toggle Disabled" size="sm" outline @click="isDynamicDisabled = !isDynamicDisabled"/>
          <D1Button label="Toggle Readonly" size="sm" outline @click="isDynamicReadonly = !isDynamicReadonly"/>
          <D1Button label="Toggle Skeleton" size="sm" outline @click="isDynamicSkeleton = !isDynamicSkeleton"/>
        </DemoFlex>
        <DemoValue
          label="Dynamic Flags"
          :value="{ isDynamicDisabled, isDynamicReadonly, isDynamicSkeleton }"
        />
      </D1Group>

      <D1Group label="Blocked & Guarded Actions">
        <DemoFlex>
          <D1InputPhoneDialCode
            value="US"
            label-type="code"
            disabled
            @click="handleBlockedEvent"
            @update-value="handleBlockedEvent"
            @window="handleBlockedEvent"
          />
          <D1InputPhoneDialCode
            value="VN"
            label-type="code"
            readonly
            @click="handleBlockedEvent"
            @update-value="handleBlockedEvent"
            @window="handleBlockedEvent"
          />
          <D1InputPhoneDialCode
            value="RU"
            label-type="code"
            :country-list="['RU']"
            @click="handleBlockedEvent"
            @update-value="handleBlockedEvent"
            @window="handleBlockedEvent"
          />
        </DemoFlex>
        <DemoValue label="Blocked Trigger Count" :value="blockedTriggerCount"/>
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
          <D1InputPhoneDialCode
            value="US"
            label-type="code"
            :country-list="[]"
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
            value="DE"
            label-type="code"
            :country-list="['VN', 'US', 'DE', 'GB', 'FR']"
            :show-search="true"
            :filter-mode="false"
            :highlight-length-start="3"
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
          <D1Button label="en" size="sm" outline @click="currentLanguage = 'en'"/>
          <D1Button label="ru" size="sm" outline @click="currentLanguage = 'ru'"/>
          <D1Button label="vi" size="sm" outline @click="currentLanguage = 'vi'"/>
        </DemoFlex>
        <DemoValue label="selectedFiltered" :value="selectedFiltered"/>
        <DemoValue label="language" :value="currentLanguage"/>
      </D1Group>

      <D1Group label="Button Customization (Palettes, Sizes & Shapes)">
        <DemoFlex>
          <D1InputPhoneDialCode
            value="US"
            label-type="code"
            :button-attrs="{ outline: true, primary: true }"
          />
          <D1InputPhoneDialCode
            value="VN"
            label-type="name"
            :button-attrs="{ secondary: true, size: 'md' }"
          />
          <D1InputPhoneDialCode
            value="DE"
            label-type="code"
            :button-attrs="{ outline: true, palette: 'emerald', size: 'lg', roundedFull: true }"
          />
          <D1InputPhoneDialCode
            value="FR"
            label-type="code"
            :button-attrs="{ primary: true, palette: 'red', size: 'sm' }"
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
            @update:selected="onUpdateSelectedEvent"
            @update:model-selected="onUpdateModelSelectedEvent"
            @update-value="onUpdateValueEvent"
            @window="onWindowEvent"
          />
        </DemoFlex>
        <DemoValue label="selectedEvents" :value="selectedEvents"/>
        <DemoValue label="eventName" :value="eventName || 'No events triggered yet'"/>
        <DemoValue label="eventPayload" :value="eventPayload"/>
        <DemoValue label="windowOpen" :value="lastWindowOpen"/>
      </D1Group>

      <D1Group label="Accessibility (ARIA & Keyboard)">
        <DemoFlex>
          <D1InputPhoneDialCode
            value="US"
            label-type="code"
            :disable-focus-return="false"
            :button-attrs="{ 'aria-label': 'Select country dial code (restores focus)' }"
          />
          <D1InputPhoneDialCode
            value="VN"
            label-type="name"
            :disable-focus-return="true"
            :button-attrs="{ 'aria-label': 'Select country dial code (no focus return)' }"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex>
          <D1InputPhoneDialCode value="" label-type="code"/>
          <D1InputPhoneDialCode value="   " label-type="code"/>
          <D1InputPhoneDialCode value="ZZ" label-type="code"/>
        </DemoFlex>
        <DemoBox class="demo-input-phone-dial-code-page__narrow" size="sm">
          <D1InputPhoneDialCode value="BA" label-type="name"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex>
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <DemoFlex v-if="isLifecycleMounted">
          <D1InputPhoneDialCode value="VN" label-type="code"/>
        </DemoFlex>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-input-phone-dial-code-page {
  &__narrow {
    width: 100%;
    max-width: 240px;
  }
}
</style>
