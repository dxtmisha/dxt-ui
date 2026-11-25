<script setup lang="ts">
import { ref } from 'vue'
import type {
  CropAreaCoordinator,
  CropAreaEventParameters,
  CropAreaExpose
} from '@dxtmisha/constructor/CropArea'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const cropSampleImage = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 440"><defs><linearGradient id="sky" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1d4ed8"/><stop offset="55%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#db2777"/></linearGradient></defs><rect width="640" height="440" fill="url(#sky)"/><circle cx="500" cy="100" r="56" fill="rgba(255,255,255,0.28)"/><path d="M0 340 L160 220 L310 310 L460 180 L640 320 L640 440 L0 440 Z" fill="rgba(15,23,42,0.35)"/><path d="M0 380 L210 270 L390 360 L540 250 L640 340 L640 440 L0 440 Z" fill="rgba(15,23,42,0.5)"/></svg>'
)

const interactiveCoordinator = ref<CropAreaCoordinator>([15, 20, 15, 20])
const constrainedCoordinator = ref<CropAreaCoordinator>([20, 20, 20, 20])
const toggleDisabled = ref<boolean>(false)
const toggleReadonly = ref<boolean>(false)
const toggleStateCoordinator = ref<CropAreaCoordinator>([15, 15, 15, 15])

const edgeLockVertical = ref<CropAreaCoordinator>([20, 15, 20, 15])
const edgeLockHorizontal = ref<CropAreaCoordinator>([15, 20, 15, 20])
const interactiveLocks = ref<{
  top: boolean
  right: boolean
  bottom: boolean
  left: boolean
}>({
  top: false,
  right: false,
  bottom: false,
  left: false
})
const interactiveLockCoordinator = ref<CropAreaCoordinator>([18, 18, 18, 18])

const exposeReference = ref<CropAreaExpose>()
const exposeOutput = ref<CropAreaCoordinator | string>('Click an expose button')

const eventCoordinator = ref<CropAreaCoordinator>([10, 10, 10, 10])
const lastResizePayload = ref<CropAreaEventParameters | string>('No resize event yet')

const keyboardCoordinator = ref<CropAreaCoordinator>([25, 25, 25, 25])
const decimalCoordinator = ref<CropAreaCoordinator>([12.5, 18.3, 12.5, 18.3])

const isLifecycleMounted = ref<boolean>(true)
const lifecycleCoordinator = ref<CropAreaCoordinator>([15, 15, 15, 15])

const callExposeGet = (): void => {
  exposeOutput.value = exposeReference.value?.get() ?? 'undefined'
}

const callExposeSet = (): void => {
  exposeReference.value?.set([25, 10, 20, 30])
  exposeOutput.value = exposeReference.value?.get() ?? 'undefined'
}

const callExposeSetNormalized = (): void => {
  exposeReference.value?.set([-10, 5.55, -4.44, 15.25])
  exposeOutput.value = exposeReference.value?.get() ?? 'undefined'
}

const callExposeReset = (): void => {
  exposeReference.value?.reset()
  exposeOutput.value = exposeReference.value?.get() ?? 'undefined'
}

const handleResizeEvent = (parameters: CropAreaEventParameters): void => {
  lastResizePayload.value = parameters
  onEvent('resize', parameters)
}

const handleUpdateValue = (coordinates: CropAreaCoordinator): void => {
  onEvent('update:value', coordinates)
}

const handleUpdateModelValue = (coordinates: CropAreaCoordinator): void => {
  onEvent('update:modelValue', coordinates)
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="CropArea">
    <D1Section class="demo-crop-area-page">
      <D1Group label="Basic Interactive (v-model & value)">
        <DemoFlex>
          <D1Button label="Center [25, 25, 25, 25]" size="sm" @click="interactiveCoordinator = [25, 25, 25, 25]"/>
          <D1Button label="Wide [30, 5, 30, 5]" size="sm" @click="interactiveCoordinator = [30, 5, 30, 5]"/>
          <D1Button label="Full [0, 0, 0, 0]" size="sm" outline @click="interactiveCoordinator = [0, 0, 0, 0]"/>
          <D1Button label="Reset [15, 20, 15, 20]" size="sm" outline @click="interactiveCoordinator = [15, 20, 15, 20]"/>
        </DemoFlex>
        <DemoFlex>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">Two-way v-model</div>
            <div class="demo-crop-area-page__canvas">
              <img :src="cropSampleImage" alt="Interactive crop preview" class="demo-crop-area-page__image"/>
              <D1CropArea v-model="interactiveCoordinator"/>
            </div>
          </div>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">One-way :value="[18, 22, 18, 22]"</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <img :src="cropSampleImage" alt="One-way value crop preview" class="demo-crop-area-page__image"/>
              <D1CropArea :value="[18, 22, 18, 22]"/>
            </div>
          </div>
        </DemoFlex>
        <DemoValue label="v-model Coordinates [top, right, bottom, left]" :value="interactiveCoordinator"/>
      </D1Group>

      <D1Group label="Min, Max & Step Constraints (min / max / step)">
        <DemoFlex>
          <D1Button label="Reset [20, 20, 20, 20]" size="sm" @click="constrainedCoordinator = [20, 20, 20, 20]"/>
          <D1Button label="Tight [35, 35, 35, 35]" size="sm" outline @click="constrainedCoordinator = [35, 35, 35, 35]"/>
        </DemoFlex>
        <DemoFlex>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">min=25, max=80, step=5 (numeric)</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <img :src="cropSampleImage" alt="Numeric constrained crop preview" class="demo-crop-area-page__image"/>
              <D1CropArea
                v-model="constrainedCoordinator"
                :min="25"
                :max="80"
                :step="5"
                aria-label="Constrained crop area"
              />
            </div>
          </div>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">min="20", max="85", step="2.5" (string)</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <img :src="cropSampleImage" alt="String constrained crop preview" class="demo-crop-area-page__image"/>
              <D1CropArea
                :value="[15, 15, 15, 15]"
                min="20"
                max="85"
                step="2.5"
                aria-label="String constrained crop area"
              />
            </div>
          </div>
        </DemoFlex>
        <DemoValue label="Constrained Coordinates" :value="constrainedCoordinator"/>
      </D1Group>

      <D1Group label="States (Disabled & Readonly)">
        <DemoFlex>
          <D1Button
            :label="toggleDisabled ? 'Enable CropArea' : 'Disable CropArea'"
            size="sm"
            :primary="toggleDisabled"
            :outline="!toggleDisabled"
            @click="toggleDisabled = !toggleDisabled"
          />
          <D1Button
            :label="toggleReadonly ? 'Exit Readonly' : 'Set Readonly'"
            size="sm"
            :primary="toggleReadonly"
            :outline="!toggleReadonly"
            @click="toggleReadonly = !toggleReadonly"
          />
        </DemoFlex>
        <DemoFlex>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">Interactive State Toggle</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <img :src="cropSampleImage" alt="Interactive state toggle crop preview" class="demo-crop-area-page__image"/>
              <D1CropArea
                v-model="toggleStateCoordinator"
                :disabled="toggleDisabled"
                :readonly="toggleReadonly"
              />
            </div>
          </div>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">Static disabled</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <img :src="cropSampleImage" alt="Static disabled crop preview" class="demo-crop-area-page__image"/>
              <D1CropArea :value="[15, 15, 15, 15]" disabled/>
            </div>
          </div>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">Static readonly (hides overlay)</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <img :src="cropSampleImage" alt="Static readonly crop preview" class="demo-crop-area-page__image"/>
              <D1CropArea :value="[15, 15, 15, 15]" readonly/>
            </div>
          </div>
        </DemoFlex>
        <DemoValue label="State Flags" :value="{ disabled: toggleDisabled, readonly: toggleReadonly, coordinator: toggleStateCoordinator }"/>
      </D1Group>

      <D1Group label="Directional Edge Locks (disabledTop / Right / Bottom / Left)">
        <DemoFlex>
          <D1Button
            label="Lock Top"
            size="sm"
            :primary="interactiveLocks.top"
            :outline="!interactiveLocks.top"
            @click="interactiveLocks.top = !interactiveLocks.top"
          />
          <D1Button
            label="Lock Right"
            size="sm"
            :primary="interactiveLocks.right"
            :outline="!interactiveLocks.right"
            @click="interactiveLocks.right = !interactiveLocks.right"
          />
          <D1Button
            label="Lock Bottom"
            size="sm"
            :primary="interactiveLocks.bottom"
            :outline="!interactiveLocks.bottom"
            @click="interactiveLocks.bottom = !interactiveLocks.bottom"
          />
          <D1Button
            label="Lock Left"
            size="sm"
            :primary="interactiveLocks.left"
            :outline="!interactiveLocks.left"
            @click="interactiveLocks.left = !interactiveLocks.left"
          />
        </DemoFlex>
        <DemoFlex>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">Interactive Edge Locks</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <img :src="cropSampleImage" alt="Interactive edge locks preview" class="demo-crop-area-page__image"/>
              <D1CropArea
                v-model="interactiveLockCoordinator"
                :disabled-top="interactiveLocks.top"
                :disabled-right="interactiveLocks.right"
                :disabled-bottom="interactiveLocks.bottom"
                :disabled-left="interactiveLocks.left"
              />
            </div>
          </div>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">disabled-top &amp; disabled-bottom</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <img :src="cropSampleImage" alt="Top and bottom locked crop preview" class="demo-crop-area-page__image"/>
              <D1CropArea
                v-model="edgeLockVertical"
                disabled-top
                disabled-bottom
              />
            </div>
          </div>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">disabled-left &amp; disabled-right</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <img :src="cropSampleImage" alt="Left and right locked crop preview" class="demo-crop-area-page__image"/>
              <D1CropArea
                v-model="edgeLockHorizontal"
                disabled-left
                disabled-right
              />
            </div>
          </div>
        </DemoFlex>
        <DemoValue label="Locked-Vertical Coordinates" :value="edgeLockVertical"/>
        <DemoValue label="Interactive Lock Coordinates" :value="interactiveLockCoordinator"/>
      </D1Group>

      <D1Group label="Custom Tag & Programmatic Expose (get / set / reset)">
        <DemoFlex>
          <D1Button label="get()" size="sm" @click="callExposeGet"/>
          <D1Button label="set([25, 10, 20, 30])" size="sm" @click="callExposeSet"/>
          <D1Button label="set([-10, 5.55, -4.44, 15.25])" size="sm" outline @click="callExposeSetNormalized"/>
          <D1Button label="reset()" size="sm" outline @click="callExposeReset"/>
        </DemoFlex>
        <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
          <img :src="cropSampleImage" alt="Expose methods crop preview" class="demo-crop-area-page__image"/>
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
          <img :src="cropSampleImage" alt="Events tracking crop preview" class="demo-crop-area-page__image"/>
          <D1CropArea
            v-model="eventCoordinator"
            @resize="handleResizeEvent"
            @update:value="handleUpdateValue"
            @update:model-value="handleUpdateModelValue"
          />
        </div>
        <DemoValue label="Last Event" :value="eventName"/>
        <DemoValue label="Resize Payload" :value="lastResizePayload"/>
        <DemoValue label="Event Coordinates" :value="eventCoordinator"/>
      </D1Group>

      <D1Group label="Accessibility & Keyboard Navigation">
        <div class="demo-crop-area-page__caption">
          Focus the active crop area and use Arrow keys to move, Shift+Arrow or Ctrl+Arrow to resize, Alt+Arrow for 10x step.
        </div>
        <DemoFlex>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">tabindex="0", role="region", step=5</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <img :src="cropSampleImage" alt="Keyboard accessible crop preview" class="demo-crop-area-page__image"/>
              <D1CropArea
                v-model="keyboardCoordinator"
                :step="5"
                :tabindex="0"
                role="region"
                aria-label="Keyboard crop area"
              />
            </div>
          </div>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">tabindex="-1" (programmatic focus only)</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <img :src="cropSampleImage" alt="Non-tabbable crop preview" class="demo-crop-area-page__image"/>
              <D1CropArea
                :value="[20, 20, 20, 20]"
                tabindex="-1"
                aria-label="Non-tabbable crop area"
              />
            </div>
          </div>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">disabled (aria-disabled="true", no tabindex)</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
              <img :src="cropSampleImage" alt="Disabled accessible crop preview" class="demo-crop-area-page__image"/>
              <D1CropArea
                :value="[20, 20, 20, 20]"
                disabled
                aria-label="Disabled crop area"
              />
            </div>
          </div>
        </DemoFlex>
        <DemoValue label="Keyboard Coordinates" :value="keyboardCoordinator"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">Zero [0, 0, 0, 0]</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--narrow">
              <img :src="cropSampleImage" alt="Zero coordinate boundary preview" class="demo-crop-area-page__image"/>
              <D1CropArea :value="[0, 0, 0, 0]" aria-label="Zero coordinate crop area"/>
            </div>
          </div>
          <div class="demo-crop-area-page__column">
            <div class="demo-crop-area-page__caption">Decimals [12.5, 18.3, 12.5, 18.3]</div>
            <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--narrow">
              <img :src="cropSampleImage" alt="Decimal coordinate boundary preview" class="demo-crop-area-page__image"/>
              <D1CropArea v-model="decimalCoordinator" aria-label="Decimal crop area"/>
            </div>
          </div>
        </DemoFlex>
        <DemoBox class="demo-crop-area-page__narrow-box">
          <div class="demo-crop-area-page__caption">
            SuperLongUnbrokenCropAreaLabelWithoutSpaces1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </div>
          <div class="demo-crop-area-page__caption">
            Học tiếng Việt • Кириллица 🚀 • &lt;img src=x onerror=alert(1)&gt;
          </div>
          <div class="demo-crop-area-page__canvas demo-crop-area-page__canvas--narrow">
            <img :src="cropSampleImage" alt="Narrow container boundary preview" class="demo-crop-area-page__image"/>
            <D1CropArea :value="[15, 15, 15, 15]" aria-label="Narrow Unicode crop area: Học tiếng Việt 🚀"/>
          </div>
        </DemoBox>
        <DemoValue label="Decimal Coordinates" :value="decimalCoordinator"/>
      </D1Group>

      <D1Group label="SSR & Lifecycle (v-if mount/unmount)">
        <DemoFlex align="center">
          <D1Button
            :label="isLifecycleMounted ? 'Unmount CropArea' : 'Mount CropArea'"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <DemoValue label="Mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
        <div v-if="isLifecycleMounted" class="demo-crop-area-page__canvas demo-crop-area-page__canvas--compact">
          <img :src="cropSampleImage" alt="Lifecycle crop preview" class="demo-crop-area-page__image"/>
          <D1CropArea v-model="lifecycleCoordinator"/>
        </div>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-crop-area-page {
  &__column {
    min-width: 0;
    max-width: 100%;
  }

  &__caption {
    margin-bottom: 6px;
    font-size: 13px;
    opacity: 0.75;
    overflow-wrap: anywhere;
  }

  &__canvas {
    position: relative;
    width: 320px;
    max-width: 100%;
    height: 220px;
    border-radius: 8px;
    overflow: hidden;

    &--compact {
      width: 260px;
      height: 180px;
    }

    &--narrow {
      width: 220px;
      height: 150px;
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    user-select: none;
  }

  &__narrow-box {
    width: 100%;
    max-width: 260px;
    overflow: hidden;
  }
}
</style>
