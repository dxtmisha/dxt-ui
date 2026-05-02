<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
</script>

<template>
  <DemoLinkBlack/>
  <D1PageArea label="PageArea">
    <D1PageArea label="Layout Context">
      <D1PageArea label="Basic Usage">
        <p>This component automatically selects the desired rendering type (Page, Section, Block, Group) depending on the context.</p>
      </D1PageArea>

      <D1PageArea label="With Nested Blocks">
        <D1PageArea headline="Nesting Level" label="Automatic Control">
          <p>By nesting several PageAreas, the internal element automatically changes its type to a lower level.</p>
        </D1PageArea>
        <D1PageArea headline="Deep Nesting" description="Level: Block or Group">
          <template #trailing>
            <D1Button label="Button" primary size="sm" />
          </template>
          <p>This allows you to create complex structures without having to manually select components.</p>
        </D1PageArea>
      </D1PageArea>

      <D1PageArea label="Hierarchical Structure">
        <D1PageArea label="Information Zone 1">
          Content for the first information zone
        </D1PageArea>
        <D1PageArea label="Information Zone 2">
          Content for the second information zone
        </D1PageArea>
      </D1PageArea>
    </D1PageArea>
  </D1PageArea>
</template>

<style lang="scss"></style>
