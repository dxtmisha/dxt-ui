<script setup lang="ts">
import { ref } from 'vue'
import type { CropAreaCoordinator } from '@dxtmisha/constructor/CropArea'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const demoImage1 = 'https://picsum.photos/600/400?random=1'
const demoImage2 = 'https://picsum.photos/600/400?random=2'
const demoImageLandscape = 'https://picsum.photos/800/400?random=3'
const demoImagePortrait = 'https://picsum.photos/400/600?random=4'

const coordinator = ref<CropAreaCoordinator>([15, 20, 15, 20])
const { eventName, onEvent } = useDemoEvent()
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="ImageCrop">
    <D1Section>
      <D1Group label="Basic (Interactive v-model)">
        <DemoFlex>
          <D1Button label="Center 50%" @click="coordinator = [25, 25, 25, 25]" />
          <D1Button label="Wide Banner" @click="coordinator = [30, 5, 30, 5]" />
          <D1Button label="Reset" @click="coordinator = [0, 0, 0, 0]" />
        </DemoFlex>
        <div class="demo-image-crop-page__item">
          <D1ImageCrop
            :image="demoImage1"
            v-model="coordinator"
          />
        </div>
        <DemoValue :value="coordinator" label="Coordinates [top, right, bottom, left]" />
      </D1Group>

      <D1Group label="States (Disabled & Readonly)">
        <D1Grid>
          <D1GridItem :base="'2'">
            <div class="demo-image-crop-page__grid">
              <D1ImageCrop
                :image="demoImage2"
                :value="[20, 20, 20, 20]"
                disabled
              />
            </div>
          </D1GridItem>
          <D1GridItem :base="'2'">
            <div class="demo-image-crop-page__grid">
              <D1ImageCrop
                :image="demoImage2"
                :value="[15, 15, 15, 15]"
                readonly
              />
            </div>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Different Aspect Ratios">
        <D1Grid>
          <D1GridItem :base="'2'">
            <div class="demo-image-crop-page__grid">
              <D1ImageCrop
                :image="demoImageLandscape"
                :value="[10, 10, 10, 10]"
              />
            </div>
          </D1GridItem>
          <D1GridItem :base="'2'">
            <div class="demo-image-crop-page__grid">
              <D1ImageCrop
                :image="demoImagePortrait"
                :value="[15, 15, 15, 15]"
              />
            </div>
          </D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Events">
        <div class="demo-image-crop-page__item">
          <D1ImageCrop
            :image="demoImage1"
            :value="[10, 10, 10, 10]"
            @load="onEvent('load')"
            @resize="onEvent('resize', $event)"
          />
        </div>
        <DemoValue :value="eventName" label="Last Event" />
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
}
</style>
