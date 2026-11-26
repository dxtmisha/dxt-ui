<script setup lang="ts">
import { ref } from 'vue'
import type { SliderFieldExpose } from '@dxtmisha/constructor/SliderField'
import type { SliderMarkItem, SliderValueType } from '@dxtmisha/constructor/Slider'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const basicValue = ref<number>(40)
const rangeValue = ref<[number, number]>([20, 80])
const inputValue = ref<number>(55)
const marksValue = ref<number>(50)
const verticalValue = ref<number>(60)
const slotValue = ref<number>(35)
const eventValue = ref<number>(30)
const eventDetail = ref<string>('No event yet')
const exposeValue = ref<number>(0)
const exposeSnapshot = ref<string>('Not read yet')
const isSkeletonActive = ref<boolean>(true)
const isMountedDemo = ref<boolean>(true)

const sliderFieldRef = ref<SliderFieldExpose | null>(null)

const labeledMarks: SliderMarkItem[] = [
  { mark: 0, value: 0, label: '0%' },
  { mark: 25, value: 25, label: '25%' },
  { mark: 50, value: 50, label: '50%' },
  { mark: 75, value: 75, label: '75%' },
  { mark: 100, value: 100, label: '100%' }
]

const trackFieldEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventDetail.value = `${name}: ${JSON.stringify(payload)}`
}

const readExposeState = (): void => {
  if (!sliderFieldRef.value) {
    exposeSnapshot.value = 'Not mounted'
    return
  }

  exposeSnapshot.value = JSON.stringify({
    value: sliderFieldRef.value.value,
    isValid: sliderFieldRef.value.checkValidity(),
    validationMessage: sliderFieldRef.value.validationMessage
  })
}

const clearExposeValue = (): void => {
  sliderFieldRef.value?.clear()
  readExposeState()
}

const updateExposeValue = (value: SliderValueType): void => {
  exposeValue.value = Array.isArray(value) ? value[0] : value
  readExposeState()
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="SliderField">
    <D1Section>
      <D1Group label="Basic Single Value & v-model">
        <DemoFlex align="center">
          <D1Button label="Set 0" @click="basicValue = 0"/>
          <D1Button label="Set 50" @click="basicValue = 50"/>
          <D1Button label="Set 100" @click="basicValue = 100"/>
        </DemoFlex>
        <D1SliderField
          v-model="basicValue"
          label="Volume"
          helper-message="Adjust playback volume"
          :min="0"
          :max="100"
        />
        <DemoValue label="Basic Value" :value="basicValue"/>
      </D1Group>

      <D1Group label="Multiple Range, Numeric Inputs (showInput) & Value Display (showValue / showValueInLabel)">
        <D1SliderField
          v-model="rangeValue"
          label="Price Range"
          multiple
          show-input
          show-value-in-label
          label-separator=" — "
          label-leading="Min"
          label-trailing="Max"
          :min="0"
          :max="100"
          :minimum-distance="10"
        />
        <DemoValue label="Range Value" :value="rangeValue"/>
        <D1SliderField
          v-model="inputValue"
          label="Brightness"
          show-input
          show-value
          icon="light_mode"
          icon-trailing="brightness_high"
          :min="0"
          :max="100"
        />
        <DemoValue label="Input Value" :value="inputValue"/>
      </D1Group>

      <D1Group label="Marks, Magnet & Vertical Orientation">
        <D1SliderField
          v-model="marksValue"
          label="Quality Level"
          :marks="labeledMarks"
          magnet
          :step="5"
        />
        <DemoBox size="md" center class="demo-slider-field-page__vertical">
          <D1SliderField
            v-model="verticalValue"
            label="Vertical Gain"
            vertical
            :min="0"
            :max="100"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="States (Disabled, Readonly, Validation Error & Skeleton)">
        <D1SliderField :value="45" label="Disabled SliderField" show-input disabled/>
        <D1SliderField :value="60" label="Readonly SliderField" show-input readonly/>
        <D1SliderField :value="20" label="Validation Error" validation-message="Value must be at least 30"/>
        <DemoFlex align="center">
          <D1Button label="Toggle Skeleton" @click="isSkeletonActive = !isSkeletonActive"/>
          <DemoValue label="Skeleton Active" :value="isSkeletonActive"/>
        </DemoFlex>
        <D1Skeleton :active="isSkeletonActive">
          <D1SliderField label="Loading Field" :value="50" show-input is-skeleton/>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Slots (#label, #leading, #trailing, #maxLabel)">
        <D1SliderField v-model="slotValue" :min="0" :max="100">
          <template #label>
            <strong>Custom Label Slot</strong>
          </template>
          <template #leading>
            <span>0%</span>
          </template>
          <template #trailing>
            <span>100%</span>
          </template>
          <template #maxLabel="{ value }">
            <span>{{ value }}%</span>
          </template>
        </D1SliderField>
        <DemoValue label="Slot Value" :value="slotValue"/>
      </D1Group>

      <D1Group label="Events & Programmatic Expose (checkValidity, clear, value)">
        <DemoFlex align="center">
          <D1Button label="Set 0" @click="updateExposeValue(0)"/>
          <D1Button label="Set 75" @click="updateExposeValue(75)"/>
          <D1Button label="Clear (expose)" @click="clearExposeValue"/>
          <D1Button label="Read Expose" @click="readExposeState"/>
        </DemoFlex>
        <D1SliderField
          ref="sliderFieldRef"
          v-model="exposeValue"
          name="gain"
          label="Controlled Gain"
          show-input
          :min="-50"
          :max="50"
          @input="(value) => trackFieldEvent('input', value)"
          @change="(value) => trackFieldEvent('change', value)"
        />
        <DemoValue label="Expose Value" :value="exposeValue"/>
        <DemoValue label="Expose Snapshot" :value="exposeSnapshot"/>
        <DemoValue label="Last Event" :value="eventName"/>
        <DemoValue label="Event Detail" :value="eventDetail"/>
      </D1Group>

      <D1Group label="Boundary, Narrow Container & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="isMountedDemo = !isMountedDemo"/>
          <DemoValue label="Mounted" :value="isMountedDemo"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-slider-field-page__narrow">
          <D1SliderField
            v-if="isMountedDemo"
            v-model="eventValue"
            :label="0"
            helper-message="Привет · Học tiếng Việt · 🚀"
            :min="0"
            :max="100"
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-slider-field-page {
  &__vertical {
    height: 260px;
    width: 180px;
  }

  &__narrow {
    max-width: 260px;
  }
}
</style>
