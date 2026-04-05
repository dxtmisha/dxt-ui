<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  SnackbarItemDesign,
  type SnackbarItemEmits,
  type SnackbarItemSlots
} from '@dxtmisha/constructor/SnackbarItem'

import { D1Icon } from '../Icon'
import { D1Button } from '../Button'
import { D1Actions } from '../Actions'

import { defaults, type SnackbarItemProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1SnackbarItem'
})

const emits = defineEmits<SnackbarItemEmits>()
const props = withDefaults(defineProps<SnackbarItemProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-snackbarItem': true,
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new SnackbarItemDesign(
  'd1.snackbarItem',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      icon: D1Icon,
      button: D1Button,
      actions: D1Actions
    },
    compMod: {
      'button': {
        hasLabelMinWidth: false
      },
      'button-close': {
        secondary: true,
        roundedFull: true,
        size: 'xs',
        palette: 'neutral',
        inverse: true
      },
      'actions': {
        padding: 'none',
        paddingByIndent: false,
        buttonAttrs: {
          size: 'sm'
        },
        buttonSecondaryAttrs: {
          text: true,
          inverse: true,
          size: 'sm'
        }
      }
    }
  }
)

const render = design.render()

defineSlots<SnackbarItemSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
