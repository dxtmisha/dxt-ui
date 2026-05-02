import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,d as r,m as i,n as a,o,t as s,u as c}from"./wiki-Ck-JDNL8.js";import{i as l,n as u,r as d,t as f}from"./D1List-1YWGeSBq.js";var p,m,h,g,_=e((()=>{s(),l(),p=[{name:`ariaMultiselectable`,type:`boolean | undefined`},{name:`axis`,type:`string`,option:[`x`,`y`]},{name:`control`,type:`boolean | undefined`},{name:`disabled`,type:`boolean | undefined`},{name:`divider`,type:`boolean | undefined`},{name:`filterMode`,type:`boolean | undefined`},{name:`focus`,type:`NumberOrStringOrBoolean | undefined`},{name:`highlight`,type:`string | undefined`},{name:`highlightLengthStart`,type:`number | undefined`},{name:`iconArrowDown`,type:`IconValue<IconProps> | undefined`},{name:`iconArrowRight`,type:`IconValue<IconProps> | undefined`},{name:`itemAttrs`,type:`ConstrBind<ListItemProps> | undefined`},{name:`itemGroupAttrs`,type:`ConstrBind<ListItemProps> | undefined`},{name:`itemManagementAttrs`,type:`ConstrBind<ListItemProps> | undefined`},{name:`itemMenuAttrs`,type:`ConstrBind<ListItemProps> | undefined`},{name:`keyLabel`,type:`string | undefined`},{name:`keyValue`,type:`string | undefined`},{name:`list`,type:`ListRecord<ListItemProps> | undefined`},{name:`lite`,type:`boolean | undefined`},{name:`liteThreshold`,type:`number | undefined`},{name:`max`,type:`string | number | undefined`},{name:`role`,type:`string | undefined`},{name:`roleItem`,type:`string | undefined`},{name:`selected`,type:`ListSelectedList | undefined`},{name:`tabindex`,type:`string | number | undefined`},{name:`tag`,type:`string | undefined`,option:[`div`,`button`,`a`,`span`]}],m=[],h=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`close`,description:`Event for closing the list/ Событие закрытия списка`}],g={component:`List`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})),v,y=e((()=>{r(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,n,i)})),b=t({List:()=>S,ListHighlight:()=>w,ListLiteMode:()=>C,__namedExportsOrder:()=>T,default:()=>x}),x,S,C,w,T,E=e((()=>{u(),y(),x={title:`Ui/List`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={},C={name:`Облегчённый режим`,render:()=>({components:{D1List:f},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Without lite</div>
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
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">With lite</div>
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
    `})},w={name:`Выделение`,render:()=>({components:{D1List:f},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
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
          </div>
        </div>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Облегчённый режим',
  render: () => ({
    components: {
      D1List
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">Without lite</div>
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
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label wiki-storybook-item__label--static">With lite</div>
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Выделение',
  render: () => ({
    components: {
      D1List
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--padding wiki-storybook-item--squared--md">
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
          </div>
        </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T=[`List`,`ListLiteMode`,`ListHighlight`]}));E();export{S as List,w as ListHighlight,C as ListLiteMode,T as __namedExportsOrder,x as default,y as i,E as n,v as r,b as t};