import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n,f as r,i,n as a,s as o,t as s,u as c}from"./wiki-Cqdd-d3l.js";import{i as l,n as u,r as d,t as f}from"./D1CollageBar-15qA78KC.js";var p,m,h,g;function _(){return(_=e((()=>{s(),l(),p=[{name:`button`,type:`string | number | ConstrBind<ButtonProps>`},{name:`buttonAttrs`,type:`ConstrBind<ButtonProps>`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`detail`,type:`Record<string, any>`},{name:`href`,type:`string`},{name:`icon`,type:`IconValue<IconProps>`},{name:`index`,type:`string | number`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`position`,type:`string`,option:[`top`,`bottom`,`static`]},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`value`,type:`EventClickValue['value']`}],m=[{name:`body`,description:`Slot for the body / Слот для основного содержимого`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for the trailing element / Слот для замыкающего элемента`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],g={component:`CollageBar`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})))()}var v;function y(){return(y=e((()=>{n(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,i,r)})))()}var b=t({CollageBar:()=>S,CollageBarPositions:()=>C,CollageBarSlots:()=>w,__namedExportsOrder:()=>T,default:()=>x}),x,S,C,w,T;function E(){return(E=e((()=>{u(),y(),x={title:`Ui/CollageBar`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={},C={name:`Позиции`,render:()=>({components:{D1CollageBar:f},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar
              position="static"
              label="Static Bar"
              description="Standard caption layout"
              button="Action"
              icon="visibility"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar
              position="top"
              label="Top Overlay Bar"
              description="Gradient scrim at the top"
              icon="more_vert"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar
              position="bottom"
              label="Bottom Overlay Bar"
              description="Gradient scrim at the bottom"
              button="View"
              icon="visibility"
            />
          </div>
        </div>
    `})},w={name:`Использование слотов`,render:()=>({components:{D1CollageBar:f},template:`
        <D1CollageBar>
          <template #default>Default slot</template>
          <template #description>Description slot</template>
          <template #body>Body slot</template>
          <template #trailing>Trailing slot</template>
        </D1CollageBar>
    `})},T=[`CollageBar`,`CollageBarPositions`,`CollageBarSlots`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Позиции',
  render: () => ({
    components: {
      D1CollageBar
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar
              position="static"
              label="Static Bar"
              description="Standard caption layout"
              button="Action"
              icon="visibility"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar
              position="top"
              label="Top Overlay Bar"
              description="Gradient scrim at the top"
              icon="more_vert"
            />
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CollageBar
              position="bottom"
              label="Bottom Overlay Bar"
              description="Gradient scrim at the bottom"
              button="View"
              icon="visibility"
            />
          </div>
        </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1CollageBar
    },
    template: \`
        <D1CollageBar>
          <template #default>Default slot</template>
          <template #description>Description slot</template>
          <template #body>Body slot</template>
          <template #trailing>Trailing slot</template>
        </D1CollageBar>
    \`
  })
}`,...w.parameters?.docs?.source}}}})))()}export{E as a,b as i,C as n,v as o,w as r,y as s,S as t};