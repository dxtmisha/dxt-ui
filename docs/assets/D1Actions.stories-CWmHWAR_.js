import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,d as r,g as i,l as a,n as o,t as s,u as c}from"./wiki-COBgMBNI.js";import{i as l,n as u,r as d,t as f}from"./D1Actions-DGKtJXy0.js";var p,m,h,g,_=e((()=>{c(),s(),l(),p=[{name:`align`,type:`string`,option:[`none`,`center`,`left`,`right`,`block`,`auto`]},{name:`buttonAttrs`,type:`ConstrBind<ButtonPropsBasic>`},{name:`buttonSecondaryAttrs`,type:`ConstrBind<ButtonPropsBasic>`},{name:`flexible`,type:`string`,option:[`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`,`containerSm`,`containerMd`,`containerLg`,`containerXl`,`container2xl`]},{name:`list`,type:`ConstrBind<ButtonPropsBasic>[]`},{name:`listSecondary`,type:`ConstrBind<ButtonPropsBasic>[]`},{name:`padding`,type:`string`,option:[`none`,`sm`,`md`,`lg`,`ySm`,`yMd`,`yLg`]},{name:`paddingByIndent`,type:`boolean`},{name:`wrap`,type:`boolean`}],m=[{name:`default`,description:`Slot for the main list of actions/ Слот для основного списка действий`},{name:`secondary`,description:`Slot for the secondary list of actions/ Слот для вторичного списка действий`}],h=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],g={component:`Actions`,props:p,slots:m,events:h,defaults:d,wikiDesign:o}})),v,y=e((()=>{c(),n(),_(),v=new r(g.component,g.props,g.defaults,g.wikiDesign,a,i)})),b=t({Actions:()=>S,ActionsSlots:()=>C,__namedExportsOrder:()=>w,default:()=>x}),x,S,C,w,T=e((()=>{u(),y(),x={title:`Ui/Actions`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={},C={name:`Использование слотов`,render:()=>({components:{D1Actions:f},template:`
        <D1Actions>
          <template #secondary>
            Secondary Slot
          </template>
          <template #default>
            Default Slot
          </template>
        </D1Actions>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Actions
    },
    template: \`
        <D1Actions>
          <template #secondary>
            Secondary Slot
          </template>
          <template #default>
            Default Slot
          </template>
        </D1Actions>
    \`
  })
}`,...C.parameters?.docs?.source}}},w=[`Actions`,`ActionsSlots`]}));T();export{S as Actions,C as ActionsSlots,w as __namedExportsOrder,x as default,y as i,T as n,v as r,b as t};