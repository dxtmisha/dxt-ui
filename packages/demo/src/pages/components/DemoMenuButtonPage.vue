<script setup lang="ts">
import { ref } from 'vue'
import type { MenuButtonExpose } from '@dxtmisha/constructor/MenuButton'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const languageOptions = ref([
  { label: 'JavaScript', value: 'js', icon: 'code' },
  { label: 'TypeScript', value: 'ts', icon: 'code' },
  { label: 'Python', value: 'py', icon: 'code' },
  { label: 'Java', value: 'java', icon: 'code' },
  { label: 'C++', value: 'cpp', icon: 'code' },
  { label: 'Ruby', value: 'rb', icon: 'code' },
  { label: 'Go', value: 'go', icon: 'code' },
  { label: 'PHP', value: 'php', icon: 'code' }
])

const boundaryOptions = ref([
  { label: 'Zero Option (0)', value: 0 },
  { label: 'First Option', value: 'option1' },
  { label: 'Second Option', value: 'option2' },
  { label: 'Tiếng Việt 🇻🇳 / Кириллица', value: 'unicode' },
  { label: 'Extremely Long Label Option To Verify Narrow Button Wrapping And Overflow Safety', value: 'long' }
])

const selectedLanguage = ref<string>('js')
const singleValue = ref<string | number>('option2')
const multipleValue = ref<Array<string | number>>(['option1', 'unicode'])
const zeroValue = ref<string | number>(0)

const menuButtonExposeReference = ref<MenuButtonExpose>()
const exposeOutput = ref<string>('No expose action executed yet')
const isDynamicMounted = ref<boolean>(true)

const handleTrackEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleReadExposed = (): void => {
  const currentValue = menuButtonExposeReference.value?.getValue()
  const isOpen = menuButtonExposeReference.value?.getOpen()
  exposeOutput.value = `value=${JSON.stringify(currentValue)}, open=${String(isOpen)}`
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="MenuButton">
    <D1Section class="demo-menu-button-page">
      <D1Group label="Basic Usage & Label Formatting">
        <DemoFlex>
          <D1MenuButton
            v-model="selectedLanguage"
            label="Language"
            :option="languageOptions"
          />
          <D1MenuButton
            v-model="singleValue"
            label="Hide Label (Default)"
            :option="boundaryOptions"
          />
          <D1MenuButton
            v-model="singleValue"
            label="Show Label"
            :hide-label-value="false"
            :option="boundaryOptions"
          />
          <D1MenuButton
            v-model="singleValue"
            label="Custom Separator"
            :hide-label-value="false"
            label-separator=" → "
            :option="boundaryOptions"
          />
        </DemoFlex>
        <DemoValue :value="selectedLanguage" label="Language" />
        <DemoValue :value="singleValue" label="Single Value" />
      </D1Group>

      <D1Group label="Icons, hideValueIcon & Dropdown Arrow">
        <DemoFlex>
          <D1MenuButton
            v-model="selectedLanguage"
            label="Icon + Hide Value (Default)"
            icon="settings"
            :option="languageOptions"
          />
          <D1MenuButton
            v-model="selectedLanguage"
            label="Icon + Show Value"
            icon="settings"
            :hide-value-icon="false"
            :hide-label-value="false"
            :option="languageOptions"
          />
          <D1MenuButton
            v-model="selectedLanguage"
            label="Custom Arrow"
            icon-arrow-down="arrow_drop_down"
            :option="languageOptions"
          />
          <D1MenuButton
            v-model="selectedLanguage"
            label="No Arrow"
            :icon-arrow-down="undefined"
            :option="languageOptions"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Search, Filter Mode & Multiple Selection">
        <DemoFlex>
          <D1MenuButton
            v-model="selectedLanguage"
            label="With Search"
            show-search
            :option="languageOptions"
          />
          <D1MenuButton
            v-model="selectedLanguage"
            label="Filter Mode"
            show-search
            filter-mode
            :option="languageOptions"
          />
          <D1MenuButton
            v-model="multipleValue"
            label="Multiple (max=3)"
            :hide-label-value="false"
            multiple
            :max="3"
            selection-style="auto"
            :option="boundaryOptions"
          />
        </DemoFlex>
        <DemoValue :value="multipleValue" label="Multiple Value" />
      </D1Group>

      <D1Group label="Button Appearances (via buttonAttrs)">
        <DemoFlex>
          <D1MenuButton
            v-model="selectedLanguage"
            label="Primary"
            :button-attrs="{ primary: true }"
            :option="languageOptions"
          />
          <D1MenuButton
            v-model="selectedLanguage"
            label="Secondary"
            :button-attrs="{ secondary: true }"
            :option="languageOptions"
          />
          <D1MenuButton
            v-model="selectedLanguage"
            label="Outline"
            :button-attrs="{ outline: true }"
            :option="languageOptions"
          />
          <D1MenuButton
            v-model="selectedLanguage"
            label="Text"
            :button-attrs="{ text: true }"
            :option="languageOptions"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="States & Form Integration">
        <DemoFlex>
          <D1MenuButton
            v-model="selectedLanguage"
            label="Disabled (No Icon)"
            disabled
            :option="languageOptions"
          />
          <D1MenuButton
            v-model="selectedLanguage"
            label="Readonly"
            readonly
            :option="languageOptions"
          />
        </DemoFlex>

        <D1Form>
          <D1MenuButton
            v-model="singleValue"
            name="menuButtonFormField"
            label="Form Field"
            :hide-label-value="false"
            :option="boundaryOptions"
          />
        </D1Form>
      </D1Group>

      <D1Group label="Slots (#default, #title, #contextTop, #contextBottom, #footer)">
        <DemoFlex>
          <D1MenuButton
            v-model="singleValue"
            :option="boundaryOptions"
          >
            <template #default="{ selectedNames }">
              <span>Custom Trigger ({{ selectedNames?.value?.join(', ') || 'Empty' }})</span>
            </template>
            <template #title>
              <div class="demo-menu-button-page__slot-banner">Custom #title</div>
            </template>
            <template #contextTop>
              <div class="demo-menu-button-page__slot-banner">Custom #contextTop</div>
            </template>
            <template #contextBottom>
              <div class="demo-menu-button-page__slot-banner">Custom #contextBottom</div>
            </template>
            <template #footer>
              <div class="demo-menu-button-page__slot-banner">Custom #footer</div>
            </template>
          </D1MenuButton>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events">
        <D1MenuButton
          :value="selectedLanguage"
          label="Event Tracker"
          :hide-label-value="false"
          :option="languageOptions"
          @input="(event, data) => handleTrackEvent('input', { type: event.type, value: data.value })"
          @input-lite="(data) => handleTrackEvent('inputLite', data)"
          @change="(event, data) => handleTrackEvent('change', { type: event.type, value: data.value })"
          @change-lite="(data) => handleTrackEvent('changeLite', data)"
          @focus="(event) => handleTrackEvent('focus', { type: event.type })"
          @blur="(event) => handleTrackEvent('blur', { type: event.type })"
          @update:model-value="(value) => handleTrackEvent('update:modelValue', { value })"
        />
        <DemoValue :value="eventName" label="Last Event" />
        <DemoValue :value="eventPayload" label="Last Payload" />
      </D1Group>

      <D1Group label="Expose, Boundaries & Lifecycle (v-if)">
        <DemoFlex>
          <D1Button label="toOpen()" outline size="sm" @click="menuButtonExposeReference?.toOpen(); handleReadExposed()" />
          <D1Button label="toClose()" outline size="sm" @click="menuButtonExposeReference?.toClose(); handleReadExposed()" />
          <D1Button label="setValue('option1')" outline size="sm" @click="menuButtonExposeReference?.setValue('option1'); handleReadExposed()" />
          <D1Button label="clear()" outline size="sm" @click="menuButtonExposeReference?.clear(); handleReadExposed()" />
          <D1Button label="Read Expose" outline size="sm" @click="handleReadExposed" />
          <D1Button
            :label="isDynamicMounted ? 'Unmount (v-if)' : 'Mount (v-if)'"
            outline
            size="sm"
            @click="isDynamicMounted = !isDynamicMounted"
          />
        </DemoFlex>

        <DemoFlex>
          <DemoBox v-if="isDynamicMounted" class="demo-menu-button-page__narrow">
            <D1MenuButton
              ref="menuButtonExposeReference"
              v-model="singleValue"
              label="Exposed Button"
              :hide-label-value="false"
              :option="boundaryOptions"
            />
          </DemoBox>
          <DemoBox class="demo-menu-button-page__narrow">
            <D1MenuButton
              v-model="zeroValue"
              :label="0"
              :hide-label-value="false"
              :option="boundaryOptions"
            />
          </DemoBox>
          <DemoBox class="demo-menu-button-page__narrow">
            <D1MenuButton
              model-value="long"
              label="Long Value"
              :option="boundaryOptions"
            />
          </DemoBox>
        </DemoFlex>
        <DemoValue :value="exposeOutput" label="Expose State" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-menu-button-page {
  &__narrow {
    width: 260px;
    max-width: 100%;
  }

  &__slot-banner {
    padding: 4px 8px;
    font-size: 12px;
  }
}
</style>
