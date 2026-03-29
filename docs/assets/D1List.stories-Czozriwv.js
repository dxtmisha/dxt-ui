import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-BtAa-rOh.js";import{i as l,n as u,r as d,t as f}from"./D1List-BtvF3Q4X.js";var p,m,h,g,_=e((()=>{c(),s(),l(),p=[{name:`ariaMultiselectable`,type:`boolean`},{name:`axis`,type:`string`,option:[`x`,`y`]},{name:`control`,type:`boolean`},{name:`disabled`,type:`boolean`},{name:`divider`,type:`boolean`},{name:`filterMode`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`highlight`,type:`string`},{name:`highlightLengthStart`,type:`number`},{name:`iconArrowDown`,type:`IconValue<Icon>`},{name:`iconArrowRight`,type:`IconValue<Icon>`},{name:`itemAttrs`,type:`ConstrBind<ListItem>`},{name:`itemGroupAttrs`,type:`ConstrBind<ListItem>`},{name:`itemManagementAttrs`,type:`ConstrBind<ListItem>`},{name:`itemMenuAttrs`,type:`ConstrBind<ListItem>`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ListRecord<any>`},{name:`lite`,type:`boolean`},{name:`liteThreshold`,type:`number`},{name:`max`,type:`string | number`},{name:`role`,type:`string`},{name:`roleItem`,type:`string`},{name:`selected`,type:`ListSelectedList`},{name:`tabindex`,type:`string | number`},{name:`tag`,type:`string`,option:[`div`,`button`,`a`,`span`]}],m=[],h=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:` value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`close`}],g={component:`List`,props:p,slots:m,events:h,defaults:d,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,a,i)})),b=t({List:()=>S,ListHighlight:()=>C,ListLiteMode:()=>w,__namedExportsOrder:()=>T,default:()=>x}),x,S,C,w,T,E=e((()=>{u(),y(),x={title:`Ui/List`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={},C={name:`Выделение`,render:()=>({components:{D1List:f},template:`
        <D1List
          :list="[
            {label: 'Project index example', value: 'projects', icon: 'folder'},
            {label: 'Advanced context options', value: 'experiments', icon: 'tune'},
            {label: 'Next examination notes', value: 'example', icon: 'description'},
            {label: 'User experience metrics', value: 'express', icon: 'insights'}
          ]"
          highlight="exam"
          :highlightLengthStart="4"
        />
    `})},w={name:`Облегчённый режим`,render:()=>({components:{D1List:f},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Without lite</div>
            <D1List
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">With lite</div>
            <D1List
              :lite="true"
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
        </div>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Выделение',
  render: () => ({
    components: {
      D1List
    },
    template: \`
        <D1List
          :list="[
            {label: 'Project index example', value: 'projects', icon: 'folder'},
            {label: 'Advanced context options', value: 'experiments', icon: 'tune'},
            {label: 'Next examination notes', value: 'example', icon: 'description'},
            {label: 'User experience metrics', value: 'express', icon: 'insights'}
          ]"
          highlight="exam"
          :highlightLengthStart="4"
        />
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Облегчённый режим',
  render: () => ({
    components: {
      D1List
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Without lite</div>
            <D1List
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">With lite</div>
            <D1List
              :lite="true"
              :liteThreshold="3"
              :list="[
                {label: 'Alpha', value: 'a', icon: 'bookmark'},
                {label: 'Beta', value: 'b', icon: 'label'},
                {label: 'Gamma', value: 'g', icon: 'flag'},
                {label: 'Delta', value: 'd', icon: 'star'},
                {label: 'Epsilon', value: 'e', icon: 'bolt'}
              ]"
            />
          </div>
        </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T=[`List`,`ListHighlight`,`ListLiteMode`]}));E();export{S as List,C as ListHighlight,w as ListLiteMode,T as __namedExportsOrder,x as default,y as i,E as n,v as r,b as t};