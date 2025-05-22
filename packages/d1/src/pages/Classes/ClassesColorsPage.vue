<script setup lang="ts">
import { UiTestContainer, UiTestGroup, UiTestItemFull, UiTestTitle } from '@dxt-ui/test'

import colors from '../../media/tokens/color.json'
</script>

<template>
  <UiTestTitle title="Colors"/>

  <UiTestContainer label="Basic">
    <UiTestGroup>
      <template
        v-for="(_, name) in colors"
        :key="name"
      >
        <UiTestItemFull
          v-if="name !== 'palette'"
          is-padding
          :inverse="Boolean(name.match(/onPrimary/))"
        >
          <div :class="`d1-color--${name.replace('~', '')}`">
            {{ name.replace('~', '') }}
          </div>
        </UiTestItemFull>
      </template>
    </UiTestGroup>
    <UiTestGroup class="d1-palette--purple">
      <template
        v-for="(_, name) in colors.palette"
        :key="name"
      >
        <UiTestItemFull is-padding>
          <div :class="`d1-color--palette d1-color--${name.replace('~', '')}`">
            Palette/ purple: {{ name.replace('~', '') }}
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
        v-for="(_, name) in colors"
        :key="name"
      >
        <UiTestItemFull
          v-if="name !== 'palette'"
          is-padding
          :inverse="!Boolean(name.match(/onPrimary/))"
        >
          <div :class="`d1-color--${name.replace('~', '')}`">
            {{ name.replace('~', '') }}
          </div>
        </UiTestItemFull>
      </template>
    </UiTestGroup>
    <UiTestGroup class="d1-palette--purple">
      <template
        v-for="(_, name) in colors.palette"
        :key="name"
      >
        <UiTestItemFull is-padding inverse>
          <div :class="`d1-color--palette d1-color--${name.replace('~', '')}`">
            Palette/ purple: {{ name.replace('~', '') }}
          </div>
        </UiTestItemFull>
      </template>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
