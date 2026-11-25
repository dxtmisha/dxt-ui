<script setup lang="ts">
import { ref } from 'vue'
import type { SelectExpose } from '@dxtmisha/constructor/Select'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('No events triggered yet')

const programmingLanguages = ref([
  { label: 'JavaScript', value: 'js' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'Python', value: 'py' },
  { label: 'Java', value: 'java' },
  { label: 'C++', value: 'cpp' },
  { label: 'Ruby', value: 'rb' },
  { label: 'Go', value: 'go' },
  { label: 'PHP', value: 'php' }
])

const boundaryOptions = ref([
  { label: 'Zero Option (0)', value: 0 },
  { label: 'First Option', value: 'option1' },
  { label: 'Second Option', value: 'option2' },
  { label: 'Tiếng Việt 🇻🇳 / Кириллица', value: 'unicode' },
  { label: 'Very Long Option Title Designed To Test Text Truncation And Overflow Handling In Narrow Containers', value: 'long' }
])

const singleValue = ref<string | number>('option2')
const multipleValue = ref<Array<string | number>>(['option1', 'unicode'])
const editableValue = ref<string>('ts')
const carouselValue = ref<string>('js')
const zeroBoundaryValue = ref<string | number>(0)

const selectExposeReference = ref<SelectExpose>()
const exposeOutput = ref<string>('No expose action executed yet')
const isDynamicMounted = ref<boolean>(true)

const handleTrackEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleReadExposed = (): void => {
  const currentValue = selectExposeReference.value?.getValue()
  const isOpen = selectExposeReference.value?.getOpen()
  const isValid = selectExposeReference.value?.checkValidity()
  exposeOutput.value = `value=${JSON.stringify(currentValue)}, open=${String(isOpen)}, valid=${String(isValid)}`
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Select">
    <D1Section class="demo-select-page">
      <D1Group label="Basic Modes (Standard, Search, Filter, EditValue, Arrow Carousel)">
        <DemoFlex>
          <DemoBox class="demo-select-page__box">
            <D1Select
              label="Standard Select"
              placeholder="Select a language"
              :option="programmingLanguages"
            />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select
              label="With Search"
              placeholder="Search languages..."
              show-search
              :option="programmingLanguages"
            />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select
              label="Search & Filter Mode"
              placeholder="Type to filter"
              show-search
              filter-mode
              :option="programmingLanguages"
            />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select
              v-model="editableValue"
              label="Editable Value (editValue)"
              placeholder="Type or select"
              edit-value
              filter-mode
              :option="programmingLanguages"
            />
            <DemoValue :value="editableValue" label="Editable" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select
              v-model="carouselValue"
              label="Arrow Carousel"
              arrow="carousel"
              :option="programmingLanguages"
            />
            <DemoValue :value="carouselValue" label="Carousel" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select
              label="Selection Style (Checkbox)"
              selection-style="checkbox"
              :option="programmingLanguages"
            />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="Reactive v-model Binding (Single, Multiple, Max Limit)">
        <DemoFlex>
          <D1Button label="Set 0" outline size="sm" @click="singleValue = 0" />
          <D1Button label="Set Option 1" outline size="sm" @click="singleValue = 'option1'" />
          <D1Button label="Set Unicode" outline size="sm" @click="singleValue = 'unicode'" />
          <D1Button label="Clear Single" outline size="sm" @click="singleValue = ''" />
        </DemoFlex>
        <D1Select
          v-model="singleValue"
          label="Single Select"
          :option="boundaryOptions"
        />
        <DemoValue :value="singleValue" label="Single Value" />

        <DemoFlex>
          <D1Button label="Select Two" outline size="sm" @click="multipleValue = ['option1', 'option2']" />
          <D1Button label="Clear Multiple" outline size="sm" @click="multipleValue = []" />
        </DemoFlex>
        <D1Select
          v-model="multipleValue"
          label="Multiple Select (max=3)"
          multiple
          :max="3"
          :option="boundaryOptions"
        />
        <DemoValue :value="multipleValue" label="Multiple Value" />
      </D1Group>

      <D1Group label="Appearances & Sizes">
        <DemoFlex>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Classic" classic :option="programmingLanguages" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Filled" filled :option="programmingLanguages" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Outlined" outlined :option="programmingLanguages" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Tonal" tonal :option="programmingLanguages" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Boxed" boxed :option="programmingLanguages" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Basic" basic :option="programmingLanguages" />
          </DemoBox>
        </DemoFlex>

        <DemoFlex>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Small (sm)" size="sm" :option="programmingLanguages" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Medium (md)" size="md" :option="programmingLanguages" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Large (lg)" size="lg" :option="programmingLanguages" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Display" size="display" :option="programmingLanguages" />
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="States, Validation & Form Integration">
        <DemoFlex>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Disabled Empty" disabled placeholder="Disabled" :option="programmingLanguages" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Disabled Selected" disabled model-value="ts" :option="programmingLanguages" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Readonly" readonly model-value="js" :option="programmingLanguages" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Focus" focus :option="programmingLanguages" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Select label="Loading" loading :option="programmingLanguages" />
          </DemoBox>
          <DemoBox class="demo-select-page__box">
            <D1Skeleton active>
              <D1Select label="Skeleton" is-skeleton :option="programmingLanguages" />
            </D1Skeleton>
          </DemoBox>
        </DemoFlex>

        <D1Form>
          <D1Select
            name="primaryLanguage"
            label="Required Form Field"
            required
            helper-message="Choose your primary language"
            validation-message="Selection is required"
            force-show-message
            :option="programmingLanguages"
          />
        </D1Form>
      </D1Group>

      <D1Group label="Slots (Field & Menu Slots)">
        <D1Select
          v-model="singleValue"
          :option="boundaryOptions"
        >
          <template #label>
            <strong>Custom #label Slot</strong>
          </template>
          <template #prefix>
            <span>[PRE]</span>
          </template>
          <template #suffix>
            <span>[SUF]</span>
          </template>
          <template #leading>
            <span>★</span>
          </template>
          <template #title>
            <div class="demo-select-page__slot-banner">Custom Menu #title</div>
          </template>
          <template #contextTop>
            <div class="demo-select-page__slot-banner">Menu #contextTop banner</div>
          </template>
          <template #contextBottom>
            <div class="demo-select-page__slot-banner">Menu #contextBottom banner</div>
          </template>
          <template #footer>
            <div class="demo-select-page__slot-banner">Menu #footer summary</div>
          </template>
        </D1Select>
      </D1Group>

      <D1Group label="Events">
        <D1Select
          label="Event Tracker"
          :option="programmingLanguages"
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

      <D1Group label="Programmatic Control (Expose)">
        <DemoFlex>
          <D1Button label="toOpen()" outline size="sm" @click="selectExposeReference?.toOpen(); handleReadExposed()" />
          <D1Button label="toClose()" outline size="sm" @click="selectExposeReference?.toClose(); handleReadExposed()" />
          <D1Button label="setValue('option1')" outline size="sm" @click="selectExposeReference?.setValue('option1'); handleReadExposed()" />
          <D1Button label="clear()" outline size="sm" @click="selectExposeReference?.clear(); handleReadExposed()" />
          <D1Button label="Read Expose" outline size="sm" @click="handleReadExposed" />
        </DemoFlex>
        <D1Select
          ref="selectExposeReference"
          v-model="singleValue"
          label="Exposed Select"
          :option="boundaryOptions"
        />
        <DemoValue :value="exposeOutput" label="Expose State" />
      </D1Group>

      <D1Group label="Boundaries (Zero, Empty, Long Text, Narrow Container) & Lifecycle (v-if)">
        <DemoFlex>
          <DemoBox class="demo-select-page__narrow">
            <D1Select
              v-model="zeroBoundaryValue"
              label="Zero Value (0)"
              :option="boundaryOptions"
            />
          </DemoBox>
          <DemoBox class="demo-select-page__narrow">
            <D1Select
              label="Empty Options"
              placeholder="No options available"
              :option="[]"
            />
          </DemoBox>
          <DemoBox class="demo-select-page__narrow">
            <D1Select
              model-value="long"
              label="Long Option Overflow"
              :option="boundaryOptions"
            />
          </DemoBox>
          <DemoBox class="demo-select-page__narrow">
            <D1Select
              v-model="multipleValue"
              label="Narrow Multiple Select"
              multiple
              :option="boundaryOptions"
            />
          </DemoBox>
        </DemoFlex>

        <DemoFlex>
          <D1Button
            :label="isDynamicMounted ? 'Unmount (v-if)' : 'Mount (v-if)'"
            outline
            size="sm"
            @click="isDynamicMounted = !isDynamicMounted"
          />
        </DemoFlex>
        <D1Select
          v-if="isDynamicMounted"
          v-model="singleValue"
          label="Dynamic Lifecycle Select"
          :option="boundaryOptions"
        />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-select-page {
  &__box {
    width: 300px;
    max-width: 100%;
  }

  &__narrow {
    width: 240px;
    max-width: 100%;
  }

  &__slot-banner {
    padding: 4px 8px;
    font-size: 12px;
  }
}
</style>
