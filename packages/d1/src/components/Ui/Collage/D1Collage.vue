<script setup lang="ts">
import {
  CollageDesign,
  type CollageEmits,
  type CollageSlots
} from '@dxtmisha/constructor/Collage'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import { computed } from 'vue'

import { D1CollageItem } from '../CollageItem'
import { defaults, propsValues, type CollageProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Collage'
})

const emits = defineEmits<CollageEmits>()
const props = withDefaults(defineProps<CollageProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-collage': true,
    [`d1-collage--columns--${props.columns}`]: inArray(propsValues.columns, props.columns),
    [`d1-collage--appearance--${props.appearance}`]: inArray(propsValues.appearance, props.appearance)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new CollageDesign(
  'd1.collage',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      collageItem: D1CollageItem
    }
  }
)

const render = design.render()

defineSlots<CollageSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
