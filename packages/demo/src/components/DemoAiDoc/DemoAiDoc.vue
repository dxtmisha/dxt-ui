<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  DemoAiDocDefaults,
  type DemoAiDocEmits,
  type DemoAiDocProps,
  type DemoAiDocSlots
} from './types'

defineOptions({
  name: 'DemoAiDoc'
})

const props = withDefaults(defineProps<DemoAiDocProps>(), DemoAiDocDefaults)
const emit = defineEmits<DemoAiDocEmits>()
defineSlots<DemoAiDocSlots>()

const isOpenState = ref(props.isOpen)

watch(
  () => props.isOpen,
  (value) => {
    isOpenState.value = value
  }
)

const toggle = () => {
  isOpenState.value = !isOpenState.value
  emit('toggle', isOpenState.value)
}

const onClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<template>
  <div class="demo-ai-doc" @click="onClick">
    <div class="demo-ai-doc__header" @click.stop="toggle">
      <slot name="header" :title="title">
        <h3>{{ title }}</h3>
      </slot>
      <span class="demo-ai-doc__toggle-icon">{{ isOpenState ? '▼' : '▶' }}</span>
    </div>

    <div v-show="isOpenState" class="demo-ai-doc__content">
      <p v-if="description" class="demo-ai-doc__description">{{ description }}</p>
      <slot/>
    </div>

    <div v-if="$slots.footer" v-show="isOpenState" class="demo-ai-doc__footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<style lang="scss">
.demo-ai-doc {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  font-family: sans-serif;

  &__header {
    background-color: #f5f5f5;
    padding: 12px 16px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;

    h3 {
      margin: 0;
      font-size: 1.1rem;
    }
  }

  &__toggle-icon {
    font-size: 0.8rem;
    color: #666;
  }

  &__content {
    padding: 16px;
  }

  &__description {
    margin-top: 0;
    margin-bottom: 16px;
    color: #555;
  }

  &__footer {
    padding: 12px 16px;
    border-top: 1px solid #eee;
    background-color: #fafafa;
  }
}
</style>
