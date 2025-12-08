import{d,_ as i}from"./D1Image-BkYefUZW.js";import{W as k,w as l,a as g,b as v}from"./wiki-fb_eBW86.js";import"./iframe-BlCC38XJ.js";import"./jsx-runtime-D_zvdyIk.js";import{d as c,i as r,p as b,a as y,b as u}from"./media-CRNZHAuU.js";const p=[{name:"adaptive",type:"boolean"},{name:"adaptiveAlways",type:"boolean"},{name:"adaptiveGroup",type:"string"},{name:"alt",type:"string"},{name:"coordinator",type:"number[] | any"},{name:"disabled",type:"boolean"},{name:"hide",type:"boolean"},{name:"lazy",type:"boolean"},{name:"objectHeight",type:"string | number"},{name:"objectWidth",type:"string | number"},{name:"picture",type:"ImagePicture"},{name:"size",type:"string",option:["auto","contain","cover"]},{name:"srcset",type:"string | Record<string, string>"},{name:"tagImg",type:"boolean"},{name:"turn",type:"boolean"},{name:"url",type:"string"},{name:"value",type:"string | any"},{name:"x",type:"string | number"},{name:"y",type:"string | number"}],m=new k("Image",p,d,l,g,v),w={title:"Ui/Image",component:i,parameters:{design:"d1",docs:{description:{component:m.getDescription()}}},argTypes:m.getWiki(),args:m.getValues()},e={render:n=>({components:{D1Image:i},setup:()=>({args:n}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
        <D1Image v-bind="args"/>
      </div>
    `})},o={name:"Тип значения",render:()=>({components:{D1Image:i},setup(){return{image1:r,demoPdf:c}},template:`
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
    `})},a={name:"Отображение",render:()=>({components:{D1Image:i},setup(){return{image1:r}},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: auto (default)</div>
            <D1Image :value="image1" size="auto" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: contain</div>
            <D1Image :value="image1" size="contain" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: cover</div>
            <D1Image :value="image1" size="cover" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator</div>
            <D1Image :value="image1" :coordinator="[60, 10, 10, 40]" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">x, y</div>
            <D1Image :value="image1" x="20%" y="-10%" tag-img/>
          </div>
        </div>
    `})},t={name:"Использование тега img",render:()=>({components:{D1Image:i},setup(){return{image1:r}},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">Background (default)</div>
            <D1Image :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + alt</div>
            <D1Image :value="image1" tag-img alt="Example image"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + lazy + srcset</div>
            <D1Image :value="image1" tag-img lazy alt="Responsive image" :srcset="{ '1x': image1, '2x': image1 }"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + picture</div>
            <D1Image :value="image1" tag-img alt="Adaptive image" :picture="{ 768: image1, 1024: image1 }"/>
          </div>
        </div>
    `})},s={name:"Адаптированные изображения",render:()=>({components:{D1Image:i},setup(){return{phone1:u,phone2:y,phone3:b}},template:`
        <div class="wiki-storybook-group">
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone1" adaptive object-width="76.2"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone2" adaptive object-width="71.9"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <D1Image :value="phone3" adaptive object-width="129.9" tag-img/>
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
            <D1Image :value="image1" size="auto" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: contain</div>
            <D1Image :value="image1" size="contain" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">size: cover</div>
            <D1Image :value="image1" size="cover" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">coordinator</div>
            <D1Image :value="image1" :coordinator="[60, 10, 10, 40]" tag-img/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">x, y</div>
            <D1Image :value="image1" x="20%" y="-10%" tag-img/>
          </div>
        </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Использование тега img',
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
            <div class="wiki-storybook-item__label">Background (default)</div>
            <D1Image :value="image1"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + alt</div>
            <D1Image :value="image1" tag-img alt="Example image"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + lazy + srcset</div>
            <D1Image :value="image1" tag-img lazy alt="Responsive image" :srcset="{ '1x': image1, '2x': image1 }"/>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--squared--md">
            <div class="wiki-storybook-item__label">tag-img + picture</div>
            <D1Image :value="image1" tag-img alt="Adaptive image" :picture="{ 768: image1, 1024: image1 }"/>
          </div>
        </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <D1Image :value="phone3" adaptive object-width="129.9" tag-img/>
          </div>
        </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const I=["Image","ImageType","ImageSize","ImageTagImg","ImageAdaptive"],f=Object.freeze(Object.defineProperty({__proto__:null,Image:e,ImageAdaptive:s,ImageSize:a,ImageTagImg:t,ImageType:o,__namedExportsOrder:I,default:w},Symbol.toStringTag,{value:"Module"}));export{f as I,e as a,m as b,o as c,t as d,a as e,s as f};
