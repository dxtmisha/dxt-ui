<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles,
  inArray
} from '@dxtmisha/functional'
import {
  InputImageDesign,
  type InputImageEmits,
  type InputImageSlots
} from '@dxtmisha/constructor/InputImage'

import { D1Actions } from '../Actions'
import { D1Dropzone } from '../Dropzone'
import { D1FieldLabel } from '../FieldLabel'
import { D1FieldMessage } from '../FieldMessage'
import { D1ImageCrop } from '../ImageCrop'

import { defaults, type InputImageProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1InputImage'
})

const emits = defineEmits<InputImageEmits>()
const props = withDefaults(defineProps<InputImageProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-inputImage': true,
    'd1-inputImage--disabled': props.disabled,
    'd1-inputImage--readonly': props.readonly,
    [`d1-inputImage--size--${props.size}`]: inArray(propsValues.size, props.size)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new InputImageDesign(
  'd1.inputImage',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      actions: D1Actions,
      dropzone: D1Dropzone,
      fieldLabel: D1FieldLabel,
      fieldMessage: D1FieldMessage,
      imageCrop: D1ImageCrop
    },
    compMod: {
      actions: {
        flexible: 'adaptiveSm',
        buttonAttrs: {
          size: 'xs',
          secondary: true,
          palette: 'neutral'
        },
        paddingByIndent: false
      }
    }
  }
)

const render = design.render()

defineSlots<InputImageSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
