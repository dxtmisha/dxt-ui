<script setup lang="ts">
import { ref } from 'vue'
import {
  UiTestButton,
  UiTestContainer,
  UiTestGroup,
  UiTestItemFull,
  UiTestItemSquared,
  UiTestTitle
} from '@dxt-ui/test'

import D1Image from '../components/Ui/Image/D1Image.vue'

import DX1228 from '../assets/Images/DX12-28.png'
import FX135 from '../assets/Images/FX135.png'
import GalaxyS23 from '../assets/Images/GalaxyS23.png'
import GalaxyZFlip5 from '../assets/Images/GalaxyZFlip5.png'
import GalaxyZFold5 from '../assets/Images/GalaxyZFold5.png'
import { Icons } from '@dxt-ui/functional'

import type { ImageExpose } from '@dxt-ui/constructor/Image'

const image = 'https://drscdn.500px.org/photo/292683549/q%3D90_m%3D2048/v2?sig=57a983b1ae345a1157df3caa67f49360d0dd6741e89a1f8c2393c9e894499492'

Icons.add('fx-135', FX135)
Icons.add('galaxy-s23', GalaxyS23)

const iconElement = ref<ImageExpose>()
const imageElement = ref<ImageExpose>()

const disabled = ref<boolean>(false)
const turn = ref<boolean>(false)

const load = ref<boolean>(false)
const onLoad = () => {
  load.value = true
}
</script>

<template>
  <UiTestTitle title="Image"/>

  <UiTestContainer label="Icon">
    <UiTestGroup>
      <UiTestItemSquared size="xs">
        <D1Image value="search"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Image value="menu"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Image value="home"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Image value="fx-135"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <D1Image value="galaxy-s23"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Image">
    <UiTestGroup>
      <UiTestItemSquared>
        <D1Image :value="image"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Turn">
        <D1Image :value="image" turn/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Disabled">
        <D1Image :value="image" disabled/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Hide">
        <D1Image :value="image" hide/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Size">
    <UiTestGroup>
      <UiTestItemSquared label="Auto">
        <D1Image :value="image" size="auto"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Contain">
        <D1Image :value="image" size="contain"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Cover">
        <D1Image :value="image" size="cover"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Coordinator: [0, 50, 50, 0]">
        <D1Image :value="image" :coordinator="[0, 50, 50, 0]"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="x: 24px, y: 32px">
        <D1Image :value="image" x="24px" y="32px"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Adaptive">
    <UiTestGroup>
      <UiTestItemSquared>
        <D1Image :value="DX1228" adaptive object-width="63.5"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <D1Image :value="FX135" adaptive object-width="139.5"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <D1Image :value="GalaxyS23" adaptive object-width="76.2"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <D1Image :value="GalaxyZFlip5" adaptive object-width="71.9"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <D1Image :value="GalaxyZFold5" adaptive object-width="129.9"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Adaptive/ group">
    <UiTestGroup>
      <UiTestItemSquared>
        <D1Image :value="DX1228" adaptive adaptive-group="lens" object-width="63.5"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <D1Image :value="FX135" adaptive adaptive-group="lens" object-width="139.5"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <D1Image :value="GalaxyS23" adaptive adaptive-group="phone" object-width="76.2"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <D1Image :value="GalaxyZFlip5" adaptive adaptive-group="phone" object-width="71.9"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <D1Image :value="GalaxyZFold5" adaptive adaptive-group="phone" object-width="129.9"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <div style="height: calc(100dvh * 1)"/>
  <UiTestContainer label="Adaptive/ always">
    <UiTestGroup>
      <UiTestItemSquared label="Always: false">
        <D1Image :value="DX1228" adaptive adaptive-group="lens" object-width="63.5"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Always: true">
        <D1Image :value="DX1228" adaptive adaptive-group="lens" adaptive-always object-width="63.5"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <D1Image :value="FX135" adaptive adaptive-group="lens" adaptive-always object-width="139.5"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Status">
    <UiTestGroup>
      <UiTestItemFull is-padding>
        <UiTestGroup>
          <UiTestButton :label="`Disabled: ${disabled}`" @click="disabled = !disabled"/>
          <UiTestButton :label="`Turn: ${turn}`" @click="turn = !turn"/>
        </UiTestGroup>
      </UiTestItemFull>
      <UiTestItemSquared :label="`Type: ${iconElement?.type}, data: ${iconElement?.data}`">
        <D1Image
          ref="iconElement"
          :disabled="disabled"
          :turn="turn"
          value="home"
        />
      </UiTestItemSquared>
      <UiTestItemSquared :label="`Load: ${load}, type: ${imageElement?.type}, data: ${imageElement?.data}`">
        <D1Image
          ref="imageElement"
          :disabled="disabled"
          :turn="turn"
          :value="image"
          @load="onLoad"
        />
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
