<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Button">
    <D1Section>
      <D1Group label="Types">
        <div class="demo-button-page">
          <D1Button label="Primary" primary />
          <D1Button label="Secondary" secondary />
          <D1Button label="Outline" outline />
          <D1Button label="Text" text />
        </div>
      </D1Group>

      <D1Group label="Sizes">
        <div class="demo-button-page">
          <D1Button label="XS Size" size="xs" />
          <D1Button label="SM Size" size="sm" />
          <D1Button label="MD Size" size="md" />
          <D1Button label="LG Size" size="lg" />
          <D1Button label="XL Size" size="xl" />
        </div>
      </D1Group>

      <D1Group label="Icons">
        <div class="demo-button-page">
          <D1Button label="Leading Icon" icon="home" />
          <D1Button label="Trailing Icon" iconTrailing="arrow_forward" />
          <D1Button label="Both Icons" icon="home" iconTrailing="arrow_forward" />
          <D1Button icon="settings" />
        </div>
      </D1Group>

      <D1Group label="States">
        <div class="demo-button-page">
          <D1Button label="Disabled" disabled />
          <D1Button label="Loading" loading />
          <D1Button label="Active" active />
          <D1Button label="Focus" focus />
        </div>
      </D1Group>

      <D1Group label="Shapes">
        <div class="demo-button-page">
          <D1Button label="Rounded Full" roundedFull />
          <D1Button label="Square" icon="add" />
        </div>
      </D1Group>

      <D1Group label="Palettes">
        <div class="demo-button-page">
          <D1Button label="Red" palette="red" />
          <D1Button label="Green" palette="green" />
          <D1Button label="Blue" palette="blue" />
          <D1Button label="Orange" palette="orange" />
          <D1Button label="Purple" palette="purple" />
        </div>
      </D1Group>

      <D1Group label="Adaptive">
        <div class="demo-button-page">
          <D1Button label="Block" adaptive="block" />
          <D1Button label="Full SM" adaptive="fullSm" />
          <D1Button label="Icon SM" adaptive="iconSm" icon="home" />
        </div>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-button-page {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}
</style>

