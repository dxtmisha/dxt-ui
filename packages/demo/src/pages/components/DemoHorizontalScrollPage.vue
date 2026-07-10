<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="HorizontalScroll">
    <D1Section>
      <D1Group label="Basic (Scrollable Dummies)">
        <D1HorizontalScroll>
          <D1Dummy
            v-for="color in ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'stone']"
            :key="color"
            class="demo-horizontal-scroll__card"
            size="md"
            :palette="color"
          />
        </D1HorizontalScroll>
      </D1Group>

      <D1Group label="Align Left">
        <D1HorizontalScroll align="left">
          <D1Dummy v-for="i in 4" :key="i" class="demo-horizontal-scroll__card" size="sm" />
        </D1HorizontalScroll>
      </D1Group>

      <D1Group label="Align Center">
        <D1HorizontalScroll align="center">
          <D1Dummy v-for="i in 4" :key="i" class="demo-horizontal-scroll__card" size="sm" />
        </D1HorizontalScroll>
      </D1Group>

      <D1Group label="Align Right">
        <D1HorizontalScroll align="right">
          <D1Dummy v-for="i in 4" :key="i" class="demo-horizontal-scroll__card" size="sm" />
        </D1HorizontalScroll>
      </D1Group>

      <D1Group label="Align Block">
        <D1HorizontalScroll align="block">
          <D1Dummy v-for="i in 4" :key="i" class="demo-horizontal-scroll__card" size="sm" />
        </D1HorizontalScroll>
      </D1Group>

      <D1Group label="Bleed (Default)">
        <D1HorizontalScroll :bleed="true">
          <D1Dummy v-for="i in 6" :key="i" class="demo-horizontal-scroll__card" size="sm" />
        </D1HorizontalScroll>
      </D1Group>

      <D1Group label="No Bleed">
        <D1HorizontalScroll :bleed="false">
          <D1Dummy v-for="i in 6" :key="i" class="demo-horizontal-scroll__card" size="sm" />
        </D1HorizontalScroll>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-horizontal-scroll {
  &__card {
    width: 256px;
  }
}
</style>
