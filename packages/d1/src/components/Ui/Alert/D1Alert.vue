<script setup lang="ts">
import { computed } from 'vue'
import {
  inArray,
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  AlertDesign,
  type AlertEmits,
  type AlertSlots
} from '@dxtmisha/constructor/Alert'

import { D1Icon } from '../Icon'
import { D1Button } from '../Button'
import { D1Actions } from '../Actions'
import { D1AlertLink } from '../AlertLink'

import { defaults, type AlertProps, propsValues } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1Alert'
})

const emits = defineEmits<AlertEmits>()
const props = withDefaults(defineProps<AlertProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-alert': true,
    'd1-alert--itemCenter': props.itemCenter,
    'd1-alert--primary': props.primary,
    'd1-alert--secondary': props.secondary && !props.primary,
    [`d1-palette d1-palette--${props.palette}`]: inArray(propsValues.palette, props.palette)
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new AlertDesign(
  'd1.alert',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      icon: D1Icon,
      button: D1Button,
      actions: D1Actions,
      alertLink: D1AlertLink
    },
    compMod: {
      actions: {
        padding: 'none',
        paddingByIndent: false
      },
      buttonClose: {
        secondary: true,
        roundedFull: true,
        size: 'xs',
        inverse: true
      }
    }
  }
)

const render = design.render()

defineSlots<AlertSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
