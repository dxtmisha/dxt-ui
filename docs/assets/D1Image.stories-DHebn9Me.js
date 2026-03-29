import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,c as r,d as i,g as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./wiki-BtAa-rOh.js";import{i as m,n as h,r as g,t as _}from"./D1Image-DTn0H-3B.js";var v,y,b,x,S=e((()=>{p(),f(),m(),v=[{name:`adaptive`,type:`boolean`},{name:`adaptiveAlways`,type:`boolean`},{name:`adaptiveGroup`,type:`string`},{name:`alt`,type:`string`},{name:`coordinator`,type:`number[] | any`},{name:`disabled`,type:`boolean`},{name:`fetchPriority`,type:`string`,option:[`auto`,`high`,`low`]},{name:`hide`,type:`boolean`},{name:`lazy`,type:`boolean`},{name:`objectHeight`,type:`string | number`},{name:`objectWidth`,type:`string | number`},{name:`picture`,type:`ImagePicture`},{name:`preloadOffset`,type:`string`},{name:`size`,type:`string`,option:[`auto`,`contain`,`cover`]},{name:`srcset`,type:`string | Record<string, string>`},{name:`tagImg`,type:`boolean`},{name:`turn`,type:`boolean`},{name:`url`,type:`string`},{name:`value`,type:`string | any`},{name:`x`,type:`string | number`},{name:`y`,type:`string | number`}],y=[],b=[{name:`load`,properties:[{name:`image`,type:`ImageEventData`}]}],x={component:`Image`,props:v,slots:y,events:b,defaults:g,wikiDesign:c}})),C,w=e((()=>{p(),n(),S(),C=new i(x.component,x.props,x.defaults,x.wikiDesign,s,a)})),T=t({Image:()=>D,ImageAdaptive:()=>j,ImageSize:()=>k,ImageTagImg:()=>A,ImageType:()=>O,__namedExportsOrder:()=>M,default:()=>E}),E,D,O,k,A,j,M,N=e((()=>{h(),w(),n(),E={title:`Ui/Image`,component:_,parameters:{design:`d1`,docs:{description:{component:C.getDescription()}}},argTypes:C.getWiki(),args:C.getValues()},D={render:e=>({components:{D1Image:_},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm">
        <D1Image v-bind="args"/>
      </div>
    `})},O={name:`Тип значения`,render:()=>({components:{D1Image:_},setup(){return{image1:o,demoPdf:u}},template:`
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
    `})},k={name:`Отображение`,render:()=>({components:{D1Image:_},setup(){return{image1:o}},template:`
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
    `})},A={name:`Использование тега img`,render:()=>({components:{D1Image:_},setup(){return{image1:o}},template:`
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
    `})},j={name:`Адаптированные изображения`,render:()=>({components:{D1Image:_},setup(){return{phone1:l,phone2:d,phone3:r}},template:`
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
    `})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`Image`,`ImageType`,`ImageSize`,`ImageTagImg`,`ImageAdaptive`]}));N();export{D as Image,j as ImageAdaptive,k as ImageSize,A as ImageTagImg,O as ImageType,M as __namedExportsOrder,E as default,w as i,N as n,C as r,T as t};