<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  InputPhoneDialCodeDesign,
  type InputPhoneDialCodeEmits,
  type InputPhoneDialCodeSlots
} from '@dxtmisha/constructor/InputPhoneDialCode'

import { D1Button } from '../Button'
import { D1MenuCountry } from '../MenuCountry'

import { defaults, type InputPhoneDialCodeProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1InputPhoneDialCode'
})

const emits = defineEmits<InputPhoneDialCodeEmits>()
const props = withDefaults(defineProps<InputPhoneDialCodeProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-inputPhoneDialCode': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new InputPhoneDialCodeDesign(
  'd1.inputPhoneDialCode',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken,
    components: {
      button: D1Button,
      menuCountry: D1MenuCountry
    },
    compMod: {
      button: {
        text: true,
        size: 'xs',
        inverse: true,
        iconAttrs: {
          rect: true,
          size: 'md',
          rounded: 'sm'
        }
      }
    }
  }
)

const render = design.render()

defineSlots<InputPhoneDialCodeSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
