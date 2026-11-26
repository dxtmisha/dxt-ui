<script setup lang="ts">
import { computed, ref } from 'vue'
import type {
  MotionAxisEmitOptions,
  MotionAxisExpose,
  MotionAxisProps,
  MotionAxisSelectedValue
} from '@dxtmisha/constructor/MotionAxis'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

interface DemoDynamicSlide {
  key: string
  label: string
  description: string
}

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('none')
const eventHistory = ref<string[]>([])

const recordEvent = (name: string, payload?: unknown): void => {
  onEvent(name, payload)

  try {
    eventPayload.value = payload !== undefined ? JSON.stringify(payload) : 'undefined'
  } catch {
    eventPayload.value = name
  }

  eventHistory.value = [
    `${name}: ${eventPayload.value}`,
    ...eventHistory.value.slice(0, 7)
  ]
}

const handleMotionAxisEvent = (options: MotionAxisEmitOptions): void => {
  recordEvent('motionAxis', options)
}

const selectedAxisX = ref<string>('slide1')
const selectedAxisY = ref<string>('slide1')
const selectedAxisZ = ref<string>('slide1')

const dynamicAxis = ref<NonNullable<MotionAxisProps['axis']>>('x')
const dynamicDirection = ref<NonNullable<MotionAxisProps['direction']>>('auto')
const selectedDirectionDynamic = ref<string>('slide1')
const selectedDirectionNext = ref<string>('slide1')
const selectedDirectionBack = ref<string>('slide1')

const selectedHeight = ref<string>('short')
const selectedInDom = ref<string>('slide1')

const selectedInDomSlide = ref<string>('slide1')
const inDomSlideList = ref<string[]>(['slide3'])

const toggleInDomSlide = (slideKey: string): void => {
  if (inDomSlideList.value.includes(slideKey)) {
    inDomSlideList.value = inDomSlideList.value.filter(item => item !== slideKey)
  } else {
    inDomSlideList.value = [...inDomSlideList.value, slideKey]
  }
}

const motionAxisRef = ref<MotionAxisExpose | null>(null)
const selectedExpose = ref<MotionAxisSelectedValue>('slide1')

const initialDynamicSlides: DemoDynamicSlide[] = [
  {
    key: 'alpha',
    label: 'Alpha',
    description: 'First dynamic slot slide rendered from reactive state.'
  },
  {
    key: 'beta',
    label: 'Beta',
    description: 'Second dynamic slot slide updated on slot mutations.'
  }
]

const dynamicSlides = ref<DemoDynamicSlide[]>([...initialDynamicSlides])
const selectedDynamic = ref<MotionAxisSelectedValue>('alpha')
const dynamicCounter = ref<number>(3)

const dynamicSlideChips = computed(() =>
  dynamicSlides.value.map(slide => ({
    value: slide.key,
    label: slide.label
  })))

const dynamicSlideKeys = computed<string[]>(() =>
  dynamicSlides.value.map(slide => slide.key))

const addDynamicSlide = (): void => {
  const index = dynamicCounter.value
  const key = `step-${index}`
  dynamicCounter.value += 1

  dynamicSlides.value = [
    ...dynamicSlides.value,
    {
      key,
      label: `Step ${index}`,
      description: `Dynamically added slot slide (${key}).`
    }
  ]
  selectedDynamic.value = key
}

const removeLastDynamicSlide = (): void => {
  if (dynamicSlides.value.length <= 1) {
    return
  }

  const nextSlides = dynamicSlides.value.slice(0, -1)
  dynamicSlides.value = nextSlides

  if (!nextSlides.some(slide => slide.key === selectedDynamic.value)) {
    selectedDynamic.value = nextSlides[0]?.key
  }
}

const resetDynamicSlides = (): void => {
  dynamicSlides.value = [...initialDynamicSlides]
  selectedDynamic.value = 'alpha'
  dynamicCounter.value = 3
}

const selectedAccessible = ref<string>('step1')

const selectedBoundaryMissing = ref<MotionAxisSelectedValue>('missing-slide')
const selectedNumericKey = ref<string>('0')
const selectedBoundaryContent = ref<string>('empty')
const selectedNarrow = ref<string>('long')

const isLifecycleMounted = ref<boolean>(true)
const selectedLifecycle = ref<MotionAxisSelectedValue>('slide1')

const selectedEvents = ref<MotionAxisSelectedValue>('slide1')
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Motion Axis">
    <D1Section>
      <D1Group label="Axis X (Horizontal Slide - Default)">
        <D1ChipGroup
          v-model:selected="selectedAxisX"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Slide 1' },
            { value: 'slide2', label: 'Slide 2' },
            { value: 'slide3', label: 'Slide 3' }
          ]"
        />
        <D1MotionAxis :selected="selectedAxisX" axis="x">
          <template #slide1>
            <span>Slide 1 Content: Standard horizontal layout.</span>
          </template>
          <template #slide2>
            <span>Slide 2 Content: High-performance horizontal transitions.</span>
          </template>
          <template #slide3>
            <span>Slide 3 Content: Fully interactive horizontal demo views.</span>
          </template>
        </D1MotionAxis>
        <DemoValue :value="selectedAxisX"/>
      </D1Group>

      <D1Group label="Axis Y (Vertical Slide)">
        <D1ChipGroup
          v-model:selected="selectedAxisY"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Slide 1' },
            { value: 'slide2', label: 'Slide 2' },
            { value: 'slide3', label: 'Slide 3' }
          ]"
        />
        <D1MotionAxis :selected="selectedAxisY" axis="y">
          <template #slide1>
            <span>Slide 1 (Vertical Y-axis transition)</span>
          </template>
          <template #slide2>
            <span>Slide 2 (Vertical Y-axis transition)</span>
          </template>
          <template #slide3>
            <span>Slide 3 (Vertical Y-axis transition)</span>
          </template>
        </D1MotionAxis>
        <DemoValue :value="selectedAxisY"/>
      </D1Group>

      <D1Group label="Axis Z (Depth Fade / Scale)">
        <D1ChipGroup
          v-model:selected="selectedAxisZ"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Slide 1' },
            { value: 'slide2', label: 'Slide 2' },
            { value: 'slide3', label: 'Slide 3' }
          ]"
        />
        <D1MotionAxis :selected="selectedAxisZ" axis="z">
          <template #slide1>
            <span>Slide 1 (Z-axis scale and fade transition)</span>
          </template>
          <template #slide2>
            <span>Slide 2 (Z-axis scale and fade transition)</span>
          </template>
          <template #slide3>
            <span>Slide 3 (Z-axis scale and fade transition)</span>
          </template>
        </D1MotionAxis>
        <DemoValue :value="selectedAxisZ"/>
      </D1Group>

      <D1Group label="Direction Modes (auto / next / back)">
        <DemoFlex>
          <D1Button
            label="axis='x'"
            :primary="dynamicAxis === 'x'"
            :outline="dynamicAxis !== 'x'"
            size="sm"
            @click="dynamicAxis = 'x'"
          />
          <D1Button
            label="axis='y'"
            :primary="dynamicAxis === 'y'"
            :outline="dynamicAxis !== 'y'"
            size="sm"
            @click="dynamicAxis = 'y'"
          />
          <D1Button
            label="axis='z'"
            :primary="dynamicAxis === 'z'"
            :outline="dynamicAxis !== 'z'"
            size="sm"
            @click="dynamicAxis = 'z'"
          />
          <D1Button
            label="direction='auto'"
            :secondary="dynamicDirection === 'auto'"
            :outline="dynamicDirection !== 'auto'"
            size="sm"
            @click="dynamicDirection = 'auto'"
          />
          <D1Button
            label="direction='next'"
            :secondary="dynamicDirection === 'next'"
            :outline="dynamicDirection !== 'next'"
            size="sm"
            @click="dynamicDirection = 'next'"
          />
          <D1Button
            label="direction='back'"
            :secondary="dynamicDirection === 'back'"
            :outline="dynamicDirection !== 'back'"
            size="sm"
            @click="dynamicDirection = 'back'"
          />
        </DemoFlex>
        <D1ChipGroup
          v-model:selected="selectedDirectionDynamic"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Slide 1' },
            { value: 'slide2', label: 'Slide 2' },
            { value: 'slide3', label: 'Slide 3' }
          ]"
        />
        <D1MotionAxis
          :selected="selectedDirectionDynamic"
          :axis="dynamicAxis"
          :direction="dynamicDirection"
        >
          <template #slide1>
            <span>Dynamic Slide 1 ({{ dynamicAxis }} / {{ dynamicDirection }})</span>
          </template>
          <template #slide2>
            <span>Dynamic Slide 2 ({{ dynamicAxis }} / {{ dynamicDirection }})</span>
          </template>
          <template #slide3>
            <span>Dynamic Slide 3 ({{ dynamicAxis }} / {{ dynamicDirection }})</span>
          </template>
        </D1MotionAxis>
        <DemoValue label="Config" :value="`${dynamicAxis} / ${dynamicDirection} / ${selectedDirectionDynamic}`"/>

        <D1ChipGroup
          v-model:selected="selectedDirectionNext"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Next: Slide 1' },
            { value: 'slide2', label: 'Next: Slide 2' },
            { value: 'slide3', label: 'Next: Slide 3' }
          ]"
        />
        <D1MotionAxis :selected="selectedDirectionNext" direction="next">
          <template #slide1>
            <span>Fixed direction="next" — Slide 1</span>
          </template>
          <template #slide2>
            <span>Fixed direction="next" — Slide 2</span>
          </template>
          <template #slide3>
            <span>Fixed direction="next" — Slide 3</span>
          </template>
        </D1MotionAxis>

        <D1ChipGroup
          v-model:selected="selectedDirectionBack"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Back: Slide 1' },
            { value: 'slide2', label: 'Back: Slide 2' },
            { value: 'slide3', label: 'Back: Slide 3' }
          ]"
        />
        <D1MotionAxis :selected="selectedDirectionBack" direction="back">
          <template #slide1>
            <span>Fixed direction="back" — Slide 1</span>
          </template>
          <template #slide2>
            <span>Fixed direction="back" — Slide 2</span>
          </template>
          <template #slide3>
            <span>Fixed direction="back" — Slide 3</span>
          </template>
        </D1MotionAxis>
      </D1Group>

      <D1Group label="Animation Height">
        <D1ChipGroup
          v-model:selected="selectedHeight"
          :readonly="false"
          :list="[
            { value: 'short', label: 'Short Slide' },
            { value: 'medium', label: 'Medium Slide' },
            { value: 'tall', label: 'Tall Slide' }
          ]"
        />
        <D1MotionAxis :selected="selectedHeight" animation-height>
          <template #short>
            <p>Short content. Only a single line.</p>
          </template>
          <template #medium>
            <div>
              <p>Medium content block.</p>
              <p>Demonstrates intermediate container height transitions.</p>
            </div>
          </template>
          <template #tall>
            <div>
              <p>Much taller content here.</p>
              <p>Watch the container height animate smoothly as more elements are rendered.</p>
              <p>This verifies that height transitions remain clean and responsive.</p>
              <p>Fourth line for clear vertical height delta.</p>
            </div>
          </template>
        </D1MotionAxis>
        <DemoValue :value="selectedHeight"/>
      </D1Group>

      <D1Group label="In DOM Rendering (inDom)">
        <D1ChipGroup
          v-model:selected="selectedInDom"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Slide 1' },
            { value: 'slide2', label: 'Slide 2' },
            { value: 'slide3', label: 'Slide 3' }
          ]"
        />
        <D1MotionAxis :selected="selectedInDom" in-dom>
          <template #slide1>
            <span>Slide 1 (Always rendered in DOM)</span>
          </template>
          <template #slide2>
            <span>Slide 2 (Always rendered in DOM)</span>
          </template>
          <template #slide3>
            <span>Slide 3 (Always rendered in DOM)</span>
          </template>
        </D1MotionAxis>
        <DemoValue :value="selectedInDom"/>
      </D1Group>

      <D1Group label="Selective In DOM (inDomSlide)">
        <DemoFlex>
          <D1Button
            :label="inDomSlideList.includes('slide1') ? 'Remove slide1 from inDomSlide' : 'Keep slide1 in DOM'"
            size="sm"
            outline
            @click="toggleInDomSlide('slide1')"
          />
          <D1Button
            :label="inDomSlideList.includes('slide2') ? 'Remove slide2 from inDomSlide' : 'Keep slide2 in DOM'"
            size="sm"
            outline
            @click="toggleInDomSlide('slide2')"
          />
          <D1Button
            :label="inDomSlideList.includes('slide3') ? 'Remove slide3 from inDomSlide' : 'Keep slide3 in DOM'"
            size="sm"
            outline
            @click="toggleInDomSlide('slide3')"
          />
        </DemoFlex>
        <D1ChipGroup
          v-model:selected="selectedInDomSlide"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Slide 1' },
            { value: 'slide2', label: 'Slide 2' },
            { value: 'slide3', label: 'Slide 3' }
          ]"
        />
        <D1MotionAxis :selected="selectedInDomSlide" :in-dom-slide="inDomSlideList">
          <template #slide1>
            <span>Selective Slide 1</span>
          </template>
          <template #slide2>
            <span>Selective Slide 2</span>
          </template>
          <template #slide3>
            <span>Selective Slide 3</span>
          </template>
        </D1MotionAxis>
        <DemoValue label="Selected" :value="selectedInDomSlide"/>
        <DemoValue label="inDomSlide" :value="inDomSlideList"/>
      </D1Group>

      <D1Group label="Two-Way Binding (v-model:selected) & Programmatic Expose">
        <DemoFlex>
          <D1Button
            label="back()"
            secondary
            @click="motionAxisRef?.back()"
          />
          <D1Button
            label="next()"
            primary
            @click="motionAxisRef?.next()"
          />
          <D1Button
            label="to('slide1')"
            outline
            @click="motionAxisRef?.to('slide1')"
          />
          <D1Button
            label="to('slide2')"
            outline
            @click="motionAxisRef?.to('slide2')"
          />
          <D1Button
            label="to('slide3')"
            outline
            @click="motionAxisRef?.to('slide3')"
          />
        </DemoFlex>
        <DemoFlex>
          <D1Button
            label="top('slide1')"
            size="sm"
            outline
            @click="motionAxisRef?.top('slide1')"
          />
          <D1Button
            label="bottom('slide3')"
            size="sm"
            outline
            @click="motionAxisRef?.bottom('slide3')"
          />
          <D1Button
            label="left('slide1')"
            size="sm"
            outline
            @click="motionAxisRef?.left('slide1')"
          />
          <D1Button
            label="right('slide2')"
            size="sm"
            outline
            @click="motionAxisRef?.right('slide2')"
          />
          <D1Button
            label="down('slide1')"
            size="sm"
            outline
            @click="motionAxisRef?.down('slide1')"
          />
          <D1Button
            label="up('slide3')"
            size="sm"
            outline
            @click="motionAxisRef?.up('slide3')"
          />
        </DemoFlex>
        <DemoFlex>
          <D1Button
            label="Mutate v-model: slide2"
            size="sm"
            @click="selectedExpose = 'slide2'"
          />
          <D1Button
            label="Reset v-model: slide1"
            size="sm"
            outline
            @click="selectedExpose = 'slide1'"
          />
          <D1Button
            label="Clear v-model (undefined)"
            size="sm"
            outline
            @click="selectedExpose = undefined"
          />
        </DemoFlex>
        <D1MotionAxis ref="motionAxisRef" v-model:selected="selectedExpose">
          <template #slide1>
            <span>Slide 1 (Controlled via Expose & v-model:selected)</span>
          </template>
          <template #slide2>
            <span>Slide 2 (Controlled via Expose & v-model:selected)</span>
          </template>
          <template #slide3>
            <span>Slide 3 (Controlled via Expose & v-model:selected)</span>
          </template>
        </D1MotionAxis>
        <DemoValue label="v-model:selected" :value="selectedExpose"/>
      </D1Group>

      <D1Group label="Dynamic Slots">
        <DemoFlex>
          <D1Button
            label="Add Slide"
            primary
            size="sm"
            @click="addDynamicSlide"
          />
          <D1Button
            label="Remove Last Slide"
            outline
            size="sm"
            :disabled="dynamicSlides.length <= 1"
            @click="removeLastDynamicSlide"
          />
          <D1Button
            label="Reset Slides"
            outline
            size="sm"
            @click="resetDynamicSlides"
          />
        </DemoFlex>
        <D1ChipGroup
          v-model:selected="selectedDynamic"
          :readonly="false"
          :list="dynamicSlideChips"
        />
        <D1MotionAxis v-model:selected="selectedDynamic">
          <template
            v-for="slide in dynamicSlides"
            :key="slide.key"
            #[slide.key]
          >
            <div>
              <strong>{{ slide.label }}</strong>
              <p>{{ slide.description }}</p>
            </div>
          </template>
        </D1MotionAxis>
        <DemoValue label="Slot Keys" :value="dynamicSlideKeys"/>
        <DemoValue label="Selected" :value="selectedDynamic"/>
      </D1Group>

      <D1Group label="Accessibility & Live Region">
        <D1ChipGroup
          v-model:selected="selectedAccessible"
          :readonly="false"
          aria-label="Accessible step selector"
          :list="[
            { value: 'step1', label: 'Step 1: Overview' },
            { value: 'step2', label: 'Step 2: Details' }
          ]"
        />
        <D1MotionAxis
          :selected="selectedAccessible"
          role="region"
          aria-live="polite"
          aria-label="Accessible step content"
        >
          <template #step1>
            <span>Step 1 Overview: Announced politely to assistive technologies when changed.</span>
          </template>
          <template #step2>
            <span>Step 2 Details: ARIA region role and aria-live pass through to the root element.</span>
          </template>
        </D1MotionAxis>
        <DemoValue :value="selectedAccessible"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <D1MotionAxis/>

        <DemoFlex>
          <D1Button
            label="Select Missing Key"
            size="sm"
            outline
            @click="selectedBoundaryMissing = 'missing-slide'"
          />
          <D1Button
            label="Select Empty String"
            size="sm"
            outline
            @click="selectedBoundaryMissing = ''"
          />
          <D1Button
            label="Select Undefined"
            size="sm"
            outline
            @click="selectedBoundaryMissing = undefined"
          />
          <D1Button
            label="Select Valid Slide"
            size="sm"
            primary
            @click="selectedBoundaryMissing = 'valid'"
          />
        </DemoFlex>
        <D1MotionAxis :selected="selectedBoundaryMissing">
          <template #valid>
            <span>Valid fallback slide rendered when selected key matches.</span>
          </template>
        </D1MotionAxis>
        <DemoValue label="Missing/Empty Selected" :value="selectedBoundaryMissing"/>

        <D1ChipGroup
          v-model:selected="selectedNumericKey"
          :readonly="false"
          :list="[
            { value: '0', label: 'Key 0' },
            { value: '1', label: 'Key 1' },
            { value: '2', label: 'Key 2' }
          ]"
        />
        <D1MotionAxis v-model:selected="selectedNumericKey">
          <template #0>
            <span>Slide key "0" with numeric zero content: 0</span>
          </template>
          <template #1>
            <span>Slide key "1" with negative and decimal numbers: -42.5 / 3.14</span>
          </template>
          <template #2>
            <span>Slide key "2" with single character: A</span>
          </template>
        </D1MotionAxis>
        <DemoValue label="Numeric Key" :value="selectedNumericKey"/>

        <D1ChipGroup
          v-model:selected="selectedBoundaryContent"
          :readonly="false"
          :list="[
            { value: 'empty', label: 'Empty Slide' },
            { value: 'whitespace', label: 'Whitespace Slide' },
            { value: 'unicode', label: 'Unicode & Escaped Text' }
          ]"
        />
        <D1MotionAxis :selected="selectedBoundaryContent">
          <template #empty/>
          <template #whitespace>
            <span>   </span>
          </template>
          <template #unicode>
            <span>Café • Tiếng Việt • Кириллица 🚀 &lt;script&gt;alert('xss')&lt;/script&gt;</span>
          </template>
        </D1MotionAxis>

        <D1ChipGroup
          v-model:selected="selectedNarrow"
          :readonly="false"
          :list="[
            { value: 'long', label: 'Long & Unbroken Text' },
            { value: 'compact', label: 'Compact Text' }
          ]"
        />
        <DemoBox class="demo-motion-axis-page__narrow-box">
          <D1MotionAxis :selected="selectedNarrow" animation-height>
            <template #long>
              <div>
                <p>Very long multi-sentence slide content demonstrating wrapping behavior inside a constrained narrow container without breaking layout bounds.</p>
                <p>SuperLongUnbrokenMotionAxisContentTokenWithoutSpacesOrHyphens1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</p>
              </div>
            </template>
            <template #compact>
              <span>Short narrow slide.</span>
            </template>
          </D1MotionAxis>
        </DemoBox>
      </D1Group>

      <D1Group label="Mount / Unmount Lifecycle (v-if)">
        <DemoFlex>
          <D1Button
            :label="isLifecycleMounted ? 'Unmount MotionAxis' : 'Mount MotionAxis'"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <D1Button
            label="Switch to Slide 1"
            size="sm"
            :disabled="!isLifecycleMounted"
            @click="selectedLifecycle = 'slide1'"
          />
          <D1Button
            label="Switch to Slide 2"
            size="sm"
            :disabled="!isLifecycleMounted"
            @click="selectedLifecycle = 'slide2'"
          />
        </DemoFlex>
        <D1MotionAxis
          v-if="isLifecycleMounted"
          v-model:selected="selectedLifecycle"
          animation-height
        >
          <template #slide1>
            <span>Lifecycle Slide 1: Mounted with active watchers and animation frame cleanup on unmount.</span>
          </template>
          <template #slide2>
            <div>
              <p>Lifecycle Slide 2: Taller block to test animationHeight cleanup during unmount.</p>
              <p>Unmounting mid-transition cancels pending requestAnimationFrame and transition listeners.</p>
            </div>
          </template>
        </D1MotionAxis>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
        <DemoValue label="Selected" :value="selectedLifecycle"/>
      </D1Group>

      <D1Group label="Events">
        <D1ChipGroup
          v-model:selected="selectedEvents"
          :readonly="false"
          :list="[
            { value: 'slide1', label: 'Slide 1' },
            { value: 'slide2', label: 'Slide 2' },
            { value: 'slide3', label: 'Slide 3' }
          ]"
        />
        <D1MotionAxis
          :selected="selectedEvents"
          @update:selected="(value) => recordEvent('update:selected', value)"
          @update:model-selected="(value) => recordEvent('update:modelSelected', value)"
          @motion-axis="handleMotionAxisEvent"
          @start="(selected) => recordEvent('start', selected)"
          @end="(selected) => recordEvent('end', selected)"
        >
          <template #slide1>
            <span>Slide 1 Event Trigger</span>
          </template>
          <template #slide2>
            <span>Slide 2 Event Trigger</span>
          </template>
          <template #slide3>
            <span>Slide 3 Event Trigger</span>
          </template>
        </D1MotionAxis>
        <DemoValue :value="eventName"/>
        <DemoValue label="Payload" :value="eventPayload"/>
        <DemoValue label="History" :value="eventHistory"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-motion-axis-page {
  &__narrow-box {
    max-width: 280px;
  }
}
</style>
