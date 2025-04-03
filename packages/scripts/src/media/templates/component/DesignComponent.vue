<script setup lang="ts">
// :component.once import { computed } from 'vue'

// :component.once import { isFilled } from '../../functions/isFilled'
// :component.once import { inArray } from '../../functions/inArray'

// :component.once import { ComponentDesign } from '../../constructors/Component/ComponentDesign'

// :component.once import {
// :component.once   type ConstrClasses,
// :component.once   type ConstrStyles
// :component.once } from '../../../types/constructor'
// :component.once import {
// :component.once   type ComponentEmits,
// :component.once   type ComponentSlots
// :component.once } from '../../constructors/Component/types'

// :component.once import { defaults, Props, propsValues } from './props'

// :component.once defineOptions({
// :component.once   name: 'DesignComponent'
// :component.once })

// :component.once const emits = defineEmits<ComponentEmits>()
// :component.once const props = withDefaults(defineProps<Props>(), defaults)

// :component.once const classesToken = computed<ConstrClasses>(() => ({
// :component.once   main: {
// :component.once     // :classes-values [!] System label / Системная метка
// :component.once     // :classes-values [!] System label / Системная метка
// :component.once   }
// :component.once }))
// :component.once const stylesToken = computed<ConstrStyles>(() => ({
// :component.once   // :styles-values [!] System label / Системная метка
// :component.once   // :styles-values [!] System label / Системная метка
// :component.once }))

// :component.once const design = new ComponentDesign(
// :component.once   '[design].[component]',
// :component.once   props,
// :component.once   {
// :component.once     emits,
// :component.once     classes: classesToken,
// :component.once     styles: stylesToken
// :component.once   }
// :component.once )

// :component.once const RenderItem = design.render()

// :component.once defineSlots<ComponentSlots>()
// :component.once defineExpose(design.expose())
</script>

<template>
  <RenderItem/>
</template>

<style lang="scss">
// :component.once @import "../styles/properties";
@import "../../../styles/properties";
// :component.once @import "../../constructors/Component/style";
@import "styleToken";

@include initDesignBasic('[design].[component]') {
  // Basic styles for a component
  // Базовый стили для компонента
  // :component.once @include mixinComponent;

  // Styles from tokens
  // Стили из токенов
  // :component.once @include mixinComponentToken;

  // Here are the user styles
  // Здесь пользовательские стили
}
</style>
