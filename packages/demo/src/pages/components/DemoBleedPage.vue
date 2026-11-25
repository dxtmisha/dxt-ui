<script setup lang="ts">
import { ref } from 'vue'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const activeTag = ref<string>('div')
const lifecycleMounted = ref<boolean>(true)

const availableTags: readonly string[] = [
  'div',
  'section',
  'article',
  'figure',
  'aside',
  'header',
  'footer'
]
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
          <D1Button
            v-for="tagOption in availableTags"
            :key="tagOption"
            :label="tagOption"
            :outline="activeTag !== tagOption"
            size="sm"
            @click="activeTag = tagOption"
          />
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

      <D1Group label="Merged Attributes & Compound Integrations">
        <DemoBox>
          <D1Bleed tag="section" class="demo-bleed-page__custom" data-testid="demo-bleed-merged">
            <D1Alert
              label="Nested Alert Inside Bleed"
              description="Verifies class merging and child component rendering inside D1Bleed."
            />
          </D1Bleed>
        </DemoBox>
        <DemoBox>
          <D1Block label="Block With Bleed Header Bar">
            <D1Bleed>
              <D1Bars
                label="Bleed Action Bar"
                description="Full-bleed D1Bars nested inside D1Block"
                back-hide
                :bars="[{ icon: 'share', value: 'share', 'aria-label': 'Share' }]"
              />
            </D1Bleed>
          </D1Block>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility">
        <DemoBox>
          <D1Bleed
            tag="section"
            role="region"
            aria-label="Full-bleed announcement region"
          >
            <div class="demo-bleed-page__banner">
              <DemoFlex align="center" justify="between">
                <span>Accessible region landmark with keyboard-focusable action.</span>
                <D1Button label="Focus Action" size="sm"/>
              </DemoFlex>
            </div>
          </D1Bleed>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <D1Bleed data-testid="demo-bleed-empty"/>
          <D1Bleed>   </D1Bleed>
          <D1Bleed>{{ 0 }}</D1Bleed>
          <D1Bleed>{{ -12.5 }}</D1Bleed>
          <D1Bleed>A</D1Bleed>
          <D1Bleed>
            <div class="demo-bleed-page__banner demo-bleed-page__wrap">
              SuperLongUnbrokenBleedTokenWithoutAnySpacesOrHyphens1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </div>
          </D1Bleed>
          <D1Bleed>
            <div class="demo-bleed-page__banner">
              Unicode • Tiếng Việt • Кириллица 🚀
            </div>
          </D1Bleed>
          <D1Bleed>
            <div class="demo-bleed-page__banner">
              &lt;script&gt;alert('xss')&lt;/script&gt; — {{ '<img src=x onerror=alert(1)>' }}
            </div>
          </D1Bleed>
        </DemoBox>
        <DemoBox class="demo-bleed-page__narrow-box">
          <D1Bleed>
            <div class="demo-bleed-page__banner">
              Narrow container bleed banner.
            </div>
          </D1Bleed>
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle">
        <DemoFlex align="center">
          <D1Button
            :label="lifecycleMounted ? 'Unmount Bleed' : 'Mount Bleed'"
            size="sm"
            outline
            @click="lifecycleMounted = !lifecycleMounted"
          />
          <DemoValue label="Mounted" :value="lifecycleMounted"/>
        </DemoFlex>
        <DemoBox v-if="lifecycleMounted">
          <D1Bleed>
            <div class="demo-bleed-page__banner">
              Conditionally mounted D1Bleed via v-if.
            </div>
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

  &__wrap {
    overflow-wrap: anywhere;
  }

  &__narrow-box {
    max-width: 280px;
  }
}
</style>
