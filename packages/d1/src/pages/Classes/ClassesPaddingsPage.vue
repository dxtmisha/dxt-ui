<script setup lang="ts">
import { UiTestContainer, UiTestGroup, UiTestTitle } from '@dxt-ui/test'

import paddings from '../../media/tokens/padding.json'
import paddingsX from '../../media/tokens/paddingX.json'
import paddingsY from '../../media/tokens/paddingY.json'
</script>

<template>
  <UiTestTitle title="Paddings"/>

  <UiTestContainer label="Basic">
    <UiTestGroup>
      <template
        v-for="(_, name) in paddings"
        :key="name"
      >
        <div
          :class="`app-page-classesPaddings__item d1-background--inversePrimary d1-padding--${name}`"
        >
          <div class="d1-color--onPrimary d1-background--primary">{{ name }}</div>
        </div>
      </template>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="X">
    <UiTestGroup>
      <template
        v-for="(_, name) in paddingsX"
        :key="name"
      >
        <div
          :class="`app-page-classesPaddings__item d1-background--inversePrimary d1-paddingX--${name}`"
        >
          <div class="d1-color--onPrimary d1-background--primary">{{ name }}</div>
        </div>
      </template>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Y">
    <UiTestGroup>
      <template
        v-for="(_, name) in paddingsY"
        :key="name"
      >
        <div
          :class="`app-page-classesPaddings__item d1-background--inversePrimary d1-paddingY--${name}`"
        >
          <div class="d1-color--onPrimary d1-background--primary">{{ name }}</div>
        </div>
      </template>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
