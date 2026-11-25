<script setup lang="ts">
import { ref } from 'vue'
import type { RippleExpose } from '@dxtmisha/constructor/Ripple'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const isDisabled = ref<boolean>(false)
const isLifecycleMounted = ref<boolean>(true)
const rippleTargetRef = ref<RippleExpose | null>(null)
const disabledRippleRef = ref<RippleExpose | null>(null)
const hiddenRippleRef = ref<RippleExpose | null>(null)
const lastTriggeredAction = ref<string>('None')
const disabledAttemptCount = ref<number>(0)
const a11yTriggerCount = ref<number>(0)

const toggleDisabled = (): void => {
  isDisabled.value = !isDisabled.value
}

const triggerCenter = (): void => {
  rippleTargetRef.value?.addCenter()
  lastTriggeredAction.value = 'addCenter()'
}

const triggerTopLeft = (): void => {
  rippleTargetRef.value?.add({ x: 24, y: 24 })
  lastTriggeredAction.value = 'add({ x: 24, y: 24 })'
}

const triggerOrigin = (): void => {
  rippleTargetRef.value?.add({ x: 0, y: 0 })
  lastTriggeredAction.value = 'add({ x: 0, y: 0 })'
}

const triggerNegative = (): void => {
  rippleTargetRef.value?.add({ x: -20, y: -20 })
  lastTriggeredAction.value = 'add({ x: -20, y: -20 })'
}

const triggerOverflowCoords = (): void => {
  rippleTargetRef.value?.add({ x: 999, y: 999 })
  lastTriggeredAction.value = 'add({ x: 999, y: 999 })'
}

const triggerUndefinedCoordinator = (): void => {
  rippleTargetRef.value?.add(undefined)
  lastTriggeredAction.value = 'add(undefined)'
}

const triggerBurst = (): void => {
  rippleTargetRef.value?.add({ x: 32, y: 32 })
  rippleTargetRef.value?.addCenter()
  rippleTargetRef.value?.add({ x: 160, y: 80 })
  lastTriggeredAction.value = 'burst(3 waves)'
}

const triggerDisabledProgrammatic = (): void => {
  disabledRippleRef.value?.addCenter()
  disabledAttemptCount.value += 1
}

const triggerHiddenProgrammatic = (): void => {
  hiddenRippleRef.value?.addCenter()
  lastTriggeredAction.value = 'hidden addCenter() ignored'
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

      <D1Group label="States (Disabled & Guarded)">
        <DemoFlex align="center">
          <D1Button
            :label="isDisabled ? 'Enable Ripple' : 'Disable Ripple'"
            size="sm"
            @click="toggleDisabled"
          />
          <D1Button
            label="Try Programmatic addCenter()"
            size="sm"
            outline
            @click="triggerDisabledProgrammatic"
          />
        </DemoFlex>
        <DemoFlex>
          <DemoBox size="lg" center class="demo-ripple-page__interactive">
            <D1Ripple ref="disabledRippleRef" :disabled="isDisabled"/>
            <span>
              {{ isDisabled ? 'Ripple is Disabled (clicks ignored)' : 'Ripple is Enabled' }}
            </span>
          </DemoBox>
        </DemoFlex>
        <DemoValue label="Disabled State" :value="isDisabled"/>
        <DemoValue label="Programmatic Attempts" :value="disabledAttemptCount"/>
      </D1Group>

      <D1Group label="Programmatic Control & Coordinate Boundaries (Expose API)">
        <DemoFlex align="center">
          <D1Button label="addCenter()" size="sm" @click="triggerCenter"/>
          <D1Button label="add(24, 24)" size="sm" outline @click="triggerTopLeft"/>
          <D1Button label="add(0, 0)" size="sm" outline @click="triggerOrigin"/>
          <D1Button label="add(-20, -20)" size="sm" outline @click="triggerNegative"/>
          <D1Button label="add(999, 999)" size="sm" outline @click="triggerOverflowCoords"/>
          <D1Button label="add(undefined)" size="sm" outline @click="triggerUndefinedCoordinator"/>
          <D1Button label="Burst (3 waves)" size="sm" outline @click="triggerBurst"/>
        </DemoFlex>
        <DemoBox size="lg" center class="demo-ripple-page__interactive">
          <D1Ripple ref="rippleTargetRef"/>
          <span>Programmatic Ripple Target</span>
        </DemoBox>
        <DemoValue label="Last Action" :value="lastTriggeredAction"/>
      </D1Group>

      <D1Group label="Inherited Border Radius (Shapes)">
        <DemoFlex>
          <DemoBox size="md" center class="demo-ripple-page__interactive demo-ripple-page__interactive--rounded">
            <D1Ripple/>
            <span>Rounded</span>
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

      <D1Group label="Palette Inheritance & Companion Integration">
        <DemoFlex align="center">
          <DemoBox size="md" center class="demo-ripple-page__interactive demo-ripple-page__palette-surface d1-palette--red">
            <D1Ripple/>
            <span>Red Surface</span>
          </DemoBox>
          <DemoBox size="md" center class="demo-ripple-page__interactive demo-ripple-page__palette-surface d1-palette--blue">
            <D1Ripple/>
            <span>Blue Surface</span>
          </DemoBox>
          <D1Button label="Button with Ripple" primary/>
          <D1Button label="Disabled Button (No Ripple)" disabled/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Accessibility (Decorative aria-hidden & Host Control)">
        <button
          type="button"
          class="demo-ripple-page__a11y-button"
          aria-label="Accessible trigger with decorative ripple"
          @click="a11yTriggerCount += 1"
        >
          <D1Ripple/>
          <span>Activate Accessible Control (Enter / Space / Click)</span>
        </button>
        <DemoValue label="Accessible Activations" :value="a11yTriggerCount"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex align="center">
          <D1Button
            label="Trigger Hidden Ripple (display: none)"
            size="sm"
            outline
            @click="triggerHiddenProgrammatic"
          />
        </DemoFlex>
        <div class="demo-ripple-page__hidden">
          <D1Ripple ref="hiddenRippleRef"/>
        </div>
        <DemoBox size="sm" center class="demo-ripple-page__interactive demo-ripple-page__narrow">
          <D1Ripple/>
          <span>Narrow 240px Ripple Target</span>
        </DemoBox>
      </D1Group>

      <D1Group label="Lifecycle & Conditional Mount">
        <DemoFlex align="center">
          <D1Button
            label="Toggle Mount"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
        </DemoFlex>
        <DemoBox size="md" center class="demo-ripple-page__interactive">
          <D1Ripple v-if="isLifecycleMounted"/>
          <span>{{ isLifecycleMounted ? 'Ripple Mounted' : 'Ripple Unmounted' }}</span>
        </DemoBox>
        <DemoValue label="Mounted" :value="isLifecycleMounted"/>
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

  &__palette-surface {
    --sys-color: #{ui.v('?sys.palette.onPrimary')};
    @include ui.backgroundColor(ui.v('?sys.palette.primary'), 1);
    color: ui.v('?sys.palette.onPrimary');
  }

  &__a11y-button {
    position: relative;
    overflow: hidden;
    padding: ui.v('?layout.paddingY') ui.v('?layout.paddingX');
    border-width: 1px;
    border-style: solid;
    @include ui.borderColor(ui.v('?sys.palette.outline'), ui.v('?sys.opacity.outline'));
    border-radius: ui.v('?sys.rounded.md');
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  &__hidden {
    display: none;
  }

  &__narrow {
    width: 100%;
    max-width: 240px;
  }
}
</style>
