<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  TextareaAutosizeDesign,
  type TextareaAutosizeEmits,
  type TextareaAutosizeSlots
} from '@dxtmisha/constructor/TextareaAutosize'

import { defaults, type TextareaAutosizeProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1TextareaAutosize'
})

const emits = defineEmits<TextareaAutosizeEmits>()
const props = withDefaults(defineProps<TextareaAutosizeProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-textareaAutosize': true,
    'd1-textareaAutosize--autosize': props.autosize,
    [`d1-textareaAutosize--height--${props.height}`]: inArray(propsValues.height, props.height)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new TextareaAutosizeDesign(
  'd1.textareaAutosize',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<TextareaAutosizeSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
