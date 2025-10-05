<script setup lang="ts">
import D1Button from './components/Ui/Button/D1Button.vue'
import { useCookieRef } from '@dxtmisha/functional'

const value = useCookieRef('test-value', 'Hello World')
const onClick = () => {
  value.value += '!'
  console.log(value.value)
}
</script>

<template>
  <div class="app">D1
  <div>
    value: {{ value }}
    <D1Button label="Label" @click="onClick"/>
  </div>
  </div>
</template>

<style lang="scss"></style>
