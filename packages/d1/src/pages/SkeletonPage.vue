<script setup lang="ts">
import {
  UiTestContainer,
  UiTestGroup,
  UiTestItemFull,
  UiTestItemSquared,
  UiTestTitle
} from '@dxt-ui/test'

import D1Skeleton from '../components/CcUi/Skeleton/D1Skeleton.vue'
</script>

<template>
  <UiTestTitle title="Skeleton"/>

  <UiTestContainer label="Text">
    <D1Skeleton :active="true">
      <template #default="{ classText }">
        <UiTestGroup>
          <UiTestItemFull :class="classText" :is-flex="false">
            Современные умные часы с мониторингом активности и уведомлениями прямо на запястье.
          </UiTestItemFull>
          <UiTestItemFull :class="classText" :is-flex="false">
            <div>Легкие беспроводные наушники с качественным звуком и долгим временем работы.</div>
            <div>Автоматический робот-пылесос, эффективно убирающий пыль и мусор без вашего участия.</div>
          </UiTestItemFull>
          <UiTestItemFull :is-flex="false">
            <div :class="classText">Легкие беспроводные наушники с качественным звуком и долгим временем работы.</div>
            <div :class="classText">Автоматический робот-пылесос, эффективно убирающий пыль и мусор без вашего участия.</div>
          </UiTestItemFull>
        </UiTestGroup>
      </template>
    </D1Skeleton>
  </UiTestContainer>

  <UiTestContainer label="Background">
    <D1Skeleton :active="true">
      <template #default="{ classBackground, classBackgroundVariant }">
        <UiTestGroup>
          <UiTestItemFull :class="classBackground" :is-flex="false">
            Современные умные часы с мониторингом активности и уведомлениями прямо на запястье.
          </UiTestItemFull>
          <UiTestItemSquared :class="classBackground"/>
          <UiTestItemSquared :class="classBackgroundVariant"/>
          <UiTestItemFull>
            <div :class="classBackground" style="border-radius: 8px;">
              Легкие беспроводные наушники с качественным звуком и долгим временем работы.
            </div>
            <div :class="classBackground" style="border-radius: 8px;">
              Автоматический робот-пылесос, эффективно убирающий пыль и мусор без вашего участия.
            </div>
          </UiTestItemFull>
          <UiTestItemFull>
            <div :class="classBackgroundVariant" style="border-radius: 8px;">
              Легкие беспроводные наушники с качественным звуком и долгим временем работы.
            </div>
            <div :class="classBackgroundVariant" style="border-radius: 8px;">
              Автоматический робот-пылесос, эффективно убирающий пыль и мусор без вашего участия.
            </div>
          </UiTestItemFull>
        </UiTestGroup>
      </template>
    </D1Skeleton>
  </UiTestContainer>

  <UiTestContainer label="Border">
    <D1Skeleton :active="true">
      <template #default="{ classBorder, classBorderVariant }">
        <UiTestGroup>
          <UiTestItemFull>
            <div :class="classBorder" style="border: 2px solid black; border-radius: 8px;">
              Легкие беспроводные наушники с качественным звуком и долгим временем работы.
            </div>
            <div :class="classBorder" style="border: 2px solid black; border-radius: 8px;">
              Автоматический робот-пылесос, эффективно убирающий пыль и мусор без вашего участия.
            </div>
          </UiTestItemFull>
          <UiTestItemFull>
            <div :class="classBorderVariant" style="border: 1px solid black; border-radius: 8px;">
              Легкие беспроводные наушники с качественным звуком и долгим временем работы.
            </div>
            <div :class="classBorderVariant" style="border: 1px solid black; border-radius: 8px;">
              Автоматический робот-пылесос, эффективно убирающий пыль и мусор без вашего участия.
            </div>
          </UiTestItemFull>
        </UiTestGroup>
      </template>
    </D1Skeleton>
  </UiTestContainer>
</template>

<style lang="scss"></style>
