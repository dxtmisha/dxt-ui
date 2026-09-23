<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  InputFileDropzoneDesign,
  type InputFileDropzoneEmits,
  type InputFileDropzoneSlots
} from '@dxtmisha/constructor/InputFileDropzone'

import { D1Dropzone } from '../Dropzone'
import { D1FieldLabel } from '../FieldLabel'
import { D1FieldMessage } from '../FieldMessage'

import { defaults, type InputFileDropzoneProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1InputFileDropzone'
})

const emits = defineEmits<InputFileDropzoneEmits>()
const props = withDefaults(defineProps<InputFileDropzoneProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-inputFileDropzone': true,
    'd1-inputFileDropzone--disabled': props.disabled,
    'd1-inputFileDropzone--readonly': props.readonly
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new InputFileDropzoneDesign(
  'd1.inputFileDropzone',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      dropzone: D1Dropzone,
      fieldLabel: D1FieldLabel,
      fieldMessage: D1FieldMessage
    }
  }
)

const render = design.render()

defineSlots<InputFileDropzoneSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
