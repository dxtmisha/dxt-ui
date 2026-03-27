import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-CMC-2lzg.js";import{i as l,n as u,r as d,t as f}from"./D1HorizontalScroll-BxC3-GCJ.js";var p,m,h,g,_=e((()=>{c(),s(),l(),p=[{name:`align`,type:`string`,option:[`block`,`center`,`left`,`right`]},{name:`flush`,type:`boolean`},{name:`tag`,type:`string`}],m=[{name:`default`}],h=[],g={component:`HorizontalScroll`,props:p,slots:m,events:h,defaults:d,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,a,i)})),b=t({HorizontalScroll:()=>S,HorizontalScrollBasic:()=>C,__namedExportsOrder:()=>w,default:()=>x}),x,S,C,w,T=e((()=>{u(),y(),x={title:`Ui/HorizontalScroll`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1HorizontalScroll:f},setup:()=>({args:e}),template:`
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
    `})},C={name:`Базовое использование`,render:()=>({components:{D1HorizontalScroll:f},template:`
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
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`HorizontalScroll`,`HorizontalScrollBasic`]}));T();export{S as HorizontalScroll,C as HorizontalScrollBasic,w as __namedExportsOrder,x as default,y as i,T as n,v as r,b as t};