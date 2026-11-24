<script setup lang="ts">
import { computed, ref } from 'vue'
import type { AvatarExpose } from '@dxtmisha/constructor/Avatar'
import { image1, image2 } from '@dxtmisha/wiki/media'

import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'
import DemoFlex from '../../components/DemoFlex.vue'

/** Composable for tracking events / Composable для отслеживания событий */
const { eventName, onEvent } = useDemoEvent()

/** Avatar exposed reference / Ссылка на экспортируемый API аватара */
const avatarReference = ref<AvatarExpose | null>(null)

/** Formatted expose values / Отформатированные значения expose */
const exposeStatus = computed<string>(() => {
  if (avatarReference.value) {
    return `getValue(): ${JSON.stringify(avatarReference.value.getValue?.())}, getDetail(): ${JSON.stringify(avatarReference.value.getDetail?.())}`
  }

  return 'Ref not initialized'
})
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Avatar">
    <D1Section>
      <D1Group label="Basic & Initials Reduction">
        <DemoFlex align="center">
          <D1Avatar label="Misha Ivanov"/>
          <D1Avatar label="Misha Ivanov" :reduction="false"/>
          <D1Avatar label="A"/>
          <D1Avatar :label="0"/>
          <D1Avatar label="Nguyễn Văn An"/>
          <D1Avatar label="Иван Петров"/>
          <D1Avatar label="🚀 Alice"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Sizes">
        <DemoFlex align="center">
          <D1Avatar label="XS" size="xs"/>
          <D1Avatar label="SM" size="sm"/>
          <D1Avatar label="MD" size="md"/>
          <D1Avatar label="LG" size="lg"/>
          <D1Avatar label="XL" size="xl"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Images & Icons">
        <DemoFlex align="center">
          <D1Avatar :image="image1" aria-label="Portrait 1" size="xs"/>
          <D1Avatar :image="image2" aria-label="Portrait 2" size="sm"/>
          <D1Avatar :image="image1" aria-label="Portrait 3" size="md"/>
          <D1Avatar :image="image2" aria-label="Portrait 4" size="lg"/>
          <D1Avatar :image="image1" aria-label="Portrait 5" size="xl"/>
          <D1Avatar image="person" aria-label="Icon String" size="md"/>
          <D1Avatar :image="{ value: 'star' }" aria-label="Icon Object" size="md"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="With Badges">
        <DemoFlex align="center">
          <D1Avatar label="John Doe" badge-dot/>
          <D1Avatar label="Jane Smith" badge="5"/>
          <D1Avatar label="Zero Badge" :badge="0"/>
          <D1Avatar :image="image1" aria-label="New User" badge="new"/>
          <D1Avatar
            :image="image2"
            aria-label="Rich Badge"
            :badge="{ label: '99', palette: 'blue' }"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Palettes / Colors">
        <DemoFlex align="center">
          <D1Avatar label="Red Palette" palette="red"/>
          <D1Avatar label="Green Palette" palette="green"/>
          <D1Avatar label="Blue Palette" palette="blue"/>
          <D1Avatar label="Orange Palette" palette="orange"/>
          <D1Avatar label="Purple Palette" palette="purple"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="States & Skeleton">
        <DemoFlex align="center">
          <D1Avatar label="Primary Theme" primary/>
          <D1Avatar label="Focus State" focus/>
          <D1Avatar label="Disabled State" disabled/>
          <D1Avatar label="Readonly State" readonly/>
          <D1Skeleton :active="true">
            <D1Avatar label="Skeleton User" is-skeleton/>
          </D1Skeleton>
        </DemoFlex>
      </D1Group>

      <D1Group label="Links, Slots & Accessibility">
        <DemoFlex align="center">
          <D1Avatar label="Anchor Link" href="#demo-avatar-link"/>
          <D1Avatar label="Router Link" to="/component-avatar"/>
          <D1Avatar label-id="demo-avatar-custom-label" aria-label="Custom accessible avatar">
            <template #default>VIP</template>
          </D1Avatar>
        </DemoFlex>
      </D1Group>

      <D1Group label="Events & Expose">
        <DemoFlex align="center">
          <D1Avatar
            ref="avatarReference"
            label="Click Event"
            primary
            value="user-42"
            :detail="{ role: 'editor' }"
            @click="onEvent('click')"
            @click-lite="onEvent('clickLite')"
            @load="onEvent('load')"
          />
        </DemoFlex>
        <DemoValue label="expose" :value="exposeStatus"/>
        <DemoValue label="event" :value="eventName"/>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
