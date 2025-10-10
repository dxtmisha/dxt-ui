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
    <div>
      <div style="height: 5000px"></div>
      <div style="content-visibility: auto; contain-intrinsic-size: 100px;">
        <div style="width: 100px; height: 100px; background: url('https://drscdn.500px.org/photo/285446475/q%3D90_m%3D2048_k%3D1/v2?sig=0fb246d845ebd9687c2715ef7b0dbfefa7441c9b552acb02a0374447fadc4eb3')"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
