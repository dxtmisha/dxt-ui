<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import type { AvatarExpose } from '@dxtmisha/constructor/Avatar'
import type { AvatarProps } from '@dxtmisha/d1/D1Avatar'
import { image1, image2 } from '@dxtmisha/wiki/media'

import { useDemoEvent } from '../../composables/useDemoEvent'
import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const { eventName, onEvent } = useDemoEvent()
const eventPayload = ref<string>('')

const avatarSizes: Array<{
  size: NonNullable<AvatarProps['size']>
  label: string
}> = [
  { size: 'xs', label: 'XS' },
  { size: 'sm', label: 'SM' },
  { size: 'md', label: 'MD' },
  { size: 'lg', label: 'LG' },
  { size: 'xl', label: 'XL' }
]
const avatarPalettes: NonNullable<AvatarProps['palette']>[] = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'black',
  'white'
]

const avatarReference = ref<AvatarExpose | null>(null)
const exposeStatus = ref<string>('Click "Read Expose" to inspect getValue() and getDetail()')

const controlledValue = ref<string>('user-42')
const controlledDetail = ref<Record<string, string>>({ role: 'editor' })
const controlledDisabled = ref<boolean>(false)
const controlledReadonly = ref<boolean>(false)
const controlledSkeleton = ref<boolean>(false)
const controlledImage = ref<string | undefined>(undefined)
const isAvatarMounted = ref<boolean>(true)

const controlledStateSummary = computed(() => ({
  value: controlledValue.value,
  detail: controlledDetail.value,
  disabled: controlledDisabled.value,
  readonly: controlledReadonly.value,
  isSkeleton: controlledSkeleton.value,
  hasImage: Boolean(controlledImage.value)
}))

const handleAvatarEvent = (name: string, payload: unknown): void => {
  onEvent(name, payload)
  eventPayload.value = JSON.stringify(payload)
}

const handleAvatarClick = (event: MouseEvent, payload: unknown): void => {
  handleAvatarEvent('click', {
    eventType: event.type,
    value: payload
  })
}

const onReadExpose = (): void => {
  if (avatarReference.value) {
    const valueResult = avatarReference.value.getValue?.()
    const detailResult = avatarReference.value.getDetail?.()
    exposeStatus.value = `getValue(): ${JSON.stringify(valueResult)}, getDetail(): ${JSON.stringify(detailResult)}`
  }
}

const onUpdateAndReadExpose = async (): Promise<void> => {
  controlledValue.value = controlledValue.value === 'user-42' ? 'user-99' : 'user-42'
  controlledDetail.value = controlledValue.value === 'user-42'
    ? { role: 'editor' }
    : { role: 'admin' }

  await nextTick()
  onReadExpose()
}

const onToggleDisabled = (): void => {
  controlledDisabled.value = !controlledDisabled.value
}

const onToggleReadonly = (): void => {
  controlledReadonly.value = !controlledReadonly.value
}

const onToggleSkeleton = (): void => {
  controlledSkeleton.value = !controlledSkeleton.value
}

const onToggleImage = (): void => {
  controlledImage.value = controlledImage.value ? undefined : image1
}

const onToggleMounted = (): void => {
  isAvatarMounted.value = !isAvatarMounted.value
}
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

      <D1Group label="Sizes (xs..xl)">
        <DemoFlex align="center">
          <D1Avatar
            v-for="sizeItem in avatarSizes"
            :key="sizeItem.size"
            :label="sizeItem.label"
            :size="sizeItem.size"
            :reduction="false"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Images, Icons & imageAttrs">
        <DemoFlex align="center">
          <D1Avatar :image="image1" aria-label="Portrait XS" size="xs"/>
          <D1Avatar :image="image2" aria-label="Portrait SM" size="sm"/>
          <D1Avatar :image="image1" aria-label="Portrait MD" size="md"/>
          <D1Avatar :image="image2" aria-label="Portrait LG" size="lg"/>
          <D1Avatar :image="image1" aria-label="Portrait XL" size="xl"/>
          <D1Avatar image="person" aria-label="Icon String" size="md"/>
          <D1Avatar :image="{ value: 'star' }" aria-label="Icon Object" size="md"/>
          <D1Avatar
            :image="image1"
            :image-attrs="{ tagImg: true, alt: 'Avatar image tag', coordinator: [10] }"
            aria-label="Image With Custom Attributes"
            size="lg"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="Badges & badgeAttrs">
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
          <D1Avatar
            label="Badge Attrs"
            :badge="7"
            :badge-attrs="{ secondary: true, vertical: 'bottom', horizontal: 'left' }"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="All 24 Palettes">
        <DemoFlex align="center">
          <D1Avatar
            v-for="paletteName in avatarPalettes"
            :key="paletteName"
            :label="paletteName"
            :palette="paletteName"
            :aria-label="`Palette ${paletteName}`"
          />
        </DemoFlex>
      </D1Group>

      <D1Group label="States & Skeleton">
        <DemoFlex align="center">
          <D1Avatar label="Default State"/>
          <D1Avatar label="Primary Theme" primary/>
          <D1Avatar label="Focus State" focus/>
          <D1Avatar label="Disabled State" disabled/>
          <D1Avatar label="Readonly State" readonly/>
          <D1Avatar label="Primary Focus" primary focus/>
          <D1Avatar label="Primary Disabled" primary disabled/>
          <D1Avatar :image="image1" aria-label="Disabled Image" disabled/>
          <D1Skeleton :active="true">
            <D1Avatar label="Skeleton User" is-skeleton/>
          </D1Skeleton>
          <D1Skeleton :active="true">
            <D1Avatar :image="image2" aria-label="Skeleton Image" is-skeleton/>
          </D1Skeleton>
        </DemoFlex>
      </D1Group>

      <D1Group label="Links, Slots & Accessibility">
        <DemoFlex align="center">
          <D1Avatar label="Anchor Link" href="#demo-avatar-link"/>
          <D1Avatar label="Router Link String" to="/component-avatar"/>
          <D1Avatar label="Router Link Object" :to="{ name: 'home' }"/>
          <D1Avatar label-id="demo-avatar-custom-label" aria-label="Custom accessible avatar">
            <template #default="slotProps">
              VIP ({{ slotProps }})
            </template>
          </D1Avatar>
          <D1Avatar label="Non-tabbable" tabindex="-1" aria-label="Avatar removed from tab order"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Interactive Actions, Blocked States, Events & Expose">
        <DemoFlex>
          <D1Button label="Read Expose" size="sm" @click="onReadExpose"/>
          <D1Button label="Update Value & Read Expose" size="sm" outline @click="onUpdateAndReadExpose"/>
          <D1Button label="Toggle Disabled" size="sm" outline @click="onToggleDisabled"/>
          <D1Button label="Toggle Readonly" size="sm" outline @click="onToggleReadonly"/>
          <D1Button label="Toggle Skeleton" size="sm" outline @click="onToggleSkeleton"/>
          <D1Button label="Toggle Image (@load)" size="sm" outline @click="onToggleImage"/>
        </DemoFlex>
        <DemoFlex align="center">
          <D1Skeleton :active="controlledSkeleton">
            <D1Avatar
              ref="avatarReference"
              label="Click Event"
              primary
              :image="controlledImage"
              :value="controlledValue"
              :detail="controlledDetail"
              index="avatar-main"
              :disabled="controlledDisabled"
              :readonly="controlledReadonly"
              :is-skeleton="controlledSkeleton"
              @click="handleAvatarClick"
              @click-lite="handleAvatarEvent('clickLite', $event)"
              @load="handleAvatarEvent('load', $event)"
            />
          </D1Skeleton>
          <D1Avatar
            :image="image1"
            aria-label="Image load emitter"
            @load="handleAvatarEvent('load', $event)"
          />
          <D1Avatar
            label="Blocked Disabled"
            disabled
            value="blocked-disabled"
            @click="handleAvatarClick"
            @click-lite="handleAvatarEvent('clickLite', $event)"
          />
          <D1Avatar
            label="Blocked Readonly"
            readonly
            value="blocked-readonly"
            @click="handleAvatarClick"
            @click-lite="handleAvatarEvent('clickLite', $event)"
          />
        </DemoFlex>
        <DemoValue label="Controls" :value="controlledStateSummary"/>
        <DemoValue label="Expose" :value="exposeStatus"/>
        <DemoValue label="Event" :value="eventName"/>
        <DemoValue label="Payload" :value="eventPayload"/>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoFlex align="center">
          <D1Avatar label="" aria-label="Empty string label"/>
          <D1Avatar label="   " aria-label="Whitespace label"/>
          <D1Avatar aria-label="No label or image"/>
          <D1Avatar :label="0"/>
          <D1Avatar :label="-7" :reduction="false"/>
          <D1Avatar :label="3.5" :reduction="false"/>
          <D1Avatar label="SupercalifragilisticexpialidociousAvatarLabel" :reduction="false"/>
          <D1Avatar label="Alice <img src=x onerror=alert(1)>" :reduction="false"/>
          <DemoBox size="sm" class="demo-avatar-page__narrow">
            <D1Avatar label="Long Name In Narrow Box" :reduction="false"/>
          </DemoBox>
        </DemoFlex>
      </D1Group>

      <D1Group label="SSR & Lifecycle (Mount / Unmount)">
        <DemoFlex>
          <D1Button
            :label="isAvatarMounted ? 'Unmount Avatar' : 'Mount Avatar'"
            size="sm"
            @click="onToggleMounted"
          />
          <DemoValue label="Mounted" :value="isAvatarMounted"/>
        </DemoFlex>
        <DemoBox v-if="isAvatarMounted">
          <D1Avatar label="Lifecycle User" primary badge="1"/>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-avatar-page {
  &__narrow {
    max-width: 140px;
    overflow: hidden;
  }
}
</style>
