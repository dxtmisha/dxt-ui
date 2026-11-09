<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ComponentOutletDesign,
  type ComponentOutletEmits,
  type ComponentOutletSlots
} from '@dxtmisha/constructor/ComponentOutlet'

import { defaults, type ComponentOutletProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1ComponentOutlet'
})

const emits = defineEmits<ComponentOutletEmits>()
const props = withDefaults(defineProps<ComponentOutletProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-componentOutlet': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ComponentOutletDesign(
  'd1.componentOutlet',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<ComponentOutletSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
