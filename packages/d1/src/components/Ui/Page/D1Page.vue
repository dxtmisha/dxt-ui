<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  PageDesign,
  type PageEmits,
  type PageSlots
} from '@dxtmisha/constructor/Page'

import { defaults, type PageProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Page'
})

const emits = defineEmits<PageEmits>()
const props = withDefaults(defineProps<PageProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-page': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new PageDesign(
  'd1.page',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<PageSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
