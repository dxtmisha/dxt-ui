<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  InputFileItemDesign,
  type InputFileItemEmits,
  type InputFileItemSlots
} from '@dxtmisha/constructor/InputFileItem'

import { D1Button } from '../Button'
import { D1Dialog } from '../Dialog'
import { D1Icon } from '../Icon'
import { D1Image } from '../Image'
import { D1Progress } from '../Progress'

import { defaults, type InputFileItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1InputFileItem'
})

const emits = defineEmits<InputFileItemEmits>()
const props = withDefaults(defineProps<InputFileItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-inputFileItem': true,
    'd1-inputFileItem--focus': props.focus,
    'd1-inputFileItem--selected': props.selected,
    'd1-inputFileItem--disabled': props.disabled,
    'd1-inputFileItem--readonly': props.readonly,
    [`d1-inputFileItem--appearance--${props.appearance}`]: inArray(propsValues.appearance, props.appearance),
    [`d1-inputFileItem--status--${props.status}`]: inArray(propsValues.status, props.status),
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new InputFileItemDesign(
  'd1.inputFileItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      button: D1Button,
      dialog: D1Dialog,
      icon: D1Icon,
      image: D1Image,
      progress: D1Progress
    },
    compMod: {
      buttonDelete: computed(() => ({
        secondary: true,
        roundedFull: true,
        size: 'xs',
        palette: 'neutral',
        inverse: props.appearance === 'tile'
      })),
      buttonRetry: computed(() => ({
        secondary: true,
        roundedFull: true,
        size: 'xs',
        palette: 'neutral',
        inverse: props.appearance === 'tile'
      }))
    }
  }
)

const render = design.render()

defineSlots<InputFileItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
