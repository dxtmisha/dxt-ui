<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  DropzoneDesign,
  type DropzoneEmits,
  type DropzoneSlots
} from '@dxtmisha/constructor/Dropzone'

import D1Icon from '../Icon/D1Icon.vue'

import { defaults, type DropzoneProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Dropzone'
})

const emits = defineEmits<DropzoneEmits>()
const props = withDefaults(defineProps<DropzoneProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-dropzone': true,
    'd1-dropzone--disabled': props.disabled,
    'd1-dropzone--readonly': props.readonly
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new DropzoneDesign(
  'd1.dropzone',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      icon: D1Icon
    },
    compMod: {
      icon: {
        size: 'lg'
      }
    }
  }
)

const render = design.render()

defineSlots<DropzoneSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
