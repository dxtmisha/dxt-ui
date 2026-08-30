import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{in as n,kt as r}from"./library-CO1fW2cN.js";import{d as i,f as a,i as o,l as s,n as c,t as l,u}from"./wiki-BMj2WokS.js";import{n as d,t as f}from"./D1Skeleton-0ed2Yx2u.js";import{i as p,n as m,r as h,t as g}from"./D1Dropzone-BGPdsxQm.js";var _,v,y,b;function x(){return(x=e((()=>{l(),p(),_=[{name:`accept`,type:`string`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`disabled`,type:`boolean`},{name:`icon`,type:`IconValue<IconProps>`},{name:`iconAttrs`,type:`ConstrBind<IconProps>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`inputAttrs`,type:`ConstrBind<HTMLInputElement>`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`modelFiles`,type:`FileList`},{name:`multiple`,type:`boolean`},{name:`onUpdate:files`,type:`((value: FileList ) => void) | undefined`},{name:`onUpdate:modelFiles`,type:`((value: FileList ) => void) | undefined`},{name:`readonly`,type:`boolean`},{name:`selected`,type:`boolean`},{name:`textDropzone`,type:`TextValue`}],v=[{name:`default`,description:`Default slot / Слот по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]}],y=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<FileList | undefined>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<FileList | undefined>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<FileList | undefined>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<FileList | undefined>`}]},{name:`update:files`,description:`Update files event/ Событие обновления файлов`,properties:[{name:`value`,type:`FileList | undefined`}]},{name:`update:modelFiles`,description:`Update model files event/ Событие обновления файлов модели`,properties:[{name:`value`,type:`FileList | undefined`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`FileList | undefined`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`FileList | undefined`}]}],b={component:`Dropzone`,props:_,slots:v,events:y,defaults:h,wikiDesign:c}})))()}var S;function C(){return(C=e((()=>{i(),s(),x(),S=new u(b.component,b.props,b.defaults,b.wikiDesign,o,a)})))()}var w=t({Dropzone:()=>E,DropzoneSkeleton:()=>O,DropzoneSlots:()=>k,DropzoneVModel:()=>D,__namedExportsOrder:()=>A,default:()=>T}),T,E,D,O,k,A;function j(){return(j=e((()=>{m(),C(),d(),r(),T={title:`Ui/Dropzone`,component:g,parameters:{design:`d1`,docs:{description:{component:S.getDescription()}}},argTypes:S.getWiki(),args:S.getValues()},E={render:e=>({components:{D1Dropzone:g},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
        <D1Dropzone v-bind="args"/>
      </div>
    `})},D={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1Dropzone:g},setup(){return{files:n()}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Files count: {{ files?.length || 0 }}</span>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <D1Dropzone
              v-model:files="files"
              label="Drop files here or click to upload"
              description="PNG, JPG up to 10MB"
              icon="upload"
            />
          </div>
        </div>
    `})},O={name:`Скелетон`,render:()=>({components:{D1Dropzone:g,D1Skeleton:f},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <D1Dropzone isSkeleton />
          </div>
        </D1Skeleton>
    `})},k={name:`Использование слотов`,render:()=>({components:{D1Dropzone:g},template:`
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
          <D1Dropzone icon="upload">
            <template #default>
              <strong>Custom Upload Title</strong>
            </template>
            <template #description>
              <em>Custom description text</em>
            </template>
          </D1Dropzone>
        </div>
    `})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Dropzone
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
        <D1Dropzone v-bind="args"/>
      </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1Dropzone
    },
    setup() {
      return {
        files: ref()
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex">
            <span class="wiki-storybook-item__label wiki-storybook-item__label--static">Files count: {{ files?.length || 0 }}</span>
          </div>
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <D1Dropzone
              v-model:files="files"
              label="Drop files here or click to upload"
              description="PNG, JPG up to 10MB"
              icon="upload"
            />
          </div>
        </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Dropzone,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <D1Dropzone isSkeleton />
          </div>
        </D1Skeleton>
    \`
  })
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Dropzone
    },
    template: \`
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
          <D1Dropzone icon="upload">
            <template #default>
              <strong>Custom Upload Title</strong>
            </template>
            <template #description>
              <em>Custom description text</em>
            </template>
          </D1Dropzone>
        </div>
    \`
  })
}`,...k.parameters?.docs?.source}}},A=[`Dropzone`,`DropzoneVModel`,`DropzoneSkeleton`,`DropzoneSlots`]})))()}export{D as a,C as c,k as i,E as n,j as o,O as r,S as s,w as t};