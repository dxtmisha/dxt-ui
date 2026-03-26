import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,l as i,m as a,n as o,t as s,u as c}from"./wiki-DiKtF90Q.js";import{i as l,n as u,r as d,t as f}from"./D1Mask-KP6RSjU-.js";var p,m,h=e((()=>{c(),s(),l(),p=[{name:`align`,type:`string`,option:[`center`,`left`,`right`]},{name:`check`,type:`FieldPatternItemOrFunction`},{name:`currency`,type:`string`},{name:`currencyHide`,type:`boolean`},{name:`dir`,type:`string`,option:[`ltr`,`rtl`]},{name:`fraction`,type:`MaskFractionItem`},{name:`fullOnly`,type:`boolean`},{name:`groupSave`,type:`boolean`},{name:`inputAttrs`,type:`Partial<HTMLInputElement>`},{name:`language`,type:`string`},{name:`mask`,type:`MaskList`},{name:`match`,type:`MaskMatchItem`},{name:`name`,type:`string`},{name:`pattern`,type:`FieldPatternItemOrFunction`},{name:`special`,type:`MaskSpecialProp`},{name:`type`,type:`string`,option:[`number`,`full`,`datetime`,`date`,`year-month`,`year`,`month`,`day`,`day-month`,`time`,`hour-minute`,`hour`,`minute`,`second`,`text`,`number-format`,`currency`]},{name:`value`,type:`string | number`},{name:`valueDefault`,type:`string | number`},{name:`view`,type:`string`},{name:`visible`,type:`boolean`},{name:`visiblePartly`,type:`boolean`}],m={component:`Mask`,props:p,defaults:d,wikiDesign:o}})),g,_=e((()=>{c(),n(),h(),g=new r(m.component,m.props,m.defaults,m.wikiDesign,i,a)})),v=t({Mask:()=>b,MaskBasic:()=>x,MaskDateTypes:()=>D,MaskGroupSave:()=>w,MaskMatch:()=>T,MaskNumberTypes:()=>E,MaskSpecial:()=>S,MaskValidation:()=>C,__namedExportsOrder:()=>O,default:()=>y}),y,b,x,S,C,w,T,E,D,O,k=e((()=>{u(),_(),y={title:`Ui/Mask`,component:f,parameters:{design:`d1`,docs:{description:{component:g.getDescription()}}},argTypes:g.getWiki(),args:g.getValues()},b={render:e=>({components:{D1Mask:f},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-group" >
      <D1Mask
        class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
        v-bind="args"
      />
    </div>
    `})},x={name:`Примеры масок`,render:()=>({components:{D1Mask:f},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Phone number format (+1 area code)</div>
            <D1Mask :mask="'+1 *** *** ** **'" placeholder="Enter phone number"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Auto format selection (multiple masks)</div>
            <D1Mask
              :mask="['*** *** ***', '**** **** ****']"
              placeholder="Auto format selection"
            />
          </div>
        </div>
    `})},S={name:`Специальные символы`,render:()=>({components:{D1Mask:f},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default special symbol (*)</div>
            <D1Mask :mask="'+7 *** *** ** **'" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom special symbol (X)</div>
            <D1Mask :mask="'XX.XX.XXXX'" special="X" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple special symbols (*, #, X)</div>
            <D1Mask :mask="'***-###-XXX'" :special="['*', '#', 'X']" />
          </div>
        </div>
    `})},C={name:`Валидация`,render:()=>({components:{D1Mask:f},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Pattern validation (6-9 digits only)</div>
            <D1Mask :mask="'*** *** ***'" pattern="[6-9]+" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Group-specific pattern (*, # groups)</div>
            <D1Mask :mask="'**:##'" :special="['*', '#']" :pattern="'[6-9]+'"/>
          </div>
        </div>
    `})},w={name:`Навигация по группам (groupSave)`,render:()=>({components:{D1Mask:f},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation enabled (groupSave: true)</div>
            <D1Mask :mask="'****-####'" :special="['*', '#']" :groupSave="true" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation disabled (groupSave: false)</div>
            <D1Mask :mask="'****-####'" :special="['*', '#']" :groupSave="false" />
          </div>
        </div>
    `})},T={name:`Допустимые символы (match)`,render:()=>({components:{D1Mask:f},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">HEX characters (0-9, A-F)</div>
            <D1Mask :mask="'***-***'" match="[A-F0-9]" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Letters only (A-Z, a-z)</div>
            <D1Mask :mask="'***-***'" match="[A-Za-z]" />
          </div>
        </div>
    `})},E={name:`Числовые типы`,render:()=>({components:{D1Mask:f},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Simple number</div>
            <D1Mask type="number" :fraction="2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Formatted number with separators</div>
            <D1Mask type="number-format" language="ru" :fraction="2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Currency (RUB)</div>
            <D1Mask type="currency" currency="RUB" language="ru" />
          </div>
        </div>
    `})},D={name:`Типы дат и времени`,render:()=>({components:{D1Mask:f},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Full date (DD.MM.YYYY)</div>
            <D1Mask type="date" language="ru" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Date and time</div>
            <D1Mask type="datetime" language="ru" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Time only (HH:MM)</div>
            <D1Mask type="hour-minute" />
          </div>
        </div>
    `})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Mask
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-group" >
      <D1Mask
        class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
        v-bind="args"
      />
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Примеры масок',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Phone number format (+1 area code)</div>
            <D1Mask :mask="'+1 *** *** ** **'" placeholder="Enter phone number"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Auto format selection (multiple masks)</div>
            <D1Mask
              :mask="['*** *** ***', '**** **** ****']"
              placeholder="Auto format selection"
            />
          </div>
        </div>
    \`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Специальные символы',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Default special symbol (*)</div>
            <D1Mask :mask="'+7 *** *** ** **'" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Custom special symbol (X)</div>
            <D1Mask :mask="'XX.XX.XXXX'" special="X" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Multiple special symbols (*, #, X)</div>
            <D1Mask :mask="'***-###-XXX'" :special="['*', '#', 'X']" />
          </div>
        </div>
    \`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Валидация',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Pattern validation (6-9 digits only)</div>
            <D1Mask :mask="'*** *** ***'" pattern="[6-9]+" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Group-specific pattern (*, # groups)</div>
            <D1Mask :mask="'**:##'" :special="['*', '#']" :pattern="'[6-9]+'"/>
          </div>
        </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Навигация по группам (groupSave)',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation enabled (groupSave: true)</div>
            <D1Mask :mask="'****-####'" :special="['*', '#']" :groupSave="true" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Smart navigation disabled (groupSave: false)</div>
            <D1Mask :mask="'****-####'" :special="['*', '#']" :groupSave="false" />
          </div>
        </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Допустимые символы (match)',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">HEX characters (0-9, A-F)</div>
            <D1Mask :mask="'***-***'" match="[A-F0-9]" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Letters only (A-Z, a-z)</div>
            <D1Mask :mask="'***-***'" match="[A-Za-z]" />
          </div>
        </div>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Числовые типы',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Simple number</div>
            <D1Mask type="number" :fraction="2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Formatted number with separators</div>
            <D1Mask type="number-format" language="ru" :fraction="2" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Currency (RUB)</div>
            <D1Mask type="currency" currency="RUB" language="ru" />
          </div>
        </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Типы дат и времени',
  render: () => ({
    components: {
      D1Mask
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Full date (DD.MM.YYYY)</div>
            <D1Mask type="date" language="ru" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Date and time</div>
            <D1Mask type="datetime" language="ru" />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Time only (HH:MM)</div>
            <D1Mask type="hour-minute" />
          </div>
        </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O=[`Mask`,`MaskBasic`,`MaskSpecial`,`MaskValidation`,`MaskGroupSave`,`MaskMatch`,`MaskNumberTypes`,`MaskDateTypes`]}));k();export{b as Mask,x as MaskBasic,D as MaskDateTypes,w as MaskGroupSave,T as MaskMatch,E as MaskNumberTypes,S as MaskSpecial,C as MaskValidation,O as __namedExportsOrder,y as default,_ as i,k as n,g as r,v as t};