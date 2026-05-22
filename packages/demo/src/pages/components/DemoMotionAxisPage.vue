<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const selected1 = ref('slide1')
const selected2 = ref('slide1')
const selected3 = ref('slide1')

const selectedHeight = ref('short')
const selectedInDom = ref('slide1')

const motionAxisRef = ref<any>(null)
const selectedExpose = ref('slide1')

const selectedEvents = ref('slide1')
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Motion Axis">
    <D1Section>
      <D1Group label="Basic Usage (Axis X / Horizontal Slide)">
        <D1ChipGroup
          v-model:selected="selected1"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Slide 1' },
            { value: 'slide2', label: 'Slide 2' },
            { value: 'slide3', label: 'Slide 3' }
          ]"
        />
        <DemoFlex>
          <D1MotionAxis :selected="selected1">
            <template #slide1>
              <span>Slide 1 Content: Standard horizontal layout.</span>
            </template>
            <template #slide2>
              <span>Slide 2 Content: High-performance transitions.</span>
            </template>
            <template #slide3>
              <span>Slide 3 Content: Fully interactive demo views.</span>
            </template>
          </D1MotionAxis>
        </DemoFlex>
        <DemoValue :value="selected1" />
      </D1Group>

      <D1Group label="Axis Y (Vertical Slide)">
        <D1ChipGroup
          v-model:selected="selected2"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Slide 1' },
            { value: 'slide2', label: 'Slide 2' }
          ]"
        />
        <DemoFlex>
          <D1MotionAxis :selected="selected2" axis="y">
            <template #slide1>
              <span>Slide 1 (Vertical transition)</span>
            </template>
            <template #slide2>
              <span>Slide 2 (Vertical transition)</span>
            </template>
          </D1MotionAxis>
        </DemoFlex>
        <DemoValue :value="selected2" />
      </D1Group>

      <D1Group label="Axis Z (Fade / Zoom)">
        <D1ChipGroup
          v-model:selected="selected3"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Slide 1' },
            { value: 'slide2', label: 'Slide 2' }
          ]"
        />
        <DemoFlex>
          <D1MotionAxis :selected="selected3" axis="z">
            <template #slide1>
              <span>Slide 1 (Fade/Zoom transition)</span>
            </template>
            <template #slide2>
              <span>Slide 2 (Fade/Zoom transition)</span>
            </template>
          </D1MotionAxis>
        </DemoFlex>
        <DemoValue :value="selected3" />
      </D1Group>

      <D1Group label="Animation Height">
        <D1ChipGroup
          v-model:selected="selectedHeight"
          :readonly="false"
          :list="[
            { value: 'short', label: 'Short Slide' },
            { value: 'tall', label: 'Tall Slide' }
          ]"
        />
        <DemoFlex>
          <D1MotionAxis :selected="selectedHeight" animationHeight>
            <template #short>
              <p>Short content. Only a single line.</p>
            </template>
            <template #tall>
              <div>
                <p>Much taller content here.</p>
                <p>Watch the container height animate smoothly as more elements are rendered.</p>
                <p>This allows checking if height transitions are clean and responsive.</p>
              </div>
            </template>
          </D1MotionAxis>
        </DemoFlex>
        <DemoValue :value="selectedHeight" />
      </D1Group>

      <D1Group label="In DOM Rendering (Always Rendered)">
        <D1ChipGroup
          v-model:selected="selectedInDom"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Slide 1' },
            { value: 'slide2', label: 'Slide 2' }
          ]"
        />
        <DemoFlex>
          <D1MotionAxis :selected="selectedInDom" in-dom>
            <template #slide1>
              <span>Slide 1 (Always in DOM - good for SEO)</span>
            </template>
            <template #slide2>
              <span>Slide 2 (Always in DOM - good for SEO)</span>
            </template>
          </D1MotionAxis>
        </DemoFlex>
        <DemoValue :value="selectedInDom" />
      </D1Group>

      <D1Group label="Methods / Expose Control">
        <DemoFlex>
          <D1Button
            label="Go Back (.back())"
            @click="motionAxisRef?.back()"
          />
          <D1Button
            label="Go Next (.next())"
            @click="motionAxisRef?.next()"
          />
        </DemoFlex>
        <DemoFlex>
          <D1MotionAxis ref="motionAxisRef" v-model:selected="selectedExpose">
            <template #slide1>
              <span>Slide 1 (Controlled via Ref)</span>
            </template>
            <template #slide2>
              <span>Slide 2 (Controlled via Ref)</span>
            </template>
            <template #slide3>
              <span>Slide 3 (Controlled via Ref)</span>
            </template>
          </D1MotionAxis>
        </DemoFlex>
        <DemoValue :value="selectedExpose" />
      </D1Group>

      <D1Group label="Events">
        <D1ChipGroup
          v-model:selected="selectedEvents"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Slide 1' },
            { value: 'slide2', label: 'Slide 2' }
          ]"
        />
        <DemoFlex>
          <D1MotionAxis
            :selected="selectedEvents"
            @motionAxis="onEvent('motionAxis')"
            @start="onEvent('start')"
            @end="onEvent('end')"
          >
            <template #slide1>
              <span>Slide 1 Event Trigger</span>
            </template>
            <template #slide2>
              <span>Slide 2 Event Trigger</span>
            </template>
          </D1MotionAxis>
        </DemoFlex>
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
</style>

