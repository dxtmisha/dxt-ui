<script setup lang="ts">
import { ref } from 'vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'

const selectedSize = ref<'sm' | 'md' | 'lg'>('md')
const isRtl = ref<boolean>(false)
const isLoading = ref<boolean>(true)

const basicList = [
  'Unified design token spacing and vertical list alignment',
  'Automatic forwarding of shared item attributes via itemAttrs',
  0
]

const htmlContent = `
  <li>Formatted HTML item with <strong>bold emphasis</strong> and <em>inline code</em></li>
  <li class="demo-bullet-custom">HTML item preserving an existing custom class attribute</li>
  <li>Multi-line rich content rendered from CMS or Markdown pipelines</li>
`
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Bullet">
    <D1Section>
      <D1Group label="Basic List (Array & Numeric Zero)">
        <DemoFlex gap="sm">
          <D1Button
            data-testid="demo-bullet-rtl-toggle"
            size="sm"
            outline
            label="Toggle RTL"
            @click="isRtl = !isRtl"
          />
        </DemoFlex>
        <DemoFlex
          data-testid="demo-bullet-basic-wrap"
          direction="column"
          :dir="isRtl ? 'rtl' : 'ltr'"
        >
          <D1Bullet
            data-testid="demo-bullet-basic"
            :list="basicList"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="HTML Content Parsing">
        <DemoFlex direction="column">
          <D1Bullet
            data-testid="demo-bullet-html"
            :html="htmlContent"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Shared Item Customization (itemAttrs)">
        <DemoFlex gap="sm">
          <D1Button
            data-testid="demo-bullet-size-sm"
            size="sm"
            outline
            label="itemAttrs: sm"
            @click="selectedSize = 'sm'"
          />
          <D1Button
            data-testid="demo-bullet-size-md"
            size="sm"
            outline
            label="itemAttrs: md"
            @click="selectedSize = 'md'"
          />
          <D1Button
            data-testid="demo-bullet-size-lg"
            size="sm"
            outline
            label="itemAttrs: lg"
            @click="selectedSize = 'lg'"
          />
        </DemoFlex>
        <DemoFlex direction="column">
          <D1Bullet
            data-testid="demo-bullet-attrs"
            :list="basicList"
            :item-attrs="{ size: selectedSize, palette: 'blue' }"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Default Slot with Standalone Bullet Items">
        <DemoFlex direction="column">
          <D1Bullet data-testid="demo-bullet-slot">
            <D1BulletItem description="Small item with red palette" size="sm" palette="red" />
            <D1BulletItem description="Medium item with green palette" size="md" palette="green" />
            <D1BulletItem description="Large item with orange palette" size="lg" palette="orange" />
          </D1Bullet>
        </DemoFlex>
      </D1Group>

      <D1Group label="Skeleton Loading State">
        <DemoFlex gap="sm">
          <D1Button
            data-testid="demo-bullet-skeleton-toggle"
            size="sm"
            outline
            label="Toggle Skeleton"
            @click="isLoading = !isLoading"
          />
        </DemoFlex>
        <D1Skeleton :active="isLoading">
          <D1Bullet
            data-testid="demo-bullet-skeleton"
            :is-skeleton="isLoading"
            :list="[
              'Asynchronous specification summary line one',
              'Asynchronous specification summary line two'
            ]"
          />
        </D1Skeleton>
      </D1Group>
    </D1Section>
  </D1Page>
</template>
