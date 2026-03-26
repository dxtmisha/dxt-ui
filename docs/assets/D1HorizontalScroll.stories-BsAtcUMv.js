import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{i as l,n as u,r as d,t as f}from"./D1HorizontalScroll-CiiZZnlq.js";var p,m,h=e((()=>{c(),s(),l(),p=[{name:`align`,type:`string`,option:[`block`,`center`,`left`,`right`]},{name:`flush`,type:`boolean`},{name:`tag`,type:`string`}],m={component:`HorizontalScroll`,props:p,defaults:d,wikiDesign:o}})),g,_=e((()=>{c(),n(),h(),g=new r(m.component,m.props,m.defaults,m.wikiDesign,i,a)})),v=t({HorizontalScroll:()=>b,HorizontalScrollBasic:()=>x,__namedExportsOrder:()=>S,default:()=>y}),y,b,x,S,C=e((()=>{u(),_(),y={title:`Ui/HorizontalScroll`,component:f,parameters:{design:`d1`,docs:{description:{component:g.getDescription()}}},argTypes:g.getWiki(),args:g.getValues()},b={render:e=>({components:{D1HorizontalScroll:f},setup:()=>({args:e}),template:`
      <D1HorizontalScroll v-bind="args">
      <template #default="{ classItem }">
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.06 25);">Item 1</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 50);">Item 2</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.07 70);">Item 3</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.97 0.08 85);">Item 4</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.08 110);">Item 5</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.07 140);">Item 6</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 160);">Item 7</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 175);">Item 8</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 195);">Item 9</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 215);">Item 10</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.05 240);">Item 11</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.06 265);">Item 12</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.07 285);">Item 13</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.08 305);">Item 14</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.08 325);">Item 15</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.08 345);">Item 16</div>
      </template>
    </D1HorizontalScroll>
    `})},x={name:`Базовое использование`,render:()=>({components:{D1HorizontalScroll:f},template:`
        <div class="wiki-storybook-flex-column">
          <D1HorizontalScroll style="width: 100%;">
            <template #default="{ classItem }">
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 305);">Item 1</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 325);">Item 2</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 345);">Item 3</div>
            </template>
          </D1HorizontalScroll>

          <D1HorizontalScroll style="width: 100%;">
            <template #default="{ classItem, classItemSelected }">
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.06 25);">Item 1</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 50);">Item 2</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.07 70);">Item 3</div>
              <div class="wiki-storybook-flex-center" :class="[classItem, classItemSelected]" style="width: 256px; height: 128px; background: oklch(0.97 0.08 85);">Item 4</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.08 110);">Item 5</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.07 140);">Item 6</div>
            </template>
          </D1HorizontalScroll>
        </div>
    `})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1HorizontalScroll
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1HorizontalScroll v-bind="args">
      <template #default="{ classItem }">
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.06 25);">Item 1</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 50);">Item 2</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.07 70);">Item 3</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.97 0.08 85);">Item 4</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.08 110);">Item 5</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.07 140);">Item 6</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 160);">Item 7</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 175);">Item 8</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 195);">Item 9</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.05 215);">Item 10</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.05 240);">Item 11</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.06 265);">Item 12</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.07 285);">Item 13</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.08 305);">Item 14</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.08 325);">Item 15</div>
        <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.93 0.08 345);">Item 16</div>
      </template>
    </D1HorizontalScroll>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Базовое использование',
  render: () => ({
    components: {
      D1HorizontalScroll
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1HorizontalScroll style="width: 100%;">
            <template #default="{ classItem }">
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 305);">Item 1</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 325);">Item 2</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="height: 128px; background: oklch(0.93 0.08 345);">Item 3</div>
            </template>
          </D1HorizontalScroll>

          <D1HorizontalScroll style="width: 100%;">
            <template #default="{ classItem, classItemSelected }">
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.94 0.06 25);">Item 1</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.06 50);">Item 2</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.07 70);">Item 3</div>
              <div class="wiki-storybook-flex-center" :class="[classItem, classItemSelected]" style="width: 256px; height: 128px; background: oklch(0.97 0.08 85);">Item 4</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.96 0.08 110);">Item 5</div>
              <div class="wiki-storybook-flex-center" :class="classItem" style="width: 256px; height: 128px; background: oklch(0.95 0.07 140);">Item 6</div>
            </template>
          </D1HorizontalScroll>
        </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S=[`HorizontalScroll`,`HorizontalScrollBasic`]}));C();export{b as HorizontalScroll,x as HorizontalScrollBasic,S as __namedExportsOrder,y as default,_ as i,C as n,g as r,v as t};