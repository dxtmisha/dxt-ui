<script setup lang="ts">
import { computed } from 'vue'
import { getRandomText, isFilled } from '@dxtmisha/functional-basic'
import { type UiFigmaFramesList } from '@dxtmisha/figma'
import { useFigmaUiFrames } from '@dxtmisha/figma-ref'

import TranslateKeyCreationFramesItem from './TranslateKeyCreationFramesItem.vue'

defineOptions({
  name: 'TranslateKeyCreationFramesList'
})

const { frames, loading } = useFigmaUiFrames()

/**
 * Reactive list of frames. Returns actual frames if loaded,
 * or placeholder data if in loading state/
 * Реактивный список фреймов. Возвращает реальные фреймы, если они загружены,
 * или заполнители, если данные в процессе загрузки
 */
const list = computed<UiFigmaFramesList>(() => {
  if (isFilled(frames.value)) {
    return frames.value
  }

  if (loading.value) {
    return [
      {
        id: '000_000_000_001',
        name: getRandomText(2, 3)
      },
      {
        id: '000_000_000_002',
        name: getRandomText(3, 4)
      },
      {
        id: '000_000_000_003',
        name: getRandomText(2, 4)
      }
    ]
  }

  return []
})
</script>

<template>
  <D1Skeleton
    :active="loading"
    class="translate-key-creation-frames-list"
  >
    <TranslateKeyCreationFramesItem
      v-for="frame in list"
      :key="frame.id"
      v-bind="frame"
    />
  </D1Skeleton>
</template>

<style lang="scss"></style>
