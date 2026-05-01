<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Progress">
    <D1Grid>
      <!-- Mode: Linear -->
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress linear visible value="30" /></D1GridItem>
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress linear visible indeterminate="type1" /></D1GridItem>
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress linear visible indeterminate="type2" /></D1GridItem>
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress linear visible indeterminate="type3" /></D1GridItem>

      <!-- Mode: Circular -->
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress circular visible value="60" /></D1GridItem>
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress circular visible indeterminate="type1" /></D1GridItem>
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress circular visible indeterminate="type2" /></D1GridItem>
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress circular visible indeterminate="type3" /></D1GridItem>

      <!-- Mode: Point -->
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress point visible indeterminate="type1" /></D1GridItem>
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress point visible indeterminate="type2" /></D1GridItem>
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress point visible indeterminate="type3" /></D1GridItem>

      <!-- Sizes -->
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress linear visible size="sm" indeterminate="type1" /></D1GridItem>
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress circular visible size="lg" value="45" /></D1GridItem>

      <!-- Palettes -->
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress linear visible palette="red" value="70" /></D1GridItem>
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress circular visible palette="green" indeterminate="type2" /></D1GridItem>

      <!-- States -->
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress linear visible inverse value="50" /></D1GridItem>
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress linear visible dense indeterminate="type1" /></D1GridItem>
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress linear visible position="bottom" indeterminate="type1" /></D1GridItem>
      <D1GridItem :base="'2'" class="demo-progress-page__item"><D1Progress linear visible position="static" indeterminate="type1" /></D1GridItem>
    </D1Grid>
  </D1Page>
</template>

<style lang="scss">
.demo-progress-page {
  &__item {
    position: relative;
    width: 100%;
    height: 100px;
  }
}
</style>
