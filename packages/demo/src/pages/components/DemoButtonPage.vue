<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ButtonExpose } from '@dxtmisha/constructor/Button'
import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoFlex from '../../components/DemoFlex.vue'

const { eventName, onEvent } = useDemoEvent()
const buttonRef = ref<ButtonExpose | null>(null)

const statusValue = computed<string>(() => {
  if (buttonRef.value) {
    const value = buttonRef.value.getValue?.()
    const detail = buttonRef.value.getDetail?.()
    return `getValue(): ${JSON.stringify(value)}, getDetail(): ${JSON.stringify(detail)}`
  }
  return 'Ref not initialized'
})
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Button">
    <D1Section>
      <D1Group label="Types">
        <DemoFlex>
          <D1Button label="Primary" primary />
          <D1Button label="Secondary" secondary />
          <D1Button label="Outline" outline />
          <D1Button label="Text" text />
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes">
        <DemoFlex>
          <D1Button label="XS Size" size="xs" />
          <D1Button label="SM Size" size="sm" />
          <D1Button label="MD Size" size="md" />
          <D1Button label="LG Size" size="lg" />
          <D1Button label="XL Size" size="xl" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Icons">
        <DemoFlex>
          <D1Button label="Leading Icon" icon="home" />
          <D1Button label="Trailing Icon" iconTrailing="arrow_forward" />
          <D1Button label="Both Icons" icon="home" iconTrailing="arrow_forward" />
          <D1Button icon="settings" />
        </DemoFlex>
      </D1Group>

      <D1Group label="States">
        <DemoFlex>
          <D1Button label="Disabled" disabled />
          <D1Button label="Selected" selected />
          <D1Button label="Readonly" readonly />
          <D1Button label="Active" active />
          <D1Button label="Focus" focus />
          <D1Button label="Loading" loading />
          <D1Button label="Skeleton" isSkeleton />
          <D1Button label="Disabled + Selected" disabled selected />
        </DemoFlex>
      </D1Group>

      <D1Group label="Shapes & Styling">
        <DemoFlex>
          <D1Button label="Rounded Full" roundedFull />
          <D1Button label="Square" icon="add" />
          <D1Button label="Inverse" inverse />
          <D1Button label="Grid Layout" grid icon="star" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Text Alignment">
        <DemoFlex>
          <D1Button label="Left Aligned" textAlign="left" style="min-width: 140px" />
          <D1Button label="Center Aligned" textAlign="center" style="min-width: 140px" />
          <D1Button label="Right Aligned" textAlign="right" style="min-width: 140px" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes">
        <DemoFlex>
          <D1Button label="Red" palette="red" />
          <D1Button label="Green" palette="green" />
          <D1Button label="Blue" palette="blue" />
          <D1Button label="Orange" palette="orange" />
          <D1Button label="Purple" palette="purple" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Adaptive">
        <DemoFlex>
          <D1Button label="Block" adaptive="block" />
          <D1Button label="Full SM" adaptive="fullSm" />
          <D1Button label="Icon SM" adaptive="iconSm" icon="home" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Tags & Types">
        <DemoFlex>
          <D1Button label="Button Tag" tag="button" type="button" />
          <D1Button label="Submit Type" tag="button" type="submit" />
          <D1Button label="Reset Type" tag="button" type="reset" />
          <D1Button label="Link (A Tag)" tag="a" href="https://github.com" target="_blank" />
          <D1Button label="Span Tag" tag="span" />
        </DemoFlex>
      </D1Group>

      <D1Group label="Slots">
        <DemoFlex>
          <D1Button>
            Custom Default Content
          </D1Button>
          <D1Button icon="star">
            <template #label>
              Custom Label Slot
            </template>
          </D1Button>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events & Expose Methods">
        <DemoFlex>
          <D1Button
            ref="buttonRef"
            label="Click Me"
            primary
            value="my-button-value"
            :detail="{ action: 'submit' }"
            @click="onEvent('click', $event)"
            @click-lite="onEvent('clickLite', $event)"
          />
        </DemoFlex>
        <DemoValue :value="statusValue"/>
        <DemoValue :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
</style>
