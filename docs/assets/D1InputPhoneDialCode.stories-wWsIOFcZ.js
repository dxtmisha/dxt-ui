import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Ft as n,nn as r}from"./iframe-B-LNhFWZ.js";import{d as i,m as a,n as o,o as s,s as c,t as l,u}from"./wiki-DgltPJFG.js";import{i as d,n as f,r as p,t as m}from"./D1InputPhoneDialCode-CFjyaA60.js";var h,g,_,v,y=t((()=>{l(),d(),h=[{name:`buttonAttrs`,type:`ConstrBind<ButtonProps>`},{name:`disabled`,type:`boolean`},{name:`iconArrowDown`,type:`IconValue<IconProps>`},{name:`labelType`,type:`string`,option:[`name`,`none`,`code`]},{name:`menuCountryAttrs`,type:`ConstrBind<MenuCountryProps>`},{name:`modelSelected`,type:`ListSelectedList`},{name:`onUpdate:modelSelected`,type:`((value: ListSelectedList) => void)`},{name:`onUpdate:selected`,type:`((value: ListSelectedList) => void)`},{name:`value`,type:`string`}],g=[],_=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`update:modelSelected`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`string`}]},{name:`update:selected`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`string`}]},{name:`updateValue`,description:`Event for updating the value/ Событие обновления значения`,properties:[{name:`value?`,type:`NumberOrStringOrBoolean | undefined`}]}],v={component:`InputPhoneDialCode`,props:h,slots:g,events:_,defaults:p,wikiDesign:o}})),b,x=t((()=>{i(),c(),y(),b=new u(v.component,v.props,v.defaults,v.wikiDesign,s,a)})),S=e({InputPhoneDialCode:()=>w,InputPhoneDialCodeVModel:()=>T,__namedExportsOrder:()=>E,default:()=>C}),C,w,T,E,D=t((()=>{f(),x(),n(),C={title:`Ui/InputPhoneDialCode`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1InputPhoneDialCode:m},setup:()=>({args:e}),template:`
      <D1InputPhoneDialCode v-bind="args" />
    `})},T={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1InputPhoneDialCode:m},setup(){return{selected:r(void 0)}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = [{ value: 'US' }]">Select US</button>
            <button class="wiki-storybook-button" @click="selected = [{ value: 'DE' }]">Select DE</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="selected = undefined">Clear</button>
          </div>
          <D1InputPhoneDialCode
            v-model:selected="selected"
            label-type="code"
          />
          <div>Selected: {{ selected?.[0]?.value ?? '—' }}</div>
        </div>
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1InputPhoneDialCode
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1InputPhoneDialCode v-bind="args" />
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1InputPhoneDialCode
    },
    setup() {
      return {
        selected: ref(undefined)
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <button class="wiki-storybook-button" @click="selected = [{ value: 'US' }]">Select US</button>
            <button class="wiki-storybook-button" @click="selected = [{ value: 'DE' }]">Select DE</button>
            <button class="wiki-storybook-button wiki-storybook-button-warning" @click="selected = undefined">Clear</button>
          </div>
          <D1InputPhoneDialCode
            v-model:selected="selected"
            label-type="code"
          />
          <div>Selected: {{ selected?.[0]?.value ?? '—' }}</div>
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E=[`InputPhoneDialCode`,`InputPhoneDialCodeVModel`]}));D();export{w as InputPhoneDialCode,T as InputPhoneDialCodeVModel,E as __namedExportsOrder,C as default,x as i,D as n,b as r,S as t};