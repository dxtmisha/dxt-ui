<script setup lang="ts">
import { UiTestContainer, UiTestGroup, UiTestItemFull, UiTestTitle } from '@dxt-ui/test'

import elevations from '../../media/tokens/elevation.json'
</script>

<template>
  <UiTestTitle title="Elevations"/>

  <UiTestContainer label="Basic">
    <UiTestGroup>
      <template
        v-for="(_, name) in elevations"
        :key="name"
      >
        <UiTestItemFull
          :background="false"
          :class="`d1-elevation--${name}`"
          :rounded="false"
          size="lg"
        >
          <div style="height: 128px;"></div>
        </UiTestItemFull>
        <div/>
        <div/>
      </template>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer
    class="d1-dark"
    is-dark
    label="Dark"
  >
    <UiTestGroup>
      <template
        v-for="(_, name) in elevations"
        :key="name"
      >
        <UiTestItemFull
          :background="false"
          :class="`d1-elevation--${name}`"
          :rounded="false"
          size="lg"
        >
          <div style="height: 128px;"></div>
        </UiTestItemFull>
        <div/>
        <div/>
      </template>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
