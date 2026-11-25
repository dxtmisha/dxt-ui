<script setup lang="ts">
import { ref } from 'vue'
import type { BulletItemProps } from '@dxtmisha/d1'
import type { NumberOrString } from '@dxtmisha/functional'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const selectedSize = ref<NonNullable<BulletItemProps['size']>>('md')
const selectedPalette = ref<NonNullable<BulletItemProps['palette']>>('blue')
const isRtl = ref<boolean>(false)
const isSkeletonActive = ref<boolean>(true)
const isMounted = ref<boolean>(true)

const sizeOptions: ReadonlyArray<NonNullable<BulletItemProps['size']>> = ['sm', 'md', 'lg']
const paletteOptions: ReadonlyArray<NonNullable<BulletItemProps['palette']>> = ['blue', 'green', 'red']

const initialList: NumberOrString[] = [
  'Unified design token spacing and vertical list alignment',
  'Automatic forwarding of shared item attributes via itemAttrs',
  0
]

const reactiveList = ref<NumberOrString[]>([...initialList])

const htmlContent = `
  <li>Formatted HTML item with <strong>bold emphasis</strong> and <em>inline code</em></li>
  <li class="demo-bullet-custom">HTML item preserving an existing custom class attribute</li>
  <li>Multi-line rich content rendered from CMS or Markdown pipelines</li>
`

const sanitizedHtmlContent = [
  '<li>Safe text before forbidden elements<scr',
  'ipt>window.__xss = true</scr',
  'ipt></li>',
  '<li>Sanitized image <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%3E%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%232563eb%22%2F%3E%3C%2Fsvg%3E" onerror="window.__xssImg = true"> and <a href="javascript:alert(1)">stripped unsafe URI</a></li>'
].join('\n')

const boundaryList: NumberOrString[] = [
  0,
  -15,
  99.5,
  'A',
  '',
  '   ',
  'Café & Résumé — 日本語 🚀',
  '<img src=x onerror=alert(1)>'
]

const overflowList: NumberOrString[] = [
  'Long multi-sentence bullet list line designed to wrap cleanly inside narrow containers without horizontal overflow',
  'SupercalifragilisticexpialidociousBulletListSegmentWithoutSpaces'
]

const addBulletItem = (): void => {
  reactiveList.value = [
    ...reactiveList.value,
    `Dynamic item #${reactiveList.value.length + 1}`
  ]
}

const removeLastBulletItem = (): void => {
  if (reactiveList.value.length > 1) {
    reactiveList.value = reactiveList.value.slice(0, -1)
  }
}

const resetBulletList = (): void => {
  reactiveList.value = [...initialList]
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Bullet">
    <D1Section>
      <D1Group label="Basic List, Dynamic Mutations & RTL Direction">
        <DemoFlex>
          <D1Button
            data-testid="demo-bullet-rtl-toggle"
            size="sm"
            :outline="!isRtl"
            label="Toggle RTL"
            @click="isRtl = !isRtl"
          />
          <D1Button
            data-testid="demo-bullet-add-item"
            size="sm"
            outline
            label="Add Item"
            @click="addBulletItem"
          />
          <D1Button
            data-testid="demo-bullet-remove-item"
            size="sm"
            outline
            label="Remove Last"
            @click="removeLastBulletItem"
          />
          <D1Button
            data-testid="demo-bullet-reset-list"
            size="sm"
            outline
            label="Reset List"
            @click="resetBulletList"
          />
        </DemoFlex>
        <DemoValue label="state" :value="{ isRtl, count: reactiveList.length }"/>
        <DemoFlex
          data-testid="demo-bullet-basic-wrap"
          direction="column"
          :dir="isRtl ? 'rtl' : 'ltr'"
        >
          <D1Bullet
            data-testid="demo-bullet-basic"
            :list="reactiveList"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="HTML Content Parsing & XSS Sanitization">
        <DemoFlex direction="column">
          <D1Bullet
            data-testid="demo-bullet-html"
            :html="htmlContent"
          />
          <D1Bullet
            data-testid="demo-bullet-html-sanitized"
            :html="sanitizedHtmlContent"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Shared Item Customization (itemAttrs)">
        <DemoFlex>
          <D1Button
            v-for="sizeOption in sizeOptions"
            :key="sizeOption"
            :data-testid="`demo-bullet-size-${sizeOption}`"
            size="sm"
            :outline="selectedSize !== sizeOption"
            :label="`itemAttrs: ${sizeOption}`"
            @click="selectedSize = sizeOption"
          />
          <D1Button
            v-for="paletteOption in paletteOptions"
            :key="paletteOption"
            :data-testid="`demo-bullet-palette-${paletteOption}`"
            size="sm"
            :outline="selectedPalette !== paletteOption"
            :label="`palette: ${paletteOption}`"
            @click="selectedPalette = paletteOption"
          />
        </DemoFlex>
        <DemoValue label="itemAttrs" :value="{ size: selectedSize, palette: selectedPalette }"/>
        <DemoFlex direction="column">
          <D1Bullet
            data-testid="demo-bullet-attrs"
            :list="initialList"
            :item-attrs="{ size: selectedSize, palette: selectedPalette }"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Default Slot (#default) with Standalone Bullet Items">
        <DemoFlex direction="column">
          <D1Bullet data-testid="demo-bullet-slot">
            <template #default="slotProperties">
              <D1BulletItem description="Small item with red palette" size="sm" palette="red"/>
              <D1BulletItem description="Medium item with green palette" size="md" palette="green"/>
              <D1BulletItem
                :description="`Large item with orange palette [slot: ${JSON.stringify(slotProperties)}]`"
                size="lg"
                palette="orange"
              />
            </template>
          </D1Bullet>
        </DemoFlex>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex>
          <D1Button
            data-testid="demo-bullet-skeleton-toggle"
            size="sm"
            :outline="!isSkeletonActive"
            label="Toggle Skeleton"
            @click="isSkeletonActive = !isSkeletonActive"
          />
        </DemoFlex>
        <DemoValue label="isSkeletonActive" :value="isSkeletonActive"/>
        <D1Skeleton :active="isSkeletonActive">
          <D1Bullet
            data-testid="demo-bullet-skeleton"
            :is-skeleton="isSkeletonActive"
            :list="[
              'Asynchronous specification summary line one',
              'Asynchronous specification summary line two'
            ]"
          />
        </D1Skeleton>
      </D1Group>

      <D1Group label="Accessibility (Semantic Landmark & Attributes)">
        <DemoBox>
          <D1Bullet
            data-testid="demo-bullet-a11y"
            aria-label="Release verification checklist"
            :list="['Semantic ul/li structure', 'Screen-reader friendly list label']"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary, Edge Cases & Narrow Container">
        <DemoBox>
          <D1Bullet data-testid="demo-bullet-empty-component"/>
          <D1Bullet data-testid="demo-bullet-empty-list" :list="[]"/>
          <D1Bullet data-testid="demo-bullet-empty-html" html=""/>
          <D1Bullet data-testid="demo-bullet-boundary" :list="boundaryList"/>
        </DemoBox>
        <DemoBox class="demo-bullet-page__narrow">
          <D1Bullet data-testid="demo-bullet-narrow" :list="overflowList"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mounting (v-if)">
        <DemoFlex>
          <D1Button
            data-testid="demo-bullet-mount-toggle"
            :label="isMounted ? 'Unmount Bullet' : 'Mount Bullet'"
            size="sm"
            :outline="!isMounted"
            @click="isMounted = !isMounted"
          />
        </DemoFlex>
        <DemoValue label="isMounted" :value="isMounted"/>
        <DemoBox>
          <D1Bullet
            v-if="isMounted"
            data-testid="demo-bullet-conditional"
            :list="['Conditionally mounted item 1', 'Conditionally mounted item 2']"
          />
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-bullet-page {
  &__narrow {
    max-width: 240px;
  }
}
</style>
