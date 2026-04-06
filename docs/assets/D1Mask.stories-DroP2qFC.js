import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-COBgMBNI.js";import{i as l,n as u,r as d,t as f}from"./D1Mask-Bxn0rcCk.js";var p,m,h,g,_=e((()=>{c(),s(),l(),p=[{name:`align`,type:`string`,option:[`center`,`left`,`right`]},{name:`check`,type:`FieldPatternItemOrFunction`},{name:`currency`,type:`string`},{name:`currencyHide`,type:`boolean`},{name:`dir`,type:`string`,option:[`ltr`,`rtl`]},{name:`fraction`,type:`MaskFractionItem`},{name:`fullOnly`,type:`boolean`},{name:`groupSave`,type:`boolean`},{name:`inputAttrs`,type:`Partial<HTMLInputElement>`},{name:`language`,type:`string`},{name:`mask`,type:`MaskList`},{name:`match`,type:`MaskMatchItem`},{name:`name`,type:`string`},{name:`pattern`,type:`FieldPatternItemOrFunction`},{name:`special`,type:`MaskSpecialProp`},{name:`type`,type:`string`,option:[`number`,`full`,`datetime`,`date`,`year-month`,`year`,`month`,`day`,`day-month`,`time`,`hour-minute`,`hour`,`minute`,`second`,`text`,`number-format`,`currency`]},{name:`value`,type:`string | number`},{name:`valueDefault`,type:`string | number`},{name:`view`,type:`string`},{name:`visible`,type:`boolean`},{name:`visiblePartly`,type:`boolean`}],m=[],h=[{name:`beforeinput`,description:`Event triggered before input/ Событие перед вводом`,properties:[{name:`event`,type:`InputEvent`}]},{name:`blur`,description:`Event triggered on blur/ Событие при потере фокуса`,properties:[{name:`event`,type:`FocusEvent`}]},{name:`change`,description:`Event triggered on change/ Событие при изменении`,properties:[{name:`event`,type:`InputEvent`},{name:`value`,type:`FieldValidationItem`}]},{name:`changeLite`,description:`Event triggered on simplified change/ Событие при упрощенном изменении`,properties:[{name:`value`,type:`FieldValidationItem`}]},{name:`focus`,description:`Event triggered on focus/ Событие при фокусе`,properties:[{name:`event`,type:`FocusEvent`}]},{name:`input`,description:`Event triggered on input/ Событие при вводе`,properties:[{name:`event`,type:`InputEvent`},{name:`value`,type:`FieldValidationItem`}]},{name:`inputLite`,description:`Event triggered on simplified input/ Событие при упрощенном вводе`,properties:[{name:`value`,type:`FieldValidationItem`}]},{name:`keydown`,description:`Event triggered on key down/ Событие при нажатии клавиши`,properties:[{name:`event`,type:`KeyboardEvent`}]},{name:`keyup`,description:`Event triggered on key up/ Событие при отпускании клавиши`,properties:[{name:`event`,type:`KeyboardEvent`}]},{name:`paste`,description:`Event triggered on paste/ Событие при вставке`,properties:[{name:`event`,type:`ClipboardEvent`}]},{name:`reset`,description:`Event triggered on reset/ Событие при сбросе`,properties:[{name:`event`,type:`Event`}]}],g={component:`Mask`,props:p,slots:m,events:h,defaults:d,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,a,i)})),b=t({Mask:()=>S,MaskBasic:()=>C,MaskDateTypes:()=>k,MaskGroupSave:()=>E,MaskMatch:()=>D,MaskNumberTypes:()=>O,MaskSpecial:()=>w,MaskValidation:()=>T,__namedExportsOrder:()=>A,default:()=>x}),x,S,C,w,T,E,D,O,k,A,j=e((()=>{u(),y(),x={title:`Ui/Mask`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1Mask:f},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-group" >
      <D1Mask
        class="wiki-storybook-item wiki-storybook-item--auto wiki-storybook-item--padding"
        v-bind="args"
      />
    </div>
    `})},C={name:`Примеры масок`,render:()=>({components:{D1Mask:f},template:`
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
    `})},w={name:`Специальные символы`,render:()=>({components:{D1Mask:f},template:`
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
    `})},T={name:`Валидация`,render:()=>({components:{D1Mask:f},template:`
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
    `})},E={name:`Навигация по группам (groupSave)`,render:()=>({components:{D1Mask:f},template:`
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
    `})},D={name:`Допустимые символы (match)`,render:()=>({components:{D1Mask:f},template:`
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
    `})},O={name:`Числовые типы`,render:()=>({components:{D1Mask:f},template:`
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
    `})},k={name:`Типы дат и времени`,render:()=>({components:{D1Mask:f},template:`
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
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Mask`,`MaskBasic`,`MaskSpecial`,`MaskValidation`,`MaskGroupSave`,`MaskMatch`,`MaskNumberTypes`,`MaskDateTypes`]}));j();export{S as Mask,C as MaskBasic,k as MaskDateTypes,E as MaskGroupSave,D as MaskMatch,O as MaskNumberTypes,w as MaskSpecial,T as MaskValidation,A as __namedExportsOrder,x as default,y as i,j as n,v as r,b as t};