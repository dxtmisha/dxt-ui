<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  GroupDesign,
  type GroupEmits,
  type GroupSlots
} from '@dxtmisha/constructor/Group'

import { D1Header } from '../Header'

import { defaults, type GroupProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Group'
})

const emits = defineEmits<GroupEmits>()
const props = withDefaults(defineProps<GroupProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-group': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new GroupDesign(
  'd1.group',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      header: D1Header
    }
  }
)

const render = design.render()

defineSlots<GroupSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
