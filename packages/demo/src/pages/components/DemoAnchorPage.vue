<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const anchorRef = ref<any>(null)

const goHandler = () => {
  anchorRef.value?.go()
}
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Anchor">
    <D1Section>
      <D1Group label="Basic Usage">
        <div class="demo-anchor-page">
          <D1Anchor label="Basic Anchor" name="basic" />
          <p>This is a basic anchor. You can navigate to it using its name.</p>
        </div>
      </D1Group>

      <D1Group label="With Navigation Link">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Section with Link"
            name="link-section"
            iconLink="link"
          />
          <p>This anchor includes a link icon, which can be used to copy the link to this section if <code>isCopy</code> is enabled.</p>
        </div>
      </D1Group>

      <D1Group label="Copy to Clipboard">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Copied Anchor"
            name="copy-anchor"
            isCopy
          />
          <p>Clicking the anchor label or link icon will copy the anchor's URL to the clipboard.</p>
        </div>
      </D1Group>

      <D1Group label="Custom Icons">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Custom Icons Anchor"
            name="custom-icons"
            iconTag="tag"
            iconContentCopy="content_copy"
            isCopy
          />
        </div>
      </D1Group>

      <D1Group label="Programmatic Navigation (Expose)">
        <DemoFlex>
          <D1Button label="Go to Target Anchor" @click="goHandler" />
        </DemoFlex>
        <div class="demo-anchor-page" style="margin-top: 20px;">
          <D1Anchor
            ref="anchorRef"
            label="Target Anchor"
            name="target"
          />
          <p>This anchor is used as a target for programmatic navigation via the <code>go()</code> method.</p>
        </div>
      </D1Group>

      <D1Group label="Events">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Event Tracker"
            name="events"
            isCopy
            @click="onEvent('click')"
          />
        </div>
        <DemoValue :value="eventName" />
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-anchor-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

