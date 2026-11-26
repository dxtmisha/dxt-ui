<script setup lang="ts">
import { ref } from 'vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'

const interactiveTag = ref<'div' | 'section' | 'article'>('div')
const interactiveHeaderTag = ref<'h1' | 'h2' | 'h3'>('h2')
const interactiveArea = ref<'page' | 'section' | 'block' | 'compact'>('block')
const iconTurn = ref(false)
const actionClicks = ref(0)
const isMounted = ref(true)
</script>

<template>
  <div class="demo-page-area-page">
    <DemoLinkBlack/>

    <h1 class="demo-page-area-page__title">PageArea</h1>

    <section class="demo-page-area-page__section">
      <h2>Automatic Hierarchical Delegation (Page -> Section -> Block -> Group)</h2>
      <D1PageArea
        data-testid="demo-page-area-root"
        headline="Root Level"
        label="Level 1 (Root without container resolves to Group)"
        description="Outer PageArea delegates to D1Group when no ancestor sets container/page/section/block."
      >
        <p>Default slot content in outer PageArea.</p>
      </D1PageArea>

      <D1Page
        data-testid="demo-page-area-container"
        headline="Workspace"
        label="Host Page (area='page')"
      >
        <D1PageArea
          data-testid="demo-page-area-level-section"
          headline="Level 1 inside Page"
          label="Delegated Section"
          caption="Auto -> section"
          description="Inside Page (area='page'), PageArea automatically delegates to D1Section."
        >
          <D1PageArea
            data-testid="demo-page-area-level-block"
            headline="Level 2 inside Section"
            label="Delegated Block"
            caption="Auto -> block"
            description="Inside Section (area='section'), PageArea automatically delegates to D1Block."
          >
            <D1PageArea
              data-testid="demo-page-area-level-group"
              headline="Level 3 inside Block"
              label="Delegated Group"
              caption="Auto -> group"
              description="Inside Block (area='block'), PageArea automatically delegates to D1Group."
            >
              <p>Leaf paragraph inside delegated Group.</p>
            </D1PageArea>
          </D1PageArea>
        </D1PageArea>
      </D1Page>
    </section>

    <section class="demo-page-area-page__section">
      <h2>Interactive Props, Tags & Actions</h2>
      <div class="demo-page-area-page__controls">
        <D1Button
          size="sm"
          :primary="interactiveTag === 'article'"
          label="tag: article"
          @click="interactiveTag = 'article'"
        />
        <D1Button
          size="sm"
          :primary="interactiveTag === 'section'"
          label="tag: section"
          @click="interactiveTag = 'section'"
        />
        <D1Button
          size="sm"
          :primary="interactiveHeaderTag === 'h3'"
          label="tagHeader: h3"
          @click="interactiveHeaderTag = 'h3'"
        />
        <D1Button
          size="sm"
          :primary="interactiveArea === 'compact'"
          label="area: compact"
          @click="interactiveArea = 'compact'"
        />
        <D1Button
          size="sm"
          :primary="iconTurn"
          label="Toggle Icon Turn"
          @click="iconTurn = !iconTurn"
        />
        <span data-testid="demo-page-area-clicks">actionClicks: {{ actionClicks }}</span>
      </div>

      <D1Page>
        <D1PageArea
          data-testid="demo-page-area-interactive"
          :tag="interactiveTag"
          :tag-header="interactiveHeaderTag"
          :area="interactiveArea"
          headline="CONTROLS"
          label="Interactive PageArea"
          label-id="demo-pa-label-id"
          caption="Updated"
          description="Demonstrates tag, tagHeader, iconTurn, aria IDs, and trailing action."
          description-id="demo-pa-desc-id"
          icon="settings"
          :icon-turn="iconTurn"
        >
          <template #trailing>
            <D1Button
              size="sm"
              label="Action Trigger"
              @click="actionClicks++"
            />
          </template>
          <p>Current interactive area: {{ interactiveArea }}</p>
        </D1PageArea>
      </D1Page>
    </section>

    <section class="demo-page-area-page__section">
      <h2>All Slots (#headline, #label, #caption, #trailing, #description, #default)</h2>
      <D1Page>
        <D1PageArea data-testid="demo-page-area-slots">
          <template #headline>Custom Headline Slot</template>
          <template #label>Custom Label Slot</template>
          <template #caption>Custom Caption Slot</template>
          <template #trailing>
            <D1Badge label="TRAILING" />
          </template>
          <template #description>Custom Description Slot</template>
          <p>Custom Default Body Slot</p>
        </D1PageArea>
      </D1Page>
    </section>

    <section class="demo-page-area-page__section">
      <h2>Boundary Values & Security</h2>
      <div class="demo-page-area-page__grid">
        <D1PageArea
          data-testid="demo-page-area-zero"
          :headline="0"
          :label="0"
          :caption="0"
          :description="0"
        />
        <D1PageArea
          data-testid="demo-page-area-empty"
          label=""
          description="   "
        />
        <D1PageArea
          data-testid="demo-page-area-xss"
          label="<img src=x onerror=window.__xss=1>"
          description="<script>window.__xss=2</script>"
        >
          Safe plain body
        </D1PageArea>
        <div class="demo-page-area-page__narrow">
          <D1PageArea
            data-testid="demo-page-area-narrow"
            headline="OVERFLOWCHECK"
            label="VeryLongUnbrokenHeadingStringForMobileWrappingVerification12345"
            description="VeryLongUnbrokenDescriptionStringForNarrowContainerCheck1234567890"
          >
            Narrow container content
          </D1PageArea>
        </div>
      </div>
    </section>

    <section class="demo-page-area-page__section">
      <h2>Lifecycle (Mount / Unmount)</h2>
      <div class="demo-page-area-page__controls">
        <D1Button
          size="sm"
          :label="isMounted ? 'Unmount PageArea' : 'Mount PageArea'"
          @click="isMounted = !isMounted"
        />
        <span>Mounted: {{ isMounted }}</span>
      </div>
      <D1PageArea
        v-if="isMounted"
        data-testid="demo-page-area-lifecycle"
        headline="LIFECYCLE"
        label="Mountable PageArea"
        description="Verifies clean mount and unmount."
      >
        <p>Active lifecycle block.</p>
      </D1PageArea>
    </section>
  </div>
</template>

<style lang="scss">
.demo-page-area-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  max-width: 1200px;

  &__title {
    margin: 0;
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
  }

  &__narrow {
    max-width: 220px;
    border: 1px dashed var(--d1-sys-color-outline, #ccc);
    padding: 8px;
  }
}
</style>
