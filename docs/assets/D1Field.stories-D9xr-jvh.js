import{d as m,_ as e}from"./D1Field-CZWXxD_d.js";import{W as p,w as c,a as u,b as y}from"./wiki-fb_eBW86.js";import"./iframe-BlCC38XJ.js";import"./jsx-runtime-D_zvdyIk.js";import{_ as b}from"./D1Skeleton-_eyYcCpr.js";const F=[{name:"align",type:"string",option:["center","right","left"]},{name:"arrowAlign",type:"string",option:["center","right","left"]},{name:"arrowCarousel",type:"boolean"},{name:"arrowStepper",type:"boolean"},{name:"basic",type:"boolean"},{name:"block",type:"boolean"},{name:"boxed",type:"boolean"},{name:"cancel",type:"string",option:["auto","always","none"]},{name:"cancelShow",type:"boolean"},{name:"caption",type:"string | number"},{name:"classic",type:"boolean"},{name:"counter",type:"string | number"},{name:"counterId",type:"string"},{name:"counterShow",type:"boolean"},{name:"counterTemplate",type:"string"},{name:"counterTop",type:"boolean"},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"disabledNext",type:"boolean"},{name:"disabledPrevious",type:"boolean"},{name:"fieldCounterAttrs",type:"ConstrBind<FieldCounterProps>"},{name:"fieldLabelAttrs",type:"ConstrBind<FieldLabelProps>"},{name:"fieldMessageAttrs",type:"ConstrBind<FieldMessageProps>"},{name:"filled",type:"boolean"},{name:"focus",type:"boolean"},{name:"forceShowMessage",type:"boolean"},{name:"helperId",type:"string"},{name:"helperMessage",type:"string"},{name:"icon",type:"IconValue<IconProps>"},{name:"iconArrowLeft",type:"IconValue<IconProps>"},{name:"iconArrowRight",type:"IconValue<IconProps>"},{name:"iconAttrs",type:"ConstrBind<IconProps>"},{name:"iconClose",type:"IconValue<IconProps>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconMinus",type:"IconValue<IconProps>"},{name:"iconPalette",type:"boolean"},{name:"iconPlus",type:"IconValue<IconProps>"},{name:"iconTrailing",type:"IconValue<IconProps>"},{name:"iconTrailingDirOnly",type:"boolean"},{name:"iconTrailingPalette",type:"boolean"},{name:"iconTrailingTurnOnly",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"id",type:"string | number"},{name:"isSkeleton",type:"boolean"},{name:"isValue",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"loading",type:"boolean | ConstrBind<ProgressProps>"},{name:"maxlength",type:"string | number"},{name:"outlined",type:"boolean"},{name:"prefix",type:"string | number"},{name:"readonly",type:"boolean"},{name:"required",type:"boolean"},{name:"selected",type:"boolean"},{name:"size",type:"string",option:["sm","md","lg","display"]},{name:"suffix",type:"string | number"},{name:"to",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric"},{name:"tonal",type:"boolean"},{name:"validationId",type:"string"},{name:"validationMessage",type:"string"},{name:"value",type:"EventClickValue['value']"},{name:"width",type:"string",option:["custom"]}],d=new p("Field",F,m,c,u,y),D={title:"Ui/Field",component:e,parameters:{design:"d1",docs:{description:{component:d.getDescription()}}},argTypes:d.getWiki(),args:d.getValues()},a={render:r=>({components:{D1Field:e},setup:()=>({args:r}),template:`
      <D1Field v-bind="args">
        <template v-slot:default="{id, className}">
          <input :value="args.value" :id="id" :class="className" readonly/>
        </template>
      </D1Field>
    `})},l={name:"Кнопка очистки",render:()=>({components:{D1Field:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Field cancel="auto" label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="auto" :cancel-show="true" label="auto + show">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="always" label="always">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
        </div>
    `})},t={name:"Навигация / стрелки",render:()=>({components:{D1Field:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Field arrow-carousel label="carousel (start)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 1" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-carousel label="carousel (end)" :disabled-next="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 9" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper align="center" label="stepper (center)">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="42" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper label="stepper (prev off)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="0" readonly/>
            </template>
          </D1Field>
        </div>
    `})},n={name:"Скелетон",render:()=>({components:{D1Field:e,D1Skeleton:b},template:`
        <D1Skeleton :active="true" style="max-width:280px">
          <D1Field isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </D1Field>
        </D1Skeleton>
    `})},s={name:"Состояние значения",render:()=>({components:{D1Field:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Field label="empty" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Hello" readonly/>
            </template>
          </D1Field>
          <D1Field label="forced (isValue)" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" placeholder="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value + isValue" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Data" readonly/>
            </template>
          </D1Field>
        </div>
    `})},i={name:"Ширина",render:()=>({components:{D1Field:e},template:`
        <div class="wiki-storybook-flex-column">
          <D1Field label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="320px" label="320px">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="50%" label="50%">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="min(100%,320px)" label="min(...)" >
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
        </div>
    `})},o={name:"Использование слотов",render:()=>({components:{D1Field:e},template:`
        <D1Field
          :cancelShow="true"
          label="Label prop"
          icon="home"
          icon-trailing="close"
        >
          <template #default="{id, className}">
            <input :id="id" :class="className" value="Value" readonly/>
          </template>
          <template #leading>Leading slot</template>
          <template #trailing>Trailing slot</template>
          <template #label><b>Label slot</b></template>
          <template #prefix>Prefix slot</template>
          <template #suffix>Suffix slot</template>
          <template #caption>Caption slot</template>
        </D1Field>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Field
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Field v-bind="args">
        <template v-slot:default="{id, className}">
          <input :value="args.value" :id="id" :class="className" readonly/>
        </template>
      </D1Field>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Кнопка очистки',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Field cancel="auto" label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="auto" :cancel-show="true" label="auto + show">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
          <D1Field cancel="always" label="always">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Value" readonly/>
            </template>
          </D1Field>
        </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Навигация / стрелки',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Field arrow-carousel label="carousel (start)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 1" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-carousel label="carousel (end)" :disabled-next="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Item 9" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper align="center" label="stepper (center)">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="42" readonly/>
            </template>
          </D1Field>
          <D1Field arrow-stepper label="stepper (prev off)" :disabled-previous="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="0" readonly/>
            </template>
          </D1Field>
        </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Field,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true" style="max-width:280px">
          <D1Field isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </D1Field>
        </D1Skeleton>
    \`
  })
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Состояние значения',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Field label="empty" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value" :is-value="false">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Hello" readonly/>
            </template>
          </D1Field>
          <D1Field label="forced (isValue)" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" placeholder="" readonly/>
            </template>
          </D1Field>
          <D1Field label="value + isValue" :is-value="true">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="Data" readonly/>
            </template>
          </D1Field>
        </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Ширина',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Field label="auto">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="320px" label="320px">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="50%" label="50%">
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
          <D1Field width="min(100%,320px)" label="min(...)" >
            <template #default="{id, className}">
              <input :id="id" :class="className" value="" readonly/>
            </template>
          </D1Field>
        </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Field
    },
    template: \`
        <D1Field
          :cancelShow="true"
          label="Label prop"
          icon="home"
          icon-trailing="close"
        >
          <template #default="{id, className}">
            <input :id="id" :class="className" value="Value" readonly/>
          </template>
          <template #leading>Leading slot</template>
          <template #trailing>Trailing slot</template>
          <template #label><b>Label slot</b></template>
          <template #prefix>Prefix slot</template>
          <template #suffix>Suffix slot</template>
          <template #caption>Caption slot</template>
        </D1Field>
    \`
  })
}`,...o.parameters?.docs?.source}}};const f=["Field","FieldCancel","FieldNavigation","FieldSkeleton","FieldValue","FieldWidth","FieldSlots"],S=Object.freeze(Object.defineProperty({__proto__:null,Field:a,FieldCancel:l,FieldNavigation:t,FieldSkeleton:n,FieldSlots:o,FieldValue:s,FieldWidth:i,__namedExportsOrder:f,default:D},Symbol.toStringTag,{value:"Module"}));export{S as F,a,d as b,s as c,i as d,l as e,t as f,n as g,o as h};
