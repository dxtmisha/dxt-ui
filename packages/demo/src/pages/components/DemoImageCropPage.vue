<script setup lang="ts">
import { ref } from 'vue'
import type { CropAreaCoordinator } from '@dxtmisha/constructor/CropArea'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const makeSampleSvg = (width: number, height: number, colorStart: string, colorEnd: string): string => {
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">`
    + `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${colorStart}"/><stop offset="100%" stop-color="${colorEnd}"/></linearGradient></defs>`
    + `<rect width="${width}" height="${height}" fill="url(#g)"/>`
    + `<circle cx="${Math.round(width * 0.72)}" cy="${Math.round(height * 0.28)}" r="${Math.round(Math.min(width, height) * 0.14)}" fill="rgba(255,255,255,0.3)"/>`
    + `<path d="M0 ${Math.round(height * 0.75)} L${Math.round(width * 0.35)} ${Math.round(height * 0.45)} L${Math.round(width * 0.68)} ${Math.round(height * 0.65)} L${width} ${Math.round(height * 0.4)} L${width} ${height} L0 ${height} Z" fill="rgba(15,23,42,0.35)"/>`
    + '</svg>'
  )
}

const demoImageStandard = makeSampleSvg(600, 400, '#2563eb', '#9333ea')
const demoImageLandscape = makeSampleSvg(800, 400, '#0f766e', '#0284c7')
const demoImagePortrait = makeSampleSvg(400, 600, '#be185d', '#f97316')
const demoImageSquare = makeSampleSvg(480, 480, '#4f46e5', '#06b6d4')

const coordinator = ref<CropAreaCoordinator>([15, 20, 15, 20])
const valueCoord = ref<CropAreaCoordinator>([10, 10, 10, 10])
const toggleDisabled = ref<boolean>(false)
const toggleReadonly = ref<boolean>(false)
const isMounted = ref<boolean>(true)

const { eventName, onEvent } = useDemoEvent()
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="ImageCrop">
    <D1Section>
      <D1Group label="Basic (Interactive v-model)">
        <DemoFlex>
          <D1Button label="Center 50%" data-testid="ic-preset-center" @click="coordinator = [25, 25, 25, 25]" />
          <D1Button label="Wide Banner" data-testid="ic-preset-wide" @click="coordinator = [30, 5, 30, 5]" />
          <D1Button label="Reset" data-testid="ic-preset-reset" @click="coordinator = [0, 0, 0, 0]" />
        </DemoFlex>
        <div class="demo-image-crop-page__item">
          <D1ImageCrop
            data-testid="ic-basic"
            :image="demoImageStandard"
            alt="Interactive crop sample"
            v-model="coordinator"
          />
        </div>
        <DemoValue :value="coordinator" label="Coordinates [top, right, bottom, left]" />
      </D1Group>

      <D1Group label="Value Prop & v-model:value">
        <DemoFlex>
          <D1Button label="Set [20, 15, 20, 15]" data-testid="ic-value-set" @click="valueCoord = [20, 15, 20, 15]" />
        </DemoFlex>
        <div class="demo-image-crop-page__item">
          <D1ImageCrop
            data-testid="ic-value"
            :image="demoImageSquare"
            alt="Square crop sample"
            v-model:value="valueCoord"
          />
        </div>
        <DemoValue :value="valueCoord" label="v-model:value" />
      </D1Group>

      <D1Group label="States (Disabled & Readonly)">
        <DemoFlex>
          <D1Button
            :label="toggleDisabled ? 'Enable' : 'Disable'"
            data-testid="ic-toggle-disabled"
            @click="toggleDisabled = !toggleDisabled"
          />
          <D1Button
            :label="toggleReadonly ? 'Editable' : 'Readonly'"
            outline
            data-testid="ic-toggle-readonly"
            @click="toggleReadonly = !toggleReadonly"
          />
        </DemoFlex>
        <div class="demo-image-crop-page__item">
          <D1ImageCrop
            data-testid="ic-state-toggle"
            :image="demoImageStandard"
            alt="Toggle state sample"
            :value="[20, 20, 20, 20]"
            :disabled="toggleDisabled"
            :readonly="toggleReadonly"
          />
        </div>
      </D1Group>

      <D1Group label="Different Aspect Ratios (Landscape & Portrait)">
        <D1Grid>
          <D1GridItem :base="'2'">
            <div class="demo-image-crop-page__grid">
              <D1ImageCrop
                data-testid="ic-landscape"
                :image="demoImageLandscape"
                alt="Landscape sample"
                :value="[10, 10, 10, 10]"
              />
            </div>
          </D1GridItem>
          <D1GridItem :base="'2'">
            <div class="demo-image-crop-page__grid">
              <D1ImageCrop
                data-testid="ic-portrait"
                :image="demoImagePortrait"
                alt="Portrait sample"
                :value="[15, 15, 15, 15]"
              />
            </div>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Attributes & Default Slot">
        <div class="demo-image-crop-page__item">
          <D1ImageCrop
            data-testid="ic-slot"
            :image="demoImageStandard"
            alt="Accessible alt text"
            :value="[12, 12, 12, 12]"
            :image-attrs="{ class: 'demo-image-crop-page__custom-img' }"
            :crop-area-attrs="{ locked: 'left' }"
          >
            <div class="demo-image-crop-page__badge">Slot Overlay</div>
          </D1ImageCrop>
        </div>
      </D1Group>

      <D1Group label="Events">
        <div class="demo-image-crop-page__item">
          <D1ImageCrop
            data-testid="ic-events"
            :image="demoImageStandard"
            alt="Events crop sample"
            :value="[10, 10, 10, 10]"
            @load="onEvent('load', $event)"
            @resize="onEvent('resize', $event)"
            @update:model-value="onEvent('update:modelValue', $event)"
            @update:value="onEvent('update:value', $event)"
          />
        </div>
        <DemoValue :value="eventName" label="Last Event" />
      </D1Group>

      <D1Group label="Boundary & Narrow Container">
        <DemoBox class="demo-image-crop-page__narrow">
          <div class="demo-image-crop-page__grid">
            <D1ImageCrop
              data-testid="ic-narrow"
              :image="demoImageStandard"
              alt="Narrow container sample"
              :value="[40, 40, 40, 40]"
            />
          </div>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle (v-if Mount / Unmount)">
        <DemoFlex>
          <D1Button
            :label="isMounted ? 'Unmount' : 'Mount'"
            data-testid="ic-toggle-mount"
            @click="isMounted = !isMounted"
          />
        </DemoFlex>
        <div v-if="isMounted" class="demo-image-crop-page__item">
          <D1ImageCrop
            data-testid="ic-lifecycle"
            :image="demoImageSquare"
            alt="Lifecycle sample"
            :value="[15, 15, 15, 15]"
          />
        </div>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-image-crop-page {
  &__item {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 360px;
  }

  &__grid {
    position: relative;
    width: 100%;
    height: 260px;
  }

  &__badge {
    position: absolute;
    inset-block-start: 8px;
    inset-inline-start: 8px;
    padding: 4px 8px;
    border-radius: 6px;
    background: rgba(15, 23, 42, 0.75);
    color: #fff;
    font-size: 12px;
    pointer-events: none;
  }

  &__narrow {
    max-width: 260px;
  }
}
</style>
