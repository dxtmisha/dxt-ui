import{d as k,_ as s}from"./D1Arrow-DqkKSnpA.js";import{w as u,W as w,a as y,b}from"./wiki-BeTUR4cU.js";import{r as t}from"./iframe-okvuAVTt.js";import"./jsx-runtime-u17CrQMm.js";const f=[{name:"elementTarget",type:"string | HTMLElement"},{name:"inverse",type:"boolean"},{name:"position",type:"string",option:["auto","top","bottom","left","right"]},{name:"size",type:"string",option:["sm","md","lg"]}],i={component:"Arrow",props:f,defaults:k,wikiDesign:u},a=new w(i.component,i.props,i.defaults,i.wikiDesign,y,b),h={title:"Ui/Arrow",component:s,parameters:{design:"d1",docs:{description:{component:a.getDescription()}}},argTypes:a.getWiki(),args:a.getValues()},o={render:e=>({components:{D1Arrow:s},setup:()=>({args:e}),template:`
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
    `})},r={name:"Базовые",render:()=>({components:{D1Arrow:s},setup(){const e=t(),n=t(),l=t(),c=t("0px"),d=t("0px");return{elementBasic:e,elementTarget:n,elementArray:l,x:c,y:d,onClick:p=>{if(e.value){const m=e.value.getBoundingClientRect();let g=0,v=0;if(n.value){const x=n.value.getBoundingClientRect();g=x.width/2,v=x.height/2}c.value=p.clientX-m.left-g+"px",d.value=p.clientY-m.top-v+"px",requestAnimationFrame(()=>l.value?.update())}}}},template:`
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
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const A=["Arrow","ArrowBasic"],R=Object.freeze(Object.defineProperty({__proto__:null,Arrow:o,ArrowBasic:r,__namedExportsOrder:A,default:h},Symbol.toStringTag,{value:"Module"}));export{R as A,o as a,a as b,r as c};
