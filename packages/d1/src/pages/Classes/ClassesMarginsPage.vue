<script setup lang="ts">
import { UiTestContainer, UiTestGroup, UiTestTitle } from '@dxt-ui/test'

import margins from '../../media/tokens/margin.json'
import marginsX from '../../media/tokens/marginX.json'
import marginsY from '../../media/tokens/marginY.json'
</script>

<template>
  <UiTestTitle title="Margins"/>

  <UiTestContainer label="Basic">
    <UiTestGroup>
      <template
        v-for="(_, name) in margins"
        :key="name"
      >
        <div class="app-page-classesMargins__item d1-border--outline">
          <div :class="`d1-color--onPrimary d1-background--primary d1-margin--${name}`">{{ name }}</div>
        </div>
      </template>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="X">
    <UiTestGroup>
      <template
        v-for="(_, name) in marginsX"
        :key="name"
      >
        <div class="app-page-classesMargins__item d1-border--outline">
          <div :class="`d1-color--onPrimary d1-background--primary d1-marginX--${name}`">{{ name }}</div>
        </div>
      </template>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Y">
    <UiTestGroup>
      <template
        v-for="(_, name) in marginsY"
        :key="name"
      >
        <div class="app-page-classesMargins__item d1-border--outline">
          <div :class="`d1-color--onPrimary d1-background--primary d1-marginY--${name}`">{{ name }}</div>
        </div>
      </template>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
