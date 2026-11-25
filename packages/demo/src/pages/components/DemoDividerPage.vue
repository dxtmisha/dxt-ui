<script setup lang="ts">
import { ref } from 'vue'
import type { DividerProps } from '@dxtmisha/d1/D1Divider'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const sizes: readonly NonNullable<DividerProps['size']>[] = ['sm', 'md', 'lg']
const margins: readonly NonNullable<DividerProps['margin']>[] = ['none', 'sm', 'md', 'lg']

const interactiveSize = ref<NonNullable<DividerProps['size']>>('sm')
const interactiveMargin = ref<NonNullable<DividerProps['margin']>>('none')
const isLifecycleMounted = ref<boolean>(true)

const resetInteractive = (): void => {
  interactiveSize.value = 'sm'
  interactiveMargin.value = 'none'
}
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

      <D1Group label="Interactive Size & Margin Switcher">
        <DemoFlex>
          <D1Button
            v-for="sizeItem in sizes"
            :key="sizeItem"
            :label="`Size: ${sizeItem}`"
            size="sm"
            :primary="interactiveSize === sizeItem"
            :outline="interactiveSize !== sizeItem"
            @click="interactiveSize = sizeItem"
          />
        </DemoFlex>
        <DemoFlex>
          <D1Button
            v-for="marginItem in margins"
            :key="marginItem"
            :label="`Margin: ${marginItem}`"
            size="sm"
            :secondary="interactiveMargin === marginItem"
            :outline="interactiveMargin !== marginItem"
            @click="interactiveMargin = marginItem"
          />
          <D1Button label="Reset" size="sm" text @click="resetInteractive"/>
        </DemoFlex>
        <DemoBox>
          <div>Above interactive divider</div>
          <D1Divider :size="interactiveSize" :margin="interactiveMargin" data-testid="interactive-divider"/>
          <div>Below interactive divider</div>
        </DemoBox>
        <DemoValue label="Active Props" :value="{ size: interactiveSize, margin: interactiveMargin }"/>
      </D1Group>

      <D1Group label="Combined Matrix (Size + Margin)">
        <DemoBox>
          <template v-for="sizeItem in sizes" :key="sizeItem">
            <template v-for="marginItem in margins" :key="`${sizeItem}-${marginItem}`">
              <div>size="{{ sizeItem }}" + margin="{{ marginItem }}"</div>
              <D1Divider :size="sizeItem" :margin="marginItem"/>
            </template>
          </template>
          <div>End of matrix</div>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility & Custom Attributes">
        <DemoBox>
          <div id="demo-divider-heading">Section Heading (aria-labelledby target)</div>
          <D1Divider aria-labelledby="demo-divider-heading"/>
          <div>Default role="separator" with aria-label</div>
          <D1Divider aria-label="Section separator"/>
          <div>Custom role="presentation" override via attrs</div>
          <D1Divider role="presentation" aria-hidden="true" data-testid="decorative-divider"/>
          <div>Multilingual context: Học tiếng Việt — Привет Мир — 🚀</div>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox class="demo-divider-page__narrow-box">
          <div>0</div>
          <D1Divider size="md" margin="sm"/>
          <div>""</div>
          <D1Divider size="sm" margin="none"/>
          <div>SuperLongUnbrokenDividerContextWithoutSpaces1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
          <D1Divider size="lg" margin="md"/>
          <div>&lt;img src=x onerror=alert(1)&gt;</div>
          <D1Divider/>
          <div>Học tiếng Việt • Кириллица 🚀</div>
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle (v-if mount/unmount)">
        <DemoFlex align="center">
          <D1Button
            :label="isLifecycleMounted ? 'Unmount Divider' : 'Mount Divider'"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <DemoValue label="Mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
        <DemoBox>
          <div>Before lifecycle divider</div>
          <D1Divider v-if="isLifecycleMounted" size="lg" margin="sm" data-testid="lifecycle-divider"/>
          <div>After lifecycle divider</div>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-divider-page {
  &__narrow-box {
    width: 100%;
    max-width: 240px;
    overflow: hidden;
    overflow-wrap: anywhere;
  }
}
</style>
