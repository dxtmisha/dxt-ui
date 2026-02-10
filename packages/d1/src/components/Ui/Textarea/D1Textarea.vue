<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TextareaDesign,
  type TextareaEmits,
  type TextareaSlots
} from '@dxtmisha/constructor/Textarea'

import { D1TextareaAutosize } from '../TextareaAutosize'
import { D1Field } from '../Field'

import { defaults, type TextareaProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Textarea'
})

const emits = defineEmits<TextareaEmits>()
const props = withDefaults(defineProps<TextareaProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-textarea': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TextareaDesign(
  'd1.textarea',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      textareaAutosize: D1TextareaAutosize,
      field: D1Field
    }
  }
)

const render = design.render()

defineSlots<TextareaSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
