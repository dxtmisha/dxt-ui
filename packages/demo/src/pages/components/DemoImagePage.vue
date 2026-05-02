<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'

const demoPdf = 'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf'
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
