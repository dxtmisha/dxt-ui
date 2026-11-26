<script setup lang="ts">
import { ref } from 'vue'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const dynamicValue = ref<number>(35)
const dynamicMax = ref<number>(100)
const isOverlay = ref<boolean>(false)
const showLabel = ref<boolean>(true)
const focusedSegment = ref<string | undefined>('item-2')
const isSkeletonActive = ref<boolean>(true)
const lifecycleMounted = ref<boolean>(true)
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ProgressBar">
    <D1Section class="demo-progress-bar-page">
      <D1Group label="Accepted Value Formats (Number, String, Object, Array)">
        <div class="demo-progress-bar-page__stack">
          <D1ProgressBar data-testid="pb-number" :value="50" :max="100"/>
          <D1ProgressBar data-testid="pb-string" value="65" max="100"/>
          <D1ProgressBar
            data-testid="pb-object"
            :value="{ value: 40, label: 'Single Object (40)', palette: 'indigo' }"
            :max="100"
            show-label
          />
          <D1ProgressBar
            data-testid="pb-array"
            :value="[
              { value: 25, color: '#ff4d4f' },
              { value: 35, color: '#52c41a' },
              { value: 20, color: '#1890ff' }
            ]"
            :max="100"
          />
        </div>
      </D1Group>

      <D1Group label="Interactive Value, Max & Overlay Controls">
        <DemoFlex>
          <D1Button label="25 / 100" size="sm" outline @click="dynamicValue = 25; dynamicMax = 100"/>
          <D1Button label="75 / 100" size="sm" outline @click="dynamicValue = 75; dynamicMax = 100"/>
          <D1Button label="120 / 200" size="sm" outline @click="dynamicValue = 120; dynamicMax = 200"/>
          <D1Button
            :label="isOverlay ? 'Overlay: On' : 'Overlay: Off'"
            size="sm"
            outline
            @click="isOverlay = !isOverlay"
          />
          <D1Button
            :label="showLabel ? 'Labels: On' : 'Labels: Off'"
            size="sm"
            outline
            @click="showLabel = !showLabel"
          />
        </DemoFlex>
        <DemoValue label="state" :value="{ value: dynamicValue, max: dynamicMax, overlay: isOverlay, showLabel }"/>
        <D1ProgressBar
          data-testid="pb-interactive"
          :value="[
            { index: 'first', value: dynamicValue, label: dynamicValue + '/' + dynamicMax, palette: 'blue' },
            { index: 'second', value: 20, label: 'Bonus', palette: 'green' }
          ]"
          :max="dynamicMax"
          :overlay="isOverlay"
          :show-label="showLabel"
        />
      </D1Group>

      <D1Group label="Palettes, Colors & Overlay Mode">
        <div class="demo-progress-bar-page__stack">
          <D1ProgressBar palette="blue" :value="45" :max="100"/>
          <D1ProgressBar palette="green" :value="60" :max="100"/>
          <D1ProgressBar palette="red" :value="80" :max="100"/>
          <D1ProgressBar color="#7c3aed" :value="55" :max="100"/>
          <D1ProgressBar
            overlay
            :max="100"
            :value="[
              { value: 15, color: '#faad14' },
              { value: 45, color: '#52c41a' },
              { value: 30, color: '#13c2c2' }
            ]"
          />
        </div>
      </D1Group>

      <D1Group label="With Labels & Focus State">
        <DemoFlex>
          <D1Button label="Focus item-1" size="sm" outline @click="focusedSegment = 'item-1'"/>
          <D1Button label="Focus item-2" size="sm" outline @click="focusedSegment = 'item-2'"/>
          <D1Button label="Clear Focus" size="sm" outline @click="focusedSegment = undefined"/>
        </DemoFlex>
        <DemoValue label="focus" :value="focusedSegment"/>
        <D1ProgressBar
          data-testid="pb-focus"
          :focus="focusedSegment"
          show-label
          :value="[
            { index: 'item-1', value: 30, label: 'Segment 1 (30%)', color: '#1890ff' },
            { index: 'item-2', value: 40, label: 'Segment 2 (40%)', color: '#52c41a' },
            { index: 'item-3', value: 30, label: 'Segment 3 (30%)', color: '#faad14' }
          ]"
        />
      </D1Group>

      <D1Group label="Skeleton State (D1Skeleton)">
        <DemoFlex>
          <D1Button
            :label="isSkeletonActive ? 'Disable Skeleton' : 'Enable Skeleton'"
            size="sm"
            outline
            @click="isSkeletonActive = !isSkeletonActive"
          />
        </DemoFlex>
        <DemoValue label="skeletonActive" :value="isSkeletonActive"/>
        <D1Skeleton :active="isSkeletonActive">
          <div class="demo-progress-bar-page__stack">
            <D1ProgressBar is-skeleton :value="50" :max="100"/>
            <D1ProgressBar
              is-skeleton
              show-label
              :value="[
                { value: 30, label: '30%' },
                { value: 40, label: '40%' },
                { value: 30, label: '30%' }
              ]"
            />
          </div>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Boundary, Accessibility & Edge Cases">
        <div class="demo-progress-bar-page__stack">
          <D1ProgressBar data-testid="pb-zero" :value="0" :max="0" show-label/>
          <D1ProgressBar data-testid="pb-empty-array" :value="[]" :max="100"/>
          <D1ProgressBar data-testid="pb-undefined" :value="undefined"/>
          <D1ProgressBar
            data-testid="pb-unicode-xss"
            show-label
            :max="100"
            :value="[
              { index: 'u1', value: 40, label: 'Tiếng Việt • Кириллица 🚀' },
              { index: 'u2', value: 40, label: '<img src=x onerror=alert(1)>' }
            ]"
          />
        </div>
        <DemoBox class="demo-progress-bar-page__narrow">
          <D1ProgressBar
            show-label
            :value="[
              { value: 45, label: 'SuperLongUnbrokenProgressLabel1234567890', palette: 'blue' },
              { value: 35, label: 'Second', palette: 'teal' }
            ]"
            :max="100"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle">
        <DemoFlex align="center">
          <D1Button
            :label="lifecycleMounted ? 'Unmount ProgressBar' : 'Mount ProgressBar'"
            size="sm"
            outline
            @click="lifecycleMounted = !lifecycleMounted"
          />
          <DemoValue label="Mounted" :value="lifecycleMounted"/>
        </DemoFlex>
        <DemoBox v-if="lifecycleMounted">
          <D1ProgressBar :value="70" :max="100" show-label/>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-progress-bar-page {
  &__stack {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__narrow {
    max-width: 240px;
  }
}
</style>
