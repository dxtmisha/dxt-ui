<script setup lang="ts">
import { ref } from 'vue'
import { useDemoEvent } from '../../composables/useDemoEvent'

import DemoFlex from '../../components/DemoFlex.vue'
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

// 3. Interactive programmatic scroll controls
const interactiveScrollbarRef = ref<{ $el?: HTMLElement } | null>(null)

const getScrollElement = (): HTMLElement | null => {
  const target = interactiveScrollbarRef.value
  if (!target) {
    return null
  }
  return target.$el instanceof HTMLElement ? target.$el : (target as unknown as HTMLElement)
}

const scrollToTop = (): void => {
  const element = getScrollElement()
  if (element) {
    element.scrollTop = 0
  }
}

const scrollToMiddle = (): void => {
  const element = getScrollElement()
  if (element) {
    element.scrollTop = Math.floor((element.scrollHeight - element.clientHeight) / 2)
  }
}

const scrollToBottom = (): void => {
  const element = getScrollElement()
  if (element) {
    element.scrollTop = element.scrollHeight
  }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Scrollbar">
    <D1Section>
      <D1Group label="Basic Usage">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar">
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
      </D1Group>

      <D1Group label="Always Visible Thumb (visible)">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar" visible>
          <p>The scrollbar thumb remains continuously visible regardless of user hover or active scrolling interaction.</p>
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
      </D1Group>

      <D1Group label="Dynamic Dividers (dividerTop & dividerBottom)">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar" dividerTop dividerBottom>
          <p>Scroll down to see the top border appear, and scroll to the bottom to see the bottom border disappear.</p>
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
      </D1Group>

      <D1Group label="Individual Dividers (dividerTop only vs dividerBottom only)">
        <DemoFlex>
          <div class="demo-scrollbar-page__column">
            <h4>Top Divider Only</h4>
            <D1Scrollbar class="demo-scrollbar-page__scrollbar" dividerTop>
              <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
            </D1Scrollbar>
          </div>
          <div class="demo-scrollbar-page__column">
            <h4>Bottom Divider Only</h4>
            <D1Scrollbar class="demo-scrollbar-page__scrollbar" dividerBottom>
              <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
            </D1Scrollbar>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Dynamic Dividers (inverse)">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar" dividerTop dividerBottom inverse>
          <p>Inverts the boundary logic: shows borders at starting edges and hides them when scrolled inside.</p>
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
      </D1Group>

      <D1Group label="Hidden Dividers (dividerHide)">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar" divider dividerHide>
          <p>Suppresses all divider borders completely even though divider monitoring is active.</p>
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
      </D1Group>

      <D1Group label="Native Browser Engine (standard)">
        <D1Scrollbar class="demo-scrollbar-page__scrollbar" standard>
          <p>Preserves native browser scrollbar rendering without custom overlay styling.</p>
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
      </D1Group>

      <D1Group label="Custom Container Tag (tag)">
        <DemoFlex>
          <div class="demo-scrollbar-page__column">
            <h4>Rendered as &lt;section&gt;</h4>
            <D1Scrollbar class="demo-scrollbar-page__scrollbar" tag="section" divider>
              <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
            </D1Scrollbar>
          </div>
          <div class="demo-scrollbar-page__column">
            <h4>Rendered as &lt;article&gt;</h4>
            <D1Scrollbar class="demo-scrollbar-page__scrollbar" tag="article" divider>
              <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
            </D1Scrollbar>
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Interactive Controls & Boundary Events">
        <DemoFlex>
          <D1Button label="Scroll to Top" @click="scrollToTop"/>
          <D1Button label="Scroll to Middle" @click="scrollToMiddle"/>
          <D1Button label="Scroll to Bottom" @click="scrollToBottom"/>
        </DemoFlex>
        <D1Scrollbar
          ref="interactiveScrollbarRef"
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
          <p>Scroll or use the control buttons above to trigger boundary events.</p>
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </D1Scrollbar>
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-scrollbar-page {
  &__scrollbar {
    height: 160px;
  }

  &__column {
    flex: 1;
    min-width: 0;

    h4 {
      margin-top: 0;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>
