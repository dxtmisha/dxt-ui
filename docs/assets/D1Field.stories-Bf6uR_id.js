import{d as p,_ as e}from"./D1Field-6DnAP7sw.js";import{w as c,W as u,a as y,b}from"./wiki-BeIQM_4B.js";import"./iframe-B21bnPHY.js";import"./jsx-runtime-u17CrQMm.js";import{_ as F}from"./D1Skeleton-LvRPzgGQ.js";const D=[{name:"align",type:"string",option:["center","right","left"]},{name:"arrowAlign",type:"string",option:["center","right","left"]},{name:"arrowCarousel",type:"boolean"},{name:"arrowStepper",type:"boolean"},{name:"basic",type:"boolean"},{name:"block",type:"boolean"},{name:"boxed",type:"boolean"},{name:"cancel",type:"string",option:["auto","always","none"]},{name:"cancelShow",type:"boolean"},{name:"caption",type:"string | number"},{name:"captionDecorative",type:"boolean"},{name:"classic",type:"boolean"},{name:"counter",type:"string | number"},{name:"counterId",type:"string"},{name:"counterShow",type:"boolean"},{name:"counterTemplate",type:"string"},{name:"counterTop",type:"boolean"},{name:"detail",type:"Record<string, any>"},{name:"disabled",type:"boolean"},{name:"disabledNext",type:"boolean"},{name:"disabledPrevious",type:"boolean"},{name:"fieldCounterAttrs",type:"ConstrBind<FieldCounter>"},{name:"fieldLabelAttrs",type:"ConstrBind<FieldLabel>"},{name:"fieldMessageAttrs",type:"ConstrBind<FieldMessage>"},{name:"filled",type:"boolean"},{name:"focus",type:"boolean"},{name:"forceShowMessage",type:"boolean"},{name:"helperId",type:"string"},{name:"helperMessage",type:"string"},{name:"href",type:"string"},{name:"icon",type:"IconValue<Icon>"},{name:"iconArrowLeft",type:"IconValue<Icon>"},{name:"iconArrowRight",type:"IconValue<Icon>"},{name:"iconAttrs",type:"ConstrBind<Icon>"},{name:"iconClose",type:"IconValue<Icon>"},{name:"iconDir",type:"boolean"},{name:"iconHide",type:"boolean"},{name:"iconMinus",type:"IconValue<Icon>"},{name:"iconPalette",type:"boolean"},{name:"iconPlus",type:"IconValue<Icon>"},{name:"iconTrailing",type:"IconValue<Icon>"},{name:"iconTrailingDirOnly",type:"boolean"},{name:"iconTrailingPalette",type:"boolean"},{name:"iconTrailingTurnOnly",type:"boolean"},{name:"iconTurn",type:"boolean"},{name:"id",type:"string | number"},{name:"isSkeleton",type:"boolean"},{name:"isValue",type:"boolean"},{name:"label",type:"NumberOrString"},{name:"labelId",type:"string"},{name:"loading",type:"boolean | ConstrBind<Progress>"},{name:"maxlength",type:"string | number"},{name:"outlined",type:"boolean"},{name:"prefix",type:"string | number"},{name:"prefixId",type:"string"},{name:"readonly",type:"boolean"},{name:"required",type:"boolean"},{name:"selected",type:"boolean"},{name:"size",type:"string",option:["sm","md","lg","display"]},{name:"suffix",type:"string | number"},{name:"suffixId",type:"string"},{name:"textCancel",type:"TextValue"},{name:"to",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric"},{name:"tonal",type:"boolean"},{name:"validationId",type:"string"},{name:"validationMessage",type:"string"},{name:"value",type:"EventClickValue['value']"},{name:"width",type:"string",option:["custom"]}],d={component:"Field",props:D,defaults:p,wikiDesign:c},r=new u(d.component,d.props,d.defaults,d.wikiDesign,y,b),f={title:"Ui/Field",component:e,parameters:{design:"d1",docs:{description:{component:r.getDescription()}}},argTypes:r.getWiki(),args:r.getValues()},a={render:m=>({components:{D1Field:e},setup:()=>({args:m}),template:`
      <D1Field v-bind="args">
        <template v-slot:default="{binds}">
          <input :value="args.value" readonly v-bind="binds"/>
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
    `})},n={name:"Скелетон",render:()=>({components:{D1Field:e,D1Skeleton:F},template:`
        <D1Skeleton :active="true" style="max-width:280px">
          <D1Field isSkeleton label="Skeleton" counter="12" helper-message="Helper message: loading description.">
            <template #default="{id, className}">
              <input :id="id" :class="className" readonly/>
            </template>
          </D1Field>
        </D1Skeleton>
    `})},i={name:"Состояние значения",render:()=>({components:{D1Field:e},template:`
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
    `})},s={name:"Ширина",render:()=>({components:{D1Field:e},template:`
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
        <template v-slot:default="{binds}">
          <input :value="args.value" readonly v-bind="binds"/>
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const v=["Field","FieldCancel","FieldNavigation","FieldSkeleton","FieldValue","FieldWidth","FieldSlots"],S=Object.freeze(Object.defineProperty({__proto__:null,Field:a,FieldCancel:l,FieldNavigation:t,FieldSkeleton:n,FieldSlots:o,FieldValue:i,FieldWidth:s,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{S as F,a,r as b,i as c,s as d,l as e,t as f,n as g,o as h};
