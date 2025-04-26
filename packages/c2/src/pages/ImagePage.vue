<script setup lang="ts">
import {
  UiTestContainer,
  UiTestGroup,
  UiTestItemSquared,
  UiTestTitle
} from '@dxt-ui/test'

import C2Image from '../components/CcUi/Image/C2Image.vue'

import DX1228 from '../assets/Images/DX12-28.png'
import FX135 from '../assets/Images/FX135.png'
import GalaxyS23 from '../assets/Images/GalaxyS23.png'
import GalaxyZFlip5 from '../assets/Images/GalaxyZFlip5.png'
import GalaxyZFold5 from '../assets/Images/GalaxyZFold5.png'
import { Icons } from '@dxt-ui/functional'

const image = 'https://drscdn.500px.org/photo/292683549/q%3D90_m%3D2048/v2?sig=57a983b1ae345a1157df3caa67f49360d0dd6741e89a1f8c2393c9e894499492'

Icons.add('fx-135', FX135)
Icons.add('galaxy-s23', GalaxyS23)
</script>

<template>
  <UiTestTitle title="Image"/>

  <UiTestContainer label="Icon">
    <UiTestGroup>
      <UiTestItemSquared size="xs">
        <C2Image value="search"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <C2Image value="menu"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <C2Image value="home"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <C2Image value="fx-135"/>
      </UiTestItemSquared>
      <UiTestItemSquared size="xs">
        <C2Image value="galaxy-s23"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Image">
    <UiTestGroup>
      <UiTestItemSquared>
        <C2Image :value="image"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Turn">
        <C2Image :value="image" turn/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Disabled">
        <C2Image :value="image" disabled/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Hide">
        <C2Image :value="image" hide/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Size">
    <UiTestGroup>
      <UiTestItemSquared label="Auto">
        <C2Image :value="image" size="auto"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Contain">
        <C2Image :value="image" size="contain"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Cover">
        <C2Image :value="image" size="cover"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Coordinator: [0, 50, 50, 0]">
        <C2Image :value="image" :coordinator="[0, 50, 50, 0]"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="x: 24px, y: 32px">
        <C2Image :value="image" x="24px" y="32px"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Adaptive">
    <UiTestGroup>
      <UiTestItemSquared>
        <C2Image :value="DX1228" adaptive object-width="63.5"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <C2Image :value="FX135" adaptive object-width="139.5"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <C2Image :value="GalaxyS23" adaptive object-width="76.2"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <C2Image :value="GalaxyZFlip5" adaptive object-width="71.9"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <C2Image :value="GalaxyZFold5" adaptive object-width="129.9"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <UiTestContainer label="Adaptive/ group">
    <UiTestGroup>
      <UiTestItemSquared>
        <C2Image :value="DX1228" adaptive adaptive-group="lens" object-width="63.5"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <C2Image :value="FX135" adaptive adaptive-group="lens" object-width="139.5"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <C2Image :value="GalaxyS23" adaptive adaptive-group="phone" object-width="76.2"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <C2Image :value="GalaxyZFlip5" adaptive adaptive-group="phone" object-width="71.9"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <C2Image :value="GalaxyZFold5" adaptive adaptive-group="phone" object-width="129.9"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>

  <div style="height: calc(100dvh * 1)"/>
  <UiTestContainer label="Adaptive/ always">
    <UiTestGroup>
      <UiTestItemSquared label="Always: false">
        <C2Image :value="DX1228" adaptive adaptive-group="lens" object-width="63.5"/>
      </UiTestItemSquared>
      <UiTestItemSquared label="Always: true">
        <C2Image :value="DX1228" adaptive adaptive-group="lens" adaptive-always object-width="63.5"/>
      </UiTestItemSquared>
      <UiTestItemSquared>
        <C2Image :value="FX135" adaptive adaptive-group="lens" adaptive-always object-width="139.5"/>
      </UiTestItemSquared>
    </UiTestGroup>
  </UiTestContainer>
</template>

<style lang="scss"></style>
