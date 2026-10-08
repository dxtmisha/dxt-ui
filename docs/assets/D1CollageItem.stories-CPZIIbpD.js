import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n,f as r,i,n as a,s as o,t as s,u as c}from"./wiki-Cqdd-d3l.js";import{i as l,n as u,r as d,t as f}from"./D1CollageItem-DAe0DnA1.js";var p,m,h,g;function _(){return(_=e((()=>{s(),l(),p=[{name:`collageBarAttrs`,type:`ConstrBind<CollageBarProps>`},{name:`collageBarPosition`,type:`string`,option:[`top`,`bottom`,`static`]},{name:`compact`,type:`boolean`},{name:`coordinator`,type:`number[] | any`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`detail`,type:`Record<string, any>`},{name:`focus`,type:`boolean`},{name:`href`,type:`string`},{name:`iconCheck`,type:`IconValue<IconProps>`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`index`,type:`string | number`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`size`,type:`string`,option:[`auto`,`contain`,`cover`]},{name:`span`,type:`string`,option:[`standard`,`banner`,`huge`,`large`,`tall`,`wide`]},{name:`tag`,type:`string`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`value`,type:`EventClickValue['value']`},{name:`x`,type:`string | number`},{name:`y`,type:`string | number`}],m=[{name:`barBody`,description:`Body slot forwarded to the bar / Слот тела, передаваемый в панель`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`barTrailing`,description:`Trailing slot forwarded to the bar / Замыкающий слот, передаваемый в панель`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Triggered when the image is loaded / Вызывается при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],g={component:`CollageItem`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})))()}var v;function y(){return(y=e((()=>{n(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,i,r)})))()}var b=t({CollageItem:()=>S,CollageItemSpans:()=>C,ImageSize:()=>w,__namedExportsOrder:()=>T,default:()=>x}),x,S,C,w,T;function E(){return(E=e((()=>{u(),y(),x={title:`Ui/CollageItem`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1CollageItem:f},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-container">
      <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
        <D1CollageItem v-bind="args"/>
      </div>
    </div>
    `})},C={name:`Варианты Bento-охвата`,render:()=>({components:{D1CollageItem:f},template:`
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <D1CollageItem
              image="https://picsum.photos/800/600?random=42"
              span="wide"
              collageBarPosition="static"
              label="Standard Position"
              description="Static bar placed below the image"
              :collageBarAttrs="{ button: 'Explore' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=43"
              span="wide"
              selected
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=44"
              span="tall"
              collageBarPosition="top"
              label="Vertical Panorama"
              description="Top overlay bar"
              :collageBarAttrs="{ icon: 'bookmark' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=45"
              span="huge"
              collageBarPosition="bottom"
              label="Huge Showcase (Enlarged 3x2)"
              description="3 columns x 2 rows enlarged element with action button"
              :collageBarAttrs="{ button: 'Explore Project' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=47"
              span="large"
              collageBarPosition="static"
              label="Large Card"
              description="2 columns x 2 rows with static caption bar"
              :collageBarAttrs="{ button: 'Details' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=48"
              span="standard"
              collageBarPosition="top"
              selected
              label="Top Label"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=49"
              span="standard"
              selected
              collageBarPosition="bottom"
              label="Active"
              :collageBarAttrs="{ icon: 'favorite' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=50"
              span="wide"
              collageBarPosition="bottom"
              label="Wide Banner"
              description="2 columns x 1 row bottom bar"
              :collageBarAttrs="{ button: 'Open' }"
            />
          </div>
        </div>
    `})},w={name:`Отображение`,render:()=>({components:{D1CollageItem:f},template:`
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              size="cover"
              collageBarPosition="static"
              label="size: cover (default)"
              description="Fills container, cropping overflow"
            />
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              size="contain"
              collageBarPosition="static"
              label="size: contain"
              description="Scales image to fit within bounds"
            />
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              size="auto"
              collageBarPosition="static"
              label="size: auto"
              description="Displays image without scaling"
            />
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              :coordinator="[60, 10, 10, 40]"
              collageBarPosition="static"
              label="coordinator"
              description="Crops to specified coordinate bounds"
            />
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              x="20%"
              y="-10%"
              collageBarPosition="static"
              label="x, y offset"
              description="Custom coordinate shift along axes"
            />
          </div>
        </div>
    `})},T=[`CollageItem`,`CollageItemSpans`,`ImageSize`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1CollageItem
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-container">
      <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
        <D1CollageItem v-bind="args"/>
      </div>
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Варианты Bento-охвата',
  render: () => ({
    components: {
      D1CollageItem
    },
    template: \`
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <D1CollageItem
              image="https://picsum.photos/800/600?random=42"
              span="wide"
              collageBarPosition="static"
              label="Standard Position"
              description="Static bar placed below the image"
              :collageBarAttrs="{ button: 'Explore' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=43"
              span="wide"
              selected
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=44"
              span="tall"
              collageBarPosition="top"
              label="Vertical Panorama"
              description="Top overlay bar"
              :collageBarAttrs="{ icon: 'bookmark' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=45"
              span="huge"
              collageBarPosition="bottom"
              label="Huge Showcase (Enlarged 3x2)"
              description="3 columns x 2 rows enlarged element with action button"
              :collageBarAttrs="{ button: 'Explore Project' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=47"
              span="large"
              collageBarPosition="static"
              label="Large Card"
              description="2 columns x 2 rows with static caption bar"
              :collageBarAttrs="{ button: 'Details' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=48"
              span="standard"
              collageBarPosition="top"
              selected
              label="Top Label"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=49"
              span="standard"
              selected
              collageBarPosition="bottom"
              label="Active"
              :collageBarAttrs="{ icon: 'favorite' }"
            />
            <D1CollageItem
              image="https://picsum.photos/800/600?random=50"
              span="wide"
              collageBarPosition="bottom"
              label="Wide Banner"
              description="2 columns x 1 row bottom bar"
              :collageBarAttrs="{ button: 'Open' }"
            />
          </div>
        </div>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Отображение',
  render: () => ({
    components: {
      D1CollageItem
    },
    template: \`
        <div class="wiki-storybook-container">
          <div class="wiki-storybook-group wiki-storybook-group--col4 wiki-storybook-group--squared">
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              size="cover"
              collageBarPosition="static"
              label="size: cover (default)"
              description="Fills container, cropping overflow"
            />
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              size="contain"
              collageBarPosition="static"
              label="size: contain"
              description="Scales image to fit within bounds"
            />
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              size="auto"
              collageBarPosition="static"
              label="size: auto"
              description="Displays image without scaling"
            />
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              :coordinator="[60, 10, 10, 40]"
              collageBarPosition="static"
              label="coordinator"
              description="Crops to specified coordinate bounds"
            />
            <D1CollageItem
              image="https://picsum.photos/800/400?random=55"
              x="20%"
              y="-10%"
              collageBarPosition="static"
              label="x, y offset"
              description="Custom coordinate shift along axes"
            />
          </div>
        </div>
    \`
  })
}`,...w.parameters?.docs?.source}}}})))()}export{E as a,w as i,C as n,v as o,b as r,y as s,S as t};