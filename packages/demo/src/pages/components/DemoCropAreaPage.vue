<script setup lang="ts">
import { ref } from 'vue'
import type { CropAreaCoordinator, CropAreaExpose } from '@dxtmisha/constructor/CropArea'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const interactiveCoordinator = ref<CropAreaCoordinator>([15, 20, 15, 20])
const edgeLockCoordinator = ref<CropAreaCoordinator>([20, 15, 20, 15])
const exposeReference = ref<CropAreaExpose>()
const exposeOutput = ref<CropAreaCoordinator | string>('Click an expose button')
const eventCoordinator = ref<CropAreaCoordinator>([10, 10, 10, 10])

const callExposeGet = (): void => {
  exposeOutput.value = exposeReference.value?.get() ?? 'undefined'
}

const callExposeSet = (): void => {
  exposeReference.value?.set([25, 10, 20, 30])
  exposeOutput.value = exposeReference.value?.get() ?? 'undefined'
}

const callExposeReset = (): void => {
  exposeReference.value?.reset()
  exposeOutput.value = exposeReference.value?.get() ?? 'undefined'
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="CropArea">
    <D1Section class="demo-crop-area-page">
      <D1Group label="Basic Interactive (v-model)">
        <DemoFlex>
          <D1Button label="Center [25, 25, 25, 25]" size="sm" @click="interactiveCoordinator = [25, 25, 25, 25]"/>
          <D1Button label="Wide [30, 5, 30, 5]" size="sm" @click="interactiveCoordinator = [30, 5, 30, 5]"/>
          <D1Button label="Full [0, 0, 0, 0]" size="sm" outline @click="interactiveCoordinator = [0, 0, 0, 0]"/>
        </DemoFlex>
        <div class="demo-crop-area-page__canvas">
          <D1CropArea v-model="interactiveCoordinator"/>
        </div>
        <DemoValue label="v-model Coordinates [top, right, bottom, left]" :value="interactiveCoordinator"/>
      </D1Group>

      <D1Group label="States (Disabled & Readonly)">
        <DemoFlex>
          <div>
            <div class="demo-crop-area-page__caption">disabled</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <D1CropArea :value="[15, 15, 15, 15]" disabled/>
            </div>
          </div>
          <div>
            <div class="demo-crop-area-page__caption">readonly (hides crop overlay)</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <D1CropArea :value="[15, 15, 15, 15]" readonly/>
            </div>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Directional Edge Locks (disabledTop / Right / Bottom / Left)">
        <DemoFlex>
          <div>
            <div class="demo-crop-area-page__caption">disabled-top & disabled-bottom</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <D1CropArea
                v-model="edgeLockCoordinator"
                disabled-top
                disabled-bottom
              />
            </div>
          </div>
          <div>
            <div class="demo-crop-area-page__caption">disabled-left & disabled-right</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <D1CropArea
                :value="[15, 20, 15, 20]"
                disabled-left
                disabled-right
              />
            </div>
          </div>
        </DemoFlex>
        <DemoValue label="Locked-Vertical Coordinates" :value="edgeLockCoordinator"/>
      </D1Group>

      <D1Group label="Custom Tag & Programmatic Expose (get / set / reset)">
        <DemoFlex>
          <D1Button label="get()" size="sm" @click="callExposeGet"/>
          <D1Button label="set([25, 10, 20, 30])" size="sm" @click="callExposeSet"/>
          <D1Button label="reset()" size="sm" outline @click="callExposeReset"/>
        </DemoFlex>
        <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
          <D1CropArea
            ref="exposeReference"
            tag="section"
            :value="[10, 10, 10, 10]"
          />
        </div>
        <DemoValue label="Expose Result" :value="exposeOutput"/>
      </D1Group>

      <D1Group label="Events Tracking (resize / update:value / update:modelValue)">
        <div class="demo-crop-area-page__canvas">
          <D1CropArea
            v-model="eventCoordinator"
            @resize="onEvent('resize', $event)"
            @update:value="onEvent('update:value', $event)"
            @update:model-value="onEvent('update:modelValue', $event)"
          />
        </div>
        <DemoValue label="Last Event" :value="eventName"/>
        <DemoValue label="Event Coordinates" :value="eventCoordinator"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-crop-area-page {
  &__caption {
    margin-bottom: 6px;
    font-size: 13px;
    opacity: 0.75;
  }

  &__canvas {
    position: relative;
    width: 320px;
    max-width: 100%;
    height: 220px;
    border-radius: 8px;
    overflow: hidden;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);

    &--compact {
      width: 260px;
      height: 180px;
    }
  }
}
</style>
