<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  isFilled,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  BreadcrumbsDesign,
  type BreadcrumbsEmits,
  type BreadcrumbsSlots
} from '@dxtmisha/constructor/Breadcrumbs'

import { defaults, type BreadcrumbsProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Breadcrumbs'
})

const emits = defineEmits<BreadcrumbsEmits>()
const props = withDefaults(defineProps<BreadcrumbsProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-breadcrumbs': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new BreadcrumbsDesign(
  'd1.breadcrumbs',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<BreadcrumbsSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
