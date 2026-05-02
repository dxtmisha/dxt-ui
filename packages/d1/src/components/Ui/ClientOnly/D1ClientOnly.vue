<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ClientOnlyDesign,
  type ClientOnlyEmits,
  type ClientOnlySlots
} from '@dxtmisha/constructor/ClientOnly'

import { defaults, type ClientOnlyProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1ClientOnly'
})

const emits = defineEmits<ClientOnlyEmits>()
const props = withDefaults(defineProps<ClientOnlyProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-clientOnly': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ClientOnlyDesign(
  'd1.clientOnly',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<ClientOnlySlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
