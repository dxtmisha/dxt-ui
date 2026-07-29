<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  NavigationRailDesign,
  type NavigationRailEmits,
  type NavigationRailSlots
} from '@dxtmisha/constructor/NavigationRail'

import { D1NavigationItem } from '../NavigationItem'
import { D1NavigationRailItem } from '../NavigationRailItem'
import { D1ListMenu } from '../ListMenu'

import { defaults, type NavigationRailProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1NavigationRail'
})

const emits = defineEmits<NavigationRailEmits>()
const props = withDefaults(defineProps<NavigationRailProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-navigationRail': true,
    'd1-navigationRail--divider': props.divider
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new NavigationRailDesign(
  'd1.navigationRail',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      navigationItem: D1NavigationItem,
      navigationRailItem: D1NavigationRailItem,
      listMenu: D1ListMenu
    }
  }
)

const render = design.render()

defineSlots<NavigationRailSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
