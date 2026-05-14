<script setup lang="ts">
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoFlex from '../../components/DemoFlex.vue'
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Badge">
    <D1Section>
      <D1Group label="Types">
        <DemoFlex>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="mail" size="lg" />
            <D1Badge label="8" primary />
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="notifications" size="lg" />
            <D1Badge label="new" secondary />
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="shopping_cart" size="lg" />
            <D1Badge label="2" outline />
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Dot">
        <DemoFlex>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="mail" size="lg" />
            <D1Badge dot />
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="notifications" size="lg" />
            <D1Badge dot palette="red" />
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="shopping_cart" size="lg" />
            <D1Badge dot palette="green" />
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes">
        <DemoFlex>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="notifications" size="lg" />
            <D1Badge label="9" size="sm" />
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="notifications" size="lg" />
            <D1Badge label="99" size="md" />
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="notifications" size="lg" />
            <D1Badge label="999+" size="lg" />
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Overlaps">
        <DemoFlex>
          <div class="demo-badge-page__wrapper">
            <div class="demo-badge-page__box demo-badge-page__box--rectangular"></div>
            <D1Badge label="1" overlap="rectangular" />
          </div>
          <div class="demo-badge-page__wrapper">
            <div class="demo-badge-page__box demo-badge-page__box--circular"></div>
            <D1Badge label="1" overlap="circular" />
          </div>
          <div class="demo-badge-page__wrapper">
            <div class="demo-badge-page__box"></div>
            <D1Badge label="Static" overlap="static" />
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Positions">
        <DemoFlex>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="person" size="lg" />
            <D1Badge dot vertical="top" horizontal="right" />
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="person" size="lg" />
            <D1Badge dot vertical="top" horizontal="left" />
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="person" size="lg" />
            <D1Badge dot vertical="bottom" horizontal="right" />
          </div>
          <div class="demo-badge-page__wrapper">
            <D1Icon icon="person" size="lg" />
            <D1Badge dot vertical="bottom" horizontal="left" />
          </div>
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes">
        <DemoFlex>
          <D1Badge label="Red" palette="red" overlap="static" />
          <D1Badge label="Green" palette="green" overlap="static" />
          <D1Badge label="Blue" palette="blue" overlap="static" />
          <D1Badge label="Orange" palette="orange" overlap="static" />
          <D1Badge label="Purple" palette="purple" overlap="static" />
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-badge-page {
  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--d1-sys-palette-surfaceVariant);
    border-radius: 8px;
    padding: 8px;
  }

  &__box {
    width: 40px;
    height: 40px;
    background-color: var(--d1-sys-palette-secondary);

    &--rectangular {
      border-radius: 4px;
    }

    &--circular {
      border-radius: 50%;
    }
  }
}
</style>
