<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Icon">
    <D1Section>
      <D1Group label="Sizes">
        <div class="demo-icon-page">
          <D1Icon icon="home" size="xs" />
          <D1Icon icon="home" size="md" />
          <D1Icon icon="home" size="xl" />
          <D1Icon icon="home" size="3xl" />
        </div>
      </D1Group>

      <D1Group label="Shapes">
        <div class="demo-icon-page">
          <D1Icon icon="settings" square />
          <D1Icon icon="settings" circle />
          <D1Icon icon="settings" rect />
          <D1Icon icon="settings" rounded="full" />
        </div>
      </D1Group>

      <D1Group label="States">
        <div class="demo-icon-page">
          <D1Icon icon="search" active />
          <D1Icon icon="search" disabled />
          <D1Icon icon="search" high />
          <D1Icon icon="visibility" iconActive="visibility_off" :active="false" />
          <D1Icon icon="visibility" iconActive="visibility_off" active />
        </div>
      </D1Group>

      <D1Group label="Palettes">
        <div class="demo-icon-page">
          <D1Icon icon="favorite" asPalette class="d1-palette--red" />
          <D1Icon icon="favorite" asPalette class="d1-palette--blue" />
          <D1Icon icon="favorite" asPalette class="d1-palette--green" />
        </div>
      </D1Group>

      <D1Group label="Transformations & Animations">
        <div class="demo-icon-page">
          <D1Icon icon="arrow_forward" turn />
          <D1Icon icon="arrow_forward" dir />
          <D1Icon icon="refresh" animationType="type1" animationShow />
          <D1Icon icon="refresh" animationType="type2" animationShow />
          <D1Icon icon="pending" dynamic />
        </div>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-icon-page {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}
</style>
