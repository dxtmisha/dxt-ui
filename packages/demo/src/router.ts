import type { RouteRecordRaw } from 'vue-router'

import DemoHomePage from './pages/DemoHomePage.vue'

import DemoApiPage from './pages/DemoApiPage.vue'
import DemoGeoRefPage from './pages/DemoGeoRefPage.vue'

import DemoAccordionPage from './pages/components/DemoAccordionPage.vue'
import DemoActionSheetPage from './pages/components/DemoActionSheetPage.vue'
import DemoActionsPage from './pages/components/DemoActionsPage.vue'
import DemoAnchorPage from './pages/components/DemoAnchorPage.vue'
import DemoBadgePage from './pages/components/DemoBadgePage.vue'
import DemoBarsPage from './pages/components/DemoBarsPage.vue'
import DemoButtonPage from './pages/components/DemoButtonPage.vue'
import DemoButtonGroupPage from './pages/components/DemoButtonGroupPage.vue'
import DemoCellPage from './pages/components/DemoCellPage.vue'
import DemoCheckboxPage from './pages/components/DemoCheckboxPage.vue'
import DemoChipPage from './pages/components/DemoChipPage.vue'
import DemoChipGroupPage from './pages/components/DemoChipGroupPage.vue'
import DemoClientOnlyPage from './pages/components/DemoClientOnlyPage.vue'
import DemoDialogPage from './pages/components/DemoDialogPage.vue'
import DemoDraggableWrapperPage from './pages/components/DemoDraggableWrapperPage.vue'
import DemoIconPage from './pages/components/DemoIconPage.vue'
import DemoImagePage from './pages/components/DemoImagePage.vue'
import DemoInputPage from './pages/components/DemoInputPage.vue'
import DemoInputPhonePage from './pages/components/DemoInputPhonePage.vue'
import DemoListPage from './pages/components/DemoListPage.vue'
import DemoMaskPage from './pages/components/DemoMaskPage.vue'
import DemoModalPage from './pages/components/DemoModalPage.vue'
import DemoMenuPage from './pages/components/DemoMenuPage.vue'
import DemoMenuButtonPage from './pages/components/DemoMenuButtonPage.vue'
import DemoMenuChipPage from './pages/components/DemoMenuChipPage.vue'
import DemoMenuCountryPage from './pages/components/DemoMenuCountryPage.vue'
import DemoMotionAxisPage from './pages/components/DemoMotionAxisPage.vue'
import DemoMotionTransformPage from './pages/components/DemoMotionTransformPage.vue'
import DemoPageAreaPage from './pages/components/DemoPageAreaPage.vue'
import DemoProgressPage from './pages/components/DemoProgressPage.vue'
import DemoRadioPage from './pages/components/DemoRadioPage.vue'
import DemoScrollbarPage from './pages/components/DemoScrollbarPage.vue'
import DemoSelectableAreaPage from './pages/components/DemoSelectableAreaPage.vue'
import DemoSelectPage from './pages/components/DemoSelectPage.vue'
import DemoSnackbarPage from './pages/components/DemoSnackbarPage.vue'
import DemoSwitchPage from './pages/components/DemoSwitchPage.vue'
import DemoTextareaPage from './pages/components/DemoTextareaPage.vue'
import DemoTabsPage from './pages/components/DemoTabsPage.vue'
import DemoTooltipPage from './pages/components/DemoTooltipPage.vue'
import DemoWindowPage from './pages/components/DemoWindowPage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: DemoHomePage
  },
  {
    path: '/test-api',
    name: 'test-api',
    component: DemoApiPage
  },
  {
    path: '/geo-ref',
    name: 'geo-ref',
    component: DemoGeoRefPage
  },
  {
    path: '/component-accordion',
    name: 'component-accordion',
    component: DemoAccordionPage
  },
  {
    path: '/component-action-sheet',
    name: 'component-action-sheet',
    component: DemoActionSheetPage
  },
  {
    path: '/component-actions',
    name: 'component-actions',
    component: DemoActionsPage
  },
  {
    path: '/component-anchor',
    name: 'component-anchor',
    component: DemoAnchorPage
  },
  {
    path: '/component-badge',
    name: 'component-badge',
    component: DemoBadgePage
  },
  {
    path: '/component-bars',
    name: 'component-bars',
    component: DemoBarsPage
  },
  {
    path: '/component-button',
    name: 'component-button',
    component: DemoButtonPage
  },
  {
    path: '/component-button-group',
    name: 'component-button-group',
    component: DemoButtonGroupPage
  },
  {
    path: '/component-cell',
    name: 'component-cell',
    component: DemoCellPage
  },
  {
    path: '/component-checkbox',
    name: 'component-checkbox',
    component: DemoCheckboxPage
  },
  {
    path: '/component-chip',
    name: 'component-chip',
    component: DemoChipPage
  },
  {
    path: '/component-chip-group',
    name: 'component-chip-group',
    component: DemoChipGroupPage
  },
  {
    path: '/component-client-only',
    name: 'component-client-only',
    component: DemoClientOnlyPage
  },
  {
    path: '/component-dialog',
    name: 'component-dialog',
    component: DemoDialogPage
  },
  {
    path: '/component-draggable-wrapper',
    name: 'component-draggable-wrapper',
    component: DemoDraggableWrapperPage
  },
  {
    path: '/component-icon',
    name: 'component-icon',
    component: DemoIconPage
  },
  {
    path: '/component-image',
    name: 'component-image',
    component: DemoImagePage
  },
  {
    path: '/component-input',
    name: 'component-input',
    component: DemoInputPage
  },
  {
    path: '/component-input-phone',
    name: 'component-input-phone',
    component: DemoInputPhonePage
  },
  {
    path: '/component-list',
    name: 'component-list',
    component: DemoListPage
  },
  {
    path: '/component-mask',
    name: 'component-mask',
    component: DemoMaskPage
  },
  {
    path: '/component-modal',
    name: 'component-modal',
    component: DemoModalPage
  },
  {
    path: '/component-menu',
    name: 'component-menu',
    component: DemoMenuPage
  },
  {
    path: '/component-menu-button',
    name: 'component-menu-button',
    component: DemoMenuButtonPage
  },
  {
    path: '/component-menu-chip',
    name: 'component-menu-chip',
    component: DemoMenuChipPage
  },
  {
    path: '/component-menu-country',
    name: 'component-menu-country',
    component: DemoMenuCountryPage
  },
  {
    path: '/component-motion-axis',
    name: 'component-motion-axis',
    component: DemoMotionAxisPage
  },
  {
    path: '/component-motion-transform',
    name: 'component-motion-transform',
    component: DemoMotionTransformPage
  },
  {
    path: '/component-page-area',
    name: 'component-page-area',
    component: DemoPageAreaPage
  },
  {
    path: '/component-progress',
    name: 'component-progress',
    component: DemoProgressPage
  },
  {
    path: '/component-radio',
    name: 'component-radio',
    component: DemoRadioPage
  },
  {
    path: '/component-scrollbar',
    name: 'component-scrollbar',
    component: DemoScrollbarPage
  },
  {
    path: '/component-selectable-area',
    name: 'component-selectable-area',
    component: DemoSelectableAreaPage
  },
  {
    path: '/component-select',
    name: 'component-select',
    component: DemoSelectPage
  },
  {
    path: '/component-snackbar',
    name: 'component-snackbar',
    component: DemoSnackbarPage
  },
  {
    path: '/component-switch',
    name: 'component-switch',
    component: DemoSwitchPage
  },
  {
    path: '/component-textarea',
    name: 'component-textarea',
    component: DemoTextareaPage
  },
  {
    path: '/component-tabs',
    name: 'component-tabs',
    component: DemoTabsPage
  },
  {
    path: '/component-tooltip',
    name: 'component-tooltip',
    component: DemoTooltipPage
  },
  {
    path: '/component-window',
    name: 'component-window',
    component: DemoWindowPage
  }
]
