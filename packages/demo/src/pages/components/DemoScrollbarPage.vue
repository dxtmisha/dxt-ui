<script setup lang="ts">
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

// 1. Long Text for Scrollable Content
const paragraphs = [
  'In the grand tapestry of the cosmos, our home planet is but a tiny, fragile speck of dust drifting in the vast, silent ocean of space. The observable universe spans an unimaginable ninety-three billion light-years, housing trillions of galaxies, each holding hundreds of billions of stars and countless worlds.',
  'For millennia, humanity gazed up at the night sky, weaving myths and stories about the luminous points of light that moved across the heavens. It was only with the advent of modern astronomy that we began to understand the true nature of these stellar bodies, realization of the immense scale of existence.',
  'Stars are born in deep, dense clouds of interstellar gas and dust known as nebulae. Over millions of years, gravity pulls these materials together, raising pressure and temperature until nuclear fusion ignites in the core, giving birth to a brilliant, glowing star that will shine for billions of years.',
  'As stars reach the end of their lifecycles, they undergo spectacular transformations. A medium star like our Sun will expand into a red giant before shedding its outer layers to leave behind a quiet white dwarf. Massive stars, however, end their lives in colossal supernova explosions, leaving behind incredibly dense neutron stars or black holes.',
  'The exploration of space represents the ultimate boundary of human curiosity. From the earliest telescopes to the Voyager probes traversing interstellar space, our quest to understand the universe continues to reveal new wonders, showing us both the fragility and the uniqueness of our place in the cosmic expanse.'
]

// 2. Events Tracking
const { eventName, onEvent } = useDemoEvent()
</script>

<template>
  <DemoLinkBlack />
  <D1Page label="Scrollbar">
    <D1Section>
      <D1Block label="Basic Usage">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar">
          <D1Group label="Cosmos and Astronomy">
            <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
          </D1Group>
        </D1Scrollbar>
      </D1Block>
      <D1Block label="Dynamic Dividers">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar" dividerTop dividerBottom>
          <D1Group label="Cosmos and Astronomy">
            <p>Scroll down to see the top border appear, and scroll to the bottom to see the bottom border disappear.</p>
            <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
          </D1Group>
        </D1Scrollbar>
      </D1Block>

      <D1Block label="Dynamic Dividers (Inverse)">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar" dividerTop dividerBottom inverse>
          <D1Group label="Cosmos and Astronomy">
            <p>Inverts the boundary logic: swaps top and bottom divider visibility depending on the scroll direction.</p>
            <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
          </D1Group>
        </D1Scrollbar>
      </D1Block>

      <D1Block label="Scrollbar Engines">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar" standard>
          <D1Group label="Native Browser Scrollbar (standard)">
            <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
          </D1Group>
        </D1Scrollbar>
      </D1Block>

      <D1Block label="Edge Events">
        <D1Scrollbar
          class="demo-scrollbar-page__scrollbar"
          divider
          @bottom="onEvent('bottom')"
          @edge="onEvent('edge')"
          @leaveBottom="onEvent('leaveBottom')"
          @leaveTop="onEvent('leaveTop')"
          @reachBottom="onEvent('reachBottom')"
          @reachTop="onEvent('reachTop')"
          @top="onEvent('top')"
        >
          <D1Group label="Scroll to the Edges">
            <p>Scroll up and down to trigger boundary detection events.</p>
            <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
          </D1Group>
        </D1Scrollbar>
        <DemoValue :value="eventName" />
      </D1Block>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-scrollbar-page {
  &__scrollbar {
    height: 160px;
  }
}
</style>
