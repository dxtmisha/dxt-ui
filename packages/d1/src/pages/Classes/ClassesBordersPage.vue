<script setup lang="ts">
import { UiTestContainer, UiTestGroup, UiTestItemFull, UiTestTitle } from '@dxt-ui/test'

import borders from '../../media/tokens/border.json'
</script>

<template>
  <UiTestTitle title="Borders"/>

  <UiTestContainer label="Basic">
    <UiTestGroup>
      <template
        v-for="(_, name) in borders"
        :key="name"
      >
        <UiTestItemFull
          v-if="name !== 'palette'"
          :class="`d1-border--${name.replace('~', '')}`"
          is-padding
        >
          {{ name.replace('~', '') }}
        </UiTestItemFull>
      </template>
    </UiTestGroup>
    <UiTestGroup class="d1-palette--orange">
      <template
        v-for="(_, name) in borders.palette"
        :key="name"
      >
        <UiTestItemFull
          is-padding
          :class="`d1-border--palette d1-border--${name.replace('~', '')}`"
        >
          Palette/ orange: {{ name.replace('~', '') }}
        </UiTestItemFull>
      </template>
    </UiTestGroup>
    <UiTestGroup class="d1-palette--violet">
      <template
        v-for="(_, name) in borders.palette"
        :key="name"
      >
        <UiTestItemFull
          is-padding
          :class="`d1-border--palette d1-border--${name.replace('~', '')}`"
        >
          Palette/ violet: {{ name.replace('~', '') }}
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
        v-for="(_, name) in borders"
        :key="name"
      >
        <UiTestItemFull
          v-if="name !== 'palette'"
          :class="`d1-border--${name.replace('~', '')}`"
          :inverse="true"
          is-padding
        >
          <div class="d1-color--onSurface">
            {{ name.replace('~', '') }}
          </div>
        </UiTestItemFull>
      </template>
    </UiTestGroup>
    <UiTestGroup class="d1-palette--orange">
      <template
        v-for="(_, name) in borders.palette"
        :key="name"
      >
        <UiTestItemFull
          :class="`d1-border--palette d1-border--${name.replace('~', '')}`"
          :inverse="true"
          is-padding
        >
          <div class="d1-color--onSurface">
            Palette/ orange: {{ name.replace('~', '') }}
          </div>
        </UiTestItemFull>
      </template>
    </UiTestGroup>
    <UiTestGroup class="d1-palette--violet">
      <template
        v-for="(_, name) in borders.palette"
        :key="name"
      >
        <UiTestItemFull
          :class="`d1-border--palette d1-border--${name.replace('~', '')}`"
          :inverse="true"
          is-padding
        >
          <div class="d1-color--onSurface">
            Palette/ violet: {{ name.replace('~', '') }}
          </div>
        </UiTestItemFull>
      </template>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
