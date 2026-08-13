import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Et as n,tn as r}from"./library-CUIf7uCS.js";import{d as i,l as a,m as o,n as s,r as c,t as l,u}from"./wiki-wIqBVsyI.js";import{n as d,t as f}from"./D1Skeleton-CTEnVdL2.js";import{i as p,n as m,r as h,t as g}from"./D1Slider-CxvLXarC.js";var _,v,y,b;function x(){return(x=e((()=>{l(),p(),_=[{name:`disabled`,type:`boolean`},{name:`inputAttrs`,type:`Partial<HTMLInputElement>`},{name:`isSkeleton`,type:`boolean`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`magnet`,type:`boolean`},{name:`marks`,type:`ListRecord<SliderMarkItem> | number[]`},{name:`max`,type:`NumberOrString`},{name:`min`,type:`NumberOrString`},{name:`minimumDistance`,type:`NumberOrString`},{name:`modelValue`,type:`string`},{name:`multiple`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`((value: string) => void)`},{name:`onUpdate:value`,type:`((value: string) => void)`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`showThumbLabel`,type:`boolean`},{name:`step`,type:`NumberOrString`},{name:`value`,type:`SliderValueProp`},{name:`vertical`,type:`boolean`}],v=[{name:`mark`,description:`Slot for mark custom rendering / Слот для пользовательского рендеринга метки`,properties:[{name:`props`,type:`(SliderMarkSlot) | undefined`}]},{name:`maxLabel`,description:`Slot for max thumb label / Слот для метки максимального ползунка`,properties:[{name:`props`,type:`(SliderThumbSlot) | undefined`}]},{name:`minLabel`,description:`Slot for min thumb label / Слот для метки минимального ползунка`,properties:[{name:`props`,type:`(SliderThumbSlot) | undefined`}]}],y=[{name:`change`,description:`Emitted on slider value commit / Срабатывает при подтверждении значения слайдера`,properties:[{name:`detail`,type:`SliderEventDetail`}]},{name:`changeLite`,description:`Emitted on slider value commit (lite version) / Срабатывает при подтверждении значения слайдера (упрощенная версия)`,properties:[{name:`value`,type:`SliderValueType`}]},{name:`input`,description:`Emitted on slider value input / Срабатывает при вводе значения слайдера`,properties:[{name:`detail`,type:`SliderEventDetail`}]},{name:`inputLite`,description:`Emitted on slider value input (lite version) / Срабатывает при вводе значения слайдера (упрощенная версия)`,properties:[{name:`value`,type:`SliderValueType`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`SliderValueType`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`SliderValueType`}]}],b={component:`Slider`,props:_,slots:v,events:y,defaults:h,wikiDesign:s}})))()}var S;function C(){return(C=e((()=>{i(),a(),x(),S=new u(b.component,b.props,b.defaults,b.wikiDesign,c,o)})))()}var w=t({Slider:()=>E,SliderMarks:()=>k,SliderMultiple:()=>O,SliderOrientation:()=>D,SliderSkeleton:()=>j,SliderVModel:()=>A,__namedExportsOrder:()=>M,default:()=>T}),T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{m(),C(),d(),n(),T={title:`Ui/Slider`,component:g,parameters:{design:`d1`,docs:{description:{component:S.getDescription()}}},argTypes:S.getWiki(),args:S.getValues()},E={render:e=>({components:{D1Slider:g},setup:()=>({args:e}),template:`
      <D1Slider v-bind="args" />
    `})},D={name:`Ориентация`,render:()=>({components:{D1Slider:g},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Horizontal</div>
            <D1Slider :value="40" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Vertical</div>
            <D1Slider vertical :value="60" />
          </div>
        </div>
    `})},O={name:`Выбор диапазона`,render:()=>({components:{D1Slider:g},template:`
        <D1Slider multiple :minimumDistance="10" />
    `})},k={name:`Метки и деления`,render:()=>({components:{D1Slider:g},setup(){return{customMarks:[{mark:0,label:`0%`},{mark:25,label:`25%`},{mark:50,label:`50%`},{mark:75,label:`75%`},{mark:100,label:`100%`}]}},template:`
        <D1Slider :marks="customMarks" magnet :step="5" />
    `})},A={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Slider:g},setup(){return{sliderValue:r(40)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: <strong>{{ sliderValue }}</strong></span>
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="sliderValue = 25">Set 25</button>
            <button class="wiki-storybook-button" @click="sliderValue = 75">Set 75</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="sliderValue = 0">Clear</button>
          </div>
          <D1Slider v-model="sliderValue" :min="0" :max="100" />
        </div>
    `})},j={name:`Скелетон`,render:()=>({components:{D1Slider:g,D1Skeleton:f},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Slider isSkeleton />
            <D1Slider isSkeleton multiple />
          </div>
        </D1Skeleton>
    `})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Slider
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Slider v-bind="args" />
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Ориентация',
  render: () => ({
    components: {
      D1Slider
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Horizontal</div>
            <D1Slider :value="40" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--lg wiki-storybook-item--padding wiki-storybook-item--center">
            <div class="wiki-storybook-item__label">Vertical</div>
            <D1Slider vertical :value="60" />
          </div>
        </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Выбор диапазона',
  render: () => ({
    components: {
      D1Slider
    },
    template: \`
        <D1Slider multiple :minimumDistance="10" />
    \`
  })
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Метки и деления',
  render: () => ({
    components: {
      D1Slider
    },
    setup() {
      return {
        customMarks: [{
          mark: 0,
          label: '0%'
        }, {
          mark: 25,
          label: '25%'
        }, {
          mark: 50,
          label: '50%'
        }, {
          mark: 75,
          label: '75%'
        }, {
          mark: 100,
          label: '100%'
        }]
      };
    },
    template: \`
        <D1Slider :marks="customMarks" magnet :step="5" />
    \`
  })
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Slider
    },
    setup() {
      return {
        sliderValue: ref(40)
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Current value: <strong>{{ sliderValue }}</strong></span>
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="sliderValue = 25">Set 25</button>
            <button class="wiki-storybook-button" @click="sliderValue = 75">Set 75</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="sliderValue = 0">Clear</button>
          </div>
          <D1Slider v-model="sliderValue" :min="0" :max="100" />
        </div>
    \`
  })
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Slider,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Slider isSkeleton />
            <D1Slider isSkeleton multiple />
          </div>
        </D1Skeleton>
    \`
  })
}`,...j.parameters?.docs?.source}}},M=[`Slider`,`SliderOrientation`,`SliderMultiple`,`SliderMarks`,`SliderVModel`,`SliderSkeleton`]})))()}export{D as a,N as c,O as i,S as l,E as n,j as o,k as r,A as s,w as t,C as u};