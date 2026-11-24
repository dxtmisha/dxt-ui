<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()

const anchorRef = ref<{ go: () => void } | null>(null)
const hiddenAnchorRef = ref<{ go: () => void } | null>(null)

const onGoVisible = (): void => {
  anchorRef.value?.go()
}

const onGoHidden = (): void => {
  hiddenAnchorRef.value?.go()
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Anchor">
    <D1Section>
      <D1Group label="Basic Usage & Navigation">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Basic Anchor"
            name="basic"
            label-id="demo-anchor-basic-label"
          />
          <D1Anchor
            label="Section with Smooth Center Scroll"
            name="smooth-center"
            behavior="smooth"
            block="center"
            inline="nearest"
            :shift="80"
          />
          <D1Anchor name="slot-anchor">
            Default Slot Heading Anchor
          </D1Anchor>
        </div>
      </D1Group>

      <D1Group label="Copy to Clipboard & Tooltip Options">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Copy Link Anchor"
            name="copy-anchor"
            is-copy
            :delay-hide="600"
          />

          <D1Anchor
            name="copy-icon-only"
            is-copy
            text-copied-clipboard="Permalink copied!"
          />

          <D1Anchor
            label="Custom Tooltip Props & Slot"
            name="copy-custom-tooltip"
            is-copy
            tooltip-label="Copied"
            :tooltip-attrs="{ arrowShow: true }"
          >
            <template #tooltip>
              <span>Link saved to clipboard</span>
            </template>
          </D1Anchor>
        </div>
      </D1Group>

      <D1Group label="Custom Icons (String & Object)">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Custom Link Icon"
            name="custom-link-icon"
            icon-link="bookmark"
          />

          <D1Anchor
            label="Custom Copy & Active Icons"
            name="custom-copy-icons"
            icon-tag="share"
            icon-content-copy="check"
            is-copy
          />

          <D1Anchor
            label="Object Icon Configuration"
            name="object-icon"
            :icon-link="{ icon: 'link', turn: true }"
          />
        </div>
      </D1Group>

      <D1Group label="Hidden Anchors & Programmatic Navigation (Expose)">
        <DemoFlex>
          <D1Button label="Go to Visible Target" @click="onGoVisible"/>
          <D1Button label="Go to Hidden Target" @click="onGoHidden"/>
        </DemoFlex>

        <DemoBox>
          <div class="demo-anchor-page">
            <D1Anchor
              ref="anchorRef"
              label="Programmatic Target Anchor"
              name="target-visible"
              shift="48"
            />
            <D1Anchor
              ref="hiddenAnchorRef"
              name="target-hidden"
              hide
              :shift="32"
            />
            <D1Anchor name="implicit-hidden"/>
          </div>
        </DemoBox>
      </D1Group>

      <D1Group label="Data Types & Boundaries">
        <div class="demo-anchor-page">
          <D1Anchor :label="0" name="numeric-zero"/>
          <D1Anchor
            label="Multilingual: Привет / Học tiếng Việt / 🚀 <img src=x onerror=alert(1)>"
            name="unicode-safe"
          />
          <D1Anchor label="Missing Name (Not Rendered)"/>
        </div>
      </D1Group>

      <D1Group label="Events">
        <div class="demo-anchor-page">
          <D1Anchor
            label="Event Tracker Anchor"
            name="events"
            is-copy
            @click="onEvent('click')"
          />
          <DemoValue :value="eventName"/>
        </div>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-anchor-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
</style>
