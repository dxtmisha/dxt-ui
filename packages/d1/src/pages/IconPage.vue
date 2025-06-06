<script setup lang="ts">
import { type Reactive, ref } from 'vue'
import { Icons } from '@dxt-ui/functional'
import {
  UiTestButton,
  UiTestContainer,
  UiTestGroup,
  UiTestItemFull,
  UiTestItemSquared,
  UiTestTitle
} from '@dxt-ui/test'

import { C2Icon } from '../components/CcUi/Icon'

import DX1228 from '../assets/Images/DX12-28.png'
import FX135 from '../assets/Images/FX135.png'
import GalaxyS23 from '../assets/Images/GalaxyS23.png'

import type { IconExpose } from '@dxt-ui/constructor/Icon'
import C2Skeleton from '../components/CcUi/Skeleton/C2Skeleton.vue'

Icons.add('fx-135', FX135)
Icons.add('galaxy-s23', GalaxyS23)

const image = 'https://drscdn.500px.org/photo/292683549/q%3D90_m%3D2048/v2?sig=57a983b1ae345a1157df3caa67f49360d0dd6741e89a1f8c2393c9e894499492'

const iconElement = ref<Reactive<IconExpose>>()

const active = ref<boolean>(false)
const disabled = ref<boolean>(false)
const hide = ref<boolean>(false)
const turn = ref<boolean>(false)
const skeleton = ref<boolean>(false)

const load = ref<boolean>(false)
const onLoad = () => {
  load.value = true
}
</script>

<template>
  <UiTestTitle title="Icon"/>

  <UiTestContainer label="Icon">
    <UiTestGroup>
      <UiTestItemSquared size="xs">
        <C2Icon icon="search"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <C2Icon icon="menu"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <C2Icon icon="home"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <C2Icon icon="fx-135"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <C2Icon icon="galaxy-s23"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <C2Icon icon="bonus-possible-01"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <C2Icon icon="check-md"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Size">
    <UiTestGroup>
      <UiTestItemSquared label="2xs" size="md">
        <C2Icon icon="mouse" size="2xs"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="xs" size="md">
        <C2Icon icon="mouse" size="xs"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="sm" size="md">
        <C2Icon icon="mouse" size="sm"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="md" size="md">
        <C2Icon icon="mouse" size="md"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="lg" size="md">
        <C2Icon icon="mouse" size="lg"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="xl" size="md">
        <C2Icon icon="mouse" size="xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="2xl" size="md">
        <C2Icon icon="mouse" size="2xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="3xl" size="md">
        <C2Icon icon="mouse" size="3xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="4xl" size="md">
        <C2Icon icon="mouse" size="4xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="5xl" size="lg">
        <C2Icon icon="mouse" size="5xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="6xl" size="lg">
        <C2Icon icon="mouse" size="6xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="7xl" size="lg">
        <C2Icon icon="mouse" size="7xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Circle" size="md">
        <C2Icon :icon="image" circle size="4xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Box" size="md">
        <C2Icon :icon="image" box size="4xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Box+Round" size="md">
        <C2Icon :icon="image" box round size="4xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Rect" size="md">
        <C2Icon :icon="image" rect size="4xl"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Modification">
    <UiTestGroup>
      <UiTestItemSquared class="dir-rtl" label="Dir: false" size="md">
        <C2Icon icon="more_up"/>
      </UiTestItemSquared>
      <UiTestItemSquared class="dir-rtl" label="Dir: true" size="md">
        <C2Icon icon="more_up" dir/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Overlay" size="md">
        <C2Icon icon="home" size="xl" overlay/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Dynamic" size="md">
        <C2Icon icon="home" size="xl" dynamic/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Dynamic+Overlay" size="md">
        <C2Icon icon="home" size="xl" dynamic overlay/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Animation show" size="md">
        <C2Icon icon="home" size="xl" animation-show/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Animation show" size="md">
        <C2Icon :icon="{ value: GalaxyS23, size: 'contain' }" size="xl" animation-show/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Secondary" size="md">
        <C2Icon icon="mouse" size="xl" secondary/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Position">
    <UiTestGroup>
      <C2Icon icon="add_circle" start/>
      <C2Icon icon="cancel" end/>
      <C2Icon icon="cancel" end high/>
      <span style="order: 4">...</span>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Palette">
    <UiTestGroup>
      <UiTestItemSquared size="xs">
        <C2Icon as-palette icon="home"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <C2Icon as-palette icon="home" class="c2-palette--orchid"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <C2Icon icon="home" class="c2-palette--orchid"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Success" size="md">
        <C2Icon icon="home" success/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Success, inverse" size="md">
        <C2Icon icon="home" success-inverse/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Error" size="md">
        <C2Icon icon="home" error/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Error, inverse" size="md">
        <C2Icon icon="home" error-inverse/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Status">
    <UiTestGroup>
      <UiTestItemFull is-padding>
        <UiTestGroup>
          <UiTestButton :label="`Active: ${active}`" @click="active = !active"/>
          <UiTestButton :label="`Disabled: ${disabled}`" @click="disabled = !disabled"/>
          <UiTestButton :label="`Hide: ${hide}`" @click="hide = !hide"/>
          <UiTestButton :label="`Turn: ${turn}`" @click="turn = !turn"/>
        </UiTestGroup>
      </UiTestItemFull>
      <UiTestItemSquared :label="`Is active: ${iconElement?.isActive}`" size="md">
        <C2Icon
          ref="iconElement"
          :active="active"
          :disabled="disabled"
          :hide="hide"
          :turn="turn"
          icon="photo_camera"
          icon-active="add_a_photo"
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        <C2Icon
          :active="active"
          :disabled="disabled"
          :hide="hide"
          :turn="turn"
          icon="photo_camera"
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        <C2Icon
          :active="active"
          :disabled="disabled"
          :hide="hide"
          :turn="turn"
          icon-active="add_a_photo"
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Type animation: type2" size="md">
        <C2Icon
          :active="active"
          :disabled="disabled"
          :hide="hide"
          :turn="turn"
          animation-type="type2"
          icon="photo_camera"
          icon-active="add_a_photo"
        />
      </UiTestItemSquared>
      <UiTestItemSquared :label="`Load: ${load}`" size="md">
        <C2Icon
          :active="active"
          :disabled="disabled"
          :hide="hide"
          :icon="DX1228"
          :icon-active="FX135"
          :turn="turn"
          size="5xl"
          @load="onLoad"
        />
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Skeleton">
    <UiTestGroup>
      <UiTestItemFull is-padding>
        <UiTestGroup>
          <UiTestButton :label="`Skeleton: ${skeleton}`" @click="skeleton = !skeleton"/>
        </UiTestGroup>
      </UiTestItemFull>
      <UiTestItemSquared size="xs">
        <C2Skeleton :active="skeleton">
          <C2Icon
            :is-skeleton="skeleton"
            icon="home"
          />
        </C2Skeleton>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
