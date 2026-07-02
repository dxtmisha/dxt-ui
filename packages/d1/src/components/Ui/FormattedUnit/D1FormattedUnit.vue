<script setup lang="ts">
import { computed } from 'vue'
import {
  type ConstrClasses,
  type ConstrStyles
} from '@dxtmisha/functional'
import {
  FormattedUnitDesign,
  type FormattedUnitEmits,
  type FormattedUnitSlots
} from '@dxtmisha/constructor/FormattedUnit'

import { defaults, type FormattedUnitProps } from './props'
import './styleToken.scss'

defineOptions({
  name: 'D1FormattedUnit'
})

const emits = defineEmits<FormattedUnitEmits>()
const props = withDefaults(defineProps<FormattedUnitProps>(), defaults)

const classesToken = computed<ConstrClasses>(() => ({
  main: {
    // :classes-values [!] System label / Системная метка
    'd1-formattedUnit': true
    // :classes-values [!] System label / Системная метка
  }
}))
const stylesToken = computed<ConstrStyles>(() => ({
  // :styles-values [!] System label / Системная метка
  // :styles-values [!] System label / Системная метка
}))

const design = new FormattedUnitDesign(
  'd1.formattedUnit',
  props,
  {
    emits,
    classes: classesToken,
    styles: stylesToken
  }
)

const render = design.render()

defineSlots<FormattedUnitSlots>()
defineExpose(design.expose())
</script>

<template>
  <render/>
</template>
