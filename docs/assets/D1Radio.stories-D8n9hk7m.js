import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{Dt as n,qt as r}from"./iframe-53vFWNoU.js";import{t as i}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as a,l as o,n as s,o as c,t as l,u}from"./wiki-DwIxUKqL.js";import{n as d,t as f}from"./D1Skeleton-Cxor4m_W.js";import{i as p,n as m,r as h,t as g}from"./D1Radio-nzKKaQgT.js";var _,v,y,b,x=t((()=>{l(),p(),_=[{name:`adaptive`,type:`string`,option:[`rightAlways`,`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`block`,type:`boolean`},{name:`container`,type:`string`,option:[`rightSm`,`rightMd`,`rightLg`,`rightXl`,`right2xl`]},{name:`counter`,type:`string | number`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`counterTemplate`,type:`string`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterProps>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps>`},{name:`focus`,type:`boolean`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`iconCheckbox`,type:`string | ConstrBind<ImageProps> | null`},{name:`iconIndeterminate`,type:`string | ConstrBind<ImageProps> | null`},{name:`id`,type:`string | number`},{name:`indeterminate`,type:`boolean`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean`},{name:`itemCenter`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`loading`,type:`boolean | ConstrBind<ProgressProps>`},{name:`match`,type:`FieldMatch`},{name:`maxlength`,type:`string | number`},{name:`modelSelected`,type:`string`},{name:`modelValue`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelSelected`,type:`((value: string) => void)`},{name:`onUpdate:modelValue`,type:`((value: boolean) => void)`},{name:`onUpdate:selected`,type:`((value: string) => void)`},{name:`onUpdate:value`,type:`((value: boolean) => void)`},{name:`placeholder`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`selected`,type:`string`},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`tabindex`,type:`number`},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`boolean`},{name:`valueVariant`,type:`NumberOrStringOrBoolean`},{name:`valueVariantHide`,type:`NumberOrStringOrBoolean`}],v=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],y=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<boolean>`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`boolean`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`boolean`}]}],b={component:`Radio`,props:_,slots:v,events:y,defaults:h,wikiDesign:s}})),S,C=t((()=>{a(),c(),x(),S=new u(b.component,b.props,b.defaults,b.wikiDesign,o,i)})),w=e({Radio:()=>E,RadioSkeleton:()=>O,RadioSlots:()=>k,RadioVModel:()=>D,__namedExportsOrder:()=>A,default:()=>T}),T,E,D,O,k,A,j=t((()=>{m(),C(),d(),n(),T={title:`Ui/Radio`,component:g,parameters:{design:`d1`,docs:{description:{component:S.getDescription()}}},argTypes:S.getWiki(),args:S.getValues()},E={},D={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Radio:g},setup(){return{radioValue:r(`space`)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Selected path: <strong>{{ radioValue }}</strong></span>
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="radioValue = 'space'">To the Stars</button>
            <button class="wiki-storybook-button" @click="radioValue = 'ocean'">Into the Deep</button>
            <button class="wiki-storybook-button" @click="radioValue = ''">Reset choice</button>
          </div>
          <D1Radio
            v-model:selected="radioValue"
            value-variant="space"
            label="Space Exploration"
            description="Journey to the edge of the galaxy"
          />
          <D1Radio
            v-model:selected="radioValue"
            value-variant="ocean"
            label="Ocean Exploration"
            description="Discover the secrets of the abyss"
          />
        </div>
    `})},O={name:`Скелетон`,render:()=>({components:{D1Radio:g,D1Skeleton:f},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Radio isSkeleton label="Loading radio" />
            <D1Radio isSkeleton label="Another loading radio" />
          </div>
        </D1Skeleton>
    `})},k={name:`Использование слотов`,render:()=>({components:{D1Radio:g},template:`
        <D1Radio>
          <template #default>
            <strong>Custom label slot for Radio</strong>
          </template>
          <template #description>
            <em>Custom description slot for Radio</em>
          </template>
        </D1Radio>
    `})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Radio
    },
    setup() {
      return {
        radioValue: ref('space')
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span>Selected path: <strong>{{ radioValue }}</strong></span>
          </div>
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="radioValue = 'space'">To the Stars</button>
            <button class="wiki-storybook-button" @click="radioValue = 'ocean'">Into the Deep</button>
            <button class="wiki-storybook-button" @click="radioValue = ''">Reset choice</button>
          </div>
          <D1Radio
            v-model:selected="radioValue"
            value-variant="space"
            label="Space Exploration"
            description="Journey to the edge of the galaxy"
          />
          <D1Radio
            v-model:selected="radioValue"
            value-variant="ocean"
            label="Ocean Exploration"
            description="Discover the secrets of the abyss"
          />
        </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Radio,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1Radio isSkeleton label="Loading radio" />
            <D1Radio isSkeleton label="Another loading radio" />
          </div>
        </D1Skeleton>
    \`
  })
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Radio
    },
    template: \`
        <D1Radio>
          <template #default>
            <strong>Custom label slot for Radio</strong>
          </template>
          <template #description>
            <em>Custom description slot for Radio</em>
          </template>
        </D1Radio>
    \`
  })
}`,...k.parameters?.docs?.source}}},A=[`Radio`,`RadioVModel`,`RadioSkeleton`,`RadioSlots`]}));j();export{E as Radio,O as RadioSkeleton,k as RadioSlots,D as RadioVModel,A as __namedExportsOrder,T as default,C as i,j as n,S as r,w as t};