import{d as m,_ as s}from"./D1Image-5F0umFsu.js";import{W as d,w as k,a as l,b as v}from"./wiki-CHTdS6ju.js";import"./iframe-C6i5AnHO.js";import"./jsx-runtime-D_zvdyIk.js";import{d as c,i as r,p as b,a as y,b as p}from"./media-BgL0kgSk.js";const u=[{name:"adaptive",type:"boolean"},{name:"adaptiveAlways",type:"boolean"},{name:"adaptiveGroup",type:"string"},{name:"coordinator",type:"number[] | any"},{name:"disabled",type:"boolean"},{name:"hide",type:"boolean"},{name:"objectHeight",type:"string | number"},{name:"objectWidth",type:"string | number"},{name:"size",type:"string",option:["auto","contain","cover"]},{name:"turn",type:"boolean"},{name:"url",type:"string"},{name:"value",type:"string | any"},{name:"x",type:"string | number"},{name:"y",type:"string | number"}],t=new d("Image",u,m,k,l,v),g={title:"Ui/Image",component:s,parameters:{design:"d1",docs:{description:{component:t.getDescription()}}},argTypes:t.getWiki(),args:t.getValues()},e={render:n=>({components:{D1Image:s},setup:()=>({args:n}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
        <D1Image v-bind="args"/>
      </div>
    `})},i={name:"Тип значения",render:()=>({components:{D1Image:s},setup(){return{image1:r,demoPdf:c}},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Icon</div>
            <D1Image value="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Image/ contain</div>
            <D1Image :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--squared--max">
            <div class="wiki-storybook-item__label">PDF</div>
            <D1Image :value="demoPdf"/>
          </div>
        </div>
    `})},o={name:"Отображение",render:()=>({components:{D1Image:s},setup(){return{image1:r}},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: auto (default)</div>
            <D1Image :value="image1" size="auto"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: contain</div>
            <D1Image :value="image1" size="contain"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: cover</div>
            <D1Image :value="image1" size="cover"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator</div>
            <D1Image :value="image1" :coordinator="[60, 10, 10, 40]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">x, y</div>
            <D1Image :value="image1" x="20" y="-10"/>
          </div>
        </div>
    `})},a={name:"Адаптированные изображения",render:()=>({components:{D1Image:s},setup(){return{phone1:p,phone2:y,phone3:b}},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone1" adaptive object-width="76.2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone2" adaptive object-width="71.9"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone3" adaptive object-width="129.9"/>
          </div>
        </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Image
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
        <D1Image v-bind="args"/>
      </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Тип значения',
  render: () => ({
    components: {
      D1Image
    },
    setup() {
      return {
        image1,
        demoPdf
      };
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Icon</div>
            <D1Image value="home"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--lg">
            <div class="wiki-storybook-item__label">Image/ contain</div>
            <D1Image :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--squared--max">
            <div class="wiki-storybook-item__label">PDF</div>
            <D1Image :value="demoPdf"/>
          </div>
        </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Отображение',
  render: () => ({
    components: {
      D1Image
    },
    setup() {
      return {
        image1
      };
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: auto (default)</div>
            <D1Image :value="image1" size="auto"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: contain</div>
            <D1Image :value="image1" size="contain"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: cover</div>
            <D1Image :value="image1" size="cover"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator</div>
            <D1Image :value="image1" :coordinator="[60, 10, 10, 40]"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">x, y</div>
            <D1Image :value="image1" x="20" y="-10"/>
          </div>
        </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Адаптированные изображения',
  render: () => ({
    components: {
      D1Image
    },
    setup() {
      return {
        phone1,
        phone2,
        phone3
      };
    },
    template: \`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone1" adaptive object-width="76.2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone2" adaptive object-width="71.9"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone3" adaptive object-width="129.9"/>
          </div>
        </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};const w=["Image","ImageType","ImageSize","ImageAdaptive"],z=Object.freeze(Object.defineProperty({__proto__:null,Image:e,ImageAdaptive:a,ImageSize:o,ImageType:i,__namedExportsOrder:w,default:g},Symbol.toStringTag,{value:"Module"}));export{z as I,e as a,t as b,i as c,o as d,a as e};
