<script setup lang="ts">
import { ref } from 'vue'
import type { RippleExpose } from '@dxtmisha/constructor/Ripple'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

/** Reactive disabled state for testing the disabled prop / Реактивное состояние отключения для проверки свойства disabled */
const disabled = ref<boolean>(false)

/** Reference to the programmatically controlled D1Ripple instance / Ссылка на программно управляемый экземпляр D1Ripple */
const rippleRef = ref<RippleExpose | null>(null)

/** Last executed programmatic action description / Описание последнего выполненного программного действия */
const lastTriggeredAction = ref<string>('None')

/**
 * Toggles the disabled state of the ripple effect.
 *
 * Переключает состояние отключения эффекта волны.
 */
const toggleDisabled = (): void => {
  disabled.value = !disabled.value
}

/**
 * Programmatically triggers a ripple wave at the center of the container.
 *
 * Программно запускает эффект волны по центру контейнера.
 */
const triggerCenter = (): void => {
  if (rippleRef.value) {
    rippleRef.value.addCenter()
    lastTriggeredAction.value = 'addCenter()'
  }
}

/**
 * Programmatically triggers a ripple wave near the top-left corner.
 *
 * Программно запускает эффект волны около верхнего левого угла.
 */
const triggerTopLeft = (): void => {
  if (rippleRef.value) {
    rippleRef.value.add({ x: 24, y: 24 })
    lastTriggeredAction.value = 'add({ x: 24, y: 24 })'
  }
}

/**
 * Programmatically triggers a ripple wave at the origin.
 *
 * Программно запускает эффект волны в начале координат.
 */
const triggerOrigin = (): void => {
  if (rippleRef.value) {
    rippleRef.value.add({ x: 0, y: 0 })
    lastTriggeredAction.value = 'add({ x: 0, y: 0 })'
  }
}

/**
 * Programmatically triggers a ripple wave near the bottom-right corner.
 *
 * Программно запускает эффект волны около нижнего правого угла.
 */
const triggerBottomRight = (): void => {
  if (rippleRef.value) {
    rippleRef.value.add({ x: 200, y: 80 })
    lastTriggeredAction.value = 'add({ x: 200, y: 80 })'
  }
}
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Ripple">
    <D1Section>
      <D1Group label="Basic Usage">
        <DemoBox size="lg" center class="demo-ripple-page__interactive">
          <D1Ripple/>
          <span>Click anywhere inside this card</span>
        </DemoBox>
      </D1Group>

      <D1Group label="States (Disabled)">
        <DemoFlex>
          <D1Button
            :label="disabled ? 'Enable Ripple' : 'Disable Ripple'"
            @click="toggleDisabled"
          />
        </DemoFlex>
        <DemoFlex>
          <DemoBox size="lg" center class="demo-ripple-page__interactive">
            <D1Ripple :disabled="disabled"/>
            <span>
              {{ disabled ? 'Ripple is Disabled (clicks ignored)' : 'Ripple is Enabled' }}
            </span>
          </DemoBox>
        </DemoFlex>
        <DemoValue :value="disabled ? 'disabled: true' : 'disabled: false'"/>
      </D1Group>

      <D1Group label="Programmatic Control (Expose API)">
        <DemoFlex>
          <D1Button
            label="Trigger Center (addCenter)"
            @click="triggerCenter"
          />
          <D1Button
            label="Trigger Top-Left (add 24, 24)"
            @click="triggerTopLeft"
          />
          <D1Button
            label="Trigger Origin (add 0, 0)"
            @click="triggerOrigin"
          />
          <D1Button
            label="Trigger Bottom-Right (add 200, 80)"
            @click="triggerBottomRight"
          />
        </DemoFlex>
        <DemoBox size="lg" center class="demo-ripple-page__interactive">
          <D1Ripple ref="rippleRef"/>
          <span>Programmatic Ripple Target</span>
        </DemoBox>
        <DemoValue :value="'Last action: ' + lastTriggeredAction"/>
      </D1Group>

      <D1Group label="Inherited Border Radius (Shapes)">
        <DemoFlex>
          <DemoBox size="md" center class="demo-ripple-page__interactive demo-ripple-page__interactive--rounded">
            <D1Ripple/>
            <span>Rounded (16px)</span>
          </DemoBox>
          <DemoBox size="md" center class="demo-ripple-page__interactive demo-ripple-page__interactive--pill">
            <D1Ripple/>
            <span>Pill Shape</span>
          </DemoBox>
          <DemoBox size="md" center class="demo-ripple-page__interactive demo-ripple-page__interactive--circle">
            <D1Ripple/>
            <span>Circle</span>
          </DemoBox>
        </DemoFlex>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
@use '@dxtmisha/d1/ui-properties' as ui;

.demo-ripple-page {
  display: block;

  &__interactive {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    user-select: none;

    &--rounded {
      border-radius: ui.v('?sys.rounded.xl');
    }

    &--pill {
      border-radius: ui.v('?sys.rounded.full');
    }

    &--circle {
      border-radius: 50%;
    }
  }
}
</style>
