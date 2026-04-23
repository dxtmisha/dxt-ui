<script setup lang="ts">
import { D1Image } from '@dxtmisha/d1/D1Image'

const coordinator = [50, 50, 100, 100]

const images = {
  image1: 'https://picsum.photos/800/600?random=1',
  phone1: 'https://picsum.photos/400/800?random=2',
  demoPdf: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
}
</script>

<template>
  <section class="demo-image">
    <h1>D1Image Components</h1>

    <div class="demo-grid">
      <div class="demo-item">
        <h2>Direct URL Image</h2>
        <D1Image value="https://picsum.photos/400/300?random=3" class="image-box" />
      </div>

      <div class="demo-item">
        <h2>Basic Image (Background)</h2>
        <D1Image :value="images.image1" class="image-box" />
      </div>

      <div class="demo-item">
        <h2>Image as &lt;img&gt; tag</h2>
        <D1Image :value="images.image1" tag-img alt="Demo" class="image-box" />
      </div>

      <div class="demo-item">
        <h2>Material Icon</h2>
        <D1Image value="home" class="image-box" />
      </div>

      <div class="demo-item">
        <h2>PDF Preview</h2>
        <D1Image :value="images.demoPdf" class="image-box" />
      </div>

      <div class="demo-item">
        <h2>Size: Contain</h2>
        <D1Image :value="images.phone1" size="contain" class="image-box bg-gray" />
      </div>

      <div class="demo-item">
        <h2>Size: Cover</h2>
        <D1Image :value="images.phone1" size="cover" class="image-box bg-gray" />
      </div>

      <div class="demo-item">
        <h2>Coordinator & Positioning</h2>
        <D1Image :value="images.image1" :coordinator="coordinator" x="top" y="left" class="image-box" />
      </div>

      <div class="demo-item">
        <h2>Adaptive</h2>
        <D1Image :value="images.image1" adaptive class="image-box" />
      </div>

      <div class="demo-item">
        <h2>Lazy Loading</h2>
        <D1Image :value="images.image1" lazy class="image-box" />
      </div>

      <div class="demo-item">
        <h2>Disabled State</h2>
        <D1Image :value="images.image1" disabled class="image-box" />
      </div>

      <div class="demo-item">
        <h2>Hide State</h2>
        <D1Image :value="images.image1" hide class="image-box" />
      </div>

      <div class="demo-item">
        <h2>Turn (Rotate/Flip?)</h2>
        <D1Image :value="images.image1" turn class="image-box" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.demo-image {
  padding: 24px;

  .demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }

  .demo-item {
    position: relative;
    border: 1px solid #eee;
    padding: 16px;
    border-radius: 8px;

    h2 {
      margin-bottom: 12px;
      font-size: 1.1rem;
    }
  }

  .image-box {
    position: relative;
    width: 100%;
    height: 200px;
    border: 1px solid #ddd;
    display: block;
    overflow: hidden;
  }

  .bg-gray {
    background-color: #f5f5f5;
  }
}
</style>
