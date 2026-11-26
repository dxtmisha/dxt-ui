<script setup lang="ts">
import { ref } from 'vue'

import DemoBox from '../../components/DemoBox.vue'
import DemoFlex from '../../components/DemoFlex.vue'
import DemoLinkBlack from '../../components/DemoLinkBlack.vue'
import DemoValue from '../../components/DemoValue.vue'

const isSelectedState = ref<boolean>(true)
const isDisabledState = ref<boolean>(false)
const isLabelClamped = ref<boolean>(true)
const isSkeletonActive = ref<boolean>(true)
const isMountedDemo = ref<boolean>(true)

const clampText = 'Long description text inside a table cell to verify two-line clamping behavior without breaking the layout across narrow and wide viewports.'
const boundaryUnbroken = 'SuperLongUnbrokenIdentifierWithoutAnySpaces_0123456789_ABCDEFGHIJKLMNOPQRSTUVWXYZ'
</script>

<template>
  <DemoLinkBlack/>
  <D1Page label="TableItem">
    <D1Section>
      <D1Group label="Basic Usage & Data Formats">
        <table class="demo-table-item-page__table" aria-label="Basic table item examples">
          <tbody>
            <tr>
              <D1TableItem
                label="Standard Label"
                description="Supporting cell description"
                value="standard"
                index="name"
                key-item="row-1-name"
              />
              <D1TableItem
                :label="0"
                :description="0"
                value="0"
                :index="0"
              />
              <D1TableItem
                label="Numeric String"
                description="42"
                index="count"
              />
            </tr>
          </tbody>
        </table>
      </D1Group>

      <D1Group label="Horizontal Alignment (align)">
        <table class="demo-table-item-page__table" aria-label="Horizontal alignment examples">
          <tbody>
            <tr>
              <D1TableItem label="Left Aligned" description="align='left'" align="left"/>
              <D1TableItem label="Center Aligned" description="align='center'" align="center"/>
              <D1TableItem label="Right Aligned" description="align='right'" align="right"/>
            </tr>
          </tbody>
        </table>
      </D1Group>

      <D1Group label="Vertical Alignment (alignVertical)">
        <table class="demo-table-item-page__table" aria-label="Vertical alignment examples">
          <tbody>
            <tr class="demo-table-item-page__tall-row">
              <D1TableItem label="Top Aligned" description="alignVertical='top'" align-vertical="top"/>
              <D1TableItem label="Center Aligned" description="alignVertical='center'" align-vertical="center"/>
              <D1TableItem label="Bottom Aligned" description="alignVertical='bottom'" align-vertical="bottom"/>
            </tr>
          </tbody>
        </table>
      </D1Group>

      <D1Group label="Dividers (dividerX & dividerY)">
        <table class="demo-table-item-page__table" aria-label="Divider variations">
          <tbody>
            <tr>
              <D1TableItem label="Default Dividers" description="dividerX=true, dividerY=true"/>
              <D1TableItem label="No Vertical Divider" description="dividerX=false" :divider-x="false"/>
              <D1TableItem label="No Horizontal Divider" description="dividerY=false" :divider-y="false"/>
              <D1TableItem label="No Dividers" description="dividerX=false, dividerY=false" :divider-x="false" :divider-y="false"/>
            </tr>
          </tbody>
        </table>
      </D1Group>

      <D1Group label="Interactive States (selected, disabled, labelClamp)">
        <DemoFlex align="center">
          <D1Button label="Toggle Selected" @click="isSelectedState = !isSelectedState"/>
          <D1Button label="Toggle Disabled" @click="isDisabledState = !isDisabledState"/>
          <D1Button label="Toggle Label Clamp" @click="isLabelClamped = !isLabelClamped"/>
        </DemoFlex>
        <table class="demo-table-item-page__table" aria-label="Table item states">
          <tbody>
            <tr>
              <D1TableItem
                label="Controlled State Cell"
                description="Reflects live selected and disabled states"
                :selected="isSelectedState"
                :disabled="isDisabledState"
                index="state-controlled"
              />
              <D1TableItem
                :label="clampText"
                :label-clamp="isLabelClamped"
                index="state-clamp"
              />
              <D1TableItem
                label="Selected & Disabled"
                description="Combined modifier state"
                selected
                disabled
                index="state-combined"
              />
            </tr>
          </tbody>
        </table>
        <DemoFlex>
          <DemoValue label="Selected" :value="isSelectedState"/>
          <DemoValue label="Disabled" :value="isDisabledState"/>
          <DemoValue label="Label Clamp" :value="isLabelClamped"/>
        </DemoFlex>
      </D1Group>

      <D1Group label="Spanning & Custom Tag (colspan, rowspan, tag)">
        <table class="demo-table-item-page__table" aria-label="Spanning and custom tag examples">
          <tbody>
            <tr>
              <D1TableItem
                label="Row Header Cell"
                description="tag='th' with scope='row'"
                tag="th"
                scope="row"
                :rowspan="2"
                index="group"
              />
              <D1TableItem
                label="Merged Two Columns"
                description="colspan=2"
                :colspan="2"
                align="center"
                index="merged"
              />
            </tr>
            <tr>
              <D1TableItem label="Sub Column A" index="sub-a"/>
              <D1TableItem label="Sub Column B" align="right" index="sub-b"/>
            </tr>
          </tbody>
        </table>
      </D1Group>

      <D1Group label="Sticky Positioning (stickyTop & stickyLeft)">
        <div class="demo-table-item-page__scroll">
          <table class="demo-table-item-page__wide-table" aria-label="Sticky positioning examples">
            <tbody>
              <tr>
                <D1TableItem label="Pinned Corner" sticky-top sticky-left index="corner"/>
                <D1TableItem label="Pinned Top 1" sticky-top index="top-1"/>
                <D1TableItem label="Pinned Top 2" sticky-top index="top-2"/>
                <D1TableItem label="Pinned Top 3" sticky-top index="top-3"/>
                <D1TableItem label="Pinned Top 4" sticky-top index="top-4"/>
              </tr>
              <tr>
                <D1TableItem label="Pinned Left A" sticky-left index="left-a"/>
                <D1TableItem label="Scrollable Data A1" index="a1"/>
                <D1TableItem label="Scrollable Data A2" index="a2"/>
                <D1TableItem label="Scrollable Data A3" index="a3"/>
                <D1TableItem label="Scrollable Data A4" index="a4"/>
              </tr>
              <tr>
                <D1TableItem label="Pinned Left B" sticky-left index="left-b"/>
                <D1TableItem label="Scrollable Data B1" index="b1"/>
                <D1TableItem label="Scrollable Data B2" index="b2"/>
                <D1TableItem label="Scrollable Data B3" index="b3"/>
                <D1TableItem label="Scrollable Data B4" index="b4"/>
              </tr>
            </tbody>
          </table>
        </div>
      </D1Group>

      <D1Group label="Slots (#default, #description, #context) & Accessibility IDs">
        <table class="demo-table-item-page__table" aria-label="Slot and ARIA ID examples">
          <tbody>
            <tr>
              <D1TableItem
                label-id="demo-table-item-label"
                description-id="demo-table-item-desc"
                aria-labelledby="demo-table-item-label"
                aria-describedby="demo-table-item-desc"
                index="slotted"
              >
                <template #default>
                  <strong>Custom Default Slot</strong>
                </template>
                <template #description>
                  <em>Custom Description Slot</em>
                </template>
                <template #context>
                  <D1Chip label="Context Chip" readonly size="xs"/>
                </template>
              </D1TableItem>
              <D1TableItem label="Label + Context Slot" index="context-only">
                <template #context>
                  <D1Badge label="New" inline/>
                </template>
              </D1TableItem>
            </tr>
          </tbody>
        </table>
      </D1Group>

      <D1Group label="Skeleton State (isSkeleton)">
        <DemoFlex align="center">
          <D1Button label="Toggle Skeleton" @click="isSkeletonActive = !isSkeletonActive"/>
          <DemoValue label="Skeleton Active" :value="isSkeletonActive"/>
        </DemoFlex>
        <D1Skeleton :active="isSkeletonActive">
          <table class="demo-table-item-page__table" aria-label="Skeleton table items">
            <tbody>
              <tr>
                <D1TableItem label="Primary Cell Value" description="Secondary metadata" is-skeleton/>
                <D1TableItem label="Right Value" align="right" is-skeleton/>
              </tr>
            </tbody>
          </table>
        </D1Skeleton>
      </D1Group>

      <D1Group label="Boundary Values, Narrow Container & Lifecycle">
        <DemoFlex align="center">
          <D1Button label="Toggle Mount" @click="isMountedDemo = !isMountedDemo"/>
          <DemoValue label="Mounted" :value="isMountedDemo"/>
        </DemoFlex>
        <DemoBox size="sm" class="demo-table-item-page__narrow">
          <table v-if="isMountedDemo" class="demo-table-item-page__table" aria-label="Boundary value table items">
            <tbody>
              <tr>
                <D1TableItem :label="0" description="Numeric zero"/>
                <D1TableItem label="" description="Empty string"/>
              </tr>
              <tr>
                <D1TableItem label="   " description="Whitespace only"/>
                <D1TableItem label="Привет · Học tiếng Việt · 🚀" description="Unicode"/>
              </tr>
              <tr>
                <D1TableItem label="<img src=x onerror=alert(1)>" description="Escaped XSS"/>
                <D1TableItem :label="boundaryUnbroken" label-clamp/>
              </tr>
            </tbody>
          </table>
        </DemoBox>
      </D1Group>
    </D1Section>
  </D1Page>
</template>

<style lang="scss">
.demo-table-item-page {
  .d1-group {
    overflow-x: auto;
  }

  &__table {
    width: 100%;
    border-spacing: 0;
  }

  &__tall-row {
    height: 96px;
  }

  &__scroll {
    max-width: 100%;
    max-height: 140px;
    overflow: auto;
  }

  &__wide-table {
    min-width: 720px;
    border-spacing: 0;
  }

  &__narrow {
    max-width: 280px;
    overflow-x: auto;
  }
}
</style>
