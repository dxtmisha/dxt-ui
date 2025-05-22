<script setup lang="ts">
import { UiTestContainer, UiTestGroup, UiTestItemFull, UiTestTitle } from '@dxt-ui/test'

import backgrounds from '../../media/tokens/background.json'
</script>

<template>
  <UiTestTitle title="Background"/>

  <UiTestContainer label="Basic">
    <UiTestGroup>
      <template
        v-for="(_, name) in backgrounds"
        :key="name"
      >
        <UiTestItemFull
          v-if="name !== 'palette'"
          :background="false"
          :class="`d1-background--${name.replace('~', '')}`"
          is-padding
        >
          <div :class="name.match(/inversePrimary|surface/) ? 'd1-color--onSurface' : 'd1-color--onPrimary'">
            {{ name.replace('~', '') }}
          </div>
        </UiTestItemFull>
      </template>
    </UiTestGroup>
    <UiTestGroup class="d1-palette--orange">
      <template
        v-for="(_, name) in backgrounds.palette"
        :key="name"
      >
        <UiTestItemFull
          is-padding
          :background="false"
          :class="`d1-background--palette d1-background--${name.replace('~', '')}`"
        >
          <div :class="name.match(/inversePrimary|surface/) ? 'd1-color--onSurface' : 'd1-color--onPrimary'">
            Palette/ orange: {{ name.replace('~', '') }}
          </div>
        </UiTestItemFull>
      </template>
    </UiTestGroup>
    <UiTestGroup class="d1-palette--violet">
      <template
        v-for="(_, name) in backgrounds.palette"
        :key="name"
      >
        <UiTestItemFull
          is-padding
          :background="false"
          :class="`d1-background--palette d1-background--${name.replace('~', '')}`"
        >
          <div :class="name.match(/inversePrimary|surface/) ? 'd1-color--onSurface' : 'd1-color--onPrimary'">
            Palette/ violet: {{ name.replace('~', '') }}
          </div>
        </UiTestItemFull>
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
        v-for="(_, name) in backgrounds"
        :key="name"
      >
        <UiTestItemFull
          v-if="name !== 'palette'"
          :background="false"
          :class="`d1-background--${name.replace('~', '')}`"
          is-padding
        >
          <div :class="name.match(/inversePrimary|surface/) ? 'd1-color--onSurface' : 'd1-color--onPrimary'">
            {{ name.replace('~', '') }}
          </div>
        </UiTestItemFull>
      </template>
    </UiTestGroup>
    <UiTestGroup class="d1-palette--orange">
      <template
        v-for="(_, name) in backgrounds.palette"
        :key="name"
      >
        <UiTestItemFull
          is-padding
          :background="false"
          :class="`d1-background--palette d1-background--${name.replace('~', '')}`"
        >
          <div :class="name.match(/inversePrimary|surface/) ? 'd1-color--onSurface' : 'd1-color--onPrimary'">
            Palette/ orange: {{ name.replace('~', '') }}
          </div>
        </UiTestItemFull>
      </template>
    </UiTestGroup>
    <UiTestGroup class="d1-palette--violet">
      <template
        v-for="(_, name) in backgrounds.palette"
        :key="name"
      >
        <UiTestItemFull
          is-padding
          :background="false"
          :class="`d1-background--palette d1-background--${name.replace('~', '')}`"
        >
          <div :class="name.match(/inversePrimary|surface/) ? 'd1-color--onSurface' : 'd1-color--onPrimary'">
            Palette/ violet: {{ name.replace('~', '') }}
          </div>
        </UiTestItemFull>
      </template>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
