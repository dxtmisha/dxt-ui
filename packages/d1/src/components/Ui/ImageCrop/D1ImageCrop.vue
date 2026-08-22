<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  ImageCropDesign,
  type ImageCropEmits,
  type ImageCropSlots
} from '@dxtmisha/constructor/ImageCrop'

import { D1CropArea } from '../CropArea'
import { D1Image } from '../Image'

import { defaults, type ImageCropProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1ImageCrop'
})

const emits = defineEmits<ImageCropEmits>()
const props = withDefaults(defineProps<ImageCropProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-imageCrop': true,
    'd1-imageCrop--disabled': props.disabled,
    'd1-imageCrop--readonly': props.readonly
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new ImageCropDesign(
  'd1.imageCrop',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      image: D1Image,
      cropArea: D1CropArea
    }
  }
)

const render = design.render()

defineSlots<ImageCropSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
