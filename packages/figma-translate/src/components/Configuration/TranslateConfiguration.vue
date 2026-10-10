<script setup lang="ts">
import TranslateConfigurationAiKey from './TranslateConfigurationAiKey.vue'
import TranslateConfigurationStorage from './TranslateConfigurationStorage.vue'

defineOptions({
  name: 'TranslateConfiguration'
})
</script>

<template>
  <div class="translate-configuration">
    <D1Block>
      <D1Group label="AI">
        <TranslateConfigurationAiKey/>
      </D1Group>
      <TranslateConfigurationStorage/>
    </D1Block>
  </div>
</template>

<style lang="scss"></style>
