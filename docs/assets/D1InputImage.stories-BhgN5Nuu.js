import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{$t as n,At as r,D as i,Ft as a,Gt as o,Ht as s,It as c,Jt as l,Pt as u,Rt as d,St as f,at as p,ct as m,mn as h,un as g}from"./library-ByXZ2YPj.js";import{_,a as ee,d as te,f as v,i as y,k as b,n as x,p as S,s as C,t as ne}from"./wiki-CfN0XtvQ.js";import{n as w,t as re}from"./AriaStaticInclude-B7pfWpnd-ByY5HQzX.js";import{n as ie,t as ae}from"./EnabledInclude-B0gdl7cf-DiP9Ssl-.js";import{a as oe,o as T}from"./D1Image-5qo3VLiP.js";import{n as se,t as ce}from"./TextInclude-BD6x3h_g-C2E9k1CV.js";import{i as le,n as ue,r as de,t as fe}from"./Actions-CSN9HE7d.js";import{n as pe,t as me}from"./D1Skeleton-fWB3UQoT.js";import{a as he,c as ge,i as _e,n as ve,o as ye,r as be,s as xe,t as Se}from"./FieldEventInclude-BEzUXSC7-DQCg0EbD.js";import{n as Ce,t as we}from"./FieldElementInclude-DtbsjT9i-DFR3iNr_.js";import{i as Te,n as Ee,r as De,t as Oe}from"./FieldMessage-DLdGpQfO.js";import{i as ke,n as Ae,r as je,t as Me}from"./Dropzone-D6Lv-H2i.js";import{i as Ne,n as Pe,r as Fe,t as Ie}from"./FieldLabel-BCFuMzZE.js";import{i as Le,n as Re,r as ze,t as Be}from"./ImageCrop-DGE_1cm3.js";var E,D,O,k,A,j;function M(){return(M=e((()=>{re(),se(),ae(),oe(),de(),he(),Ce(),Te(),je(),Ne(),ze(),r(),b(),E=class{files;dropzone;event;constructor(e,t,n){this.files=e,this.dropzone=t,this.event=n}open=()=>{this.dropzone.expose.open?.()};onCropResize=e=>{this.files.setCrop(e.coordinator),this.event.onValue()};onDropzoneInput=async(e,t)=>{await this.files.setFiles(t.value),this.event.onAndChange(e)}},D=class{props;value;file=g();constructor(e,t){this.props=e,this.value=t}get crop(){return this.get()?.crop}get src(){return this.get()?.value}get(){let e=this.value.item.value;if(m(e)&&e)return{value:e,crop:this.props.crop};if(p(e))return e}hasImage(){return!!this.src}setCrop(e){let t=this.get();t&&this.updateValue({...t,crop:e})}async setFile(e){if(this.file.value=e,!e)return;let t=await this.processFile(e);if(t){let n=await this.getDimensions(t);return this.updateValue({value:t,name:e.name,type:e.type,size:e.size,width:n?.width,height:n?.height,lastModified:e.lastModified,crop:this.props.crop,file:e}),t}this.file.value=void 0}async setFiles(e){if(e&&e.length>0)return this.setFile(e[0])}async getDimensions(e){let t=await T.createImage(e);if(p(t)&&`width`in t&&`height`in t)return{width:t.width,height:t.height}}async processFile(e){if(!T.isImage(e)||this.props.maxFileSize&&e.size>this.props.maxFileSize)return;let t=await T.getImageDataUrl(e);if(t)return f(t,this.props.maxPixel??1280)}updateValue(e){this.value.item.value=e}},O=class{props;files;fileSize=g();item=g();constructor(e,t){this.props=e,this.files=t,n([()=>this.files.src,()=>this.files.file?.value],this.update),o(this.update)}get(){return this.item.value}isCounter(){switch(this.props.counterType){case`hide`:return!1;case`pixel`:return!!(this.props.maxPixel||this.get());case`size`:return!!(this.props.maxFileSize||this.getFileSize());default:return this.isFileSize()?!!(this.props.maxFileSize||this.getFileSize()):!!(this.props.maxPixel||this.get()||this.getFileSize())}}isFileSize(){return!(!this.props.maxFileSize||this.props.maxPixel)}getCounter(){switch(this.props.counterType){case`hide`:return;case`pixel`:return this.get();case`size`:return this.getFileSize();default:return this.isFileSize()?this.getFileSize():this.get()??this.getFileSize()}}getExtra=()=>({counter:this.getCounter(),maxlength:this.getMaxlength(),counterShow:this.isCounter()});getFileSize(){return this.fileSize.value}getMaxlength(){switch(this.props.counterType){case`hide`:return;case`pixel`:return this.props.maxPixel;case`size`:return this.props.maxFileSize;default:return this.isFileSize()?this.props.maxFileSize:this.props.maxPixel}}setFileSize(e,t){if(t){this.fileSize.value=t.size;return}if(e?.startsWith(`data:`)){let t=e.split(`,`)[1];if(t){let e=t.endsWith(`==`)?2:+!!t.endsWith(`=`);this.fileSize.value=Math.max(0,Math.floor(t.length*3/4)-e);return}}this.fileSize.value=void 0}async setSize(e){if(e){let t=await T.createImage(e);if(p(t)&&`width`in t&&`height`in t){this.item.value=Math.max(t.width,t.height);return}}this.item.value=void 0}update=async([e,t]=[this.files.src,this.files.file?.value])=>{this.setFileSize(e,t),await this.setSize(e)};async init(e,t){await this.update([e,t])}},k=class{props;element;naming;components;slots;emits;actions;attributes;change;code;dropzone;elementItem;enabled;event;files;imageCrop;eventItem;label;message;size;text;validation;form;value;constructor(e,t,n,r,i,a,o={}){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a;let{ActionsIncludeConstructor:s=le,DropzoneIncludeConstructor:c=ke,EnabledConstructor:l=ie,FieldAttributesIncludeConstructor:u=ge,FieldChangeIncludeConstructor:d=_e,FieldCodeIncludeConstructor:f=xe,FieldElementIncludeConstructor:p=we,FieldEventIncludeConstructor:m=be,FieldFormIncludeConstructor:h=ye,FieldLabelConstructor:g=Fe,FieldMessageConstructor:_=De,FieldValidationIncludeConstructor:ee=ve,FieldValueIncludeConstructor:te=Se,ImageCropIncludeConstructor:v=Le,InputImageEventConstructor:y=E,InputImageFilesConstructor:b=D,InputImageSizeConstructor:x=O,TextIncludeConstructor:S=ce}=o;this.change=new d(this.props),this.elementItem=new p(this.props,this.element),this.attributes=new u(this.props,void 0,void 0,void 0,`file`),this.value=new te(this.props,this.elementItem),this.code=new f(this.props),this.validation=new ee(this.props,this.attributes,this.value,this.change,this.code),this.form=new h(this.props,this.value,this.validation),this.event=new m(this.props,this.change,this.value,this.validation,this.emits,this.form),this.files=new b(this.props,this.value),this.size=new x(this.props,this.files),this.enabled=new l(e),this.text=new S(this.props),this.dropzone=new c(this.naming,this.props,this.components,()=>({accept:this.props.accept,disabled:this.props.disabled,readonly:this.props.readonly,isSkeleton:this.props.isSkeleton,inputAttrs:this.attributes.listForInput,onInput:this.eventItem.onDropzoneInput})),this.eventItem=new y(this.files,this.dropzone,this.event),this.label=new g(this.naming,this.props,this.components,()=>({...this.size.getExtra(),isSkeleton:this.props.isSkeleton}),void 0,void 0,()=>this.size.isCounter()),this.message=new _(this.naming,this.props,this.components,void 0,void 0,()=>this.validation.message),this.imageCrop=new v(this.naming,this.props,this.components,()=>({value:this.files.crop,image:this.files.src,disabled:this.props.disabled,readonly:this.props.readonly,onResize:this.eventItem.onCropResize})),this.actions=new s(this.naming,e,this.components,()=>({list:[{icon:this.props.iconUpload,label:this.text.change,onClick:this.eventItem.open},{icon:this.props.iconClose,label:this.text.cancel,onClick:this.event.onClear}]}))}get classes(){return{[this.naming.getStatusClass(`hasImage`)]:this.files.hasImage()}}},A=class extends _{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{...this.item.value.expose(),...this.item.validation.expose(),open:this.item.eventItem.open,clear:()=>this.item.event.onClear()}}initClasses(){return{main:this.item.classes,body:this.naming.getSubClass(`body`),crop:this.naming.getSubClass(`crop`),dropzone:this.naming.getSubClass(`dropzone`),actions:this.naming.getSubClass(`actions`)}}initStyles(){return{}}initRender(){return d(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...w.labelledby(this.item.label.id),...w.describedby(this.item.message.id)},[...this.item.label.render(this.slots),...this.renderBody(),...this.renderActions(),...this.item.message.render()])}renderActions=()=>this.item.files.hasImage()&&!this.props.disabled&&!this.props.readonly?this.item.actions.render(void 0,{class:this.classes?.value.actions}):[];renderBody=()=>[d(`div`,{class:this.classes?.value.body},[...this.renderCrop(),...this.renderDropzone()])];renderCrop=()=>this.item.files.hasImage()?this.item.imageCrop.render(void 0,{class:this.classes?.value.crop}):[];renderDropzone=()=>this.item.dropzone.render(void 0,{class:this.classes?.value.dropzone})},j={accept:`image/*`,counterType:`auto`}})))()}var N,P;function F(){return(F=e((()=>{M(),N={size:[`sm`,`md`,`lg`]},P={...j,iconUpload:`edit`,iconClose:`close`,size:`md`}})))()}var I;function L(){return(L=e((()=>{r(),b(),M(),ue(),Ae(),Pe(),Ee(),Re(),F(),I=c({name:`D1InputImage`,__name:`D1InputImage`,props:s({actionsHide:{type:Boolean},actionsAttrs:{},dropzoneLabel:{},dropzoneDescription:{},dropzoneIcon:{},dropzoneAttrs:{},readonly:{type:Boolean},disabled:{type:Boolean},modelValue:{},"onUpdate:value":{type:Function},"onUpdate:modelValue":{type:Function},placeholder:{},value:{},detail:{},name:{},id:{},required:{type:Boolean},autofocus:{type:Boolean},tabindex:{},form:{},validationCode:{},validationMessage:{},match:{},inputAttrs:{},minlength:{},maxlength:{},autocomplete:{},autocapitalize:{},inputMode:{},enterKeyHint:{},spellcheck:{type:[Boolean,String]},autocorrect:{},multiple:{type:Boolean},accept:{},capture:{type:[String,Boolean]},maxFileSize:{},label:{},labelId:{},counter:{},counterShow:{type:Boolean},counterTemplate:{},counterId:{},fieldCounterAttrs:{},fieldLabelAttrs:{},forceShowMessage:{type:Boolean},hasHtmlCode:{type:Boolean},helperMessage:{},fieldMessageAttrs:{},helperId:{},validationId:{},imageCropAttrs:{},isSkeleton:{type:Boolean},textCancel:{type:[String,Function]},textChange:{type:[String,Function]},counterType:{},crop:{},maxPixel:{},iconUpload:{},iconClose:{},size:{}},P),emits:[`update:value`,`update:modelValue`,`input`,`inputLite`,`change`,`changeLite`],setup(e,{expose:t,emit:n}){let r=n,o=e,s=u(()=>({main:{"d1-inputImage":!0,"d1-inputImage--disabled":o.disabled,"d1-inputImage--readonly":o.readonly,[`d1-inputImage--size--${o.size}`]:i(N.size,o.size)}})),c=u(()=>({})),d=new A(`d1.inputImage`,o,{emits:r,classes:s,styles:c,components:{actions:fe,dropzone:Me,fieldLabel:Ie,fieldMessage:Oe,imageCrop:Be},compMod:{actions:{flexible:`adaptiveSm`,buttonAttrs:{size:`xs`,secondary:!0,palette:`neutral`},paddingByIndent:!1}}}),f=d.render();return t(d.expose()),(e,t)=>(l(),a(h(f)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1InputImage`,exportName:`default`,displayName:`D1InputImage`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/InputImage/D1InputImage.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{ne(),F(),B=[{name:`accept`,type:`string`},{name:`actionsAttrs`,type:`ConstrBind<ActionsProps>`},{name:`actionsHide`,type:`boolean`},{name:`autocapitalize`,type:`string`,option:[`off`,`none`,`sentences`,`words`,`characters`]},{name:`autocomplete`,type:`string`},{name:`autocorrect`,type:`string`,option:[`on`,`off`]},{name:`autofocus`,type:`boolean`},{name:`capture`,type:`string | boolean`},{name:`counter`,type:`string | number`},{name:`counterId`,type:`string`},{name:`counterShow`,type:`boolean`},{name:`counterTemplate`,type:`string`},{name:`counterType`,type:`string`,option:[`auto`,`pixel`,`size`,`hide`]},{name:`crop`,type:`CropAreaCoordinator`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`dropzoneAttrs`,type:`ConstrBind<DropzoneProps>`},{name:`dropzoneDescription`,type:`string | number`},{name:`dropzoneIcon`,type:`IconValue<IconProps>`},{name:`dropzoneLabel`,type:`NumberOrString`},{name:`enterKeyHint`,type:`string`,option:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},{name:`fieldCounterAttrs`,type:`ConstrBind<FieldCounterProps>`},{name:`fieldLabelAttrs`,type:`ConstrBind<FieldLabelProps>`},{name:`fieldMessageAttrs`,type:`ConstrBind<FieldMessageProps>`},{name:`forceShowMessage`,type:`boolean`},{name:`form`,type:`string`},{name:`hasHtmlCode`,type:`boolean`},{name:`helperId`,type:`string`},{name:`helperMessage`,type:`string`},{name:`iconClose`,type:`string`},{name:`iconUpload`,type:`string`},{name:`id`,type:`string | number`},{name:`imageCropAttrs`,type:`ConstrBind<ImageCropProps>`},{name:`inputAttrs`,type:`Record<string, any>`},{name:`inputMode`,type:`string`,option:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`match`,type:`FieldMatch`},{name:`maxFileSize`,type:`number`},{name:`maxlength`,type:`string | number`},{name:`maxPixel`,type:`number`},{name:`minlength`,type:`NumberOrString`},{name:`modelValue`,type:`InputImageItem`},{name:`multiple`,type:`boolean`},{name:`name`,type:`string`},{name:`onUpdate:modelValue`,type:`((value: InputImageItem) => void)`},{name:`onUpdate:value`,type:`((value: InputImageItem) => void)`},{name:`placeholder`,type:`string`},{name:`readonly`,type:`boolean`},{name:`required`,type:`boolean`},{name:`size`,type:`string`,option:[`sm`,`md`,`lg`]},{name:`spellcheck`,type:`string`,option:[`true`,`false`]},{name:`tabindex`,type:`number`},{name:`textCancel`,type:`TextValue`},{name:`textChange`,type:`TextValue`},{name:`validationCode`,type:`FieldValidityCode`},{name:`validationId`,type:`string`},{name:`validationMessage`,type:`string`},{name:`value`,type:`InputImageItem`}],V=[{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[{name:`change`,description:`Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<FieldFileValue>`}]},{name:`changeLite`,description:`Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<FieldFileValue>`}]},{name:`input`,description:`Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`,properties:[{name:`event`,type:`InputEvent | Event`},{name:`value`,type:`FieldValidationItem<FieldFileValue>`}]},{name:`inputLite`,description:`Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`,properties:[{name:`value`,type:`FieldValidationItem<FieldFileValue>`}]},{name:`update:modelValue`,description:`Update model value event/ Событие обновления значения модели`,properties:[{name:`value`,type:`FieldFileValue`}]},{name:`update:value`,description:`Update value event/ Событие обновления значения`,properties:[{name:`value`,type:`FieldFileValue`}]}],U={component:`InputImage`,props:B,slots:V,events:H,defaults:P,wikiDesign:x}})))()}var G;function K(){return(K=e((()=>{v(),C(),W(),G=new te(U.component,U.props,U.defaults,U.wikiDesign,ee,S)})))()}var Ve=t({InputImage:()=>J,InputImageCounter:()=>X,InputImageSkeleton:()=>Z,InputImageSlots:()=>Q,InputImageVModel:()=>Y,__namedExportsOrder:()=>He,default:()=>q}),q,J,Y,X,Z,Q,He;function $(){return($=e((()=>{z(),K(),pe(),r(),C(),q={title:`Ui/InputImage`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={render:e=>({components:{D1InputImage:R},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
        <D1InputImage v-bind="args"/>
      </div>
    `})},Y={name:`Двусторонняя привязка (v-model)`,render:()=>({components:{D1InputImage:R},setup(){return{image1:y,value:g({value:y,crop:[10,15,10,15]})}},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current crop: {{ value?.crop }}</span>
            <button class="wiki-storybook-button" @click="value = undefined">Clear</button>
            <button class="wiki-storybook-button" @click="value = { value: image1, crop: [20, 20, 20, 20] }">Reset crop</button>
          </div>

          <D1InputImage
            label="User avatar"
            helperMessage="Drop an image here or click to select"
            v-model="value"
          />
        </div>
    `})},X={name:`Счетчик и ограничения`,render:()=>({components:{D1InputImage:R},setup(){return{image1:y,pixelValue:g({value:y,crop:[5,5,5,5]}),sizeValue:g({value:y,crop:[10,10,10,10]})}},template:`
        <div class="wiki-storybook-flex-column">
          <D1InputImage
            label="Pixel dimension counter (max 1920px)"
            helperMessage="Displays image pixel dimension and maxPixel limit"
            counterType="pixel"
            :maxPixel="1920"
            v-model="pixelValue"
          />
          <D1InputImage
            label="File size counter (max 5MB)"
            helperMessage="Displays file size in bytes and maxFileSize limit"
            counterType="size"
            :maxFileSize="5242880"
            v-model="sizeValue"
          />
        </div>
    `})},Z={name:`Скелетон`,render:()=>({components:{D1InputImage:R,D1Skeleton:me},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <D1InputImage isSkeleton />
          </div>
        </D1Skeleton>
    `})},Q={name:`Использование слотов`,render:()=>({components:{D1InputImage:R},template:`
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
          <D1InputImage>
            <template #label>
              <strong>Custom Image Uploader Label</strong>
            </template>
          </D1InputImage>
        </div>
    `})},He=[`InputImage`,`InputImageVModel`,`InputImageCounter`,`InputImageSkeleton`,`InputImageSlots`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1InputImage
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
        <D1InputImage v-bind="args"/>
      </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Двусторонняя привязка (v-model)',
  render: () => ({
    components: {
      D1InputImage
    },
    setup() {
      return {
        image1,
        value: ref({
          value: image1,
          crop: [10, 15, 10, 15]
        })
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-flex-align-center">
            <span>Current crop: {{ value?.crop }}</span>
            <button class="wiki-storybook-button" @click="value = undefined">Clear</button>
            <button class="wiki-storybook-button" @click="value = { value: image1, crop: [20, 20, 20, 20] }">Reset crop</button>
          </div>

          <D1InputImage
            label="User avatar"
            helperMessage="Drop an image here or click to select"
            v-model="value"
          />
        </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Счетчик и ограничения',
  render: () => ({
    components: {
      D1InputImage
    },
    setup() {
      return {
        image1,
        pixelValue: ref({
          value: image1,
          crop: [5, 5, 5, 5]
        }),
        sizeValue: ref({
          value: image1,
          crop: [10, 10, 10, 10]
        })
      };
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1InputImage
            label="Pixel dimension counter (max 1920px)"
            helperMessage="Displays image pixel dimension and maxPixel limit"
            counterType="pixel"
            :maxPixel="1920"
            v-model="pixelValue"
          />
          <D1InputImage
            label="File size counter (max 5MB)"
            helperMessage="Displays file size in bytes and maxFileSize limit"
            counterType="size"
            :maxFileSize="5242880"
            v-model="sizeValue"
          />
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1InputImage,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
            <D1InputImage isSkeleton />
          </div>
        </D1Skeleton>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1InputImage
    },
    template: \`
        <div class="wiki-storybook-item wiki-storybook-item--widescreen wiki-storybook-item--squared--sm wiki-storybook-item--borderNone">
          <D1InputImage>
            <template #label>
              <strong>Custom Image Uploader Label</strong>
            </template>
          </D1InputImage>
        </div>
    \`
  })
}`,...Q.parameters?.docs?.source}}}})))()}export{Q as a,G as c,Z as i,K as l,J as n,Y as o,X as r,$ as s,Ve as t};