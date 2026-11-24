<script setup lang="ts">
import { ref } from 'vue'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const activeTag = ref<string>('div')
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Bleed">
    <D1Section>
      <D1Group label="Basic Full-Bleed Layout">
        <DemoBox>
          <p>Standard padded container text aligned to container inset.</p>
          <D1Bleed>
            <div class="demo-bleed-page__banner">
              Full-bleed banner expanding horizontally across the container margins.
            </div>
          </D1Bleed>
          <p>Content below the bleed returns to standard container padding.</p>
        </DemoBox>
      </D1Group>

      <D1Group label="Semantic HTML Tags">
        <DemoFlex>
          <D1Button label="div" size="sm" @click="activeTag = 'div'"/>
          <D1Button label="section" size="sm" @click="activeTag = 'section'"/>
          <D1Button label="article" size="sm" @click="activeTag = 'article'"/>
          <D1Button label="figure" size="sm" @click="activeTag = 'figure'"/>
        </DemoFlex>
        <DemoValue label="tag" :value="activeTag"/>
        <DemoBox>
          <D1Bleed :tag="activeTag">
            <div class="demo-bleed-page__banner">
              Rendered with dynamic root tag: &lt;{{ activeTag }}&gt;
            </div>
          </D1Bleed>
        </DemoBox>
      </D1Group>

      <D1Group label="Merged Attributes & Nested Components">
        <DemoBox>
          <D1Bleed tag="section" class="demo-bleed-page__custom" data-testid="demo-bleed-merged">
            <D1Alert
              title="Nested Alert Inside Bleed"
              description="Verifies class merging and child component rendering inside D1Bleed."
            />
          </D1Bleed>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-bleed-page {
  &__banner {
    padding: 16px;
    @include ui.backgroundColor(ui.v('?sys.palette.primary'), 0.12);
    @include ui.color(ui.v('?sys.palette.primary'));
  }

  &__custom {
    outline: 1px dashed currentColor;
  }
}
</style>
