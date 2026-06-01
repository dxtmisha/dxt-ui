<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ImageExpose } from '@dxtmisha/constructor/Image'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const demoPdf = 'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf'

const imageRef = ref<ImageExpose | null>(null)

const statusValue = computed<string>(() => {
  if (imageRef.value) {
    const type = imageRef.value.getType()
    const data = imageRef.value.getData()
    const src = typeof data === 'object' && data !== null ? data.src : data
    return `getType(): "${type}", getData(): ${src ? `src: "${src}"` : 'undefined'}`
  }
  return 'Ref not initialized'
})
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Image">
    <D1Section>
      <D1Group label="Basic">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/400/300?random=1" /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/400/300?random=2" /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/400/300?random=3" /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/400/300?random=4" /></D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Sizes & Fits">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/300/500?random=41" size="contain" /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/300/500?random=42" size="cover" /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/300/500?random=43" size="auto" class="bg-gray" /></D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Icons">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="home" /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="settings" adaptive /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="search" /></D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Position & Coordinator">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/600/400?random=6" :coordinator="[50, 50, 100, 100]" /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/600/400?random=7" x="left" y="top" /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/600/400?random=8" x="right" y="bottom" /></D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Special Types & States">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image :value="demoPdf" /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/400/400?random=9" disabled /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/400/400?random=10" lazy /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/400/400?random=11" tagImg /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/400/400?random=13" tagImg lazy /></D1GridItem>
          <D1GridItem :base="'2'" class="demo-image-page__item"><D1Image value="https://picsum.photos/400/400?random=12" turn /></D1GridItem>
        </D1Grid>
      </D1Group>

      <D1Group label="Control via Expose Methods">
        <D1Grid>
          <D1GridItem :base="'2'" class="demo-image-page__item">
            <D1Image
              ref="imageRef"
              value="https://picsum.photos/400/300?random=100"
            />
          </D1GridItem>
        </D1Grid>
        <DemoValue :value="statusValue"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-image-page {
  &__item {
    position: relative;
    width: 100%;
    height: 160px;
  }
}
</style>
