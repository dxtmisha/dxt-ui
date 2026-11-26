<script setup lang="ts">
import { ref } from 'vue'
import type {
  SliderEventData,
  SliderExpose,
  SliderMarkItem,
  SliderValueType
} from '@dxtmisha/constructor/Slider'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const basicValue = ref<number>(40)
const rangeValue = ref<[number, number]>([20, 75])
const decimalValue = ref<number>(0.3)
const marksValue = ref<number>(50)
const customKeyValue = ref<number>(200)
const verticalValue = ref<number>(60)
const verticalRangeValue = ref<[number, number]>([25, 80])
const slotValue = ref<[number, number]>([30, 70])
const eventValue = ref<number>(35)
const eventDetail = ref<string>('No event yet')
const exposeValue = ref<number>(50)
const exposeSnapshot = ref<string>('Not read yet')
const formValue = ref<number>(0)
const formSubmitted = ref<string>('Not submitted')
const isSkeletonActive = ref<boolean>(true)
const isMountedDemo = ref<boolean>(true)

const sliderRef = ref<SliderExpose | null>(null)

const palettes = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'black',
  'white'
] as const

const numericMarks = [0, 25, 50, 75, 100]

const labeledMarks: SliderMarkItem[] = [
  { value: 0, label: '0%' },
  { value: 25, label: '25%' },
  { value: 50, label: '50%' },
  { value: 75, label: '75%' },
  { value: 100, label: '100%' }
]

const customKeyMarks = [
  { code: 0, title: 'Low' },
  { code: 100, title: 'Medium' },
  { code: 200, title: 'High' },
  { code: 300, title: 'Max' }
]

const trackSliderEvent = (name: string, payload: SliderEventData | SliderValueType): void => {
  onEvent(name, payload)
  eventDetail.value = `${name}: ${JSON.stringify(payload)}`
}

const callIncrease = (): void => {
  sliderRef.value?.increase()
  exposeSnapshot.value = JSON.stringify(sliderRef.value?.getValue())
}

const callDecrease = (): void => {
  sliderRef.value?.decrease()
  exposeSnapshot.value = JSON.stringify(sliderRef.value?.getValue())
}

const callSetValue = (value: number): void => {
  sliderRef.value?.setValue(value)
  exposeSnapshot.value = JSON.stringify(sliderRef.value?.getValue())
}

const callGetValue = (): void => {
  exposeSnapshot.value = JSON.stringify(sliderRef.value?.getValue())
}

const onFormSubmit = (): void => {
  formSubmitted.value = `Submitted volume=${formValue.value}`
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Slider">
    <D1Section>
      <D1Group label="Basic Single Value & v-model">
        <DemoFlex align="center">
          <D1Button label="Set 0" @click="basicValue = 0"/>
          <D1Button label="Set 50" @click="basicValue = 50"/>
          <D1Button label="Set 100" @click="basicValue = 100"/>
        </DemoFlex>
        <D1Slider v-model="basicValue" :min="0" :max="100" :step="1"/>
        <DemoValue label="Basic Value" :value="basicValue"/>
      </D1Group>

      <D1Group label="Multiple Range Mode & minimumDistance">
        <DemoFlex align="center">
          <D1Button label="Set [10, 90]" @click="rangeValue = [10, 90]"/>
          <D1Button label="Set [40, 60]" @click="rangeValue = [40, 60]"/>
        </DemoFlex>
        <D1Slider v-model="rangeValue" multiple :min="0" :max="100" :step="5" :minimum-distance="10"/>
        <DemoValue label="Range Value" :value="rangeValue"/>
      </D1Group>

      <D1Group label="Marks, Magnet Snapping, Custom Keys & Decimal Step">
        <D1Slider v-model="marksValue" :marks="labeledMarks" magnet :step="5"/>
        <DemoValue label="Magnet Marks Value" :value="marksValue"/>
        <D1Slider :value="50" :marks="numericMarks" :show-thumb-label="false"/>
        <D1Slider
          v-model="customKeyValue"
          :min="0"
          :max="300"
          :step="100"
          :marks="customKeyMarks"
          key-value="code"
          key-label="title"
          magnet
        />
        <DemoValue label="Custom Key Marks" :value="customKeyValue"/>
        <D1Slider v-model="decimalValue" :min="0" :max="1" :step="0.1"/>
        <DemoValue label="Decimal Step (0.1)" :value="decimalValue"/>
      </D1Group>

      <D1Group label="Orientation (Vertical Single & Vertical Range)">
        <DemoFlex>
          <DemoBox size="md" center class="demo-slider-page__vertical-box">
            <D1Slider v-model="verticalValue" vertical :min="0" :max="100"/>
          </DemoBox>
          <DemoBox size="md" center class="demo-slider-page__vertical-box">
            <D1Slider v-model="verticalRangeValue" vertical multiple :min="0" :max="100" :minimum-distance="10"/>
          </DemoBox>
        </DemoFlex>
        <DemoValue label="Vertical Single" :value="verticalValue"/>
        <DemoValue label="Vertical Range" :value="verticalRangeValue"/>
      </D1Group>

      <D1Group label="States (Selected, Disabled, Readonly, Hidden Thumb Label, Skeleton)">
        <D1Slider :value="65" selected/>
        <D1Slider :value="40" disabled/>
        <D1Slider :value="60" readonly/>
        <D1Slider :value="50" :show-thumb-label="false"/>
        <DemoFlex align="center">
          <D1Button label="Toggle Skeleton" @click="isSkeletonActive = !isSkeletonActive"/>
          <DemoValue label="Skeleton Active" :value="isSkeletonActive"/>
        </DemoFlex>
        <D1Skeleton :active="isSkeletonActive">
          <div class="demo-slider-page__stack">
            <D1Slider :value="45" is-skeleton/>
            <D1Slider :value="[25, 75]" multiple is-skeleton/>
          </div>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Palettes">
        <div class="demo-slider-page__palettes">
          <div v-for="palette in palettes" :key="palette" class="demo-slider-page__palette-item">
            <span>{{ palette }}</span>
            <D1Slider :value="60" :palette="palette"/>
          </div>
        </div>
      </D1Group>

      <D1Group label="Slots (#minLabel, #maxLabel, #mark)">
        <D1Slider v-model="slotValue" multiple :marks="labeledMarks" show-thumb-label>
          <template #minLabel="{ value }">
            <span>Min: {{ value }}</span>
          </template>
          <template #maxLabel="{ value }">
            <span>Max: {{ value }}</span>
          </template>
          <template #mark="{ item }">
            <strong>{{ item.label }}</strong>
          </template>
        </D1Slider>
        <DemoValue label="Slots Value" :value="slotValue"/>
      </D1Group>

      <D1Group label="Events & Programmatic Expose (getValue, setValue, increase, decrease)">
        <DemoFlex align="center">
          <D1Button label="Decrease" @click="callDecrease"/>
          <D1Button label="Increase" @click="callIncrease"/>
          <D1Button label="Set 0" @click="callSetValue(0)"/>
          <D1Button label="Set 80" @click="callSetValue(80)"/>
          <D1Button label="Get Value" @click="callGetValue"/>
        </DemoFlex>
        <D1Slider
          ref="sliderRef"
          v-model="exposeValue"
          :min="0"
          :max="100"
          :step="10"
          @input="(data) => trackSliderEvent('input', data)"
          @input-lite="(data) => trackSliderEvent('input-lite', data)"
          @change="(data) => trackSliderEvent('change', data)"
          @change-lite="(data) => trackSliderEvent('change-lite', data)"
        />
        <DemoValue label="Expose Value" :value="exposeValue"/>
        <DemoValue label="Expose Snapshot" :value="exposeSnapshot"/>
        <DemoValue label="Last Event" :value="eventName"/>
        <DemoValue label="Event Detail" :value="eventDetail"/>
      </D1Group>

      <D1Group label="Form Integration, Negative Range & Zero Boundary">
        <form class="demo-slider-page__stack" @submit.prevent="onFormSubmit">
          <D1Slider
            v-model="formValue"
            name="temperature"
            required
            :min="-50"
            :max="50"
            :step="5"
            :input-attrs="{ id: 'demo-slider-temp' }"
          />
          <DemoFlex align="center">
            <D1Button label="Submit Form" type="submit"/>
            <D1Button label="Reset to 0" @click="formValue = 0"/>
          </DemoFlex>
        </form>
        <DemoValue label="Form Value" :value="formValue"/>
        <DemoValue label="Form Status" :value="formSubmitted"/>
      </D1Group>

      <D1Group label="Boundary, Narrow Container & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="isMountedDemo = !isMountedDemo"/>
          <DemoValue label="Mounted" :value="isMountedDemo"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-slider-page__narrow">
          <D1Slider v-if="isMountedDemo" v-model="eventValue" :min="0" :max="100" :marks="labeledMarks"/>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-slider-page {
  &__stack {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__vertical-box {
    height: 220px;
    width: 120px;
  }

  &__palettes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
  }

  &__palette-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__narrow {
    max-width: 240px;
  }
}
</style>
