import{n as e,r as t}from"./chunk-BneVvdWh.js";import{It as n,gt as r}from"./iframe-InwAcaLb.js";import{a as i,d as a,l as o,m as s,n as c,t as l,u}from"./wiki-DiKtF90Q.js";import{i as d,n as f,r as p,t as m}from"./D1Arrow-CtINF4jy.js";var h,g,_=e((()=>{u(),l(),d(),h=[{name:`elementTarget`,type:`string | HTMLElement`},{name:`inverse`,type:`boolean`},{name:`position`,type:`string`,option:[`auto`,`top`,`bottom`,`left`,`right`]},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]}],g={component:`Arrow`,props:h,defaults:p,wikiDesign:c}})),v,y=e((()=>{u(),i(),_(),v=new a(g.component,g.props,g.defaults,g.wikiDesign,o,s)})),b=t({Arrow:()=>S,ArrowBasic:()=>C,__namedExportsOrder:()=>w,default:()=>x}),x,S,C,w,T=e((()=>{f(),y(),r(),x={title:`Ui/Arrow`,component:m,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1Arrow:m},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center">
        <div>
          <div
            style="
              width: 256px;
              margin-bottom: 32px;
              margin-left: 32px;
            "
          >
            <div
              id="id-arrow-target"
              style="
                padding: 8px;
                width: min-content;
                border-radius: 8px;
                background-color: oklch(90.2% 0.063 306.703);
              "
            >
              Target
            </div>
          </div>
          <div
            style="
              position: relative;
              width: 256px;
              height: 128px;
              border-radius: 16px;
              background-color: oklch(93.2% 0.032 255.585);
              border: 2px solid oklch(80.9% 0.105 251.813);
              box-shadow: 0 0 8px oklch(0.281 0.092 268.132 / 0.32);
            "
          >
            <D1Arrow v-bind="args"/>
          </div>
        </div>
      </div>
    `})},C={name:`Базовые`,render:()=>({components:{D1Arrow:m},setup(){let e=n(),t=n(),r=n(),i=n(`0px`),a=n(`0px`);return{elementBasic:e,elementTarget:t,elementArray:r,x:i,y:a,onClick:n=>{if(e.value){let o=e.value.getBoundingClientRect(),s=0,c=0;if(t.value){let e=t.value.getBoundingClientRect();s=e.width/2,c=e.height/2}i.value=n.clientX-o.left-s+`px`,a.value=n.clientY-o.top-c+`px`,requestAnimationFrame(()=>r.value?.update())}}}},template:`
        <div
          class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center"
          style="cursor: crosshair;"
          @click="onClick"
        >
          <div>
            <div
              style="
              opacity: 0.5;
              font-size: 14px;
              margin-bottom: 8px;
              text-align: center;
            "
            >
              Click to move target
            </div>
            <div
              ref="elementBasic"
              style="
              position: relative;
              margin-bottom: 96px;
              margin-left: 32px;
              z-index: 32;
            "
            >
              <div
                ref="elementTarget"
                id="id-arrow-target-2"
                style="
                position: absolute;
                padding: 8px;
                width: min-content;
                border-radius: 8px;
                background-color: oklch(90.2% 0.063 306.703);
                text-wrap: nowrap;
                pointer-events: none;
              "
                :style="{left: x, top: y}"
              >
                Target Element Example
              </div>
            </div>
            <div
              style="
              position: relative;
              width: 256px;
              height: 128px;
              border-radius: 16px;
              background-color: oklch(93.2% 0.032 255.585);
              border: 2px solid oklch(80.9% 0.105 251.813);
              box-shadow: 0 0 8px oklch(0.281 0.092 268.132 / 0.32);
            "
            >
              <D1Arrow
                ref="elementArray"
                position="auto"
                element-target="#id-arrow-target-2"
              />
            </div>
          </div>
        </div>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Arrow
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center">
        <div>
          <div
            style="
              width: 256px;
              margin-bottom: 32px;
              margin-left: 32px;
            "
          >
            <div
              id="id-arrow-target"
              style="
                padding: 8px;
                width: min-content;
                border-radius: 8px;
                background-color: oklch(90.2% 0.063 306.703);
              "
            >
              Target
            </div>
          </div>
          <div
            style="
              position: relative;
              width: 256px;
              height: 128px;
              border-radius: 16px;
              background-color: oklch(93.2% 0.032 255.585);
              border: 2px solid oklch(80.9% 0.105 251.813);
              box-shadow: 0 0 8px oklch(0.281 0.092 268.132 / 0.32);
            "
          >
            <D1Arrow v-bind="args"/>
          </div>
        </div>
      </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Arrow
    },
    setup() {
      const elementBasic = ref();
      const elementTarget = ref();
      const elementArray = ref();
      const x = ref('0px');
      const y = ref('0px');
      const onClick = (event: PointerEvent) => {
        if (elementBasic.value) {
          const rect = elementBasic.value.getBoundingClientRect();
          let offsetX = 0;
          let offsetY = 0;
          if (elementTarget.value) {
            const targetRect = elementTarget.value.getBoundingClientRect();
            offsetX = targetRect.width / 2;
            offsetY = targetRect.height / 2;
          }
          x.value = event.clientX - rect.left - offsetX + 'px';
          y.value = event.clientY - rect.top - offsetY + 'px';
          requestAnimationFrame(() => elementArray.value?.update());
        }
      };
      return {
        elementBasic,
        elementTarget,
        elementArray,
        x,
        y,
        onClick
      };
    },
    template: \`
        <div
          class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--center"
          style="cursor: crosshair;"
          @click="onClick"
        >
          <div>
            <div
              style="
              opacity: 0.5;
              font-size: 14px;
              margin-bottom: 8px;
              text-align: center;
            "
            >
              Click to move target
            </div>
            <div
              ref="elementBasic"
              style="
              position: relative;
              margin-bottom: 96px;
              margin-left: 32px;
              z-index: 32;
            "
            >
              <div
                ref="elementTarget"
                id="id-arrow-target-2"
                style="
                position: absolute;
                padding: 8px;
                width: min-content;
                border-radius: 8px;
                background-color: oklch(90.2% 0.063 306.703);
                text-wrap: nowrap;
                pointer-events: none;
              "
                :style="{left: x, top: y}"
              >
                Target Element Example
              </div>
            </div>
            <div
              style="
              position: relative;
              width: 256px;
              height: 128px;
              border-radius: 16px;
              background-color: oklch(93.2% 0.032 255.585);
              border: 2px solid oklch(80.9% 0.105 251.813);
              box-shadow: 0 0 8px oklch(0.281 0.092 268.132 / 0.32);
            "
            >
              <D1Arrow
                ref="elementArray"
                position="auto"
                element-target="#id-arrow-target-2"
              />
            </div>
          </div>
        </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w=[`Arrow`,`ArrowBasic`]}));T();export{S as Arrow,C as ArrowBasic,w as __namedExportsOrder,x as default,y as i,T as n,v as r,b as t};