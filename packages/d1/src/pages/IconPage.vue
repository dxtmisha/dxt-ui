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

import { D1Icon } from '../components/CcUi/Icon'

import DX1228 from '../assets/Images/DX12-28.png'
import FX135 from '../assets/Images/FX135.png'
import GalaxyS23 from '../assets/Images/GalaxyS23.png'

import type { IconExpose } from '@dxt-ui/constructor/Icon'
import D1Skeleton from '../components/CcUi/Skeleton/D1Skeleton.vue'

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
        <D1Icon icon="search"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Icon icon="menu"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Icon icon="home"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Icon icon="fx-135"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Icon icon="galaxy-s23"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Icon icon="TX"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Size">
    <UiTestGroup>
      <UiTestItemFull :background="false">
        <UiTestItemSquared label="x" size="md">
          <D1Icon icon="mouse" overlay size="x"/>
        </UiTestItemSquared>
        <UiTestItemSquared label="xs" size="md">
          <D1Icon icon="mouse" overlay size="xs"/>
        </UiTestItemSquared>
        <UiTestItemSquared label="sm" size="md">
          <D1Icon icon="mouse" overlay size="sm"/>
        </UiTestItemSquared>
        <UiTestItemSquared label="md" size="md">
          <D1Icon icon="mouse" overlay size="md"/>
        </UiTestItemSquared>
        <UiTestItemSquared label="lg" size="md">
          <D1Icon icon="mouse" overlay size="lg"/>
        </UiTestItemSquared>
        <UiTestItemSquared label="xl" size="md">
          <D1Icon icon="mouse" overlay size="xl"/>
        </UiTestItemSquared>
        <UiTestItemSquared label="2xl" size="md">
          <D1Icon icon="mouse" overlay size="2xl"/>
        </UiTestItemSquared>
        <UiTestItemSquared label="3xl" size="md">
          <D1Icon icon="mouse" overlay size="3xl"/>
        </UiTestItemSquared>
      </UiTestItemFull>
      <UiTestItemFull :background="false">
        <UiTestItemSquared label="4xl" size="lg">
          <D1Icon icon="mouse" overlay size="4xl"/>
        </UiTestItemSquared>
        <UiTestItemSquared label="5xl" size="lg">
          <D1Icon icon="mouse" overlay size="5xl"/>
        </UiTestItemSquared>
        <UiTestItemSquared label="6xl" size="lg">
          <D1Icon icon="mouse" overlay size="6xl"/>
        </UiTestItemSquared>
        <UiTestItemSquared label="7xl" size="lg">
          <D1Icon icon="mouse" overlay size="7xl"/>
        </UiTestItemSquared>
        <UiTestItemSquared label="8xl" size="lg">
          <D1Icon icon="mouse" overlay size="8xl"/>
        </UiTestItemSquared>
        <UiTestItemSquared label="9xl" size="lg">
          <D1Icon icon="mouse" overlay size="9xl"/>
        </UiTestItemSquared>
      </UiTestItemFull>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Shape">
    <UiTestGroup>
      <UiTestItemSquared label="circle" size="md">
        <D1Icon :icon="image" circle size="4xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="square" size="md">
        <D1Icon :icon="image" square size="4xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="rect" size="md">
        <D1Icon :icon="image" rect size="4xl"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Rounded">
    <UiTestGroup>
      <UiTestItemSquared label="sm" size="md">
        <D1Icon :icon="image" rounded="sm" size="4xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="md" size="md">
        <D1Icon :icon="image" rounded="md" size="4xl"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="lg" size="md">
        <D1Icon :icon="image" rounded="lg" size="4xl"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Modification">
    <UiTestGroup>
      <UiTestItemSquared class="dir-rtl" label="Dir: false" size="md">
        <D1Icon icon="more_up"/>
      </UiTestItemSquared>
      <UiTestItemSquared class="dir-rtl" label="Dir: true" size="md">
        <D1Icon icon="more_up" dir/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Overlay" size="md">
        <D1Icon icon="home" size="xl" overlay/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Dynamic" size="md">
        <D1Icon icon="home" size="xl" dynamic/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Dynamic+Overlay" size="md">
        <D1Icon icon="home" size="xl" dynamic overlay/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Animation show" size="md">
        <D1Icon icon="home" size="xl" animation-show/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Animation show" size="md">
        <D1Icon :icon="{ value: GalaxyS23, size: 'contain' }" size="xl" animation-show/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Secondary" size="md">
        <D1Icon icon="mouse" size="xl" secondary/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Position">
    <UiTestGroup>
      <D1Icon icon="add_circle" start/>
      <D1Icon icon="cancel" end/>
      <D1Icon icon="cancel" end high/>
      <span style="order: 4">...</span>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Palette">
    <UiTestGroup>
      <UiTestItemSquared size="xs">
        <D1Icon as-palette icon="home"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Icon as-palette icon="home" class="d1-palette--cyan"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Icon icon="home" class="d1-palette--cyan"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Icon icon="home" inverse/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Icon as-palette icon="home" inverse class="d1-palette--cyan"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Icon as-palette icon="home" inverse/>
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
        <D1Icon
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
        <D1Icon
          :active="active"
          :disabled="disabled"
          :hide="hide"
          :turn="turn"
          icon="photo_camera"
        />
      </UiTestItemSquared>
      <UiTestItemSquared size="md">
        <D1Icon
          :active="active"
          :disabled="disabled"
          :hide="hide"
          :turn="turn"
          icon-active="add_a_photo"
        />
      </UiTestItemSquared>
      <UiTestItemSquared label="Type animation: type2" size="md">
        <D1Icon
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
        <D1Icon
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
      <UiTestItemSquared size="md">
        <D1Icon
          :active="active"
          :disabled="disabled"
          :hide="hide"
          :icon="image"
          :icon-active="image"
          :turn="turn"
          size="5xl"
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
        <D1Skeleton :active="skeleton">
          <D1Icon
            :is-skeleton="skeleton"
            icon="home"
          />
        </D1Skeleton>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Skeleton :active="skeleton">
          <D1Icon
            :is-skeleton="skeleton"
            icon="home"
            circle
          />
        </D1Skeleton>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Skeleton :active="skeleton">
          <D1Icon
            :is-skeleton="skeleton"
            icon="home"
            rect
            size="md"
          />
        </D1Skeleton>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
