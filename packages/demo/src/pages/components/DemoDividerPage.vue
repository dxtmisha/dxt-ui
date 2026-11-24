<script setup lang="ts">
import DemoBox from '../../components/DemoBox.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Divider">
    <D1Section class="demo-divider-page">
      <D1Group label="Basic Usage (Default)">
        <DemoBox>
          <div>Top block content</div>
          <D1Divider/>
          <div>Bottom block content</div>
        </DemoBox>
      </D1Group>

      <D1Group label="Size Variants (sm, md, lg)">
        <DemoBox>
          <div>Size: sm (default)</div>
          <D1Divider size="sm"/>
          <div>Size: md</div>
          <D1Divider size="md"/>
          <div>Size: lg</div>
          <D1Divider size="lg"/>
          <div>After lg divider</div>
        </DemoBox>
      </D1Group>

      <D1Group label="Margin Variants (none, sm, md, lg)">
        <DemoBox>
          <div>Margin: none (default)</div>
          <D1Divider margin="none"/>
          <div>Margin: sm</div>
          <D1Divider margin="sm"/>
          <div>Margin: md</div>
          <D1Divider margin="md"/>
          <div>Margin: lg</div>
          <D1Divider margin="lg"/>
          <div>After lg margin</div>
        </DemoBox>
      </D1Group>

      <D1Group label="Combined Matrix (Size + Margin)">
        <DemoBox>
          <div>md + sm margin</div>
          <D1Divider size="md" margin="sm"/>
          <div>lg + md margin</div>
          <D1Divider size="lg" margin="md"/>
          <div>lg + lg margin</div>
          <D1Divider size="lg" margin="lg"/>
          <div>End of section</div>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility & Custom Attributes">
        <DemoBox>
          <div>Default role="separator"</div>
          <D1Divider aria-label="Section separator"/>
          <div>Custom role="presentation" override via attrs</div>
          <D1Divider role="presentation" data-testid="decorative-divider"/>
          <div>Multilingual context: Học tiếng Việt — Привет Мир — 🚀</div>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
