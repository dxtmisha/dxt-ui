import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Lt as n,_t as r}from"./iframe-CqYdK-d6.js";import{a as i,d as a,g as o,l as s,n as c,t as l,u}from"./wiki-BtAa-rOh.js";import{i as d,n as f,r as p,t as m}from"./D1Arrow-CKHBOe8l.js";var h,g,_,v,y=e((()=>{u(),l(),d(),h=[{name:`elementTarget`,type:`string | HTMLElement`},{name:`inverse`,type:`boolean`},{name:`position`,type:`string`,option:[`auto`,`top`,`bottom`,`left`,`right`]},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]}],g=[],_=[],v={component:`Arrow`,props:h,slots:g,events:_,defaults:p,wikiDesign:c}})),b,x=e((()=>{u(),i(),y(),b=new a(v.component,v.props,v.defaults,v.wikiDesign,s,o)})),S=t({Arrow:()=>w,ArrowBasic:()=>T,__namedExportsOrder:()=>E,default:()=>C}),C,w,T,E,D=e((()=>{f(),x(),r(),C={title:`Ui/Arrow`,component:m,parameters:{design:`d1`,docs:{description:{component:b.getDescription()}}},argTypes:b.getWiki(),args:b.getValues()},w={render:e=>({components:{D1Arrow:m},setup:()=>({args:e}),template:`
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
    `})},T={name:`Базовые`,render:()=>({components:{D1Arrow:m},setup(){let e=n(),t=n(),r=n(),i=n(`0px`),a=n(`0px`);return{elementBasic:e,elementTarget:t,elementArray:r,x:i,y:a,onClick:n=>{if(e.value){let o=e.value.getBoundingClientRect(),s=0,c=0;if(t.value){let e=t.value.getBoundingClientRect();s=e.width/2,c=e.height/2}i.value=n.clientX-o.left-s+`px`,a.value=n.clientY-o.top-c+`px`,requestAnimationFrame(()=>r.value?.update())}}}},template:`
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
    `})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Arrow`,`ArrowBasic`]}));D();export{w as Arrow,T as ArrowBasic,E as __namedExportsOrder,C as default,x as i,D as n,b as r,S as t};