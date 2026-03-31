<script setup lang="ts">
import { sendSelectionFrame } from '@dxtmisha/figma'
import { useFigmaUiSelected } from '@dxtmisha/figma-ref'

import type { FieldValidationItem } from '@dxtmisha/constructor'
import type { TranslateFrameItem } from '../../../types/TranslateTypes'

defineOptions({
  name: 'TranslateKeyCreationFramesItem'
})

const props = defineProps<TranslateFrameItem>()

const { isSelected, toggleSelected } = useFigmaUiSelected()

/**
 * Indicates if the current frame is selected/
 * Указывает, выбран ли текущий фрейм
 */
const value = isSelected(props.id)

/**
 * Toggles the selection state of the current frame.
 *
 * Переключает состояние выбора текущего фрейма.
 * @param event Change event object / Объект события изменения
 */
const onChange = ({ value }: FieldValidationItem<boolean>) => {
  toggleSelected(props.id, value)
}

/**
 * Sends the selection state of the current frame to the plugin.
 *
 * Отправляет состояние выбора текущего фрейма в плагин.
 */
const onSelection = () => {
  sendSelectionFrame(props.id)
}
</script>

<template>
  <D1Cell
    :icon="{ icon: { value: image, size: 'contain' }, size: '3xl' }"
    :label="name"
    :description="id"
    :divider="false"
    is-skeleton
  >
    <template #trailing>
      <D1Checkbox
        :value="value"
        @input-lite="onChange"
      />
    </template>
    <template #description>
      <D1Icon
        dynamic
        icon="center-focus-weak"
        @click="onSelection"
      />
    </template>
  </D1Cell>
</template>

<style lang="scss">

</style>
