<script setup lang="ts">
import { UiTestContainer, UiTestGroup, UiTestItemSquared, UiTestTitle } from '@dxt-ui/test'

import tokens from '../../styles/d1/list.json'

const colors = tokens?.d1?.value?.ref?.value?.palette?.value
</script>

<template>
  <UiTestTitle title="Colors"/>

  <UiTestContainer
    v-for="color in colors"
    :key="color.name"
    :label="color.name"
  >
    <UiTestGroup>
      <UiTestItemSquared
        v-for="(item, key) in color.value"
        :key="key"
        size="md"
      >
        <div
          class="app-page-colors__color"
          :style="`background-color: ${item.value};`"
        />
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss">
@use '@dxt-ui/styles' as ui;

.app-page-colors {
  &__color {
    @include ui.absolute;
  }
}
</style>
