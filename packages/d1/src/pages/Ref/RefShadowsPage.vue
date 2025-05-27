<script setup lang="ts">
import { UiTestContainer, UiTestGroup, UiTestItemSquared, UiTestTitle } from '@dxt-ui/test'

import tokens from '../../styles/d1/list.json'

const shadows = tokens?.d1?.value?.ref?.value?.shadow?.value
console.log('shadows', shadows)
</script>

<template>
  <UiTestTitle title="Shadows"/>

  <UiTestContainer>
    <UiTestGroup>
      <UiTestItemSquared
        v-for="(item, key) in shadows"
        :key="key"
        :label="key"
        :style="`box-shadow: ${item.value};`"
        size="md"
      />
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
