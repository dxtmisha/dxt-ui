<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="ClientOnly">
    <D1Section>
      <D1Group>
        <D1ClientOnly>
          <p>This content is rendered only on the <strong>client side</strong>.</p>
          <p>Perfect for components using browser-only APIs.</p>
        </D1ClientOnly>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
