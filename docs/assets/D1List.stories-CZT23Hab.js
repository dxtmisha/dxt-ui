import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n,f as r,i,l as a,n as o,t as s,u as c}from"./wiki-BMj2WokS.js";import{i as l,n as u,r as d,t as f}from"./D1List-B1Ji2uHF.js";var p,m,h,g;function _(){return(_=e((()=>{s(),l(),p=[{name:`ariaMultiselectable`,type:`boolean`},{name:`axis`,type:`string`,option:[`x`,`y`]},{name:`control`,type:`boolean`},{name:`disabled`,type:`boolean`},{name:`divider`,type:`boolean`},{name:`filterMode`,type:`boolean`},{name:`focus`,type:`NumberOrStringOrBoolean`},{name:`highlight`,type:`string`},{name:`highlightLengthStart`,type:`number`},{name:`iconArrowDown`,type:`IconValue<IconProps>`},{name:`iconArrowRight`,type:`IconValue<IconProps>`},{name:`iconSearch`,type:`IconValue<IconProps>`},{name:`inputSearchAttrs`,type:`ConstrBind<InputProps>`},{name:`itemAttrs`,type:`ConstrBind<ListItemProps>`},{name:`itemGroupAttrs`,type:`ConstrBind<ListItemProps>`},{name:`itemManagementAttrs`,type:`ConstrBind<ListItemProps>`},{name:`itemMenuAttrs`,type:`ConstrBind<ListItemProps>`},{name:`keyLabel`,type:`string`},{name:`keyValue`,type:`string`},{name:`list`,type:`ListRecord<ListItemProps>`},{name:`lite`,type:`boolean`},{name:`liteThreshold`,type:`number`},{name:`max`,type:`string | number`},{name:`role`,type:`string`},{name:`roleItem`,type:`string`},{name:`selected`,type:`ListSelectedList`},{name:`selectionStyle`,type:`string`,option:[`checkbox`,`none`,`radio`,`checkmark`]},{name:`showSearch`,type:`boolean`},{name:`tabindex`,type:`string | number`},{name:`tag`,type:`string`,option:[`div`,`button`,`a`,`span`]},{name:`textNotFound`,type:`TextValue`}],m=[],h=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`close`,description:`Event for closing the list/ Событие закрытия списка`}],g={component:`List`,props:p,slots:m,events:h,defaults:d,wikiDesign:o}})))()}var v;function y(){return(y=e((()=>{n(),a(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,i,r)})))()}var b=t({List:()=>S,ListHighlight:()=>w,ListLiteMode:()=>C,__namedExportsOrder:()=>T,default:()=>x}),x,S,C,w,T;function E(){return(E=e((()=>{u(),y(),x={title:`Ui/List`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={args:{filterMode:!0,showSearch:!0,control:!1}},C={name:`Облегчённый режим`,render:()=>({components:{D1List:f},template:`
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
  args: {
    filterMode: true,
    showSearch: true,
    control: false
  }
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
}`,...w.parameters?.docs?.source}}},T=[`List`,`ListLiteMode`,`ListHighlight`]})))()}export{E as a,C as i,S as n,v as o,w as r,y as s,b as t};