<script setup lang="ts">
import { ServerStorage } from '@dxtmisha/functional-basic'

ServerStorage.get('test', () => ({ ok: 1 }))

const ok = ServerStorage.get('test')
ok.ok++
console.log('asd!', ServerStorage.get('test'))
</script>

<template>
  <div class="app-demo">
    {{ ok }}
    <teleport to="body">
      <div class="teleport">!teleport</div>
    </teleport>
    <RouterView/>
  </div>
</template>

<style lang="scss"></style>
