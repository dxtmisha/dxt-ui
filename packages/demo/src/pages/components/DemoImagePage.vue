<script setup lang="ts">
import { D1Image } from '@dxtmisha/d1/D1Image'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'

const coordinator = [50, 50, 100, 100]
const demoPdf = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'

// Generate 1000 image examples
const generateItems = () => {
  const items = []

  // 1. Basic Images (1-200)
  for (let i = 1; i <= 200; i++) {
    items.push({ value: `https://picsum.photos/400/300?random=${i + 100}`, label: `Img ${i}` })
  }

  // 2. Different sizes and fits (201-400)
  const sizes = ['contain', 'cover', 'auto']
  for (let i = 1; i <= 200; i++) {
    items.push({
      value: `https://picsum.photos/300/500?random=${i + 300}`,
      size: sizes[i % 3],
      class: i % 2 === 0 ? 'bg-gray' : ''
    })
  }

  // 3. Icons and Materials (401-600)
  const icons = ['home', 'settings', 'user', 'search', 'check', 'close', 'menu', 'star', 'favorite', 'share', 'info', 'warning', 'error', 'add', 'remove', 'edit', 'delete', 'download', 'upload', 'link']
  for (let i = 1; i <= 200; i++) {
    items.push({ value: icons[i % icons.length], adaptive: i % 2 === 0 })
  }

  // 4. Position and Coordinator (601-800)
  const positions = ['top', 'bottom', 'left', 'right', 'center']
  for (let i = 1; i <= 200; i++) {
    items.push({
      value: `https://picsum.photos/600/400?random=${i + 600}`,
      coordinator: i % 10 === 0 ? coordinator : undefined,
      x: positions[i % 5],
      y: positions[(i + 2) % 5]
    })
  }

  // 5. Special states and types (801-1000)
  for (let i = 1; i <= 200; i++) {
    const isPdf = i % 20 === 0
    items.push({
      value: isPdf ? demoPdf : `https://picsum.photos/400/400?random=${i + 800}`,
      disabled: i % 15 === 0,
      lazy: true, // Force lazy for 1000 items
      tagImg: i % 4 === 0,
      turn: i % 8 === 0
    })
  }

  return items
}

const demoItems = generateItems()
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Image">
    <D1Grid>
      <D1GridItem
        v-for="(item, index) in demoItems"
        :key="index"
        :base="'2'"
        class="demo-image-page__item"
      >
        <D1Image
          v-bind="item"
          :class="item.class"
        />
      </D1GridItem>
    </D1Grid>
  </D1Page>
</template>

<style lang="scss">
.demo-image-page {
  &__item {
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;

    .d1-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
