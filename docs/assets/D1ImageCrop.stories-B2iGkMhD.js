import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{in as n,kt as r}from"./library-CO1fW2cN.js";import{d as i,f as a,i as o,l as s,n as c,o as l,t as u,u as d}from"./wiki-BMj2WokS.js";import{i as f,n as p,r as m,t as h}from"./D1ImageCrop-diU8ayUN.js";var g,_,v,y;function b(){return(b=e((()=>{u(),f(),g=[{name:`alt`,type:`string`},{name:`cropAreaAttrs`,type:`ConstrBind<CropAreaProps>`},{name:`disabled`,type:`boolean`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`modelValue`,type:`Value`},{name:`onUpdate:modelValue`,type:`((value: any) => void)`},{name:`onUpdate:value`,type:`((value: any) => void)`},{name:`readonly`,type:`boolean`},{name:`value`,type:`CropAreaCoordinator`}],_=[{name:`default`,description:`Default slot / Слот по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]}],v=[{name:`load`,description:`Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]},{name:`resize`,description:`Event emitted during resizing or moving / Событие, вызываемое при изменении размера или перемещении`,properties:[{name:`parameters`,type:`CropAreaEventParameters`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`any`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`any`}]}],y={component:`ImageCrop`,props:g,slots:_,events:v,defaults:m,wikiDesign:c}})))()}var x;function S(){return(S=e((()=>{i(),s(),b(),x=new d(y.component,y.props,y.defaults,y.wikiDesign,o,a)})))()}var C=t({ImageCrop:()=>T,ImageCropVModel:()=>E,__namedExportsOrder:()=>D,default:()=>w}),w,T,E,D;function O(){return(O=e((()=>{p(),S(),r(),s(),w={title:`Ui/ImageCrop`,component:h,parameters:{design:`d1`,docs:{description:{component:x.getDescription()}}},argTypes:x.getWiki(),args:x.getValues()},T={render:e=>({components:{D1ImageCrop:h},setup:()=>({args:e}),template:`
      <D1ImageCrop
      class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
      v-bind="args"
    />
    `})},E={name:`v-model`,render:()=>({components:{D1ImageCrop:h},setup(){return{image1:l,coordinator:n([15,20,15,20])}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Coordinates [top, right, bottom, left]: {{ coordinator }}</span>
            <button class="wiki-storybook-button" @click="coordinator = [25, 25, 25, 25]">Center 50%</button>
            <button class="wiki-storybook-button" @click="coordinator = [0, 0, 0, 0]">Reset</button>
          </div>

          <D1ImageCrop
            class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
            :image="image1"
            v-model="coordinator"
          />
        </div>
    `})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1ImageCrop
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1ImageCrop
      class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
      v-bind="args"
    />
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'v-model',
  render: () => ({
    components: {
      D1ImageCrop
    },
    setup() {
      return {
        image1,
        coordinator: ref([15, 20, 15, 20])
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Coordinates [top, right, bottom, left]: {{ coordinator }}</span>
            <button class="wiki-storybook-button" @click="coordinator = [25, 25, 25, 25]">Center 50%</button>
            <button class="wiki-storybook-button" @click="coordinator = [0, 0, 0, 0]">Reset</button>
          </div>

          <D1ImageCrop
            class="wiki-storybook-item wiki-storybook-item--rectangle wiki-storybook-item--overflowVisible wiki-storybook-dummy--color--blue"
            :image="image1"
            v-model="coordinator"
          />
        </div>
    \`
  })
}`,...E.parameters?.docs?.source}}},D=[`ImageCrop`,`ImageCropVModel`]})))()}export{x as a,O as i,T as n,S as o,E as r,C as t};