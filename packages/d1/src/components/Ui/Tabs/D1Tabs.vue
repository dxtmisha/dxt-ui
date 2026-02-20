<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TabsDesign,
  type TabsEmits,
  type TabsSlots
} from '@dxtmisha/constructor/Tabs'

import { D1TabsNavigation } from '../TabsNavigation'
import { D1MotionAxis } from '../MotionAxis'

import { defaults, type TabsProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Tabs'
})

const emits = defineEmits<TabsEmits>()
const props = withDefaults(defineProps<TabsProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-tabs': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TabsDesign(
  'd1.tabs',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      tabsNavigation: D1TabsNavigation,
      motionAxis: D1MotionAxis
    }
  }
)

const render = design.render()

defineSlots<TabsSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
