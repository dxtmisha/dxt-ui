import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{t as n}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as r,l as i,n as a,o,t as s,u as c}from"./wiki-DwIxUKqL.js";import{i as l,n as u,r as d,t as f}from"./D1Actions-1PxP6cUx.js";var p,m,h,g,_=t((()=>{s(),l(),p=[{name:`align`,type:`string`,option:[`none`,`center`,`left`,`right`,`block`,`auto`]},{name:`area`,type:`string`},{name:`buttonAttrs`,type:`ConstrBind<ButtonProps>`},{name:`buttonSecondaryAttrs`,type:`ConstrBind<ButtonProps>`},{name:`flexible`,type:`string`,option:[`adaptiveSm`,`adaptiveMd`,`adaptiveLg`,`adaptiveXl`,`adaptive2xl`,`containerSm`,`containerMd`,`containerLg`,`containerXl`,`container2xl`]},{name:`list`,type:`ConstrBind<ButtonProps>[]`},{name:`listSecondary`,type:`ConstrBind<ButtonProps>[]`},{name:`padding`,type:`string`,option:[`none`,`sm`,`md`,`lg`,`ySm`,`yMd`,`yLg`]},{name:`paddingByIndent`,type:`boolean`},{name:`wrap`,type:`boolean`}],m=[{name:`default`,description:`Slot for the main list of actions/ Слот для основного списка действий`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`secondary`,description:`Slot for the secondary list of actions/ Слот для вторичного списка действий`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],g={component:`Actions`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})),v,y=t((()=>{r(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,i,n)})),b=e({Actions:()=>S,ActionsSlots:()=>C,__namedExportsOrder:()=>w,default:()=>x}),x,S,C,w,T=t((()=>{u(),y(),x={title:`Ui/Actions`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={},C={name:`Использование слотов`,render:()=>({components:{D1Actions:f},template:`
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