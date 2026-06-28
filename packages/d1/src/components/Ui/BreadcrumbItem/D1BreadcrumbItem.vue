<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  BreadcrumbItemDesign,
  type BreadcrumbItemEmits,
  type BreadcrumbItemSlots
} from '@dxtmisha/constructor/BreadcrumbItem'

import { D1Icon } from '../Icon'

import { defaults, type BreadcrumbItemProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1BreadcrumbItem'
})

const emits = defineEmits<BreadcrumbItemEmits>()
const props = withDefaults(defineProps<BreadcrumbItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-breadcrumbItem': true,
    'd1-breadcrumbItem--disabled': props.disabled,
    'd1-breadcrumbItem--readonly': props.readonly,
    'd1-breadcrumbItem--back': props.back
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new BreadcrumbItemDesign(
  'd1.breadcrumbItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      icon: D1Icon
    }
  }
)

const render = design.render()

defineSlots<BreadcrumbItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
