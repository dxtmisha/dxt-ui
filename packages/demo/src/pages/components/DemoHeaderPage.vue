<script setup lang="ts">
import { ref } from 'vue'
import type { HeaderProps } from '@dxtmisha/d1'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const activeTag = ref<NonNullable<HeaderProps['tag']>>('h3')
const iconTurn = ref<boolean>(false)
const iconHide = ref<boolean>(false)
const iconSelected = ref<boolean>(false)
const headerArea = ref<string>('header')
const trailingClicks = ref<number>(0)

const tags: Array<NonNullable<HeaderProps['tag']>> = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Header">
    <D1Section>
      <D1Group label="Heading Tags (h1 - h6)">
        <DemoBox>
          <D1Header tag="h1" label="Heading Level 1" caption="Display scale"/>
        </DemoBox>
        <DemoBox>
          <D1Header tag="h2" label="Heading Level 2" caption="Section scale"/>
        </DemoBox>
        <DemoBox>
          <D1Header tag="h3" label="Heading Level 3 (Default)" caption="Subsection scale"/>
        </DemoBox>
        <DemoBox>
          <D1Header tag="h4" label="Heading Level 4" caption="Card scale"/>
        </DemoBox>
        <DemoBox>
          <D1Header tag="h5" label="Heading Level 5" caption="Compact scale"/>
        </DemoBox>
        <DemoBox>
          <D1Header tag="h6" label="Heading Level 6" caption="Micro scale"/>
        </DemoBox>
      </D1Group>

      <D1Group label="Reactive Tag & Label ID">
        <DemoFlex>
          <D1Button
            v-for="tagOption in tags"
            :key="tagOption"
            :label="tagOption"
            :outline="activeTag !== tagOption"
            size="sm"
            @click="activeTag = tagOption"
          />
        </DemoFlex>
        <DemoValue label="activeTag" :value="activeTag"/>
        <DemoBox>
          <D1Header
            :tag="activeTag"
            label="Reactive Heading Tag"
            label-id="demo-header-reactive-id"
            caption="Inspect tagName and id"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Icons & Interactive Icon States">
        <DemoFlex>
          <D1Button label="Toggle Turn" size="sm" @click="iconTurn = !iconTurn"/>
          <D1Button label="Toggle Hide" size="sm" outline @click="iconHide = !iconHide"/>
          <D1Button label="Toggle Active Icon" size="sm" outline @click="iconSelected = !iconSelected"/>
        </DemoFlex>
        <DemoValue label="iconState" :value="{ iconTurn, iconHide, iconSelected }"/>
        <DemoBox>
          <D1Header
            data-testid="demo-header-icon-reactive"
            label="Configurable Leading Icon"
            caption="String and object icon formats"
            :icon="{ icon: 'expand_more', iconActive: 'check_circle' }"
            :selected="iconSelected"
            :icon-turn="iconTurn"
            :icon-hide="iconHide"
            icon-dir
            icon-palette
            :icon-attrs="{ 'data-demo-icon': 'custom' }"
          />
        </DemoBox>
        <DemoBox>
          <D1Header
            icon="folder"
            label="Static String Icon"
            caption="24 items"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Caption Modes & Numeric Zero">
        <DemoBox>
          <D1Header
            data-testid="demo-header-polite"
            label="Polite Live Caption"
            caption="Updated 2m ago"
          />
        </DemoBox>
        <DemoBox>
          <D1Header
            data-testid="demo-header-decorative"
            label="Decorative Caption"
            caption=" Decorative note"
            caption-decorative
          />
        </DemoBox>
        <DemoBox>
          <D1Header
            data-testid="demo-header-zero"
            :label="0"
            :caption="0"
          />
        </DemoBox>
      </D1Group>

      <D1Group label="Slots (#default, #caption, #trailing)">
        <DemoValue label="trailingClicks" :value="trailingClicks"/>
        <DemoBox>
          <D1Header data-testid="demo-header-slots" icon="dashboard">
            <template #default>
              <span>Custom Default Label Slot</span>
            </template>
            <template #caption>
              <span>Custom Caption Slot</span>
            </template>
            <template #trailing>
              <D1Button
                label="Action"
                size="sm"
                @click="trailingClicks += 1"
              />
            </template>
          </D1Header>
        </DemoBox>
      </D1Group>

      <D1Group label="Area Context Propagation">
        <DemoFlex>
          <D1Button label="area = header" size="sm" @click="headerArea = 'header'"/>
          <D1Button label="area = compact" size="sm" outline @click="headerArea = 'compact'"/>
        </DemoFlex>
        <DemoValue label="headerArea" :value="headerArea"/>
        <DemoBox>
          <D1Header
            data-testid="demo-header-area"
            label="Area-Aware Header"
            :area="headerArea"
          >
            <template #trailing>
              <D1Area>
                <template #header>
                  <span>Area slot: #header</span>
                </template>
                <template #compact>
                  <span>Area slot: #compact</span>
                </template>
              </D1Area>
            </template>
          </D1Header>
        </DemoBox>
      </D1Group>

      <D1Group label="Long Content & External Class Merging">
        <DemoBox>
          <D1Header
            data-testid="demo-header-merged"
            class="demo-header-custom"
            icon="article"
            label="Long Multilingual Header — Заголовок раздела — Tiêu đề phần 🚀"
            caption="Extended caption verifying flexbox spacing and wrapping resilience"
          >
            <template #trailing>
              <D1Badge label="New"/>
            </template>
          </D1Header>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss"></style>
