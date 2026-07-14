<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  PlaceholderDesign,
  type PlaceholderEmits,
  type PlaceholderSlots
} from '@dxtmisha/constructor/Placeholder'

import { D1Image } from '../Image'
import { D1Actions } from '../Actions'

import { defaults, type PlaceholderProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Placeholder'
})

const emits = defineEmits<PlaceholderEmits>()
const props = withDefaults(defineProps<PlaceholderProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-placeholder': true,
    [`d1-placeholder--size--${props.size}`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new PlaceholderDesign(
  'd1.placeholder',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      image: D1Image,
      actions: D1Actions
    }
  }
)

const render = design.render()

defineSlots<PlaceholderSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
