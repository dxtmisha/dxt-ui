<script setup lang="ts">
import { UiTestContainer, UiTestGroup, UiTestItemFull, UiTestTitle } from '@dxt-ui/test'

import fonts from '../media/tokens/font.json'
</script>

<template>
  <UiTestTitle title="Fonts"/>

  <UiTestContainer>
    <UiTestGroup>
      <UiTestItemFull
        v-for="(_, name) in fonts"
        :key="name"
        is-padding
      >
        <div :class="`d1-font--${name}`">
          {{ `${name.replace(/([A-Z])/g, '/ $1')}` }}
        </div>
      </UiTestItemFull>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
