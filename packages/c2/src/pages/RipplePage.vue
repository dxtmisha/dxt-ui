<script setup lang="ts">
import {
  UiTestContainer,
  UiTestGroup,
  UiTestItemSquared,
  UiTestTitle
} from '@dxt-ui/test'

import C2Ripple from '../components/CcUi/Ripple/C2Ripple.vue'

</script>

<template>
  <UiTestTitle title="Ripple"/>

  <UiTestContainer>
    <UiTestGroup>
      <UiTestItemSquared>
        <C2Ripple/>
      </UiTestItemSquared>
      <UiTestItemSquared class="app-page-ripple__color" label="Color">
        <C2Ripple/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Disabled">
        <C2Ripple disabled/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss">
@use '@dxt-ui/styles' as ui;

.app-page-ripple {
  &__color {
    @include ui.color(var(--c2-st-asemantic-border-color-pistachio-explicit));
  }
}</style>
