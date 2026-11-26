<script setup lang="ts">
import { ref } from 'vue'
import type { HeaderProps } from '@dxtmisha/d1'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const rootTag = ref<string>('main')
const headerTag = ref<NonNullable<HeaderProps['tag']>>('h1')
const iconTurn = ref<boolean>(false)
const iconHide = ref<boolean>(false)
const isSelected = ref<boolean>(false)
const pageArea = ref<string>('page')
const actionClicks = ref<number>(0)
const isLifecycleMounted = ref<boolean>(true)

const rootTags: readonly string[] = ['main', 'section', 'article', 'div', 'aside']
const headerTags: readonly NonNullable<HeaderProps['tag']>[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
const areaOptions: readonly string[] = ['page', 'block', 'compact']
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="Page" class="demo-page-page">
    <D1Section>
      <D1Group label="Default Semantic Page & Full Anatomy">
        <DemoBox>
          <D1Page
            data-testid="demo-page-full"
            headline="ACCOUNT OVERVIEW"
            label="Security & Access"
            caption="Active workspace"
            description="Manage authentication methods, session policies, and audit preferences for this page."
            icon="shield"
          >
            <p>Primary page content rendered inside the default slot with standard page spacing.</p>
          </D1Page>
        </DemoBox>
      </D1Group>

      <D1Group label="Polymorphic Root Tag & Header Heading Level">
        <DemoFlex>
          <D1Button
            v-for="tagOption in rootTags"
            :key="tagOption"
            :label="tagOption"
            :outline="rootTag !== tagOption"
            size="sm"
            @click="rootTag = tagOption"
          />
        </DemoFlex>
        <DemoFlex>
          <D1Button
            v-for="headerTagOption in headerTags"
            :key="headerTagOption"
            :label="'header: ' + headerTagOption"
            :outline="headerTag !== headerTagOption"
            size="sm"
            @click="headerTag = headerTagOption"
          />
        </DemoFlex>
        <DemoValue label="tags" :value="{ rootTag, headerTag }"/>
        <DemoBox>
          <D1Page
            data-testid="demo-page-reactive-tags"
            :tag="rootTag"
            :tag-header="headerTag"
            label="Semantic Page Container"
            label-id="demo-page-custom-label-id"
            description="Inspect root tagName, heading tagName, aria-labelledby, and aria-describedby."
            description-id="demo-page-custom-desc-id"
          >
            <p>Default slot content under custom root and header tags.</p>
          </D1Page>
        </DemoBox>
      </D1Group>

      <D1Group label="Icons, States, Decorative Caption & headerAttrs">
        <DemoFlex>
          <D1Button label="Toggle Icon Turn" size="sm" @click="iconTurn = !iconTurn"/>
          <D1Button label="Toggle Icon Hide" size="sm" outline @click="iconHide = !iconHide"/>
          <D1Button label="Toggle Selected" size="sm" outline @click="isSelected = !isSelected"/>
        </DemoFlex>
        <DemoValue label="states" :value="{ iconTurn, iconHide, isSelected }"/>
        <DemoBox class="d1-palette--blue">
          <D1Page
            data-testid="demo-page-icon-attrs"
            headline="WORKSPACE"
            label="Project Settings"
            caption="(read-only)"
            caption-decorative
            icon="expand_more"
            :icon-turn="iconTurn"
            :icon-hide="iconHide"
            icon-dir
            icon-palette
            :icon-attrs="{ 'data-page-icon': 'settings' }"
            :header-attrs="{ class: 'demo-page-header-extra' }"
          >
            <p>Header attributes and icon attributes merge non-destructively with top-level page props.</p>
          </D1Page>
        </DemoBox>
        <DemoBox>
          <D1Page
            data-testid="demo-page-icon-selected"
            label="Object & Selected Icon"
            caption="Selected icon swap"
            :icon="{ icon: 'star', iconActive: 'favorite', palette: 'amber' }"
            :selected="isSelected"
            description="Toggle Selected above to switch between star and favorite."
          />
        </DemoBox>
        <DemoBox dir="rtl" data-testid="demo-page-rtl">
          <D1Page
            icon="arrow_forward"
            icon-dir
            label="RTL Directional Icon"
            caption="Mirrored icon in RTL container"
            description="Verifies iconDir mirroring inside a right-to-left container."
          />
        </DemoBox>
        <DemoBox>
          <D1Page
            data-testid="demo-page-null-icon"
            label="Null Icon Page"
            :icon="null"
            description="Explicitly passes icon=null without rendering an icon element."
          />
        </DemoBox>
      </D1Group>

      <D1Group label="All Slots (#headline, #label, #caption, #trailing, #description, #default)">
        <DemoValue label="actionClicks" :value="actionClicks"/>
        <DemoBox>
          <D1Page data-testid="demo-page-slots">
            <template #headline>
              <span>SLOT HEADLINE</span>
            </template>
            <template #label>
              <span>Slot-Driven Page Title</span>
            </template>
            <template #caption>
              <span>Slot Caption</span>
            </template>
            <template #trailing>
              <D1Button label="Refresh" size="sm" @click="actionClicks += 1"/>
            </template>
            <template #description>
              <span>Custom description rendered via #description slot.</span>
            </template>
            <template #default>
              <p>Default slot content inside a slot-driven page layout.</p>
            </template>
          </D1Page>
        </DemoBox>
      </D1Group>

      <D1Group label="Compound Integrations">
        <DemoBox>
          <D1Page
            data-testid="demo-page-compound"
            headline="SYSTEM STATUS"
            label="Service Health"
            description="Combines D1Badge in #trailing with D1Bleed and D1Alert inside default content."
          >
            <template #trailing>
              <D1Badge overlap="static" label="Operational" palette="green"/>
            </template>
            <D1Bleed>
              <D1Alert
                label="All regions healthy"
                description="Background workers and API gateways are responding normally."
                icon="check_circle"
              />
            </D1Bleed>
          </D1Page>
        </DemoBox>
      </D1Group>

      <D1Group label="Cascading Area Context (Page vs Header)">
        <DemoFlex>
          <D1Button
            v-for="areaOption in areaOptions"
            :key="areaOption"
            :label="'area = ' + areaOption"
            :outline="pageArea !== areaOption"
            size="sm"
            @click="pageArea = areaOption"
          />
        </DemoFlex>
        <DemoValue label="pageArea" :value="pageArea"/>
        <DemoBox>
          <D1Page
            data-testid="demo-page-area"
            label="Area Context Container"
            :area="pageArea"
          >
            <template #trailing>
              <D1Area>
                <template #header>
                  <span data-testid="demo-page-trailing-area">Trailing Area: #header</span>
                </template>
                <template #page>
                  <span data-testid="demo-page-trailing-area">Trailing Area: #page</span>
                </template>
              </D1Area>
            </template>
            <D1Area>
              <template #page>
                <span data-testid="demo-page-body-area">Content Area: #page</span>
              </template>
              <template #block>
                <span data-testid="demo-page-body-area">Content Area: #block</span>
              </template>
              <template #compact>
                <span data-testid="demo-page-body-area">Content Area: #compact</span>
              </template>
            </D1Area>
          </D1Page>
        </DemoBox>
      </D1Group>

      <D1Group label="Accessibility">
        <DemoBox>
          <D1Page
            data-testid="demo-page-a11y-default"
            label="Default Landmark Page"
            description="Automatically links aria-labelledby and aria-describedby to generated IDs."
          >
            <p>Default landmark body content.</p>
          </D1Page>
        </DemoBox>
        <DemoBox>
          <D1Page
            data-testid="demo-page-a11y"
            tag="section"
            role="region"
            :header-attrs="{ labelId: 'demo-page-header-attrs-id', label: 'Accessible Landmark Page' }"
            description="Verifies role='region', headerAttrs.labelId fallback for aria-labelledby, descriptionId, and keyboard focus order."
            description-id="demo-page-a11y-description-id"
          >
            <template #trailing>
              <D1Button label="Header Action" size="sm" outline/>
            </template>
            <D1Button label="Body Action" size="sm"/>
          </D1Page>
        </DemoBox>
      </D1Group>

      <D1Group label="Boundary & Edge Cases">
        <DemoBox>
          <D1Page data-testid="demo-page-empty"/>
        </DemoBox>
        <DemoBox>
          <D1Page
            data-testid="demo-page-empty-strings"
            headline=""
            label=""
            caption=""
            description=""
            :icon="null"
          >
            <p>Empty string props do not render an empty .d1-page__body wrapper.</p>
          </D1Page>
        </DemoBox>
        <DemoBox>
          <D1Page
            data-testid="demo-page-whitespace"
            headline="   "
            label="   "
            caption="   "
            description="   "
          >
            <p>Whitespace props do not render an empty .d1-page__body wrapper.</p>
          </D1Page>
        </DemoBox>
        <DemoBox>
          <D1Page data-testid="demo-page-body-only" class="demo-page-custom">
            <p>Minimal page with default slot only (no .d1-page__body wrapper rendered).</p>
          </D1Page>
        </DemoBox>
        <DemoBox>
          <D1Page
            data-testid="demo-page-zero"
            :headline="0"
            :label="0"
            :caption="0"
            :description="0"
          >
            <p>Numeric zero rendered across headline, label, caption, and description.</p>
          </D1Page>
        </DemoBox>
        <DemoBox>
          <D1Page
            data-testid="demo-page-numeric"
            :headline="-42"
            label="A"
            :caption="99.95"
            :description="-12.5"
          >
            <p>Single-character label with negative and decimal numbers.</p>
          </D1Page>
        </DemoBox>
        <DemoBox>
          <D1Page
            data-testid="demo-page-unicode-xss"
            headline="Unicode • Tiếng Việt • Кириллица 🚀"
            label="SuperLongUnbrokenPageTitleWithoutAnySpacesOrHyphens1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            description="<script>alert('xss')</script> — <img src=x onerror=alert(1)>"
          >
            <p>Multilingual text, unbroken strings, and escaped XSS payloads rendered safely.</p>
          </D1Page>
        </DemoBox>
        <DemoBox class="demo-page-page__narrow-box">
          <D1Page
            data-testid="demo-page-narrow"
            headline="CONSTRAINED"
            label="Narrow Container Page"
            description="Verifies text wrapping inside a 280px container."
          >
            <p>Narrow body content.</p>
          </D1Page>
        </DemoBox>
      </D1Group>

      <D1Group label="SSR & Lifecycle">
        <DemoFlex align="center">
          <D1Button
            :label="isLifecycleMounted ? 'Unmount Page' : 'Mount Page'"
            size="sm"
            outline
            @click="isLifecycleMounted = !isLifecycleMounted"
          />
          <DemoValue label="Mounted" :value="isLifecycleMounted"/>
        </DemoFlex>
        <DemoBox v-if="isLifecycleMounted">
          <D1Page
            data-testid="demo-page-lifecycle"
            label="Conditional Lifecycle Page"
            description="Mounted and unmounted cleanly via v-if."
            icon="check_circle"
          >
            <p>Lifecycle content inside D1Page.</p>
          </D1Page>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-page-page {
  &__narrow-box {
    width: 100%;
    max-width: 280px;
  }
}
</style>
